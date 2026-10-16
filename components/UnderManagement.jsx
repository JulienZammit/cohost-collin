'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { PROPERTIES, AIRBNB_PROFILE } from '@/lib/site';

function PropertyCard({ p }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1.5 sm:w-[360px]"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={p.img}
          alt={`Short-term rental in ${p.location}`}
          fill
          sizes="360px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-ink shadow">
          <Star size={12} className="fill-coral text-coral" /> {p.rating}
          <span className="font-medium text-ink/55">({p.reviews})</span>
        </div>
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-cream">
          <MapPin size={15} className="text-coral-400" />
          <span className="text-base font-semibold drop-shadow">{p.location}</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <span className="text-sm text-cream/70">{p.specs}</span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-coral-400 transition-transform group-hover:translate-x-0.5">
          View <ArrowUpRight size={15} />
        </span>
      </div>
    </a>
  );
}

export default function UnderManagement() {
  const loop = [...PROPERTIES, ...PROPERTIES];
  return (
    <section id="properties" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32 noise-overlay">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-alpine-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-coral/15 blur-[130px]" />

      <div className="container-x relative">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow text-coral-400">
                <span className="h-px w-8 bg-coral-400" /> Under management
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-serif mt-5 text-4xl font-light leading-[1.05] md:text-5xl">
                Homes I already{' '}
                <span className="italic text-coral-400">host &amp; grow</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-cream/70">
                A live look at properties in the portfolio — each optimized, hosted, and
                consistently rated five stars. Tap any home to view its Airbnb listing.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="shrink-0">
            <a
              href={AIRBNB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 transition-colors hover:border-coral-400/60"
            >
              <Star size={18} className="fill-coral-400 text-coral-400" />
              <span className="text-sm font-semibold">
                Superhost · 4.92 avg rating · {PROPERTIES.length} homes
              </span>
              <ArrowUpRight size={15} className="text-coral-400" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* Carousel */}
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          className="flex w-max gap-5 pl-5 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ animationDuration: '90s' }}
        >
          {loop.map((p, i) => (
            <PropertyCard key={`${p.href}-${i}`} p={p} />
          ))}
        </div>
      </div>

      <div className="container-x relative mt-10 flex items-center justify-center gap-2 text-sm text-cream/40">
        <span className="h-px w-8 bg-cream/20" />
        Hover to pause · tap a card to open the listing
        <span className="h-px w-8 bg-cream/20" />
      </div>
    </section>
  );
}
