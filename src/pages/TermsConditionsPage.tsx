import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";
import { Badge } from "../components/common/Badge";
import { ArrowLeft } from "lucide-react";

interface TermsConditionsPageProps {
  onNavigate: (pageId: string) => void;
}

export const TermsConditionsPage: React.FC<TermsConditionsPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="w-full py-12 sm:py-16">
      <div className="corporate-container max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-slate-900 transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
          <span>/</span>
          <span className="text-slate-900 font-medium">Terms &amp; Conditions</span>
        </div>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <Badge variant="orange" size="md" className="mb-3">
            Legal &amp; Governance
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Effective Date: January 2026 &bull; Commercial Terms for {SITE_CONFIG.name}
          </p>
        </div>

        {/* Terms Body */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Engagement &amp; Services
            </h2>
            <p>
              These Terms &amp; Conditions govern all information technology, software development, web applications, automation, data engineering, and consulting services provided by <strong>{SITE_CONFIG.name}</strong>, a sole proprietorship registered in Rawalpindi, Punjab, Pakistan, managed by {SITE_CONFIG.ownerName}.
            </p>
            <p>
              Each client engagement is governed by written project scopes, statements of work (SOW), or written agreements detailing deliverables, acceptance criteria, milestones, and timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Intellectual Property Rights
            </h2>
            <p>
              Upon receipt of full payment for bespoke custom development services, all custom source code, documentation, and specific deliverables engineered uniquely for the client are assigned to the client, unless explicitly agreed otherwise.
            </p>
            <p>
              {SITE_CONFIG.name} retains ownership of pre-existing software utilities, proprietary boilerplate libraries, internal developer scripts, and published standalone products (such as Hissab CashBook, ConvertingHub, and Noor-e-Quran).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. Client Responsibilities
            </h2>
            <p>
              Clients agree to provide accurate technical requirements, necessary third-party API credentials, sample data schemas, and prompt feedback during review milestones to facilitate timely delivery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Warranties &amp; Technical Support
            </h2>
            <p>
              Software is engineered with professional care and verified against mutually agreed specifications. Deliverables include a defined acceptance review period following handoff. Ongoing server administration, cloud hosting fees, or feature expansions beyond agreed scopes are handled under separate support or maintenance agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, {SITE_CONFIG.name} shall not be liable for indirect, incidental, or consequential damages resulting from third-party cloud service outages, telecommunication disruptions, or improper client-side modifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of Punjab, Pakistan. Any commercial dispute shall be resolved through good-faith commercial negotiation, failing which jurisdiction lies with the competent courts of Rawalpindi, Pakistan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              7. Inquiries &amp; Legal Notices
            </h2>
            <p>
              Formal contractual or legal communications should be directed to {SITE_CONFIG.email} or by post to our official business registration address in {SITE_CONFIG.location}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
