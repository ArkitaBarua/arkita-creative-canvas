interface HeroBookmarkProps {
  isDark?: boolean;
}

export const HeroBookmark = ({ isDark = false }: HeroBookmarkProps) => {
  return (
    <div className="relative">
      {/* Hanging string */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-border"></div>
      
      {/* Main bookmark */}
      <div className="
        w-64 h-80 bookmark-clip bookmark-shadow
        bg-card border-4 border-border
        relative overflow-hidden
        transition-all duration-500 ease-out
        hover:scale-105 hover:-translate-y-2
      ">
        {/* Profile Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src="/lovable-uploads/70cadb51-1cb0-43e9-9c06-e336ac75bb03.png"
            alt="Arkita's Profile"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className={`
            text-2xl font-bold mb-2
            ${isDark 
              ? 'font-mono text-coder-green' 
              : 'font-cursive text-designer-pink'
            }
          `}>
            Hi, I am Arkita
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I am very nice person i am very nice person i am very nice person i am very nice person i am very nice person
          </p>
        </div>
        
        {/* Decorative elements for designer mode */}
        {!isDark && (
          <>
            <div className="absolute top-4 right-4 w-6 h-6 bg-designer-yellow rounded-full opacity-80"></div>
            <div className="absolute top-12 right-8 w-4 h-4 bg-designer-purple rounded-full opacity-60"></div>
            <div className="absolute bottom-24 right-2 w-3 h-3 bg-designer-blue rounded-full opacity-70"></div>
          </>
        )}
        
        {/* Code elements for coder mode */}
        {isDark && (
          <div className="absolute top-4 left-4 text-xs font-mono text-coder-yellow opacity-60">
            &lt;/dev&gt;
          </div>
        )}
      </div>
    </div>
  );
};