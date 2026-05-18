import React, { useState, useEffect } from 'react';
import Desktop from './pages/Desktop';

function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setBooting(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (booting) {
    return (
      <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white fixed inset-0 z-[9999]">
        <img src="/privotech.png" alt="Logo" className="w-24 h-24 mb-16 rounded-3xl object-cover shadow-2xl animate-pulse" />
        <div className="w-48 h-1 bg-[#333] rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full animate-[bootLoading_2.5s_ease-out_forwards]"></div>
        </div>
        <style>{`
          @keyframes bootLoading {
            0% { width: 0%; }
            30% { width: 40%; }
            70% { width: 75%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="animate-[fadeIn_1s_ease-in-out]">
      <Desktop />
    </div>
  );
}

export default App;
