'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, CalendarCheck, Instagram } from 'lucide-react';
import { CALENDLY, SOCIAL } from '@/lib/site';

const QUICK = [
  { id: 'how', label: 'How does co-hosting work?' },
  { id: 'pricing', label: 'What does it cost?' },
  { id: 'design', label: 'Do you also design?' },
  { id: 'book', label: 'I want to book a call' },
];

const ANSWERS = {
  how: {
    text: "Great question! I run your short-term rental end-to-end — listings across Airbnb & other OTAs, dynamic pricing, 5-star guest communication, cleaning & maintenance coordination, and transparent owner reporting. You stay 100% hands-off and collect the cash flow. 🏡",
    cta: { label: 'See how it works', href: '#manage', external: false },
  },
  pricing: {
    text: "Every property is unique, so pricing is tailored to yours. The best first step is a free 15-minute call — no pressure, just straight answers about your revenue potential. 💬",
    cta: { label: 'Book a free call', href: CALENDLY.consult15, external: true },
  },
  design: {
    text: "Absolutely — 'ROI by Design' is one of my specialties. I guide design changes, furnish your space, and run photoshoots that attract guests and lift your nightly rate. ✨",
    cta: { label: 'Explore design services', href: '#design', external: false },
  },
  book: {
    text: "Love it! Grab a time that works for you and let's talk about your property. Looking forward to it! 📅",
    cta: { label: 'Open my calendar', href: CALENDLY.main, external: true },
  },
  default: {
    text: "Thanks for reaching out! The quickest way to get you real answers is a short call with me. You can also DM me on Instagram anytime. 🙌",
    cta: { label: 'Book a call', href: CALENDLY.consult15, external: true },
  },
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi there! 👋 I'm Collin's assistant. Ask me anything about co-hosting your place — or tap a question below." },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setNudge(true), 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  function respond(key, userText) {
    const a = ANSWERS[key] || ANSWERS.default;
    setMessages((m) => [
      ...m,
      { from: 'user', text: userText },
      { from: 'bot', text: a.text, cta: a.cta },
    ]);
  }

  function handleQuick(q) {
    respond(q.id, q.label);
  }

  function handleSend(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const lower = text.toLowerCase();
    let key = 'default';
    if (/(price|cost|fee|how much|rate)/.test(lower)) key = 'pricing';
    else if (/(work|how|manage|process|hands)/.test(lower)) key = 'how';
    else if (/(design|furnish|photo|decor|stage)/.test(lower)) key = 'design';
    else if (/(book|call|schedule|meet|appointment|talk)/.test(lower)) key = 'book';
    setInput('');
    respond(key, text);
  }

  return (
    <>
      {/* Launcher */}
      <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
        <AnimatePresence>
          {nudge && !open && (
            <motion.button
              onClick={() => { setOpen(true); setNudge(false); }}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-[220px] rounded-2xl rounded-br-sm bg-white px-4 py-3 text-left text-sm font-medium text-ink shadow-lift ring-1 ring-ink/5"
            >
              <span className="text-coral">👋 Hey!</span> Questions about co-hosting your place? I&apos;m here.
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => { setOpen((v) => !v); setNudge(false); }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative grid h-16 w-16 place-items-center rounded-full bg-coral text-white shadow-glow"
          aria-label={open ? 'Close chat' : 'Open chat'}
        >
          {!open && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-alpine-400 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-alpine-400" />
            </span>
          )}
          <AnimatePresence mode="wait">
            <motion.span
              key={open ? 'x' : 'chat'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={26} /> : <MessageCircle size={26} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-[60] flex h-[560px] max-h-[80vh] w-[calc(100vw-2.5rem)] max-w-[380px] flex-col overflow-hidden rounded-[1.75rem] bg-cream shadow-lift ring-1 ring-ink/10"
          >
            {/* Header */}
            <div className="relative bg-ink px-5 py-4 text-cream">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-coral/30 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-coral text-lg font-bold text-white">C</div>
                <div>
                  <p className="font-bold leading-tight">Chat with Cohost Collin</p>
                  <p className="flex items-center gap-1.5 text-xs text-cream/60">
                    <span className="h-2 w-2 rounded-full bg-green-400" /> Typically replies in minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.9rem] leading-relaxed ${
                      m.from === 'user'
                        ? 'rounded-br-sm bg-coral text-white'
                        : 'rounded-bl-sm bg-white text-ink ring-1 ring-ink/5'
                    }`}
                  >
                    {m.text}
                    {m.cta && (
                      <a
                        href={m.cta.href}
                        target={m.cta.external ? '_blank' : undefined}
                        rel={m.cta.external ? 'noopener noreferrer' : undefined}
                        onClick={() => { if (!m.cta.external) setOpen(false); }}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream transition-colors hover:bg-ink-700"
                      >
                        {m.cta.external && <CalendarCheck size={13} />}
                        {m.cta.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Quick replies */}
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuick(q)}
                    className="rounded-full border border-alpine/30 bg-white px-3 py-1.5 text-xs font-medium text-alpine transition-colors hover:bg-alpine hover:text-white"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-ink/8 bg-white px-3 py-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                className="flex-1 rounded-full bg-cream px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-ink/5 focus:ring-coral/40"
              />
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on Instagram"
                className="grid h-10 w-10 place-items-center rounded-full text-ink/50 transition-colors hover:text-coral"
              >
                <Instagram size={19} />
              </a>
              <button type="submit" aria-label="Send" className="grid h-10 w-10 place-items-center rounded-full bg-coral text-white transition-transform hover:scale-105">
                <Send size={17} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
