"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Project } from "@/data/projectsData";

interface ProjectsCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectsCaseStudyModal({
  project,
  onClose,
}: ProjectsCaseStudyModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    setActiveImageIndex(0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fade-in"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 transition-opacity backdrop-filter-none"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-5xl max-h-[92dvh] overflow-y-auto rounded-[24px] sm:rounded-[32px] bg-[#FFFFFF] text-[#121212] shadow-[0_30px_100px_rgba(0,0,0,0.35)] border border-black/[0.08] p-6 sm:p-10 z-10 flex flex-col gap-8">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-black/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[12px] font-semibold text-[#FF5526] uppercase tracking-[0.14em]">
              PROJECT {project.number}
            </span>
            <span className="h-1 w-1 rounded-full bg-black/20" />
            <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-[#767676]">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study modal"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F3F1] text-[#121212] transition-all duration-300 hover:bg-[#121212] hover:text-white hover:rotate-90 active:scale-95 cursor-pointer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L13 13M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Project Title & Key Metrics Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2
              id="case-study-title"
              className="text-[28px] sm:text-[38px] md:text-[44px] font-semibold tracking-[-0.035em] text-[#121212] leading-[1.08]"
            >
              {project.title}
            </h2>
            <p className="mt-2 text-[15px] sm:text-[17px] text-[#666666] font-normal">
              {project.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-[18px] bg-[#F7F7F5] border border-black/[0.04]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#888888] block">
                LOCATION
              </span>
              <span className="text-[13px] font-semibold text-[#121212] mt-0.5 block">
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#888888] block">
                AREA
              </span>
              <span className="text-[13px] font-semibold text-[#121212] mt-0.5 block">
                {project.area}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#888888] block">
                TIMELINE
              </span>
              <span className="text-[13px] font-semibold text-[#121212] mt-0.5 block">
                {project.duration}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#888888] block">
                YEAR
              </span>
              <span className="text-[13px] font-semibold text-[#121212] mt-0.5 block">
                {project.year}
              </span>
            </div>
          </div>
        </div>

        {/* Gallery Image Display */}
        <div className="flex flex-col gap-3">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] bg-[#181818]">
            <img
              src={project.galleryImages[activeImageIndex] || project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover transition-all duration-500"
            />
            <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-mono text-white backdrop-blur-sm">
              VIEW 0{activeImageIndex + 1} / 0{project.galleryImages.length}
            </div>
          </div>

          {/* Thumbnails row */}
          {project.galleryImages.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {project.galleryImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative h-18 w-28 shrink-0 overflow-hidden rounded-[12px] border-2 transition-all cursor-pointer ${
                    activeImageIndex === i
                      ? "border-[#FF5526] scale-102"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} thumbnail ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Spatial Intent & Solution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-[12px] font-mono uppercase tracking-[0.14em] text-[#FF5526]">
              01 / SPATIAL INTENT & NARRATIVE
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
              {project.summary}
            </p>
            <div className="p-5 rounded-[18px] bg-[#F7F7F5] border border-black/[0.04] mt-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#666666] font-semibold block mb-1.5">
                The Architectural Challenge
              </span>
              <p className="text-[14px] leading-relaxed text-[#444444]">
                {project.challenge}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[12px] font-mono uppercase tracking-[0.14em] text-[#FF5526]">
              02 / ENGINEERING SOLUTION
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#333333]">
              {project.solution}
            </p>
            <div className="p-5 rounded-[18px] bg-[#F7F7F5] border border-black/[0.04] mt-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#666666] font-semibold block mb-1.5">
                Turnkey Scope of Works
              </span>
              <ul className="space-y-1.5 text-[13.5px] text-[#444444]">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5526]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Materiality Palette Row */}
        <div className="pt-6 border-t border-black/[0.08]">
          <h3 className="text-[12px] font-mono uppercase tracking-[0.14em] text-[#888888] mb-4">
            SPECIFIED MATERIAL PALETTE
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.materials.map((mat, i) => (
              <div
                key={i}
                className="p-3.5 rounded-[14px] bg-[#F9F9F8] border border-black/[0.05]"
              >
                <span className="text-[13px] font-semibold text-[#121212] block">
                  {mat.name}
                </span>
                <span className="text-[11px] text-[#777777] mt-0.5 block">
                  {mat.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[13px] text-[#666666]">
            Ready to execute a similar turnkey fit-out?
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full border border-black/[0.12] text-[13px] font-semibold text-[#121212] hover:bg-[#F3F3F1] transition-colors cursor-pointer"
            >
              Close Preview
            </button>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5526] text-white text-[13px] font-semibold tracking-[-0.01em] hover:bg-[#e04518] transition-colors shadow-[0_4px_16px_rgba(255,85,38,0.28)]"
            >
              <span>Commission A Project</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

