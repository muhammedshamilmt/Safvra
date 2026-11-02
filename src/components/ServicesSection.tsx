"use client";

import { useState, useEffect, useRef } from "react";

interface ServiceColumn {
  id: string;
  number: string;
  topSubtitleLine1: string;
  topSubtitleLine2: string;
  bottomLabelLine1: string;
  bottomLabelLine2: string;
  image: string;
  imageAlt: string;
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
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Minimalist sculptural armchair in warm architectural light",
  },
  {
    id: "residential-fit-out",
    number: "02",
    topSubtitleLine1: "Browse Our Bespoke",
    topSubtitleLine2: "Home Solutions",
    bottomLabelLine1: "RESIDENTIAL",
    bottomLabelLine2: "FIT-OUT",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "White bouclé modern designer chair on desert sand",
  },
  {
    id: "retail-fit-out",
    number: "03",
    topSubtitleLine1: "Deep Dive into Our",
    topSubtitleLine2: "Retail Capabilities",
    bottomLabelLine1: "RETAIL",
    bottomLabelLine2: "FIT-OUT",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1000&auto=format&fit=crop",
    imageAlt: "Contemporary warm minimalist interior space",
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
    imageAlt: "Architectural design studio space",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(1);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSectionVisible(true);
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full min-h-dvh bg-white text-[#1A1A1A] border-t border-b border-[#E5E4E1] overflow-hidden select-none"
    >
      {/* Top-Left Brand Mark ("Services") — Positioned cleanly in Column 1 */}
      <div
        className={`pointer-events-none absolute top-7 left-6 sm:top-10 sm:left-10 z-30 flex items-center gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
          }`}
      >
        {/* 3-Cluster Organic Dot Icon matching the reference */}
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

      {/* Spanning Editorial Headline ("OUR SERVICES") & Pill Across Columns 3 & 4 */}
      <div
        className={`pointer-events-none lg:absolute lg:top-10 lg:left-[50%] lg:right-0 z-30 px-6 pt-24 pb-6 lg:p-0 lg:pl-8 xl:pl-12 transition-all duration-900 delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
          }`}
      >
        <div className="max-w-[680px]">
          <h2 className="text-[32px] sm:text-[44px] xl:text-[52px] font-normal uppercase tracking-[0.02em] leading-[1.14] text-[#222222]">
            OUR SERVICES
          </h2>

          <div className="mt-6 sm:mt-8 pointer-events-auto inline-block">
            <a
              href="#contact"
              className="group inline-flex h-10 sm:h-11 items-center justify-center rounded-full border border-[#222222]/75 bg-white/85 backdrop-blur-sm px-6 sm:px-7 text-[10.5px] sm:text-[11.5px] font-medium uppercase tracking-[0.12em] text-[#1A1A1A] transition-all duration-300 ease-out hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]"
            >
              <span>EXPLORE SERVICES</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Interactive Vertical Service Columns */}
      <div
        onMouseLeave={() => setHoveredIndex(1)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-[780px] lg:min-h-dvh w-full divide-y sm:divide-y-0 sm:divide-x divide-[#E5E4E1]"
      >
        {SERVICE_COLUMNS.map((col, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={col.id}
              tabIndex={0}
              onMouseEnter={() => setHoveredIndex(idx)}
              onFocus={() => setHoveredIndex(idx)}
              onBlur={() => setHoveredIndex(1)}
              style={{
                transitionDelay: sectionVisible ? `${idx * 100}ms` : "0ms",
              }}
              className={`group relative flex flex-col justify-between min-h-[460px] sm:min-h-[640px] lg:min-h-dvh p-6 sm:p-8 xl:p-10 overflow-hidden cursor-pointer outline-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
            >
              {/* Full-Height Default Image Curtain Sliding Up from the Bottom on Hover */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 z-10 overflow-hidden transition-transform duration-[850ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${isHovered ? "translate-y-0" : "translate-y-full"
                  }`}
              >
                <img
                  src={col.image}
                  alt={col.imageAlt}
                  loading="lazy"
                  width={700}
                  height={1100}
                  className={`h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${isHovered ? "scale-100" : "scale-115"
                    }`}
                />
                {/* Soft Warm Top & Bottom Readability Wash */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#ECEAE4]/70 via-transparent to-[#D5CFBE]/60" />
              </div>

              {/* Top Subtitle inside Column — Reveals when hovered */}
              <div
                className={`relative z-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${idx === 0 ? "pt-12 lg:pt-14" : "pt-1"
                  } ${isHovered
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

              {/* Middle Decorative Bold Asterisk `*` — Animates in & spins on hover */}
              <div
                aria-hidden="true"
                className={`relative z-20 my-auto pl-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isHovered
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

              {/* Bottom Index Number (01–04) + 2-Line Service Title */}
              <div className="relative z-20 mt-auto pt-8">
                <span className="block font-mono text-[12px] sm:text-[13px] font-medium tracking-[0.06em] text-[#FF5526] mb-2">
                  {col.number}
                </span>
                <h3
                  className={`text-[22px] sm:text-[26px] xl:text-[31px] font-normal uppercase tracking-[0.02em] leading-[1.18] text-[#1E1E1E] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isHovered ? "-translate-y-1.5" : "translate-y-0"
                    }`}
                >
                  <span className="block">{col.bottomLabelLine1}</span>
                  <span className="block">{col.bottomLabelLine2}</span>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
