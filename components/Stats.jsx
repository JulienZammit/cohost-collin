'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import Topo from './Topo';
import { STATS } from '@/lib/site';

function Counter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value, mv]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="results" className="relative overflow-hidden bg-alpine-600 py-20 text-cream md:py-24">
      <Topo className="absolute inset-0 h-full w-full" stroke="#DCEEF1" opacity={0.14} />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-coral/30 blur-[120px]" />

      <div className="container-x relative">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-cream/70"
          >
            <span className="h-px w-8 bg-cream/50" /> By the numbers <span className="h-px w-8 bg-cream/50" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="display-serif mt-4 text-4xl font-light md:text-5xl"
          >
            Results your calendar can feel
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center"
            >
              <p className={`display-serif text-4xl font-semibold sm:text-5xl md:text-6xl ${s.accent ? 'text-coral-400' : 'text-cream'}`}>
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-cream/70">{s.label}</p>
              {i < STATS.length - 1 && (
                <span className="absolute -right-4 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-cream/15 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
