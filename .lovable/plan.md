# PHM Elite Estates — Website Plan

A real estate marketing site inspired by the structure of redrocketrealty.com.au, rebranded for **PHM Elite Estates** with a vibrant forest-green + gold theme. Static demo property listings (no backend).

## Brand & Design Direction

- **Business**: PHM Elite Estates — premium local real estate agency
- **Palette** (defined as oklch tokens in `src/styles.css`):
  - Primary: vibrant forest green (~#1F7A3A range)
  - Accent: warm gold (~#D4A437 range)
  - Surfaces: clean white + deep near-black for header bar
  - Muted greens for section backgrounds, gold for CTAs and highlights
- **Typography** (Google Fonts, similar to reference's clean business look):
  - Headings: **Poppins** (semi-bold/bold) — strong, modern
  - Body: **Open Sans** — highly readable, classic business feel
- **Vibe**: Confident, premium, eye-catching — gold accents on green hero, gold star icons, gold underline flourishes

## Pages (each a separate TanStack route with own SEO meta)

```
/            Home
/buying      Buying info + property search CTA
/selling     Selling / appraisal request
/renting     Renting info
/property    Property listings grid (search + filter)
/blog        Blog index (3–6 sample posts)
/about       About PHM Elite Estates
/contact     Contact form + details + map placeholder
```

## Shared Layout

- **Top utility bar** (dark): social icons (Facebook, Instagram, LinkedIn) on left; "EMAIL US" + "CALL US ON (placeholder phone)" buttons on right
- **Main header** (green): PHM Elite Estates logo (text + small gold house/key mark) with nav: Home, Buying, Selling, Renting, Property, Blog, About, Contact. Mobile: hamburger drawer
- **Footer** (deep green): three columns — brand + tagline, quick links, contact info; gold divider; bottom strip with copyright + socials

## Home Page Sections

1. **Hero** — full-width interior photo with dark green overlay, headline "The leading real estate experts dedicated to results", subhead, gold "Property address" search bar with gold "What's My Home Worth?" button
2. **Awards strip** — "Award Winning Agency & Agent" with 5 gold stars, "4.9 / 5 — Based on 485 reviews" placeholder
3. **Property search filter** — Suburb, Category, Price From/To, Bedrooms min/max, Bathrooms, feature checkboxes (Air Conditioning, Pool, Security), gold "Search" button (filters static demo data client-side)
4. **Three feature cards** (gold circular icons): Interested in Buying? / Request an Appraisal / Receive Email Alerts
5. **Featured Properties** — 6 sample property cards (image, price, address, beds/baths/cars, status badge)
6. **Why choose us** — 3–4 value props with gold icons
7. **Testimonials** — 3 quote cards
8. **CTA band** — gold background "Ready to make a move?" with contact buttons

## Other Pages (concise outlines)

- **/buying** — Hero + buyer journey steps + property filter widget + featured listings
- **/selling** — Hero + appraisal request form (name, email, phone, address) + "How we sell" steps + recent sales
- **/renting** — Hero + tenant info + available rentals grid + landlord services
- **/property** — Full grid of ~12 demo listings with sticky filter sidebar
- **/blog** — Card grid of 6 sample articles (title, excerpt, date, image)
- **/about** — Story, team grid (3–4 placeholder agents), values, awards
- **/contact** — Form + office address + phone + email + hours + embedded map placeholder image

## Static Demo Data

- ~12 properties in `src/data/properties.ts`: id, title, address, suburb, price, beds, baths, cars, type, status (For Sale / For Rent / Sold), image (Unsplash interior/exterior URLs)
- ~4 agents in `src/data/agents.ts`
- ~6 blog posts in `src/data/posts.ts`
- ~3 testimonials in `src/data/testimonials.ts`

## Technical Notes

- TanStack Start route files in `src/routes/` (flat naming). Each route exports `head()` with unique title + description + og tags.
- Reusable components in `src/components/`: `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `PropertySearch.tsx`, `PropertyCard.tsx`, `PropertyGrid.tsx`, `FeatureCard.tsx`, `TestimonialCard.tsx`, `AppraisalForm.tsx`, `ContactForm.tsx`, `BlogCard.tsx`, `AgentCard.tsx`, `CtaBand.tsx`
- Forms are non-functional (no backend) — submit shows toast "Thanks, we'll be in touch" via `sonner`
- Property filter is pure client-side `useState` over the static array
- Fonts loaded via `<link>` tags injected through `__root.tsx` head meta
- All colors use semantic tokens (`bg-primary`, `text-accent`, etc.) — no hardcoded color classes
- Mobile-first responsive; hamburger nav under md breakpoint
- Images: Unsplash hotlinks for properties/hero (no asset generation needed for v1)

## Out of Scope (v1)

- Real backend / CMS / admin
- Working property search against a database
- Real maps integration (use static map image placeholder)
- Email delivery for forms
