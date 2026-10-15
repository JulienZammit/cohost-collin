'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import Reveal from './Reveal';
import { BLOG_POSTS } from '@/lib/site';

export default function BlogTeaser() {
  return (
    <section id="blog" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="container-x relative">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow text-coral">
                <span className="h-px w-8 bg-coral" /> The blog
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-serif mt-5 text-4xl font-light leading-[1.05] text-ink md:text-5xl">
                Insights to help you{' '}
                <span className="italic text-alpine">host smarter</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/blog" className="btn-ghost shrink-0">
              Read the blog <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white transition-shadow duration-300 hover:shadow-soft"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-ink/45">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="display-serif mt-3 text-2xl font-medium leading-tight text-ink transition-colors group-hover:text-alpine">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.975rem] leading-relaxed text-ink/60">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
                    Read article <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
