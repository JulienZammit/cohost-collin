'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { PROCESS, CALENDLY } from '@/lib/site';
import { ArrowUpRight } from 'lucide-react';

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow text-coral">
                <span className="h-px w-8 bg-coral" /> How it works
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-serif mt-5 text-4xl font-light leading-[1.05] text-ink md:text-5xl">
                From key handover to{' '}
                <span className="italic text-alpine">cash flow</span> — in four steps
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-ink/65">
                A simple, transparent onboarding. You stay informed and completely hands-off
                the entire way.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a href={CALENDLY.consult15} target="_blank" rel="noopener noreferrer" className="btn-dark mt-8 !px-7 !py-3.5">
                Start step one <ArrowUpRight size={17} />
              </a>
            </Reveal>
          </div>

          <div className="relative">
            <span className="absolute left-[27px] top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-coral via-alpine/40 to-transparent sm:block" />
            <div className="space-y-5">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex gap-5 rounded-3xl border border-ink/8 bg-white p-6 transition-shadow duration-300 hover:shadow-soft sm:p-7"
                >
                  <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink text-cream transition-colors duration-300 group-hover:bg-coral">
                    <span className="display-serif text-xl font-semibold">{p.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                    <p className="mt-2 text-[0.975rem] leading-relaxed text-ink/65">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
