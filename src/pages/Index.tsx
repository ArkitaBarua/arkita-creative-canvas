import { useState, useEffect } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { BookmarkNavigation } from '../components/BookmarkNavigation';
import { SocialsDropdown } from '../components/SocialsDropdown';
import { HomeSection } from '../components/sections/HomeSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ResumeSection } from '../components/sections/ResumeSection';
import { BlogSection } from '../components/sections/BlogSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

  // Monitor theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    // Initial check
    setIsDark(document.documentElement.classList.contains('dark'));
    
    return () => observer.disconnect();
  }, []);

  // Handle section changes and smooth scrolling
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sections = ['home', 'projects', 'resume', 'blog'];
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background border-frame relative">
      {/* Top Navigation */}
      <header className="fixed top-4 left-4 right-4 z-50 flex justify-between items-start">
        {/* Logo/Brand */}
        <div className={`
          px-4 py-2 bg-card border-2 border-border rounded-lg bookmark-shadow
          ${isDark ? 'font-mono' : 'font-cursive'}
        `}>
          <span className="text-lg font-bold">
            Arkita{isDark ? '.dev' : ' ✨'}
          </span>
        </div>

        {/* Top Right Controls */}
        <div className="flex items-start gap-4">
          <ThemeToggle />
          <SocialsDropdown />
        </div>
      </header>

      {/* Bookmark Navigation */}
      <BookmarkNavigation 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Main Content */}
      <main className="relative">
        <div id="home">
          <HomeSection isDark={isDark} />
        </div>
        
        <div id="projects">
          <ProjectsSection isDark={isDark} />
        </div>
        
        <div id="resume">
          <ResumeSection isDark={isDark} />
        </div>
        
        <div id="blog">
          <BlogSection isDark={isDark} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className={`
            text-muted-foreground
            ${isDark ? 'font-mono' : 'font-sans'}
          `}>
            © 2024 Arkita. Crafted with 💖 and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
