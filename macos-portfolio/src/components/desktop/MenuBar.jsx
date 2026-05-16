import React, { useState, useEffect } from 'react';
import { FaApple, FaWifi, FaBatteryFull, FaSearch } from 'react-icons/fa';
import { useWindowStore } from '../../store/windowStore';

const MenuBar = () => {
  const [time, setTime] = useState(new Date());
  
  const activeWindowId = useWindowStore(state => state.activeWindowId);
  const windows = useWindowStore(state => state.windows);
  
  const activeWindow = windows.find(w => w.id === activeWindowId);
  const activeAppName = activeWindow ? activeWindow.title : 'Finder';

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="w-full h-7 glass-menubar flex items-center justify-between px-4 text-xs font-medium text-macos z-50 fixed top-0 left-0 right-0">
      <div className="flex items-center space-x-4">
        <div className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
          <FaApple className="text-[14px]" />
        </div>
        <div className="cursor-pointer font-bold hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
          {activeAppName}
        </div>
        <div className="hidden sm:flex items-center space-x-1">
          {['File', 'Edit', 'View', 'Go', 'Window', 'Help'].map((item) => (
            <div key={item} className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <FaBatteryFull className="text-[14px]" />
          <FaWifi className="text-[14px]" />
          <FaSearch className="text-[14px]" />
        </div>
        <div className="cursor-pointer hover:bg-white/10 px-2 py-0.5 rounded transition-colors flex space-x-2">
          <span>{formatDate(time)}</span>
          <span>{formatTime(time)}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
