export interface ClosingCase {
  id: string;
  title: string;
  category: "all" | "estate" | "penthouse" | "waterfront";
  categoryName: string;
  location: string;
  soldPrice: string;
  originalPrice?: string;
  daysOnMarket: number;
  highlight: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  closedDate: string;
  story: string;
  strategy: string[];
  sellerQuote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  type: "seller" | "buyer" | "investor";
  avatar: string;
  rating: number;
  property: string;
  quote: string;
  result: string;
  verified: boolean;
}

export const STATS_DATA = [
  { value: "RM 680M+", label: "Total Career Volume", change: "Top 1% MIEA Luxury Producer" },
  { value: "14 Days", label: "Average Days to Offer", change: "60% faster than Klang Valley average" },
  { value: "103.8%", label: "Average Sale-to-List Ratio", change: "Consistent premium outcomes" },
  { value: "99.6%", label: "Client Satisfaction Rate", change: "Over 450+ high-net-worth families" },
];

export const CLOSING_CASES: ClosingCase[] = [
  {
    id: "case-1",
    title: "The Binjai On The Park Penthouse",
    category: "penthouse",
    categoryName: "Sky Residence / Penthouse",
    location: "Persiaran KLCC, Kuala Lumpur City Centre",
    soldPrice: "RM 18,800,000",
    originalPrice: "RM 18,000,000",
    daysOnMarket: 8,
    highlight: "Sold in 8 days · RM 800K above bank valuation · Cash buyer",
    beds: 5,
    baths: 6,
    sqft: "6,200 sq. ft. (Freehold)",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    closedDate: "March 2026",
    story: "The owner, a regional corporate executive relocating abroad, needed an expedited, confidential transaction. Previously listed with multiple generic agencies for six months with no firm offer, we took over as exclusive advisor. We produced a sunset video tour showcasing unblocked Petronas Twin Towers views and organized an exclusive private preview for verified family office buyers.",
    strategy: [
      "Custom twilight video staging emphasizing direct KLCC Park and Twin Towers views",
      "Private viewing schedule arranged exclusively for pre-vetted cash buyers",
      "Secured two competing offers within the first week, closing RM 800,000 above valuation"
    ],
    sellerQuote: "“Alfred's understanding of the prime KLCC luxury market is unmatched. Within eight days, he secured an all-cash buyer at a price exceeding our expectations. The entire legal and SPA process was seamless.” — Dato' Sri Marcus Tan"
  },
  {
    id: "case-2",
    title: "Damansara Heights Contemporary Bungalow",
    category: "estate",
    categoryName: "Detached Luxury Bungalow",
    location: "Bukit Damansara, Kuala Lumpur",
    soldPrice: "RM 26,500,000",
    originalPrice: "RM 27,000,000",
    daysOnMarket: 14,
    highlight: "Record price-per-sqft in Damansara Heights · Private off-market sale",
    beds: 6,
    baths: 8,
    sqft: "Land: 12,500 sq. ft. · Built-up: 9,800 sq. ft. (Freehold)",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    closedDate: "February 2026",
    story: "Located in Malaysia's most prestigious billionaire enclave, the seller insisted on complete privacy without public portal listings or open signages. Utilizing our private high-net-worth client roster, we introduced three verified buyers and finalized the Letter of Offer within two weeks.",
    strategy: [
      "100% confidential off-market campaign protecting owner privacy",
      "Thorough structural, land title, and municipal approval audit prepared upfront",
      "Coordinated with top legal counsel for a frictionless SPA execution and stamp duty filing"
    ],
    sellerQuote: "“Total discretion, uncompromising professionalism, and real market clout. Alfred and his team delivered on every promise without a single public advertisement.” — Datin Joanne Lim"
  },
  {
    id: "case-3",
    title: "Kenny Hills Sprawling Sanctuary Estate",
    category: "estate",
    categoryName: "Detached Luxury Bungalow",
    location: "Bukit Tunku (Kenny Hills), Kuala Lumpur",
    soldPrice: "RM 38,000,000",
    originalPrice: "RM 38,000,000",
    daysOnMarket: 21,
    highlight: "Sprawling 28,000 sq. ft. flat land · Transacted to public listed founder",
    beds: 7,
    baths: 9,
    sqft: "Land: 28,000 sq. ft. · Built-up: 13,500 sq. ft. (Freehold)",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    closedDate: "January 2026",
    story: "A rare freehold land parcel in Bukit Tunku surrounded by mature greenery. Large-lot legacy bungalows typically require six to twelve months to trade. We prepared a comprehensive architectural feasibility report highlighting redevelopment potential, attracting prominent corporate principals.",
    strategy: [
      "Commissioned architectural spatial studies showing modern rebuild and expansion potential",
      "Targeted direct outreach to founders of Bursa Malaysia-listed companies",
      "Assisted both parties with state consent and specialized private trust structuring"
    ],
    sellerQuote: "“Large legacy land parcels are tricky to value and sell in Malaysia. Alfred brought the right buyer who appreciated the land's pedigree and paid our asking price.” — Tan Sri Harrison Koh"
  },
  {
    id: "case-4",
    title: "Desa ParkCity Park Regent Water Residence",
    category: "penthouse",
    categoryName: "Parkside Condominium",
    location: "Desa ParkCity, Kuala Lumpur",
    soldPrice: "RM 7,850,000",
    originalPrice: "RM 7,600,000",
    daysOnMarket: 7,
    highlight: "Sold in 7 days · Facing Central Lake · 3 competing offers",
    beds: 4,
    baths: 5,
    sqft: "4,400 sq. ft. (Freehold Strata)",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    closedDate: "December 2025",
    story: "Desa ParkCity's flagship parkfront residence with direct views of the lake. The seller was looking to upgrade to a nearby detached bungalow. By staging the unit to highlight natural daylight and cross-ventilation, we created high viewing enthusiasm over a single weekend.",
    strategy: [
      "Staging and daylight photography emphasizing direct Central Park and lake panoramas",
      "Organized back-to-back private viewings on Saturday, creating competitive interest",
      "Fast-tracked panel bank valuation and mortgage approval within 48 hours"
    ],
    sellerQuote: "“Alfred helped us sell in seven days above our asking price and seamlessly coordinated the purchase of our new home in the same neighborhood.” — Aaron & Cheryl Lee"
  },
  {
    id: "case-5",
    title: "Tropicana Golf & Country Resort Villa",
    category: "waterfront",
    categoryName: "Golf Course Bungalow",
    location: "Tropicana, Petaling Jaya, Selangor",
    soldPrice: "RM 16,500,000",
    originalPrice: "RM 16,000,000",
    daysOnMarket: 18,
    highlight: "Direct golf course frontage · Full clubhouse transfer included",
    beds: 6,
    baths: 7,
    sqft: "Land: 11,000 sq. ft. · Built-up: 8,600 sq. ft. (Leasehold)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    closedDate: "November 2025",
    story: "A resort-style bungalow with direct fairway frontage in Tropicana. We highlighted the lifestyle benefits—including the golf membership transfer and state-of-the-art security—attracting a senior expatriate family seeking a peaceful suburban retreat.",
    strategy: [
      "Full aerial drone tour showcasing 18-hole championship golf course views",
      "Prepared seamless transfer documents for Tropicana Golf clubhouse membership",
      "Managed leasehold land title transfer and state authority consent filings smoothly"
    ],
    sellerQuote: "“Alfred navigated the state consent and title transfer paperwork effortlessly. His familiarity with Tropicana Golf properties saved us weeks of delays.” — Richard & Susan Vance"
  },
  {
    id: "case-6",
    title: "Seni Mont Kiara Sky Penthouse",
    category: "penthouse",
    categoryName: "Sky Residence / Penthouse",
    location: "Changkat Duta Kiara, Mont Kiara, Kuala Lumpur",
    soldPrice: "RM 9,600,000",
    originalPrice: "RM 9,300,000",
    daysOnMarket: 11,
    highlight: "Sold in 11 days · Private lift lobby · 5 covered car parks",
    beds: 5,
    baths: 6,
    sqft: "5,800 sq. ft. (Freehold Strata)",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    closedDate: "October 2025",
    story: "A rare duplex penthouse in Mont Kiara with 360-degree city views. Mont Kiara is a prime expat hub with proximity to international schools (GIS and MKIS). We positioned the home for international families seeking ample space and multiple car parks.",
    strategy: [
      "Targeted international school parent networks and expatriate corporate executives",
      "Virtual 3D tour allowing foreign buyers to inspect the layout remotely",
      "Prepared detailed breakdown of maintenance fees, sinking fund, and rental yield"
    ],
    sellerQuote: "“From professional photography to legal closing, Alfred was attentive, honest, and completely committed. Highly recommended for Mont Kiara luxury properties.” — Dr. Kenneth Wong"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dato' Sri Marcus Tan",
    role: "Seller · The Binjai On The Park Penthouse",
    type: "seller",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    property: "The Binjai On The Park Penthouse, KLCC (RM 18,800,000)",
    quote: "“Alfred's insight into prime KLCC real estate is exceptional. After months of stagnation with other agents, he brought us an all-cash buyer in just eight days. His team managed the SPA, loan redemption, and legal coordination with absolute precision.”",
    result: "Sold in 8 Days · Above Valuation",
    verified: true
  },
  {
    id: "test-2",
    name: "Aaron & Cheryl Lee",
    role: "Buyers & Sellers · Desa ParkCity",
    type: "buyer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    property: "Park Regent Water Residence, Desa ParkCity (RM 7,850,000)",
    quote: "“We wanted to sell our existing condo and upgrade within Desa ParkCity without renting temporarily. Alfred timed both transactions perfectly. We signed both SPAs within two weeks of each other. Truly top-tier service in Malaysia.”",
    result: "Seamless Upgrade Within 2 Weeks",
    verified: true
  },
  {
    id: "test-3",
    name: "Tan Sri Harrison Koh",
    role: "Property Investor · Kenny Hills Bungalow",
    type: "investor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    property: "Kenny Hills Freehold Estate, Bukit Tunku (RM 38,000,000)",
    quote: "“Alfred operates with the discretion and financial acumen of a private banker. He understands land titles, town planning, and real market values in Kenny Hills and Damansara Heights. His advice has consistently protected our family’s wealth.”",
    result: "Discreet Off-Market Acquisition",
    verified: true
  },
  {
    id: "test-4",
    name: "Datin Joanne Lim",
    role: "Seller · Damansara Heights Contemporary Bungalow",
    type: "seller",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    property: "Damansara Heights Luxury Bungalow (RM 26,500,000)",
    quote: "“Selling a high-profile home in Bukit Damansara requires extreme privacy. Alfred respected our boundaries, vetted every prospect rigorously, and delivered a qualified buyer without any public fanfare. A flawless experience.”",
    result: "100% Confidential Sale · 14 Days",
    verified: true
  }
];

