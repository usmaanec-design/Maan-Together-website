import React, { useState } from "react";
import { PROJECTS_DATA } from "../data/projects";
import { Badge } from "../components/common/Badge";
import { Button } from "../components/common/Button";
import { 
  Lock, 
  ExternalLink, 
  Layers, 
  Search, 
  ShieldCheck, 
  ArrowUpRight 
} from "lucide-react";

interface ProjectsPageProps {
  onNavigate: (pageId: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Web Applications",
    "Desktop & Utilities",
    "Custom Systems",
    "GIS & Spatial",
    "Business Automation",
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesQuery =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologyType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

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
          <span className="text-slate-900 font-medium">Projects</span>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <Badge variant="orange" size="md" className="mb-3">
            Portfolio Showcase
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Engineered Projects &amp; Systems
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A portfolio of verified software products, custom business management systems, and specialized technical utilities. Client solutions are strictly labelled in accordance with business confidentiality standards.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#0A0C10] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 overflow-hidden"
            >
              <div>
                {/* Project Screenshot / Visual Header */}
                <div className="relative h-48 bg-slate-950 border-b border-slate-200/90 p-4 flex flex-col justify-between text-white overflow-hidden group">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30"></div>

                  <div className="flex items-center justify-between z-10">
                    <Badge
                      variant={project.isConfidential ? "dark" : "orange"}
                      size="sm"
                      className="text-[10px] backdrop-blur-md"
                    >
                      {project.category}
                    </Badge>

                    {/* Status Badge */}
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border backdrop-blur-md ${
                        project.isConfidential
                          ? "bg-slate-800/90 text-slate-300 border-slate-700"
                          : "bg-emerald-950/90 text-emerald-400 border-emerald-800/80"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Visual Interface Graphic Placeholder / Title */}
                  <div className="z-10 text-center py-2">
                    {!project.imageUrl && (
                      <div className="w-10 h-10 mx-auto rounded-lg bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 mb-1">
                        {project.isConfidential ? (
                          <Lock className="w-4 h-4 text-orange-400" />
                        ) : (
                          <Layers className="w-4 h-4 text-orange-400" />
                        )}
                      </div>
                    )}
                    <span className="text-[11px] font-mono text-slate-300 drop-shadow-sm">
                      {project.isConfidential
                        ? "Confidential Architecture Preview"
                        : "Verified System Screenshot"}
                    </span>
                  </div>

                  <div className="z-10 flex items-center justify-between text-[10px] text-slate-300 font-mono border-t border-slate-700/60 pt-1">
                    <span>Maan Together</span>
                    <span>Production Build</span>
                  </div>
                </div>

                {/* Content details */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <h3 className="text-lg font-bold text-slate-950">
                    {project.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Solution Type */}
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                      Technology / Solution Type
                    </span>
                    <span className="font-semibold text-slate-800">
                      {project.technologyType}
                    </span>
                  </div>

                  {/* Key Purpose */}
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold mb-0.5">
                      Key Purpose
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {project.keyPurpose}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap gap-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action bottom */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
                  {project.isConfidential
                    ? "Private Business Project"
                    : "Verified Project"}
                </span>

                {project.link ? (
                  <Button
                    variant="outline"
                    size="sm"
                    href={project.link}
                    iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    View Project
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onNavigate("contact")}
                    iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Inquire Details
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Notice */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Client Confidentiality Policy:</strong> In compliance with nondisclosure agreements and professional ethics, proprietary client systems are displayed under descriptive titles (<em>"Private Business Project"</em> or <em>"Confidential Client Solution"</em>) with sanitized architecture overviews to protect client confidentiality while verifying engineering competence.
          </p>
        </div>
      </div>
    </div>
  );
};
