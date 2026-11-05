"use client";

import { useEffect, useRef, useState } from "react";

interface Founder {
  id: number;
  name: string;
  role: string;
  image: string;
  flipHorizontal?: boolean;
}

const FOUNDERS: Founder[] = [
  {
    id: 1,
    name: "JOHN MOSSIER",
    role: "Co-Founder & Principal Architect",
    image: "/avathars/image-1.png",
  },
  {
    id: 2,
    name: "STACY FREED",
    role: "Co-Founder & Creative Director",
    image: "/avathars/image-2.png",
  },
  {
    id: 3,
    name: "MATT LONGST",
    role: "Managing Partner & Head of Fit-Out",
    image: "/avathars/image-1.png",
    flipHorizontal: true,
  },
  {
    id: 4,
    name: "ELENA VANCE",
    role: "Partner & Interior Architecture Lead",
    image: "/avathars/image-2.png",
    flipHorizontal: true,
  },
];

export default function FoundersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollParallax, setScrollParallax] = useState(0);

  // Trigger staggered entrance animation when section enters viewport
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
      { threshold: 0.16 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Subtle scroll-linked parallax as user scrolls through the section
  useEffect(() => {
    let rafId = 0;

    const updateScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = Math.max(
        0,
        Math.min(1, (vh - rect.top) / (vh + rect.height))
      );
      setScrollParallax(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const maxIndex = FOUNDERS.length - 2;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="founders"
      ref={sectionRef}
      aria-label="Our Founders and Board of Directors"
      className="relative z-20 w-full overflow-hidden bg-gradient-to-b from-[#F8F8F6] via-[#F3F3F1] to-[#E6E6E3] pt-20 sm:pt-28 lg:pt-32 border-b-[10px] border-[#CBCBC7] select-none"
    >
      {/* Upper Header Container: "+ OUR TEAM", Heading & Prev/Next Arrow Controls */}
      <div className="mx-auto max-w-[1680px] px-6 sm:px-10 md:px-14">
        {/* Eyebrow "+ OUR TEAM" */}
        <div
          className={`flex items-center gap-2.5 text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.14em] text-[#3A3A3A] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
            ? "opacity-100 translate-y-0 blur-none"
            : "opacity-0 translate-y-4 blur-[4px]"
            }`}
        >
          <span className="text-[14px] font-normal leading-none text-[#121212]">
            +
          </span>
          <span>OUR TEAM</span>
        </div>

        {/* Main Title Row + Slider Navigation Buttons */}
        <div className="mt-4 sm:mt-5 flex items-end justify-between gap-6">
          <h2
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
            className={`text-[36px] sm:text-[50px] md:text-[58px] lg:text-[64px] font-normal tracking-[-0.036em] leading-[1.04] text-[#111111] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-8 blur-[6px]"
              }`}
          >
            Board of Directors
          </h2>

          {/* Right Square Prev / Next Controls matching the reference */}
          <div
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            className={`flex items-center gap-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
              }`}
          >
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous founder"
              className="group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[3px] bg-[#ECECE9] text-[#121212] transition-all duration-300 hover:bg-[#121212] hover:text-white active:scale-95 cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              >
                <path
                  d="M12.5 4.5L7 10L12.5 15.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next founder"
              className="group flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[3px] bg-[#ECECE9] text-[#121212] transition-all duration-300 hover:bg-[#121212] hover:text-white active:scale-95 cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M7.5 4.5L13 10L7.5 15.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Founders Track (2 Full Columns + 3rd Peeking on Right) */}
      <div className="mt-14 sm:mt-20 lg:mt-24 w-full pl-6 sm:pl-10 md:pl-14">
        <div
          style={{
            transform: `translate3d(calc(-${activeIndex} * var(--founder-col-w, 43vw)), 0, 0)`,
          }}
          className="flex items-end transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform [--founder-col-w:84vw] sm:[--founder-col-w:46vw] lg:[--founder-col-w:43vw]"
        >
          {FOUNDERS.map((founder, idx) => {
            const staggerMs = 180 + idx * 140;

            return (
              <article
                key={founder.id}
                style={{
                  transitionDelay: isVisible ? `${staggerMs}ms` : "0ms",
                }}
                className={`group relative w-[84vw] sm:w-[46vw] lg:w-[43vw] shrink-0 flex flex-col justify-between transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                  ? "opacity-100 translate-y-0 blur-none"
                  : "opacity-0 translate-y-14 blur-[8px]"
                  }`}
              >
                {/* Top Name Header with Left Architectural Bracket Divider */}
                <div className="relative flex items-center pl-4 sm:pl-5 py-1.5">
                  {/* Left Vertical Bracket Line with Subtle Curved Ticks */}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-[6px] border-l border-t border-b border-[#D2D2CE] rounded-l-[3px] transition-colors duration-500 group-hover:border-[#FF5526]"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <h3 className="text-[11px] sm:text-[12px] font-mono font-medium uppercase tracking-[0.12em] text-[#2B2B2B] transition-colors duration-300 group-hover:text-[#111111]">
                      {founder.name}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-normal tracking-[-0.01em] text-[#7A7A76] opacity-0 -translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0">
                      — {founder.role}
                    </span>
                  </div>
                </div>

                {/* Bottom-Aligned Studio Portrait Cutout */}
                <div className="relative mt-4 sm:mt-6 flex w-full items-end justify-start sm:justify-center pr-6 sm:pr-12 overflow-hidden">
                  <div
                    style={{
                      transform: `translate3d(0, ${(1 - scrollParallax) * 14}px, 0)`,
                    }}
                    className="relative w-[290px] sm:w-[360px] md:w-[410px] lg:w-[440px] aspect-[310/322] flex items-end justify-center transition-transform duration-700 ease-out"
                  >
                    <img
                      src={founder.image}
                      alt={`${founder.name} — ${founder.role}`}
                      loading="lazy"
                      className={`h-full w-full object-contain object-bottom mix-blend-multiply contrast-[1.03] brightness-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] ${founder.flipHorizontal ? "-scale-x-100 group-hover:scale-x-[-1.035] group-hover:scale-y-[1.035]" : ""
                        }`}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

