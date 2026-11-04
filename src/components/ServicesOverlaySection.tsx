"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface OverlayServiceItem {
  id: number;
  slug: string;
  number: string;
  title: string;
  mainImage: string;
  thumb1: string;
  thumb2: string;
  tools: [string, string, string];
}

const OVERLAY_SERVICES: OverlayServiceItem[] = [
  {
    id: 1,
    slug: "commercial-fit-out",
    number: "/01",
    title: "Commercial Fit-Out",
    mainImage: "/landing/projects/image-1.png",
    thumb1: "/landing/cards-imgs/image-1.png",
    thumb2: "/landing/cards-imgs/image-4.png",
    tools: [
      "Workspace Strategy & BIM",
      "Acoustic Partition Systems",
      "Turnkey MEP Execution",
    ],
  },
  {
    id: 2,
    slug: "residential-fit-out",
    number: "/02",
    title: "Residential Fit-Out",
    mainImage: "/landing/cards-imgs/image-2.png",
    thumb1: "/landing/projects/image-2.png",
    thumb2: "/landing/cards-imgs/image-3.png",
    tools: [
      "Bespoke Spatial Planning",
      "Natural Stone & Millwork",
      "Smart Lighting Integration",
    ],
  },
  {
    id: 3,
    slug: "retail-fit-out",
    number: "/03",
    title: "Retail Fit-Out",
    mainImage: "/landing/cards-imgs/image-3.png",
    thumb1: "/landing/projects/image-4.png",
    thumb2: "/landing/cards-imgs/image-1.png",
    tools: [
      "Flagship Merchandising Flow",
      "Custom Display Fabrication",
      "Architectural Lighting",
    ],
  },
  {
    id: 4,
    slug: "design-build-turnkey",
    number: "/04",
    title: "Design & Build (Turnkey)",
    mainImage: "/landing/projects/image-2.png",
    thumb1: "/landing/cards-imgs/image-4.png",
    thumb2: "/landing/projects/image-3.png",
    tools: [
      "3D Architectural Visualization",
      "Full Procurement & BOQ",
      "End-to-End Site Supervision",
    ],
  },
  {
    id: 5,
    slug: "kitchen-installation",
    number: "/05",
    title: "Kitchen Installation",
    mainImage: "/landing/projects/image-4.png",
    thumb1: "/landing/cards-imgs/image-2.png",
    thumb2: "/landing/cards-imgs/image-1.png",
    tools: [
      "Precision German Hardware",
      "Sintered Stone Countertops",
      "Integrated Appliance Fit-Out",
    ],
  },
  {
    id: 6,
    slug: "wood-flooring",
    number: "/06",
    title: "Wood Flooring",
    mainImage: "/landing/cards-imgs/image-1.png",
    thumb1: "/landing/projects/image-1.png",
    thumb2: "/landing/cards-imgs/image-2.png",
    tools: [
      "Engineered European Oak",
      "Herringbone & Chevron Lay",
      "Acoustic Subfloor Leveling",
    ],
  },
  {
    id: 7,
    slug: "door-installation",
    number: "/07",
    title: "Door Installation",
    mainImage: "/landing/cards-imgs/image-4.png",
    thumb1: "/landing/projects/image-3.png",
    thumb2: "/landing/cards-imgs/image-3.png",
    tools: [
      "Concealed Flush Frames",
      "Solid Core Acoustic Timber",
      "Architectural Pivot Hardware",
    ],
  },
  {
    id: 8,
    slug: "wardrobe-installation",
    number: "/08",
    title: "Wardrobe Installation",
    mainImage: "/landing/projects/image-3.png",
    thumb1: "/landing/cards-imgs/image-2.png",
    thumb2: "/landing/projects/image-4.png",
    tools: [
      "Custom Walk-In Systems",
      "Fluted Glass & Bronze Profiles",
      "Integrated LED Sensor Rails",
    ],
  },
  {
    id: 9,
    slug: "vanity-installation",
    number: "/09",
    title: "Vanity Installation",
    mainImage: "/landing/cards-imgs/image-2.png",
    thumb1: "/landing/cards-imgs/image-4.png",
    thumb2: "/landing/projects/image-2.png",
    tools: [
      "Monolithic Marble Basins",
      "Moisture-Sealed Joinery",
      "Backlit Mirror Architecture",
    ],
  },
  {
    id: 10,
    slug: "gypsum-ceiling",
    number: "/10",
    title: "Gypsum Ceiling",
    mainImage: "/landing/projects/image-1.png",
    thumb1: "/landing/projects/image-4.png",
    thumb2: "/landing/cards-imgs/image-3.png",
    tools: [
      "Shadow-Gap Cove Detailing",
      "Linear Slot Diffuser Integration",
      "Multi-Level Acoustic Coffers",
    ],
  },
  {
    id: 11,
    slug: "general-maintenance",
    number: "/11",
    title: "General Maintenance",
    mainImage: "/landing/projects/image-4.png",
    thumb1: "/landing/cards-imgs/image-1.png",
    thumb2: "/landing/projects/image-2.png",
    tools: [
      "Preventive MEP Servicing",
      "Timber & Stone Refinishing",
      "Rapid On-Call Facility Care",
    ],
  },
];

