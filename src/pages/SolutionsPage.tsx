import React from "react";
import { PRODUCTS_DATA } from "../data/products";
import { Badge } from "../components/common/Badge";
import { Button } from "../components/common/Button";
import { 
  Check, 
  ExternalLink, 
  Layers, 
  Laptop, 
  BookOpen, 
  Wallet, 
  ArrowRight 
} from "lucide-react";

interface SolutionsPageProps {
  onNavigate: (pageId: string) => void;
  onInquireProduct?: (productName: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onNavigate,
  onInquireProduct,
}) => {
  const getProductIcon = (id: string) => {
    switch (id) {
      case "hissab-cashbook":
        return <Wallet className="w-6 h-6 text-orange-600" />;
      case "convertinghub":
        return <Laptop className="w-6 h-6 text-orange-600" />;
      case "noor-e-quran":
        return <BookOpen className="w-6 h-6 text-orange-600" />;
      case "zahran-business-solutions":
        return <Layers className="w-6 h-6 text-orange-600" />;
      default:
        return <Layers className="w-6 h-6 text-orange-600" />;
    }
  };

  const handleInquiry = (productName: string) => {
    if (onInquireProduct) {
      onInquireProduct(productName);
    }
    onNavigate("contact");
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
          <span className="text-slate-900 font-medium">Solutions</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="orange" size="md" className="mb-3">
            Portfolio &amp; Products
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Our Technology Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Concrete applications, utilities, and customized operational systems designed and built by Maan Together.
          </p>
        </div>

        {/* 4 Primary Solutions Showcase */}
        <div className="space-y-12">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center">
                      {getProductIcon(product.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="orange" size="sm">
                          {product.category}
                        </Badge>
                        <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/60">
                          Platform: {product.platform}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-950 mt-1">
                        {product.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-orange-600">
                    {product.tagline}
                  </p>

                  <p className="text-base text-slate-700 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Confirmed Features */}
                  <div className="pt-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
                      Confirmed Features &amp; Specifications
                    </h3>
                    <div className="space-y-2">
                      {product.keyFeatures.map((feat, i) => (
                        <div
                          key={i}
                          className="text-sm text-slate-700 flex items-start gap-2.5"
                        >
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-semibold text-slate-500">
                      Technology Stack:
                    </span>
                    {product.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action & Status Box */}
                <div className="lg:col-span-4 p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4">
                  {product.imageUrl && (
                    <div className="relative h-40 rounded-lg overflow-hidden border border-slate-200 shadow-inner bg-slate-950 group">
                      <img
                        src={product.imageUrl}
                        alt={`${product.name} Interface Preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white bg-black/70 px-2 py-0.5 rounded">
                        Interface Preview
                      </span>
                    </div>
                  )}

                  <div className="border-b border-slate-200/80 pb-3">
                    <span className="text-xs text-slate-500 block">Project Status</span>
                    <span className="text-sm font-bold text-slate-900 mt-0.5 block flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {product.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 leading-relaxed">
                    {product.id === "convertinghub" ? (
                      <span>
                        Official Windows desktop utility distributed via the Microsoft Store catalog for document and file conversions.
                      </span>
                    ) : product.id === "zahran-business-solutions" ? (
                      <span>
                        Private enterprise management suite customized specifically for operational workforce and fleet logistics reporting.
                      </span>
                    ) : product.id === "hissab-cashbook" ? (
                      <span>
                        Designed for direct financial transparency, eliminating spreadsheets with structured cashbook accounting.
                      </span>
                    ) : (
                      <span>
                        Full offline accessibility with Tajweed guidance, Urdu reading, and verified Qibla calculations.
                      </span>
                    )}
                  </div>

                  <div className="pt-2 space-y-2">
                    {product.link?.startsWith("http") ? (
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full justify-center"
                        href={product.link}
                        iconRight={<ExternalLink className="w-4 h-4" />}
                      >
                        {product.actionLabel || "View Project"}
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full justify-center"
                        onClick={() => handleInquiry(product.name)}
                        iconRight={<ArrowRight className="w-4 h-4" />}
                      >
                        Inquire About {product.name}
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-center"
                      onClick={() => onNavigate("contact")}
                    >
                      Request Technical Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
