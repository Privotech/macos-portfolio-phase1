import React from "react";

const SkillsApp = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript / JavaScript", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      title: "Backend Engineering",
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "Python / Django", level: 80 },
        { name: "PostgreSQL / MongoDB", level: 75 },
        { name: "RESTful APIs / GraphQL", level: 85 },
      ],
    },
    {
      title: "Tools & Infrastructure",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker / Containers", level: 70 },
        { name: "AWS / Vercel / Netlify", level: 80 },
        { name: "Figma / UI Design", level: 85 },
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-[#1e1e1e] p-8 scrollbar-macos">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          Technical Proficiencies
        </h1>

        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                {category.title}
              </h2>

              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-white/90">
                        {skill.name}
                      </span>
                      <span className="text-white/50">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsApp;
