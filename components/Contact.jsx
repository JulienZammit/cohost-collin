'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail, CalendarCheck } from 'lucide-react';
import Reveal from './Reveal';
import { CALENDLY, SOCIAL } from '@/lib/site';

export default function Contact() {
  useEffect(() => {
    const id = 'calendly-widget-script';
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-cream md:py-32 noise-overlay">
      <div className="absolute inset-0 opacity-25">
        <Image src="/assets/img/cabin-snow.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-coral/25 blur-[130px]" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow text-coral-400">
              <span className="h-px w-8 bg-coral-400" /> Ready to get results?
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-serif mt-5 text-4xl font-light leading-[1.03] md:text-6xl">
              Let&apos;s turn your property into{' '}
              <span className="italic text-coral-400">passive income</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
              Book a free 15-minute call. We&apos;ll talk through your property, your goals,
              and exactly how full-service co-hosting can work for you.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CALENDLY.consult15} target="_blank" rel="noopener noreferrer" className="btn-primary text-base !px-8 !py-4">
                <CalendarCheck size={18} /> Book a free call
              </a>
              <a href={`mailto:hello@cohostcollin.com`} className="btn-ghost !border-white/25 !bg-white/10 !text-cream text-base !px-8 !py-4 hover:!bg-white/20">
                <Mail size={18} /> Email me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-3">
              <span className="text-sm text-cream/50">Follow along</span>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-coral-400 hover:text-coral-400">
                <Instagram size={19} />
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-coral-400 hover:text-coral-400">
                <Facebook size={19} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Calendly inline widget */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-white/10"
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/cohostcollin/15-minute-consultation?hide_gdpr_banner=1&primary_color=ff6b57"
            style={{ minWidth: '100%', height: '640px' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
