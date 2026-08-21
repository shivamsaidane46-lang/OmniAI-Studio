"use client";

import { useState, useMemo } from "react";
import {
  getProjects,
  getProjectCategories,
  getProjectTechnologies,
} from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilter } from "@/components/ProjectFilter";

export default function ProjectsPage() {
  const allProjects = getProjects();
  const categories = getProjectCategories();
  const technologies = getProjectTechnologies();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some((t) => t.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategory && project.category !== selectedCategory) {
        return false;
      }

      // Technology filter
      if (
        selectedTechnology &&
        !project.technologies.includes(selectedTechnology)
      ) {
        return false;
      }

      return true;
    });
  }, [allProjects, searchQuery, selectedCategory, selectedTechnology]);

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-wider text-purple-400 uppercase mb-2">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            All Projects
          </h1>
          <p className="mt-2 text-text-secondary max-w-2xl">
            AI automations, n8n workflows, and intelligent systems — built to
            solve real business problems.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <ProjectFilter
            categories={categories}
            technologies={technologies}
            selectedCategory={selectedCategory}
            selectedTechnology={selectedTechnology}
            searchQuery={searchQuery}
            onCategoryChange={setSelectedCategory}
            onTechnologyChange={setSelectedTechnology}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Results count */}
        <p className="text-sm text-text-secondary mb-6">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"} found
        </p>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                showFeaturedBadge
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-secondary">
              No projects match your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("");
                setSelectedTechnology("");
              }}
              className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
