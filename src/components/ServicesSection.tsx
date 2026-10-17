import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { content } from '../lib/content';
import { openOrDemo } from '../lib/actions';

const serif = { fontFamily: "'Instrument Serif', serif" };

export default function ServicesSection() {
  const { services } = content;

  return (
    <section id="services" className="relative overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-end justify-between md:mb-16"
        >
          <h2 className="text-3xl tracking-tight text-white md:text-5xl" style={serif}>
            {services.heading}
          </h2>
          <p className="hidden text-sm text-white/40 md:block">{services.label}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {services.cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="liquid-glass group overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                  <div className="video-fallback relative h-full w-full">
                    <video
                      src={card.video}
                      className="absolute inset-0 h-full w-full object-cover"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-white/40">{card.tag}</span>
                  <button
                    type="button"
                    onClick={() => openOrDemo(card.link)}
                    aria-label={`Open ${card.title}`}
                    className="liquid-glass rounded-full p-2 text-white transition-colors hover:bg-white/5"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </button>
                </div>
                <h3 className="mb-3 text-xl tracking-tight text-white md:text-2xl" style={serif}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">{card.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
