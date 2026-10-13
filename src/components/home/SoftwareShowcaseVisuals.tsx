import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { Button } from "../common/Button";
import { ArrowRight, ExternalLink, Cpu, BarChart3, Database } from "lucide-react";

interface SoftwareShowcaseVisualsProps {
  onNavigate: (pageId: string) => void;
}

export const SoftwareShowcaseVisuals: React.FC<SoftwareShowcaseVisualsProps> = ({
  onNavigate,
}) => {
  const visuals = [
    {
      title: "Intelligent Analytics & Code Systems",
      category: "Custom Web Application",
      image: "/assets/hero-tech-dashboard.jpg",
      description:
        "High-performance operational dashboards with real-time KPI metrics, query visualization, and responsive dark mode interfaces.",
      badge: "Production Architecture",
      icon: <BarChart3 className="w-4 h-4 text-orange-500" />,
      link: "#services",
    },
    {
      title: "Business Process Automation & Pipelines",
      category: "Workflow Automation",
      image: "/assets/automation-workflow-tech.jpg",
      description:
        "Automated data pipelines, scheduled ETL scripts, event-triggered notifications, and multi-system API bridges.",
      badge: "Automated Workflows",
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      link: "#services",
    },
    {
      title: "Financial CashBook & Ledger Suite",
      category: "Desktop & Web System",
      image: "/assets/cashbook-software-ui.jpg",
      description:
        "Zero-clutter daily bookkeeping, cash-in/out ledger tracking, instant balance calculations, and categorized reporting.",
      badge: "Microsoft Store Available",
      icon: <Database className="w-4 h-4 text-orange-500" />,
      link: "https://apps.microsoft.com/detail/9NHC3V5425TL?hl=en&gl=SA&ocid=pdpshare",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#0A0C10] text-white border-t border-slate-800">
      <div className="corporate-container">
        <SectionHeading
          dark
          eyebrow="Interactive Systems Gallery"
          title="Software Engineering in Action"
          subtitle="Explore modern visual interfaces, automation pipelines, and management software developed by Maan Together for modern businesses."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visuals.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl hover:border-slate-700 transition-all duration-300 group"
            >
              <div>
                {/* Visual Image Viewport */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/20"></div>

                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono text-white">
                      {item.icon}
                      <span>{item.category}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-950/80 border border-orange-800/80 text-orange-300">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-2.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                {item.link.startsWith("http") ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-white border-slate-700 hover:border-orange-500 hover:bg-slate-800"
                    href={item.link}
                    iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    View on Microsoft Store
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-white border-slate-700 hover:border-orange-500 hover:bg-slate-800"
                    onClick={() => onNavigate("solutions")}
                    iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Explore Solutions
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
