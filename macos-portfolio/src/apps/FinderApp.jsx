import React, { useState } from 'react';
import { FaUser, FaCode, FaFileAlt, FaBriefcase, FaCertificate, FaImage, FaChevronLeft, FaChevronRight, FaFolder } from 'react-icons/fa';

const FinderApp = () => {
  const [activeSection, setActiveSection] = useState('About Me');
  const [selectedFile, setSelectedFile] = useState(null);

  const sections = [
    { name: 'About Me', icon: <FaUser className="text-blue-400" /> },
    { name: 'Skills', icon: <FaCode className="text-orange-400" /> },
    { name: 'Experience', icon: <FaBriefcase className="text-gray-400" /> },
    { name: 'Certificates', icon: <FaCertificate className="text-yellow-400" /> },
    { name: 'Resume', icon: <FaFileAlt className="text-red-400" /> },
  ];

  const fileSystem = {
    'About Me': [
      { name: 'profile.png', type: 'image', content: '/privotech.png', desc: 'Profile Picture' },
      { name: 'bio.txt', type: 'text', content: "Hi! I'm Privotech, a passionate Software Engineer and UI Designer dedicated to building robust and beautiful web experiences.", desc: 'Short Biography' }
    ],
    'Skills': [
      { name: 'frontend.json', type: 'code', content: '{\n  "React": "Expert",\n  "Tailwind": "Expert",\n  "Framer Motion": "Advanced"\n}', desc: 'Frontend Frameworks' },
      { name: 'backend.json', type: 'code', content: '{\n  "Node.js": "Advanced",\n  "Python": "Intermediate",\n  "PostgreSQL": "Advanced"\n}', desc: 'Backend Technologies' }
    ],
    'Experience': [
      { name: 'tech_solutions_inc.md', type: 'text', content: '# Senior Frontend Developer\n**2021 - Present**\n- Led development of core SaaS platform.\n- Mentored junior devs.', desc: 'Current Role' },
      { name: 'creative_agency.md', type: 'text', content: '# Web Developer\n**2018 - 2021**\n- Built 20+ custom client websites.\n- Specialized in React and Vue.', desc: 'Previous Role' }
    ],
    'Certificates': [
      { name: 'aws_certified.png', type: 'image', content: 'https://images.unsplash.com/photo-1523289217630-0dd16184af8e?w=400&h=300&fit=crop', desc: 'AWS Solutions Architect' },
      { name: 'meta_frontend.png', type: 'image', content: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop', desc: 'Meta Professional Certificate' }
    ],
    'Resume': [
      { name: 'privotech_resume.pdf', type: 'pdf', content: 'View full resume to see comprehensive details of my career history, education, and technical expertise.', desc: 'Official PDF Resume' }
    ]
  };

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
    setSelectedFile(null); 
  };

  const currentFiles = fileSystem[activeSection] || [];

  return (
    <div className="w-full h-full flex bg-[#1e1e1e] text-white overflow-hidden">
      
      
      <div className="w-48 bg-white/5 border-r border-white/10 flex flex-col py-2 flex-shrink-0">
        <div className="px-4 py-2 text-xs font-semibold text-white/50 mb-1">Favorites</div>
        {sections.map(section => (
          <div 
            key={section.name} 
            onClick={() => handleSectionClick(section.name)}
            className={`px-4 py-1.5 text-sm font-medium cursor-pointer flex items-center gap-2 mx-2 rounded-md transition-colors ${
              activeSection === section.name ? 'bg-blue-500/80 text-white' : 'hover:bg-white/10'
            }`}
          >
            {section.icon}
            {section.name}
          </div>
        ))}
      </div>

      
      <div className="flex-1 flex flex-col bg-[#1e1e1e]">
        
        <div className="h-12 border-b border-white/10 flex items-center px-4 bg-white/5 gap-4">
           <div className="flex text-white/40 gap-3">
             <FaChevronLeft className="cursor-pointer hover:text-white transition-colors" />
             <FaChevronRight className="cursor-not-allowed opacity-50" />
           </div>
           <div className="text-sm font-semibold text-white/80">{activeSection}</div>
        </div>
        
        
        <div className="flex-1 flex overflow-hidden">
          
          
          <div className="flex-1 p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 content-start overflow-y-auto">
            {currentFiles.map((file, idx) => {
              const isSelected = selectedFile?.name === file.name;
              return (
                <div 
                  key={idx} 
                  onClick={() => setSelectedFile(file)}
                  className={`flex flex-col items-center gap-2 cursor-pointer group p-3 rounded-lg transition-colors ${
                    isSelected ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="w-16 h-16 flex items-center justify-center">
                    {file.type === 'image' ? <FaImage className="text-5xl text-blue-300 drop-shadow-md" /> :
                     file.type === 'code' ? <FaCode className="text-5xl text-yellow-300 drop-shadow-md" /> :
                     file.type === 'pdf' ? <FaFileAlt className="text-5xl text-red-400 drop-shadow-md" /> :
                     <FaFileAlt className="text-5xl text-white/80 drop-shadow-md" />}
                  </div>
                  <span className={`text-xs text-center font-medium px-1.5 py-0.5 rounded truncate w-full ${
                    isSelected ? 'bg-blue-500 text-white' : 'group-hover:bg-blue-500/50 text-white/80'
                  }`}>
                    {file.name}
                  </span>
                </div>
              );
            })}
          </div>

          
          {selectedFile && (
            <div className="w-64 bg-white/5 border-l border-white/10 p-6 flex flex-col items-center overflow-y-auto">
              {selectedFile.type === 'image' ? (
                <img src={selectedFile.content} alt={selectedFile.name} className="w-32 h-32 object-cover rounded-xl shadow-lg mb-4 border border-white/10" />
              ) : (
                <div className="w-32 h-32 bg-white/10 rounded-xl shadow-lg mb-4 flex items-center justify-center border border-white/10">
                  {selectedFile.type === 'code' ? <FaCode className="text-5xl text-yellow-300" /> : <FaFileAlt className="text-5xl text-white/50" />}
                </div>
              )}
              <h3 className="text-lg font-bold text-center mb-1 truncate w-full">{selectedFile.name}</h3>
              <p className="text-xs text-white/50 mb-6 text-center">{selectedFile.desc}</p>
              <div className="w-full text-sm text-white/80 bg-black/30 p-4 rounded-lg border border-white/5 whitespace-pre-wrap">
                {selectedFile.content.length > 200 && selectedFile.type !== 'image' 
                  ? selectedFile.content.substring(0, 200) + '...' 
                  : selectedFile.type !== 'image' ? selectedFile.content : 'Image Preview'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinderApp;
