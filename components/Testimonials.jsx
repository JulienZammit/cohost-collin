'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Reveal from './Reveal';
import { TESTIMONIALS } from '@/lib/site';

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream md:py-32 noise-overlay">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-coral/20 blur-[130px]" />

      <div className="container-x relative">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-coral-400">
              <span className="h-px w-8 bg-coral-400" /> Testimonials
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-4xl font-light leading-[1.05] md:text-5xl">
              Owners who chose to{' '}
              <span className="italic text-coral-400">worry less</span>
            </h2>
          </Reveal>
        </div>

        {/* Feature: big image + primary quote */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <Reveal from="right" className="relative min-h-[340px] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <Image
              src="/assets/img/lifestyle-fireplace.jpg"
              alt="A couple relaxing by the fireplace in a cozy short-term rental"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="mb-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-coral-400 text-coral-400" />
                ))}
              </div>
              <p className="display-serif text-2xl font-light italic leading-tight text-cream">
                “Stress-free from the very first stay.”
              </p>
            </div>
          </Reveal>

          <Reveal from="left" className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-12">
            <Quote size={44} className="text-coral-400/70" />
            <p className="mt-5 text-xl font-light leading-relaxed text-cream/90 md:text-2xl">
              {TESTIMONIALS[0].quote}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-coral text-lg font-bold text-white">
                D&amp;L
              </div>
              <div>
                <p className="font-bold text-cream">{TESTIMONIALS[0].name}</p>
                <p className="text-sm text-cream/60">{TESTIMONIALS[0].role}</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Secondary quote */}
        <Reveal delay={0.1}>
          <motion.div className="mx-auto mt-6 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur md:p-10">
            <p className="display-serif text-lg font-light italic leading-relaxed text-cream/85 md:text-xl">
              “{TESTIMONIALS[1].quote}”
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-coral-400">
              {TESTIMONIALS[1].name} · {TESTIMONIALS[1].role}
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
