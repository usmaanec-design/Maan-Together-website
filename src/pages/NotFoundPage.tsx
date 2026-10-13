import React from "react";
import { Button } from "../components/common/Button";
import { Badge } from "../components/common/Badge";
import { Home, Compass, Mail } from "lucide-react";

interface NotFoundPageProps {
  onNavigate: (pageId: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-20 sm:py-28">
      <div className="corporate-container max-w-2xl text-center space-y-6">
        <Badge variant="orange" size="md">
          404 &bull; Resource Not Found
        </Badge>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
          Page Not Located
        </h1>

        <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto">
          The requested page or technical resource does not exist or has been relocated within the Maan Together directory.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => onNavigate("home")}
            icon={<Home className="w-4 h-4" />}
          >
            Return to Home
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={() => onNavigate("services")}
            icon={<Compass className="w-4 h-4" />}
          >
            Explore Services
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => onNavigate("contact")}
            icon={<Mail className="w-4 h-4" />}
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};
