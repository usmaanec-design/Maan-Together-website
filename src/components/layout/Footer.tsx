import React from "react";
import { SITE_CONFIG, NAV_ITEMS } from "../../config/siteConfig";
import { MapPin, Building2, Shield, ArrowUpRight, Code2, Mail, MessageSquare, ExternalLink } from "lucide-react";

interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0C10] text-slate-300 border-t border-slate-800">
      {/* Top Footer Section */}
      <div className="corporate-container py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1 & 2: Brand & Core Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-700 flex items-center justify-center p-1 overflow-hidden shadow-md">
                <img
                  src={SITE_CONFIG.logoMarkUrl}
                  alt="Maan Together Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                {SITE_CONFIG.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Technology solutions for modern business. Developing reliable, practical, and customized software systems for businesses, organizations, and digital operations.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Classification: ISIC / PSIC Code {SITE_CONFIG.activityCode}</span>
              </div>
              <div className="text-slate-400 pl-3.5">
                Information &amp; Computer Service Activities
              </div>
            </div>

            {/* Direct verified links */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs">
              <a
                href={SITE_CONFIG.phoneKSALink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {SITE_CONFIG.phoneKSA}</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNav(item.id, e)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-orange-500 transition-colors"></span>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#insights"
                  onClick={(e) => handleNav("insights", e)}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-orange-500 transition-colors"></span>
                  Insights (Preview)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Governance */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#privacy-policy"
                  onClick={(e) => handleNav("privacy-policy", e)}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms-conditions"
                  onClick={(e) => handleNav("terms-conditions", e)}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <Code2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400" />
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="pt-2 text-xs text-slate-500 leading-normal">
                Structured for international client compliance, vendor onboarding, and business verification.
              </li>
            </ul>
          </div>

          {/* Column 5: Business Information */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Business Information
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">
                    {SITE_CONFIG.name}
                  </span>
                  <span>{SITE_CONFIG.businessType}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span>{SITE_CONFIG.location}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 space-y-1">
                <div className="text-[11px] text-slate-400">
                  Principal: <span className="text-white">{SITE_CONFIG.ownerName}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Activity Code: <span className="text-white font-mono">{SITE_CONFIG.activityCode}</span>
                </div>
                <div className="pt-1">
                  <a
                    href={SITE_CONFIG.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-orange-400 hover:underline flex items-center gap-1"
                  >
                    <span>Portfolio Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNav("contact", e)}
                className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-medium pt-1"
              >
                Official Inquiry Portal
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-[#07080c] py-6">
        <div className="corporate-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Official Technology Business Website
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">
              Rawalpindi, Punjab, Pakistan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
