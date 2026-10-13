import React from "react";
import { Badge } from "../components/common/Badge";
import { Button } from "../components/common/Button";
import { 
  ArrowLeft, 
  Clock, 
  Code2, 
  Cpu, 
  Map, 
  Compass, 
  TrendingUp, 
  Layers 
} from "lucide-react";

interface InsightsPageProps {
  onNavigate: (pageId: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  const categories = [
    {
      title: "Software Development",
      icon: <Code2 className="w-4 h-4 text-orange-600" />,
      description: "Architecture patterns, type-safety, and modern web application development best practices.",
    },
    {
      title: "Business Automation",
      icon: <Cpu className="w-4 h-4 text-orange-600" />,
      description: "Practical strategies for automating manual reports, notifications, and repetitive workflows.",
    },
    {
      title: "GIS & Mapping",
      icon: <Map className="w-4 h-4 text-orange-600" />,
      description: "Working with spatial coordinates, GeoJSON boundaries, and digital location intelligence.",
    },
    {
      title: "IT Solutions",
      icon: <Compass className="w-4 h-4 text-orange-600" />,
      description: "Evaluating database models, cloud services, and cost-effective digital infrastructure.",
    },
    {
      title: "Digital Transformation",
      icon: <TrendingUp className="w-4 h-4 text-orange-600" />,
      description: "Migrating from spreadsheets and manual logs to synchronized business management systems.",
    },
    {
      title: "Product Updates",
      icon: <Layers className="w-4 h-4 text-orange-600" />,
      description: "Technical release notes and feature improvements across Maan Together software tools.",
    },
  ];

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
          <span className="text-slate-900 font-medium">Insights</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <Badge variant="orange" size="md" className="mb-3">
            Knowledge &amp; Technical Commentary
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
            Technology Insights &amp; Articles
          </h1>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Practical articles on software development, automation, and operational technology systems.
          </p>
        </div>

        {/* Confirmed Placeholder State */}
        <div className="p-10 sm:p-14 rounded-2xl bg-slate-50 border border-slate-200/90 text-center space-y-5 mb-14">
          <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 flex items-center justify-center mx-auto">
            <Clock className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-950">
              Insights coming soon.
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              We are preparing technical write-ups and case studies detailing real-world software architecture, workflow automation routines, and data management solutions. Check back shortly for initial publications.
            </p>
          </div>

          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate("contact")}
            >
              Request a Specific Technical Topic
            </Button>
          </div>
        </div>

        {/* Planned Editorial Categories */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
            Upcoming Topic Categories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-950">
                    {cat.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
