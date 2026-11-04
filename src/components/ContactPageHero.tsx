"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactPageHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Contact Us"
      className="relative min-h-dvh w-full bg-white text-[#111111] flex flex-col justify-between px-6 sm:px-10 md:px-14 pt-6 sm:pt-8 pb-10 sm:pb-12 overflow-hidden select-none"
    >
      {/* Top Bar: Centered Brand Lockup + Right Language Toggle (harmonized with floating Navbar) */}
      <div
        className={`mx-auto w-full max-w-[1640px] flex items-start justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
      >
        {/* Left spacer for floating Navbar logo */}
        <div className="w-20" />

        {/* Center Architectural Studio Wordmark Lockup */}
        <div className="flex flex-col items-center text-center pt-1">
          <span className="text-[20px] sm:text-[24px] font-light tracking-[0.14em] uppercase leading-none text-[#111111]">
            SAFVRA
          </span>
          <span className="mt-1.5 text-[7.5px] sm:text-[8.5px] font-medium tracking-[0.22em] uppercase text-[#7A7A7A]">
            INTERIOR STUDIO
          </span>
        </div>

        {/* Right spacer for floating Navbar menu button */}
        <div className="w-20" />
      </div>

      {/* Main 12-Column Contact Directory & Visual Grid */}
      <div className="mx-auto w-full max-w-[1640px] flex-1 grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-12 pt-12 sm:pt-16 lg:pt-20">
        {/* ================================================================ */}
        {/* LEFT COLUMN (5 Cols): "Contact us" Title + Subtitle + Socials    */}
        {/* ================================================================ */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          {/* Upper Heading & Subtitle */}
          <div
            style={{ transitionDelay: isVisible ? "80ms" : "0ms" }}
            className={`transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-8 blur-[6px]"
              }`}
          >
            <h1 className="text-[48px] sm:text-[64px] lg:text-[72px] xl:text-[78px] font-normal tracking-[-0.036em] leading-[1.02] text-[#111111]">
              Contact us
            </h1>

            <p className="mt-6 sm:mt-8 text-[13.5px] sm:text-[15px] font-normal tracking-[-0.015em] leading-[1.52] text-[#3A3A3A] max-w-[265px]">
              Get in touch with us for any enquiries
              <br />
              and questions
            </p>
          </div>

          {/* Bottom-Left Social Links (Aligned with Bottom of Right Photograph) */}
          <div
            style={{ transitionDelay: isVisible ? "340ms" : "0ms" }}
            className={`pt-10 lg:pt-0 flex items-center gap-8 sm:gap-11 text-[13.5px] sm:text-[14.5px] font-medium tracking-[-0.015em] text-[#111111] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              }`}
          >
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="relative py-0.5 transition-colors duration-300 hover:text-[#FF5526] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#FF5526] after:transition-all after:duration-300 hover:after:w-full"
            >
              Behance
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="relative py-0.5 transition-colors duration-300 hover:text-[#FF5526] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#FF5526] after:transition-all after:duration-300 hover:after:w-full"
            >
              Instagram
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noreferrer"
              className="relative py-0.5 transition-colors duration-300 hover:text-[#FF5526] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#FF5526] after:transition-all after:duration-300 hover:after:w-full"
            >
              Telegram
            </a>
          </div>
        </div>

        {/* ================================================================ */}
        {/* RIGHT COLUMN (7 Cols): 2x2 Contact Info Grid + Bedroom Image     */}
        {/* ================================================================ */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-10 sm:gap-12">
          {/* 2x2 Contact Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-9 sm:gap-y-11 pt-1">
            {/* 1. General Inquiries */}
            <div
              style={{ transitionDelay: isVisible ? "140ms" : "0ms" }}
              className={`transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-6 blur-[4px]"
                }`}
            >
              <p className="text-[12.5px] sm:text-[13.5px] font-normal tracking-[-0.01em] text-[#9A9A9A] mb-3">
                general inquiries
              </p>
              <div className="flex flex-col gap-1 text-[14.5px] sm:text-[15.5px] font-medium tracking-[-0.015em] text-[#111111]">
                <a
                  href="mailto:work@safvrastudio.work"
                  className="w-fit transition-colors duration-200 hover:text-[#FF5526]"
                >
                  work@safvrastudio.work
                </a>
                <a
                  href="tel:+79112969217"
                  className="w-fit transition-colors duration-200 hover:text-[#FF5526]"
                >
                  +7 911 296 92 17
                </a>
              </div>
            </div>

            {/* 2. Careers */}
            <div
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              className={`transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-6 blur-[4px]"
                }`}
            >
              <p className="text-[12.5px] sm:text-[13.5px] font-normal tracking-[-0.01em] text-[#9A9A9A] mb-3">
                careers
              </p>
              <div className="flex flex-col gap-1 text-[14.5px] sm:text-[15.5px] font-medium tracking-[-0.015em] text-[#111111]">
                <a
                  href="mailto:hr@safvrastudio.work"
                  className="w-fit transition-colors duration-200 hover:text-[#FF5526]"
                >
                  hr@safvrastudio.work
                </a>
              </div>
            </div>

            {/* 3. Collaborations */}
            <div
              style={{ transitionDelay: isVisible ? "260ms" : "0ms" }}
              className={`transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-6 blur-[4px]"
                }`}
            >
              <p className="text-[12.5px] sm:text-[13.5px] font-normal tracking-[-0.01em] text-[#9A9A9A] mb-3">
                collaborations
              </p>
              <div className="flex flex-col gap-1 text-[14.5px] sm:text-[15.5px] font-medium tracking-[-0.015em] text-[#111111]">
                <a
                  href="mailto:n.karpova@safvrastudio.work"
                  className="w-fit transition-colors duration-200 hover:text-[#FF5526]"
                >
                  n.karpova@safvrastudio.work
                </a>
                <a
                  href="tel:+79312121607"
                  className="w-fit transition-colors duration-200 hover:text-[#FF5526]"
                >
                  +7 931 212-16-07
                </a>
              </div>
            </div>

            {/* 4. Address */}
            <div
              style={{ transitionDelay: isVisible ? "320ms" : "0ms" }}
              className={`transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-6 blur-[4px]"
                }`}
            >
              <p className="text-[12.5px] sm:text-[13.5px] font-normal tracking-[-0.01em] text-[#9A9A9A] mb-3">
                address
              </p>
              <address className="not-italic text-[14.5px] sm:text-[15.5px] font-medium tracking-[-0.015em] leading-[1.45] text-[#111111]">
                191189, St. Petersburg,
                <br />
                Moika River Embankment 67-69
              </address>
            </div>
          </div>

          {/* Bottom-Right Warm Minimalist Bedroom Interior Photograph */}
          <div
            style={{ transitionDelay: isVisible ? "380ms" : "0ms" }}
            className={`group relative w-full aspect-[476/222] overflow-hidden bg-[#EAE7E1] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0 scale-100 blur-none"
              : "opacity-0 translate-y-10 scale-[0.98] blur-[6px]"
              }`}
          >
            <img
              src="/landing/herobg.png"
              alt="Warm minimalist interior bedroom by Safvra Studio"
              fetchPriority="high"
              className="h-full w-full object-fit object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

