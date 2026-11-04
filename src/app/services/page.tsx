import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesPageHero from "@/components/ServicesPageHero";
import ServicesOverlaySection from "@/components/ServicesOverlaySection";
import ContactFooterSection from "@/components/ContactFooterSection";

export const metadata: Metadata = {
  title: "Services — Safvra Interior Architecture & Turnkey Fit-Out",
  description:
    "Explore Safvra Studio's bespoke commercial, residential, retail, joinery, and turnkey interior fit-out services.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-dvh w-full bg-white text-[#111111]">
      <Navbar />
      <ServicesPageHero />
      <ServicesOverlaySection />
      <ContactFooterSection />
    </main>
  );
}

