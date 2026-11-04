"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface ServiceColumn {
  id: string;
  number: string;
  topSubtitleLine1: string;
  topSubtitleLine2: string;
  bottomLabelLine1: string;
  bottomLabelLine2: string;
  image: string;
  imageAlt: string;
  defaultOpen?: boolean;
}

const SERVICE_COLUMNS: ServiceColumn[] = [
  {
    id: "commercial-fit-out",
    number: "01",
    topSubtitleLine1: "Explore our",
    topSubtitleLine2: "workspace specialties",
    bottomLabelLine1: "COMMERCIAL",
    bottomLabelLine2: "FIT-OUT",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Modern luxury commercial office fit-out",
    defaultOpen: false,
  },
  {
    id: "residential-fit-out",
    number: "02",
    topSubtitleLine1: "Browse Our Bespoke",
    topSubtitleLine2: "Home Solutions",
    bottomLabelLine1: "RESIDENTIAL",
    bottomLabelLine2: "FIT-OUT",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Bespoke luxury residential living room interior",
    defaultOpen: true,
  },
  {
    id: "retail-fit-out",
    number: "03",
    topSubtitleLine1: "Deep Dive into Our",
    topSubtitleLine2: "Retail Capabilities",
    bottomLabelLine1: "RETAIL",
    bottomLabelLine2: "FIT-OUT",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "High-end boutique retail store interior fit-out",
    defaultOpen: false,
  },
  {
    id: "design-build-turnkey",
    number: "04",
    topSubtitleLine1: "Explore Our Comprehensive",
    topSubtitleLine2: "Project Phases",
    bottomLabelLine1: "DESIGN & BUILD",
    bottomLabelLine2: "(TURNKEY)",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Turnkey architectural design and build interior",
    defaultOpen: true,
  },
  {
    id: "kitchen-installation",
    number: "05",
    topSubtitleLine1: "Custom Culinary Spaces",
    topSubtitleLine2: "& Precision Cabinetry",
    bottomLabelLine1: "KITCHEN",
    bottomLabelLine2: "INSTALLATION",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Contemporary bespoke kitchen island and cabinetry installation",
    defaultOpen: false,
  },
  {
    id: "wood-flooring",
    number: "06",
    topSubtitleLine1: "Timeless Hardwood,",
    topSubtitleLine2: "Parquet & Timber Finishes",
    bottomLabelLine1: "WOOD",
    bottomLabelLine2: "FLOORING",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Warm natural oak wood flooring installation",
    defaultOpen: true,
  },
  {
    id: "door-installation",
    number: "07",
    topSubtitleLine1: "Architectural Doors,",
    topSubtitleLine2: "Frames & Hardware",
    bottomLabelLine1: "DOOR",
    bottomLabelLine2: "INSTALLATION",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Minimalist custom wooden interior door installation",
    defaultOpen: false,
  },
  {
    id: "wardrobe-installation",
    number: "08",
    topSubtitleLine1: "Tailored Walk-In Closets",
    topSubtitleLine2: "& Built-In Storage",
    bottomLabelLine1: "WARDROBE",
    bottomLabelLine2: "INSTALLATION",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Luxury walk-in wardrobe and illuminated closet system",
    defaultOpen: true,
  },
  {
    id: "vanity-installation",
    number: "09",
    topSubtitleLine1: "Bespoke Bathroom",
    topSubtitleLine2: "Counters & Millwork",
    bottomLabelLine1: "VANITY",
    bottomLabelLine2: "INSTALLATION",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Modern marble and wood bathroom vanity installation",
    defaultOpen: false,
  },
  {
    id: "gypsum-ceiling",
    number: "10",
    topSubtitleLine1: "Sculpted False Ceilings",
    topSubtitleLine2: "& Cove Lighting Integration",
    bottomLabelLine1: "GYPSUM",
    bottomLabelLine2: "CEILING",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Architectural gypsum ceiling with recessed linear lighting",
    defaultOpen: true,
  },
  {
    id: "general-maintenance",
    number: "11",
    topSubtitleLine1: "Complete Facility Care",
    topSubtitleLine2: "& Property Upkeep",
    bottomLabelLine1: "GENERAL",
    bottomLabelLine2: "MAINTENANCE",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Professional interior property maintenance and care",
    defaultOpen: false,
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxTranslateX, setMaxTranslateX] = useState(0);

  const outerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Measure horizontal track overflow so we know exact pixel distance to translate on X-axis
  useEffect(() => {
    const updateMeasurements = () => {
      if (!trackRef.current) return;
      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setMaxTranslateX(Math.max(0, totalWidth - viewportWidth));
    };

    updateMeasurements();
    window.addEventListener("resize", updateMeasurements, { passive: true });
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

  // Map vertical scroll progress inside the tall outer wrapper to 0..1 horizontal X progress
  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.top < vh * 0.85) {
        setSectionVisible(true);
      }

      // Total vertical distance while sticky viewport is pinned at top:0
      const scrollableDistance = rect.height - vh;
      if (scrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }

      const scrolled = -rect.top;
      const clamped = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      setScrollProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const currentTranslateX = scrollProgress * maxTranslateX;

  return (
    <section
      id="services"
      ref={outerRef}
      /* 340dvh vertical scroll runway:
         1. User scrolls down into Services until it fills 100dvh (sticky locks at top-0)
         2. Continuing to scroll translates the 11 service columns horizontally along X-axis
         3. Once X reaches the 11th card (100%), normal Y-axis scrolling resumes into StatsSection */
      className="relative w-full h-[340dvh] bg-white text-[#1A1A1A] border-t border-b border-[#E5E4E1] select-none"
    >
      {/* Sticky 100dvh Viewport Container */}
      <div className="sticky top-0 left-0 h-dvh w-full overflow-hidden bg-white">
        {/* Top-Left Brand Mark ("Services") */}
        <div
          className={`pointer-events-none absolute top-7 left-6 sm:top-10 sm:left-10 z-30 flex items-center gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <svg
            width="22"
            height="18"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#1A1A1A]"
          >
            <circle cx="6.5" cy="9.5" r="4.5" fill="currentColor" />
            <circle cx="14.5" cy="6.5" r="4" fill="currentColor" />
            <circle cx="14.5" cy="13.5" r="4" fill="currentColor" />
            <circle cx="11.5" cy="8.5" r="1.5" fill="white" />
          </svg>
          <span className="text-[14px] sm:text-[15.5px] font-medium tracking-[-0.02em] text-[#2A2A2A]">
            Services
          </span>
        </div>

        {/* Spanning Editorial Headline ("OUR SERVICES") & Progress Indicator */}
        <div
          className={`pointer-events-none absolute top-7 right-6 sm:top-10 lg:left-[50%] lg:right-10 z-30 transition-all duration-900 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 lg:pl-8 xl:pl-12">
            <div>
              <h2 className="text-[26px] sm:text-[42px] xl:text-[52px] font-normal uppercase tracking-[0.02em] leading-[1.12] text-[#222222]">
                OUR SERVICES
              </h2>

              <div className="mt-4 sm:mt-6 pointer-events-auto inline-flex items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex h-10 sm:h-11 items-center justify-center rounded-full border border-[#222222]/75 bg-white/85 backdrop-blur-sm px-6 sm:px-7 text-[10.5px] sm:text-[11.5px] font-medium uppercase tracking-[0.12em] text-[#1A1A1A] transition-all duration-300 ease-out hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]"
                >
                  <span>EXPLORE SERVICES</span>
                </a>

                {/* Subtle Horizontal Scroll Progress Bar */}
                <div className="hidden sm:flex items-center gap-2.5">
                  <div className="h-[2px] w-24 bg-black/10 overflow-hidden rounded-full">
                    <div
                      style={{
                        transform: `scaleX(${Math.max(0.08, scrollProgress)})`,
                      }}
                      className="h-full w-full origin-left bg-[#FF5526] transition-transform duration-150 ease-out"
                    />
                  </div>
                  <span className="font-mono text-[11px] text-[#666666] tabular-nums">
                    {String(
                      Math.min(
                        11,
                        Math.max(1, Math.round(1 + scrollProgress * 10))
                      )
                    ).padStart(2, "0")}{" "}
                    / 11
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal X-Axis Track Driven by Vertical Scroll */}
        <div
          ref={trackRef}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            transform: `translate3d(${-currentTranslateX.toFixed(1)}px, 0, 0)`,
          }}
          className="flex h-full w-max divide-x divide-[#E5E4E1] will-change-transform transition-transform duration-75 ease-out"
        >
          {SERVICE_COLUMNS.map((col, idx) => {
            // Multiple services open by default (02, 04, 06, 08, 10) when not hovering;
            // when hovering a specific card, that card opens and others close
            const isRevealed =
              hoveredIndex !== null ? hoveredIndex === idx : Boolean(col.defaultOpen);

            return (
              <Link
                key={col.id}
                href={`/services/${col.id}`}
                tabIndex={0}
                onMouseEnter={() => setHoveredIndex(idx)}
                onFocus={() => setHoveredIndex(idx)}
                onBlur={() => setHoveredIndex(null)}
                style={{
                  transitionDelay:
                    sectionVisible && idx < 5 ? `${idx * 90}ms` : "0ms",
                }}
                className={`group relative shrink-0 w-[85vw] sm:w-[50vw] lg:w-[25vw] h-dvh flex flex-col justify-between p-6 sm:p-8 xl:p-10 overflow-hidden cursor-pointer outline-none transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  sectionVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Full-Height Image Curtain Sliding Up from the Bottom */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 z-10 overflow-hidden transition-transform duration-[850ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                    isRevealed ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <img
                    src={col.image}
                    alt={col.imageAlt}
                    loading="lazy"
                    width={700}
                    height={1100}
                    className={`h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                      isRevealed ? "scale-100" : "scale-115"
                    }`}
                  />
                  {/* Soft Warm Top & Bottom Readability Wash */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ECEAE4]/75 via-transparent to-[#D5CFBE]/75" />
                </div>

                {/* Top Subtitle inside Column — Reveals when active */}
                <div
                  className={`relative z-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    idx === 0 ? "pt-14 lg:pt-16" : "pt-14 lg:pt-2"
                  } ${
                    isRevealed
                      ? "opacity-100 translate-y-0 delay-100"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  <p className="text-[14px] sm:text-[15.5px] font-normal leading-[1.38] tracking-[-0.01em] text-[#222222]">
                    {col.topSubtitleLine1}
                    <br />
                    {col.topSubtitleLine2}
                  </p>
                </div>

                {/* Middle Decorative Bold Asterisk `*` — Animates in & spins when active */}
                <div
                  aria-hidden="true"
                  className={`relative z-20 my-auto pl-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isRevealed
                      ? "opacity-100 translate-y-6 rotate-90 scale-100 delay-150"
                      : "opacity-0 translate-y-14 rotate-0 scale-75"
                  }`}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#121212]"
                  >
                    <path
                      d="M16 3V29M4.74 9.5L27.26 22.5M27.26 9.5L4.74 22.5"
                      stroke="currentColor"
                      strokeWidth="4.2"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>

                {/* Bottom Index Number (01–11) + 2-Line Service Title */}
                <div className="relative z-20 mt-auto pt-8">
                  <span className="block font-mono text-[12px] sm:text-[13px] font-medium tracking-[0.06em] text-[#FF5526] mb-2">
                    {col.number}
                  </span>
                  <h3
                    className={`text-[22px] sm:text-[26px] xl:text-[31px] font-normal uppercase tracking-[0.02em] leading-[1.18] text-[#1E1E1E] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isRevealed ? "-translate-y-1.5" : "translate-y-0"
                    }`}
                  >
                    <span className="block">{col.bottomLabelLine1}</span>
                    <span className="block">{col.bottomLabelLine2}</span>
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
