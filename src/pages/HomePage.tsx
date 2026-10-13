import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";
import { Button } from "../components/common/Button";
import { TechVisualHero } from "../components/common/TechVisualHero";
import { TrustBar } from "../components/home/TrustBar";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { SoftwareShowcaseVisuals } from "../components/home/SoftwareShowcaseVisuals";
import { ProductsPreview } from "../components/home/ProductsPreview";
import { ApproachSection } from "../components/home/ApproachSection";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { TechStackSection } from "../components/home/TechStackSection";
import { FounderSection } from "../components/common/FounderSection";
import { ArrowRight, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
}) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 bg-white overflow-hidden bg-tech-grid">
        <div className="corporate-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Trust Tag with Official Logo Icon */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-800 shadow-2xs">
                <img
                  src={SITE_CONFIG.logoMarkUrl}
                  alt="Maan Together"
                  className="w-5 h-5 rounded-full object-contain"
                />
                <span>{SITE_CONFIG.name} &bull; {SITE_CONFIG.location}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                Technology Solutions That Simplify Business
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Maan Together provides software development, IT consultancy, automation, web applications, data management, and customized digital solutions for modern businesses and organizations.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onNavigate("services")}
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Services
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => onNavigate("contact")}
                  iconRight={<Mail className="w-4 h-4" />}
                >
                  Contact Us
                </Button>
              </div>

              {/* Micro Trust Factors */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sole Proprietorship</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>ISIC Activity: 620900</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>Rawalpindi, Punjab, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Right Technology Visual Column */}
            <div className="lg:col-span-5 flex justify-center">
              <TechVisualHero />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Company Introduction immediately below hero */}
      <TrustBar />

      {/* Core Services Overview */}
      <ServicesPreview
        onNavigate={onNavigate}
        onSelectService={onSelectService}
      />

      {/* NEW Interactive Software Visual Showcase Gallery */}
      <SoftwareShowcaseVisuals onNavigate={onNavigate} />

      {/* Featured Solutions / Products */}
      <ProductsPreview onNavigate={onNavigate} />

      {/* 4-Stage Methodology */}
      <ApproachSection />

      {/* Value Pillars */}
      <WhyChooseUs />

      {/* Tech Stack */}
      <TechStackSection />

      {/* Meet The Founder */}
      <FounderSection onNavigate={onNavigate} />

      {/* Pre-Footer Action Banner */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="corporate-container text-center max-w-3xl mx-auto space-y-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl bg-white p-3 shadow-xl border border-slate-700/60 flex items-center justify-center">
            <img
              src={SITE_CONFIG.logoMarkUrl}
              alt="Maan Together"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Let's Build Something Useful
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Have a software idea, business process that needs improvement, or a technology requirement? Contact Maan Together to discuss your project.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate("contact")}
              iconRight={<ArrowUpRight className="w-4 h-4" />}
            >
              Get in Touch with Maan Together
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-slate-700 hover:border-slate-500 hover:bg-slate-800"
              onClick={() => onNavigate("projects")}
            >
              View Verified Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
