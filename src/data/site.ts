export const site = {
  name: "PHM Elite Estates",
  shortName: "PHM Elite",
  tagline: "Premium real estate, personally delivered.",
  // Primary phone
  phone: "+61 434 996 060",
  phoneHref: "tel:+61424148407",
  // Secondary phone
  phone2: "+61 424 148 407",
  phone2Href: "tel:+61434996060",
  email: "admin@phmestates.com",
  address: "Virtual Office — Australia-Wide",
  addressDetail: "Servicing Brisbane & beyond",
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
  { to: "/finance", label: "Finance" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;
