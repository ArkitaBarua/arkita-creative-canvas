import { useState } from 'react';
import { AtSign, Github, Dribbble, Linkedin, ExternalLink } from 'lucide-react';

interface Social {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  color: string;
}

const socials: Social[] = [
  { 
    id: 'github', 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com/arkita', 
    color: 'text-foreground' 
  },
  { 
    id: 'dribbble', 
    name: 'Dribbble', 
    icon: Dribbble, 
    url: 'https://dribbble.com/arkita', 
    color: 'text-designer-pink dark:text-coder-red' 
  },
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: 'https://linkedin.com/in/arkita', 
    color: 'text-designer-blue dark:text-coder-blue' 
  },
];

export const SocialsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* @ Bookmark Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-12 h-12 bookmark-clip bookmark-shadow
          bg-accent text-accent-foreground
          border-2 border-border
          flex items-center justify-center
          transition-all duration-300 ease-out
          hover:scale-105
          ${isOpen ? 'bg-primary text-primary-foreground' : ''}
        `}
      >
        <AtSign className="w-6 h-6" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 min-w-48">
          {/* Hanging string */}
          <div className="absolute -top-2 right-6 w-0.5 h-2 bg-border"></div>
          
          {/* Dropdown bookmark */}
          <div className="bg-card border-2 border-border bookmark-shadow rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-border">
              <h3 className="text-sm font-semibold text-foreground">
                Connect with me
              </h3>
            </div>
            
            {socials.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3 px-4 py-3
                    hover:bg-secondary transition-colors
                    text-card-foreground hover:text-foreground
                    group
                  "
                >
                  <IconComponent className={`w-5 h-5 ${social.color}`} />
                  <span className="text-sm font-medium">{social.name}</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};