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
    mainImage: "https://i.pinimg.com/736x/ed/c3/a4/edc3a421ee0aee9606ddb47e17157e37.jpg",
    thumb1: "https://i.pinimg.com/736x/54/2a/cd/542acd14168f2fb2e705f1283b213e8c.jpg",
    thumb2: "https://i.pinimg.com/736x/3b/f0/88/3bf088c2b314bbc40974f7b668944c2f.jpg",
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
    mainImage: "https://i.pinimg.com/1200x/6e/e8/2f/6ee82f21f57822a05f34588b14124874.jpg",
    thumb1: "https://i.pinimg.com/736x/e5/46/ae/e546ae52ca32371f05872c8984e27d07.jpg",
    thumb2: "https://i.pinimg.com/1200x/96/52/bd/9652bde9138fd13fde487311cec5d204.jpg",
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
    mainImage: "https://i.pinimg.com/1200x/d7/9f/f4/d79ff4ec1b6d10e47e51a7515f24142f.jpg",
    thumb1: "https://i.pinimg.com/1200x/62/f8/a8/62f8a825efd914a185e6ddd8eab5c86b.jpg",
    thumb2: "https://i.pinimg.com/736x/cd/2e/df/cd2edf59f2a5bd20f809a89c04e99119.jpg",
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
    mainImage: "https://i.pinimg.com/736x/ec/48/11/ec4811e2552dd7f947b97f25232d5f8c.jpg",
    thumb1: "https://i.pinimg.com/1200x/1c/72/04/1c720465d270dbcc3bf7b642133deaf4.jpg",
    thumb2: "https://i.pinimg.com/736x/0a/b0/db/0ab0db8ca070db6a7bb4dea45ca816f4.jpg",
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
    mainImage: "https://i.pinimg.com/736x/18/be/c8/18bec816181d8223e3a39af05c70506b.jpg",
    thumb1: "https://i.pinimg.com/1200x/46/51/bf/4651bfb00fd36cc1a9b293b8035cafd7.jpg",
    thumb2: "https://i.pinimg.com/1200x/94/44/6e/94446e6ff46b54290e509171ee33bcb8.jpg",
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
    mainImage: "https://i.pinimg.com/736x/7a/9c/dd/7a9cdd59272612c79ddacf49646bfbd5.jpg",
    thumb1: "/https://i.pinimg.com/736x/dd/3c/16/dd3c1623b6f73bc444da8de9753a88f7.jpg",
    thumb2: "https://i.pinimg.com/1200x/bf/7a/df/bf7adf23fab103126099797e785de9a5.jpg",
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
    mainImage: "https://i.pinimg.com/736x/73/67/e1/7367e18db37e6c4f81c3dd59d0354847.jpg",
    thumb1: "https://i.pinimg.com/736x/ea/1f/42/ea1f4205451de3accf261f9c78233ebc.jpgs",
    thumb2: "https://i.pinimg.com/1200x/2c/e1/d5/2ce1d5ae210205cf8a419c290945f723.jpg",
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
    mainImage: "https://i.pinimg.com/736x/ea/ca/83/eaca835c192eed33b1f42cd2085a7dd9.jpg",
    thumb1: "https://i.pinimg.com/1200x/15/13/36/1513367c93c172ff66f01b3776981ba1.jpg",
    thumb2: "https://i.pinimg.com/736x/e7/c5/2b/e7c52b27d53b18e10aaec4f8d2a563d7.jpg",
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
    mainImage: "https://i.pinimg.com/1200x/d9/4d/85/d94d854ed31a1971a0b7dd9ebc12c14b.jpg",
    thumb1: "https://i.pinimg.com/1200x/ae/cc/ca/aeccca49d1befe2edde692885279eb7a.jpg",
    thumb2: "https://i.pinimg.com/736x/fe/b6/11/feb61114fc19f465cc6a627fcb3da5e6.jpg",
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
    mainImage: "https://i.pinimg.com/1200x/4e/af/88/4eaf889c2a93e5a54c13ffc986652f83.jpg",
    thumb1: "https://i.pinimg.com/736x/35/5d/97/355d97c49df8f652318b692a2eb96861.jpg",
    thumb2: "https://i.pinimg.com/1200x/d1/a8/7b/d1a87b9f7208a4d58fe497c259aab3a0.jpg",
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
    mainImage: "https://i.pinimg.com/1200x/24/2a/07/242a07997c549722d31783d6217e02bc.jpg",
    thumb1: "https://i.pinimg.com/1200x/05/69/98/056998717e053c05456dc34e46b91d06.jpg",
    thumb2: "https://i.pinimg.com/736x/a8/dc/00/a8dc0034589118f00ce94a3b272b4f34.jpg",
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

