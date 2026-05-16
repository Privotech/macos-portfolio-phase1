import React from 'react';
import { FaChevronLeft, FaChevronRight, FaShieldAlt, FaPlus, FaSearch } from 'react-icons/fa';

const SafariApp = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Safari Toolbar */}
      <div className="h-12 bg-[#f5f5f7] border-b border-gray-300 flex items-center px-4 gap-4 flex-shrink-0">
        
        {/* Navigation */}
        <div className="flex space-x-3 text-gray-400">
          <FaChevronLeft className="text-sm cursor-not-allowed" />
          <FaChevronRight className="text-sm cursor-not-allowed" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-2xl mx-auto flex items-center bg-white rounded-md border border-gray-200 px-3 py-1.5 shadow-sm text-sm text-gray-700">
          <FaShieldAlt className="text-gray-400 mr-2 text-xs" />
          <span className="flex-1 text-center font-medium">portfolio.privotech.dev</span>
        </div>

        {/* Extensions/Actions */}
        <div className="flex space-x-3 text-gray-500">
          <FaPlus className="text-sm cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col items-center justify-center p-8 text-center relative">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <FaSearch className="text-4xl text-blue-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore the Web</h2>
        <p className="text-gray-500 max-w-md">Search or enter a website name to begin browsing. The internet is at your fingertips.</p>
        
        <div className="absolute bottom-10 w-full flex justify-center gap-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer transition-shadow">
            <span className="font-bold text-red-500 text-xl">G</span>
          </div>
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer transition-shadow">
            <span className="font-bold text-blue-500 text-xl">in</span>
          </div>
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md cursor-pointer transition-shadow">
            <span className="font-bold text-gray-800 text-xl">X</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariApp;
