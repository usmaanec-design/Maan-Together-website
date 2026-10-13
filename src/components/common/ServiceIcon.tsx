import React from "react";
import {
  Code2,
  Globe,
  Compass,
  Cpu,
  BarChart3,
  Layers,
  MapPin,
  Network,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

interface ServiceIconProps extends LucideProps {
  name: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, ...props }) => {
  switch (name) {
    case "Code2":
      return <Code2 {...props} />;
    case "Globe":
      return <Globe {...props} />;
    case "Compass":
      return <Compass {...props} />;
    case "Cpu":
      return <Cpu {...props} />;
    case "BarChart3":
      return <BarChart3 {...props} />;
    case "Layers":
      return <Layers {...props} />;
    case "MapPin":
      return <MapPin {...props} />;
    case "Network":
      return <Network {...props} />;
    default:
      return <Code2 {...props} />;
  }
};
