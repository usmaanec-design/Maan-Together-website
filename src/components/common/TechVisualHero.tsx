import React from "react";
import { 
  Database, 
  Layers, 
  Terminal, 
  ArrowUpRight,
  ShieldCheck,
  Server
} from "lucide-react";

export const TechVisualHero: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
      {/* Decorative background glow & grid boundary */}
      <div className="absolute -top-8 -left-8 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Corporate Interface Container */}
      <div className="relative rounded-2xl border border-slate-800/80 bg-[#0A0C10] shadow-2xl overflow-hidden group">
        {/* Mock Window Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#07080C] border-b border-slate-800 text-slate-400 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="ml-2 font-mono text-[11px] text-slate-300 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-orange-400" />
              maan-together // enterprise-runtime
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            SYSTEM: ONLINE
          </div>
        </div>

        {/* High-Tech Software Image Viewport */}
        <div className="relative h-64 sm:h-72 lg:h-80 w-full overflow-hidden bg-slate-950">
          <img
            src="/assets/hero-tech-dashboard.jpg"
            alt="Maan Together Software Engineering Dashboard"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/30"></div>

          {/* Floating Live Badge Over Image */}
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-white shadow-lg">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span>Live Analytics &amp; Workflow Node</span>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0C10]/85 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-emerald-400 shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>99.98% System Uptime</span>
          </div>
        </div>

        {/* Dashboard Bottom Telemetry Cards */}
        <div className="p-4 sm:p-5 bg-[#0A0C10] border-t border-slate-800/80 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-2xs">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Architecture</span>
                <Server className="w-3.5 h-3.5 text-orange-500" />
              </div>
              <div className="mt-1 text-sm font-bold text-white tracking-tight">
                Modular &amp; Scalable
              </div>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                React &bull; TypeScript &bull; Cloud
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shadow-2xs">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Data Pipelines</span>
                <Database className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="mt-1 text-sm font-bold text-white tracking-tight">
                Automated &amp; Clean
              </div>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                Scheduled &bull; Normalized
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span className="text-white font-medium">Maan Together</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Software Solutions</span>
            </div>
            <a
              href="#services"
              className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 font-medium text-xs group"
            >
              Explore Architecture
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating badge outside */}
      <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xl text-xs font-medium text-slate-800">
        <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <div className="text-slate-950 font-bold text-xs">Verified Solutions</div>
          <div className="text-slate-500 text-[11px]">Microsoft Store &bull; Web Systems</div>
        </div>
      </div>
    </div>
  );
};
