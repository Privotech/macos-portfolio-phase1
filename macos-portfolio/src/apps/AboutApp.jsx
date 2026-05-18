import React from "react";

const AboutApp = () => {
  return (
    <div className="w-full h-full p-8 overflow-y-auto scrollbar-macos">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/5 p-6 rounded-2xl border border-white/10">
          <img
            src="/privotech.png"
            alt="Privotech"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white/10"
          />
          <div className="space-y-4 text-center md:text-left">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Privotech
              </h1>
              <p className="text-blue-400 font-medium mt-1">
                Software Engineer & UI Designer
              </p>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              I specialize in building immersive web experiences, robust
              applications, and scalable systems. My passion lies in combining
              beautiful design with highly functional, performant code.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">
              Experience
            </h3>
            <p className="text-white font-medium">
              5+ Years developing full-stack solutions.
            </p>
          </div>
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">
              Location
            </h3>
            <p className="text-white font-medium">Global / Remote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
