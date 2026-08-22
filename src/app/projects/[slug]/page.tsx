import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { getProjectBySlug, getProjects } from "@/lib/data";
import type { ReactNode } from "react";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found", robots: { index: false, follow: false } };
  }

  const canonical = `/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical },
    keywords: [...project.technologies, project.category, "AI automation", "n8n workflow", "invoice automation"],
    openGraph: {
      type: "article" as const,
      url: canonical,
      title: `${project.title} | OmniAI Studio`,
      description: project.description,
      siteName: "OmniAI Studio",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const heroImage = typeof project.heroImage === "string" ? project.heroImage : project.thumbnail;
  const workflowImage = typeof project.workflowImage === "string" ? project.workflowImage : heroImage;
  const jsonFile = typeof project.jsonFile === "string" ? project.jsonFile : null;
  const demoUrl = typeof project.demoUrl === "string" && project.demoUrl !== "#" ? project.demoUrl : null;
  const day = typeof project.day === "string" ? project.day : null;
  const overview = typeof project.overview === "string" ? project.overview : null;
  const workflowSteps = Array.isArray(project.workflowSteps)
    ? project.workflowSteps.filter((step): step is string => typeof step === "string")
    : [];
  const keyFeatures = Array.isArray(project.keyFeatures)
    ? project.keyFeatures.filter((feature): feature is string => typeof feature === "string")
    : [];
  const limitations = Array.isArray(project.limitations)
    ? project.limitations.filter((item): item is string => typeof item === "string")
    : [];

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-purple-400 transition-colors mb-8 group">
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {day && <span className="inline-flex items-center rounded-full border border-purple-600/30 bg-purple-600/10 px-3 py-1 text-xs font-semibold text-purple-400">{day}</span>}
            <span className="inline-flex items-center rounded-full border border-border-custom bg-surface px-3 py-1 text-xs font-medium text-text-secondary">{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">{project.title}</h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-3xl">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border-custom px-5 py-2.5 text-sm font-medium text-text-primary hover:border-purple-600 hover:text-purple-400 transition-all">
                <GithubIcon className="h-4 w-4" />
                View Source
              </a>
            )}
            {jsonFile && (
              <a href={jsonFile} download className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-700 transition-all">
                <Download className="h-4 w-4" />
                Download Workflow JSON
              </a>
            )}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-border-custom bg-surface-elevated mb-12">
          <Image src={heroImage} alt={`${project.title} workflow architecture`} width={1600} height={900} className="h-auto w-full" priority />
        </div>

        <div className="space-y-10">
          {overview && <ContentSection title="Overview"><p className="text-text-secondary leading-relaxed">{overview}</p></ContentSection>}
          {project.problem && <ContentSection title="The Problem"><p className="text-text-secondary leading-relaxed">{project.problem}</p></ContentSection>}
          {project.solution && <ContentSection title="The Solution"><p className="text-text-secondary leading-relaxed">{project.solution}</p></ContentSection>}

          {workflowSteps.length > 0 && (
            <ContentSection title="How the Workflow Works">
              <ol className="space-y-3">
                {workflowSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-xl border border-border-custom bg-surface p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-600/15 text-xs font-bold text-purple-400">{index + 1}</span>
                    <span className="text-text-secondary leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </ContentSection>
          )}

          <ContentSection title="Workflow Architecture">
            <div className="overflow-hidden rounded-2xl border border-border-custom bg-surface-elevated">
              <Image src={workflowImage} alt="AI Invoice Extractor n8n workflow architecture" width={1600} height={900} className="h-auto w-full" />
            </div>
          </ContentSection>

          {demoUrl && (
            <ContentSection title="Demo">
              <div className="overflow-hidden rounded-2xl border border-border-custom bg-black">
                <video controls preload="metadata" className="h-auto w-full" src={demoUrl}>
                  Your browser does not support the video element.
                </video>
              </div>
            </ContentSection>
          )}

          {keyFeatures.length > 0 && (
            <ContentSection title="Key Features">
              <div className="grid gap-3 sm:grid-cols-2">
                {keyFeatures.map((feature) => <div key={feature} className="rounded-xl border border-border-custom bg-surface p-4 text-sm text-text-secondary">{feature}</div>)}
              </div>
            </ContentSection>
          )}

          <ContentSection title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => <span key={tech} className="rounded-lg border border-border-custom bg-surface px-3 py-1.5 text-sm text-text-secondary">{tech}</span>)}
            </div>
          </ContentSection>

          {limitations.length > 0 && (
            <ContentSection title="Scope & Limitations">
              <ul className="space-y-2 text-text-secondary leading-relaxed">
                {limitations.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" /><span>{item}</span></li>)}
              </ul>
            </ContentSection>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-border-custom">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-purple-400 transition-colors group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}

function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3"><div className="h-1 w-6 rounded-full bg-purple-600" />{title}</h2>
      {children}
    </div>
  );
}
