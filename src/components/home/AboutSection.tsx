"use client";

import { useEffect, useRef, useState } from "react";

const ABOUT_WORDS = [
  "From",
  "bespoke",
  "luxury",
  "residences",
  "and",
  "modern",
  "workspaces",
  "to",
  "turnkey",
  "commercial",
  "fit-outs",
  "—",
  "we",
  "transform",
  "architectural",
  "visions",
  "into",
  "timeless",
  "interior",
  "environments",
  "through",
  "precision",
  "craftsmanship",
  "and",
  "human-centric",
  "design.",
];

const NEWS_CARDS = [
  {
    id: 1,
    title: "Biophilic Workspace Design...",
    date: "Nov 26, 2025",
    image:
      "/landing/cards-imgs/image-1.png",
    alt: "Modern commercial office interior design",
    bgColor: "bg-[#FF5526]",
    imageClass: "mix-blend-multiply contrast-125 scale-105",
  },
  {
    id: 2,
    title: "Bespoke Luxury Living...",
    date: "Nov 26, 2025",
    image:
      "/landing/cards-imgs/image-2.png",
    alt: "Warm contemporary residential interior",
    bgColor: "bg-[#E9E9E9]",
    // imageClass: "grayscale contrast-125",
  },
  {
    id: 3,
    title: "Turnkey Retail Fit-Outs...",
    date: "Nov 26, 2025",
    image:
      "/landing/cards-imgs/image-3.png",
    alt: "Architectural retail space detailing",
    bgColor: "bg-[#141414]",
    imageClass: "contrast-110",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [brandCount, setBrandCount] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let rafId = 0;

    const updateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.88;
      const end = windowHeight * 0.18;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setScrollProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Observe the lower showcase block to trigger card entrance & 78+ counter animation
  useEffect(() => {
    const target = showcaseRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCardsVisible(true);
          }
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Smooth count-up to 78 when showcase becomes visible
  useEffect(() => {
    if (!cardsVisible) return;
    let startTimestamp: number | null = null;
    const duration = 1400;
    const targetValue = 78;
    let frameId = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setBrandCount(Math.round(eased * targetValue));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [cardsVisible]);

  const totalWords = ABOUT_WORDS.length;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-white text-[#121212] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto">
        {/* Part 1: Upper Editorial Statement + Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Industries & Campaigns Metadata */}
          <div className="lg:col-span-4 flex flex-col gap-9 sm:gap-11 pt-1">
            {/* Sectors Block */}
            <div
              style={{
                opacity: Math.min(1, 0.2 + scrollProgress * 1.4),
                transform: `translate3d(0, ${(1 - Math.min(1, scrollProgress * 1.3)) * 16}px, 0)`,
                filter: `blur(${Math.max(0, (1 - scrollProgress * 1.5) * 6)}px)`,
              }}
              className="scroll-meta-item max-w-[260px] transition-[opacity,transform,filter] duration-300 ease-out"
            >
              <h3 className="text-[14px] sm:text-[15px] font-medium tracking-[-0.015em] text-[#1A1A1A] mb-1.5">
                Sectors:
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] leading-[1.55] tracking-[-0.01em] text-[#7A7A7A] font-normal">
                Residential <span className="mx-0.5">•</span> Commercial{" "}
                <span className="mx-0.5">•</span> Hospitality{" "}
                <span className="mx-0.5">•</span> Retail{" "}
                <span className="mx-0.5">•</span> Corporate Offices
              </p>
            </div>

            {/* Specialties For Block */}
            <div
              style={{
                opacity: Math.min(1, Math.max(0.15, (scrollProgress - 0.12) * 1.4)),
                transform: `translate3d(0, ${(1 - Math.min(1, Math.max(0, (scrollProgress - 0.12) * 1.3))) * 16}px, 0)`,
                filter: `blur(${Math.max(0, (1 - Math.max(0, (scrollProgress - 0.12) * 1.5)) * 6)}px)`,
              }}
              className="scroll-meta-item max-w-[260px] transition-[opacity,transform,filter] duration-300 ease-out"
            >
              <h3 className="text-[14px] sm:text-[15px] font-medium tracking-[-0.015em] text-[#1A1A1A] mb-1.5">
                Specialties:
              </h3>
              <p className="text-[13.5px] sm:text-[14.5px] leading-[1.55] tracking-[-0.01em] text-[#7A7A7A] font-normal">
                Interior Fit-Out <span className="mx-0.5">•</span> Space Planning{" "}
                <span className="mx-0.5">•</span> Bespoke Joinery{" "}
                <span className="mx-0.5">•</span> Turnkey Build
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Statement with Inline "• About" Tag & Word-by-Word Gradient Blur Scroll Reveal */}
          <div className="lg:col-span-8">
            <h2 className="text-[30px] sm:text-[44px] md:text-[52px] xl:text-[58px] font-normal tracking-[-0.035em] leading-[1.15] text-[#121212]">
              <span className="inline-flex items-center gap-2.5 align-middle mr-10 sm:mr-16 md:mr-24 -translate-y-[6px] sm:-translate-y-[10px]">
                <span
                  aria-hidden="true"
                  className="inline-block h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#FF5526] shadow-[0_0_12px_rgba(255,85,38,0.45)]"
                />
                <span className="text-[14px] sm:text-[16px] font-medium tracking-[-0.015em] text-[#121212]">
                  About
                </span>
              </span>

              {ABOUT_WORDS.map((word, index) => {
                const wordStart = (index / totalWords) * 0.72;
                const wordEnd = wordStart + 0.28;
                const wordProgress = Math.max(
                  0,
                  Math.min(1, (scrollProgress - wordStart) / (wordEnd - wordStart))
                );

                const eased =
                  wordProgress * wordProgress * (3 - 2 * wordProgress);
                const blurAmount = (1 - eased) * 8;
                const opacityAmount = 0.16 + eased * 0.84;
                const yOffset = (1 - eased) * 8;

                return (
                  <span
                    key={`${word}-${index}`}
                    style={{
                      opacity: opacityAmount,
                      filter: `blur(${blurAmount.toFixed(2)}px)`,
                      transform: `translate3d(0, ${yOffset.toFixed(2)}px, 0)`,
                    }}
                    className="inline-block mr-[0.26em] will-change-[opacity,filter,transform] transition-[opacity,filter,transform] duration-150 ease-out"
                  >
                    {word}
                  </span>
                );
              })}
            </h2>
          </div>
        </div>

        {/* Part 2: Continuation of About — 78+ Stat Row, Left Portrait Card ("Allam"), 3 News Cards & "See all news" CTA */}
        <div ref={showcaseRef} className="mt-16 sm:mt-24 lg:mt-28">
          {/* 78+ Metric Row Aligned with Right 8-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 sm:mb-16">
            <div className="hidden lg:block lg:col-span-4" />
            <div
              className={`lg:col-span-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${cardsVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-8 blur-[6px]"
                }`}
            >
              <span className="text-[64px] sm:text-[82px] xl:text-[92px] font-normal tracking-[-0.045em] leading-none text-[#121212] tabular-nums">
                {brandCount}+
              </span>
              <p className="text-[14px] sm:text-[15.5px] leading-[1.45] tracking-[-0.015em] text-[#4A4A4A] max-w-[400px] font-normal">
                Spaces transformed with bespoke interior architecture, luxury
                fit-outs, and turnkey execution.
              </p>
            </div>
          </div>

          {/* Cards Row: Left Large Portrait Card + Right 3 News Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            {/* Left Column (4 cols): Large Portrait Card with "Allam" Handwritten Script Signature */}
            <div
              style={{
                transitionDelay: cardsVisible ? "100ms" : "0ms",
              }}
              className={`lg:col-span-4 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${cardsVisible
                ? "opacity-100 translate-y-0 scale-100 blur-none"
                : "opacity-0 translate-y-12 scale-[0.96] blur-[8px]"
                }`}
            >
              <div className="group relative aspect-[4/4.6] w-full max-w-[420px] overflow-hidden rounded-[22px] bg-[#141414] shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(0,0,0,0.16)]">
                <img
                  src="/landing/cards-imgs/image-4.png"
                  alt="Allam — Creative Director"
                  loading="lazy"
                  width={520}
                  height={600}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                {/* Warm orange studio tint & dark vignette matching the portrait card */}
                {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FF5526]/35 via-transparent to-black/30 mix-blend-multiply" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#FF5526]/25 via-transparent to-transparent" /> */}

                {/* Top-Left Handwritten Signature SVG ("Allam") */}
                <div className="pointer-events-none absolute top-5 left-5 sm:top-6 sm:left-6 z-10">
                  <svg
                    width="108"
                    height="56"
                    viewBox="0 0 140 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] -rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"
                  >
                    <path
                      d="M16 56C21 38 29 14 35 12C39 11 38 34 37 52M12 40C22 36 36 33 45 31M51 11C49 27 46 47 48 52C50 56 56 48 60 40M65 11C62 27 59 47 61 52C63 56 69 49 73 41M86 33C80 33 74 41 75 48C76 53 82 51 86 43C87 40 87 48 90 50C93 52 98 44 102 36C103 42 103 49 104 51C105 46 109 36 113 36C116 36 116 44 118 47C120 49 125 36 129 35"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Column (8 cols): 3 News Cards Grid + Bottom-Right "See all news" CTA */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 xl:gap-6">
                {NEWS_CARDS.map((card, idx) => (
                  <article
                    key={card.id}
                    style={{
                      transitionDelay: cardsVisible
                        ? `${220 + idx * 130}ms`
                        : "0ms",
                    }}
                    className={`group cursor-pointer transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${cardsVisible
                      ? "opacity-100 translate-y-0 scale-100 blur-none"
                      : "opacity-0 translate-y-12 scale-[0.95] blur-[8px]"
                      }`}
                  >
                    {/* Rounded Square Image Wrapper */}
                    <div
                      className={`relative aspect-square w-full overflow-hidden rounded-[20px] mb-4 shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-[0_20px_44px_rgba(0,0,0,0.13)]`}
                    >
                      <img
                        src={card.image}
                        alt={card.alt}
                        loading="lazy"
                        width={400}
                        height={400}
                        className={`h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 ${card.imageClass}`}
                      />

                      {/* Subtle Hover Corner Arrow Badge */}
                      <div className="pointer-events-none absolute top-3.5 right-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#121212] opacity-0 translate-y-2 scale-90 backdrop-blur-md transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-[16px] sm:text-[17px] font-medium tracking-[-0.02em] text-[#121212] truncate transition-colors duration-300 group-hover:text-[#FF5526]">
                      {card.title}
                    </h3>

                    {/* Card Date with Orange Bullet Dot */}
                    <p className="mt-1.5 flex items-center gap-2 text-[13px] font-normal tracking-[-0.01em] text-[#8A8A8A]">
                      <span
                        aria-hidden="true"
                        className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF5526]"
                      />
                      <span>{card.date}</span>
                    </p>
                  </article>
                ))}
              </div>

              {/* Bottom-Right "See all news" Pill Button + Orange Circle Arrow Button */}
              <div
                style={{
                  transitionDelay: cardsVisible ? "620ms" : "0ms",
                }}
                className={`mt-10 sm:mt-14 flex justify-end transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                  }`}
              >
                <div className="inline-flex items-center gap-2 group">
                  <a
                    href="#blogs"
                    className="inline-flex h-12 sm:h-13 items-center justify-center rounded-full bg-[#121212] px-7 sm:px-8 text-[13.5px] sm:text-[14.5px] font-medium tracking-[-0.015em] text-white shadow-[0_8px_24px_rgba(18,18,18,0.15)] transition-all duration-300 ease-out group-hover:bg-[#292929] group-hover:shadow-[0_12px_30px_rgba(18,18,18,0.24)]"
                  >
                    See all news
                  </a>

                  <a
                    href="#blogs"
                    aria-label="See all news"
                    className="inline-flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#FF5526] text-white shadow-[0_6px_20px_rgba(255,85,38,0.32)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-45 group-hover:bg-[#ff3d08]"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
