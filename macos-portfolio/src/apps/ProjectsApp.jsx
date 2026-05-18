import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsApp = () => {
  const projects = [
    {
      title: "macOS Portfolio",
      description:
        "A web-based simulation of macOS built with React, Tailwind CSS, and Framer Motion.",
      tags: ["React", "Tailwind", "Zustand", "Framer Motion"],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack scalable e-commerce solution with real-time inventory and payment processing.",
      tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent conversational interface utilizing advanced LLMs to help users draft emails and code.",
      tags: ["OpenAI", "React", "Express", "MongoDB"],
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Financial Dashboard",
      description:
        "Real-time crypto and stock market tracking dashboard with beautiful data visualizations.",
      tags: ["Vue", "D3.js", "Firebase", "Tailwind"],
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <div className="w-full h-full bg-[#1e1e1e] overflow-y-auto p-8 scrollbar-macos">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-3">My Projects</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            A selection of my recent work. These projects demonstrate my
            expertise in building scalable, performant, and beautiful
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group hover:shadow-2xl hover:shadow-black/50"
            >
              <div
                className={`h-32 w-full bg-gradient-to-r ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
              >
                <span className="text-4xl text-white font-bold opacity-30">
                  {project.title.substring(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 mb-6 min-h-[40px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-md border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-white/10 pt-4">
                  <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                    <FaGithub /> Source Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    <FaExternalLinkAlt /> Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsApp;
