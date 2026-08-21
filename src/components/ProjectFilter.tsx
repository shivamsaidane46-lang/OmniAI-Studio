"use client";

import { Search, X } from "lucide-react";

interface ProjectFilterProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTechnology: string;
  searchQuery: string;
  onCategoryChange: (cat: string) => void;
  onTechnologyChange: (tech: string) => void;
  onSearchChange: (query: string) => void;
}

export function ProjectFilter({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  searchQuery,
  onCategoryChange,
  onTechnologyChange,
  onSearchChange,
}: ProjectFilterProps) {
  return (
    <div className="space-y-5">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-border-custom bg-surface pl-11 pr-10 py-3 text-sm text-text-primary placeholder-text-secondary focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600/50 transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-all"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        <FilterPill
          label="All"
          active={selectedCategory === ""}
          onClick={() => onCategoryChange("")}
        />
        {categories.map((cat) => (
          <FilterPill
            key={cat}
            label={cat}
            active={selectedCategory === cat}
            onClick={() => onCategoryChange(cat)}
          />
        ))}
      </div>

      {/* Technology pills */}
      <div className="flex flex-wrap gap-2">
        <FilterPill
          label="All Tech"
          active={selectedTechnology === ""}
          onClick={() => onTechnologyChange("")}
          size="sm"
        />
        {technologies.map((tech) => (
          <FilterPill
            key={tech}
            label={tech}
            active={selectedTechnology === tech}
            onClick={() => onTechnologyChange(tech)}
            size="sm"
          />
        ))}
      </div>
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
  size = "md",
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  size?: "sm" | "md";
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border text-sm font-medium transition-all ${
        size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5"
      } ${
        active
          ? "border-purple-600 bg-purple-600/15 text-purple-400"
          : "border-border-custom bg-surface text-text-secondary hover:border-purple-600/50 hover:text-text-primary"
      }`}
    >
      {label}
    </button>
  );
}
