import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHeroSection from "@/components/AboutHeroSection";
import FoundersSection from "@/components/FoundersSection";
import AboutStorySection from "@/components/AboutStorySection";
import StatsSection from "@/components/StatsSection";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import ContactFooterSection from "@/components/ContactFooterSection";

export const metadata: Metadata = {
  title: "The Studio — Safvara Interior Architecture & Fit-Out",
  description:
    "We create timeless architectural and interior spaces focused on clarity, functionality, and modern living.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-dvh w-full bg-[#F8F8F6] text-[#121212]">
      <Navbar />
      <AboutHeroSection />
      <FoundersSection />
      <AboutStorySection />
      <StatsSection />
      <WhyWorkWithUsSection />
      <ContactFooterSection />
    </main>
  );
}

