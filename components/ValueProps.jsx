'use client';

import { motion } from 'framer-motion';
import { ConciergeBell, Cpu, ShieldCheck, Globe, MessagesSquare, Wrench } from 'lucide-react';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import Topo from './Topo';
import { VALUE_PROPS } from '@/lib/site';

const ICONS = [ConciergeBell, Cpu, ShieldCheck, Globe, MessagesSquare, Wrench];

export default function ValueProps() {
  return (
    <section id="services" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <Topo className="absolute -right-40 top-0 h-[600px] w-[900px]" opacity={0.08} />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-coral">
              <span className="h-px w-8 bg-coral" /> What you get
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-balance text-4xl font-light leading-[1.05] text-ink md:text-5xl">
              A true partner in your{' '}
              <span className="italic text-alpine">short-term rental</span> success
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-ink/65">
              Six pillars of full-service co-hosting — engineered to lift your revenue
              and hand you back your time.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((v, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <StaggerItem key={i}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-ink/8 bg-white p-8 shadow-[0_1px_0_rgba(11,32,39,0.04)] transition-shadow duration-300 hover:shadow-soft"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-alpine-100/60 blur-2xl transition-colors duration-500 group-hover:bg-coral-200/50" />
                  <div className="relative mb-6 inline-grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-alpine-600 to-ink text-cream shadow-soft transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                    <Icon size={28} strokeWidth={1.6} />
                    <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  </div>
                  <h3 className="relative text-xl font-bold text-ink">{v.title}</h3>
                  <p className="relative mt-3 text-[0.975rem] leading-relaxed text-ink/65">{v.body}</p>
                  <span className="relative mt-6 block h-px w-10 bg-coral/40 transition-all duration-300 group-hover:w-20" />
                </motion.article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
