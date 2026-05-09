export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export const posts: Post[] = [
  {
    slug: "first-home-buyer-checklist",
    title: "The First Home Buyer's Checklist for 2026",
    excerpt: "Everything you need to know before making your very first property purchase, from finance pre-approval to settlement day.",
    date: "May 02, 2026",
    category: "Buying",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=70",
  },
  {
    slug: "boost-property-value",
    title: "5 Smart Renovations That Boost Property Value",
    excerpt: "Get the highest return on your renovation dollar with these five upgrades buyers genuinely care about.",
    date: "Apr 21, 2026",
    category: "Selling",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=70",
  },
  {
    slug: "rental-market-update",
    title: "Local Rental Market Update — Q2 2026",
    excerpt: "Vacancy rates, average yields and what landlords should expect over the coming quarter.",
    date: "Apr 09, 2026",
    category: "Renting",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=70",
  },
  {
    slug: "auction-vs-private-treaty",
    title: "Auction vs Private Treaty: Which Is Right for You?",
    excerpt: "We break down the pros and cons of the two most popular methods of sale in today's market.",
    date: "Mar 28, 2026",
    category: "Selling",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=900&q=70",
  },
  {
    slug: "staging-on-a-budget",
    title: "Property Staging on a Budget",
    excerpt: "Professional-looking presentation tips that won't blow out your sale preparation budget.",
    date: "Mar 15, 2026",
    category: "Selling",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=70",
  },
  {
    slug: "tenant-rights-2026",
    title: "Tenant Rights: What Changed in 2026",
    excerpt: "A clear guide to the latest legislative updates affecting renters and how they may impact your tenancy.",
    date: "Feb 28, 2026",
    category: "Renting",
    image: "https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&fit=crop&w=900&q=70",
  },
];
