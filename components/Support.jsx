'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarCheck, Home, Camera, Award, Cpu } from 'lucide-react';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import { SUPPORT_ITEMS, CALENDLY } from '@/lib/site';

const ICONS = [Home, Camera, Award, Cpu];

export default function Support() {
  return (
    <section id="support" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy + items */}
        <div>
          <Reveal>
            <span className="eyebrow text-coral">
              <span className="h-px w-8 bg-coral" /> Support
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-4xl font-light leading-[1.05] text-ink md:text-5xl">
              A <span className="italic text-alpine">stress-free</span> partnership
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/65">
              I take the stress out of short-term rentals. Co-hosting with me ensures your
              property is maintained exceptionally and your guests have the best possible stay.
            </p>
          </Reveal>

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
            {SUPPORT_ITEMS.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <StaggerItem key={item.title}>
                  <div className="group flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-6 transition-shadow duration-300 hover:shadow-soft">
                    <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-alpine-100 text-alpine transition-colors duration-300 group-hover:bg-coral group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 text-[0.925rem] leading-relaxed text-ink/60">{item.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.1}>
            <a href={CALENDLY.main} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10 text-base !px-8 !py-4">
              <CalendarCheck size={18} /> Work with us
            </a>
          </Reveal>
        </div>

        {/* Feature image */}
        <Reveal from="left" className="relative w-full">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink/5">
            <Image
              src="/assets/img/living-bay.jpg"
              alt="Bright short-term rental living room with a Sound view"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute -left-4 bottom-8 rounded-2xl bg-white px-5 py-4 shadow-soft ring-1 ring-ink/5"
          >
            <p className="display-serif text-2xl font-semibold text-ink">Superhost</p>
            <p className="text-sm text-alpine">Ranking &amp; status working for you</p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
