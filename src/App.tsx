import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsConditionsPage } from "./pages/TermsConditionsPage";
import { InsightsPage } from "./pages/InsightsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);
  const [selectedServiceIdForServicesPage, setSelectedServiceIdForServicesPage] = useState<string | undefined>(undefined);

  // Sync with browser hash on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase() || "home";
      const validPages = [
        "home",
        "about",
        "services",
        "solutions",
        "projects",
        "contact",
        "privacy-policy",
        "terms-conditions",
        "insights",
      ];

      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (hash.startsWith("service-")) {
        // Direct jump to a specific service
        const srvId = hash.replace("service-", "");
        setSelectedServiceIdForServicesPage(srvId);
        setCurrentPage("services");
      } else {
        setCurrentPage("404");
      }
    };

    handleHashChange();
    window.addEventListener("popstate", handleHashChange);
    return () => window.removeEventListener("popstate", handleHashChange);
  }, []);

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId === "home" ? "" : pageId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    navigateTo("contact");
  };

  const handleSelectServiceForDetails = (serviceId: string) => {
    setSelectedServiceIdForServicesPage(serviceId);
    navigateTo("services");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            onNavigate={navigateTo}
            onSelectService={handleSelectServiceForDetails}
          />
        );
      case "about":
        return <AboutPage onNavigate={navigateTo} />;
      case "services":
        return (
          <ServicesPage
            onNavigate={navigateTo}
            selectedServiceId={selectedServiceIdForServicesPage}
            onSelectServiceForContact={handleSelectServiceForContact}
          />
        );
      case "solutions":
        return (
          <SolutionsPage
            onNavigate={navigateTo}
            onInquireProduct={(productName) => handleSelectServiceForContact(productName)}
          />
        );
      case "projects":
        return <ProjectsPage onNavigate={navigateTo} />;
      case "contact":
        return (
          <ContactPage
            onNavigate={navigateTo}
            preselectedService={selectedServiceForContact}
          />
        );
      case "privacy-policy":
        return <PrivacyPolicyPage onNavigate={navigateTo} />;
      case "terms-conditions":
        return <TermsConditionsPage onNavigate={navigateTo} />;
      case "insights":
        return <InsightsPage onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <Navbar activePage={currentPage} onNavigate={navigateTo} />
      <main className="flex-1 w-full">{renderCurrentPage()}</main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
