"use client";

import { useEffect, useRef, useState } from "react";

const STUDIO_STATEMENT_WORDS = [
  "A",
  "global",
  "interior",
  "studio",
  "crafting",
  "bold",
  "and",
  "adaptive",
  "spaces",
  "for",
  "modern",
  "businesses.",
];

const HERO_PILLS = [
  { label: "Spatial Architecture", opacityClass: "opacity-35 blur-[0.3px]" },
  { label: "Commercial Fit-Out", opacityClass: "opacity-85" },
  { label: "Bespoke Joinery", opacityClass: "opacity-100" },
  { label: "Turnkey Execution", opacityClass: "opacity-55" },
];

export default function ServicesPageHero() {
  const statementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let rafId = 0;
    let current = 0;
    let target = 0;

    const computeTarget = () => {
      if (!statementRef.current) return;
      const rect = statementRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.88;
      const end = vh * 0.22;
      const raw = (start - rect.top) / Math.max(1, start - end);
      target = Math.max(0, Math.min(1, raw));
    };

    const tick = () => {
      computeTarget();
      const diff = target - current;
      if (Math.abs(diff) > 0.0005) {
        current += diff * 0.14;
        setScrollProgress(current);
        rafId = requestAnimationFrame(tick);
      } else {
        current = target;
        setScrollProgress(target);
        rafId = 0;
      }
    };

    const onScrollOrResize = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    };

    computeTarget();
    current = target;
    setScrollProgress(target);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const totalWords = STUDIO_STATEMENT_WORDS.length;

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full bg-white  text-[#111111] select-none overflow-hidden"
    >
      {/* ================================================================== */}
      {/* SECTION 1: FULL-WIDTH WHITE HERO ("SAFVRA" + 3 CENTER CARDS)       */}
      {/* ================================================================== */}
      <section
        aria-label="Services Studio Hero"
        className="relative w-full bg-white px-5 sm:px-9 md:px-14 pt-6 sm:pt-8 pb-10 sm:pb-14 overflow-hidden"
      >
        {/* Giant Full-Bleed Uppercase Wordmark */}
        <div
          className={`w-full overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <h1 className="w-full text-center font-sans text-[20.8vw] sm:text-[19.8vw] font-extrabold uppercase tracking-[-0.055em] leading-[0.82] text-[#0A0A0A] whitespace-nowrap">
            SAFVRA
          </h1>
        </div>

        {/* Sub-Timestamp "@ 2019 - 26" directly under the left edge */}
        <div
          style={{ transitionDelay: "120ms" }}
          className={`mt-2.5 sm:mt-4 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
        >
          <p className="text-[18px] sm:text-[25px] md:text-[29px] font-bold tracking-[-0.035em] leading-none text-[#111111]">
            @ 2019 – 26
          </p>
        </div>

        {/* Middle Row: 3 Rounded Visual Cards Trio + Right Vertical "Based in UAE" */}
        <div className="relative my-8 sm:my-12 flex items-center justify-center">
          {/* Center 3-Card Trio */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-5">
            {/* Left Card */}
            <div
              style={{
                transitionDelay: "180ms",
                transform: `translate3d(${mouseOffset.x * -6}px, ${mouseOffset.y * -4}px, 0)`,
              }}
              className={`group relative w-[102px] sm:w-[170px] md:w-[205px] aspect-[1/1.16] rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#E9E6E0] shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out ${isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
                }`}
            >
              <img
                src="/landing/cards-imgs/image-1.png"
                alt="Bespoke architectural material detail"
                fetchPriority="high"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#FF5526]/25 via-transparent to-transparent mix-blend-overlay" />
            </div>

            {/* Middle Card (Taller & Elevated) */}
            <div
              style={{
                transitionDelay: "260ms",
                transform: `translate3d(${mouseOffset.x * 5}px, ${mouseOffset.y * 6}px, 0)`,
              }}
              className={`group relative z-10 w-[122px] sm:w-[200px] md:w-[242px] aspect-[1/1.22] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#1A1A1A] shadow-[0_22px_55px_rgba(0,0,0,0.14)] transition-all duration-700 ease-out ${isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
                }`}
            >
              <img
                src="/landing/projects/image-1.png"
                alt="Signature interior architecture showcase"
                fetchPriority="high"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Right Card */}
            <div
              style={{
                transitionDelay: "340ms",
                transform: `translate3d(${mouseOffset.x * -5}px, ${mouseOffset.y * 4}px, 0)`,
              }}
              className={`group relative w-[102px] sm:w-[170px] md:w-[205px] aspect-[1/1.16] rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#E5E5E0] shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out ${isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
                }`}
            >
              <img
                src="/landing/cards-imgs/image-2.png"
                alt="Refined interior living environment"
                fetchPriority="high"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Vertical Sideways Label ("Based in USA / UAE") */}
          <span
            aria-hidden="true"
            className="hidden sm:inline-block absolute right-0 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10.5px] font-medium tracking-[0.04em] text-[#7A7A7A]"
          >
            Based in UAE
          </span>
        </div>

        {/* Bottom Row: Left Wireframe Globe + Tagline & Right Stacked Capability Pills */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          {/* Bottom-Left: Globe Icon + 3-Line Tagline */}
          <div
            style={{ transitionDelay: "380ms" }}
            className={`transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
              }`}
          >
            {/* Minimalist Horizontal Wireframe Globe SVG */}
            <svg
              width="52"
              height="28"
              viewBox="0 0 56 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#1A1A1A] mb-3.5"
            >
              <ellipse
                cx="28"
                cy="15"
                rx="26"
                ry="13"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <ellipse
                cx="28"
                cy="15"
                rx="16"
                ry="13"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <ellipse
                cx="28"
                cy="15"
                rx="6.5"
                ry="13"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <line
                x1="2"
                y1="15"
                x2="54"
                y2="15"
                stroke="currentColor"
                strokeWidth="1.1"
              />
              <path
                d="M5 9.5C14 11.5 42 11.5 51 9.5"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M5 20.5C14 18.5 42 18.5 51 20.5"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            <p className="text-[13px] sm:text-[14.5px] leading-[1.35] tracking-[-0.02em]">
              <span className="block font-semibold text-[#111111]">
                Creative Solutions &amp;
              </span>
              <span className="block font-semibold text-[#111111]">
                Innovation Tailored for
              </span>
              <span className="block font-medium text-[#707070]">
                forward-thinking spaces.
              </span>
            </p>
          </div>

          {/* Bottom-Right: Stacked Soft Gray Pill Badges */}
          <div
            style={{ transitionDelay: "440ms" }}
            className={`flex flex-col items-start sm:items-end gap-1.5 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
              }`}
          >
            {HERO_PILLS.map((pill) => (
              <span
                key={pill.label}
                className={`inline-flex items-center rounded-full bg-[#F4F4F2] px-4 py-1.5 text-[11px] sm:text-[11.5px] font-medium tracking-[-0.01em] text-[#222222] transition-opacity duration-300 hover:opacity-100 ${pill.opacityClass}`}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 2: "• Studio •" SCROLL-DRIVEN WORD REVEAL STATEMENT        */}
      {/* ================================================================== */}
      <section
        ref={statementRef}
        aria-label="Studio Statement"
        className="mx-auto max-w-[1180px] bg-[#F4F4F2] py-24 sm:py-32 lg:py-40 px-4 sm:px-8 text-center"
      >
        {/* Top "• Studio •" Badge */}
        <div className="inline-flex items-center justify-center gap-2.5 mb-7 sm:mb-9">
          <span
            aria-hidden="true"
            className="h-1 w-1 rounded-full bg-[#FF5526]"
          />
          <span className="text-[12px] sm:text-[13px] font-semibold tracking-[-0.01em] text-[#222222]">
            Studio
          </span>
          <span
            aria-hidden="true"
            className="h-1 w-1 rounded-full bg-[#FF5526]"
          />
        </div>

        {/* Large Centered Statement with Word-by-Word Scroll Reveal */}
        <h2 className="mx-auto max-w-[920px] text-[30px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-medium tracking-[-0.038em] leading-[1.12]">
          {STUDIO_STATEMENT_WORDS.map((word, index) => {
            const wordStart = (index / totalWords) * 0.72;
            const wordEnd = wordStart + 0.28;
            const localProgress = Math.max(
              0,
              Math.min(1, (scrollProgress - wordStart) / (wordEnd - wordStart))
            );
            const eased =
              localProgress * localProgress * (3 - 2 * localProgress);

            const blurPx = (1 - eased) * 4.5;
            const gradientSplit = Math.round(eased * 100);

            return (
              <span
                key={`${word}-${index}`}
                style={{
                  filter:
                    blurPx > 0.08 ? `blur(${blurPx.toFixed(2)}px)` : "none",
                  backgroundImage: `linear-gradient(90deg, #111111 ${gradientSplit}%, #767676 ${Math.min(
                    100,
                    gradientSplit + 30
                  )}%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                className="inline-block mx-[0.14em] pb-1 will-change-[filter] transition-[filter] duration-150 ease-out"
              >
                {word}
              </span>
            );
          })}
        </h2>
      </section>
    </div>
  );
}

