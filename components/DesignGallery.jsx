'use client';

import Reveal from './Reveal';
import { GALLERY } from '@/lib/site';

// A curated, compact selection for the scrolling showcase
const FEATURED = GALLERY.slice(0, 14);

export default function DesignGallery() {
  const loop = [...FEATURED, ...FEATURED];
  return (
    <section id="portfolio" className="relative overflow-hidden bg-sand-100 py-24 md:py-28">
      <div className="container-x relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Reveal>
            <span className="eyebrow text-coral">
              <span className="h-px w-8 bg-coral" /> Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-balance text-4xl font-light leading-[1.05] text-ink md:text-5xl">
              Spaces designed to{' '}
              <span className="italic text-alpine">earn their keep</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg text-ink/65">
              A glimpse of interiors and remodels — styled, staged, and photographed to book.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Scrolling showcase */}
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          className="flex w-max gap-5 pl-5 animate-marquee [animation-direction:reverse] group-hover:[animation-play-state:paused]"
          style={{ animationDuration: '55s' }}
        >
          {loop.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-56 w-80 shrink-0 overflow-hidden rounded-2xl shadow-soft ring-1 ring-ink/5 md:h-64 md:w-96"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Cohost Collin interior design portfolio"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
