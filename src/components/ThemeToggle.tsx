import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full border-2 border-border
        transition-all duration-300 ease-in-out
        ${isDark ? 'bg-card' : 'bg-secondary'}
        hover:scale-105 bookmark-shadow
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'designer' : 'coder'} mode`}
    >
      <div
        className={`
          absolute top-1 w-6 h-6 rounded-full
          transition-all duration-300 ease-in-out
          ${isDark ? 'translate-x-8 bg-coder-green' : 'translate-x-1 bg-designer-pink'}
          flex items-center justify-center
        `}
      >
        {isDark ? (
          <Moon className="w-3 h-3 text-background" />
        ) : (
          <Sun className="w-3 h-3 text-primary-foreground" />
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <span className={`text-xs font-mono ${!isDark ? 'text-foreground' : 'text-muted-foreground'}`}>
          D
        </span>
        <span className={`text-xs font-mono ${isDark ? 'text-foreground' : 'text-muted-foreground'}`}>
          C
        </span>
      </div>
    </button>
  );
};