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
  Terminal,
  Webhook,
  FileCode,
  Boxes,
  Workflow,
  Network,
  Cloud,
  Lock,
  Code2,
  TestTube,
  Rocket,
  Layout,
  Monitor,
  ServerCog,
  FileJson,
  FileType,
  FileCode2,
  FileSpreadsheet,
} from "lucide-react";

const SkillCategory = ({ title, icon: Icon, skills }) => (
  <div className="bg-blue-theme/30 backdrop-blur-md p-6 rounded-xl border border-gray-500/20 hover:border-orange-500/50 transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-orange-500 animate-pulse" size={24} />
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
        { name: "React.js", level: 95, icon: <Code2 className="text-orange-500" size={20} /> },
        { name: "Next.js", level: 90, icon: <FileCode className="text-orange-500" size={20} /> },
        { name: "TypeScript", level: 85, icon: <FileType className="text-orange-500" size={20} /> },
        { name: "Tailwind CSS", level: 95, icon: <Layout className="text-orange-500" size={20} /> },
        { name: "Redux", level: 85, icon: <Workflow className="text-orange-500" size={20} /> },
        { name: "Material UI", level: 90, icon: <Boxes className="text-orange-500" size={20} /> },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90, icon: <ServerCog className="text-orange-500" size={20} /> },
        { name: "Express.js", level: 95, icon: <Webhook className="text-orange-500" size={20} /> },
        { name: "Python", level: 85, icon: <Terminal className="text-orange-500" size={20} /> },
        { name: "Django", level: 80, icon: <FileCode2 className="text-orange-500" size={20} /> },
        { name: "REST APIs", level: 95, icon: <Network className="text-orange-500" size={20} /> },
        { name: "GraphQL", level: 85, icon: <FileJson className="text-orange-500" size={20} /> },
      ],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90, icon: <Database className="text-orange-500" size={20} /> },
        { name: "PostgreSQL", level: 85, icon: <FileSpreadsheet className="text-orange-500" size={20} /> },
        { name: "Firebase", level: 90, icon: <Cloud className="text-orange-500" size={20} /> },
        { name: "AWS", level: 80, icon: <Server className="text-orange-500" size={20} /> },
        { name: "Docker", level: 85, icon: <Package className="text-orange-500" size={20} /> },
        { name: "Redis", level: 80, icon: <Zap className="text-orange-500" size={20} /> },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Package,
      skills: [
        { name: "Git", level: 95, icon: <GitBranch className="text-orange-500" size={20} /> },
        { name: "WebSocket", level: 90, icon: <Network className="text-orange-500" size={20} /> },
        { name: "JWT", level: 95, icon: <Lock className="text-orange-500" size={20} /> },
        { name: "WebRTC", level: 85, icon: <Globe className="text-orange-500" size={20} /> },
        { name: "CI/CD", level: 85, icon: <Rocket className="text-orange-500" size={20} /> },
        { name: "Testing", level: 90, icon: <TestTube className="text-orange-500" size={20} /> },
      ],
    },
  ];

  const technologies = [
    { name: "Responsive Design", icon: <Monitor className="text-orange-500" size={24} /> },
    { name: "UI/UX Design", icon: <Palette className="text-orange-500" size={24} /> },
    { name: "Performance", icon: <Zap className="text-orange-500" size={24} /> },
    { name: "Security", icon: <Shield className="text-orange-500" size={24} /> },
    { name: "Version Control", icon: <GitBranch className="text-orange-500" size={24} /> },
    { name: "API Integration", icon: <Layers className="text-orange-500" size={24} /> },
    { name: "Cross-browser", icon: <Globe className="text-orange-500" size={24} /> },
    { name: "Architecture", icon: <Cpu className="text-orange-500" size={24} /> },
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
                  <div className="group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
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