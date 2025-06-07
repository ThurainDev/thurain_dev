import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollArrow = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

  const scrollToNextSection = () => {
    const nextSection = (currentSection + 1) % sections.length;
    const element = document.getElementById(sections[nextSection]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(nextSection);
    }
  };

  // Hide arrow when at the bottom of the page
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsVisible(scrollPosition < documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToNextSection}
      className="fixed right-8 bottom-8 bg-blue-theme/30 backdrop-blur-md p-3 rounded-full border border-gray-500/20 text-text-theme-color hover:text-orange-400 transition-all duration-300 hover:scale-110 z-50"
      aria-label="Scroll to next section"
    >
      <ChevronDown size={24} />
    </button>
  );
};

export default ScrollArrow; 