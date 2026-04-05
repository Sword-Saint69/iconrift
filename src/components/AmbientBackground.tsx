'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AmbientBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax offsets for blobs
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.8, 0.4]);

  return (
    <>
      {/* Ambient Background Blobs */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="cloud-blob w-96 h-64 top-20 -left-20"
      ></motion.div>
      <motion.div 
        style={{ y: y2, opacity }}
        className="cloud-blob w-[500px] h-[300px] bottom-10 right-0"
      ></motion.div>
      <motion.div 
        style={{ y: y3, opacity: 0.4 }}
        className="cloud-blob w-72 h-72 top-1/2 left-1/3"
      ></motion.div>

      {/* Background Decorative Image */}
      <div className="fixed inset-0 z-[-2] pointer-events-none opacity-20">
        <img
          className="w-full h-full object-cover"
          alt="abstract 3d fluid shapes"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4vOQxkULFm57DQtmbm_cqLHzk7FbBeYDyveWMmaBT9diiq1emv63hBHvmgWz3gfosFzA7plVht9IpgedS8-7-lg9KMOd-pM2sSzPo4ZdOeGdMkEj1CzLdU7o-LufLTNFNc5P08Te4zn6vGf5RMprRPl3FxKCM8OjDR71URU6mqGDmS_dluhKeF9gG6Nrt2EHksUFPAbOcf4dCe0ae49RAQT9rgSDnbM5ae8520hRW8Zy7IMawFEdFlIntoK38lWrd8yinDUAWbPeH"
        />
      </div>
    </>
  );
};

export default AmbientBackground;
