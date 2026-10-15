import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock, ArrowLeft } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';
import { BLOG_POSTS } from '@/lib/site';

export const metadata = {
  title: 'The Blog — STR Hosting Insights',
  description:
    'Practical short-term rental insights from Cohost Collin: revenue strategy, dynamic pricing, ROI-first design, and hands-off management in Washington State and across the US.',
  alternates: { canonical: 'https://cohostcollin.com/blog' },
};

export default function BlogIndex() {
  return (
    <main className="relative">
      <Nav solid />
      <section className="relative overflow-hidden bg-ink pb-16 pt-36 text-cream md:pb-20 md:pt-44 noise-overlay">
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-coral/20 blur-[130px]" />
        <div className="container-x relative">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-coral-400">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <p className="eyebrow mt-6 text-coral-400">
            <span className="h-px w-8 bg-coral-400" /> The blog
          </p>
          <h1 className="display-serif mt-4 max-w-3xl text-4xl font-light leading-[1.05] md:text-6xl">
            Insights to help you <span className="italic text-coral-400">host smarter</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/70">
            Real strategy from the field — revenue, design, and operations for short-term
            rental owners who want to earn more and worry less.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white transition-shadow duration-300 hover:shadow-soft"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-ink/45">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h2 className="display-serif mt-3 text-2xl font-medium leading-tight text-ink transition-colors group-hover:text-alpine">{post.title}</h2>
                  <p className="mt-3 flex-1 text-[0.975rem] leading-relaxed text-ink/60">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral">
                    Read article <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Chat />
    </main>
  );
}
