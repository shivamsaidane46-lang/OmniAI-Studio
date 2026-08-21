import { getStats } from "@/lib/data";

export function StatsSection() {
  const stats = getStats();

  return (
    <section className="relative border-y border-border-custom bg-surface">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.04),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-text-primary">
                {stat.value}
                {stat.suffix && (
                  <span className="text-purple-400">{stat.suffix}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
