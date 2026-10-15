'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { PLANS, CALENDLY } from '@/lib/site';

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-b from-sand-100 to-cream py-24 md:py-32">
      <div className="container-x relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-coral">
              <span className="h-px w-8 bg-coral" /> Plans &amp; pricing
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-balance text-4xl font-light leading-[1.05] text-ink md:text-5xl">
              Choose how we{' '}
              <span className="italic text-alpine">start together</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-ink/65">
              From a free intro call to full hands-off management — pick the level of support
              that fits where you are today.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] ${
                plan.featured
                  ? 'bg-ink text-cream shadow-lift ring-2 ring-coral'
                  : 'border border-ink/8 bg-white text-ink shadow-[0_1px_0_rgba(11,32,39,0.04)]'
              }`}
            >
              {/* Image header */}
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${plan.featured ? 'bg-gradient-to-t from-ink via-ink/40 to-transparent' : 'bg-gradient-to-t from-black/45 to-transparent'}`} />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider ${plan.featured ? 'bg-coral text-white shadow-glow' : 'bg-white/90 text-ink'}`}>
                  {plan.tagline}
                </span>
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <span className="display-serif text-3xl font-semibold text-white drop-shadow">{plan.price}</span>
                  <span className="text-xs font-medium text-white/80">/ {plan.period}</span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className={`text-lg font-bold leading-snug ${plan.featured ? 'text-cream' : 'text-ink'}`}>{plan.name}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${plan.featured ? 'text-cream/70' : 'text-ink/60'}`}>
                  {plan.description}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.9rem]">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${plan.featured ? 'bg-coral/25 text-coral-400' : 'bg-alpine-100 text-alpine'}`}>
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className={plan.featured ? 'text-cream/85' : 'text-ink/75'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CALENDLY[plan.href]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.featured
                      ? 'bg-coral text-white hover:shadow-glow'
                      : 'bg-ink text-cream hover:bg-ink-700'
                  }`}
                >
                  {plan.cta} <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
