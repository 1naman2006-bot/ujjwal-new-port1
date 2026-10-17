import { motion } from 'framer-motion';
import { Fragment } from 'react';
import LoopVideo from './LoopVideo';
import { content } from '../lib/content';

const serif = { fontFamily: "'Instrument Serif', serif" };

export default function PhilosophySection() {
  const { philosophy } = content;

  return (
    <section className="overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-5xl tracking-tight text-white md:mb-24 md:text-7xl lg:text-8xl"
          style={serif}
        >
          {philosophy.left} <em className="italic text-white/40">x</em> {philosophy.right}
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <LoopVideo src={philosophy.video} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-center gap-10"
          >
            {philosophy.blocks.map((block, i) => (
              <Fragment key={block.label}>
                {i > 0 && <div className="h-px w-full bg-white/10" />}
                <div>
                  <p className="mb-4 text-xs uppercase tracking-widest text-white/40">{block.label}</p>
                  <p className="text-base leading-relaxed text-white/70 md:text-lg">{block.text}</p>
                </div>
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
