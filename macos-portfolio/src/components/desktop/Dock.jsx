import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import DockItem from './DockItem';
import { apps } from '../../data/apps';

const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  const dockApps = apps.filter(app => app.isDock);

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-[60px] px-3 pb-1 gap-3 glass-dock rounded-2xl mx-auto shadow-2xl"
      >
        {dockApps.map((app) => (
          <DockItem key={app.id} app={app} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;
