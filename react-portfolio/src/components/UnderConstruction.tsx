import { useEffect, useState } from "react";

const UnderConstruction: React.FC = () => {
  const [dots, setDots] = useState(".");
  const [showMask, setShowMask] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Animated loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Toggle mask visibility and random position
  useEffect(() => {
    const maskInterval = setInterval(() => {
      const top = Math.floor(Math.random() * 70); // 0% to 70% vertical
      const left = Math.floor(Math.random() * 70); // 0% to 70% horizontal
      setPosition({ top, left });
      setShowMask(true);

      setTimeout(() => setShowMask(false), 2000 + Math.random() * 1000);
    }, 4000);

    return () => clearInterval(maskInterval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-gray-200 font-mono p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">

      {/* Hacker mask placeholder */}
      {showMask && (
        <pre
          className="absolute text-green-400 font-mono text-[0.45rem] sm:text-xs md:text-sm lg:text-base opacity-80 animate-fadeIn"
          style={{ top: `${position.top}%`, left: `${position.left}%`, lineHeight: '0.6rem', pointerEvents: 'none' }}
        >
          {/* Mask removed */}
        </pre>
      )}

      {/* Neon Glitch Title */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-400 tracking-widest glitch mb-6 text-center"
        data-text="PORTFOLIO UNDER CONSTRUCTION"
      >
        PORTFOLIO UNDER CONSTRUCTION
      </h1>

      {/* Animated terminal dots */}
      <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
        Loading the secure environment{dots}
      </p>

      {/* Optional neon border box */}
      <div className="mt-6 sm:mt-8 md:mt-10 p-4 sm:p-6 md:p-8 border border-green-400 neon-border rounded-lg text-gray-300 max-w-full sm:max-w-md text-center">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Portfolio is currently under construction.  
          Come back soon to explore exploits, labs, and cyber adventures.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
