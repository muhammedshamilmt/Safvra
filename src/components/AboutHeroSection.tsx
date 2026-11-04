"use client";

import { useEffect, useRef, useState } from "react";

interface StudioStripItem {
  id: number;
  src: string;
  alt: string;
  widthClass: string;
  heightClass: string;
}

const STUDIO_STRIP_IMAGES: StudioStripItem[] = [
  {
    id: 1,
    src: "/landing/cards-imgs/image-4.png",
    alt: "Modern architectural villa facade with minimalist concrete geometry",
    widthClass: "w-[22%] sm:w-[14.2%]",
    heightClass: "h-[25vh] sm:h-[34vh] lg:h-[38vh]",
  },
  {
    id: 2,
    src: "/landing/projects/image-4.png",
    alt: "Contemporary open-plan living interior with warm natural light",
    widthClass: "w-[26%] sm:w-[17.4%]",
    heightClass: "h-[15vh] sm:h-[19.5vh] lg:h-[21.5vh]",
  },
  {
    id: 3,
    src: "/landing/cards-imgs/image-2.png",
    alt: "Double-height bespoke residential lounge with warm timber accents",
    widthClass: "w-[26%] sm:w-[17.4%]",
    heightClass: "h-[21vh] sm:h-[27.5vh] lg:h-[30.5vh]",
  },
  {
    id: 4,
    src: "/landing/projects/image-2.png",
    alt: "Glass pavilion residence opening onto manicured landscape",
    widthClass: "w-[26%] sm:w-[17.4%]",
    heightClass: "h-[15vh] sm:h-[19.5vh] lg:h-[21.5vh]",
  },
  {
    id: 5,
    src: "/landing/cards-imgs/image-3.png",
    alt: "Curated modern living space with sculptural furnishings",
    widthClass: "hidden sm:block sm:w-[17.2%]",
    heightClass: "h-[21vh] sm:h-[27.5vh] lg:h-[30.5vh]",
  },
  {
    id: 6,
    src: "/landing/projects/image-1.png",
    alt: "Twilight architectural residence with floor-to-ceiling glazing",
    widthClass: "hidden sm:block sm:w-[16.4%]",
    heightClass: "h-[15vh] sm:h-[19.5vh] lg:h-[21.5vh]",
  },
];

