import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { Search, Compass, Hammer, TrendingUp } from "lucide-react";

export const ApproachSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-5 h-5 text-orange-600" />,
      title: "Understand",
      subtitle: "Analysis & Discovery",
      description:
        "We begin by thoroughly understanding your business processes, current pain points, operational workflows, and data structures before writing a single line of code.",
    },
    {
      number: "02",
      icon: <Compass className="w-5 h-5 text-orange-600" />,
      title: "Plan",
      subtitle: "Architecture & Design",
      description:
        "We draft clear system specifications, database schemas, security roles, and user journeys to ensure the technical blueprint aligns with operational needs.",
    },
    {
      number: "03",
      icon: <Hammer className="w-5 h-5 text-orange-600" />,
      title: "Build",
      subtitle: "Engineering & Validation",
      description:
        "Using modern frameworks and robust engineering standards, we develop clean, modular software that is thoroughly tested for performance and reliability.",
    },
    {
      number: "04",
      icon: <TrendingUp className="w-5 h-5 text-orange-600" />,
      title: "Improve",
      subtitle: "Support & Iteration",
      description:
        "We support deployment, monitor real-world usage, optimize performance bottlenecks, and refine features to ensure sustained business efficiency over time.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200/90">
      <div className="corporate-container">
        <SectionHeading
          eyebrow="Our Methodology"
          title="How We Deliver Results"
          subtitle="A disciplined, transparent 4-stage engineering approach ensuring software projects are delivered on time, within scope, and built for real utility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-orange-600 transition-colors">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-950">
                {step.title}
              </h3>
              <div className="text-xs font-semibold text-orange-600 mb-2">
                {step.subtitle}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
