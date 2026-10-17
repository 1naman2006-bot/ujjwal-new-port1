import { useEffect, useRef } from 'react';

type HeroVideoProps = {
  src: string;
};

const FADE_MS = 500;

/**
 * Background video with a scripted crossfade to black between plays:
 * fade in on canplay, fade out in the last 0.55s, then restart and fade back in.
 * Opacity is driven with requestAnimationFrame (no CSS transitions).
 */
export default function HeroVideo({ src }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let frame = 0;
    let fadingOut = false;
    let restartTimer: number | undefined;

    const fadeTo = (target: number, duration = FADE_MS) => {
      cancelAnimationFrame(frame);
      const from = parseFloat(video.style.opacity || '0');
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        video.style.opacity = String(from + (target - from) * p);
        if (p < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const onCanPlay = () => {
      video.play().catch(() => undefined);
      fadingOut = false;
      fadeTo(1);
    };

    const onTimeUpdate = () => {
      if (!video.duration || fadingOut) return;
      if (video.duration - video.currentTime <= 0.55) {
        fadingOut = true;
        fadeTo(0);
      }
    };

    const onEnded = () => {
      cancelAnimationFrame(frame);
      video.style.opacity = '0';
      restartTimer = window.setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => undefined);
        fadingOut = false;
        fadeTo(1);
      }, 100);
    };

    video.style.opacity = '0';
    video.addEventListener('canplay', onCanPlay, { once: true });
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(restartTimer);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      className="absolute inset-0 h-full w-full object-cover object-bottom"
      style={{ opacity: 0 }}
      muted
      autoPlay
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
