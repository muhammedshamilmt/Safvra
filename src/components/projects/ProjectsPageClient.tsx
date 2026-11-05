"use client";

import { useMemo, useState } from "react";
import { PROJECTS_DATA, Project } from "@/data/projectsData";
import ProjectsHeroSection from "@/components/ProjectsHeroSection";
import ProjectsGallerySection from "@/components/ProjectsGallerySection";
import ProjectsProcessStrip from "@/components/ProjectsProcessStrip";
import ProjectsCaseStudyModal from "@/components/ProjectsCaseStudyModal";

export default function ProjectsPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Counts by category
  const counts = useMemo(() => {
    return {
      all: PROJECTS_DATA.length,
      residential: PROJECTS_DATA.filter((p) => p.category === "Residential").length,
      commercial: PROJECTS_DATA.filter((p) => p.category === "Commercial").length,
      hospitality: PROJECTS_DATA.filter((p) => p.category === "Hospitality").length,
      retail: PROJECTS_DATA.filter((p) => p.category === "Retail").length,
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Hero with metrics, category filters & view mode toggle */}
      <ProjectsHeroSection
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        counts={counts}
      />

      {/* Gallery / Table Listing */}
      <ProjectsGallerySection
        projects={filteredProjects}
        viewMode={viewMode}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* 4-Phase Architectural Execution Methodology Strip */}
      <ProjectsProcessStrip />

      {/* Interactive Case Study Detail Modal */}
      <ProjectsCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

