import { HeroBookmark } from '../HeroBookmark';

interface HomeSectionProps {
  isDark: boolean;
}

export const HomeSection = ({ isDark }: HomeSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background */}
      <div className={`
        absolute inset-0 
        ${isDark ? 'interactive-bg-alt opacity-20' : 'interactive-bg opacity-30'}
      `}></div>
      
      {/* Floating decorative elements for designer mode */}
      {!isDark && (
        <>
          <div className="absolute top-20 left-20 w-16 h-16 bg-designer-blue rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-12 h-12 bg-designer-purple rounded-full opacity-25 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-8 h-8 bg-designer-yellow rounded-full opacity-30 animate-ping"></div>
        </>
      )}
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 flex items-center gap-16">
        {/* Hero Bookmark */}
        <div className="flex-shrink-0">
          <HeroBookmark isDark={isDark} />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className={`
            text-6xl font-bold mb-6 leading-tight
            ${isDark 
              ? 'font-mono text-coder-green' 
              : 'font-cursive text-designer-pink'
            }
            transition-all duration-500
          `}>
            Hi, I am Arkita
          </h1>
          
          <div className="space-y-4 text-lg text-muted-foreground">
            <p className={`
              leading-relaxed
              ${isDark ? 'font-mono' : 'font-sans'}
            `}>
              I am a passionate designer and developer who loves creating beautiful, 
              functional digital experiences. My work spans across UI/UX design, 
              front-end development, and everything in between.
            </p>
            
            <p className={`
              leading-relaxed
              ${isDark ? 'font-mono' : 'font-sans'}
            `}>
              Welcome to my portfolio where creativity meets code, and ideas come to life 
              through thoughtful design and clean implementation.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <button className={`
              px-6 py-3 rounded-lg border-2 border-primary
              ${isDark 
                ? 'bg-coder-green text-background hover:bg-coder-green/90 font-mono' 
                : 'bg-designer-pink text-primary-foreground hover:bg-designer-pink/90 font-cursive'
              }
              transition-all duration-300 hover:scale-105 bookmark-shadow
            `}>
              View My Work
            </button>
            
            <button className={`
              px-6 py-3 rounded-lg border-2 border-border
              bg-transparent text-foreground hover:bg-secondary
              transition-all duration-300 hover:scale-105
              ${isDark ? 'font-mono' : 'font-sans'}
            `}>
              Download Resume
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          Scroll to explore
        </span>
        <div className="w-0.5 h-8 bg-border animate-pulse"></div>
      </div>
    </section>
  );
};