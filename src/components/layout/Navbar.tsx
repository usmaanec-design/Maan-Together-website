import React, { useState, useEffect } from "react";
import { NAV_ITEMS, SITE_CONFIG } from "../../config/siteConfig";
import { Button } from "../common/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs py-2.5"
          : "bg-white border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="corporate-container flex items-center justify-between">
        {/* Brand Logo with Official Image */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick("home", e)}
          className="flex items-center gap-3 group focus:outline-none"
        >
          {/* Official Company Logo Image */}
          <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 overflow-hidden group-hover:border-orange-500 group-hover:shadow-md transition-all">
            <img
              src={SITE_CONFIG.logoMarkUrl}
              alt="Maan Together Logo"
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-200"
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 group-hover:text-orange-600 transition-colors leading-tight">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
              IT &amp; Software Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(item.id, e)}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-orange-600 bg-orange-50/70 font-semibold"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onNavigate("contact")}
            iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(item.id, e)}
                  className={`px-4 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-orange-600 bg-orange-50 font-semibold"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-orange-600"></span>}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                onNavigate("contact");
                setMobileMenuOpen(false);
              }}
              iconRight={<ArrowUpRight className="w-4 h-4" />}
            >
              Get in Touch
            </Button>
            <p className="text-center text-[11px] text-slate-500 mt-1">
              Rawalpindi, Punjab, Pakistan • Sole Proprietorship
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
