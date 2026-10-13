import React from "react";
import { SITE_CONFIG } from "../../config/siteConfig";
import { Code2, Compass, Cpu } from "lucide-react";

export const TrustBar: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="w-5 h-5 text-orange-600" />,
      title: "Software Development",
      description: "Custom business software, responsive web applications, and operational digital tools.",
    },
    {
      icon: <Compass className="w-5 h-5 text-orange-600" />,
      title: "IT Consultancy",
      description: "Objective guidance, system architecture planning, and technology process optimization.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-orange-600" />,
      title: "Digital & Business Solutions",
      description: "Workflow automation, data management systems, GIS mapping, and custom integration.",
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-slate-50 border-y border-slate-200/90">
      <div className="corporate-container">
        {/* Company introduction header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs mb-3.5">
            <img
              src={SITE_CONFIG.logoMarkUrl}
              alt="Maan Together"
              className="w-5 h-5 rounded-full object-contain"
            />
            <span>Official Independent IT Practice &bull; Rawalpindi, Pakistan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Technology Built Around Your Business
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Maan Together is a Pakistan-based information technology and software services business focused on developing practical, reliable, and user-focused digital solutions.
          </p>
        </div>

        {/* 3 Core Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
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
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
