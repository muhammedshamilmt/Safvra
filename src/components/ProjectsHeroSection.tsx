"use client";

interface ProjectsHeroSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  viewMode: "grid" | "table";
  onViewModeChange: (mode: "grid" | "table") => void;
  counts: {
    all: number;
    residential: number;
    commercial: number;
    hospitality: number;
    retail: number;
  };
}

const CATEGORIES = [
  { id: "All", label: "All Works" },
  { id: "Residential", label: "Residential" },
  { id: "Commercial", label: "Commercial" },
  { id: "Hospitality", label: "Hospitality" },
  { id: "Retail", label: "Retail" },
] as const;

export default function ProjectsHeroSection({
  activeCategory,
  onCategoryChange,
  viewMode,
  onViewModeChange,
  counts,
}: ProjectsHeroSectionProps) {
  const getCount = (cat: string) => {
    switch (cat) {
      case "Residential":
        return counts.residential;
      case "Commercial":
        return counts.commercial;
      case "Hospitality":
        return counts.hospitality;
      case "Retail":
        return counts.retail;
      default:
        return counts.all;
    }
  };

  return (
    <section className="relative w-full pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 px-6 sm:px-10 md:px-12 bg-white text-[#121212] border-b border-black/[0.06]">
      <div className="max-w-[1480px] mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F4F2] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.12em] text-[#666666]">
            <span className="h-2 w-2 rounded-full bg-[#FF5526] animate-pulse" />
            <span>ARCHITECTURAL PORTFOLIO</span>
          </div>

          <div className="font-mono text-[12px] sm:text-[13px] text-[#8E8D8A] tracking-[0.06em]">
            DUBAI · RIYADH · LONDON (2022 — 2026)
          </div>
        </div>

        {/* Main Title Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-12">
          <div className="max-w-3xl">
            <h1 className="text-[44px] sm:text-[68px] md:text-[84px] lg:text-[96px] font-semibold tracking-[-0.04em] text-[#121212] leading-[0.96]">
              Selected <br />
              <span className="text-[#FF5526]">Works.</span>
            </h1>
          </div>

          <div className="max-w-md lg:pb-3">
            <p className="text-[16px] sm:text-[18px] text-[#555555] leading-[1.65] font-normal">
              A curated curation of bespoke residential estates, luxury penthouses, corporate headquarters, and high-jewelry retail ateliers engineered with quiet architectural restraint.
            </p>
          </div>
        </div>

        {/* Key Studio Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-black/[0.06]">
          <div className="p-4 sm:p-5 rounded-[18px] bg-[#F9F9F8] border border-black/[0.04]">
            <div className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#121212]">
              54<span className="text-[#FF5526]">+</span>
            </div>
            <div className="text-[11.5px] sm:text-[12px] font-medium text-[#777777] mt-1">
              Bespoke Projects Completed
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-[18px] bg-[#F9F9F8] border border-black/[0.04]">
            <div className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#121212]">
              120K<span className="text-[#FF5526]">+</span>
            </div>
            <div className="text-[11.5px] sm:text-[12px] font-medium text-[#777777] mt-1">
              Sq.Ft Fitted Out & Engineered
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-[18px] bg-[#F9F9F8] border border-black/[0.04]">
            <div className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#121212]">
              100<span className="text-[#FF5526]">%</span>
            </div>
            <div className="text-[11.5px] sm:text-[12px] font-medium text-[#777777] mt-1">
              On-Time Turnkey Handover
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-[18px] bg-[#F9F9F8] border border-black/[0.04]">
            <div className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[#121212]">
              14<span className="text-[#FF5526]">★</span>
            </div>
            <div className="text-[11.5px] sm:text-[12px] font-medium text-[#777777] mt-1">
              Design & Fit-Out Accolades
            </div>
          </div>
        </div>

        {/* Filter Bar & View Toggle */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              const count = getCount(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onCategoryChange(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-[13px] sm:text-[13.5px] font-medium transition-all duration-300 cursor-pointer ${
                    active
                      ? "bg-[#121212] text-white shadow-sm"
                      : "bg-[#F3F3F1] text-[#555555] hover:bg-[#EAEAE8] hover:text-[#121212]"
                  }`}
                >
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5526]" />
                  )}
                  <span>{cat.label}</span>
                  <span
                    className={`font-mono text-[11px] ${
                      active ? "text-[#AAAAAA]" : "text-[#888888]"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Grid vs Table */}
          <div className="flex items-center gap-1 self-start md:self-auto p-1 rounded-full bg-[#F3F3F1] border border-black/[0.04]">
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              aria-label="Grid view"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white text-[#121212] shadow-sm"
                  : "text-[#777777] hover:text-[#121212]"
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="5" height="5" rx="1.5" fill="currentColor" />
                <rect x="9" y="2" width="5" height="5" rx="1.5" fill="currentColor" />
                <rect x="2" y="9" width="5" height="5" rx="1.5" fill="currentColor" />
                <rect x="9" y="9" width="5" height="5" rx="1.5" fill="currentColor" />
              </svg>
              <span>Grid</span>
            </button>

            <button
              type="button"
              onClick={() => onViewModeChange("table")}
              aria-label="Table index view"
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
                viewMode === "table"
                  ? "bg-white text-[#121212] shadow-sm"
                  : "text-[#777777] hover:text-[#121212]"
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
                  d="M2 4H14M2 8H14M2 12H14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              <span>Index</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

