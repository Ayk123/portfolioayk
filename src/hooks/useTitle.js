import { useEffect } from "react";

const useTitle = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "tools", "project", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        }
        return false;
      });

      if (currentSection) {
        document.title = `${
          currentSection.charAt(0).toUpperCase() + currentSection.slice(1)
        } | Ayk's Portfolio`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useTitle;
