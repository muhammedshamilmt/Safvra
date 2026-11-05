"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { ServiceDetailItem } from "@/data/servicesData";

interface ServiceDetailViewProps {
  service: ServiceDetailItem;
  prevService: ServiceDetailItem;
  nextService: ServiceDetailItem;
  totalCount: number;
}

export default function ServiceDetailView({
  service,
  prevService,
  nextService,
  totalCount,
}: ServiceDetailViewProps) {
  const statementRef = useRef<HTMLElement>(null);
  const processSectionRef = useRef<HTMLElement>(null);
  const phaseRefs = useRef<(HTMLElement | null)[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [heroScroll, setHeroScroll] = useState(0);
  const [statementProgress, setStatementProgress] = useState(0);
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);
  const [processRatio, setProcessRatio] = useState(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Smooth damped scroll loop for Hero shrink, Statement word-reveal, and Overlaying Process stack
  useEffect(() => {
    let rafId = 0;
    let currentHero = 0;
    let targetHero = 0;
    let currentStatement = 0;
    let targetStatement = 0;

    const computeTargets = () => {
      const vh = window.innerHeight || 1;
      const scrollY = window.scrollY;

      targetHero = Math.max(0, Math.min(1, scrollY / (vh * 0.7)));

      if (statementRef.current) {
        const rect = statementRef.current.getBoundingClientRect();
        const start = vh * 0.88;
        const end = vh * 0.2;
        const raw = (start - rect.top) / Math.max(1, start - end);
        targetStatement = Math.max(0, Math.min(1, raw));
      }

      if (processSectionRef.current) {
        const rect = processSectionRef.current.getBoundingClientRect();
        const totalScroll = Math.max(1, rect.height - vh);
        const rawProcess = Math.max(0, Math.min(1, -rect.top / totalScroll));
        setProcessRatio(rawProcess);

        let currentPhase = 0;
        const threshold = vh * 0.36;
        for (let i = 0; i < phaseRefs.current.length; i++) {
          const el = phaseRefs.current[i];
          if (!el) continue;
          if (el.getBoundingClientRect().top <= threshold) {
            currentPhase = i;
          }
        }
        setActivePhaseIdx(currentPhase);
      }
    };

    const tick = () => {
      computeTargets();
      const heroDiff = targetHero - currentHero;
      const statementDiff = targetStatement - currentStatement;

      if (Math.abs(heroDiff) > 0.0005 || Math.abs(statementDiff) > 0.0005) {
        currentHero += heroDiff * 0.14;
        currentStatement += statementDiff * 0.14;
        setHeroScroll(currentHero);
        setStatementProgress(currentStatement);
        rafId = requestAnimationFrame(tick);
      } else {
        currentHero = targetHero;
        currentStatement = targetStatement;
        setHeroScroll(targetHero);
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
    setHeroScroll(targetHero);
    setStatementProgress(targetStatement);

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const statementWords = service.statementText.split(" ");
  const totalWords = statementWords.length;
  const headingScale = 1 - heroScroll * 0.14;
  const indicatorLeftPercent = 12 + processRatio * 76;

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full bg-white text-[#111111] select-none overflow-x-hidden"
    >
      {/* ================================================================== */}
      {/* SECTION 1: FULL-WIDTH SLEEK WHITE SERVICE HERO                     */}
      {/* ================================================================== */}
      <section
        aria-label={service.title}
        className="relative w-full bg-white px-5 sm:px-9 md:px-14 pt-24 sm:pt-28 pb-14 sm:pb-20 border-b border-black/[0.06]"
      >
        {/* Top Breadcrumb & Index Bar */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-10 border-b border-black/[0.07] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
            }`}
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 text-[12px] sm:text-[13px] font-medium tracking-[-0.01em] text-[#111111] transition-colors hover:text-[#FF5526]"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path
                d="M13 8H3M3 8L7 4M3 8L7 12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>All Services</span>
          </Link>

          <div className="flex items-center gap-4 text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.12em] text-[#7A7A7A]">
            <span>{service.category}</span>
            <span className="text-black/20">•</span>
            <span className="text-[#111111] font-semibold">
              {service.number} / {String(totalCount).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Giant Display Service Title + "@ 2019 - 26" Sub-Index */}
        <div
          style={{ transitionDelay: "100ms" }}
          className={`mt-8 sm:mt-12 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isLoaded
            ? "opacity-100 translate-y-0 blur-none"
            : "opacity-0 translate-y-8 blur-[6px]"
            }`}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-[14px] sm:text-[18px] font-semibold tracking-[-0.02em] text-[#FF5526]">
              {service.slashNumber}
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium tracking-[-0.01em] text-[#707070]">
              {service.shortSubtitle}
            </span>
          </div>

          <h1
            style={{
              transform: `scale3d(${headingScale}, ${headingScale}, 1)`,
              transformOrigin: "left center",
            }}
            className="mt-2 font-sans text-[11vw] sm:text-[9.2vw] lg:text-[8.4vw] font-semibold tracking-[-0.045em] leading-[0.94] text-[#0A0A0A] will-change-transform"
          >
            {service.title}
          </h1>
        </div>

        {/* Center 3-Card Trio Showcase (Matching Services Page Hero Aesthetic) */}
        <div className="relative my-10 sm:my-16 flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-7">
            {/* Left Detail Card */}
            <div
              style={{
                transitionDelay: "180ms",
                transform: `translate3d(${mouseOffset.x * -6}px, ${mouseOffset.y * -4}px, 0)`,
              }}
              className={`group relative w-[105px] sm:w-[190px] md:w-[240px] aspect-[1/1.15] rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#EAE8E3] transition-all duration-700 ease-out ${isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
                }`}
            >
              <img
                src={service.galleryImages[0]}
                alt={`${service.title} architectural detail`}
                fetchPriority="high"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Center Primary Hero Card (Taller & Elevated) */}
            <div
              style={{
                transitionDelay: "260ms",
                transform: `translate3d(${mouseOffset.x * 5}px, ${mouseOffset.y * 6}px, 0)`,
              }}
              className={`group relative z-10 w-[135px] sm:w-[240px] md:w-[300px] aspect-[1/1.22] rounded-[16px] sm:rounded-[22px] overflow-hidden bg-[#141414] shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out ${isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
                }`}
            >
              <img
                src={service.heroImage}
                alt={service.title}
                fetchPriority="high"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Right Detail Card */}
            <div
              style={{
                transitionDelay: "340ms",
                transform: `translate3d(${mouseOffset.x * -5}px, ${mouseOffset.y * 4}px, 0)`,
              }}
              className={`group relative w-[105px] sm:w-[190px] md:w-[240px] aspect-[1/1.15] rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#E5E5E0] transition-all duration-700 ease-out ${isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
                }`}
            >
              <img
                src={service.galleryImages[1]}
                alt={`${service.title} finish execution`}
                fetchPriority="high"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <span
            aria-hidden="true"
            className="hidden sm:inline-block absolute right-0 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-[10.5px] font-medium tracking-[0.04em] text-[#7A7A7A]"
          >
            Safvra Turnkey Division
          </span>
        </div>

        {/* Bottom Metadata Row: 4 Key Architectural Specs + Stacked Capability Pills */}
        <div className="mt-8 sm:mt-12 pt-8 border-t border-black/[0.07] grid grid-cols-2 lg:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 lg:col-span-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#8E8E8B] mb-1.5">
              TYPICAL TIMELINE
            </p>
            <p className="text-[15px] sm:text-[17px] font-medium tracking-[-0.02em] text-[#111111]">
              {service.timeline}
            </p>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#8E8E8B] mb-1.5">
              WARRANTY COVERAGE
            </p>
            <p className="text-[15px] sm:text-[17px] font-medium tracking-[-0.02em] text-[#111111]">
              {service.warranty}
            </p>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.1em] text-[#8E8E8B] mb-1.5">
              DELIVERY MODEL
            </p>
            <p className="text-[15px] sm:text-[17px] font-medium tracking-[-0.02em] text-[#111111]">
              {service.deliveryModel}
            </p>
          </div>

          <div className="col-span-1 lg:col-span-3 flex lg:justify-end">
            <a
              href="#consultation-form"
              className="group inline-flex h-11 sm:h-12 items-center justify-center gap-3 rounded-full bg-[#111111] px-7 text-[12px] sm:text-[12.5px] font-medium tracking-[-0.01em] text-white transition-all duration-300 hover:bg-[#FF5526]"
            >
              <span>Request a Quote</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M4 12L12 4M12 4H5.5M12 4V10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 2: "• Overview •" SCROLL-DRIVEN WORD REVEAL STATEMENT      */}
      {/* ================================================================== */}
      <section
        ref={statementRef}
        aria-label="Service Architectural Statement"
        className="w-full bg-white py-24 sm:py-32 lg:py-40 px-5 sm:px-9 md:px-14 border-b border-black/[0.06]"
      >
        <div className="mx-auto max-w-[1140px] text-center">
          <div className="inline-flex items-center justify-center gap-2.5 mb-7 sm:mb-9">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#FF5526]"
            />
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-[-0.01em] text-[#222222]">
              Overview
            </span>
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#FF5526]"
            />
          </div>

          <h2 className="mx-auto max-w-[980px] text-[28px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-medium tracking-[-0.036em] leading-[1.14]">
            {statementWords.map((word, index) => {
              const wordStart = (index / totalWords) * 0.72;
              const wordEnd = wordStart + 0.28;
              const localProgress = Math.max(
                0,
                Math.min(
                  1,
                  (statementProgress - wordStart) / (wordEnd - wordStart)
                )
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
                  className="inline-block mx-[0.13em] pb-1 will-change-[filter] transition-[filter] duration-150 ease-out"
                >
                  {word}
                </span>
              );
            })}
          </h2>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 3: ARCHITECTURAL SCOPE, DELIVERABLES & TOOLS USED          */}
      {/* ================================================================== */}
      <section
        aria-label="Scope of Work and Deliverables"
        className="w-full bg-white py-24 sm:py-32 px-5 sm:px-9 md:px-14 border-b border-black/[0.06]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start">
          {/* Left Column (5 Cols): Narrative & "• Tools Used" Table */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-2.5 mb-5">
              <span
                aria-hidden="true"
                className="inline-block h-3.5 w-[4px] bg-[#FF5526]"
              />
              <span className="text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.08em] text-[#7A7A7A]">
                ARCHITECTURAL SCOPE
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[42px] font-normal tracking-[-0.034em] leading-[1.1] text-[#111111]">
              Engineered down to the last millimeter.
            </h2>

            <div className="mt-6 space-y-4 text-[13.5px] sm:text-[14.5px] font-normal tracking-[-0.01em] leading-[1.65] text-[#4A4A4A]">
              <p>{service.overviewParagraphs[0]}</p>
              <p>{service.overviewParagraphs[1]}</p>
            </div>

            {/* "• Tools & Systems Used" Table matching reference */}
            <div className="mt-10 max-w-[440px]">
              <p className="flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold tracking-[-0.01em] text-[#111111] pb-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#111111]" />
                <span>Systems &amp; Materials Used</span>
              </p>

              <ul className="divide-y divide-black/[0.08] border-t border-b border-black/[0.08]">
                {service.toolsUsed.map((tool) => (
                  <li
                    key={tool}
                    className="py-3 text-[12.5px] sm:text-[13.5px] font-normal tracking-[-0.01em] text-[#666666]"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (7 Cols): 2x2 Numbered Deliverables (01/ .. 04/) + Visual Trio */}
          <div className="lg:col-span-7 flex flex-col gap-16 sm:gap-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 sm:gap-y-16">
              {service.deliverables.map((item) => (
                <article
                  key={item.number}
                  className="group flex items-start gap-3"
                >
                  <span className="text-[13px] sm:text-[14px] font-semibold tracking-[-0.01em] leading-none text-[#D95338] pt-1.5 shrink-0">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-[26px] sm:text-[32px] font-normal tracking-[-0.03em] leading-[1.1] text-[#555555] transition-colors duration-300 group-hover:text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="mt-3.5 text-[12.5px] sm:text-[13.5px] font-normal tracking-[-0.01em] leading-[1.6] text-[#3A3A3A]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Full-Width 2-Column Editorial Detail Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-black/[0.07]">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[6px] bg-[#E5E5E2]">
                <img
                  src={service.galleryImages[0]}
                  alt={`${service.title} execution gallery 1`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[6px] bg-[#E5E5E2]">
                <img
                  src={service.galleryImages[2]}
                  alt={`${service.title} execution gallery 2`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 4: OVERLAYING 4-PHASE EXECUTION PROCESS STACK              */}
      {/* ================================================================== */}
      <section
        ref={processSectionRef}
        aria-label="Execution Process Phases"
        className="relative w-full bg-white text-[#111111] pt-16 sm:pt-24 pb-24 sm:pb-32 px-5 sm:px-9 md:px-14 border-b border-black/[0.06]"
      >
        {/* Sticky Header with Progress Line & "+" Node */}
        <div className="sticky top-0 z-30 bg-white pt-6 sm:pt-8 pb-6 sm:pb-8 border-b border-black/[0.07]">
          <p className="text-[12.5px] sm:text-[14px] font-normal tracking-[-0.015em] text-[#555555] mb-1 sm:mb-2">
            (How We Execute)
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[44px] sm:text-[68px] lg:text-[84px] font-medium tracking-[-0.042em] leading-[0.94] text-[#0D0D0D]">
              Project Phases
            </h2>

            <div className="flex-1 flex items-center gap-6 md:pb-2.5 md:pl-10 lg:pl-16">
              <div className="relative h-[1px] flex-1 bg-black/[0.08]">
                <span
                  style={{ left: `${indicatorLeftPercent}%` }}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-[#111111] text-[10px] font-bold leading-none text-white transition-[left] duration-150 ease-out"
                >
                  +
                </span>
              </div>

              <span className="text-[12.5px] sm:text-[13.5px] font-medium tracking-[-0.01em] text-[#222222] tabular-nums shrink-0">
                0{activePhaseIdx + 1}/04
              </span>
            </div>
          </div>
        </div>

        {/* Overlaying Sticky Phase Cards (/01 .. /04) */}
        <div className="relative mt-6 sm:mt-8 w-full">
          {service.processSteps.map((step, idx) => (
            <article
              key={step.step}
              ref={(el) => {
                phaseRefs.current[idx] = el;
              }}
              style={{ zIndex: 10 + idx }}
              className="sticky top-[145px] sm:top-[175px] lg:top-[195px] w-full bg-white pt-8 sm:pt-10 pb-12 sm:pb-16 border-t border-black/[0.08]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column (3 Cols): Step Index & Duration Badge */}
                <div className="lg:col-span-3 flex flex-col gap-2">
                  <span className="text-[13px] sm:text-[14px] font-normal text-[#7A7A7A]">
                    {step.step}
                  </span>
                  <span className="inline-flex w-fit items-center rounded-full bg-[#FF5526] px-3.5 py-1 text-[11px] font-medium tracking-[0.04em] uppercase text-white">
                    {step.phase} • {step.duration}
                  </span>
                </div>

                {/* Middle Column (5 Cols): Phase Title & Description */}
                <div className="lg:col-span-5">
                  <h3 className="text-[28px] sm:text-[36px] lg:text-[40px] font-normal tracking-[-0.032em] leading-[1.1] text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[13.5px] sm:text-[14.5px] font-normal tracking-[-0.01em] leading-[1.62] text-[#4A4A4A] max-w-[520px]">
                    {step.description}
                  </p>
                </div>

                {/* Right Column (4 Cols): Phase Deliverables Table */}
                <div className="lg:col-span-4">
                  <p className="flex items-center gap-2 text-[12.5px] font-semibold tracking-[-0.01em] text-[#222222] pb-2.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF5526]" />
                    <span>Key Outputs</span>
                  </p>
                  <ul className="divide-y divide-black/[0.07] border-t border-b border-black/[0.07]">
                    {step.deliverables.map((d) => (
                      <li
                        key={d}
                        className="py-2.5 text-[12.5px] sm:text-[13px] font-normal tracking-[-0.01em] text-[#666666]"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTION 5: SERVICE-SPECIFIC FAQ & PREV / NEXT SERVICE NAVIGATION   */}
      {/* ================================================================== */}
      <section
        aria-label="Service FAQs and Navigation"
        className="w-full bg-white py-20 sm:py-28 px-5 sm:px-9 md:px-14"
      >
        {/* Service FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20 sm:pb-28 border-b border-black/[0.08]">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span
                aria-hidden="true"
                className="inline-block h-3.5 w-[4px] bg-[#FF5526]"
              />
              <span className="text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.08em] text-[#7A7A7A]">
                TECHNICAL Q&amp;A
              </span>
            </div>
            <h2 className="text-[30px] sm:text-[40px] font-normal tracking-[-0.032em] leading-[1.1] text-[#111111]">
              Common questions on {service.title}.
            </h2>
          </div>

          <div className="lg:col-span-7 border-t border-black/10">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={faq.question} className="border-b border-black/10">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-6 sm:py-7 text-left cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="pt-1 text-[12px] font-semibold text-[#FF5526]">
                        0{idx + 1}/
                      </span>
                      <h3 className="text-[18px] sm:text-[21px] font-normal tracking-[-0.025em] leading-[1.28] text-[#111111]">
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                        ? "border-[#FF5526] bg-[#FF5526] text-white rotate-45"
                        : "border-black/15 text-[#111111] group-hover:border-[#111111]"
                        }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 2.5V13.5M2.5 8H13.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-8 pb-6 pr-6 text-[13.5px] sm:text-[14.5px] leading-[1.65] text-[#4A4A4A]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Previous / Next Service Switcher */}
        <div className="pt-14 sm:pt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
          <Link
            href={`/services/${prevService.slug}`}
            className="group flex flex-col justify-between border border-black/[0.08] p-7 sm:p-9 transition-colors duration-300 hover:border-[#111111]"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#7A7A7A]">
              ← PREVIOUS SERVICE ({prevService.slashNumber})
            </span>
            <div className="mt-6 flex items-end justify-between gap-4">
              <span className="text-[24px] sm:text-[32px] font-normal tracking-[-0.03em] leading-[1.1] text-[#111111] transition-colors group-hover:text-[#FF5526]">
                {prevService.title}
              </span>
              <span className="text-[12px] font-medium text-[#7A7A7A]">
                Explore
              </span>
            </div>
          </Link>

          <Link
            href={`/services/${nextService.slug}`}
            className="group flex flex-col justify-between border border-black/[0.08] p-7 sm:p-9 transition-colors duration-300 hover:border-[#111111] text-left sm:text-right"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#7A7A7A]">
              NEXT SERVICE ({nextService.slashNumber}) →
            </span>
            <div className="mt-6 flex sm:flex-row-reverse items-end justify-between gap-4">
              <span className="text-[24px] sm:text-[32px] font-normal tracking-[-0.03em] leading-[1.1] text-[#111111] transition-colors group-hover:text-[#FF5526]">
                {nextService.title}
              </span>
              <span className="text-[12px] font-medium text-[#7A7A7A]">
                Explore
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

