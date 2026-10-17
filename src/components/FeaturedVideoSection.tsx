import { motion } from 'framer-motion';
import LoopVideo from './LoopVideo';
import { content } from '../lib/content';
import { scrollToId } from '../lib/actions';

export default function FeaturedVideoSection() {
  const { featured } = content;

  return (
    <section id="work" className="overflow-hidden bg-black px-6 pb-20 pt-6 md:pb-32 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9 }}
          className="relative aspect-video overflow-hidden rounded-3xl"
        >
          <LoopVideo src={featured.video} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-10">
            <div className="liquid-glass max-w-md rounded-2xl p-6 md:p-8">
              <p className="mb-3 text-xs uppercase tracking-widest text-white/50">{featured.label}</p>
              <p className="text-sm leading-relaxed text-white md:text-base">{featured.text}</p>
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToId('services')}
              className="liquid-glass shrink-0 rounded-full px-8 py-3 text-sm font-medium text-white"
            >
              {featured.button}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
