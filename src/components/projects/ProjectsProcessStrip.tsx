"use client";

const PHASES = [
  {
    step: "01",
    phase: "SPATIAL DISCOVERY",
    title: "3D Survey & Feasibility",
    description:
      "LiDAR spatial 3D scanning, MEP feasibility auditing, and acoustic baseline testing before a single hammer is swung.",
  },
  {
    step: "02",
    phase: "TECHNICAL DETAILING",
    title: "Engineering & Approvals",
    description:
      "Full parametric shop drawings, Municipality & Civil Defence licensing, and bespoke millwork cutting lists.",
  },
  {
    step: "03",
    phase: "FABRICATION & BUILD",
    title: "Off-Site Joinery & Fit-Out",
    description:
      "CNC European joinery crafting, bookmatched marble dry-lays, and surgical on-site structural assembly.",
  },
  {
    step: "04",
    phase: "COMMISSIONING",
    title: "Turnkey Snag-Free Handover",
    description:
      "Acoustic and lighting lux level calibration, comprehensive MEP balancing, and white-glove turnkey delivery.",
  },
];

export default function ProjectsProcessStrip() {
  return (
    <section className="relative w-full py-16 sm:py-24 px-6 sm:px-10 md:px-12 bg-[#F8F8F6] text-[#121212] border-t border-b border-black/[0.06]">
      <div className="max-w-[1480px] mx-auto flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[#FF5526] mb-2 font-semibold">
              <span>METHODOLOGY & EXECUTION</span>
            </div>
            <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-semibold tracking-[-0.035em] text-[#121212] leading-tight">
              From Blueprint to White-Glove Handover.
            </h2>
          </div>

          <p className="max-w-md text-[14.5px] sm:text-[15.5px] text-[#666666] leading-relaxed">
            Every Safvara commission adheres to rigorous architectural staging, ensuring zero project creep, perfect joinery tolerance, and on-schedule handover.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PHASES.map((phase) => (
            <div
              key={phase.step}
              className="relative p-6 sm:p-7 rounded-[22px] bg-white border border-black/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between gap-6 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.05]">
                  <span className="font-mono text-[13px] font-semibold text-[#FF5526]">
                    PHASE {phase.step}
                  </span>
                  <span className="text-[10.5px] font-mono uppercase tracking-[0.1em] text-[#888888]">
                    {phase.phase}
                  </span>
                </div>

                <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#121212] tracking-tight mt-4">
                  {phase.title}
                </h3>
              </div>

              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#555555]">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

