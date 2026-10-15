'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import Reveal from './Reveal';
import Topo from './Topo';
import { CALENDLY } from '@/lib/site';

const CRED = [
  { k: 'Nordstrom', v: 'Hospitality training' },
  { k: '15 yrs', v: 'E-commerce & Amazon' },
  { k: 'Superhost', v: 'Airbnb status' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <Topo className="absolute -left-40 bottom-0 h-[560px] w-[900px]" opacity={0.07} />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Photo */}
        <Reveal from="right" className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink/5">
            <Image
              src="/assets/img/collin.jpg"
              alt="Collin Hinshaw, founder of Cohost Collin"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -left-5 -top-5 -z-0 h-28 w-28 rounded-2xl border border-coral/30" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute -bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-soft ring-1 ring-ink/5"
          >
            <p className="display-serif text-2xl font-semibold text-ink">Collin Hinshaw</p>
            <p className="text-sm text-alpine">Founder &amp; your co-host</p>
          </motion.div>
        </Reveal>

        {/* Bio */}
        <div>
          <Reveal>
            <span className="eyebrow text-coral">
              <span className="h-px w-8 bg-coral" /> Hello there! I&apos;m Collin
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-4xl font-light leading-[1.08] text-ink md:text-[2.9rem]">
              A hospitality obsessive who treats your property like his own
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              I&apos;m delighted to have you here. With a passion for hospitality rooted in my
              training at the iconic Nordstrom, a decade and a half in e-commerce and the
              Amazon space, and a hearty dose of thick skin from my college bartending days,
              I bring a unique blend of skills to the world of short-term rentals.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">
              Let&apos;s work together to make your short-term rental venture a resounding
              success — and turn your property into a memorable, profitable destination.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-4">
              {CRED.map((c) => (
                <div key={c.k} className="rounded-2xl border border-ink/8 bg-white p-4">
                  <p className="display-serif text-lg font-bold leading-tight text-ink">{c.k}</p>
                  <p className="mt-1 text-xs text-ink/55">{c.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <a href={CALENDLY.call30} target="_blank" rel="noopener noreferrer" className="btn-primary mt-9 text-base !px-8 !py-4">
              <CalendarCheck size={18} /> Work with me
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
