import React, { useState } from "react";
import {
  FaWifi,
  FaBluetooth,
  FaPaintBrush,
  FaUserCircle,
  FaVolumeUp,
  FaDesktop,
  FaBatteryFull,
  FaMagic,
} from "react-icons/fa";
import { useSettingsStore } from "../store/settingsStore";

const SettingsApp = () => {
  const [activeTab, setActiveTab] = useState("Appearance");

  const {
    wallpaper,
    theme,
    accentColor,
    animationsEnabled,
    setWallpaper,
    setTheme,
    setAccentColor,
    setAnimationsEnabled,
  } = useSettingsStore();

  const sidebarGroups = [
    {
      items: [
        {
          id: "Wi-Fi",
          icon: <FaWifi className="text-white" />,
          color: "bg-blue-500",
        },
        {
          id: "Bluetooth",
          icon: <FaBluetooth className="text-white" />,
          color: "bg-blue-500",
        },
        {
          id: "Network",
          icon: <FaWifi className="text-white" />,
          color: "bg-blue-500",
        },
      ],
    },
    {
      items: [
        {
          id: "Appearance",
          icon: <FaPaintBrush className="text-white" />,
          color: "bg-indigo-500",
        },
        {
          id: "Wallpaper",
          icon: <FaDesktop className="text-white" />,
          color: "bg-teal-500",
        },
        {
          id: "Animations",
          icon: <FaMagic className="text-white" />,
          color: "bg-purple-500",
        },
        {
          id: "Sound",
          icon: <FaVolumeUp className="text-white" />,
          color: "bg-pink-500",
        },
        {
          id: "Battery",
          icon: <FaBatteryFull className="text-white" />,
          color: "bg-green-500",
        },
      ],
    },
  ];

  return (
    <div
      className={`w-full h-full flex transition-colors ${theme === "dark" ? "bg-[#1e1e1e] text-gray-200" : "bg-white text-gray-800"}`}
    >
      <div
        className={`w-64 border-r flex flex-col transition-colors ${theme === "dark" ? "border-white/10 bg-white/5" : "border-gray-200 bg-gray-50"}`}
      >
        <div className="p-4 pb-2">
          <input
            type="text"
            placeholder="Search"
            className={`w-full border rounded-md px-3 py-1 text-sm outline-none transition-colors ${theme === "dark" ? "bg-black/20 border-white/10 focus:border-blue-500" : "bg-gray-200 border-transparent focus:border-blue-500"}`}
          />
        </div>

        <div
          className={`px-3 pb-3 border-b mx-2 transition-colors ${theme === "dark" ? "border-white/10" : "border-gray-200"}`}
        >
          <div
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${theme === "dark" ? "hover:bg-white/10" : "hover:bg-gray-200"}`}
          >
            <FaUserCircle className="text-3xl text-gray-400" />
            <div>
              <div className="text-sm font-semibold">Privotech</div>
              <div
                className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
              >
                Apple ID, iCloud, Media
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-2 space-y-4">
          {sidebarGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
                    activeTab === item.id
                      ? "bg-blue-500 text-white"
                      : theme === "dark"
                        ? "hover:bg-white/10"
                        : "hover:bg-gray-200"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded flex items-center justify-center text-xs ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.id}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex-1 p-8 transition-colors ${theme === "dark" ? "bg-transparent" : "bg-[#f5f5f7]"}`}
      >
        <h1 className="text-2xl font-bold mb-6">{activeTab}</h1>

        {activeTab === "Appearance" && (
          <div className="space-y-6 max-w-lg">
            <div
              className={`border rounded-xl p-4 flex justify-around transition-colors ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}
            >
              <div
                className="flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => setTheme("light")}
              >
                <div
                  className={`w-16 h-12 bg-gray-100 border-2 rounded-md flex overflow-hidden transition-all ${theme === "light" ? "border-blue-500 scale-110" : "border-transparent"}`}
                >
                  <div className="w-1/3 bg-gray-200"></div>
                  <div className="flex-1 bg-white"></div>
                </div>
                <span className="text-xs font-medium">Light</span>
              </div>
              <div
                className="flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => setTheme("dark")}
              >
                <div
                  className={`w-16 h-12 bg-[#1e1e1e] border-2 rounded-md flex overflow-hidden transition-all ${theme === "dark" ? "border-blue-500 scale-110" : "border-transparent"}`}
                >
                  <div className="w-1/3 bg-black/40"></div>
                  <div className="flex-1 bg-[#2d2d2d]"></div>
                </div>
                <span className="text-xs font-medium">Dark</span>
              </div>
            </div>

            <div
              className={`border rounded-xl divide-y transition-colors ${theme === "dark" ? "bg-white/5 border-white/10 divide-white/10" : "bg-white border-gray-200 divide-gray-200"}`}
            >
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm">Accent color</span>
                <div className="flex gap-2">
                  {[
                    "blue",
                    "purple",
                    "pink",
                    "red",
                    "orange",
                    "yellow",
                    "green",
                    "gray",
                  ].map((color) => (
                    <div
                      key={color}
                      onClick={() => setAccentColor(color)}
                      className={`w-4 h-4 rounded-full cursor-pointer border-2 transition-transform ${
                        accentColor === color
                          ? `scale-125 border-white ring-1 ring-${color}-500`
                          : "border-transparent hover:scale-110"
                      }`}
                      style={{
                        backgroundColor: `var(--macos-${color}, ${color})`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Wallpaper" && (
          <div className="space-y-6 max-w-lg">
            <div
              className={`border rounded-xl p-6 transition-colors ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}
            >
              <h3 className="text-sm font-semibold mb-4">
                Desktop Backgrounds
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setWallpaper("wallpaper-1")}
                  className={`h-24 rounded-lg cursor-pointer border-2 transition-all ${wallpaper === "wallpaper-1" ? "border-blue-500 scale-[1.02] shadow-lg" : "border-transparent hover:scale-[1.02]"}`}
                  style={{ background: "var(--wallpaper-1)" }}
                ></div>
                <div
                  onClick={() => setWallpaper("wallpaper-2")}
                  className={`h-24 rounded-lg cursor-pointer border-2 transition-all ${wallpaper === "wallpaper-2" ? "border-blue-500 scale-[1.02] shadow-lg" : "border-transparent hover:scale-[1.02]"}`}
                  style={{ background: "var(--wallpaper-2)" }}
                ></div>
                <div
                  onClick={() => setWallpaper("wallpaper-3")}
                  className={`h-24 rounded-lg cursor-pointer border-2 transition-all ${wallpaper === "wallpaper-3" ? "border-blue-500 scale-[1.02] shadow-lg" : "border-transparent hover:scale-[1.02]"}`}
                  style={{ background: "var(--wallpaper-3)" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Animations" && (
          <div className="space-y-6 max-w-lg">
            <div
              className={`border rounded-xl p-4 flex items-center justify-between transition-colors ${theme === "dark" ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}
            >
              <span className="text-sm">Enable Window Animations</span>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={animationsEnabled}
                    onChange={() => setAnimationsEnabled(!animationsEnabled)}
                  />
                  <div
                    className={`block w-10 h-6 rounded-full transition-colors ${animationsEnabled ? "bg-blue-500" : "bg-gray-400"}`}
                  ></div>
                  <div
                    className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${animationsEnabled ? "transform translate-x-4" : ""}`}
                  ></div>
                </div>
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Disabling animations will make windows open and close instantly
              without scaling effects.
            </p>
          </div>
        )}

        {["Appearance", "Wallpaper", "Animations"].indexOf(activeTab) ===
          -1 && (
          <div
            className={`border rounded-xl p-8 text-center transition-colors ${theme === "dark" ? "bg-white/5 border-white/10 text-gray-400" : "bg-white border-gray-200 text-gray-500"}`}
          >
            Settings for {activeTab} will appear here.
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsApp;
