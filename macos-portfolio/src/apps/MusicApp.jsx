import React, { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
  FaVolumeMute,
  FaMusic,
} from "react-icons/fa";

const MusicApp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSongIndex, setActiveSongIndex] = useState(0);

  const audioRef = useRef(null);

  const playlist = [
    {
      title: "Lo-Fi Coding Beats",
      artist: "Chillhop Music",
      album: "Chillhop Essentials",
      duration: "4:01",
      cover:
        "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=100&h=100&fit=crop",

      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Upbeat Tech House",
      artist: "DJ Code",
      album: "Deep Focus",
      duration: "5:20",
      cover:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Synthwave Night Drive",
      artist: "Neon Logic",
      album: "Retro Future",
      duration: "3:45",
      cover:
        "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=100&h=100&fit=crop",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
  ];

  const currentSong = playlist[activeSongIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current
        ?.play()
        .catch((e) => console.log("Audio play blocked by browser:", e));
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, activeSongIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const playNext = () => {
    setActiveSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const playPrev = () => {
    setActiveSongIndex(
      (prev) => (prev - 1 + playlist.length) % playlist.length,
    );
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime =
        (newProgress / 100) * audioRef.current.duration;
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (val > 0) setIsMuted(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#1e1e1e] text-white">
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
      />

      <div className="h-16 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between flex-shrink-0">
        <div className="flex gap-4 text-white/80">
          <FaStepBackward
            className="text-xl cursor-pointer hover:text-white transition-colors"
            onClick={playPrev}
          />
          <button onClick={togglePlay} className="focus:outline-none">
            {isPlaying ? (
              <FaPause className="text-xl hover:text-white transition-colors" />
            ) : (
              <FaPlay className="text-xl hover:text-white transition-colors" />
            )}
          </button>
          <FaStepForward
            className="text-xl cursor-pointer hover:text-white transition-colors"
            onClick={playNext}
          />
        </div>

        <div className="flex-1 max-w-md mx-8 bg-black/40 border border-white/5 rounded-md h-12 flex flex-col justify-center px-4 relative overflow-hidden group">
          <div className="flex items-center gap-3 relative z-10">
            <img
              src={currentSong.cover}
              className="w-8 h-8 rounded object-cover shadow-md"
              alt="Album"
            />
            <div className="flex flex-col justify-center flex-1">
              <span className="text-xs font-bold truncate">
                {currentSong.title}
              </span>
              <span className="text-[10px] text-white/50 truncate">
                {currentSong.artist} {currentSong.album}
              </span>
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={progress || 0}
            onChange={handleProgressChange}
            className="absolute bottom-0 left-0 w-full h-1 bg-transparent cursor-pointer appearance-none z-20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-runnable-track]:bg-transparent"
          />
          <div
            className="absolute bottom-0 left-0 h-1 bg-blue-500 pointer-events-none transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center gap-3 text-white/60 w-32">
          <button onClick={() => setIsMuted(!isMuted)}>
            {isMuted || volume === 0 ? (
              <FaVolumeMute className="hover:text-white" />
            ) : (
              <FaVolumeUp className="hover:text-white" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          />
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-56 bg-white/5 border-r border-white/10 p-4 flex flex-col gap-1 overflow-y-auto flex-shrink-0 hidden md:flex">
          <div className="text-xs font-semibold text-white/40 mb-2 uppercase tracking-wider">
            Library
          </div>
          <div className="px-2 py-1.5 rounded-md hover:bg-white/10 cursor-pointer text-sm text-red-500 font-medium flex items-center gap-2">
            Recently Added
          </div>
          <div className="px-2 py-1.5 rounded-md bg-white/10 cursor-pointer text-sm flex items-center gap-2">
            Songs
          </div>

          <div className="text-xs font-semibold text-white/40 mb-2 mt-6 uppercase tracking-wider">
            Playlists
          </div>
          <div className="px-2 py-1.5 rounded-md hover:bg-white/10 cursor-pointer text-sm flex items-center gap-2">
            Coding Focus
          </div>
          <div className="px-2 py-1.5 rounded-md hover:bg-white/10 cursor-pointer text-sm flex items-center gap-2">
            Favorites
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6">Songs</h1>

          <div className="w-full text-left">
            <div className="text-xs font-medium text-white/50 border-b border-white/10 pb-2 flex mb-2">
              <div className="w-10 text-center">#</div>
              <div className="flex-1">Title</div>
              <div className="w-1/4 hidden sm:block">Artist</div>
              <div className="w-1/4 hidden md:block">Album</div>
              <div className="w-16 text-right hidden sm:block">Time</div>
            </div>

            {playlist.map((song, idx) => {
              const isCurrent = activeSongIndex === idx;
              return (
                <div
                  key={idx}
                  onDoubleClick={() => {
                    setActiveSongIndex(idx);
                    setIsPlaying(true);
                  }}
                  className={`flex items-center text-sm py-2 px-1 rounded-md cursor-pointer border-b border-white/5 group transition-colors ${
                    isCurrent ? "bg-blue-500/20" : "hover:bg-white/5"
                  }`}
                >
                  <div className="w-10 text-center text-white/40 group-hover:hidden">
                    {isCurrent && isPlaying ? (
                      <FaMusic className="mx-auto text-xs text-blue-400 animate-pulse" />
                    ) : (
                      idx + 1
                    )}
                  </div>
                  <div
                    className="w-10 text-center hidden group-hover:block"
                    onClick={() => {
                      setActiveSongIndex(idx);
                      setIsPlaying(true);
                    }}
                  >
                    <FaPlay className="mx-auto text-xs text-white" />
                  </div>
                  <div
                    className={`flex-1 font-medium flex items-center gap-3 ${isCurrent ? "text-blue-400" : "text-white"}`}
                  >
                    <img
                      src={song.cover}
                      className="w-8 h-8 rounded object-cover shadow-sm"
                      alt="cover"
                    />
                    <span className="truncate">{song.title}</span>
                  </div>
                  <div className="w-1/4 text-white/60 truncate hidden sm:block">
                    {song.artist}
                  </div>
                  <div className="w-1/4 text-white/60 truncate hidden md:block">
                    {song.album}
                  </div>
                  <div className="w-16 text-right text-white/60 hidden sm:block">
                    {song.duration}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicApp;
