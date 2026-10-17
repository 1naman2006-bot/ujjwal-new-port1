type LoopVideoProps = {
  src: string;
  className?: string;
};

/** A muted looping background video with an animated fallback underneath. */
export default function LoopVideo({ src, className = '' }: LoopVideoProps) {
  return (
    <div className={`video-fallback relative h-full w-full ${className}`}>
      <video
        src={src}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
    </div>
  );
}
