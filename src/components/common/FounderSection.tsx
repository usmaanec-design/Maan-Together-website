import React from "react";
import { SITE_CONFIG } from "../../config/siteConfig";
import { ShieldCheck, Mail, MapPin, Briefcase, ExternalLink, MessageSquare } from "lucide-react";
import { Badge } from "./Badge";

interface FounderSectionProps {
  onNavigate?: (pageId: string) => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-200/90">
      <div className="corporate-container">
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 shadow-2xs">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Founder Avatar Monogram & Badge */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border-2 border-slate-200 shadow-md relative overflow-hidden group">
                <img
                  src={SITE_CONFIG.ownerPhotoUrl}
                  alt={SITE_CONFIG.ownerName}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mt-3.5 flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Ownership</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <Badge variant="orange" size="sm" className="mb-2">
                  Meet the Founder
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-950">
                  {SITE_CONFIG.ownerName}
                </h3>
                <p className="text-sm font-semibold text-orange-600 mt-0.5">
                  {SITE_CONFIG.ownerTitle} &bull; {SITE_CONFIG.name}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Muhammad Usman is an IT professional focused on software development, business applications, digital solutions, automation, data management, and technology-driven operational improvement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200 text-xs text-slate-600 font-mono">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Business Type: {SITE_CONFIG.businessType}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Based in {SITE_CONFIG.location}</span>
                </div>
              </div>

              {/* Direct verified links */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold">
                <a
                  href={SITE_CONFIG.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-800 hover:text-orange-600 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-orange-600" />
                  <span>Personal Portfolio Website</span>
                </a>

                <a
                  href={SITE_CONFIG.phoneKSALink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-800 hover:text-emerald-600 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp: {SITE_CONFIG.phoneKSA}</span>
                </a>

                {onNavigate && (
                  <button
                    onClick={() => onNavigate("contact")}
                    className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Inquiries</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
