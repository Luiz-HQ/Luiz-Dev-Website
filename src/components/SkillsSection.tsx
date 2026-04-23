"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiPython,
  SiHtml5,
  SiCss,
  SiNestjs,
  SiJest,
  SiCypress,
  SiNpm,
  SiPnpm,
  SiPostman,
  SiInsomnia,
} from "react-icons/si";
import {
  FiBriefcase,
  FiUsers,
  FiZap,
  FiBook,
  FiTarget,
  FiMessageSquare,
} from "react-icons/fi";

export const SkillsSection = () => {
  const hardSkillsByCategory = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML5", icon: SiHtml5, color: "#E34C26" },
        { name: "CSS3", icon: SiCss, color: "#1572B6" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "NestJS", icon: SiNestjs, color: "#EA2845" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Prisma", icon: SiPrisma, color: "#5f6268" },
        { name: "Express", icon: SiExpress, color: "#5f6268" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#13AA52" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: SiGit, color: "#F1502F" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "Bitbucket", icon: SiBitbucket, color: "#205081" },
        { name: "NPM", icon: SiNpm, color: "#CB3837" },
        { name: "Pnpm", icon: SiPnpm, color: "#F69220" },
        { name: "Jest", icon: SiJest, color: "#C21325" },
        { name: "Cypress", icon: SiCypress, color: "#17202C" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Insomnia", icon: SiInsomnia, color: "#5900CF" },
      ],
    },
  ];

  const softSkills = [
    {
      name: "Communication",
      icon: FiMessageSquare,
      description:
        "Clear and effective communication with teams and stakeholders",
    },
    {
      name: "Problem Solving",
      icon: FiTarget,
      description:
        "Analytical approach to solving complex technical challenges",
    },
    {
      name: "Agility",
      icon: FiZap,
      description: "Adaptable and quick to respond to changing requirements",
    },
    {
      name: "Self-taught",
      icon: FiBook,
      description: "Continuous learning and self-improvement mindset",
    },
    {
      name: "Proactive",
      icon: FiBriefcase,
      description: "Takes initiative and anticipates needs before being asked",
    },
    {
      name: "Teamwork",
      icon: FiUsers,
      description: "Collaborates effectively with diverse teams",
    },
  ];

  return (
    <section className="w-full space-y-16">
      <div>
        <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-widest">
          Hard Skills
        </h3>
        <div className="h-1 w-16 bg-[#00FF00] mb-8"></div>

        <div className="space-y-8">
          {hardSkillsByCategory.map((category, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold text-[#00FF00] mb-4 uppercase tracking-wider">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-4 py-2 bg-[#0a0a0a] border border-gray-800 rounded-lg hover:border-[#00FF00]/50 transition-all duration-300 hover:bg-[#1a1a1a]"
                      title={skill.name}
                    >
                      <IconComponent
                        size={20}
                        className="text-gray-400 group-hover:text-[#00FF00] transition-colors duration-300"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-2 text-white uppercase tracking-widest">
          Soft Skills
        </h3>
        <div className="h-1 w-16 bg-[#00FF00] mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softSkills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={idx}
                className="group p-4 bg-[#0a0a0a] border border-gray-800 rounded-lg hover:border-[#00FF00]/50 transition-all duration-300 hover:bg-[#1a1a1a]"
              >
                <div className="flex items-start gap-3">
                  <IconComponent
                    size={24}
                    className="text-[#00FF00] shrink-0 mt-1 group-hover:drop-shadow-lg transition-all duration-300"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
