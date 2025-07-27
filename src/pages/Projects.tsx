import { useState, useEffect } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { BookmarkNavigation } from '../components/BookmarkNavigation';
import { SocialsDropdown } from '../components/SocialsDropdown';
import { ProjectsSection } from '../components/sections/ProjectsSection';

const Projects = () => {
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

  return (
    <div className="min-h-screen bg-background border-frame relative p-8 m-4">
      {/* Top Navigation */}
      <header className="relative z-50 flex justify-between items-start mb-6">
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
      <BookmarkNavigation />

      {/* Main Content */}
      <main className="relative">
        <ProjectsSection isDark={isDark} />
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

export default Projects; 