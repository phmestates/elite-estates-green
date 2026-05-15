export type Testimonial = {
  name: string;
  suburb: string;
  role?: string;
  quote: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah & James W.",
    suburb: "Maple Heights",
    role: "Sellers",
    rating: 5,
    quote:
      "PHM Elite Estates made selling our family home effortless. Their marketing was sharp, communication was constant, and the result exceeded our reserve by a clear margin.",
  },
  {
    name: "Michael R.",
    suburb: "Cedar Grove",
    role: "Property Investor",
    rating: 5,
    quote:
      "Professional, honest and genuinely invested in getting us the best outcome. We wouldn't use anyone else for our future property moves.",
  },
  {
    name: "Lina P.",
    suburb: "Willow Park",
    role: "First Home Buyer",
    rating: 5,
    quote:
      "From appraisal to settlement the team was outstanding. Their local market knowledge gave us real confidence at every step.",
  },
  {
    name: "David & Emma T.",
    suburb: "Narangba",
    role: "Buyers (House & Land)",
    rating: 5,
    quote:
      "We were nervous about building for the first time, but Harpreet and the team at PHM Elite guided us through the entire process. They found us the perfect block and a great builder.",
  },
  {
    name: "Robert K.",
    suburb: "Rochedale",
    role: "Developer",
    rating: 5,
    quote:
      "I've worked with many agencies across QLD and WA, but PHM Elite's access to off-market development sites is unmatched. They don't just sell property; they understand the numbers.",
  },
  {
    name: "The Patel Family",
    suburb: "Logan Reserve",
    role: "Sellers",
    rating: 5,
    quote:
      "We needed a quick sale without compromising on price. The strategy proposed by PHM Elite worked perfectly, securing a buyer within the first week off-market.",
  },
];
