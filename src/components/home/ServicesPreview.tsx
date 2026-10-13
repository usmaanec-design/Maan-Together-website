import React from "react";
import { SERVICES_DATA } from "../../data/services";
import { SectionHeading } from "../common/SectionHeading";
import { ServiceIcon } from "../common/ServiceIcon";
import { Button } from "../common/Button";
import { ArrowRight, Check } from "lucide-react";

interface ServicesPreviewProps {
  onNavigate: (pageId: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({
  onNavigate,
  onSelectService,
}) => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="corporate-container">
        <SectionHeading
          eyebrow="Specialized Capabilities"
          title="Practical IT & Software Solutions"
          subtitle="Engineered around real operational requirements. We develop secure, maintainable digital tools that reduce complexity and boost productivity."
        />

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-slate-100 group-hover:bg-orange-50 border border-slate-200/80 group-hover:border-orange-200/80 flex items-center justify-center text-slate-800 group-hover:text-orange-600 transition-colors mb-4">
                  <ServiceIcon name={service.iconName} className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-slate-950 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Micro capabilities preview */}
                <ul className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  {service.capabilities.slice(0, 2).map((cap, i) => (
                    <li
                      key={i}
                      className="text-[11px] text-slate-500 flex items-center gap-1.5"
                    >
                      <Check className="w-3 h-3 text-orange-600 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2">
                <button
                  onClick={() => {
                    if (onSelectService) onSelectService(service.id);
                    onNavigate("services");
                  }}
                  className="text-xs font-semibold text-slate-900 group-hover:text-orange-600 inline-flex items-center gap-1 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <Button
            variant="dark"
            size="md"
            onClick={() => onNavigate("services")}
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Explore All 8 Services & Technical Deliverables
          </Button>
        </div>
      </div>
    </section>
  );
};
