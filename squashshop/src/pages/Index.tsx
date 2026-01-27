import { useState, useEffect } from "react";

// Import new components
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
// import McMasterCredentials from "@/components/McMasterCredentials";
import BrandsSection from "@/components/BrandsSection";
import StringingServices from "@/components/StringingServices";
import RacketsSection from "@/components/RacketsSection";
import CoachingSection from "@/components/CoachingSection";
// import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['stringing', 'rackets', 'coaching', 'brands', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServicesClick = () => {
    document.getElementById('stringing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      
      <HeroSection 
        onContactClick={handleContactClick}
        onServicesClick={handleServicesClick}
      />
      
      {/* <McMasterCredentials /> */}
      
    
      
      <StringingServices />
      
      <RacketsSection 
        onContactClick={handleContactClick}
      />
      
      <CoachingSection />
      
      {/* <PartnersSection /> */}
      <BrandsSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
