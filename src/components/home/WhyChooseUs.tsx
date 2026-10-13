import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { 
  CheckCircle, 
  Target, 
  Sliders, 
  Headphones, 
  Zap, 
  Maximize2 
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <CheckCircle className="w-5 h-5 text-orange-600" />,
      title: "Practical Solutions",
      description:
        "We build digital tools designed to solve immediate day-to-day operational difficulties, avoiding unnecessary complexity and bloated code.",
    },
    {
      icon: <Target className="w-5 h-5 text-orange-600" />,
      title: "Business-Focused Development",
      description:
        "Every technical decision is tied directly to measurable operational value: saved staff hours, accurate records, and streamlined reporting.",
    },
    {
      icon: <Sliders className="w-5 h-5 text-orange-600" />,
      title: "Customized Technology",
      description:
        "No generic one-size-fits-all compromises. Applications are custom-tailored to your exact business workflows and data specifications.",
    },
    {
      icon: <Headphones className="w-5 h-5 text-orange-600" />,
      title: "Reliable Support",
      description:
        "Direct communication with the technical developer, ensuring clear accountability, rapid issue resolution, and dependable ongoing maintenance.",
    },
    {
      icon: <Zap className="w-5 h-5 text-orange-600" />,
      title: "Modern Technology",
      description:
        "Engineered with proven, high-performance modern tooling including React, TypeScript, and robust database architectures for longevity.",
    },
    {
      icon: <Maximize2 className="w-5 h-5 text-orange-600" />,
      title: "Scalable Solutions",
      description:
        "Clean, modular software architectures designed to expand smoothly as your operations, user counts, and data volumes grow.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/90">
      <div className="corporate-container">
        <SectionHeading
          eyebrow="Value Proposition"
          title="Why Work With Maan Together"
          subtitle="A dedicated independent software practice combining technical proficiency with genuine accountability and operational focus."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-950 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
