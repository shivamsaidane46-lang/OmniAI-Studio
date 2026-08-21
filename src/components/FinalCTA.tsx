import Link from "next/link";
import { ArrowRight, Mail, ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding relative" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
            Work With OmniAI Studio
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-text-secondary leading-relaxed">
            Tell me what you&apos;re trying to automate. I&apos;ll review the requirement
            and we can decide the right way to build it.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="mailto:work@omniaistudio.in"
            className="group rounded-2xl border border-border-custom bg-surface/50 p-6 text-left hover:border-purple-600/60 hover:bg-surface transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/10 text-purple-400">
                <Mail className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="mt-5 text-xs font-medium uppercase tracking-wider text-text-secondary">
              Project inquiries
            </p>
            <p className="mt-1 text-lg font-semibold text-text-primary">
              work@omniaistudio.in
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              For automation, workflow, and AI system projects.
            </p>
          </a>

          <a
            href="mailto:hello@omniaistudio.in"
            className="group rounded-2xl border border-border-custom bg-surface/50 p-6 text-left hover:border-purple-600/60 hover:bg-surface transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/10 text-purple-400">
                <Mail className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="mt-5 text-xs font-medium uppercase tracking-wider text-text-secondary">
              General inquiries
            </p>
            <p className="mt-1 text-lg font-semibold text-text-primary">
              hello@omniaistudio.in
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              For general questions, collaborations, and other inquiries.
            </p>
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:work@omniaistudio.in?subject=Project%20Inquiry%20-%20OmniAI%20Studio"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-purple-700 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border-custom px-7 py-3.5 text-sm font-semibold text-text-primary hover:border-purple-600 hover:text-purple-400 transition-all"
          >
            View Projects
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-text-secondary">
          Based in India · Working with clients remotely
        </p>
      </div>
    </section>
  );
}
