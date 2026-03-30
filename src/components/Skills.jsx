import BlurCircle from "./BlurCircle";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS / Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 78 },
];

const tools = [
  "VS Code",
  "Git & GitHub",
  "Figma",
  "Postman",
  "Vercel",
  "Netlify",
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 lg:px-16 py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light">
          My <span className="text-accent font-semibold">Skills</span>
        </h2>
        <p className="text-muted mt-3">
          Technologies and tools I use to build modern web applications
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left: Progress Bars */}
        <div className="space-y-6">
          {skills.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2 text-sm">
                <span>{skill.name}</span>
                <span className="text-muted">{skill.level}%</span>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right: Tools Cards */}
       <div className="grid sm:grid-cols-2 gap-6">
  {tools.map((tool) => (
    
    <div
      key={tool}
      className="relative group p-6 rounded-2xl bg-card border border-white/10 
      overflow-hidden transition duration-500 hover:scale-105"
    >
      
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r 
      from-purple-600 to-sky-500 opacity-0 
      group-hover:opacity-40 transition duration-500 blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl mb-2">{tool}</h3>
        <p className="text-muted text-sm">
          Daily development tool.
        </p>
      </div>

    </div>

  ))}
</div>
        <BlurCircle top="150rem" left="0"/>
        <BlurCircle top="170rem" right="0"/>


      </div>
    </section>
  );
};

export default Skills;
