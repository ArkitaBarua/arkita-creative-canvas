interface ResumeSectionProps {
  isDark: boolean;
}

export const ResumeSection = ({ isDark }: ResumeSectionProps) => {
  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading front-end development for web applications using React and TypeScript."
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio",
      period: "2020 - 2022",
      description: "Designed user interfaces and experiences for mobile and web applications."
    },
    {
      title: "Junior Developer",
      company: "StartUp Co.",
      period: "2019 - 2020",
      description: "Built responsive websites and learned modern development practices."
    }
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "UI/UX Design", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Node.js", level: 75 },
    { name: "Figma", level: 92 }
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
          Resume
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className={`
              text-2xl font-bold mb-8
              ${isDark ? 'font-mono text-coder-blue' : 'font-cursive text-designer-blue'}
            `}>
              Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="
                    bg-card border-2 border-border rounded-lg p-6
                    bookmark-shadow hover:scale-105 transition-all duration-300
                  "
                >
                  <h4 className={`
                    text-lg font-bold
                    ${isDark ? 'font-mono' : 'font-cursive'}
                  `}>
                    {exp.title}
                  </h4>
                  <p className={`
                    text-sm mb-2
                    ${isDark ? 'text-coder-yellow' : 'text-designer-purple'}
                  `}>
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className={`
              text-2xl font-bold mb-8
              ${isDark ? 'font-mono text-coder-purple' : 'font-cursive text-designer-purple'}
            `}>
              Skills
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="
                    bg-card border-2 border-border rounded-lg p-4
                    bookmark-shadow
                  "
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className={`
                      font-medium
                      ${isDark ? 'font-mono' : 'font-sans'}
                    `}>
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`
                        h-2 rounded-full transition-all duration-1000 ease-out
                        ${isDark ? 'bg-coder-green' : 'bg-designer-pink'}
                      `}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <button className={`
            px-8 py-4 rounded-lg border-2 border-primary
            ${isDark 
              ? 'bg-coder-green text-background hover:bg-coder-green/90 font-mono' 
              : 'bg-designer-pink text-primary-foreground hover:bg-designer-pink/90 font-cursive'
            }
            transition-all duration-300 hover:scale-105 bookmark-shadow
            text-lg
          `}>
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};