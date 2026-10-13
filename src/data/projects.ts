import type { ProjectItem } from "../types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "converting-hub",
    name: "ConvertingHub Platform",
    category: "Desktop & Utilities",
    shortDescription:
      "A high-utility document and file conversion software application published on the Microsoft Store for practical format transformations.",
    technologyType: "Modern Web Stack / Windows Store Application",
    keyPurpose:
      "Empower users with simple, fast, and privacy-conscious digital conversion tools for essential office and media formats.",
    status: "Active / Published",
    isConfidential: false,
    tags: ["Utility", "File Conversion", "Desktop App", "Productivity", "Microsoft Store"],
    link: "https://apps.microsoft.com/detail/9PHBPD4FF03G?hl=en-us&gl=SA&ocid=pdpshare",
    imageUrl: "/assets/hero-tech-dashboard.jpg",
  },
  {
    id: "hissab-cashbook-system",
    name: "Hissab CashBook Application",
    category: "Web Applications",
    shortDescription:
      "A personal and small-business cashbook financial tracking application published on the Microsoft Store for record-keeping and ledger balance calculation.",
    technologyType: "React, TypeScript & Windows Desktop Application",
    keyPurpose:
      "Provide transparent, zero-clutter cashbook accounting with clear balance tracking and categorized expense summaries.",
    status: "Active / Published",
    isConfidential: false,
    tags: ["Finance", "Ledger", "Cash Management", "SME Tool", "Microsoft Store"],
    link: "https://apps.microsoft.com/detail/9NHC3V5425TL?hl=en&gl=SA&ocid=pdpshare",
    imageUrl: "/assets/cashbook-software-ui.jpg",
  },
  {
    id: "zahran-operations-system",
    name: "Zahran Operations & Workforce Suite",
    category: "Custom Systems",
    shortDescription:
      "A customized digital operational platform developed for workforce tracking, daily activity reporting, and vehicle monitoring.",
    technologyType: "Cloud Web Application & Management System",
    keyPurpose:
      "Streamline daily reporting workflows, track field workforce coordination, and centralize operational logs.",
    status: "Confidential Client Solution",
    isConfidential: true,
    tags: ["Operations", "Workforce Management", "Fleet Monitoring", "Reporting"],
    imageUrl: "/assets/automation-workflow-tech.jpg",
  },
  {
    id: "noor-e-quran-platform",
    name: "Noor-e-Quran Application",
    category: "Web Applications",
    shortDescription:
      "An offline-first digital Quran application featuring Tajweed coloring, clear Urdu translations, prayer calculations, and Qibla locator.",
    technologyType: "Multi-Platform Web & Offline Application",
    keyPurpose:
      "Deliver a seamless, dignified recitation and study experience accessible without requiring continuous internet connectivity.",
    status: "Active / Published",
    isConfidential: false,
    tags: ["Quran", "Tajweed", "Urdu Translation", "Offline First", "Qibla"],
  },
  {
    id: "gis-cadastral-mapping-tool",
    name: "Spatial Boundary & GIS Territory Management",
    category: "GIS & Spatial",
    shortDescription:
      "Custom GIS utility developed for geographic boundary verification, spatial data cleaning, and territory map visualization.",
    technologyType: "GIS & Spatial Web Application",
    keyPurpose:
      "Enable precise location-based analysis, spatial dataset standardization, and visual boundary inspection for business logistics.",
    status: "Private Business Project",
    isConfidential: true,
    tags: ["GIS", "Spatial Analysis", "Mapping", "GeoJSON", "Territories"],
  },
  {
    id: "automated-business-pipeline",
    name: "Automated Data Processing & Sync Pipeline",
    category: "Business Automation",
    shortDescription:
      "Scheduled data pipeline automating report compilation, multi-source record validation, and notification alerts.",
    technologyType: "Backend Automation & Scripting Service",
    keyPurpose:
      "Eliminate repetitive manual data entry between spreadsheets and central databases while preventing human data entry errors.",
    status: "Confidential Client Solution",
    isConfidential: true,
    tags: ["Automation", "ETL", "Data Pipelines", "Scheduled Tasks"],
    imageUrl: "/assets/automation-workflow-tech.jpg",
  },
];
