"use client";

import { useEffect, useRef, useState } from "react";

interface FaqItem {
  id: number;
  number: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    number: "01/",
    category: "PROCESS & SCOPE",
    question: "Do you handle both interior architecture and full turnkey fit-out execution?",
    answer:
      "Yes. Safvra Studio operates as an integrated design-and-build practice. From spatial planning, 3D architectural visualization, and material curation to custom joinery, gypsum ceiling engineering, MEP coordination, and final turnkey handover, our in-house team manages every phase under a single point of responsibility.",
  },
  {
    id: 2,
    number: "02/",
    category: "TIMELINE",
    question: "How long does a typical residential or commercial fit-out project take?",
    answer:
      "Timelines depend on scale and technical complexity. Bespoke residential interiors and luxury apartments typically span 8 to 14 weeks from design sign-off, while large-scale commercial workspaces, hospitality venues, and flagship retail fit-outs range from 12 to 20 weeks with milestone-based scheduling.",
  },
  {
    id: 3,
    number: "03/",
    category: "BESPOKE JOINERY",
    question: "Can we commission custom kitchen, wardrobe, wood flooring, or door installations separately?",
    answer:
      "Absolutely. Alongside comprehensive turnkey projects, we execute specialized architectural packages including bespoke kitchen installations, engineered and solid wood flooring, flush architectural doors, walk-in wardrobes, custom stone vanities, and acoustic gypsum ceilings.",
  },
  {
    id: 4,
    number: "04/",
    category: "BUDGET & TRANSPARENCY",
    question: "How is project pricing structured and how do you prevent cost overruns?",
    answer:
      "Before any site work begins, we prepare an itemized Bill of Quantities (BOQ) and fixed-milestone cost schedule aligned with your approved material specifications. Every variation or upgrade requires written sign-off, ensuring complete financial clarity from day one.",
  },
  {
    id: 5,
    number: "05/",
    category: "INTERNATIONAL & REMOTE",
    question: "Do you collaborate with clients outside your primary studio location?",
    answer:
      "Yes. We work with private homeowners, developers, and commercial brands worldwide—delivering full architectural documentation, procurement management, and on-site supervision through dedicated project directors and weekly digital site walk-throughs.",
  },
  {
    id: 6,
    number: "06/",
    category: "AFTERCARE & MAINTENANCE",
    question: "What warranty and ongoing maintenance support do you provide after handover?",
    answer:
      "Every completed fit-out includes a comprehensive structural and craftsmanship warranty, along with priority access to our General Maintenance division for seasonal servicing, wood and stone care, and future spatial refinements.",
  },
];

export default function ContactFaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState<number | null>(1);

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
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      aria-label="Frequently Asked Questions"
      className="relative w-full bg-white text-[#111111] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 md:px-14 border-t border-black/[0.06] select-none"
    >
      <div className="mx-auto max-w-[1640px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start">
          {/* ============================================================== */}
          {/* LEFT COLUMN (5 Cols): Sticky Header + Direct Consultation Card */}
          {/* ============================================================== */}
          <div
            className={`lg:col-span-5 lg:sticky lg:top-28 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-8 blur-[6px]"
              }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="inline-block h-3.5 w-[4px] bg-[#FF5526] shrink-0"
              />
              <span className="text-[10.5px] sm:text-[11px] font-medium uppercase tracking-[0.1em] text-[#7A7A7A]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="mt-5 sm:mt-6 text-[36px] sm:text-[48px] lg:text-[54px] font-normal tracking-[-0.036em] leading-[1.06] text-[#111111] max-w-[460px]">
              Clarity at every stage of the build.
            </h2>

            <p className="mt-5 text-[13.5px] sm:text-[14.5px] font-normal tracking-[-0.01em] leading-[1.6] text-[#555555] max-w-[390px]">
              From initial spatial concept to turnkey fit-out handover, here are
              answers to the questions our residential and commercial clients
              ask most.
            </p>

            {/* Sleek Direct Inquiry Prompt Box */}
            <div className="mt-10 sm:mt-12 inline-flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-black/10 pt-7">
              <div>
                <p className="text-[13px] font-medium tracking-[-0.01em] text-[#111111]">
                  Have a specific project brief?
                </p>
                <p className="mt-0.5 text-[12px] text-[#7A7A7A]">
                  Our architectural team responds within 24 hours.
                </p>
              </div>

              <a
                href="#consultation-form"
                className="group inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-[#111111] px-6 text-[12px] font-medium tracking-[-0.01em] text-white transition-all duration-300 hover:bg-[#FF5526]"
              >
                <span>Start a project</span>
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

          {/* ============================================================== */}
          {/* RIGHT COLUMN (7 Cols): Sleek Numbered Accordion List           */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 border-t border-black/10">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const delayMs = 120 + idx * 80;

              return (
                <div
                  key={item.id}
                  style={{
                    transitionDelay: isVisible ? `${delayMs}ms` : "0ms",
                  }}
                  className={`border-b border-black/10 transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
                    ? "opacity-100 translate-y-0 blur-none"
                    : "opacity-0 translate-y-8 blur-[4px]"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-7 sm:py-8 text-left cursor-pointer"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Superscript Index Number */}
                      <span
                        className={`pt-1 text-[12px] sm:text-[13px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${isOpen
                          ? "text-[#FF5526]"
                          : "text-[#8E8E8B] group-hover:text-[#FF5526]"
                          }`}
                      >
                        {item.number}
                      </span>

                      <div>
                        <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[#8E8E8B] mb-2">
                          {item.category}
                        </span>
                        <h3
                          className={`text-[18px] sm:text-[22px] lg:text-[24px] font-normal tracking-[-0.025em] leading-[1.25] transition-colors duration-300 ${isOpen
                            ? "text-[#111111]"
                            : "text-[#2B2B2B] group-hover:text-[#111111]"
                            }`}
                        >
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    {/* Animated Plus / Cross Circle Toggle */}
                    <span
                      className={`mt-1 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
                        ? "border-[#FF5526] bg-[#FF5526] text-white rotate-45"
                        : "border-black/15 bg-transparent text-[#111111] group-hover:border-[#111111]"
                        }`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 2.5V13.5M2.5 8H13.5"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth CSS Grid Accordion Content */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-9 sm:pl-12 pr-4 sm:pr-12 pb-7 sm:pb-9">
                        <p className="text-[13.5px] sm:text-[15px] font-normal tracking-[-0.01em] leading-[1.68] text-[#4A4A4A] max-w-[680px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

