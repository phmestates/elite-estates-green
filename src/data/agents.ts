export type Agent = {
  name: string;
  role: string;
  phone: string;
  phoneHref: string;
  phone2?: string;
  phone2Href?: string;
  email: string;
  image: string;
  bio?: string;
};

export const agents: Agent[] = [
  {
    name: "Harpreet Singh Kohli",
    role: "Principal & Director",
    phone: "+61 424 148 407",
    phoneHref: "tel:+61424148407",
    email: "director@phmestates.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=70",
    bio: "Founder of PHM Elite Estates, with a career built on absolute discretion and record-breaking transactions.",
  },
  {
    name: "Priya H. Mehta",
    role: "Senior Sales Consultant",
    phone: "+61 434 996 060",
    phoneHref: "tel:+61434996060",
    email: "priya@phmestates.com",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=70",
    bio: "Specialist in premium residential sales across Sydney and Melbourne with deep buyer network access.",
  },
  {
    name: "Hannah Nguyen",
    role: "Property Manager",
    phone: "+61 424 148 407",
    phoneHref: "tel:+61424148407",
    email: "hannah@phmestates.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=70",
    bio: "Dedicated property manager ensuring seamless tenancy experiences for both landlords and tenants.",
  },
  {
    name: "Marcus Bell",
    role: "Buyer's Advocate & Finance Specialist",
    phone: "+61 434 996 060",
    phoneHref: "tel:+61434996060",
    email: "marcus@phmestates.com",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=70",
    bio: "Expert in property finance and buyer advocacy, guiding clients from pre-approval through to settlement.",
  },
];
