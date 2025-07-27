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
    <div className={`relative ${className}`}>
      <button
        onClick={toggleTheme}
        className={`
          relative w-56 h-20 rounded-full border border-border
          transition-all duration-500 ease-out
          bg-muted hover:scale-105 bookmark-shadow
          flex items-center justify-between
          overflow-hidden
          group
        `}
        aria-label={`Switch to ${isDark ? 'designer' : 'coder'} mode`}
      >
        {/* Sliding Background Indicator */}
        <div className={`
          absolute top-2 h-16 w-28
          transition-all duration-500 ease-out
          rounded-full shadow-sm
          ${isDark 
            ? 'bg-white border border-border translate-x-28' 
            : 'bg-designer-pink border border-designer-pink translate-x-0'
          }
        `} />

        {/* Designer Mode (Left Side) */}
        <div className={`
          relative z-10 h-full w-1/2
          flex flex-col items-center justify-center
          transition-all duration-500 ease-out
          ${!isDark ? 'text-white' : 'text-foreground'}
        `}>
          <div className={`
            text-xs font-medium
            transition-all duration-500 ease-out
            ${!isDark ? 'scale-110' : 'scale-100'}
            text-center
          `}>
            <div>The <span className="font-bold italic">designer</span></div>
            <div>mode</div>
          </div>
          <Sun className={`
            w-4 h-4 mt-1
            transition-all duration-500 ease-out
            ${!isDark ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
          `} />
        </div>

        {/* Coder Mode (Right Side) */}
        <div className={`
          relative z-10 h-full w-1/2
          flex flex-col items-center justify-center
          transition-all duration-500 ease-out
          ${isDark ? 'text-black' : 'text-foreground'}
        `}>
          <div className={`
            text-xs font-medium
            transition-all duration-500 ease-out
            ${isDark ? 'scale-110' : 'scale-100'}
            text-center
          `}>
            <div>The <span className="font-bold font-mono">&lt;coder&gt;</span></div>
            <div>mode</div>
          </div>
          <Moon className={`
            w-4 h-4 mt-1
            transition-all duration-500 ease-out
            ${isDark ? 'scale-110 -rotate-12' : 'scale-100 rotate-0'}
          `} />
        </div>

        {/* Hover Effects */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300 ease-out
        `} />
      </button>
    </div>
  );
};