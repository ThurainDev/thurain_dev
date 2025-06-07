import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Code,
  Users,
  Target,
  Award,
  Star,
  ChevronRight,
} from "lucide-react";

const ExperienceCard = ({ experience, isLast }) => (
  <div className="relative">
    {/* Timeline line */}
    {!isLast && (
      <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-orange-500/30" />
    )}
    
    <div className="relative flex gap-6">
      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center">
        <Briefcase className="text-orange-500" size={20} />
      </div>

      {/* Content */}
      <div className="flex-1 bg-blue-theme/30 backdrop-blur-md p-6 rounded-xl border border-gray-500/20 hover:border-orange-500/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <p className="text-orange-500 font-mono">{experience.company}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Calendar size={16} />
            <span>{experience.period}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
          <MapPin size={16} />
          <span>{experience.location}</span>
        </div>

        <div className="space-y-4">
          {/* Key Responsibilities */}
          <div>
            <h4 className="text-sm font-semibold text-orange-500 mb-2 flex items-center gap-2">
              <Target size={16} />
              Key Responsibilities
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
              {experience.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          {experience.achievements && (
            <div>
              <h4 className="text-sm font-semibold text-orange-500 mb-2 flex items-center gap-2">
                <Award size={16} />
                Key Achievements
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-white/80">
                {experience.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-orange-500 mb-2 flex items-center gap-2">
              <Code size={16} />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/80 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Team Size */}
          {experience.teamSize && (
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Users size={16} />
              <span>Team Size: {experience.teamSize}</span>
            </div>
          )}

          {/* Links */}
          {experience.links && (
            <div className="flex gap-4 pt-2">
              {experience.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-orange-500 hover:text-orange-400 transition-colors"
                >
                  <ExternalLink size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Experiences = () => {
  const experiences = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "Jan 2023 - Present",
      location: "Remote",
      responsibilities: [
        "Develop and maintain web applications for diverse clients",
        "Create responsive and user-friendly interfaces",
        "Implement full-stack solutions using modern technologies",
        "Manage client communications and project timelines",
      ],
      achievements: [
        "Successfully delivered multiple client projects",
        "Built responsive websites with modern design principles",
        "Implemented secure authentication and database solutions",
        "Maintained high client satisfaction through clear communication",
      ],
      technologies: [
        "React",
        "Node.js",
        "JavaScript",
        "HTML/CSS",
        "MongoDB",
        "Express.js",
        "Git",
      ],
      teamSize: "Independent",
      links: [
        {
          label: "Portfolio",
          url: "#",
        },
        {
          label: "GitHub",
          url: "#",
        },
      ],
    },
    {
      title: "Web Development Projects",
      company: "Personal Projects",
      period: "2022 - Present",
      location: "Remote",
      responsibilities: [
        "Build and maintain personal portfolio website",
        "Create small web applications to practice skills",
        "Learn and implement new web technologies",
        "Contribute to open-source projects",
      ],
      achievements: [
        "Developed responsive portfolio website",
        "Created multiple small web applications",
        "Learned and implemented modern web technologies",
        "Improved coding skills through practice",
      ],
      technologies: [
        "React",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
      ],
    },
  ];

  return (
    <section id="experiences" className="px-4 py-12 text-white bg-theme-color">
      <div className="max-w-6xl mx-auto">
        {/* Title with Responsive Line */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-orange-500 font-mono flex-shrink-0 w-[40%] sm:w-[25%] lg:w-[20%]">
            Experience
          </h2>
          <div className="border-t border-white w-[60%] sm:w-[75%] lg:w-[80%]"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;