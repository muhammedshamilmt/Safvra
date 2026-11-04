import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ContactFooterSection from "@/components/ContactFooterSection";
import ServiceDetailView from "@/components/ServiceDetailView";
import { SERVICES_DATA, getServiceBySlug } from "@/data/servicesData";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found — Safvra",
    };
  }

  return {
    title: `${service.title} — Safvra Interior Architecture & Turnkey Fit-Out`,
    description: service.statementText,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const currentIndex = SERVICES_DATA.findIndex((s) => s.slug === slug);
  const totalCount = SERVICES_DATA.length;
  const prevIndex = (currentIndex - 1 + totalCount) % totalCount;
  const nextIndex = (currentIndex + 1) % totalCount;

  const prevService = SERVICES_DATA[prevIndex];
  const nextService = SERVICES_DATA[nextIndex];

  return (
    <main className="relative min-h-dvh w-full bg-white text-[#111111]">
      <Navbar />
      <ServiceDetailView
        service={service}
        prevService={prevService}
        nextService={nextService}
        totalCount={totalCount}
      />
      <ContactFooterSection />
    </main>
  );
}
