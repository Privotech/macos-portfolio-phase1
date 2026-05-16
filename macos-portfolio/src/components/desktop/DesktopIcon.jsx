import React, { useState } from 'react';
import { useWindowStore } from '../../store/windowStore';

const DesktopIcon = ({ app }) => {
  const [isSelected, setIsSelected] = useState(false);
  const openWindow = useWindowStore((state) => state.openWindow);

  const handleSelect = (e) => {
    e.stopPropagation();
    setIsSelected(true);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    openWindow(app.id, app.title);
  };

  return (
    <div
      className={`w-24 h-24 flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-colors ${
        isSelected ? 'bg-white/20 border border-white/20' : 'hover:bg-white/10'
      }`}
      onClick={handleSelect}
      onDoubleClick={handleDoubleClick}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-1 drop-shadow-md">
        {app.icon}
      </div>
      <span className={`text-white text-xs font-medium text-center drop-shadow-md truncate w-full px-1 py-0.5 rounded ${isSelected ? 'bg-blue-500' : ''}`}>
        {app.title}
      </span>
    </div>
  );
};

export default DesktopIcon;
