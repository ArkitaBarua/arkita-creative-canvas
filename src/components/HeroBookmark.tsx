import { useEffect, useState } from 'react';

interface HeroBookmarkProps {
  isDark?: boolean;
}

export const HeroBookmark = ({ isDark = false }: HeroBookmarkProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Plain Image */}
      <div className={`
        w-[32rem] h-[40rem]
        relative overflow-hidden
        transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100 scale-y-100' : 'translate-y-0 opacity-100 scale-y-0'}
        origin-top
      `}>
        <img
          src="/arkita_bookmark.png"
          alt="Arkita's Bookmark"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};