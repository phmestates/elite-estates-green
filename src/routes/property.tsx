import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PropertySearch } from "@/components/PropertySearch";
import { CtaBand } from "@/components/CtaBand";

export const Route = createFileRoute("/property")({
  head: () => ({
    meta: [
      { title: "Properties for Sale & Rent — PHM Elite Estates" },
      { name: "description", content: "Browse our complete listing of properties for sale and rent across the local area." },
      { property: "og:title", content: "All Properties — PHM Elite Estates" },
      { property: "og:description", content: "Explore homes, units, townhouses and more." },
    ],
  }),
  component: PropertyPage,
});

function PropertyPage() {
  return (
    <>
      <PageHero
        eyebrow="Listings"
        title="All properties"
        subtitle="Explore our full catalogue — refine your search using the filters below."
        image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <PropertySearch />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
