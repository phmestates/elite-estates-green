export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow?: string; title: string; subtitle?: string; image: string }) {
  return (
    <section className="relative h-[42vh] min-h-[300px] flex items-center text-white">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/75 to-primary/40" />
      </div>
      <div className="relative container mx-auto px-4">
        {eyebrow && <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">{eyebrow}</p>}
        <h1 className="font-display text-4xl md:text-5xl font-bold max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-3 text-white/85 max-w-xl">{subtitle}</p>}
      </div>
    </section>
  );
}
