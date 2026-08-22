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
    <Link
      href={`/projects/${project.slug}`}
      className="card group flex h-full flex-col overflow-hidden"
    >
      {/* Thumbnail — consistent 16:9 ratio */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-surface-elevated">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06),transparent_70%)]" />
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} workflow preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ProjectIcon category={project.category} />
          </div>
        )}

        {showFeaturedBadge && project.featured && (
          <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
            Featured
          </div>
        )}
      </div>

      {/* Content — equal card height with predictable spacing */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug text-text-primary transition-colors group-hover:text-purple-400">
            {project.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-text-secondary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-400" />
        </div>

        <p className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-custom bg-surface-elevated px-2 py-1 text-[11px] text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-md border border-border-custom bg-surface-elevated px-2 py-1 text-[11px] text-text-secondary">
              +{project.technologies.length - 3}
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
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="48" height="48" rx="12" stroke={color} strokeWidth="1.5" opacity="0.6" />
        <rect x="16" y="16" width="32" height="32" rx="8" fill={color} opacity="0.15" />
        <circle cx="32" cy="28" r="6" fill={color} opacity="0.4" />
        <rect x="24" y="38" width="16" height="2" rx="1" fill={color} opacity="0.3" />
        <rect x="28" y="42" width="8" height="2" rx="1" fill={color} opacity="0.2" />
      </svg>
    </div>
  );
}
