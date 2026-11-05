"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutStorySection() {
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
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Why We Exist"
      className="relative w-full bg-[#0B0D0E] text-white overflow-hidden select-none"
    >
      {/* ==================================================================== */}
      {/* UPPER BLOCK: WIDE CINEMATIC HERO SHOT (ENGINEERING & ARCHITECTURE)   */}
      {/* ==================================================================== */}
      <div className="relative w-full aspect-[16/7.5] sm:aspect-[16/6.8] lg:aspect-[16/6] overflow-hidden bg-[#141414]">
        <img
          src="https://media.istockphoto.com/id/2210548432/photo/managing-data-servers-in-a-secure-facility.jpg?s=612x612&w=0&k=20&c=SZDG2z2lwiyncUZ8Gb4OVxDKxc0-2HoIzxB9BmPRJXo="
          alt="Architectural & technical execution on site"
          loading="lazy"
          className="h-full w-full object-cover object-top   transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
        />
        {/* Subtle cinematic gradient vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-transparent to-black/30" />
      </div>

      {/* ==================================================================== */}
      {/* LOWER BLOCK: 2-COLUMN SPLIT (AERIAL PROJECT SHOT + DARK TECH GRID)   */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] lg:min-h-[640px]">
        {/* Left Column (5.5 Cols): Deep Aerial Project Landscape with "site" Badge */}
        <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-[#161819]">
          <img
            src="https://i.pinimg.com/736x/76/6b/11/766b119794a02dfe96acbea30fa1024c.jpg"
            alt="Aerial landscape site execution"
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0D0E]/60 hidden lg:block" />

          {/* Bottom-Left Translucent Rounded Pill Badge ("site") */}
          <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 z-10">
            <span className="inline-flex items-center rounded-2xl bg-white/20 backdrop-blur-md px-4 py-2 text-[14px] sm:text-[15px] font-normal tracking-[-0.01em] text-white shadow-lg border border-white/15">
              site
            </span>
          </div>
        </div>

        {/* Right Column (7 Cols): Dark Textured Architectural Grid + Narrative */}
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-20 border-t lg:border-t-0 lg:border-l border-white/[0.08]"
        >
          {/* Eyebrow: Green Dot + "Why We Exist" */}
          <div
            className={`flex items-center gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              }`}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]"
            />
            <span className="text-[11.5px] sm:text-[12px] font-mono tracking-[0.06em] text-white/80">
              Why We Exist
            </span>
          </div>

          {/* Main Display Headline */}
          <div
            style={{ transitionDelay: "120ms" }}
            className={`my-10 lg:my-14 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-8 blur-[6px]"
              }`}
          >
            <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] xl:text-[48px] font-normal tracking-[-0.034em] leading-[1.12] text-white max-w-[720px]">
              Modern architecture is evolving faster than conventional builders
              can adapt. Single-source fit-out is the infrastructure that keeps pace.
            </h2>
          </div>

          {/* Bottom Dual Narrative Columns */}
          <div
            style={{ transitionDelay: "240ms" }}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-white/[0.08] text-[12px] sm:text-[13px] leading-[1.65] tracking-[-0.01em] text-[#9A9B9C] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
              }`}
          >
            <div>
              <p>
                Demand for authentic craftsmanship is surging after decades of
                fragmented subcontracting, where architectural intent was routinely
                compromised. That gap shows up as budget escalations, misaligned joinery,
                and painful delays where precision matters most.
              </p>
            </div>

            <div>
              <p>
                Our unified design-and-build practice takes private residences and
                commercial flagships from signed architectural drawings to operating
                turnkey handover in 12 to 16 weeks, placed exactly where the vision
                demands it. That speed and purity is the point of Safvra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

