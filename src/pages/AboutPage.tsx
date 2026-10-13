import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";
import { Badge } from "../components/common/Badge";
import { ApproachSection } from "../components/home/ApproachSection";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { FounderSection } from "../components/common/FounderSection";
import { Button } from "../components/common/Button";
import { ShieldCheck, ArrowRight } from "lucide-react";

interface AboutPageProps {
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-12 sm:py-16">
      <div className="corporate-container">
        {/* Page Breadcrumb / Eyebrow */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-slate-900 transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-900 font-medium">About</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="orange" size="md" className="mb-3">
            Company Profile & Governance
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            About Maan Together
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            An independent Pakistan-based technology and software development practice committed to building practical, reliable digital systems for businesses and organizations worldwide.
          </p>
        </div>

        {/* Official Profile Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-6 mb-16">
          <div className="border-b border-slate-100 pb-4 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1.5 overflow-hidden">
                <img
                  src={SITE_CONFIG.logoMarkUrl}
                  alt="Maan Together Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  {SITE_CONFIG.name}
                </h2>
                <span className="text-xs text-slate-500">
                  Official Registered Business Identity
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>ISIC / PSIC: 620900</span>
            </div>
          </div>

          {/* Official Paragraphs */}
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base leading-relaxed">
            <p>
              Maan Together is a Pakistan-based information technology and software services business specializing in computer programming, software development, IT consultancy, web applications, business management systems, automation solutions, data management, and other related digital technology services.
            </p>
            <p>
              The business develops customized and practical technology solutions for individuals, businesses, and organizations to improve their digital operations, reporting, data management, workflow efficiency, and business processes.
            </p>
            <p>
              Maan Together operates as an independent sole proprietorship managed by Muhammad Usman. The business is based in Rawalpindi, Punjab, Pakistan, and operates within the Information Technology and Computer Services sector.
            </p>
            <p>
              The business focuses on providing reliable, cost-effective, and user-friendly software and digital solutions tailored to the requirements of its clients.
            </p>
          </div>

          {/* Official Entity Summary Table */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/70">
              <span className="text-slate-400 block font-mono">Business Name</span>
              <span className="font-semibold text-slate-900 mt-1 block">
                {SITE_CONFIG.name}
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/70">
              <span className="text-slate-400 block font-mono">Structure</span>
              <span className="font-semibold text-slate-900 mt-1 block">
                {SITE_CONFIG.businessType}
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/70">
              <span className="text-slate-400 block font-mono">Principal / Owner</span>
              <div className="flex items-center gap-2 mt-1">
                <img
                  src={SITE_CONFIG.ownerPhotoUrl}
                  alt={SITE_CONFIG.ownerName}
                  className="w-5 h-5 rounded-full object-cover object-top border border-slate-300"
                />
                <span className="font-semibold text-slate-900 block">
                  {SITE_CONFIG.ownerName}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/70">
              <span className="text-slate-400 block font-mono">Location</span>
              <span className="font-semibold text-slate-900 mt-1 block">
                {SITE_CONFIG.location}
              </span>
            </div>
          </div>
        </div>

        {/* Business Sector & Activity Scope */}
        <div className="mb-16 p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="max-w-3xl">
            <Badge variant="dark" size="sm" className="mb-3 border-slate-700 text-orange-400">
              Commercial Registration Context
            </Badge>
            <h2 className="text-2xl font-bold text-white mb-2">
              Primary Business Activity & Scope
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Formally categorized under Activity Code <strong>620900</strong>:
              <br />
              <span className="font-mono text-xs text-orange-300 block mt-1">
                "{SITE_CONFIG.activityDescription}"
              </span>
            </p>
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              This scope enables Maan Together to contract, build, and deliver customized computer programming, enterprise data management, web platforms, and technology consulting for domestic and international clients, marketplaces, and corporate partners.
            </p>
          </div>
        </div>
      </div>

      {/* Our 4-Stage Approach */}
      <ApproachSection />

      {/* Meet the Founder */}
      <FounderSection onNavigate={onNavigate} />

      {/* Why Maan Together */}
      <WhyChooseUs />

      {/* Contact CTA */}
      <div className="corporate-container pt-12 text-center">
        <Button
          variant="primary"
          size="lg"
          onClick={() => onNavigate("contact")}
          iconRight={<ArrowRight className="w-4 h-4" />}
        >
          Discuss Your Business Requirements
        </Button>
      </div>
    </div>
  );
};