export const FAQS = [
  {
    q: "How do you determine the market value of a property in Malaysia?",
    a: "We conduct a thorough Comparative Market Analysis (CMA) by cross-referencing recent transacted caveats from the Valuation and Property Services Department (JPPH), current sub-sale listings in your specific taman or development, and recent bank valuation figures from leading panel banks (Maybank, CIMB, Public Bank, etc.)."
  },
  {
    q: "What is the standard procedure and timeline for selling a property in Malaysia?",
    a: "Upon agreement of the sale price, the purchaser pays a 3% earnest deposit upon signing the Letter of Offer (OTP). The formal Sale and Purchase Agreement (SPA) is typically signed within 14 to 21 working days, alongside the remaining 7% deposit. Completion is generally within 90 days from unconditional date (plus a standard 30-day extension clause)."
  },
  {
    q: "Can you assist with Real Property Gains Tax (RPGT) and legal conveyancing?",
    a: "Yes. While we are licensed real estate negotiators, we work alongside Malaysia’s leading real estate legal firms who assist clients with CKHT (RPGT) tax declarations, Memorandum of Transfer (MOT) stamp duty calculations, and state authority consent filings for both Malaysian citizens and foreign purchasers."
  },
  {
    q: "Do you handle unlisted and private off-market properties in Malaysia?",
    a: "Yes. In enclaves like Damansara Heights, Kenny Hills, Country Heights Damansara, and prime KLCC penthouses, many prominent owners prefer private sales. We maintain a discreet network connecting pre-qualified buyers and sellers without public advertisement."
  }
];

export const AGENT_INFO = {
  name: "Alfred Siaw",
  brand: "DEAL MAKERS",
  title: "Senior Real Estate Negotiator & Prime Property Dealmaker",
  license: "REN 24819 · Board of Valuers, Appraisers, Estate Agents and Property Managers (LPPEH)",
  company: "DEAL MAKERS REALTY (E(1)2088)",
  phone: "+60 12-895 4300",
  whatsapp: "+60 12-895 4300",
  email: "alfred.siaw@dealmakers.my",
  office: "Level 32, Menara Ilham, No. 8, Jalan Binjai, KLCC, 50450 Kuala Lumpur, Malaysia",
  experienceYears: "Over 12 Years in Klang Valley Prime Real Estate",
  headshot: "/justin_adams_1.png",
};
