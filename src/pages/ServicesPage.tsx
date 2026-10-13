import React from "react";
import { SERVICES_DATA } from "../data/services";
import { ServiceIcon } from "../components/common/ServiceIcon";
import { Badge } from "../components/common/Badge";
import { Button } from "../components/common/Button";
import { 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Database, 
  Layers, 
  Map, 
  Cpu, 
  Globe2
} from "lucide-react";

interface ServicesPageProps {
  onNavigate: (pageId: string) => void;
  selectedServiceId?: string;
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  selectedServiceId,
  onSelectServiceForContact,
}) => {
  const handleInquire = (serviceTitle: string) => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(serviceTitle);
    }
    onNavigate("contact");
  };

  // Render a clean, professional technology visual mockup for each service
  const renderServiceVisual = (serviceId: string) => {
    switch (serviceId) {
      case "software-development":
        return (
          <div className="rounded-xl bg-[#0A0C10] p-4 text-slate-300 font-mono text-xs border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 text-orange-400">
                <Terminal className="w-3.5 h-3.5" /> app-core.module.ts
              </span>
              <span>Clean Arch</span>
            </div>
            <pre className="text-[11px] text-slate-400 leading-relaxed overflow-x-auto">
{`export class BusinessCore {
  async executeWorkflow(params: Spec) {
    const validated = await this.validate(params);
    return this.persistence.save(validated);
  }
}`}
            </pre>
          </div>
        );

      case "web-application-development":
        return (
          <div className="rounded-xl bg-slate-900 p-4 text-slate-200 border border-slate-800 shadow-inner space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5 text-white font-mono text-[11px]">
                <Globe2 className="w-3.5 h-3.5 text-orange-500" /> Web Viewport 1080p
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">60 FPS</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-slate-400">Response</span>
                <div className="text-emerald-400 font-bold">&lt; 150ms</div>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-slate-400">Layout</span>
                <div className="text-white font-bold">Fluid / Mobile-Ready</div>
              </div>
            </div>
          </div>
        );

      case "it-consultancy":
        return (
          <div className="rounded-xl bg-slate-900 p-4 text-slate-300 border border-slate-800 shadow-inner space-y-2">
            <div className="text-xs font-semibold text-white flex items-center justify-between pb-2 border-b border-slate-800">
              <span>System Modernization Plan</span>
              <span className="text-[10px] text-orange-400 font-mono">Verified Path</span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center justify-between bg-slate-950 p-2 rounded">
                <span>Architecture Audit</span>
                <span className="text-emerald-400">100%</span>
              </div>
              <div className="flex items-center justify-between bg-slate-950 p-2 rounded">
                <span>Database Normalization</span>
                <span className="text-emerald-400">Optimized</span>
              </div>
            </div>
          </div>
        );

      case "business-automation":
        return (
          <div className="rounded-xl bg-[#0A0C10] p-4 text-slate-300 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
              <span className="flex items-center gap-1.5 text-orange-400 font-mono text-[11px]">
                <Cpu className="w-3.5 h-3.5" /> cron.task-runner
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">SCHEDULED</span>
            </div>
            <div className="space-y-1.5 text-[11px] font-mono text-slate-400">
              <div className="flex justify-between">
                <span>Daily Sales Reconciliation</span>
                <span className="text-slate-200">00:00 UTC</span>
              </div>
              <div className="flex justify-between">
                <span>Auto-Export PDF to Operations</span>
                <span className="text-emerald-400">SUCCESS</span>
              </div>
            </div>
          </div>
        );

      case "data-management-reporting":
        return (
          <div className="rounded-xl bg-slate-900 p-4 text-slate-300 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
              <span className="flex items-center gap-1.5 text-white font-mono text-[11px]">
                <Database className="w-3.5 h-3.5 text-orange-500" /> Relational &amp; NoSQL
              </span>
              <span className="text-slate-400 font-mono text-[10px]">Indexed</span>
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="flex justify-between bg-slate-950 p-1.5 rounded">
                <span>Structured Schemas</span>
                <span className="text-slate-200">ACID / Clean</span>
              </div>
              <div className="flex justify-between bg-slate-950 p-1.5 rounded">
                <span>Executive Reports</span>
                <span className="text-orange-400">CSV &bull; XLSX &bull; PDF</span>
              </div>
            </div>
          </div>
        );

      case "custom-business-systems":
        return (
          <div className="rounded-xl bg-slate-900 p-4 text-slate-300 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
              <span className="flex items-center gap-1.5 text-white font-mono text-[11px]">
                <Layers className="w-3.5 h-3.5 text-orange-500" /> Operations Suite
              </span>
              <span className="text-slate-400 font-mono text-[10px]">Multi-Role</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300">
              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-slate-400 block">Workforce</span>
                <span className="font-bold text-white">Roster &amp; Logs</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800">
                <span className="text-slate-400 block">Assets</span>
                <span className="font-bold text-white">Fleet &amp; Inventory</span>
              </div>
            </div>
          </div>
        );

      case "gis-mapping-solutions":
        return (
          <div className="rounded-xl bg-[#0A0C10] p-4 text-slate-300 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
              <span className="flex items-center gap-1.5 text-orange-400 font-mono text-[11px]">
                <Map className="w-3.5 h-3.5" /> Spatial Vectors
              </span>
              <span className="text-slate-400 font-mono text-[10px]">WGS84</span>
            </div>
            <div className="space-y-1.5 text-[11px] font-mono text-slate-400">
              <div className="flex justify-between">
                <span>Polygon Boundary Layer</span>
                <span className="text-slate-200">GeoJSON Clean</span>
              </div>
              <div className="flex justify-between">
                <span>Location Intelligence</span>
                <span className="text-emerald-400">Interactive</span>
              </div>
            </div>
          </div>
        );

      case "software-integration":
        return (
          <div className="rounded-xl bg-slate-900 p-4 text-slate-300 border border-slate-800 shadow-inner">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
              <span className="flex items-center gap-1.5 text-white font-mono text-[11px]">
                <Terminal className="w-3.5 h-3.5 text-orange-500" /> API Gateway Bridge
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">HTTP 200</span>
            </div>
            <div className="space-y-1 text-[11px] font-mono text-slate-400">
              <div className="flex justify-between bg-slate-950 p-1.5 rounded">
                <span>Endpoint Sync</span>
                <span className="text-slate-300">Bi-Directional</span>
              </div>
              <div className="flex justify-between bg-slate-950 p-1.5 rounded">
                <span>Webhook Delivery</span>
                <span className="text-emerald-400">&lt; 80ms</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="corporate-container">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-slate-900 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-900 font-medium">Services</span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="orange" size="md" className="mb-3">
            Technical Capabilities
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Professional Technology Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Maan Together provides end-to-end software development, system modernization, and digital engineering tailored to modern business requirements.
          </p>
        </div>

        {/* 8 Detailed Service Cards */}
        <div className="space-y-10 sm:space-y-12">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border transition-all duration-200 shadow-2xs ${
                selectedServiceId === service.id
                  ? "border-orange-500 ring-2 ring-orange-500/20 shadow-md"
                  : "border-slate-200/90 hover:border-slate-300"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-orange-600">
                      <ServiceIcon name={service.iconName} className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-slate-700 font-medium leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Capabilities List */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-2.5">
                      Key Engineering Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          className="text-xs text-slate-700 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 items-center text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Deliverables:</span>
                    {service.deliverables.map((deliv, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md text-[11px] font-mono"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Visual & Action Column */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  {/* Relevant Visual Mockup */}
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                      <span>Architecture Preview</span>
                      <span className="text-emerald-600 font-semibold">&bull; Active Scope</span>
                    </div>
                    {renderServiceVisual(service.id)}
                  </div>

                  {/* Inquire Action Button */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                    <div className="text-xs text-slate-600">
                      Looking to implement <strong>{service.title}</strong> in your organization?
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-full justify-center"
                      onClick={() => handleInquire(service.title)}
                      iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Inquire About {service.title}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