const MANIFESTO_WORDS = [
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

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function AboutHeroSection() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const secondSectionRef = useRef<HTMLElement>(null);

  // Smoothly damped scroll progress (0 -> 1) for the Hero shrink transition
  const [heroProgress, setHeroProgress] = useState(0);
  // Progress (0 -> 1) for the overlapping second section statement reveal
  const [statementProgress, setStatementProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let currentHero = 0;
    let targetHero = 0;
    let currentStatement = 0;
    let targetStatement = 0;

    const computeTargets = () => {
      const vh = window.innerHeight || 1;

      if (runwayRef.current) {
        const rect = runwayRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        // Phase 1 takes the first ~1.05 * vh of scroll inside the 225dvh runway
        const shrinkDistance = vh * 1.05;
        targetHero = Math.max(0, Math.min(1, scrolled / shrinkDistance));
      }

      if (secondSectionRef.current) {
        const rect = secondSectionRef.current.getBoundingClientRect();
        // Reveal words progressively as the overlapping second section enters and locks into view
        const start = vh * 0.82;
        const end = vh * 0.05;
        const raw = (start - rect.top) / Math.max(1, start - end);
        targetStatement = Math.max(0, Math.min(1, raw));
      }
    };

    const tick = () => {
      computeTargets();

      const heroDiff = targetHero - currentHero;
      const statementDiff = targetStatement - currentStatement;

      if (Math.abs(heroDiff) > 0.0005 || Math.abs(statementDiff) > 0.0005) {
        currentHero += heroDiff * 0.12;
        currentStatement += statementDiff * 0.12;
        setHeroProgress(currentHero);
        setStatementProgress(currentStatement);
        rafId = requestAnimationFrame(tick);
      } else {
        currentHero = targetHero;
        currentStatement = targetStatement;
        setHeroProgress(targetHero);
        setStatementProgress(targetStatement);
        rafId = 0;
      }
    };

    const onScrollOrResize = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(tick);
      }
    };

    computeTargets();
    currentHero = targetHero;
    currentStatement = targetStatement;
    setHeroProgress(targetHero);
    setStatementProgress(targetStatement);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const easedHero = easeInOutCubic(heroProgress);

  // State 0 (Initial — Image 2):
  //   "The Studio" spans full width across the viewport (scale = 1)
  // State 1 (Scrolled — Image 1):
  //   "The Studio" smoothly scales down to ~0.555 on the left (transform-origin: left center)
  const headingScale = 1 - easedHero * 0.445;
  const headingTranslateY = easedHero * 18;

  // Bottom 6-image strip:
  //   At State 0 (Image 2): scale(1.145) flush with the very bottom edge (translateY = 0),
  //   so the first 5 images fill the width and image 6 peeks in on the far right.
  //   At State 1 (Image 1): scale(1.0) and lifted up by -3.2vh to reveal the full 6-image
  //   skyline strip and the clean off-white bottom margin bar.
  const stripScale = 1.145 - easedHero * 0.145;
  const stripTranslateYVh = -easedHero * 3.2;

  return (
    <div className="relative w-full bg-[#F8F8F6] text-[#121212] select-none">
      {/* ================================================================== */}
      {/* FIRST SECTION: STICKY "THE STUDIO" HERO WITH SMOOTH SHRINK & STRIP */}
      {/* ================================================================== */}
      <div ref={runwayRef} className="relative h-[225dvh] w-full">
        <section
          aria-label="The Studio Hero"
          className="sticky top-0 left-0 z-10 flex h-dvh w-full flex-col justify-between overflow-hidden bg-[#F8F8F6]"
        >
          {/* Top Sub-Navigation Links (matching reference layout) */}
          <div className="w-full px-5 pt-6 sm:px-8 sm:pt-7 pointer-events-none">
            <div className="mx-auto grid max-w-[1680px] grid-cols-12 items-start">
              <div className="col-span-7 sm:col-span-8" />
              <nav
                aria-label="Studio quick links"
                className="col-span-5 sm:col-span-4 flex flex-col gap-0.5 text-[11px] sm:text-[12px] font-medium leading-[1.35] tracking-[-0.01em] text-[#121212]/85 pointer-events-auto"
              >
                <a href="/#projects" className="hover:opacity-60 transition-opacity w-fit">
                  Projects
                </a>
                <a href="/#services" className="hover:opacity-60 transition-opacity w-fit">
                  Services
                </a>
                <a href="#studio-manifesto" className="hover:opacity-60 transition-opacity w-fit">
                  The Studio
                </a>
                <a href="#about" className="hover:opacity-60 transition-opacity w-fit">
                  Journal
                </a>
                <a href="#contact" className="hover:opacity-60 transition-opacity w-fit">
                  Careers
                </a>
              </nav>
            </div>
          </div>

          {/* Giant Display Heading "The Studio" -> Smoothly Shrinks to Left-Aligned on Scroll */}
          <div className="relative z-20 my-auto flex w-full items-center px-3 sm:px-5 md:px-7 pb-[14vh] sm:pb-[16vh]">
            <h1
              style={{
                transform: `translate3d(0, ${headingTranslateY}px, 0) scale3d(${headingScale}, ${headingScale}, 1)`,
                transformOrigin: "left center",
              }}
              className="font-sans text-[19.2vw] sm:text-[18.8vw] font-medium tracking-[-0.048em] leading-[0.88] text-[#111111] whitespace-nowrap will-change-transform"
            >
              The Studio
            </h1>
          </div>

          {/* Bottom Staggered 6-Image Architectural & Interior Strip */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full overflow-hidden">
            <div
              style={{
                transform: `translate3d(0, ${stripTranslateYVh}vh, 0) scale3d(${stripScale}, ${stripScale}, 1)`,
                transformOrigin: "left bottom",
              }}
              className="flex w-full items-end justify-start gap-0 will-change-transform"
            >
              {STUDIO_STRIP_IMAGES.map((item, idx) => (
                <div
                  key={item.id}
                  className={`relative shrink-0 overflow-hidden bg-[#E5E4E0] ${item.widthClass} ${item.heightClass}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    fetchPriority={idx < 3 ? "high" : "auto"}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================================================================== */}
      {/* SECOND SECTION: SCROLLING OVERLAPPING MANIFESTO SECTION            */}
      {/* Slides directly up and over the sticky Hero section (-mt-[100dvh]) */}
      {/* ================================================================== */}
      <section
        id="studio-manifesto"
        ref={secondSectionRef}
        aria-label="Studio Philosophy"
        className="relative z-20 -mt-[100dvh] flex min-h-dvh w-full items-center justify-between bg-[#F8F8F6] px-5 sm:px-9 md:px-12 py-24 shadow-[0_-20px_50px_rgba(0,0,0,0.04)]"
      >
        {/* Left Timeline Year Marker */}
        <span className=" shrink-0 text-[11px] sm:text-[12px] font-medium tracking-[-0.015em] text-[#121212]">
          2016
        </span>

        {/* Center Manifesto Statement with Word-by-Word Gradient Blur Scroll Reveal */}
        <div className="mx-auto max-w-[1080px] px-4 sm:px-8 text-center">
          <h2 className="text-[24px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-medium tracking-[-0.035em] leading-[1.16] text-[#111111]">
            {MANIFESTO_WORDS.map((word, index) => {
              const total = MANIFESTO_WORDS.length;
              const wordStart = (index / total) * 0.72;
              const wordEnd = wordStart + 0.28;
              const wordProgress = Math.max(
                0,
                Math.min(
                  1,
                  (statementProgress - wordStart) / (wordEnd - wordStart)
                )
              );

              // Smooth cubic Hermite interpolation (smoothstep)
              const eased =
                wordProgress * wordProgress * (3 - 2 * wordProgress);

              const opacityAmount = 0.15 + eased * 0.85;
              const blurAmount = (1 - eased) * 10;
              const yOffset = (1 - eased) * 12;
              const gradientSplit = Math.round(eased * 100);

              return (
                <span
                  key={`${word}-${index}`}
                  style={{
                    opacity: opacityAmount,
                    filter:
                      blurAmount > 0.08
                        ? `blur(${blurAmount.toFixed(2)}px)`
                        : "none",
                    transform: `translate3d(0, ${yOffset.toFixed(2)}px, 0)`,
                    backgroundImage: `linear-gradient(90deg, #111111 ${gradientSplit}%, rgba(17, 17, 17, 0.22) ${Math.min(
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

        {/* Right Timeline Year Marker */}
        <span className="shrink-0 text-[11px] sm:text-[12px] font-medium tracking-[-0.015em] text-[#121212]">
          2025
        </span>
      </section>
    </div>
  );
}

