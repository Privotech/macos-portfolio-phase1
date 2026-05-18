import React, { useEffect } from "react";
import MenuBar from "../components/desktop/MenuBar";
import Dock from "../components/desktop/Dock";
import DesktopIcon from "../components/desktop/DesktopIcon";
import WindowContainer from "../components/window/WindowContainer";
import { apps } from "../data/apps";
import { useSettingsStore } from "../store/settingsStore";

const Desktop = () => {
  const desktopApps = apps.filter((app) => app.isDesktop);
  const wallpaper = useSettingsStore((state) => state.wallpaper);

  useEffect(() => {
    const handleClickOutside = () => {};
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col transition-all duration-700 ease-in-out"
      style={{ background: `var(--${wallpaper})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(120,80,255,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(0,120,255,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_50%_80%,rgba(0,200,150,0.08)_0%,transparent_50%)] pointer-events-none z-0"></div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <MenuBar />

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
