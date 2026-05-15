import { createFileRoute, Outlet, useMatchRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { PropertySearch } from "@/components/PropertySearch";
import { CtaBand } from "@/components/CtaBand";
import { z } from "zod";

const searchSchema = z.object({
  suburb: z.string().optional(),
  category: z.string().optional(),
});

export const Route = createFileRoute("/property")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "All Properties — PHM Elite Estates | QLD & WA" },
      { name: "description", content: "Browse house & land packages, dual key, land and development opportunities across Queensland and Western Australia with PHM Elite Estates." },
      { property: "og:title", content: "All Properties — PHM Elite Estates" },
      { property: "og:description", content: "House & land packages, dual key, and development opportunities Australia-wide." },
    ],
  }),
  component: PropertyLayout,
});

function PropertyLayout() {
  const matchRoute = useMatchRoute();
  // If we're on /property/$id, just render the child (detail page)
  const isDetail = matchRoute({ to: "/property/$id", fuzzy: false });

  if (isDetail) {
    return <Outlet />;
  }

  return <PropertyListPage />;
}

function PropertyListPage() {
  const { suburb } = Route.useSearch();

  return (
    <>
      <PageHero
        eyebrow="Listings"
        title="All properties"
        subtitle="House & land packages, dual key, land and development opportunities across QLD and WA. Refine your search using the filters below."
        image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <PropertySearch defaultSuburb={suburb} showAll />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
