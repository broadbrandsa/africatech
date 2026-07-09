/**
 * Single source of truth for all site copy and stats.
 * Sections must import from here — no hard-coded stats in components.
 *
 * Sources (site-content pack):
 *   02-EVENT-FACTS.md  — event stats, rates
 *   03-OFFER.md        — offer terms, disclaimer
 *   04-SITE-COPY.md    — copy of record
 *   05-AUDIENCE-DATA.md — 2025 attendee list analysis
 *   06-DSG-PROFILE.md  — DSG facts, contact
 *   10-ATF-WOW-CONTENT.md — deep festival content (anchor events, timeline,
 *                           speakers, stages, experience, brand wall, media)
 */

export const MAILTO =
  "mailto:yaron@dsg.co.za?subject=ATF%202026%20Co-Sponsorship";

export const event = {
  name: "Africa Tech Festival 2026",
  dates: "17–19 November 2026",
  vipDates: "VIP & partner events 16–19 November 2026",
  venue: "CTICC, Cape Town",
  venueFull: "Cape Town International Convention Centre (CTICC), South Africa",
  edition: "29th edition",
  website: "https://africatechfestival.com",
} as const;

export const hero = {
  eyebrow: "DSG × Africa Tech Festival 2026",
  h1: "Share our stand at Africa's biggest tech event.",
  sub: "DSG is returning to Africa Tech Festival — 17–19 November 2026, CTICC Cape Town — and we're inviting 5 partners to co-sponsor our stand. One price. Zero logistics. Full festival presence.",
  primaryCta: "Claim one of 5 slots",
  secondaryCta: "See what's included",
  badges: ["£6,000 per co-sponsor", "5 slots only", "17–19 Nov 2026", "CTICC Cape Town"],
  image: "/images/event-imagery/atf-2025-entrance-crowd.jpg",
} as const;

// 2025 event numbers — official ATF post-show data (02-EVENT-FACTS.md)
export const stats = {
  h2: "The continent's defining tech gathering.",
  items: [
    { value: "13,500+", label: "attendees" },
    { value: "450", label: "speakers across 230 sessions" },
    { value: "132", label: "countries" },
    { value: "1,100+", label: "VIPs" },
    { value: "650+", label: "government & policymakers" },
    { value: "47,500", label: "connections made" },
    { value: "38,200+", label: "leads generated onsite by exhibitors in 3 days" },
    { value: "$40m", label: "total PR value across ATF media & marketing channels" },
  ],
  kicker: "46% of attendees hold purchasing budgets of US$5m+.",
  mix: "12,000 enterprise attendees, joined by 750 startups and 250 investors.",
  source: "All 2025 figures, official ATF post-show data.",
} as const;

// Four anchor events + festival week timeline (10-ATF-WOW-CONTENT §1–2)
export const anchorEvents = {
  h2: "One week. Four anchor events.",
  items: [
    {
      name: "AfricaCom",
      body: "The home of connectivity & communications. 28 editions — the largest gathering of Africa-focused connectivity leaders in the world.",
    },
    {
      name: "AfricaTech",
      body: "Enterprise digital transformation, AI, fintech and cybersecurity.",
    },
    {
      name: "AfricaIgnite",
      body: "The startup & investor ecosystem — 750 startup attendees and 250 investors in 2025.",
    },
    {
      name: "The AI Summit Cape Town",
      body: "Co-located AI event, 17–19 November — real enterprise use-cases, regulation, ethics and scalable adoption.",
    },
  ],
  kicker: "One Sponsor Delegate Pass covers all of it.",
  timeline: [
    {
      when: "Mon 16 Nov",
      title: "VIP & partner events begin",
      body: "Ministerial Summit, Leaders In Africa Summit (invitation-only), VIP receptions.",
    },
    {
      when: "Tue 17 – Thu 19 Nov",
      title: "The expo",
      body: "Halls 1–4 at CTICC: 8 stages, 230 sessions, 100+ hours of live content.",
    },
    {
      when: "Tue 17 Nov, evening",
      title: "AFest",
      body: "The official networking party — around 2,000 revellers (2025: Grand Africa Café & Beach).",
    },
    {
      when: "Festival week",
      title: "AfricaCom Awards",
      body: "Celebrating the year's best in African tech & connectivity.",
    },
  ],
  coSponsorDays:
    "Your three days: Day 1 — set up, then network at AFest. Day 2 — stand meetings and stage sessions. Day 3 — harvest leads, follow-ups booked before you fly home.",
} as const;

