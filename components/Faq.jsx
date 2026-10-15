'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, CalendarCheck } from 'lucide-react';
import Reveal from './Reveal';
import { FAQ, CALENDLY } from '@/lib/site';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow text-coral">
              <span className="h-px w-8 bg-coral" /> FAQ
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-4xl font-light leading-[1.05] text-ink md:text-5xl">
              Questions, <span className="italic text-alpine">answered</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-sm text-lg text-ink/65">
              Everything you need to know before we work together. Still curious? The fastest
              answer is a quick call.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href={CALENDLY.consult15} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 !px-7 !py-3.5">
              <CalendarCheck size={17} /> Ask me anything
            </a>
          </Reveal>
        </div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-coral' : 'text-ink'}`}>
                    {item.q}
                  </span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen ? 'rotate-45 border-coral bg-coral text-white' : 'border-ink/15 text-ink'}`}>
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-[1.02rem] leading-relaxed text-ink/65">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
