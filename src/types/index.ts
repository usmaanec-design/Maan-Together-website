export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  capabilities: string[];
  deliverables: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  keyFeatures: string[];
  technologies: string[];
  status: string;
  platform: string;
  link?: string;
  actionLabel?: string;
  imageUrl?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: "Web Applications" | "Desktop & Utilities" | "Business Automation" | "GIS & Spatial" | "Custom Systems";
  shortDescription: string;
  technologyType: string;
  keyPurpose: string;
  status: "Active / Published" | "In Production" | "Confidential Client Solution" | "Private Business Project";
  isConfidential?: boolean;
  tags: string[];
  link?: string;
  imageUrl?: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
  timestamp: string;
}