export const audience = {
  h2: "Your next customers walk this floor.",
  body: "Africa Tech Festival unites the full ecosystem across six pillars — Telecoms & Connectivity, Data Centres, AI, Cybersecurity, Startups and Digital Transformation — on eight content stages. The 2025 audience: 24% telecom operators, 29% technology solutions, 9% government, 8% banking & finance. More than half are director-level or above.",
  // Adapted from the official ATF 2026 brochure
  body2: "In ATF's own words: this is the only forum that brings together the infrastructure powering the continent and the technologies transforming it — where strategy becomes execution, partnerships are formed, and investment decisions accelerate Africa's digital economy.",
  pillars: [
    "Telecoms & Connectivity",
    "Data Centres",
    "AI",
    "Cybersecurity",
    "Startups",
    "Digital Transformation",
  ],
  // Real companies from the official 2025 attendee list (05-AUDIENCE-DATA.md)
  companies: [
    "Huawei",
    "MTN",
    "Vodacom",
    "Nokia",
    "Cassava",
    "Telkom",
    "Orange",
    "SES",
    "Eutelsat",
    "Microsoft",
    "Google",
    "Amazon",
    "Standard Bank",
    "Absa",
  ],
  companiesStat: "5,510 unique companies attended in 2025.",
  // Brand wall — 10-ATF-WOW-CONTENT §7 (text chips only, no third-party logo files)
  brandWall: {
    heading: "Share the floor with",
    rows: [
      {
        label: "2025 sponsors included",
        names: [
          "Huawei",
          "Orange (Platinum)",
          "Cassava Technologies",
          "HONOR (Diamond)",
          "Ericsson",
          "Vertiv",
          "Digital Realty",
          "Eutelsat",
          "Ookla",
          "SES",
          "Openserve",
          "Utimaco",
        ],
      },
      {
        label: "Already committed for 2026",
        names: [
          "MTN",
          "Ericsson",
          "Eutelsat",
          "Orange SA",
          "OpenServe",
          "ServiceNow",
          "Zoho",
          "ManageEngine",
          "Odoo",
          "Tarana",
          "Spacecom",
          "Hytera",
          "FiberOne",
          "Sentech",
          "Comviva",
          "WIOCC",
          "Legrand",
          "Turksat",
          "Space42",
        ],
      },
    ],
    suffix: "— and the halls are filling up.",
    floorplan: {
      src: "/images/floorplans/atf-2026-halls-1-4-floorplan.jpg",
      alt: "Africa Tech Festival 2026 floor plan, Halls 1–4 at CTICC",
      caption: "Halls 1–4 — selling fast",
    },
  },
  image: "/images/event-imagery/atf-showfloor-crowd.jpg",
} as const;

// 2025 headline speakers — publicly announced (10-ATF-WOW-CONTENT §3)
export const speakers = {
  h2: "The calibre on stage.",
  stat: "450 speakers. 230 sessions. Standing-room-only keynotes.",
  items: [
    {
      name: "Bernardo Mariano Junior",
      role: "Assistant Secretary-General & CIO",
      org: "United Nations",
    },
    {
      name: "Mark Elliott",
      role: "President, Africa",
      org: "Mastercard",
    },
    {
      name: "Hon. Solly Malatsi",
      role: "Minister of Communications & Digital Technologies",
      org: "South Africa",
    },
    {
      name: "Ravi Bhat",
      role: "Chief Technology & Solutions Officer",
      org: "Microsoft Africa",
    },
    {
      name: "Tumi Chamayou",
      role: "Chief Enterprise Business Officer",
      org: "MTN South Africa",
    },
    {
      name: "Odunayo Eweniyi",
      role: "Co-founder & COO, PiggyVest",
      org: "GP, First Capital",
    },
  ],
  footnote:
    "2025 line-up shown; 2026 speakers are announced through the year at",
  footnoteLinkLabel: "africatechfestival.com",
} as const;

