import React, { useEffect } from 'react';
import MenuBar from '../components/desktop/MenuBar';
import Dock from '../components/desktop/Dock';
import DesktopIcon from '../components/desktop/DesktopIcon';
import WindowContainer from '../components/window/WindowContainer';
import { apps } from '../data/apps';

const Desktop = () => {
  const desktopApps = apps.filter(app => app.isDesktop);

  useEffect(() => {
    const handleClickOutside = () => {
      // Deselect all icons logic here
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="desktop-wallpaper w-full h-full relative overflow-hidden flex flex-col">
      <MenuBar />
      
      {/* Desktop Icons Layout */}
      <div className="absolute top-10 right-4 z-10 flex flex-col items-center gap-6">
        {desktopApps.map((app) => (
          <DesktopIcon key={app.id} app={app} />
        ))}
      </div>

      <WindowContainer />

      <Dock />
    </div>
  );
};

export default Desktop;
