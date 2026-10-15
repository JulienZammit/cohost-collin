import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, CalendarCheck, ArrowUpRight } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';
import { BLOG_POSTS, CALENDLY } from '@/lib/site';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://cohostcollin.com/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default function BlogPost({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const other = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://cohostcollin.com${post.image}`,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Collin Hinshaw' },
    publisher: { '@type': 'Organization', name: 'Cohost Collin' },
  };

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav solid />

      <article>
        {/* Hero */}
        <header className="relative overflow-hidden bg-ink pb-14 pt-36 text-cream md:pt-44 noise-overlay">
          <div className="absolute inset-0 opacity-25">
            <Image src={post.image} alt="" fill sizes="100vw" className="object-cover" priority />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-ink" />
          <div className="container-x relative max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-coral-400">
              <ArrowLeft size={16} /> All articles
            </Link>
            <span className="mt-6 inline-block rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {post.category}
            </span>
            <h1 className="display-serif mt-5 text-4xl font-light leading-[1.08] md:text-5xl">{post.title}</h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-cream/60">
              <span>By Collin Hinshaw</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="inline-flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="bg-cream py-16 md:py-24">
          <div className="container-x max-w-3xl">
            <p className="display-serif text-xl font-light leading-relaxed text-ink md:text-2xl">{post.intro}</p>

            <div className="mt-12 space-y-10">
              {post.sections.map((s) => (
                <section key={s.h}>
                  <h2 className="display-serif text-2xl font-medium text-ink md:text-3xl">{s.h}</h2>
                  <p className="mt-4 text-[1.06rem] leading-relaxed text-ink/70">{s.p}</p>
                </section>
              ))}
            </div>

            {/* Takeaway / CTA */}
            <div className="mt-14 rounded-[2rem] bg-ink p-8 text-cream md:p-10">
              <p className="text-lg leading-relaxed text-cream/85">{post.takeaway}</p>
              <a href={CALENDLY.consult15} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 !px-8 !py-4">
                <CalendarCheck size={18} /> Book a free 15-min call
              </a>
            </div>
          </div>
        </div>

        {/* Read next */}
        {other.length > 0 && (
          <div className="bg-sand-100 py-16">
            <div className="container-x max-w-3xl">
              <p className="eyebrow text-coral"><span className="h-px w-8 bg-coral" /> Read next</p>
              <div className="mt-6 grid gap-5">
                {other.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex items-center gap-5 rounded-3xl border border-ink/8 bg-white p-4 transition-shadow hover:shadow-soft">
                    <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-2xl">
                      <Image src={p.image} alt={p.title} fill sizes="128px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-coral">{p.category}</p>
                      <h3 className="display-serif mt-1 truncate text-lg font-medium text-ink group-hover:text-alpine">{p.title}</h3>
                      <span className="mt-1 inline-flex items-center gap-1 text-sm text-ink/55">Read <ArrowUpRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      <Footer />
      <Chat />
    </main>
  );
}
