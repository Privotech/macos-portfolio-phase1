import React from 'react';
import { FaPlay, FaStepForward, FaStepBackward, FaRandom, FaRedo, FaVolumeUp } from 'react-icons/fa';

const MusicApp = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#1e1e1e] text-white">
      
      {/* Player Header / Toolbar */}
      <div className="h-16 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between">
        <div className="flex gap-4 text-white/80">
          <FaStepBackward className="text-xl cursor-pointer hover:text-white" />
          <FaPlay className="text-xl cursor-pointer hover:text-white" />
          <FaStepForward className="text-xl cursor-pointer hover:text-white" />
        </div>
        
        {/* Now Playing Display */}
        <div className="flex-1 max-w-md mx-8 bg-black/40 border border-white/5 rounded-md h-10 flex items-center justify-center flex-col">
          <div className="flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=50&h=50&fit=crop" className="w-6 h-6 rounded object-cover" alt="Album" />
            <div className="text-center flex flex-col justify-center leading-tight">
              <span className="text-xs font-bold truncate">Lo-Fi Coding Beats</span>
              <span className="text-[10px] text-white/50 truncate">Chillhop Music</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-white/60">
          <FaVolumeUp className="cursor-pointer hover:text-white" />
          <div className="w-24 h-1 bg-white/20 rounded-full cursor-pointer">
             <div className="w-2/3 h-full bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-56 bg-white/5 border-r border-white/10 p-4 flex flex-col gap-1 overflow-y-auto">
          <div className="text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">Library</div>
          <div className="px-2 py-1.5 rounded-md hover:bg-white/10 cursor-pointer text-sm text-red-500 font-medium flex items-center gap-2">
            Recently Added
          </div>
          <div className="px-2 py-1.5 rounded-md hover:bg-white/10 cursor-pointer text-sm flex items-center gap-2">
            Artists
          </div>
          <div className="px-2 py-1.5 rounded-md hover:bg-white/10 cursor-pointer text-sm flex items-center gap-2">
            Albums
          </div>
          <div className="px-2 py-1.5 rounded-md bg-white/10 cursor-pointer text-sm flex items-center gap-2">
            Songs
          </div>

          <div className="text-xs font-semibold text-white/40 mb-2 mt-6 uppercase tracking-wider">Playlists</div>
          <div className="px-2 py-1.5 rounded-md hover:bg-white/10 cursor-pointer text-sm flex items-center gap-2">
            Coding Focus
          </div>
          <div className="px-2 py-1.5 rounded-md hover:bg-white/10 cursor-pointer text-sm flex items-center gap-2">
            Favorites
          </div>
        </div>

        {/* Main Content (Songs list) */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6">Songs</h1>
          
          <div className="w-full text-left border-collapse">
            <div className="text-xs font-medium text-white/50 border-b border-white/10 pb-2 flex">
              <div className="w-10 text-center">#</div>
              <div className="flex-1">Title</div>
              <div className="w-1/4">Artist</div>
              <div className="w-1/4">Album</div>
              <div className="w-16 text-right">Time</div>
            </div>
            
            <div className="flex items-center text-sm py-2 hover:bg-white/5 rounded-md cursor-pointer border-b border-white/5 group">
              <div className="w-10 text-center text-white/40 group-hover:hidden">1</div>
              <div className="w-10 text-center hidden group-hover:block"><FaPlay className="mx-auto text-xs" /></div>
              <div className="flex-1 font-medium flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=50&h=50&fit=crop" className="w-8 h-8 rounded object-cover" />
                Lo-Fi Coding Beats
              </div>
              <div className="w-1/4 text-white/60">Chillhop Music</div>
              <div className="w-1/4 text-white/60">Chillhop Essentials</div>
              <div className="w-16 text-right text-white/60">3:42</div>
            </div>
            
            <div className="flex items-center text-sm py-2 hover:bg-white/5 rounded-md cursor-pointer border-b border-white/5 group">
              <div className="w-10 text-center text-white/40 group-hover:hidden">2</div>
              <div className="w-10 text-center hidden group-hover:block"><FaPlay className="mx-auto text-xs" /></div>
              <div className="flex-1 font-medium flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded"></div>
                Midnight City
              </div>
              <div className="w-1/4 text-white/60">Synthwave</div>
              <div className="w-1/4 text-white/60">Neon Nights</div>
              <div className="w-16 text-right text-white/60">4:01</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicApp;
