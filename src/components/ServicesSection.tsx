import { getServices } from "@/lib/data";
import { Cpu, Workflow, Bot, Plug } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Workflow,
  Bot,
  Plug,
};

export function ServicesSection() {
  const services = getServices();

  return (
    <section className="section-padding" id="services">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-wider text-purple-400 uppercase mb-2">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Services
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Specialized in building AI-powered systems that transform how
            businesses operate.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Cpu;
            return (
              <div key={service.id} className="card p-6 group">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/10 text-purple-400 mb-4 transition-all group-hover:bg-purple-600/20 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-text-secondary"
                    >
                      <div className="h-1 w-1 rounded-full bg-purple-500 mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
