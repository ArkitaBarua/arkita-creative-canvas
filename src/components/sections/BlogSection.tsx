interface BlogSectionProps {
  isDark: boolean;
}

export const BlogSection = ({ isDark }: BlogSectionProps) => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Responsive Design",
      excerpt: "Exploring modern techniques for creating beautiful responsive layouts that work on all devices.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Design"
    },
    {
      id: 2,
      title: "React Performance Optimization",
      excerpt: "Best practices for building fast and efficient React applications with optimal user experience.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Development"
    },
    {
      id: 3,
      title: "Color Theory in Web Design",
      excerpt: "Understanding how colors affect user emotions and behavior in digital interfaces.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Design"
    }
  ];

  return (
    <section className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className={`
          text-4xl font-bold text-center mb-16
          ${isDark 
            ? 'font-mono text-coder-green' 
            : 'font-cursive text-designer-pink'
          }
        `}>
          Blog
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="
                bg-card border-2 border-border rounded-lg overflow-hidden
                bookmark-shadow hover:scale-105 transition-all duration-300
                cursor-pointer group
              "
            >
              <div className={`
                h-48 p-6 flex items-center justify-center
                ${isDark 
                  ? 'bg-gradient-to-br from-coder-green/10 to-coder-blue/20' 
                  : 'bg-gradient-to-br from-designer-pink/10 to-designer-purple/20'
                }
                group-hover:from-opacity-20 group-hover:to-opacity-30
                transition-all duration-300
              `}>
                <span className={`
                  text-6xl
                  ${isDark ? 'font-mono text-coder-green' : 'font-cursive text-designer-pink'}
                `}>
                  {post.id}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`
                    px-2 py-1 text-xs rounded-full
                    ${isDark 
                      ? 'bg-coder-yellow/10 text-coder-yellow border border-coder-yellow/20' 
                      : 'bg-designer-yellow/10 text-designer-pink border border-designer-yellow/20'
                    }
                  `}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className={`
                  text-xl font-bold mb-2 line-clamp-2
                  ${isDark ? 'font-mono' : 'font-cursive'}
                `}>
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <time className="text-xs text-muted-foreground">
                    {post.date}
                  </time>
                  <button className={`
                    text-sm font-medium
                    ${isDark 
                      ? 'text-coder-green hover:text-coder-green/80' 
                      : 'text-designer-pink hover:text-designer-pink/80'
                    }
                    transition-colors
                  `}>
                    Read more →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className={`
            px-8 py-4 rounded-lg border-2 border-border
            bg-transparent text-foreground hover:bg-secondary
            transition-all duration-300 hover:scale-105 bookmark-shadow
            ${isDark ? 'font-mono' : 'font-sans'}
            text-lg
          `}>
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};