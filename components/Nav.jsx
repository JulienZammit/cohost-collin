'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook, CalendarCheck } from 'lucide-react';
import { NAV_LINKS, SOCIAL, CALENDLY } from '@/lib/site';

export default function Nav({ solid = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const atTop = !scrolled && !open && !solid;

  const linkColor = atTop ? 'text-white/85 hover:text-white' : 'text-ink/75 hover:text-ink';
  const socialColor = atTop
    ? 'text-white/80 hover:bg-white/10 hover:text-white'
    : 'text-ink/60 hover:bg-ink/5 hover:text-coral';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open || solid
          ? 'border-b border-ink/5 bg-cream/85 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(11,32,39,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[76px] items-center justify-between">
        <a href="/#top" className="relative flex items-center" aria-label="Cohost Collin home">
          <Image
            src="/assets/img/logo.png"
            alt="Cohost Collin"
            width={150}
            height={69}
            priority
            className={`h-9 w-auto transition-all duration-500 md:h-10 ${atTop ? 'brightness-0 invert' : ''}`}
          />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkColor}`}
            >
              {l.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-coral transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 md:flex">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${socialColor}`}
            >
              <Instagram size={19} />
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${socialColor}`}
            >
              <Facebook size={19} />
            </a>
          </div>
          <a
            href={CALENDLY.main}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden !py-2.5 !px-5 sm:inline-flex"
          >
            <CalendarCheck size={16} />
            Book a Call
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
              atTop ? 'border-white/30 bg-white/10 text-white' : 'border-ink/10 bg-white/60 text-ink'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/5 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="display-serif border-b border-ink/5 py-3 text-2xl text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-4 flex items-center gap-3">
                <a href={CALENDLY.main} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1">
                  <CalendarCheck size={16} /> Book a Call
                </a>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full border border-ink/10">
                  <Instagram size={20} />
                </a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-12 w-12 place-items-center rounded-full border border-ink/10">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
