"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    professionals: 0,
    projects: 0,
  });

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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth count-up animation for 6, 44, and 82 when scrolled into view
  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const duration = 1600;
    let rafId = 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts({
        years: Math.round(eased * 6),
        professionals: Math.round(eased * 44),
        projects: Math.round(eased * 82),
      });

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible]);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative w-full bg-white text-[#121212] py-20 sm:py-28 lg:py-32 px-4 sm:px-8 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-[1480px] mx-auto">
        {/* 4-Column Architectural Checkerboard Grid with Full-Height 2-Row Image on Col 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* ------------------------------------------------------------------ */}
          {/* ROW 1, COL 1: Stat Card — "6+" Years of expertise                  */}
          {/* ------------------------------------------------------------------ */}
          <div
            style={{
              transitionDelay: isVisible ? "50ms" : "0ms",
            }}
            className={`group relative flex flex-col justify-between min-h-[290px] sm:min-h-[330px] xl:min-h-[360px] p-7 sm:p-9 border border-[#E5E4E1] bg-white transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#FAFAFA] ${
              isVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-10 blur-[6px]"
            }`}
          >
            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.48] tracking-[-0.01em] text-[#666666] max-w-[235px] font-normal">
              Years of expertise in interior design and space planning.
            </p>

            <div className="flex items-baseline justify-between pt-12">
              <span className="text-[68px] sm:text-[80px] xl:text-[88px] font-normal tracking-[-0.04em] leading-[0.88] text-[#121212] tabular-nums transition-transform duration-500 ease-out group-hover:translate-x-1">
                {counts.years}
              </span>
              <span
                aria-hidden="true"
                className="text-[22px] sm:text-[25px] font-light text-[#666666] leading-none transition-transform duration-500 ease-out group-hover:rotate-90 group-hover:text-[#FF5526]"
              >
                +
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* ROW 1, COL 2: Open Architectural Negative Space Cell               */}
          {/* ------------------------------------------------------------------ */}
          <div
            aria-hidden="true"
            className="hidden lg:block min-h-[330px] xl:min-h-[360px] border-b border-[#E5E4E1]"
          />

          {/* ------------------------------------------------------------------ */}
          {/* ROW 1, COL 3: Stat Card — "44+" Professionals                      */}
          {/* ------------------------------------------------------------------ */}
          <div
            style={{
              transitionDelay: isVisible ? "180ms" : "0ms",
            }}
            className={`group relative flex flex-col justify-between min-h-[290px] sm:min-h-[330px] xl:min-h-[360px] p-7 sm:p-9 border border-[#E5E4E1] bg-white transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#FAFAFA] ${
              isVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-10 blur-[6px]"
            }`}
          >
            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.48] tracking-[-0.01em] text-[#666666] max-w-[250px] font-normal">
              Professionals delivering thoughtful and functional interiors.
            </p>

            <div className="flex items-baseline justify-between pt-12">
              <span className="text-[68px] sm:text-[80px] xl:text-[88px] font-normal tracking-[-0.04em] leading-[0.88] text-[#121212] tabular-nums transition-transform duration-500 ease-out group-hover:translate-x-1">
                {counts.professionals}
              </span>
              <span
                aria-hidden="true"
                className="text-[22px] sm:text-[25px] font-light text-[#666666] leading-none transition-transform duration-500 ease-out group-hover:rotate-90 group-hover:text-[#FF5526]"
              >
                +
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* ROW 1 & ROW 2, COL 4: Full-Height 2-Row Image Card + Overlay Text  */}
          {/* ------------------------------------------------------------------ */}
          <div
            style={{
              transitionDelay: isVisible ? "310ms" : "0ms",
            }}
            className={`group relative sm:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between min-h-[580px] sm:min-h-[660px] xl:min-h-[720px] overflow-hidden bg-[#181411] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100 blur-none"
                : "opacity-0 translate-y-12 scale-[0.98] blur-[6px]"
            }`}
          >
            {/* Full-Height Background Image Spanning Both Rows */}
            <img
              src="/landing/hero.png"
              alt="Warm sunlit interior space"
              loading="lazy"
              width={700}
              height={1100}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />

            {/* Dark Espresso Gradient Overlay on Top Half so Text & CTA Read Clearly */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1A130E]/92 via-[#1A130E]/65 to-transparent"
            />

            {/* Top Half Content: Guidance Text + "CONTACT US" Link */}
            <div className="relative z-10 flex flex-col justify-between min-h-[290px] sm:min-h-[330px] xl:min-h-[360px] p-7 sm:p-9">
              <p className="text-[14px] sm:text-[15px] leading-[1.52] tracking-[-0.01em] text-white/90 max-w-[270px] font-normal">
                Receive expert guidance and discover the best interior solution
                tailored to your space, goals, and lifestyle.
              </p>

              <div className="pt-12">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.06em] text-white border-b border-white/80 pb-1 transition-all duration-300 hover:border-[#FF5526] hover:text-[#FF5526]"
                >
                  <span>CONTACT US</span>
                </a>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* ROW 2, COL 1: Open Architectural Negative Space Cell               */}
          {/* ------------------------------------------------------------------ */}
          <div
            aria-hidden="true"
            className="hidden lg:block min-h-[330px] xl:min-h-[360px]"
          />

          {/* ------------------------------------------------------------------ */}
          {/* ROW 2, COL 2: Stat Card — "82+" Completed projects                 */}
          {/* ------------------------------------------------------------------ */}
          <div
            style={{
              transitionDelay: isVisible ? "420ms" : "0ms",
            }}
            className={`group relative flex flex-col justify-between min-h-[290px] sm:min-h-[330px] xl:min-h-[360px] p-7 sm:p-9 border border-[#E5E4E1] lg:border-t-0 bg-white transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#FAFAFA] ${
              isVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-10 blur-[6px]"
            }`}
          >
            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.48] tracking-[-0.01em] text-[#666666] max-w-[260px] font-normal">
              Completed projects across residential and commercial spaces.
            </p>

            <div className="flex items-baseline justify-between pt-12">
              <span className="text-[68px] sm:text-[80px] xl:text-[88px] font-normal tracking-[-0.04em] leading-[0.88] text-[#121212] tabular-nums transition-transform duration-500 ease-out group-hover:translate-x-1">
                {counts.projects}
              </span>
              <span
                aria-hidden="true"
                className="text-[22px] sm:text-[25px] font-light text-[#666666] leading-none transition-transform duration-500 ease-out group-hover:rotate-90 group-hover:text-[#FF5526]"
              >
                +
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* ROW 2, COL 3: Open Architectural Negative Space Cell               */}
          {/* ------------------------------------------------------------------ */}
          <div
            aria-hidden="true"
            className="hidden lg:block min-h-[330px] xl:min-h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
