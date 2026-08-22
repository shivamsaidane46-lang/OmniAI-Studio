import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  showFeaturedBadge?: boolean;
}

export function ProjectCard({ project, showFeaturedBadge = false }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="card group block overflow-hidden">
      {/* Thumbnail area */}
      <div className="relative h-48 bg-surface-elevated overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} workflow preview`}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ProjectIcon category={project.category} />
          </div>
        )}

        {showFeaturedBadge && project.featured && (
          <div className="absolute top-3 right-3 rounded-full bg-purple-600/90 px-2.5 py-1 text-[10px] font-semibold text-white uppercase tracking-wider">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-text-primary group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-text-secondary group-hover:text-purple-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-md bg-surface-elevated px-2 py-1 text-[11px] text-text-secondary border border-border-custom">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md bg-surface-elevated px-2 py-1 text-[11px] text-text-secondary border border-border-custom">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function ProjectIcon({ category }: { category: string }) {
  const colors: Record<string, string> = {
    "AI Automation": "#8b5cf6",
    "AI Agents": "#a78bfa",
    "API Integration": "#6d28d9",
  };
  const color = colors[category] || "#8b5cf6";

  return (
    <div className="relative">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="8" width="48" height="48" rx="12" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <rect x="16" y="16" width="32" height="32" rx="8" fill={color} opacity="0.15" />
        <circle cx="32" cy="28" r="6" fill={color} opacity="0.4" />
        <rect x="24" y="38" width="16" height="2" rx="1" fill={color} opacity="0.3" />
        <rect x="28" y="42" width="8" height="2" rx="1" fill={color} opacity="0.2" />
      </svg>
    </div>
  );
}
