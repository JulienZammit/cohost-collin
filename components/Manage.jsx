'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import Topo from './Topo';
import { MANAGE_FEATURES, CALENDLY } from '@/lib/site';

export default function Manage() {
  return (
    <section id="manage" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32 noise-overlay">
      <Topo className="absolute inset-0 h-full w-full" stroke="#7FC4CF" opacity={0.1} />
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-alpine-500/20 blur-[130px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        {/* Left: image collage */}
        <Reveal from="right" className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-white/10">
            <Image
              src="/assets/img/property-deck.jpg"
              alt="Short-term rental deck with a mountain view"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-6 -right-4 w-44 rounded-2xl bg-coral p-5 text-white shadow-glow sm:-right-8"
          >
            <p className="display-serif text-4xl font-semibold leading-none">100%</p>
            <p className="mt-2 text-sm font-medium leading-tight text-white/90">Hands-off, passive income</p>
          </motion.div>
        </Reveal>

        {/* Right: copy + features */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow text-coral-400">
              <span className="h-px w-8 bg-coral-400" /> Manage
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-4xl font-light leading-[1.05] md:text-5xl">
              Hands-off, <span className="italic text-coral-400">100% passive</span> income
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/70">
              With my full-service STRategic co-hosting solution, your property becomes a
              passive income stream. I manage the guests, cleaners, and maintenance —
              you collect the cash flow.
            </p>
          </Reveal>

          <Stagger className="mt-9 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {MANAGE_FEATURES.map((f, i) => (
              <StaggerItem key={i} from="up">
                <div className="flex items-start gap-3 text-cream/85">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-coral/20 text-coral-400">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[0.95rem] leading-snug">{f}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <a
              href={CALENDLY.fullService}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 text-base !px-8 !py-4"
            >
              Manage my STR <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
