import React, { useState } from 'react';
import { FaWifi, FaBluetooth, FaPaintBrush, FaUserCircle, FaVolumeUp, FaDesktop, FaBatteryFull } from 'react-icons/fa';

const SettingsApp = () => {
  const [activeTab, setActiveTab] = useState('Appearance');

  const sidebarGroups = [
    {
      items: [
        { id: 'Wi-Fi', icon: <FaWifi className="text-white" />, color: 'bg-blue-500' },
        { id: 'Bluetooth', icon: <FaBluetooth className="text-white" />, color: 'bg-blue-500' },
        { id: 'Network', icon: <FaWifi className="text-white" />, color: 'bg-blue-500' },
      ]
    },
    {
      items: [
        { id: 'Appearance', icon: <FaPaintBrush className="text-white" />, color: 'bg-indigo-500' },
        { id: 'Displays', icon: <FaDesktop className="text-white" />, color: 'bg-blue-500' },
        { id: 'Sound', icon: <FaVolumeUp className="text-white" />, color: 'bg-pink-500' },
        { id: 'Battery', icon: <FaBatteryFull className="text-white" />, color: 'bg-green-500' },
      ]
    }
  ];

  return (
    <div className="w-full h-full flex bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-gray-200">
      
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex flex-col">
        {/* Search */}
        <div className="p-4 pb-2">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-gray-200 dark:bg-black/20 border border-transparent dark:border-white/10 rounded-md px-3 py-1 text-sm outline-none focus:border-blue-500"
          />
        </div>

        {/* Profile Card */}
        <div className="px-3 pb-3 border-b border-gray-200 dark:border-white/10 mx-2">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 cursor-pointer transition-colors">
            <FaUserCircle className="text-3xl text-gray-400" />
            <div>
              <div className="text-sm font-semibold">Privotech</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Apple ID, iCloud, Media</div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto p-2 space-y-4">
          {sidebarGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              {group.items.map(item => (
                <div 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
                    activeTab === item.id 
                      ? 'bg-blue-500 text-white' 
                      : 'hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center text-xs ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.id}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#f5f5f7] dark:bg-transparent overflow-y-auto p-8">
        <h1 className="text-2xl font-bold mb-6">{activeTab}</h1>
        
        {activeTab === 'Appearance' && (
          <div className="space-y-6 max-w-lg">
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 flex justify-around">
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-16 h-12 bg-gray-100 border-2 border-transparent rounded-md flex overflow-hidden">
                  <div className="w-1/3 bg-gray-200"></div><div className="flex-1 bg-white"></div>
                </div>
                <span className="text-xs font-medium">Light</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-16 h-12 bg-[#1e1e1e] border-2 border-blue-500 rounded-md flex overflow-hidden">
                  <div className="w-1/3 bg-black/40"></div><div className="flex-1 bg-[#2d2d2d]"></div>
                </div>
                <span className="text-xs font-medium">Dark</span>
              </div>
              <div className="flex flex-col items-center gap-2 cursor-pointer">
                <div className="w-16 h-12 bg-gradient-to-r from-gray-100 to-[#1e1e1e] border-2 border-transparent rounded-md flex overflow-hidden">
                </div>
                <span className="text-xs font-medium">Auto</span>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl divide-y divide-gray-200 dark:divide-white/10">
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm">Accent color</span>
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white dark:border-black ring-1 ring-blue-500"></div>
                  <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  <div className="w-4 h-4 rounded-full bg-pink-500"></div>
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm">Highlight color</span>
                <select className="bg-transparent border border-gray-300 dark:border-white/20 rounded text-sm p-1 outline-none">
                  <option>Blue</option>
                  <option>Graphite</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'Appearance' && (
          <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-8 text-center text-gray-500 dark:text-gray-400">
            Settings for {activeTab} will appear here.
          </div>
        )}

      </div>
    </div>
  );
};

export default SettingsApp;
