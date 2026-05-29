import React from "react";
import { AnimatePresence } from "framer-motion";
import { useWindowStore } from "../../store/windowStore";
import Window from "./Window";

const WindowContainer = () => {
  const windows = useWindowStore((state) => state.windows);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ top: "28px", bottom: "70px", zIndex: 0 }}
    >
      <div className="relative w-full h-full pointer-events-none">
        <AnimatePresence>
          {windows.map((window) => (
            <div key={window.id} className="pointer-events-auto">
              <Window windowState={window} />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WindowContainer;
