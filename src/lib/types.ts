// ============================================================
// OmniAI Studio — Data Types
// Central type definitions. Keep this as the single source of
// truth so swapping the data source later is painless.
// ============================================================

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  featured: boolean;
  thumbnail: string;
  problem: string;
  solution: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  screenshots: string[];
  // Extensible — add fields here when needed (day, status, heroImage, …)
  [key: string]: unknown;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  features: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