export default function ServicesOverlaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateOnScroll = () => {
      if (!sectionRef.current) return;
      const vh = window.innerHeight || 1;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = Math.max(1, sectionRect.height - vh);
      const rawRatio = Math.max(
        0,
        Math.min(1, -sectionRect.top / totalScrollable)
      );
      setScrollRatio(rawRatio);

      // Determine which sticky card is currently at the top active threshold
      let currentActive = 0;
      const stickyThreshold = vh * 0.34;
      for (let i = 0; i < cardRefs.current.length; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= stickyThreshold) {
          currentActive = i;
        }
      }
      setActiveIdx(currentActive);
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

  const totalCount = OVERLAY_SERVICES.length;
  const formattedActive = String(activeIdx + 1).padStart(2, "0");
  const formattedTotal = String(totalCount).padStart(2, "0");
  const indicatorLeftPercent = 12 + scrollRatio * 76;

  return (
    <section
      id="services-overlay"
      ref={sectionRef}
      aria-label="Services Overlaying Stack"
      className="relative w-full bg-white text-[#111111] pt-16 sm:pt-24 pb-24 sm:pb-36 px-5 sm:px-9 md:px-14 select-none"
    >
      <div className="w-full">
        {/* ================================================================ */}
        {/* STICKY SECTION HEADER: "(What I Do)" + "Services" + Progress Bar */}
        {/* ================================================================ */}
        <div className="sticky top-0 z-30 bg-white pt-6 sm:pt-8 pb-6 sm:pb-8 border-b border-black/[0.06]">
          <p className="text-[12.5px] sm:text-[14px] font-normal tracking-[-0.015em] text-[#555555] mb-1 sm:mb-2">
            (What I Do)
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-[54px] sm:text-[82px] lg:text-[102px] font-medium tracking-[-0.044em] leading-[0.92] text-[#0D0D0D]">
              Services
            </h2>

            {/* Right Progress Track with "+" Node & Live Counter (01/11) */}
            <div className="flex-1 flex items-center gap-6 md:pb-3 md:pl-10 lg:pl-16">
              <div className="relative h-[1px] flex-1 bg-black/[0.08]">
                <span
                  style={{ left: `${indicatorLeftPercent}%` }}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-[#111111] text-[10px] font-bold leading-none text-white transition-[left] duration-150 ease-out"
                >
                  +
                </span>
              </div>

              <span className="text-[12.5px] sm:text-[13.5px] font-medium tracking-[-0.01em] text-[#222222] tabular-nums shrink-0">
                {formattedActive}/{formattedTotal}
              </span>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* OVERLAYING STICKY SERVICE CARDS STACK                            */}
        {/* Each card pins beneath the sticky header while the next card     */}
        {/* smoothly scrolls up from below and overlays it                   */}
        {/* ================================================================ */}
        <div className="relative mt-6 sm:mt-10 w-full">
          {OVERLAY_SERVICES.map((service, idx) => {
            return (
              <article
                key={service.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                style={{
                  zIndex: 10 + idx,
                }}
                className="group/card relative sticky top-[148px] sm:top-[185px] lg:top-[205px] w-full bg-white pt-6 sm:pt-8 pb-10 sm:pb-14 border-t border-black/[0.08] cursor-pointer"
              >
                {/* Full-Card Clickable Link Overlay */}
                <Link
                  href={`/services/${service.slug}`}
                  className="absolute inset-0 z-20"
                  aria-label={`View detailed specifications for ${service.title}`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch w-full">
                  {/* Left Column (4 Cols): Primary Square/Portrait Service Image */}
                  <div className="lg:col-span-4">
                    <div className="group relative block aspect-[1/1.02] w-full max-w-[440px] overflow-hidden rounded-[6px] bg-[#141414]">
                      <img
                        src={service.mainImage}
                        alt={service.title}
                        loading={idx < 2 ? "eager" : "lazy"}
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-105"
                      />
                    </div>
                  </div>

                  {/* Middle Column (5 Cols): Slash Index + Title + "• Tools Used" Table */}
                  <div className="lg:col-span-5 flex flex-col justify-between py-1">
                    {/* Top: /01 + Service Title */}
                    <div>
                      <span className="block text-[13px] sm:text-[14px] font-normal tracking-[-0.01em] text-[#7A7A7A] mb-3 sm:mb-4">
                        {service.number}
                      </span>
                      <h3 className="text-[30px] sm:text-[38px] lg:text-[44px] font-normal tracking-[-0.032em] leading-[1.08] text-[#111111] transition-colors duration-300 group-hover/card:text-[#FF5526]">
                        {service.title}
                      </h3>
                    </div>

                    {/* Bottom: "• Tools Used" + 3 Horizontal Divider Rows */}
                    <div className="mt-8 lg:mt-12 max-w-[380px]">
                      <p className="flex items-center gap-2 text-[12.5px] sm:text-[13.5px] font-semibold tracking-[-0.01em] text-[#222222] pb-2.5">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#111111]" />
                        <span>Tools Used</span>
                      </p>

                      <ul className="divide-y divide-black/[0.07] border-t border-b border-black/[0.07]">
                        {service.tools.map((tool) => (
                          <li
                            key={tool}
                            className="py-2.5 text-[12px] sm:text-[13px] font-normal tracking-[-0.01em] text-[#707070]"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5">
                        <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-medium tracking-[-0.01em] text-[#111111] transition-colors duration-300 group-hover/card:text-[#FF5526]">
                          <span>Explore Specifications</span>
                          <span className="transition-transform duration-300 group-hover/card:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (3 Cols): Bottom-Aligned Pair of Square Monochrome Thumbnails */}
                  <div className="lg:col-span-3 flex items-end justify-start lg:justify-end">
                    <div className="grid grid-cols-2 gap-3 w-[190px] sm:w-[225px]">
                      <div className="group relative aspect-square overflow-hidden rounded-[4px] bg-[#E5E5E2]">
                        <img
                          src={service.thumb1}
                          alt={`${service.title} detail 1`}
                          loading="lazy"
                          className="h-full w-full object-cover object-center grayscale contrast-125 transition-all duration-500 group-hover/card:grayscale-0 group-hover/card:scale-105"
                        />
                      </div>
                      <div className="group relative aspect-square overflow-hidden rounded-[4px] bg-[#E5E5E2]">
                        <img
                          src={service.thumb2}
                          alt={`${service.title} detail 2`}
                          loading="lazy"
                          className="h-full w-full object-cover object-center grayscale contrast-125 transition-all duration-500 group-hover/card:grayscale-0 group-hover/card:scale-105"
                        />
                      </div>
                    </div>
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

