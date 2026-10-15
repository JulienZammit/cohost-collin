'use client';

const PLATFORMS = ['Airbnb', 'Vrbo', 'Booking.com', 'Expedia', 'Furnished Finder', 'Google Vacation', 'Hopper'];

export default function Platforms() {
  const row = [...PLATFORMS, ...PLATFORMS];
  return (
    <section aria-label="Listing platforms" className="relative border-y border-ink/5 bg-cream py-7">
      <div className="container-x mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/45">
          Your home, exposed across the platforms that matter
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14">
          {row.map((p, i) => (
            <span
              key={i}
              className="display-serif whitespace-nowrap text-2xl font-medium text-ink/35 transition-colors hover:text-alpine md:text-3xl"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
