import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactPageHero from "@/components/ContactPageHero";
import ContactFaqSection from "@/components/ContactFaqSection";
import ContactFooterSection from "@/components/ContactFooterSection";

export const metadata: Metadata = {
  title: "Contact Us — Safvra Interior Architecture & Fit-Out Studio",
  description:
    "Get in touch with Safvra Studio for bespoke residential, commercial, and turnkey interior fit-out enquiries.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-dvh w-full bg-white text-[#111111]">
      <Navbar />
      <ContactPageHero />
      <ContactFaqSection />
      <ContactFooterSection />
    </main>
  );
}

