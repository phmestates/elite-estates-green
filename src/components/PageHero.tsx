import { useEffect, useState } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string
}) {
  const [loaded, setLoaded] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[550px] flex items-center text-white overflow-hidden bg-primary-dark">

      {/* Background Image with Cinematic Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-[20s] ease-out ${loaded ? 'scale-110' : 'scale-100'
            }`}
        />

        {/* Layered Luxury Gradients for Perfect Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-black/40 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 mt-12">
        <div
          className={`max-w-4xl transition-all duration-1000 delay-300 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >

          {/* Eyebrow with Decorative Gold Line */}
          {eyebrow && (
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1.5px] bg-gold" />
              <p className="text-gold uppercase tracking-[0.4em] text-[11px] font-bold">
                {eyebrow}
              </p>
            </div>
          )}

          {/* Title - Larger, tighter leading for a premium feel */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-2xl">
            {title}
          </h1>

          {/* Subtitle - Editorial style layout */}
          {subtitle && (
            <div className="mt-8 border-l-[2px] border-gold/40 pl-6 max-w-2xl">
              <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}