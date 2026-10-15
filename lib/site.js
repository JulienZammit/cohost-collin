// Centralized site content & real links (scraped from cohostcollin.com)

export const CALENDLY = {
  main: 'https://calendly.com/cohostcollin',
  consult15: 'https://calendly.com/cohostcollin/15-minute-consultation',
  call30: 'https://calendly.com/cohostcollin/30min',
  propertyAnalysis: 'https://calendly.com/cohostcollin/property-analysis',
  fullService: 'https://calendly.com/cohostcollin/full-service-co-hosting',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/cohostcollin/',
  facebook: 'https://www.facebook.com/people/Cohostcollin/61559906356388/',
};

export const PARTNER = {
  maverick: 'https://www.maverickstr.co/',
};

// Live chat (Tawk.to). To activate the real live chat that delivers messages to
// Collin's Tawk.to inbox / mobile app, set the ID below to "PROPERTY_ID/WIDGET_ID"
// (from Tawk.to → Admin → Channels → Chat Widget → the embed URL
// https://embed.tawk.to/PROPERTY_ID/WIDGET_ID). You can also set it via the
// NEXT_PUBLIC_TAWK_ID environment variable on Vercel — no code change needed.
// While empty, the site falls back to the built-in assistant widget.
export const TAWK_ID = process.env.NEXT_PUBLIC_TAWK_ID || '';

export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Properties', href: '/#properties' },
  { label: 'Design', href: '/#design' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
];

export const VALUE_PROPS = [
  {
    icon: '/assets/img/icon-cohost.gif',
    title: 'Full-Service Co-Hosting',
    body: 'I manage your property end-to-end to maximize guest satisfaction with a 5-star experience — always with a focus on your ROI.',
  },
  {
    icon: '/assets/img/icon-tech.gif',
    title: 'Cutting-Edge Tech',
    body: 'I use advanced software and dynamic pricing to push your Occupancy Rate and Average Daily Rate (ADR) to the top of the market.',
  },
  {
    icon: '/assets/img/icon-shield.gif',
    title: 'Protect Your Investment',
    body: 'Every booking has a signed Rental Agreement, Damage Deposit & verified ID. 100% Airbnb compliant, always.',
  },
  {
    icon: '/assets/img/icon-cohost.gif',
    title: 'More Platform Exposure',
    body: 'I go beyond Airbnb into other OTAs to expose your home to a wider pool of qualified, prospective guests.',
  },
  {
    icon: '/assets/img/icon-star.gif',
    title: '5-Star Guest Communication',
    body: 'I handle everything from guest inquiries to check-in and booking requests — a 5-star guest experience throughout.',
  },
  {
    icon: '/assets/img/icon-vendor.gif',
    title: 'Vendor Management',
    body: 'I oversee cleaning & maintenance teams, keeping your home in mint condition while you stay completely hands-off.',
  },
];

export const MANAGE_FEATURES = [
  'OTA management & listing optimization',
  'Ongoing revenue management & pricing strategy',
  'Special offers to fill the calendar',
  'Communication with cleaners, maintenance & guests',
  '5-star hospitality for every guest',
  'Respond to messages & inquiries within minutes',
  'Coordination of cleaning turnovers & repairs',
  'Inventory management',
  'Reservations, guest check-in / check-out',
  'Listing SEO optimization',
  'Transparent owner reporting',
];

export const DESIGN_FEATURES = [
  'Property design & consulting',
  'Furnish your property',
  'Photoshoot guidance & staging',
  'On-site visits',
  'Full property analysis',
  'ROI-driven layout & styling',
];

