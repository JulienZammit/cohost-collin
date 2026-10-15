'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, ShieldCheck, Award, CalendarCheck, ArrowDown } from 'lucide-react';
import { CALENDLY } from '@/lib/site';

const ease = [0.22, 1, 0.36, 1];

function Word({ children, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay, ease }}
      className="inline-block"
    >
      {children}&nbsp;
    </motion.span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background image w/ parallax */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0">
        <Image
          src="/assets/img/hero-lake.jpg"
          alt="Golden-hour lake and evergreen forest in Washington State"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />
      {/* Coral aurora glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-coral/30 blur-[120px] animate-aurora" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-alpine-400/30 blur-[120px] animate-aurora" style={{ animationDelay: '3s' }} />

      <motion.div style={{ y: yContent, opacity }} className="container-x relative z-10 flex min-h-[100svh] items-center pt-28 pb-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="eyebrow mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-cream backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
              Washington State & Nationwide · STR Co-Hosting
            </motion.div>

            <h1 className="display-serif text-balance text-[2.6rem] font-light leading-[1.02] text-cream sm:text-6xl sm:leading-[0.98] lg:text-[4.6rem]">
              <span className="block">
                <Word delay={0.15}>Your</Word>
                <Word delay={0.25}>complete</Word>
                <Word delay={0.35}>STR</Word>
              </span>
              <span className="block italic text-coral-400">
                <Word delay={0.5}>co-hosting</Word>
                <Word delay={0.62}>solution.</Word>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease }}
              className="mt-7 max-w-lg text-lg leading-relaxed text-cream/80"
            >
              Earn more &amp; worry less. I turn your property into a hands-off,
              5-star passive income stream — you collect the cash flow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href={CALENDLY.main} target="_blank" rel="noopener noreferrer" className="btn-primary text-base !px-8 !py-4">
                <CalendarCheck size={18} /> Book a Call
              </a>
              <a href="#services" className="btn-ghost !border-white/25 !bg-white/10 !text-cream text-base !px-8 !py-4 hover:!bg-white/20">
                Explore services
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.25 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-cream/70"
            >
              <span className="inline-flex items-center gap-2">
                <Award size={17} className="text-coral-400" /> Airbnb Superhost
              </span>
              <span className="inline-flex items-center gap-2">
                <Star size={17} className="fill-coral-400 text-coral-400" /> 5.0 guest rating
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={17} className="text-coral-400" /> 100% Airbnb compliant
              </span>
            </motion.div>
          </div>

          {/* Right: framed listing preview */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease }}
            className="relative mx-auto hidden w-full max-w-[420px] lg:block"
          >
            <div className="animate-float-slow [transform:rotate(-3deg)]">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-coral/25 blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] bg-white p-2.5 shadow-lift ring-1 ring-white/40">
                {/* browser dots */}
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sand" />
                  <span className="h-2.5 w-2.5 rounded-full bg-alpine-300" />
                  <span className="ml-2 h-4 flex-1 rounded-full bg-cream-200" />
                </div>
                <div className="overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/assets/img/app-mockup.png"
                    alt="A Cohost Collin managed Airbnb listing — Superhost, top-rated"
                    width={470}
                    height={394}
                    priority
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Floating review card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease }}
              className="absolute -left-12 top-6 z-10 card-glass flex items-center gap-3 p-3 pr-4 shadow-lift"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-coral/15 text-coral">
                <Star size={18} className="fill-coral text-coral" />
              </div>
              <div>
                <p className="text-sm font-bold leading-none text-ink">5.0 · Superhost</p>
                <p className="mt-1 text-xs text-ink/60">25+ five-star reviews</p>
              </div>
            </motion.div>

            {/* Floating ADR card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease }}
              className="absolute -bottom-8 -right-6 z-10 card-glass p-4 shadow-lift"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-alpine">Occupancy</p>
              <p className="display-serif text-3xl font-semibold text-ink">Top 10%</p>
              <p className="text-xs text-ink/60">of homes in market</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex"
        aria-label="Scroll down"
      >
        <span className="text-[0.68rem] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
