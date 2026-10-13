import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "../config/siteConfig";
import { SERVICES_DATA } from "../data/services";
import type { ContactInquiry } from "../types";
import { Badge } from "../components/common/Badge";
import { Button } from "../components/common/Button";
import { 
  Building2, 
  MapPin, 
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  ShieldCheck,
  MessageSquare,
  Phone,
  ExternalLink
} from "lucide-react";

interface ContactPageProps {
  onNavigate: (pageId: string) => void;
  preselectedService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: preselectedService || "Software Development",
    message: "",
    honeypot: "", // Anti-spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<ContactInquiry | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (formData.phone && formData.phone.length < 7) {
      errs.phone = "Please enter a valid contact phone number or leave blank.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Please describe your project requirements in at least 15 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Spam Honeypot validation
    if (formData.honeypot) {
      console.warn("Spam submission intercepted.");
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate inquiry ticket
      const ticketId = `MT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const inquiry: ContactInquiry = {
        id: ticketId,
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || "Not Specified",
        phone: formData.phone.trim() || "Not Specified",
        service: formData.service,
        message: formData.message.trim(),
        timestamp: new Date().toISOString(),
      };

      // Real storage simulation / persistence in local storage
      const existingInquiries = JSON.parse(
        localStorage.getItem("maan_inquiries") || "[]"
      );
      existingInquiries.push(inquiry);
      localStorage.setItem("maan_inquiries", JSON.stringify(existingInquiries));

      // Network delay simulation
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSubmittedInquiry(inquiry);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "Software Development",
        message: "",
        honeypot: "",
      });
      setErrors({});
    } catch {
      setErrorMessage(
        "An unexpected error occurred while transmitting your inquiry. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadReceipt = () => {
    if (!submittedInquiry) return;
    const blob = new Blob([JSON.stringify(submittedInquiry, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Inquiry-${submittedInquiry.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
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
          <span className="text-slate-900 font-medium">Contact</span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="orange" size="md" className="mb-3">
            Inquiries &amp; Consultations
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Let's Build Something Useful
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a software idea, business process that needs improvement, or a technology requirement? Contact Maan Together to discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Official Business Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-white border border-slate-700 overflow-hidden shrink-0 shadow-md">
                  <img
                    src={SITE_CONFIG.ownerPhotoUrl}
                    alt={SITE_CONFIG.ownerName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-orange-400 uppercase tracking-widest block mb-1">
                    Official Entity Information
                  </span>
                  <h2 className="text-2xl font-bold text-white">
                    {SITE_CONFIG.name}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Sole Proprietorship &bull; Owner: {SITE_CONFIG.ownerName}
                  </p>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 text-sm border-t border-slate-800 pt-5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-orange-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Business Entity</span>
                    <span className="font-semibold text-white">{SITE_CONFIG.name}</span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {SITE_CONFIG.businessType} &bull; PSIC / ISIC: {SITE_CONFIG.activityCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-orange-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Location</span>
                    <span className="font-semibold text-white">{SITE_CONFIG.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-orange-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Official Direct Email</span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-mono text-xs text-orange-300 hover:underline"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp & Call Channels */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block">WhatsApp &amp; Direct Phone</span>
                    <div>
                      <a
                        href={SITE_CONFIG.phoneKSALink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-emerald-400 hover:underline flex items-center gap-1.5"
                      >
                        <Phone className="w-3 h-3 text-emerald-400" />
                        <span>{SITE_CONFIG.phoneKSA} (Call &amp; WhatsApp)</span>
                      </a>
                    </div>
                    <div>
                      <a
                        href={SITE_CONFIG.phonePKLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-emerald-400 hover:underline flex items-center gap-1.5"
                      >
                        <MessageSquare className="w-3 h-3 text-emerald-400" />
                        <span>{SITE_CONFIG.phonePK} (WhatsApp Only)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Founder Portfolio Link */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-orange-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Founder Portfolio</span>
                    <a
                      href={SITE_CONFIG.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-orange-300 hover:underline flex items-center gap-1"
                    >
                      <span>usman-professional-portfolio.netlify.app</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick direct WhatsApp CTA bar */}
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.phoneKSALink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 space-y-1 font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Entity Activity 620900</span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1">
                  Custom software, web engineering, automation &amp; data management.
                </p>
              </div>
            </div>

            {/* Privacy notice */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs text-slate-600">
              <span className="font-semibold text-slate-900 block mb-1">
                Data Privacy Guarantee
              </span>
              All project specifications, business metrics, and contact details transmitted via this portal are protected under strict commercial confidentiality.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              {submittedInquiry ? (
                /* Success State */
                <div className="space-y-6 py-6 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-950">
                      Inquiry Transmitted Successfully
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Maan Together. Your inquiry has been logged with reference ID:
                    </p>
                    <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 font-mono font-bold text-sm text-slate-900">
                      {submittedInquiry.id}
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500">Contact Person:</span>
                      <span className="font-medium text-slate-900">{submittedInquiry.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500">Email:</span>
                      <span className="font-mono text-slate-900">{submittedInquiry.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500">Selected Service:</span>
                      <span className="font-medium text-orange-600">{submittedInquiry.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Logged Time:</span>
                      <span className="font-mono text-slate-700">
                        {new Date(submittedInquiry.timestamp).toLocaleTimeString()} PKT
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    We typically review technical requirements and respond within 24 to 48 business hours.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownloadReceipt}
                      icon={<Download className="w-3.5 h-3.5" />}
                    >
                      Download Inquiry Record
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setSubmittedInquiry(null)}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Anti-spam honeypot (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) =>
                        setFormData({ ...formData, honeypot: e.target.value })
                      }
                    />
                  </div>

                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-900 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe / Business Owner"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                          errors.name ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-500 mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-900 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                          errors.email ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-500 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company and Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-900 mb-1.5">
                        Company / Organization <span className="text-slate-400 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Organization or Trading Name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-900 mb-1.5">
                        Phone Number <span className="text-slate-400 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+966 / +92 / International"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                          errors.phone ? "border-rose-400" : "border-slate-300"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-500 mt-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service selection dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-900 mb-1.5">
                      Service / Solution Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="Hissab CashBook (Microsoft Store)">Hissab CashBook (Microsoft Store)</option>
                      <option value="ConvertingHub Platform (Microsoft Store)">ConvertingHub Platform (Microsoft Store)</option>
                      <option value="Noor-e-Quran Application">Noor-e-Quran Application</option>
                      <option value="Zahran Business Solutions">Zahran Business Solutions</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-900 mb-1.5">
                      Project Requirements or Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please outline your requirements, existing workflows, deadlines, or objectives..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.message ? "border-rose-400 bg-rose-50/20" : "border-slate-300"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <span className="text-[11px] text-rose-500 mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                      iconRight={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Transmitting Inquiry..." : "Send Inquiry"}
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Your transmission is protected. No spam or commercial marketing will be sent.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
