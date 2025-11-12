import { useEffect, useState } from "react";
import AboutMeComponent from "../AboutMeComponent";
import CertificationComponent from "../CertificationComponent";
import SkillsComponent from "../SkillsComponent";
import TestimonialComponent from "../TestimonialComponent";
import WorkComponent from "../WorkComponent";
import HomeComponent from "../HOME/HomeComponent";

type ContentPaneComponentProps = {
  selected: string;
};

export default function ContentPane({ selected }: ContentPaneComponentProps) {
  const [activeContent, setActiveContent] = useState(selected);
  const [transitioning, setTransitioning] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    if (selected !== activeContent) {
      // Start transition
      setTransitioning(true);
      setShowQuote(true); // Show quote while content changes

      const timer = setTimeout(() => {
        setActiveContent(selected); // Switch content
        setTransitioning(false);
      }, 400); // match transition duration

      // Hide quote shortly after transition starts
      const quoteTimer = setTimeout(() => {
        setShowQuote(false);
      }, 300);

      return () => {
        clearTimeout(timer);
        clearTimeout(quoteTimer);
      };
    }
  }, [selected]);

  const renderContent = () => {
    switch (activeContent) {
      case "home":
        return <HomeComponent />;
      case "about":
        return <AboutMeComponent />;
      case "skills":
        return <SkillsComponent />;
      case "work":
        return <WorkComponent />;
      case "testimonials":
        return <TestimonialComponent />;
      case "cert":
        return <CertificationComponent />;
      default:
        return null;
    }
  };

  return (
    <div className=" relative overflow-hidden w-full h-full">
      {/* Quote overlay */}
      {showQuote && (
        <div className="absolute inset-0 flex justify-center items-center bg-white/20 z-10 transition-opacity duration-300">
          <p className="text-black text-2xl italic">"Hail to you, Djehuty, Lord of the divine worlds, Scribe of the Ennead, who balances the sky with his pen. You speak, and the moon is born, you write, and truth stands firm."</p>
        </div>
      )}

      {/* Sliding content */}
      <div
        className={`flex items-center justify-center w-full h-full transition-transform duration-400 ease-in-out ${
          transitioning ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <div className="flex justify-center">{renderContent()}</div>
      </div>
    </div>
  );
}
