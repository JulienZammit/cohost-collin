'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import { DESIGN_FEATURES, DESIGN_SERVICES, CALENDLY } from '@/lib/site';

const GALLERY = [
  { src: '/assets/img/living-open.jpg', alt: 'Open-plan designed living room', span: 'row-span-2' },
  { src: '/assets/img/cabin-interior.jpg', alt: 'Cabin interior with big windows', span: '' },
  { src: '/assets/img/living-fireplace.jpg', alt: 'Modern living room with fireplace', span: '' },
];

export default function Design() {
  return (
    <section id="design" className="relative overflow-hidden bg-gradient-to-b from-cream to-sand-100 py-24 md:py-32">
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        {/* Left copy */}
        <div>
          <Reveal>
            <span className="eyebrow text-coral">
              <span className="h-px w-8 bg-coral" /> Design
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-4xl font-light leading-[1.05] text-ink md:text-5xl">
              ROI by <span className="italic text-alpine">design</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/65">
              I can take almost any space and turn it into something fabulous. I guide the
              design changes, furnish your property, and oversee photoshoots that attract
              guests and maximize your return.
            </p>
          </Reveal>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {DESIGN_FEATURES.map((f, i) => (
              <Reveal key={i} from="scale" delay={0.05 * i}>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm font-medium text-ink/75 backdrop-blur">
                  <Sparkles size={14} className="text-coral" /> {f}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <a href={CALENDLY.main} target="_blank" rel="noopener noreferrer" className="btn-dark mt-10 text-base !px-8 !py-4">
              Design my STR <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>

        {/* Right gallery */}
        <Reveal from="left">
          <div className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px]">
            {GALLERY.map((g, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                className={`group relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-ink/5 ${g.span}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Design that drives revenue — the studs-out services */}
      <div className="container-x relative mt-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow text-coral">
              <span className="h-px w-8 bg-coral" /> Design services
            </span>
            <h3 className="display-serif mt-5 text-3xl font-light leading-[1.1] text-ink md:text-4xl">
              Design that <span className="italic text-alpine">drives revenue</span>
            </h3>
            <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-ink/65">
              With extensive experience in complete remodels and project management, I offer
              “studs out” design solutions tailored to your needs — spaces that excel in both
              short-term rental appeal and resale value.
            </p>
          </Reveal>

          <Stagger className="grid gap-5 sm:grid-cols-2">
            {DESIGN_SERVICES.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="group h-full rounded-3xl border border-ink/8 bg-white p-7 transition-shadow duration-300 hover:shadow-soft">
                  <span className="display-serif text-2xl font-semibold text-coral/40 transition-colors group-hover:text-coral">
                    0{i + 1}
                  </span>
                  <h4 className="mt-3 text-xl font-bold text-ink">{s.title}</h4>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink/60">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
