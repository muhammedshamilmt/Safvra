import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectsPageClient from "@/components/ProjectsPageClient";
import ContactFooterSection from "@/components/ContactFooterSection";

export const metadata: Metadata = {
  title: "Projects & Selected Works — Safvara Interior Architecture & Fit-Out",
  description:
    "Explore Safvara Studio's curated architectural portfolio of luxury residences, turnkey penthouses, corporate headquarters, and high-jewelry retail ateliers.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-dvh w-full bg-white text-[#121212]">
      <Navbar />
      <ProjectsPageClient />
      <ContactFooterSection />
    </main>
  );
}

