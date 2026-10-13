export interface BusinessConfig {
  name: string;
  tagline: string;
  businessType: string;
  ownerName: string;
  ownerTitle: string;
  location: string;
  city: string;
  province: string;
  country: string;
  sector: string;
  activityCode: string;
  activityDescription: string;
  email: string;
  phoneKSA: string;
  phoneKSALink: string;
  phonePK: string;
  phonePKLink: string;
  portfolioUrl: string;
  logoUrl: string;
  logoMarkUrl: string;
  ownerPhotoUrl: string;
  domain: string;
  copyrightYear: number;
}

export const SITE_CONFIG: BusinessConfig = {
  name: "Maan Together",
  tagline: "Technology Solutions That Simplify Business",
  businessType: "Sole Proprietorship",
  ownerName: "Muhammad Usman",
  ownerTitle: "Founder & IT Specialist",
  location: "Rawalpindi, Punjab, Pakistan",
  city: "Rawalpindi",
  province: "Punjab",
  country: "Pakistan",
  sector: "Information Technology and Computer Services",
  activityCode: "620900",
  activityDescription:
    "Information and Communication / Computer Programming, Consultancy and Related Activities / Other Information Technology and Computer Service Activities",
  email: "usmaan.ec@gmail.com",
  phoneKSA: "+966 50 376 3410",
  phoneKSALink: "https://wa.me/966503763410",
  phonePK: "+92 318 1970212",
  phonePKLink: "https://wa.me/923181970212",
  portfolioUrl: "https://usman-professional-portfolio.netlify.app/",
  logoUrl: "/assets/maan-together-logo-cropped.png",
  logoMarkUrl: "/assets/maan-together-mark.png",
  ownerPhotoUrl: "/MU.png",
  domain: "https://maantogether.com",
  copyrightYear: 2026,
};

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "solutions", label: "Solutions", href: "#solutions" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" },
];