export const STATS = [
  { value: 5, suffix: '.0', label: 'Average guest rating', accent: true },
  { value: 100, suffix: '%', label: 'Airbnb compliant bookings' },
  { value: 4, prefix: '', suffix: '+', label: 'OTA platforms listed' },
  { value: 15, suffix: 'min', label: 'Guest response time' },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Book a discovery call',
    body: 'We hop on a quick call to understand your property, your goals, and whether co-hosting is the right fit.',
  },
  {
    step: '02',
    title: 'Property analysis & setup',
    body: 'I analyze revenue potential, optimize (or design) your space, run a professional photoshoot, and build listings across OTAs.',
  },
  {
    step: '03',
    title: 'Go live & optimize',
    body: 'Dynamic pricing, SEO, and 5-star guest care go to work — filling your calendar and lifting your ADR.',
  },
  {
    step: '04',
    title: 'Collect passive income',
    body: 'You receive transparent owner reporting and monthly cash flow. I handle everything else. Truly hands-off.',
  },
];

export const SUPPORT_ITEMS = [
  {
    title: 'Full Hosting Services',
    body: 'I manage your booking sites end-to-end — listing descriptions and all guest communication — so you don’t have to.',
  },
  {
    title: 'Design & Photography',
    body: 'Make your property stand out with the best interior decor and professional photography. I help stage and capture your property in its best light.',
  },
  {
    title: 'Superhost Profile',
    body: 'Take advantage of my ranking and Superhost status to get higher search placement and more bookings.',
  },
  {
    title: 'Cutting-Edge Tech',
    body: 'I use the best tech available to maximize revenue with dynamic pricing — plus we protect your investment with rental agreements.',
  },
];

export const DESIGN_SERVICES = [
  {
    title: 'Complete Remodels',
    body: 'I transform outdated spaces into stunning, modern accommodations through comprehensive remodels, managing every aspect of the renovation process.',
  },
  {
    title: 'STR Design',
    body: 'My expertise in short-term rental design ensures each property maximizes aesthetics and functionality — creating inviting, stylish spaces for guests.',
  },
  {
    title: 'Project Management',
    body: 'Meticulous project management oversees every phase of your property’s renovation or design, coordinating timelines, budgets, and contractors efficiently.',
  },
  {
    title: 'Design Solutions',
    body: 'Tailored design solutions that meet the unique needs of each property and client — innovative, practical strategies from concept to completion.',
  },
];

export const PLANS = [
  {
    name: '15-Minute Consultation',
    tagline: 'Start here',
    price: 'Free',
    period: '15 min',
    image: '/assets/img/workspace.jpg',
    description: 'Ask me anything short-term rental! The time is yours — and it’s NOT a sales pitch.',
    features: [
      'Ask me anything about STR',
      'The time is yours',
      'It’s not a sales pitch',
      'Great for newbies & seasoned pros',
    ],
    cta: 'Book now',
    href: 'consult15',
    featured: false,
  },
  {
    name: '30-Minute Consultation',
    tagline: 'Go deeper',
    price: '$159',
    period: 'session',
    image: '/assets/img/living-open.jpg',
    description: 'Deep, strategic sessions on your specific property and goals.',
    features: [
      'Discuss property details',
      'Share document examples',
      'Deep strategic sessions',
      'Intros to other thought leaders if needed',
    ],
    cta: 'Book now',
    href: 'call30',
    featured: false,
  },
  {
    name: 'Property Analysis / Site Visit',
    tagline: 'Know your numbers',
    price: '$299',
    period: 'per property',
    image: '/assets/img/cabin-interior.jpg',
    description: 'A complete property and pricing analysis with a forecast of your earning potential.',
    features: [
      'Complete property & pricing analysis',
      'Forecast potential earnings',
      'Provide cost estimates',
      'Decor recommendations to maximize earnings',
    ],
    cta: 'Book now',
    href: 'propertyAnalysis',
    featured: false,
  },
  {
    name: 'Co-Hosting Management',
    tagline: 'Most popular',
    price: '15%+',
    period: 'of revenue',
    image: '/assets/img/property-deck.jpg',
    description: 'The complete hands-off solution: I run your STR end-to-end so you collect the cash flow.',
    features: [
      'Manage all guest communication & issues',
      'Ensure a positive ROI',
      'Highest maintenance standards',
      'Rental agreements & damage deposits',
    ],
    cta: 'Get started',
    href: 'fullService',
    featured: true,
  },
];

