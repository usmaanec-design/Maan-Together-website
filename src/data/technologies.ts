export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    description: string;
    primaryUse: string;
  }[];
}

export const TECHNOLOGIES_DATA: TechCategory[] = [
  {
    category: "Frontend & Web Architecture",
    description: "Modern, responsive client applications engineered for speed and stability.",
    items: [
      {
        name: "React",
        description: "Declarative component-driven user interfaces with predictable state.",
        primaryUse: "Interactive client applications & dashboards",
      },
      {
        name: "TypeScript",
        description: "Strict static type-checking for bug prevention and maintainable codebases.",
        primaryUse: "Enterprise logic & type-safe API communication",
      },
      {
        name: "Vite",
        description: "Next-generation frontend tooling offering rapid builds and optimized bundling.",
        primaryUse: "Modern build pipeline and development performance",
      },
      {
        name: "JavaScript",
        description: "Core scripting language powering client and server execution environments.",
        primaryUse: "Dynamic application interactivity",
      },
    ],
  },
  {
    category: "Cloud, Database & Backend",
    description: "Secure, reliable data infrastructure and scalable cloud hosting.",
    items: [
      {
        name: "Firestore",
        description: "Flexible, scalable NoSQL document database with real-time sync capabilities.",
        primaryUse: "Dynamic document storage & synchronized record systems",
      },
      {
        name: "Firebase",
        description: "Comprehensive backend-as-a-service for authentication, storage, and rules.",
        primaryUse: "Authentication & secured backend services",
      },
      {
        name: "Database Systems",
        description: "Structured relational and document databases with optimized query indexes.",
        primaryUse: "Financial records, operations logs, and business databases",
      },
      {
        name: "Cloud Services",
        description: "Managed cloud environments for reliable deployment and continuous uptime.",
        primaryUse: "Production hosting and serverless execution",
      },
    ],
  },
  {
    category: "Specialized Solutions & Integration",
    description: "Domain-specific solutions engineered for spatial data, automation, and system bridges.",
    items: [
      {
        name: "GIS & Spatial",
        description: "Spatial data processing, geographic boundaries, coordinate transforms, and mapping.",
        primaryUse: "Territory mapping, spatial visualization, and location tools",
      },
      {
        name: "Automation",
        description: "Scheduled jobs, background file processors, and event-driven pipelines.",
        primaryUse: "Eliminating repetitive administrative tasks & reports",
      },
      {
        name: "API Integration",
        description: "Secure REST endpoints, third-party platform connections, and webhook handlers.",
        primaryUse: "Bridging disparate software systems seamlessly",
      },
      {
        name: "Web Applications",
        description: "Multi-device accessible business platforms requiring zero client install.",
        primaryUse: "Internal operations and customer-facing tools",
      },
    ],
  },
];
