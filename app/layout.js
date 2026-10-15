import { Fraunces, Hanken_Grotesk } from 'next/font/google';
import Providers from '@/components/Providers';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

const siteUrl = 'https://cohostcollin.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Cohost Collin — Full-Service STR Co-Hosting in Washington State',
    template: '%s · Cohost Collin',
  },
  description:
    'Earn more and worry less. Cohost Collin is a full-service short-term rental co-hosting partner in Washington State — Airbnb & OTA management, dynamic pricing, interior design, and 5-star guest care for a hands-off, passive income property.',
  keywords: [
    'STR co-hosting Washington',
    'Airbnb management Washington State',
    'short-term rental management Seattle',
    'vacation rental co-host',
    'Airbnb Superhost management',
    'dynamic pricing STR',
    'property design STR',
  ],
  authors: [{ name: 'Collin Hinshaw' }],
  creator: 'Cohost Collin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Cohost Collin',
    title: 'Cohost Collin — Full-Service STR Co-Hosting in Washington State',
    description:
      'Turn your property into a hands-off, 5-star passive income stream. Full-service Airbnb & short-term rental co-hosting across Washington State.',
    images: [
      {
        url: '/assets/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Washington State lake and evergreen forest at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cohost Collin — Full-Service STR Co-Hosting in Washington State',
    description:
      'Earn more & worry less with your short-term rental. Full-service co-hosting, dynamic pricing, and 5-star guest care.',
    images: ['/assets/img/og-image.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  themeColor: '#0B2027',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Cohost Collin',
  description:
    'Full-service short-term rental co-hosting and Airbnb management in Washington State.',
  url: siteUrl,
  image: `${siteUrl}/assets/img/hero-lake.jpg`,
  founder: { '@type': 'Person', name: 'Collin Hinshaw' },
  areaServed: { '@type': 'State', name: 'Washington' },
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/cohostcollin/',
    'https://www.facebook.com/people/Cohostcollin/61559906356388/',
  ],
  serviceType: [
    'Short-term rental management',
    'Airbnb co-hosting',
    'Vacation rental interior design',
    'Revenue management',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '25',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
