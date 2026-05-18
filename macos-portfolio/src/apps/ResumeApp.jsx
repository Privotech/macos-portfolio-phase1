import React from 'react';
import { FaDownload, FaPrint, FaSearchMinus, FaSearchPlus } from 'react-icons/fa';

const ResumeApp = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#323639]">
      <div className="h-12 bg-[#323639] border-b border-black/50 flex items-center justify-between px-4 text-white/80 flex-shrink-0 shadow-md z-10">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-sm">Privotech_Resume.pdf</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <FaSearchMinus className="cursor-pointer hover:text-white" />
            <span className="text-xs">100%</span>
            <FaSearchPlus className="cursor-pointer hover:text-white" />
          </div>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="flex gap-4">
            <FaPrint className="cursor-pointer hover:text-white" />
            <FaDownload className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-8 flex justify-center">
        <div className="bg-white w-full max-w-[800px] min-h-[1131px] shadow-2xl text-black p-12 select-text">
          <header className="border-b-2 border-gray-800 pb-6 mb-6">
            <h1 className="text-4xl font-bold uppercase tracking-widest text-gray-900 mb-2">Privotech</h1>
            <h2 className="text-xl text-blue-600 font-medium">Software Engineer</h2>
            <div className="flex gap-4 mt-4 text-sm text-gray-600 font-medium">
              <span>hello@privotech.dev</span>
              <span></span>
              <span>github.com/privotech</span>
              <span></span>
              <span>Remote / Global</span>
            </div>
          </header>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 uppercase mb-3 border-b border-gray-200 pb-1">Summary</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              Creative and detail-oriented Software Engineer with a passion for crafting highly interactive and beautifully designed user interfaces. Specializing in React, modern JavaScript, and system architecture. Proven ability to build scalable web applications from scratch while maintaining exceptional code quality.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 uppercase mb-4 border-b border-gray-200 pb-1">Experience</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-gray-900">Senior Frontend Developer</h4>
                <span className="text-sm font-semibold text-gray-600">2021  Present</span>
              </div>
              <div className="text-sm text-blue-600 font-medium mb-2">Tech Solutions Inc.</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
                <li>Spearheaded the development of a flagship SaaS product using React and Redux, improving user retention by 40%.</li>
                <li>Mentored a team of 5 junior developers, conducting code reviews and establishing best practices.</li>
                <li>Reduced load times by 60% through aggressive code splitting and asset optimization.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-gray-900">Web Developer</h4>
                <span className="text-sm font-semibold text-gray-600">2018  2021</span>
              </div>
              <div className="text-sm text-blue-600 font-medium mb-2">Creative Digital Agency</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-700 space-y-1">
                <li>Developed and deployed over 20 custom client websites using Vue.js, React, and standard web technologies.</li>
                <li>Collaborated closely with the design team to ensure pixel-perfect implementation of UI/UX designs.</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-800 uppercase mb-3 border-b border-gray-200 pb-1">Education</h3>
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-bold text-gray-900">B.S. Computer Science</h4>
              <span className="text-sm font-semibold text-gray-600">2014  2018</span>
            </div>
            <div className="text-sm text-gray-700">University of Technology</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeApp;
