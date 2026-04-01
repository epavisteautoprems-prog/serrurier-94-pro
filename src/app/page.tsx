import dynamicImport from "next/dynamic";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { QuoteForm } from "@/components/home/QuoteForm";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ZonesSection } from "@/components/home/ZonesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BrandsPartners } from "@/components/home/BrandsPartners";
import { GuaranteesSection } from "@/components/home/GuaranteesSection";
import { ZonesInterventionRich } from "@/components/home/ZonesInterventionRich";
import { buildMetadata } from "@/lib/seo";

const StatsSection = dynamicImport(() => import("@/components/home/StatsSection").then((m) => m.StatsSection), {
  loading: () => <div className="mx-auto max-w-6xl px-4 py-10"><div className="h-56 animate-pulse rounded-3xl bg-slate-100" /></div>,
});
const TestimonialsSection = dynamicImport(
  () => import("@/components/home/TestimonialsSection").then((m) => m.TestimonialsSection),
  {
    loading: () => <div className="mx-auto max-w-6xl px-4 py-10"><div className="h-96 animate-pulse rounded-3xl bg-slate-100" /></div>,
  },
);
const FaqSection = dynamicImport(() => import("@/components/home/FaqSection").then((m) => m.FaqSection), {
  loading: () => <div className="mx-auto max-w-6xl px-4 py-10"><div className="h-96 animate-pulse rounded-3xl bg-slate-100" /></div>,
});
const BlogPreview = dynamicImport(() => import("@/components/home/BlogPreview").then((m) => m.BlogPreview), {
  loading: () => <div className="mx-auto max-w-6xl px-4 py-10"><div className="h-72 animate-pulse rounded-3xl bg-slate-100" /></div>,
});
const FinalCTA = dynamicImport(() => import("@/components/home/FinalCTA").then((m) => m.FinalCTA), {
  loading: () => <div className="mx-auto max-w-6xl px-4 py-10"><div className="h-56 animate-pulse rounded-3xl bg-slate-100" /></div>,
});

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title:
      "Serrurier Val-de-Marne (94) | Urgence 24h/24 · Ouverture Porte · Blindage · Devis Gratuit",
    description:
      "Serrurier agréé Val-de-Marne ✓ Intervention en 20 min ✓ Ouverture porte dès 89€ ✓ Blindage A2P ✓ Vitrier urgence ✓ Disponible 24h/24 7j/7. Devis gratuit.",
    path: "/",
  });
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustBar />
      <QuoteForm />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <BrandsPartners />
      <GuaranteesSection />
      <ZonesSection />
      <ZonesInterventionRich />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreview />
      <FinalCTA />
    </div>
  );
}
