export const site = {
  name: "PHM Elite Estates",
  shortName: "PHM Elite",
  tagline: "Premium real estate, personally delivered.",
  phone: "(02) 5550 0100",
  phoneHref: "tel:+61255500100",
  email: "hello@phmeliteestates.com.au",
  address: "Suite 14, 220 Crown Boulevard, Sydney NSW 2000",
  hours: "Mon–Fri 8:30am – 6:00pm · Sat 9:00am – 4:00pm",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/buying", label: "Buying" },
  { to: "/selling", label: "Selling" },
  { to: "/renting", label: "Renting" },
  { to: "/property", label: "Property" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
