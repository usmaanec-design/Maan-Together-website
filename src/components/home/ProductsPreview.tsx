import React from "react";
import { PRODUCTS_DATA } from "../../data/products";
import { SectionHeading } from "../common/SectionHeading";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { ArrowUpRight, Check } from "lucide-react";

interface ProductsPreviewProps {
  onNavigate: (pageId: string) => void;
}

export const ProductsPreview: React.FC<ProductsPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/90">
      <div className="corporate-container">
        <SectionHeading
          eyebrow="Proprietary & Customized Solutions"
          title="Our Technology Solutions"
          subtitle="Real-world software tools and business applications developed by Maan Together to address concrete financial, operational, and digital challenges."
        />

        {/* 4 Products Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div>
                {product.imageUrl && (
                  <div className="relative h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 overflow-hidden bg-slate-950 group">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-white border border-slate-700/80">
                        {product.platform}
                      </span>
                    </div>
                  </div>
                )}

                {/* Header with category and status */}
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <Badge variant="orange" size="sm">
                    {product.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/70">
                    {product.platform}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {product.name}
                </h3>
                <p className="text-xs font-semibold text-orange-600 mt-0.5">
                  {product.tagline}
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Confirmed Key Features List */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Core Capabilities
                  </div>
                  {product.keyFeatures.slice(0, 3).map((feat, i) => (
                    <div
                      key={i}
                      className="text-xs text-slate-700 flex items-start gap-2"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {product.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  {product.status}
                </span>

                {product.link?.startsWith("http") ? (
                  <Button
                    variant="outline"
                    size="sm"
                    href={product.link}
                    iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    {product.actionLabel || "View Project"}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate("solutions")}
                    iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    View Details
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Solutions Link */}
        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            size="md"
            onClick={() => onNavigate("solutions")}
          >
            Explore Full Solutions & Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};
