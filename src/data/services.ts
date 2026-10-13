import type { ServiceItem } from "../types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "software-development",
    title: "Software Development",
    shortDescription:
      "Custom web applications, business software, management systems, and digital tools designed around specific operational requirements.",
    detailedDescription:
      "We design and build bespoke software solutions from the ground up to solve concrete operational bottlenecks. Our development process prioritizes maintainability, speed, and intuitive interfaces that reduce staff training time and eliminate manual overhead.",
    iconName: "Code2",
    capabilities: [
      "Custom application architecture",
      "Operational workflow tooling",
      "Desktop & multi-platform utilities",
      "Secure role-based access control",
      "Modular, maintainable codebases",
    ],
    deliverables: [
      "Full source code and documentation",
      "Production deployment configuration",
      "Standard operating guidance",
    ],
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    shortDescription:
      "Modern responsive web applications with secure backend systems, databases, authentication, dashboards, and business workflows.",
    detailedDescription:
      "End-to-end web application engineering tailored for reliability across devices. From single-page client dashboards to cloud-connected management tools, we deliver fast load times, accessible interfaces, and resilient data layers.",
    iconName: "Globe",
    capabilities: [
      "Single-Page & Progressive Web Applications",
      "State-of-the-art frontend frameworks (React, Vite, TypeScript)",
      "RESTful API design and data pipelines",
      "Responsive interfaces for desktop, tablet, and mobile",
      "Authentication and session management",
    ],
    deliverables: [
      "Optimized production builds",
      "Cross-browser tested web application",
      "Secure database integration",
    ],
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy",
    shortDescription:
      "Technology guidance, system planning, software selection, digital transformation, and IT process improvement.",
    detailedDescription:
      "Objective, strategic technology advisory for business owners, independent organizations, and teams looking to modernize operations without overpaying for bloated enterprise systems.",
    iconName: "Compass",
    capabilities: [
      "Technical feasibility and requirement analysis",
      "Software stack and platform evaluation",
      "Database schema and architecture audits",
      "Digital workflow migration planning",
      "Cost optimization for cloud and software licenses",
    ],
    deliverables: [
      "Technology roadmap documents",
      "System design recommendations",
      "Vendor and software evaluation matrix",
    ],
  },
  {
    id: "business-automation",
    title: "Business Automation",
    shortDescription:
      "Automation of repetitive business processes, reporting workflows, data handling, notifications, and operational tasks.",
    detailedDescription:
      "Eliminate repetitive manual tasks through automated scripts, scheduled sync jobs, automated notifications, and seamless event-driven data handling that minimizes human error.",
    iconName: "Cpu",
    capabilities: [
      "Scheduled data synchronization and batch jobs",
      "Automated report generation and distribution",
      "Email and communication trigger workflows",
      "File processing and conversion pipelines",
      "Form-to-database automated routing",
    ],
    deliverables: [
      "Automated scripts and background tasks",
      "Error logging and exception alerts",
      "Workflow runbooks",
    ],
  },
  {
    id: "data-management-reporting",
    title: "Data Management & Reporting",
    shortDescription:
      "Database systems, structured data management, dashboards, reports, analytics, and information management solutions.",
    detailedDescription:
      "Transform raw operational data into structured, actionable business intelligence. We implement clean database architectures, query optimization, export tools, and visual KPI dashboards.",
    iconName: "BarChart3",
    capabilities: [
      "Relational and NoSQL database modeling",
      "Interactive analytics dashboards",
      "Structured data export (Excel, CSV, PDF)",
      "Data sanitation, cleaning, and normalization",
      "Daily, weekly, and monthly automated reports",
    ],
    deliverables: [
      "Structured database schemas",
      "Visual KPI executive dashboards",
      "Automated data export utilities",
    ],
  },
  {
    id: "custom-business-systems",
    title: "Custom Business Systems",
    shortDescription:
      "Customized solutions for operations, workforce management, inventory, attendance, reporting, monitoring, and other business processes.",
    detailedDescription:
      "Off-the-shelf software rarely fits specific operational nuances. We build tailored internal business systems for staff rosters, resource tracking, fleet/vehicle logs, and inventory monitoring.",
    iconName: "Layers",
    capabilities: [
      "Workforce and staff attendance management",
      "Vehicle tracking and fleet activity logs",
      "Operational inventory and asset tracking",
      "Branch-level operational reporting",
      "Custom approval and verification chains",
    ],
    deliverables: [
      "Dedicated internal business software",
      "Operator manuals and role permissions",
      "Local backup and export capabilities",
    ],
  },
  {
    id: "gis-mapping-solutions",
    title: "GIS & Mapping Solutions",
    shortDescription:
      "Digital mapping, GIS data management, spatial analysis, mapping workflows, and location-based business solutions.",
    detailedDescription:
      "Leverage the power of spatial data for location intelligence, territory planning, route monitoring, and geographic boundary management using modern spatial tools and interactive web map visualizers.",
    iconName: "MapPin",
    capabilities: [
      "Spatial data layer generation and conversion",
      "Web GIS interactive map visualizations",
      "Geographic asset and location monitoring",
      "Boundary mapping and territory division",
      "Coordinate system conversion and spatial cleansing",
    ],
    deliverables: [
      "Interactive map components and layers",
      "Cleaned GIS datasets (GeoJSON, Shapefiles, KML)",
      "Spatial summary reports",
    ],
  },
  {
    id: "software-integration",
    title: "Software Integration",
    shortDescription:
      "Integration of applications, APIs, databases, cloud services, and third-party systems where required.",
    detailedDescription:
      "Connect disconnected software tools to synchronize records in real time. We build reliable middleware, webhooks, and secure API bridges between proprietary software and third-party platforms.",
    iconName: "Network",
    capabilities: [
      "RESTful API integration and client development",
      "Cloud database synchronization",
      "Payment gateway and transaction receipt hookups",
      "Third-party authentication integration",
      "Webhook listeners and secure event payloads",
    ],
    deliverables: [
      "Robust API integration layers",
      "Fault-tolerant webhook handlers",
      "Security and token refresh routines",
    ],
  },
];
