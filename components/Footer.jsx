'use client';

import Image from 'next/image';
import { Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SOCIAL, CALENDLY, PARTNER } from '@/lib/site';

export default function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden bg-ink-900 pt-16 text-cream">
      <div className="container-x">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/img/logo.png"
              alt="Cohost Collin"
              width={170}
              height={78}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-cream/60">
              Full-service short-term rental co-hosting in Washington State. Earn more,
              worry less — your property, expertly hosted.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-coral-400 hover:text-coral-400">
                <Instagram size={19} />
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-coral-400 hover:text-coral-400">
                <Facebook size={19} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cream/40">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[0.95rem] text-cream/70 transition-colors hover:text-coral-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cream/40">Get started</p>
            <ul className="mt-5 space-y-3">
              <li><a href={CALENDLY.consult15} target="_blank" rel="noopener noreferrer" className="text-[0.95rem] text-cream/70 transition-colors hover:text-coral-400">Free 15-min consultation</a></li>
              <li><a href={CALENDLY.propertyAnalysis} target="_blank" rel="noopener noreferrer" className="text-[0.95rem] text-cream/70 transition-colors hover:text-coral-400">Property analysis</a></li>
              <li><a href={CALENDLY.fullService} target="_blank" rel="noopener noreferrer" className="text-[0.95rem] text-cream/70 transition-colors hover:text-coral-400">Full-service co-hosting</a></li>
              <li>
                <a href={PARTNER.maverick} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[0.95rem] text-cream/70 transition-colors hover:text-coral-400">
                  Maverick STR <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-7 text-sm text-cream/45 md:flex-row">
          <p>All rights reserved. All wrongs reversed. © {year} Cohost Collin Corporation.</p>
          <p className="flex items-center gap-1.5">
            Website by{' '}
            <a href={PARTNER.maverick} target="_blank" rel="noopener noreferrer" className="text-cream/70 underline-offset-4 transition-colors hover:text-coral-400 hover:underline">
              Maverickstr.co
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
