"use client";

import { useEffect, useRef, useState } from "react";

const STATEMENT_WORDS = [
  "We",
  "craft",
  "timeless",
  "interiors",
  "and",
  "bespoke",
  "fit-out",
  "solutions",
  "that",
  "elevate",
  "how",
  "you",
  "live,",
  "work,",
  "and",
  "experience",
  "every",
  "space.",
];

export default function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let rafId = 0;

    const updateOnScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Begin revealing as the section enters at 92% of viewport height
      // Finish revealing when section top reaches 12% of viewport height
      const start = vh * 0.92;
      const end = vh * 0.12;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setScrollProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateOnScroll);
    };

    updateOnScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const totalWords = STATEMENT_WORDS.length;

  return (
    <section
      id="statement"
      ref={sectionRef}
      className="relative w-full bg-white text-[#2B2B2B] py-28 sm:py-36 lg:py-48 px-6 sm:px-10 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center text-center">
        {/* Top Centered Geometric Orange Brand Mark (Matches Reference Image) */}
        <div
          style={{
            opacity: Math.min(1, 0.25 + scrollProgress * 1.6),
            transform: `translate3d(0, ${(1 - Math.min(1, scrollProgress * 1.5)) * 18}px, 0) scale(${0.9 + Math.min(1, scrollProgress * 1.5) * 0.1})`,
            filter: `blur(${Math.max(0, (1 - scrollProgress * 1.8) * 6)}px)`,
          }}
          className="mb-9 sm:mb-12 transition-[opacity,transform,filter] duration-300 ease-out"
        >
          <div className="relative inline-flex items-center justify-center">
            <svg
              width="34"
              height="34"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FF5526]"
            >
              {/* Top Horizontal Cap */}
              <path d="M9 6H21L26 12H14L9 6Z" fill="currentColor" />
              {/* Left Vertical Pillar */}
              <path d="M9 15H15.5V30H9V15Z" fill="currentColor" />
              {/* Right Angled Pillar */}
              <path
                d="M18.5 14L27 22V30H20.5V23L15.5 18L18.5 14Z"
                fill="currentColor"
              />
              {/* Registered Trademark Micro Dot */}
              <circle
                cx="26.5"
                cy="7.5"
                r="2.2"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>

        {/* Centered Large Display Typography with Scroll-Driven Gradient Blur Word Reveal */}
        <h2 className="text-[40px] sm:text-[64px] md:text-[80px] lg:text-[94px] font-medium tracking-[-0.04em] leading-[1.06] max-w-[1260px]">
          {STATEMENT_WORDS.map((word, index) => {
            const wordStart = (index / totalWords) * 0.72;
            const wordEnd = wordStart + 0.28;
            const wordProgress = Math.max(
              0,
              Math.min(1, (scrollProgress - wordStart) / (wordEnd - wordStart))
            );

            // Smooth cubic Hermite interpolation (smoothstep)
            const eased = wordProgress * wordProgress * (3 - 2 * wordProgress);

            // Progressive gradient blur & opacity reveal
            const opacityAmount = 0.14 + eased * 0.86;
            const blurAmount = (1 - eased) * 14;
            const yOffset = (1 - eased) * 16;
            // Subtle gradient sweep inside each word as it unblurs
            const gradientSplit = Math.round(eased * 100);

            return (
              <span
                key={`${word}-${index}`}
                style={{
                  opacity: opacityAmount,
                  filter: `blur(${blurAmount.toFixed(2)}px)`,
                  transform: `translate3d(0, ${yOffset.toFixed(2)}px, 0)`,
                  backgroundImage: `linear-gradient(90deg, #FF5526 ${gradientSplit}%, rgba(255, 85, 38, 0.22) ${Math.min(
                    100,
                    gradientSplit + 35
                  )}%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
                className="inline-block mx-[0.13em] pb-1 will-change-[opacity,filter,transform] transition-[opacity,filter,transform] duration-150 ease-out"
              >
                {word}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