// Eight stages with full themes — official 2026 stages graphic (10-ATF-WOW-CONTENT §6)
export const stages = {
  heading: "Explore the 8 stages",
  items: [
    {
      name: "Next Gen Networks",
      themes: [
        "Monetising 5G, satellite & alternative networks",
        "Private networks",
        "AI-driven network optimisation",
        "Smartphone affordability",
      ],
    },
    {
      name: "The Future of Fibre",
      themes: [
        "Fibre investment & monetisation",
        "Subsea cables",
        "FTTH & last-mile",
        "Enterprise capacity demand",
      ],
    },
    {
      name: "AI Enabled Telco & Mobile Money",
      themes: [
        "Telcos vs OTTs",
        "Mobile money profitability",
        "Superapps",
        "AI personalisation & digital ecosystems",
      ],
    },
    {
      name: "Data Centres & Cloud Services",
      themes: [
        "Cost, power & scalability",
        "Investment & capital flows",
        "AI infrastructure & edge",
        "Data sovereignty",
      ],
    },
    {
      name: "Artificial Intelligence",
      themes: [
        "GenAI to agentic AI",
        "AI ROI today",
        "Enterprise architectures",
        "Governance & sector use-cases",
      ],
    },
    {
      name: "Digital Transformation",
      themes: [
        "Modernising legacy",
        "Cloud vs hybrid",
        "Platform & API thinking",
        "Measuring ROI, AI-ready organisations",
      ],
    },
    {
      name: "Cybersecurity",
      themes: [
        "Identity & trust",
        "Fraud & financial crime",
        "Securing cloud & hybrid",
        "AI threat detection & cyber resilience",
      ],
    },
    {
      name: "Startups",
      themes: [
        "Scaling pan-African",
        "Fundraising",
        "Corporate–startup partnerships",
        "Talent & exits",
      ],
    },
  ],
} as const;

// Festival experience mosaic — 10-ATF-WOW-CONTENT §4
// Honesty rule: VIP/summit items are presented as happening around the event,
// never as included in the co-sponsor package.
export const experience = {
  h2: "The festival experience.",
  items: [
    {
      src: "/images/event-imagery/atf-afest-party.jpg",
      alt: "AFest party crowd at Africa Tech Festival",
      caption:
        "AFest — the biggest celebration in African tech. Around 2,000 revellers close Day 1 (2025: Grand Africa Café & Beach).",
    },
    {
      src: "/images/event-imagery/atf-vip-village-pods.jpg",
      alt: "VIP Village pods at Africa Tech Festival",
      caption:
        "The VIP Village — 900+ unique C-level VIPs across 3 days, all around you all week.",
    },
    {
      src: "/images/event-imagery/atf-fireside-chat.jpg",
      alt: "Fireside chat session at Africa Tech Festival",
      caption: "100+ hours of live content across 8 stages.",
    },
    {
      src: "/images/event-imagery/atf-ministerial-summit.jpg",
      alt: "Leaders In Africa Summit at Africa Tech Festival",
      caption:
        "Leaders In Africa Summit — the invitation-only forum for CEOs, founders and policymakers, running alongside.",
    },
    {
      src: "/images/event-imagery/atf-leaders-summit-tables.jpg",
      alt: "Ministerial Summit roundtables at Africa Tech Festival",
      caption:
        "The Ministerial Summit — ministers and regulators alongside global tech execs, in the VIP programme around the expo.",
    },
    {
      src: "/images/event-imagery/atf-networking-lounge.jpg",
      alt: "Networking lounge at Africa Tech Festival",
      caption: "21,900+ connections made through the event app in 2025.",
    },
  ],
  note: "VIP Village and the summits are part of the festival week around the expo — access is separate from the co-sponsor package.",
} as const;

// The market moment — 10-ATF-WOW-CONTENT §8–9
export const marketMoment = {
  theme: "Powering Africa's Digital Transformation Together",
  themeLabel: "The ATF 2026 theme",
  quote:
    "Africa's digital future isn't being discussed in silos… the only forum that brings together the infrastructure powering the continent and the technologies transforming it — where strategy becomes execution, partnerships are formed, and investment decisions accelerate Africa's digital economy.",
  attribution: "Africa Tech Festival",
  media:
    "$40m in PR value across ATF media & marketing channels in 2025 — covered by CNBC Africa, Xinhua and African Business. Backed by Informa, supported by South Africa's Department of Communications & Digital Technologies and the City of Cape Town.",
} as const;

