import React, { useState } from 'react';
import { 
  VscFiles, VscSearch, VscSourceControl, VscBug, VscExtensions, 
  VscSettingsGear, VscAccount, VscClose, VscChevronDown, VscChevronRight,
  VscTerminal, VscLayoutSidebarLeftOff, VscSplitHorizontal, VscCheck, VscBell
} from 'react-icons/vsc';
import { FaReact, FaJsSquare, FaCss3Alt, FaMarkdown } from 'react-icons/fa';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';

const VSCodeApp = () => {
  const [activeSidebar, setActiveSidebar] = useState('explorer'); 
  const [isBottomPanelOpen, setIsBottomPanelOpen] = useState(true);
  const [activeFile, setActiveFile] = useState('App.jsx');
  const [openFiles, setOpenFiles] = useState(['App.jsx', 'index.css', 'README.md']);
  const [files, setFiles] = useState({
    'App.jsx': {
      language: 'jsx',
      icon: <FaReact className="text-[#61dafb]" />,
      content: `import React, { useState, useEffect } from 'react';
import Desktop from './pages/Desktop';
import { useSettingsStore } from './store/settingsStore';

export default function App() {
  const theme = useSettingsStore(state => state.theme);
  
  
  return (
    <div className={\`app \${theme}\`}>
      <Desktop />
    </div>
  );
}`
    },
    'index.css': {
      language: 'css',
      icon: <FaCss3Alt className="text-[#42a5f5]" />,
      content: `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --macos-bg: #1e1e1e;
  --macos-surface: rgba(30, 30, 30, 0.85);
  --macos-accent: #0a84ff;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--macos-bg);
  color: #cccccc;
}`
    },
    'utils.js': {
      language: 'javascript',
      icon: <FaJsSquare className="text-[#fbc02d]" />,
      content: `export const formatTime = (date) => {
  return date.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

export const clamp = (val, min, max) => {
  return Math.min(Math.max(val, min), max);
};`
    },
    'README.md': {
      language: 'javascript', 
      icon: <FaMarkdown className="text-[#42a5f5]" />,
      content: `# Portfolio OS\n\nWelcome to my macOS-style portfolio.\nThis is a fully functional web-based desktop environment.`
    }
  });

  const handleContentChange = (newContent) => {
    setFiles(prev => ({
      ...prev,
      [activeFile]: {
        ...prev[activeFile],
        content: newContent
      }
    }));
  };

  const highlightCode = (code) => {
    const lang = files[activeFile].language;
    return Prism.highlight(
      code,
      Prism.languages[lang] || Prism.languages.javascript,
      lang
    );
  };

  const toggleFile = (fileName) => {
    if (!openFiles.includes(fileName)) {
      setOpenFiles([...openFiles, fileName]);
    }
    setActiveFile(fileName);
  };

  const closeFile = (e, fileName) => {
    e.stopPropagation();
    const newOpen = openFiles.filter(f => f !== fileName);
    setOpenFiles(newOpen);
    if (activeFile === fileName) {
      setActiveFile(newOpen.length > 0 ? newOpen[newOpen.length - 1] : null);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#1e1e1e] text-[#cccccc] font-sans selection:bg-[#264f78]">
      <style>{`
        pre[class*="language-"] {
          background: transparent !important;
          margin: 0 !important;
        }
        .container__editor textarea:focus {
          outline: none;
        }
      `}</style>

      
      <div className="flex h-[30px] items-center px-2 bg-[#3c3c3c] border-b border-[#2d2d2d] text-[13px] flex-shrink-0 cursor-default select-none">
        <div className="flex space-x-4 ml-2">
          <span className="cursor-pointer hover:text-white">File</span>
          <span className="cursor-pointer hover:text-white">Edit</span>
          <span className="cursor-pointer hover:text-white">Selection</span>
          <span className="cursor-pointer hover:text-white">View</span>
          <span className="cursor-pointer hover:text-white">Go</span>
          <span className="cursor-pointer hover:text-white">Run</span>
          <span className="cursor-pointer hover:text-white">Terminal</span>
          <span className="cursor-pointer hover:text-white">Help</span>
        </div>
        <div className="mx-auto font-medium text-[12px] opacity-80">
          Privotech Portfolio - Visual Studio Code
        </div>
      </div>

      
      <div className="flex-1 flex overflow-hidden">
        
        
        <div className="w-12 bg-[#333333] flex flex-col items-center py-2 flex-shrink-0 justify-between">
          <div className="flex flex-col w-full">
            <div onClick={() => setActiveSidebar(activeSidebar === 'explorer' ? null : 'explorer')} className={`w-full aspect-square flex items-center justify-center cursor-pointer ${activeSidebar === 'explorer' ? 'border-l-2 border-blue-500 text-white' : 'border-l-2 border-transparent text-[#858585] hover:text-white'}`}>
              <VscFiles className="text-[24px]" />
            </div>
            <div onClick={() => setActiveSidebar(activeSidebar === 'search' ? null : 'search')} className={`w-full aspect-square flex items-center justify-center cursor-pointer ${activeSidebar === 'search' ? 'border-l-2 border-blue-500 text-white' : 'border-l-2 border-transparent text-[#858585] hover:text-white'}`}>
              <VscSearch className="text-[24px]" />
            </div>
            <div onClick={() => setActiveSidebar(activeSidebar === 'git' ? null : 'git')} className={`w-full aspect-square flex items-center justify-center cursor-pointer ${activeSidebar === 'git' ? 'border-l-2 border-blue-500 text-white' : 'border-l-2 border-transparent text-[#858585] hover:text-white'}`}>
              <VscSourceControl className="text-[24px]" />
            </div>
            <div className={`w-full aspect-square flex items-center justify-center cursor-pointer border-l-2 border-transparent text-[#858585] hover:text-white`}>
              <VscBug className="text-[24px]" />
            </div>
            <div className={`w-full aspect-square flex items-center justify-center cursor-pointer border-l-2 border-transparent text-[#858585] hover:text-white`}>
              <VscExtensions className="text-[24px]" />
            </div>
          </div>
          <div className="flex flex-col w-full mb-2">
            <div className={`w-full aspect-square flex items-center justify-center cursor-pointer border-l-2 border-transparent text-[#858585] hover:text-white`}>
              <VscAccount className="text-[24px]" />
            </div>
            <div className={`w-full aspect-square flex items-center justify-center cursor-pointer border-l-2 border-transparent text-[#858585] hover:text-white`}>
              <VscSettingsGear className="text-[24px]" />
            </div>
          </div>
        </div>

        
        {activeSidebar && (
          <div className="w-[250px] bg-[#252526] flex flex-col flex-shrink-0">
            {activeSidebar === 'explorer' && (
              <>
                <div className="text-[11px] uppercase px-5 py-3 font-medium tracking-wide">Explorer</div>
                <div className="flex-1 overflow-y-auto">
                  <div className="flex items-center gap-1 px-2 py-1 cursor-pointer font-bold text-[12px] uppercase hover:bg-[#2a2d2e]">
                    <VscChevronDown className="text-[14px]" /> PORTFOLIO
                  </div>
                  <div className="ml-2 flex flex-col mt-1">
                    <div className="flex items-center gap-1.5 px-3 py-1 cursor-pointer hover:bg-[#2a2d2e]">
                      <VscChevronDown className="text-[14px]" />
                      <FaFolderOpen className="text-blue-300" />
                      <span className="text-[13px]">src</span>
                    </div>
                    <div className="ml-6 flex flex-col">
                      {Object.keys(files).map(file => (
                        <div 
                          key={file}
                          onClick={() => toggleFile(file)}
                          className={`flex items-center gap-2 px-2 py-1 cursor-pointer ${
                            activeFile === file ? 'bg-[#37373d] text-white' : 'hover:bg-[#2a2d2e]'
                          }`}
                        >
                          {files[file].icon}
                          <span className="text-[13px]">{file}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeSidebar === 'search' && (
              <div className="p-4">
                <div className="text-[11px] uppercase font-medium tracking-wide mb-4">Search</div>
                <input type="text" placeholder="Search" className="w-full bg-[#3c3c3c] border border-[#3c3c3c] focus:border-blue-500 rounded-sm px-2 py-1 outline-none text-[13px] text-[#cccccc]" />
                <input type="text" placeholder="Replace" className="w-full bg-[#3c3c3c] border border-[#3c3c3c] focus:border-blue-500 rounded-sm px-2 py-1 outline-none text-[13px] text-[#cccccc] mt-2" />
              </div>
            )}
            {activeSidebar === 'git' && (
              <div className="p-4">
                <div className="text-[11px] uppercase font-medium tracking-wide mb-4">Source Control</div>
                <div className="text-[13px] text-[#cccccc]">0 pending changes.</div>
              </div>
            )}
          </div>
        )}

        
        <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e] border-l border-[#252526]">
          
          
          {openFiles.length > 0 ? (
            <div className="flex h-[35px] bg-[#2d2d2d] overflow-x-auto custom-scrollbar flex-shrink-0">
              {openFiles.map(file => (
                <div 
                  key={file}
                  onClick={() => setActiveFile(file)}
                  className={`flex items-center gap-2 px-3 py-1.5 min-w-[120px] max-w-[180px] border-r border-[#252526] border-t-2 cursor-pointer group ${
                    activeFile === file ? 'bg-[#1e1e1e] border-t-blue-500 text-white' : 'bg-[#2d2d2d] border-t-transparent text-[#969696] hover:bg-[#2b2b2b]'
                  }`}
                >
                  {files[file]?.icon}
                  <span className="text-[13px] truncate flex-1">{file}</span>
                  <div onClick={(e) => closeFile(e, file)} className={`flex items-center justify-center w-5 h-5 rounded hover:bg-[#333333] ${activeFile === file ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <VscClose className="text-[14px]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-[35px] bg-[#2d2d2d] border-b border-[#252526]" />
          )}

          
          {activeFile && (
            <div className="flex items-center h-[22px] px-4 text-[12px] bg-[#1e1e1e] text-[#cccccc] flex-shrink-0 shadow-sm z-10">
              <span className="hover:underline cursor-pointer">macOS-Portfolio</span>
              <VscChevronRight className="mx-1" />
              <span className="hover:underline cursor-pointer">src</span>
              <VscChevronRight className="mx-1" />
              {files[activeFile]?.icon}
              <span className="ml-1 text-[#cccccc]">{activeFile}</span>
            </div>
          )}

          
          <div className="flex-1 flex overflow-hidden bg-[#1e1e1e] relative">
            {activeFile ? (
              <div className="flex-1 overflow-auto bg-[#1e1e1e] pt-2 pl-4 pr-16 font-mono text-[14px]">
                 <Editor
                  value={files[activeFile].content}
                  onValueChange={handleContentChange}
                  highlight={highlightCode}
                  padding={10}
                  className="container__editor min-h-full"
                  style={{
                    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                    fontSize: 14,
                    backgroundColor: 'transparent',
                    lineHeight: '1.5'
                  }}
                />
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="w-64 h-64 opacity-10 flex flex-col items-center justify-center">
                  <VscTerminal className="w-32 h-32 mb-4" />
                </div>
              </div>
            )}
            
            {activeFile && (
              <div className="w-16 bg-[#1e1e1e] border-l border-[#2d2d2d] absolute right-0 top-0 bottom-0 pointer-events-none opacity-50 flex justify-center pt-4 overflow-hidden">
                 <div className="w-8 h-32 bg-white/20 rounded-[1px] absolute top-2 right-4"></div>
              </div>
            )}
          </div>

          
          {isBottomPanelOpen && (
            <div className="h-[200px] bg-[#1e1e1e] border-t border-[#3c3c3c] flex flex-col flex-shrink-0">
              <div className="flex items-center justify-between px-4 h-[35px] cursor-default">
                <div className="flex space-x-6 text-[11px] uppercase tracking-wide">
                  <span className="text-[#858585] hover:text-[#cccccc] cursor-pointer">Problems</span>
                  <span className="text-[#858585] hover:text-[#cccccc] cursor-pointer">Output</span>
                  <span className="text-[#858585] hover:text-[#cccccc] cursor-pointer">Debug Console</span>
                  <span className="text-white border-b border-white pb-1 cursor-pointer">Terminal</span>
                </div>
                <div className="flex space-x-2 text-[#cccccc]">
                  <VscSplitHorizontal className="cursor-pointer hover:text-white" />
                  <VscClose onClick={() => setIsBottomPanelOpen(false)} className="cursor-pointer hover:text-white" />
                </div>
              </div>
              <div className="flex-1 p-4 font-mono text-[13px] text-[#cccccc] overflow-y-auto">
                <div className="text-green-500 mb-1">privotech@macbook portfolio % <span className="text-white">npm run dev</span></div>
                <div className="text-blue-400">VITE v5.4.21  ready in 250 ms</div>
                <br/>
                <div className="text-white">    Local:   <a href="#" className="text-blue-400 underline hover:text-blue-300">http://localhost:5173/</a></div>
                <div className="text-white">    Network: use --host to expose</div>
                <div className="text-[#858585] mt-1">    press h + enter to show help</div>
              </div>
            </div>
          )}
        </div>
      </div>

      
      <div className="h-[22px] bg-[#007acc] text-white flex items-center px-2 text-[12px] justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer transition-colors"><VscSourceControl className="text-[14px]" /> main</span>
          <span className="flex items-center gap-1 hover:bg-white/20 px-1 rounded cursor-pointer transition-colors"><VscClose className="text-[12px]" /> 0 <VscBug className="text-[12px] ml-1" /> 0</span>
        </div>
        <div className="flex items-center gap-3">
          <span onClick={() => setIsBottomPanelOpen(!isBottomPanelOpen)} className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors"><VscLayoutSidebarLeftOff className="text-[14px]" /></span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors">UTF-8</span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors">CRLF</span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors">
            {activeFile ? (files[activeFile]?.language === 'jsx' ? 'JavaScript React' : files[activeFile]?.language === 'css' ? 'CSS' : 'JavaScript') : 'Plain Text'}
          </span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors"><VscCheck className="text-[14px]" /> Prettier</span>
          <span className="hover:bg-white/20 px-1 rounded cursor-pointer transition-colors"><VscBell className="text-[14px]" /></span>
        </div>
      </div>
    </div>
  );
};

export default VSCodeApp;