// Real properties currently under Collin's management (live Airbnb listings)
export const PROPERTIES = [
  {
    img: '/assets/airbnb/p2.jpg',
    location: 'Seattle, WA',
    rating: '4.96',
    specs: '4 BR · 6 beds · 2 baths',
    href: 'https://www.airbnb.com/rooms/1219601239582945290',
  },
  {
    img: '/assets/airbnb/p1.jpg',
    location: 'Gig Harbor, WA',
    rating: '4.95',
    specs: '3 BR · 4 beds · 2.5 baths',
    href: 'https://www.airbnb.com/rooms/1108078545436891424',
  },
  {
    img: '/assets/airbnb/p3.jpg',
    location: 'Hoodsport, WA',
    rating: '4.88',
    specs: '3 BR · 4 beds · 1.5 baths',
    href: 'https://www.airbnb.com/rooms/1426949566722280797',
  },
  {
    img: '/assets/airbnb/p5.jpg',
    location: 'Sammamish, WA',
    rating: '4.93',
    specs: '3 BR · 4 beds · 1.5 baths',
    href: 'https://www.airbnb.com/rooms/1150839724338122598',
  },
  {
    img: '/assets/airbnb/p4.jpg',
    location: 'Hastings, MN',
    rating: '5.0',
    specs: '5 BR · 8 beds · 3.5 baths',
    href: 'https://www.airbnb.com/rooms/1262434052654985589',
  },
  {
    img: '/assets/airbnb/p6.jpg',
    location: 'Hoodsport, WA',
    rating: '4.94',
    specs: '1 BR · 3 beds · 1 bath',
    href: 'https://www.airbnb.com/rooms/1108042818676353713',
  },
  {
    img: '/assets/airbnb/p7.jpg',
    location: 'Hoodsport, WA',
    rating: '4.86',
    specs: '2 BR · 5 beds · 2 baths',
    href: 'https://www.airbnb.com/rooms/1262412168110836634',
  },
];

// Design portfolio gallery (from the live Design Services page)
export const GALLERY = Array.from({ length: 29 }, (_, i) =>
  `/assets/gallery/g${String(i + 1).padStart(2, '0')}.jpg`
);

export const FAQ = [
  {
    q: 'What does co-hosting with Collin cost?',
    a: 'It depends on the level of support. A 15-minute intro consultation is free, a 30-minute strategy session is $159, and a full property analysis / site visit is $299. Full-service co-hosting management starts at 15%+ of revenue — you only do well when your property does well.',
  },
  {
    q: 'Which platforms will my property be listed on?',
    a: 'I go beyond Airbnb into other OTAs to expose your home to more prospective guests, then optimize each listing with SEO, professional photography, and dynamic pricing to keep your calendar full.',
  },
  {
    q: 'How do you protect my property and my investment?',
    a: 'Every booking includes a signed Rental Agreement, a Damage Deposit, and verified guest ID. Everything is 100% Airbnb compliant, and I oversee cleaning and maintenance teams to keep your home in mint condition.',
  },
  {
    q: 'What areas do you serve?',
    a: 'I co-host short-term rentals across Washington State — including Seattle, Gig Harbor, Hoodsport, and Sammamish — with select properties beyond the state as well.',
  },
  {
    q: 'How hands-off is it, really?',
    a: 'Completely. I manage guests, cleaners, and maintenance and respond to inquiries within minutes. You receive transparent owner reporting and collect the cash flow — your property becomes a passive income stream.',
  },
  {
    q: 'Do you also help with design and furnishing?',
    a: 'Yes. Through my “ROI by Design” services I guide design changes, furnish your property, run photoshoots, and even manage full “studs-out” remodels — creating spaces that excel at both short-term rental appeal and resale value.',
  },
];

