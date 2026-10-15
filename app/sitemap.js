import { BLOG_POSTS } from '@/lib/site';

export default function sitemap() {
  const base = 'https://cohostcollin.com';
  const now = new Date('2026-07-11');
  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...BLOG_POSTS.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
