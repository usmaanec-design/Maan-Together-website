import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";
import { Badge } from "../components/common/Badge";
import { ArrowLeft } from "lucide-react";

interface PrivacyPolicyPageProps {
  onNavigate: (pageId: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
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
          <span className="text-slate-900 font-medium">Privacy Policy</span>
        </div>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <Badge variant="orange" size="md" className="mb-3">
            Legal &amp; Compliance
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last Updated: January 2026 &bull; Effective for {SITE_CONFIG.name}
          </p>
        </div>

        {/* Policy Body */}
        <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              1. Overview and Scope
            </h2>
            <p>
              This Privacy Policy explains how <strong>{SITE_CONFIG.name}</strong> ("we," "our," or "the Business"), an independent sole proprietorship operated by {SITE_CONFIG.ownerName} based in {SITE_CONFIG.location}, collects, uses, maintains, and discloses information collected from visitors of our website ({SITE_CONFIG.domain}) and clients utilizing our information technology and software services.
            </p>
            <p>
              We conduct our operations within business activity classification 620900 (Other Information Technology and Computer Service Activities). We are committed to transparency, data minimization, and commercial confidentiality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              2. Information We Collect
            </h2>
            <p>We only collect information that is voluntarily provided or strictly necessary for technical operation:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>
                <strong>Inquiry &amp; Communication Data:</strong> Name, professional email address, company name, phone number, and project details submitted via our contact forms or email correspondence.
              </li>
              <li>
                <strong>Technical Access Logs:</strong> Standard web server logs such as IP addresses, browser user-agents, referring pages, and access timestamps to ensure infrastructure security and prevent malicious abuse.
              </li>
              <li>
                <strong>Client Project Data:</strong> Data schemas, operational specifications, and test data provided by contracting clients under explicit service agreements.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              3. How We Use Collected Information
            </h2>
            <p>We process information exclusively for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>Responding directly to inquiries, proposals, and consultation requests.</li>
              <li>Designing, engineering, and testing requested custom software and web applications.</li>
              <li>Fulfilling legal, tax, and commercial verification compliance obligations.</li>
              <li>Diagnosing technical faults, server issues, and maintaining system availability.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              4. Non-Disclosure &amp; Zero Data Selling
            </h2>
            <p>
              <strong>{SITE_CONFIG.name} does not sell, trade, rent, or lease personal or corporate information to third-party marketing brokers or advertisers.</strong>
            </p>
            <p>
              Information is only disclosed when legally compelled by competent judicial authorities, or to trusted infrastructure providers (such as hosting platforms or database services) solely for executing the authorized technical services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              5. Intellectual Property &amp; Client Confidentiality
            </h2>
            <p>
              All proprietary business algorithms, commercial records, and custom workflows shared with {SITE_CONFIG.name} during consultancy or development engagements remain the confidential property of the client. Where requested, standard mutual Non-Disclosure Agreements (NDAs) govern project engagements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              6. Data Security Measures
            </h2>
            <p>
              We enforce administrative and technical safeguards including transport encryption (HTTPS/TLS), environment variable credential separation, and restricted administrative access to safeguard data against unauthorized alteration or loss.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              7. Contact Information
            </h2>
            <p>
              If you have inquiries regarding this Privacy Policy or wish to request data verification or deletion, please direct communications to:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono space-y-1">
              <div><strong>Business:</strong> {SITE_CONFIG.name}</div>
              <div><strong>Principal:</strong> {SITE_CONFIG.ownerName} ({SITE_CONFIG.ownerTitle})</div>
              <div><strong>Location:</strong> {SITE_CONFIG.location}</div>
              <div><strong>Email:</strong> {SITE_CONFIG.email}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
