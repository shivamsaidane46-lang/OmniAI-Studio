import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding relative" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
          Have a project in mind?
        </h2>
        <p className="mt-4 text-xl text-text-secondary">
          Let&apos;s build something useful.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:hello@omniaistudio.in"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-purple-700 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group"
          >
            Get In Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border-custom px-8 py-3.5 text-sm font-semibold text-text-primary hover:border-purple-600 hover:text-purple-400 transition-all"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