// Sticky nav (appears after the hero)
export const nav = {
  links: [
    { label: "Event", href: "#event" },
    { label: "Offer", href: "#offer" },
    { label: "The stand", href: "#stand" },
    { label: "Experience", href: "#experience" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Claim a slot",
} as const;

export const offer = {
  h2: "One stand. Five partners. £6,000 each.",
  price: "£6,000",
  slots: 5,
  inclusions: [
    "Dedicated branded panel on the DSG stand",
    "Table, 2 chairs and TV screen for your team",
    "1 Sponsor Delegate Pass + exhibitor passes as required",
    "Access to all anchor events, 8 stages, AFest, networking app, lunch tokens",
    "DSG handles booking, build and stand operations end-to-end",
  ],
  compare:
    "The cheapest solo stand at ATF 2026 is £9,827 — space only, before build costs. An entry shell scheme runs £10,259–£11,267.",
  cta: "Reserve your slot",
  urgency: "5 slots. When they're gone, they're gone.",
} as const;

// Must appear on site (03-OFFER.md)
export const disclaimer =
  "DSG's 2026 stand booking is in progress. Final stand size, location and configuration will be confirmed once the booking is secured with Informa; co-sponsor inclusions shown are based on DSG's previous AfricaCom stand model and may be adjusted to match the confirmed stand.";

export const proven = {
  h2: "We've done this before — and partners came back.",
  body: "DSG has anchored a shared stand at AfricaCom since 2022. Our past co-exhibitors include global brands that chose a DSG slot over going it alone.",
  logos: [
    { name: "Irdeto", src: "/images/logos/co-exhibitors-2022/irdeto.png" },
    { name: "Splunk", src: "/images/logos/co-exhibitors-2022/splunk.png" },
    { name: "McAfee", src: "/images/logos/co-exhibitors-2022/mcafee.png" },
    { name: "Lumine", src: "/images/logos/co-exhibitors-2022/lumine.png" },
    { name: "Soundpays", src: "/images/logos/co-exhibitors-2022/soundpays.png" },
    { name: "Elerian AI", src: "/images/logos/co-exhibitors-2022/elerian-ai.png" },
    { name: "Netcore", src: "/images/logos/co-exhibitors-2022/netcore.png" },
    { name: "@Contact", src: "/images/logos/co-exhibitors-2022/contact.png" },
  ],
  gallery: [
    {
      src: "/images/dsg-stand-photos/dsg-stand-2022-meeting.png",
      alt: "Partner meeting at the DSG stand, AfricaCom 2022",
    },
    {
      src: "/images/dsg-stand-photos/dsg-stand-2022-team.png",
      alt: "Team at the DSG shared stand, AfricaCom 2022",
    },
    {
      src: "/images/dsg-stand-photos/dsg-stand-2022-screen.png",
      alt: "Big screen at the DSG stand, AfricaCom 2022",
    },
  ],
} as const;

// Verbatim sponsor/exhibitor testimonials — africatechfestival.com/sponsor-exhibit
// (fetched 2026-07-08; trimmed with ellipses, wording unchanged)
export const testimonials = {
  h2: "Don't take our word for it.",
  items: [
    {
      quote:
        "This is really the most important show for us on the continent… Africa Tech Festival represents the beating heart of that ecosystem. We can meet all our partners, all our customers and a lot of our prospects and friends here.",
      name: "Rhys Morgan",
      role: "VP for Africa and Western Europe, SES",
    },
    {
      quote:
        "I've been in many events across Africa, but I think this is the only one, honestly today, where I can see all the major players attending. So definitely this is the place to be.",
      name: "Philippe Baudrier",
      role: "General Manager, Eutelsat Africa",
    },
    {
      quote:
        "It's my favourite event, to be honest, because I have a lot of interaction with people, a lot of energy, lots of very good vibes… For sure we'll come next year!",
      name: "Jean-François Arnod",
      role: "Chief Commercial Marketing Officer, Orange",
    },
    {
      quote:
        "We are a returning sponsor, and we saw great take up last year… We got to engage with so many different organizations.",
      name: "Lebogang Luvuno",
      role: "BEEE Executive, Microsoft",
    },
  ],
  source: "Sponsor & exhibitor testimonials published by Africa Tech Festival",
  sourceUrl: "https://africatechfestival.com/sponsor-exhibit/",
} as const;

export const benefits = {
  h2: "Beyond the stand.",
  items: [
    {
      title: "Headline keynotes & 8 stages",
      body: "From headline keynotes to deep-dive tracks — explore every stage below.",
    },
    {
      title: "AFest",
      body: "The festival party closing Day 1.",
    },
    {
      title: "All exhibition floors & demo zones",
      body: "Full access across Halls 1–4.",
    },
    {
      title: "Pre-event networking app",
      body: "Book meetings before you land.",
    },
    {
      title: "Open networking areas + lunch tokens",
      body: "For all exhibition days.",
    },
  ],
  images: [
    {
      src: "/images/event-imagery/atf-afest-party.jpg",
      alt: "AFest — the Africa Tech Festival party",
    },
    {
      src: "/images/event-imagery/atf-vip-village-lounge.jpg",
      alt: "VIP Village lounge at Africa Tech Festival",
    },
  ],
} as const;

export const dsg = {
  h2: "Hosted by DSG — Africa's enterprise digital partner since 1998.",
  body: "Digital Solutions Group runs specialist businesses across customer experience, marketing, MVNO & telecoms, data & AI, cybersecurity, and commerce.",
  stats: [
    { value: "600+", label: "agents" },
    { value: "3M+", label: "customer interactions managed monthly" },
    { value: "60+", label: "enterprise brands served across EMEA" },
    { value: "28+", label: "years delivering digital outcomes" },
  ],
  clients: "Including Nando's, KFC, PEP, Pick n Pay Mobile and DStv Internet.",
  url: "https://dsg.co.za",
  urlLabel: "dsg.co.za",
} as const;

export const steps = {
  h2: "How it works.",
  items: [
    {
      title: "Email Yaron",
      body: "yaron@dsg.co.za — tell us who you are.",
    },
    {
      title: "Confirm your slot",
      body: "£6,000, invoiced by DSG. 5 slots, first come first served.",
    },
    {
      title: "We book & build",
      body: "DSG secures the stand and handles all logistics with Informa.",
    },
    {
      title: "Show up in Cape Town",
      body: "17–19 November 2026. Brand up, meetings booked.",
    },
  ],
} as const;

export const faq = {
  h2: "Questions, answered.",
  items: [
    {
      q: "How much does it cost?",
      a: "£6,000 per co-sponsor, all-in for the package listed above. Travel and accommodation are your own.",
    },
    {
      q: "How many slots are there?",
      a: "Five. Once allocated, the invite closes.",
    },
    {
      q: "Where exactly is the stand?",
      a: "Booking is in progress — final size and location will be confirmed once secured with Informa.",
    },
    {
      q: "What did previous co-sponsors get out of it?",
      a: "Shared stand presence at AfricaCom 2022/2023 alongside brands like Irdeto, Splunk and McAfee, with DSG's footfall and network.",
    },
    {
      q: "Can I bring more people?",
      a: "Yes — exhibitor passes for stand staff as required; extra delegate passes can be arranged at ATF rates.",
    },
    {
      q: "Who do I contact?",
      a: "yaron@dsg.co.za or +27 11 759 7000.",
    },
  ],
} as const;

export const finalCta = {
  h2: "5 slots. £6,000. Cape Town is calling.",
  cta: "Email yaron@dsg.co.za",
  // Rendered in cta.tsx with links to africatechfestival.com and dsg.co.za:
  // "Africa Tech Festival is organised by Informa. DSG is an independent
  //  exhibitor; this invitation is issued by DSG (dsg.co.za)."
} as const;

export const footer = {
  hashtag: "#DoingSomethingGreat",
  atfWeb: "https://africatechfestival.com",
  atfWebLabel: "africatechfestival.com",
  address: "15 6th Street, Parkhurst, Johannesburg, South Africa",
  tel: "+27 11 759 7000",
  telHref: "tel:+27117597000",
  web: "https://dsg.co.za",
  webLabel: "dsg.co.za",
  linkedin: "https://www.linkedin.com/company/digital-solutions-group",
  logo: "/images/logos/dsg-logo-red-on-black.png",
} as const;
