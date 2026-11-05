"use client";

import { useState } from "react";
import { Project } from "@/data/projectsData";

interface ProjectsGallerySectionProps {
  projects: Project[];
  viewMode: "grid" | "table";
  onSelectProject: (project: Project) => void;
}

export default function ProjectsGallerySection({
  projects,
  viewMode,
  onSelectProject,
}: ProjectsGallerySectionProps) {
  const [hoveredRowId, setHoveredRowId] = useState<string | null>(null);

  if (projects.length === 0) {
    return (
      <section className="w-full py-24 px-6 text-center bg-white text-[#121212]">
        <div className="max-w-md mx-auto">
          <p className="text-[18px] font-semibold text-[#121212]">
            No projects found in this category.
          </p>
          <p className="text-[14px] text-[#777777] mt-1">
            Please select another filter to view our portfolio works.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full py-12 sm:py-20 px-6 sm:px-10 md:px-12 bg-white text-[#121212]">
      <div className="max-w-[1480px] mx-auto">
        {/* ==================================================================== */}
        {/* VIEW 1: Bento & Editorial Grid View                                  */}
        {/* ==================================================================== */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, idx) => {
              const isWide = idx === 0 || idx === 5;
              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group relative overflow-hidden rounded-[24px] sm:rounded-[30px] bg-[#141718] text-white cursor-pointer shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)] hover:-translate-y-1 ${
                    isWide ? "md:col-span-2 aspect-[16/10] sm:aspect-[21/10]" : "aspect-[16/12] sm:aspect-[4/3]"
                  }`}
                >
                  {/* Background Image with Zoom & Dark Gradient */}
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 transition-opacity duration-300 group-hover:opacity-95" />

                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 right-5 sm:top-7 sm:left-7 sm:right-7 flex items-center justify-between pointer-events-none z-10">
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/45 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 border border-white/10 text-[11px] sm:text-[12px] font-mono text-white/90">
                      <span>{project.number}</span>
                      <span className="text-white/40">/</span>
                      <span>{project.category}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 border border-white/10 text-[11.5px] sm:text-[12px] font-medium text-white">
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Bottom Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 z-10 flex flex-col justify-end">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div className="max-w-xl">
                        <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-medium text-[#FF5526] mb-1.5">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <path d="M8 0C4.69 0 2 2.69 2 6c0 4.5 6 10 6 10s6-5.5 6-10c0-3.31-2.69-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S6.62 3.5 8 3.5 10.5 4.62 10.5 6 9.38 8.5 8 8.5z" />
                          </svg>
                          <span>{project.location}</span>
                          <span className="text-white/40">•</span>
                          <span className="text-white/70 font-mono text-[11.5px]">
                            {project.area}
                          </span>
                        </div>

                        <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-semibold tracking-[-0.03em] leading-tight text-white group-hover:text-[#F3F3F1] transition-colors">
                          {project.title}
                        </h2>

                        {/* Description commented out per request */}
                        {/* <p className="mt-2 text-[13px] sm:text-[14.5px] text-white/75 line-clamp-2 leading-relaxed font-normal hidden sm:block">
                          {project.summary}
                        </p> */}
                      </div>

                      {/* Full-rounded circular arrow button */}
                      <div className="shrink-0">
                        <div
                          aria-label="View case study"
                          className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-white text-[#121212] transition-all duration-300 ease-out group-hover:bg-[#FF5526] group-hover:text-white group-hover:scale-105 shadow-md"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          >
                            <path
                              d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* ==================================================================== */}
        {/* VIEW 2: Technical Architectural Ledger / Table View                 */}
        {/* ==================================================================== */}
        {viewMode === "table" && (
          <div className="overflow-x-auto rounded-[22px] border border-black/[0.08] bg-[#FFFFFF] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/[0.08] bg-[#F9F9F8] text-[11px] font-mono uppercase tracking-[0.12em] text-[#888888]">
                  <th className="py-4 px-6 font-semibold">#</th>
                  <th className="py-4 px-6 font-semibold">Project Title</th>
                  <th className="py-4 px-6 font-semibold">Category</th>
                  <th className="py-4 px-6 font-semibold">Location</th>
                  <th className="py-4 px-6 font-semibold">Area</th>
                  <th className="py-4 px-6 font-semibold">Timeline</th>
                  <th className="py-4 px-6 font-semibold">Year</th>
                  <th className="py-4 px-6 font-semibold text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    onMouseEnter={() => setHoveredRowId(project.id)}
                    onMouseLeave={() => setHoveredRowId(null)}
                    className="group cursor-pointer transition-colors hover:bg-[#F6F6F4]"
                  >
                    <td className="py-5 px-6 font-mono text-[12px] text-[#888888] group-hover:text-[#FF5526]">
                      {project.number}
                    </td>

                    <td className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <div className="relative h-11 w-14 rounded-[8px] overflow-hidden bg-neutral-200 shrink-0 border border-black/[0.06]">
                          <img
                            src={project.heroImage}
                            alt={project.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-[15px] font-semibold text-[#121212] group-hover:text-[#FF5526] transition-colors">
                            {project.title}
                          </div>
                          <div className="text-[12px] text-[#777777]">
                            {project.subtitle}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-5 px-6">
                      <span className="inline-block rounded-full bg-[#EEEEEC] px-3 py-1 text-[11.5px] font-medium text-[#444444]">
                        {project.category}
                      </span>
                    </td>

                    <td className="py-5 px-6 text-[13.5px] text-[#555555]">
                      {project.location}
                    </td>

                    <td className="py-5 px-6 font-mono text-[13px] text-[#444444]">
                      {project.area}
                    </td>

                    <td className="py-5 px-6 text-[13px] text-[#666666]">
                      {project.duration}
                    </td>

                    <td className="py-5 px-6 font-mono text-[13px] text-[#777777]">
                      {project.year}
                    </td>

                    <td className="py-5 px-6 text-right">
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#121212] group-hover:text-[#FF5526] transition-colors">
                        <span>Inspect</span>
                        <span className="text-[11px]">↗</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

