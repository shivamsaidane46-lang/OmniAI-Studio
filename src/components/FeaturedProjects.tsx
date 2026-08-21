import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="section-padding" id="projects">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium tracking-wider text-purple-400 uppercase mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Featured Projects
            </h2>
            <p className="mt-2 text-text-secondary max-w-lg">
              Real AI systems solving real business problems — from invoice
              automation to intelligent agents.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors group"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