export const BLOG_POSTS = [
  {
    slug: 'winter-ready-str-washington',
    title: 'Winter-Proof Your Washington Short-Term Rental',
    category: 'Operations',
    date: '2026-10-15',
    readTime: '4 min read',
    image: '/assets/img/cabin-snow.jpg',
    excerpt:
      'Pacific Northwest winters bring cozy-cabin demand — and frozen pipes, power outages, and icy driveways. Here is how to stay booked and five-star all season.',
    intro:
      'Winter is one of the best seasons for a Washington short-term rental. Guests want fireplaces, snowy views, and a warm base near the slopes or the Sound. But the same weather that drives demand can turn into a cancelled stay or a costly repair overnight. A little preparation in October keeps the calendar full and the reviews glowing through March.',
    sections: [
      {
        h: '1. Protect the plumbing',
        p: 'A burst pipe is the most expensive winter surprise an owner can get. Insulate exposed pipes, disconnect outdoor hoses, and set a minimum thermostat temperature so the home never drops below freezing between guests. Smart thermostats and water-leak sensors let you check the home remotely and catch a problem before it becomes a claim.',
      },
      {
        h: '2. Plan for the power going out',
        p: 'Windstorms knock out power across the region every winter. Stock flashlights, spare batteries, extra blankets, and a clear outage guide in the house manual. If the property is remote, a generator or battery backup for the essentials is often worth it. Guests forgive an outage; they do not forgive feeling unprepared.',
      },
      {
        h: '3. Make arrival safe and easy',
        p: 'Icy steps and unplowed driveways are a liability and a guaranteed bad review. Line up snow removal before the first storm, keep ice melt by the door, and add good exterior lighting along the path. Send guests winter driving notes and chain or traction advice before check-in, especially for mountain and Hood Canal properties.',
      },
      {
        h: '4. Lean into the cozy',
        p: 'Winter guests are booking an experience. Throw blankets, a stocked hot-cocoa station, board games, and a ready-to-light fireplace or wood stove photograph beautifully and earn five-star mentions. Refresh your listing photos and title to show the winter version of the home — it lifts click-through just as searches peak.',
      },
      {
        h: '5. Price for the season, not the year',
        p: 'Holiday weeks, ski weekends, and storm-watching getaways each carry their own demand. Dynamic pricing should push rates up for Thanksgiving, Christmas, and New Year while offering gap-night and mid-week discounts to fill the quieter stretches of January and February.',
      },
    ],
    takeaway:
      'A winter-ready rental books more, earns more, and avoids the repair bills that wipe out a season of profit. Want a second set of eyes on your property before the first freeze? Book a free 15-minute call.',
  },
  {
    slug: 'co-hosting-boosts-airbnb-revenue-washington',
    title: 'How a Co-Host Actually Boosts Your Airbnb Revenue',
    category: 'Revenue',
    date: '2026-06-12',
    readTime: '6 min read',
    image: '/assets/img/living-bay.jpg',
    excerpt:
      'Owning a great property is only half the equation. Here are the five levers a professional co-host pulls to turn a good listing into a top-performing one.',
    intro:
      'A beautiful home does not automatically become a profitable short-term rental. The difference between an average calendar and a booked-out one comes down to a handful of levers — pricing, exposure, reviews, operations, and protection. Here is how a professional co-host pulls each of them.',
    sections: [
      {
        h: '1. Dynamic pricing that follows demand',
        p: 'Static nightly rates leave money on the table on high-demand weekends and sit empty on slow weeknights. Revenue management software adjusts your price daily against local events, seasonality, and competitor availability — protecting your Average Daily Rate (ADR) while keeping occupancy high. The goal is not the highest price or the highest occupancy, but the combination that maximizes total revenue.',
      },
      {
        h: '2. Exposure beyond Airbnb',
        p: 'Airbnb is the front door, not the whole house. Listing across multiple OTAs puts your property in front of guests who never open the Airbnb app — and a synced calendar makes double-bookings impossible. More qualified eyeballs means more booked nights at the rate you want.',
      },
      {
        h: '3. Five-star reviews compound',
        p: 'Reviews are the single biggest driver of long-term ranking. Fast, warm communication — answering inquiries within minutes, anticipating questions before check-in, and solving problems before they become complaints — is what turns a good stay into a five-star one. Those reviews then lift you in search, which brings more bookings, which brings more reviews. It compounds.',
      },
      {
        h: '4. Operations you never have to think about',
        p: 'Cleaning turnovers, restocking, maintenance, and vendor coordination are where most self-managing owners burn out. A co-host owns the entire operation, so a same-day turnover between a checkout and a check-in simply happens — reliably, to a consistent standard — without a single text landing on your phone.',
      },
      {
        h: '5. Protection baked into every booking',
        p: 'Signed rental agreements, damage deposits, and verified guest ID are not paperwork for its own sake — they are what let you accept more bookings with confidence. Protecting the asset is what makes aggressive occupancy safe.',
      },
    ],
    takeaway:
      'Individually, each lever adds a few points. Together, they are the difference between a property that pays for itself and one that becomes a genuine passive-income stream. If you would like to see what your property could do, book a free 15-minute call.',
  },
  {
    slug: 'roi-first-str-design-that-books-itself',
    title: 'ROI-First Design: A Rental That Books Itself',
    category: 'Design',
    date: '2026-05-20',
    readTime: '7 min read',
    image: '/assets/gallery/g01.jpg',
    excerpt:
      'Great short-term rental design is not about taste — it is about return. Here is how to style a space that photographs beautifully, books consistently, and holds its resale value.',
    intro:
      'The best-performing short-term rentals are not always the most expensive to furnish — they are the most intentionally designed. Every decision, from the layout to the throw pillows, is made against a single question: will this earn its keep? Here is how an ROI-first approach turns a property into a standout rental and a wise investment.',
    sections: [
      {
        h: 'Design for the camera first',
        p: 'Guests book from a grid of thumbnails. That means your first five photos have to stop the scroll. Statement moments — a bold accent wall, a striking view framed by the furniture layout, a beautifully staged dining table — are what earn the click. Design the hero shots first, then design the rest of the home around them.',
      },
      {
        h: 'Furnish for how guests actually live',
        p: 'Sleeping capacity sells, but comfort earns the review. Enough seating for everyone at dinner, real bedside lighting, blackout curtains, and generous kitchen basics quietly prevent the small frustrations that cost you a star. Durable, wipeable, high-traffic-ready materials keep the space looking new booking after booking.',
      },
      {
        h: 'Create a sense of place',
        p: 'Guests do not want a generic hotel room — they want the Pacific Northwest cabin, the Sound-view retreat, the mountain hideaway. Leaning into the location with local art, textures, and a clear design story is what makes a listing memorable and shareable, and it is exactly what commands a higher nightly rate.',
      },
      {
        h: 'Studs-out when the numbers justify it',
        p: 'Sometimes the highest-ROI move is structural: opening a wall, adding a bedroom, or reworking a dated layout. A full remodel is a bigger commitment, but when it unlocks a higher guest count, a better photo set, and stronger resale value, it pays for itself many times over. The key is running the numbers before the demolition, not after.',
      },
      {
        h: 'Protect the resale value',
        p: 'A rental is still an asset. The smartest design choices serve two masters — they perform on the OTA platforms today and appeal to a future buyer tomorrow. Timeless bones with swappable, on-trend accents give you the best of both.',
      },
    ],
    takeaway:
      'ROI-first design is a discipline, not a style. Done well, it is the difference between a property that merely looks nice and one that books itself. Want a design and revenue read on your space? A property analysis is the place to start.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'We could not be more thrilled with our decision. The personalized care, attention to detail, communication and five-star service — as a host to our guests and a manager for our property — has been a wonderful experience. Collin’s response time to our guests and to our needs has been efficient and thorough.',
    name: 'Dave & Laurie',
    role: 'Property Owners',
  },
  {
    quote:
      'We highly recommend Collin Hinshaw and plan on using him for our next short-term rental investment. Collin has taken all of the stress out of our short-term investment property ownership and helped make our rental a profitable and enjoyable business relationship. We can’t thank him enough.',
    name: 'Dave & Laurie',
    role: 'Repeat Clients',
  },
];
