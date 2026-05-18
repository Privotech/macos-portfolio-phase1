import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '../../store/windowStore';
import { useSettingsStore } from '../../store/settingsStore';
import WindowContent from './WindowContent';

const Window = ({ windowState }) => {
  const { id, title, isMinimized, isMaximized, zIndex } = windowState;
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, activeWindowId } = useWindowStore();
  const animationsEnabled = useSettingsStore(state => state.animationsEnabled);
  
  const nodeRef = useRef(null);
  const isActive = activeWindowId === id;

  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 800, height: 500 });

  useEffect(() => {
    const offset = (zIndex - 10) * 20;
    setPosition({ x: 50 + offset, y: 50 + offset });
  }, [id, zIndex]);

  const handleDrag = (e, ui) => {
    setPosition({ x: ui.x, y: ui.y });
  };

  const handleDragStart = () => {
    focusWindow(id);
  };

  const windowStyle = isMaximized
    ? { top: 28, left: 0, width: '100vw', height: 'calc(100vh - 28px - 70px)' }
    : { width: `min(${size.width}px, 100vw)`, height: `min(${size.height}px, calc(100vh - 28px - 70px))` };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-handle"
      bounds="parent"
      position={isMaximized ? { x: 0, y: 0 } : position}
      onStart={handleDragStart}
      onDrag={handleDrag}
      disabled={isMaximized}
    >
      <div 
        ref={nodeRef} 
        className="absolute pointer-events-auto"
        style={{
          zIndex,
          ...windowStyle,
          display: isMinimized ? 'none' : 'block' 
        }}
        onMouseDown={() => focusWindow(id)}
      >
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: animationsEnabled ? 0.2 : 0 }}
              className={`w-full h-full glass-window rounded-xl shadow-2xl flex flex-col overflow-hidden border border-white/10 ${
                isActive ? 'shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'opacity-95'
              }`}
              style={{
                resize: isMaximized ? 'none' : 'both',
                minWidth: '300px',
                minHeight: '200px'
              }}
            >
          <div className="window-handle h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 select-none relative"
               onDoubleClick={() => maximizeWindow(id)}>
            <div className="flex space-x-2 absolute left-4 z-10 group">
              <button 
                onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                className="w-3 h-3 rounded-full bg-[#ff5f56] flex items-center justify-center border border-black/10"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black leading-none pb-px"></span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
                className="w-3 h-3 rounded-full bg-[#ffbd2e] flex items-center justify-center border border-black/10"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[10px] text-black leading-none pb-px"></span>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }}
                className="w-3 h-3 rounded-full bg-[#27c93f] flex items-center justify-center border border-black/10"
              >
                 <span className="opacity-0 group-hover:opacity-100 text-[10px] text-black leading-none font-bold pb-px">+</span>
              </button>
            </div>
            <div className="flex-1 text-center text-sm font-semibold text-gray-200">
              {title}
            </div>
          </div>
          <div className="flex-1 overflow-hidden relative rounded-b-xl">
            <WindowContent id={id} title={title} />
          </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Draggable>
  );
};

export default Window;
