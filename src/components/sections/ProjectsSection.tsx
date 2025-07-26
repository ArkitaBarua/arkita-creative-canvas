interface ProjectsSectionProps {
  isDark: boolean;
}

export const ProjectsSection = ({ isDark }: ProjectsSectionProps) => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A beautiful bookmark-themed portfolio with dual themes",
      tags: ["React", "TypeScript", "Tailwind"],
      color: isDark ? "coder-green" : "designer-pink"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Modern shopping experience with seamless checkout",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      color: isDark ? "coder-blue" : "designer-blue"
    },
    {
      id: 3,
      title: "Design System",
      description: "Comprehensive component library for rapid development",
      tags: ["Figma", "Storybook", "React"],
      color: isDark ? "coder-purple" : "designer-purple"
    }
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className={`
          text-4xl font-bold text-center mb-16
          ${isDark 
            ? 'font-mono text-coder-green' 
            : 'font-cursive text-designer-pink'
          }
        `}>
          My Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                bg-card border-2 border-border rounded-lg p-6
                bookmark-shadow hover:scale-105 transition-all duration-300
                cursor-pointer group
              "
            >
              <div className={`
                w-full h-48 rounded-lg mb-4
                bg-gradient-to-br from-${project.color}/20 to-${project.color}/40
                flex items-center justify-center
                group-hover:from-${project.color}/30 group-hover:to-${project.color}/50
                transition-all duration-300
              `}>
                <span className={`
                  text-6xl
                  ${isDark ? 'font-mono' : 'font-cursive'}
                  text-${project.color}
                `}>
                  {project.id}
                </span>
              </div>
              
              <h3 className={`
                text-xl font-bold mb-2
                ${isDark ? 'font-mono' : 'font-cursive'}
              `}>
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`
                      px-2 py-1 text-xs rounded-full
                      bg-${project.color}/10 text-${project.color}
                      border border-${project.color}/20
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};