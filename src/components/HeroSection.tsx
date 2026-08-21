import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkflowDiagram } from "./WorkflowDiagram";

const techBadges = [
  "n8n",
  "OpenAI",
  "Python",
  "Next.js",
  "Google Sheets",
  "Webhooks",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-4 py-1.5 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-glow-pulse" />
              <span className="text-xs font-medium tracking-wider text-purple-400 uppercase">
                AI Automation & Systems
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-text-primary">
              I build AI systems that automate{" "}
              <span className="gradient-text">real business problems.</span>
            </h1>

            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
              OmniAI Studio is an India-based AI automation studio building
              end-to-end AI automations, n8n workflows, intelligent agents,
              and API integrations that save time, reduce manual work, and
              help businesses scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group"
              >
                Explore My Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border-custom px-6 py-3 text-sm font-semibold text-text-primary hover:border-purple-600 hover:text-purple-400 transition-all"
              >
                Work With Me
              </Link>
            </div>

            {/* Tech Badges */}
            <div className="mt-10 flex flex-wrap gap-2" aria-label="Technologies used">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border-custom bg-surface px-3 py-1.5 text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Workflow Diagram */}
          <div className="hidden lg:block animate-fade-in" aria-hidden="true">
            <WorkflowDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
