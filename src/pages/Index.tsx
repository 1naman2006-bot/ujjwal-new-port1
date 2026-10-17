import { ArrowRight, Globe, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import HeroVideo from '../components/HeroVideo';
import AboutSection from '../components/AboutSection';
import FeaturedVideoSection from '../components/FeaturedVideoSection';
import PhilosophySection from '../components/PhilosophySection';
import ServicesSection from '../components/ServicesSection';
import DemoToast from '../components/DemoToast';
import { content } from '../lib/content';
import { emailOrDemo, openOrDemo, scrollToId } from '../lib/actions';

export default function Index() {
  const [email, setEmail] = useState('');
  const { hero } = content;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    emailOrDemo(email.trim() || undefined);
  };

  const socials = [
    { label: 'Instagram', Icon: Instagram, url: content.socials.instagram },
    { label: 'Twitter', Icon: Twitter, url: content.socials.twitter },
    { label: 'Website', Icon: Globe, url: content.socials.website },
  ];

  return (
    <div className="bg-black">
      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-screen flex-col overflow-hidden">
        <div className="video-fallback absolute inset-0 opacity-50" aria-hidden="true" />
        <HeroVideo src={hero.video} />

        {/* Navbar */}
        <header className="relative z-20 px-6 py-6">
          <nav className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3" aria-label="Primary">
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-2" aria-label={`${content.name} — home`}>
                <Globe size={24} className="text-white" aria-hidden="true" />
                <span className="text-lg font-semibold text-white">{content.name}</span>
              </a>
              <div className="ml-8 hidden items-center gap-8 md:flex">
                {content.nav.map((link) => (
                  <a
                    key={link.target}
                    href={`#${link.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(link.target);
                    }}
                    className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => scrollToId(content.navTextButton.target)} className="text-sm font-medium text-white">
                {content.navTextButton.label}
              </button>
              <button type="button" onClick={() => emailOrDemo()} className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white">
                {content.navGlassButton}
              </button>
            </div>
          </nav>
        </header>

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 -translate-y-[20%] flex-col items-center justify-center gap-8 px-6 py-12 text-center">
          <h1
            className="whitespace-nowrap text-7xl tracking-tight text-white md:text-8xl lg:text-9xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {hero.headingStart} <em className="italic">{hero.headingItalic}</em>
            {hero.headingEnd}
          </h1>

          <form onSubmit={onSubmit} className="w-full max-w-xl">
            <div className="liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2">
              <label htmlFor="hero-email" className="sr-only">
                Email address
              </label>
              <input
                id="hero-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={hero.emailPlaceholder}
                className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-white/40"
              />
              <button type="submit" className="rounded-full bg-white p-3 text-black transition-transform hover:scale-105" aria-label="Send">
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </form>

          <p className="max-w-xl px-4 text-sm leading-relaxed text-white">{hero.subtitle}</p>

          <button
            type="button"
            onClick={() => scrollToId('work')}
            className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            {hero.manifesto}
          </button>
        </div>

        {/* Social icons */}
        <div className="relative z-10 flex justify-center gap-4 pb-12">
          {socials.map(({ label, Icon, url }) => (
            <button
              key={label}
              type="button"
              onClick={() => openOrDemo(url)}
              aria-label={label}
              className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
            >
              <Icon size={20} aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>

      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/40">
        © 2026 {content.name} · Motion, Edit & VFX
      </footer>

      <DemoToast />
    </div>
  );
}
