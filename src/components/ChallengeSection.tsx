import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function ChallengeSection() {
  return (
    <section className="section-padding relative overflow-hidden" id="challenge">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-2xl border border-border-custom bg-surface p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left — Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-4 py-1.5 mb-6">
                <Zap className="h-3.5 w-3.5 text-purple-400" />
                <span className="text-xs font-medium tracking-wider text-purple-400 uppercase">
                  Challenge
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                30 Days.{" "}
                <span className="gradient-text">30 Systems.</span>
              </h2>

              <p className="mt-5 text-text-secondary leading-relaxed max-w-lg">
                One practical AI-powered workflow or business system, built and
                documented every single day for 30 days straight. Real problems,
                real solutions, real results.
              </p>

              <Link
                href="/projects"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-700 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group"
              >
                Explore the Challenge
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right — Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 30 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-10 w-10 rounded-lg border flex items-center justify-center text-xs font-mono transition-all ${
                      i < 4
                        ? "border-purple-600 bg-purple-600/20 text-purple-400"
                        : "border-border-custom bg-surface-elevated text-text-secondary/40"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
