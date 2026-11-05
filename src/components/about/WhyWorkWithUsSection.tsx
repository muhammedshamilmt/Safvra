"use client";

import { useEffect, useRef, useState } from "react";

interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01/",
    title: "Intentionality",
    description: "Every detail serves a purpose.",
  },
  {
    number: "02/",
    title: "Teamwork",
    description: "We work better, together.",
  },
  {
    number: "03/",
    title: "Refinement",
    description: "Polished work through quiet precision.",
  },
  {
    number: "04/",
    title: "Vision",
    description: "Every detail serves a purpose.",
  },
  {
    number: "05/",
    title: "Trust",
    description: "Built on openness and respect.",
  },
  {
    number: "06/",
    title: "Presence",
    description: "Fully present in every process.",
  },
];

export default function WhyWorkWithUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [topVisible, setTopVisible] = useState(false);
  const [bottomVisible, setBottomVisible] = useState(false);

  useEffect(() => {
    const topEl = sectionRef.current;
    const bottomEl = bottomRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === topEl && entry.isIntersecting) {
            setTopVisible(true);
          }
          if (entry.target === bottomEl && entry.isIntersecting) {
            setBottomVisible(true);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (topEl) observer.observe(topEl);
    if (bottomEl) observer.observe(bottomEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-work-with-us"
      ref={sectionRef}
      aria-label="Why Work With Us"
      className="relative z-20 w-full bg-white text-[#121212] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 md:px-14 overflow-hidden select-none"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* ================================================================ */}
        {/* UPPER PART: "WHY WORK WITH US?" + 6 NUMBERED PRINCIPLES GRID     */}
        {/* ================================================================ */}
        <div
          className={`flex items-center gap-2.5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            topVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-4 blur-[4px]"
          }`}
        >
          <span
            aria-hidden="true"
            className="inline-block h-3.5 w-[4px] bg-[#E04F33] shrink-0"
          />
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.06em] text-[#8E8E8E]">
            WHY WORK WITH US?
          </span>
        </div>

        {/* 3x2 Principles Grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 xl:gap-x-20 gap-y-14 sm:gap-y-20 lg:gap-y-24">
          {PRINCIPLES.map((item, idx) => {
            const delayMs = 100 + idx * 90;

            return (
              <article
                key={item.number}
                style={{
                  transitionDelay: topVisible ? `${delayMs}ms` : "0ms",
                }}
                className={`group flex items-start gap-2.5 sm:gap-3.5 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  topVisible
                    ? "opacity-100 translate-y-0 blur-none"
                    : "opacity-0 translate-y-10 blur-[6px]"
                }`}
              >
                {/* Superscript Red-Orange Number (01/ .. 06/) */}
                <span className="text-[12.5px] sm:text-[13.5px] font-semibold tracking-[-0.01em] leading-none text-[#D95338] pt-1 sm:pt-1.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5">
                  {item.number}
                </span>

                {/* Principle Title & Description */}
                <div className="flex flex-col">
                  <h3 className="text-[34px] sm:text-[42px] xl:text-[46px] font-normal tracking-[-0.032em] leading-[1.06] text-[#666666] transition-colors duration-300 group-hover:text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-4 sm:mt-5 text-[12px] sm:text-[13px] font-normal tracking-[-0.01em] leading-[1.55] text-[#2F2F2F]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================================================================ */}
        {/* LOWER PART: "WANT TO WORK WITH US" + PORTRAIT + "LET'S CREATE"   */}
        {/* ================================================================ */}
        <div
          ref={bottomRef}
          className="mt-28 sm:mt-36 lg:mt-44 grid grid-cols-1 lg:grid-cols-3 gap-x-12 xl:gap-x-20 gap-y-12 items-start"
        >
          {/* Left Column (Col 1): Eyebrow + Portrait Photo */}
          <div
            className={`lg:col-span-1 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              bottomVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-10 blur-[6px]"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="inline-block h-3.5 w-[4px] bg-[#E04F33] shrink-0"
              />
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.06em] text-[#8E8E8E]">
                WANT TO WORK WITH US
              </span>
            </div>

            <div className="group mt-6 sm:mt-7 w-full max-w-[240px] sm:max-w-[265px] aspect-[152/141] overflow-hidden bg-[#F1F2F4]">
              <img
                src="/landing/founders/work-with-us.jpg"
                alt="Studio creative collaboration portrait"
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (Cols 2-3, aligned vertically with 02/ Teamwork & 05/ Trust) */}
          <div
            style={{
              transitionDelay: bottomVisible ? "160ms" : "0ms",
            }}
            className={`lg:col-span-2 lg:pl-[34px] pt-1 sm:pt-3 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              bottomVisible
                ? "opacity-100 translate-y-0 blur-none"
                : "opacity-0 translate-y-10 blur-[6px]"
            }`}
          >
            <h2 className="text-[34px] sm:text-[44px] xl:text-[50px] font-normal tracking-[-0.034em] leading-[1.12] text-[#111111]">
              Let’s Create
              <br />
              Something quiet
            </h2>

            <p className="mt-6 sm:mt-7 text-[12px] sm:text-[13px] font-normal tracking-[-0.01em] leading-[1.6] text-[#3A3A3A] max-w-[560px]">
              We create with patience and clarity.If you believe in work that
              speaks softly let’s begin.
            </p>

            <div className="mt-7 sm:mt-9">
              <a
                href="#contact"
                className="group relative inline-flex flex-col items-start text-[12px] sm:text-[13px] font-medium tracking-[-0.01em] text-[#1A1A1A]"
              >
                <span className="pb-2 pr-3 transition-transform duration-300 group-hover:translate-x-0.5">
                  Talk to Us
                </span>
                <span className="relative h-[1.5px] w-[76px] overflow-hidden bg-[#E58A7B]">
                  <span className="absolute inset-0 -translate-x-full bg-[#E04F33] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

