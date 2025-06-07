import React from "react";
import {
  Code,
  Database,
  Server,
  Globe,
  Layers,
  Cpu,
  Smartphone,
  Palette,
  Shield,
  Zap,
  GitBranch,
  Package,
} from "lucide-react";

const SkillCategory = ({ title, icon: Icon, skills }) => (
  <div className="bg-blue-theme/30 backdrop-blur-md p-6 rounded-xl border border-gray-500/20">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-orange-500" size={24} />
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="grid grid-cols-2 gap-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-orange-500/50 transition-all duration-300 group"
        >
          <div className="flex items-center gap-2">
            <span className="text-orange-500 group-hover:scale-110 transition-transform">
              {skill.icon}
            </span>
            <span className="text-white/90 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
          <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "Redux", level: 85, icon: "🔄" },
        { name: "Material UI", level: 90, icon: "🎯" },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 95, icon: "🚂" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Django", level: 80, icon: "🎸" },
        { name: "REST APIs", level: 95, icon: "🔌" },
        { name: "GraphQL", level: 85, icon: "📊" },
      ],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90, icon: "🍃" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "Firebase", level: 90, icon: "🔥" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Redis", level: 80, icon: "⚡" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Package,
      skills: [
        { name: "Git", level: 95, icon: "📦" },
        { name: "WebSocket", level: 90, icon: "🔌" },
        { name: "JWT", level: 95, icon: "🔑" },
        { name: "WebRTC", level: 85, icon: "🎥" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Testing", level: 90, icon: "🧪" },
      ],
    },
  ];

  const technologies = [
    { name: "Responsive Design", icon: Smartphone },
    { name: "UI/UX Design", icon: Palette },
    { name: "Performance Optimization", icon: Zap },
    { name: "Security Best Practices", icon: Shield },
    { name: "Version Control", icon: GitBranch },
    { name: "API Integration", icon: Layers },
    { name: "Cross-browser Compatibility", icon: Globe },
    { name: "Code Architecture", icon: Cpu },
  ];

  return (
    <section id="skills" className="px-4 py-12 text-white bg-theme-color">
      <div className="max-w-6xl mx-auto">
        {/* Title with Responsive Line */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-orange-500 font-mono flex-shrink-0 w-[40%] sm:w-[25%] lg:w-[20%]">
            Skills
          </h2>
          <div className="border-t border-white w-[60%] sm:w-[75%] lg:w-[80%]"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-orange-500 mb-8">Technologies & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-blue-theme/30 backdrop-blur-md p-4 rounded-xl border border-gray-500/20 hover:border-orange-500/50 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <tech.icon
                    className="text-orange-500 group-hover:scale-110 transition-transform"
                    size={24}
                  />
                  <span className="text-white/90 group-hover:text-white transition-colors text-sm">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;