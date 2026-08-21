import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { getProjectBySlug, getProjects } from "@/lib/data";
import type { ReactNode } from "react";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate static params for all projects
export function generateStaticParams() {
  const projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — OmniAI Studio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-purple-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        {/* Hero area */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-3 py-1 mb-4">
            <span className="text-xs font-medium text-purple-400">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {/* Action links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border-custom px-5 py-2.5 text-sm font-medium text-text-primary hover:border-purple-600 hover:text-purple-400 transition-all"
              >
                <GithubIcon className="h-4 w-4" />
                View Source
              </a>
            )}

            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-700 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="relative rounded-2xl border border-border-custom bg-surface-elevated overflow-hidden mb-12 h-64 sm:h-80 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06),transparent_70%)]" />

          <div className="relative text-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              className="mx-auto mb-3 opacity-40"
            >
              <rect
                x="10"
                y="10"
                width="60"
                height="60"
                rx="14"
                stroke="#8b5cf6"
                strokeWidth="1.5"
              />
              <rect
                x="20"
                y="20"
                width="40"
                height="40"
                rx="8"
                fill="#8b5cf6"
                opacity="0.1"
              />
              <circle
                cx="40"
                cy="35"
                r="8"
                fill="#8b5cf6"
                opacity="0.25"
              />
              <rect
                x="28"
                y="48"
                width="24"
                height="3"
                rx="1.5"
                fill="#8b5cf6"
                opacity="0.2"
              />
            </svg>

            <p className="text-xs text-text-secondary/60">
              Project preview
            </p>
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-10">

          {/* Problem */}
          {project.problem && (
            <ContentSection title="The Problem">
              <p className="text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </ContentSection>
          )}

          {/* Solution */}
          {project.solution && (
            <ContentSection title="The Solution">
              <p className="text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </ContentSection>
          )}

          {/* Tech Stack */}
          <ContentSection title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border-custom bg-surface px-3 py-1.5 text-sm text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ContentSection>
        </div>

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-border-custom">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-purple-400 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all projects
          </Link>
        </div>

      </div>
    </div>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
        <div className="h-1 w-6 rounded-full bg-purple-600" />
        {title}
      </h2>

      {children}
    </div>
  );
}
