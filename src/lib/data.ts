// ============================================================
// OmniAI Studio — Central Data Layer
//
// All data access goes through these functions.
// Today they return from local arrays. Tomorrow they can hit
// Google Sheets, a CMS, or any other source — the components
// never need to change.
// ============================================================

import { Project, Service, Stat } from "./types";
import { projects } from "./data/projects";
import { services } from "./data/services";
import { stats } from "./data/stats";

/* ── Projects ─────────────────────────────────────────────── */

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectCategories(): string[] {
  return Array.from(new Set(projects.map((p) => p.category)));
}

export function getProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
  return Array.from(techSet).sort();
}

/* ── Services ─────────────────────────────────────────────── */

export function getServices(): Service[] {
  return services;
}

/* ── Stats ────────────────────────────────────────────────── */

export function getStats(): Stat[] {
  return stats;
}
