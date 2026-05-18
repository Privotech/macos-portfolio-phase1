import React, { useRef } from "react";
import { motion, useTransform, useSpring } from "framer-motion";
import { useWindowStore } from "../../store/windowStore";

const DockItem = ({ app, mouseX }) => {
  const ref = useRef(null);

  const openWindow = useWindowStore((state) => state.openWindow);
  const isAppRunning = useWindowStore((state) =>
    state.windows.some((w) => w.id === app.id),
  );

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [50, 80, 50]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="relative flex flex-col items-center justify-end cursor-pointer group"
      onClick={() => openWindow(app.id, app.title)}
    >
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none border border-white/10 backdrop-blur-md">
        {app.title}
      </div>

      <motion.div
        className="w-full aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center p-1.5 dock-bounce hover:-translate-y-2 transition-transform duration-200"
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-full h-full flex items-center justify-center pointer-events-none">
          {app.icon}
        </div>
      </motion.div>

      <div className="h-1.5 mt-1 flex items-center justify-center">
        {(isAppRunning || app.isActive) && (
          <div className="w-1 h-1 bg-white/50 rounded-full" />
        )}
      </div>
    </motion.div>
  );
};

export default DockItem;
