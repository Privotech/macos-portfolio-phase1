import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
  FaPlus,
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

const SafariApp = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: "macOS Portfolio",
      domain: "portfolio.privotech.dev",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop",
      description:
        "A web-based simulation of the macOS desktop environment. It features a fully functional window management system, draggable applications, and an interactive dock with magnification effects.",
      stack: ["React", "Tailwind CSS", "Framer Motion", "Zustand", "Vite"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Platform",
      domain: "shop.privotech.dev",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      description:
        "A comprehensive e-commerce solution with a custom shopping cart, Stripe payment integration, real-time inventory management, and an administrative dashboard.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe API"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Chat Assistant",
      domain: "ai.privotech.dev",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      description:
        "An intelligent conversational interface utilizing advanced LLMs to help users draft emails, generate code snippets, and answer technical questions in real-time.",
      stack: ["React", "Express", "OpenAI API", "MongoDB"],
      github: "#",
      demo: "#",
    },
  ];

  const currentProject = projects[activeTab];

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      <div className="h-10 bg-[#e5e5ea] border-b border-gray-300 flex items-end px-2 gap-1 pt-2 flex-shrink-0">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`relative px-4 py-1.5 rounded-t-lg border border-b-0 border-gray-300 flex items-center justify-between min-w-[150px] max-w-[200px] cursor-pointer transition-colors ${
              activeTab === idx
                ? "bg-white z-10"
                : "bg-[#d1d1d6] hover:bg-[#e5e5ea] text-gray-600"
            }`}
          >
            <span className="text-xs font-medium truncate">{proj.title}</span>
            <FaTimes className="text-[10px] ml-2 opacity-50 hover:opacity-100" />

            {activeTab === idx && (
              <div className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-white"></div>
            )}
          </div>
        ))}
        <div className="w-8 h-7 flex items-center justify-center text-gray-500 hover:bg-[#d1d1d6] rounded-md cursor-pointer ml-1 mb-1">
          <FaPlus className="text-xs" />
        </div>
      </div>

      <div className="h-12 bg-[#f5f5f7] border-b border-gray-300 flex items-center px-4 gap-4 flex-shrink-0">
        <div className="flex space-x-3 text-gray-400">
          <FaChevronLeft className="text-sm cursor-not-allowed" />
          <FaChevronRight className="text-sm cursor-not-allowed" />
        </div>
        <div className="flex-1 max-w-2xl mx-auto flex items-center bg-white rounded-md border border-gray-200 px-3 py-1.5 shadow-sm text-sm text-gray-700 transition-all">
          <FaShieldAlt className="text-gray-400 mr-2 text-xs" />
          <span className="flex-1 text-center font-medium">
            {currentProject.domain}
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col items-center">
        <div
          key={activeTab}
          className="w-full max-w-4xl p-8 animate-[fadeIn_0.4s_ease-out]"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="w-full h-64 sm:h-80 relative overflow-hidden group">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h1 className="absolute bottom-6 left-8 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {currentProject.title}
              </h1>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">
                    Overview
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                <div className="w-full md:w-64 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-md border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">
                      Links
                    </h3>
                    <div className="space-y-3">
                      <a
                        href={currentProject.demo}
                        className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors text-sm shadow-md"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                      <a
                        href={currentProject.github}
                        className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-lg transition-colors text-sm shadow-md"
                      >
                        <FaGithub /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariApp;
