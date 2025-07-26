import { useState } from 'react';
import { Home, Briefcase, FileText, BookOpen } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  emoji: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home, emoji: '🏠' },
  { id: 'projects', label: 'Projects', icon: Briefcase, emoji: '💼' },
  { id: 'resume', label: 'Resume', icon: FileText, emoji: '📄' },
  { id: 'blog', label: 'Blog', icon: BookOpen, emoji: '📝' },
];

interface BookmarkNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const BookmarkNavigation = ({ activeSection, onSectionChange }: BookmarkNavigationProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const isHovered = hoveredItem === item.id;
        const isExpanded = isActive || isHovered;

        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Main bookmark */}
            <button
              onClick={() => onSectionChange(item.id)}
              className={`
                relative h-12 transition-all duration-300 ease-out
                bookmark-nav-clip bookmark-shadow
                border-2 border-border
                ${isExpanded ? 'w-32' : 'w-12'}
                ${isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-card-foreground hover:bg-secondary'
                }
                flex items-center justify-start pl-2
                group
              `}
            >
              {/* Emoji/Icon */}
              <span className="text-lg leading-none">
                {item.emoji}
              </span>
              
              {/* Label - only show when expanded */}
              <span 
                className={`
                  ml-2 text-sm font-medium transition-all duration-300
                  ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                  ${isActive ? 'dark:font-mono font-cursive' : 'font-sans'}
                `}
              >
                {item.label}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};