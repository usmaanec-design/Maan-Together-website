import React from "react";
import { TECHNOLOGIES_DATA } from "../../data/technologies";
import { SectionHeading } from "../common/SectionHeading";

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#0A0C10] text-slate-100 border-t border-slate-800">
      <div className="corporate-container">
        <SectionHeading
          dark
          eyebrow="Core Competencies"
          title="Technologies We Work With"
          subtitle="A focused, modern technology toolkit selected for stability, developer ergonomics, security, and long-term project viability."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNOLOGIES_DATA.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white font-mono">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-orange-400 font-mono bg-orange-950/40 px-2 py-0.5 rounded border border-orange-900/40">
                          Production Ready
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {item.description}
                      </p>
                      <div className="mt-2 text-[11px] text-slate-400 font-mono">
                        Application: <span className="text-slate-300">{item.primaryUse}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 text-[11px] text-slate-400 text-center font-mono">
                Applied strictly according to project specifications
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
