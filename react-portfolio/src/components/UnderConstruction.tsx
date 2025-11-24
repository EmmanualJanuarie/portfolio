import { useEffect, useState } from "react";

const binaryMask = `
000000000111111111000000000
000000111100000000111100000
000011100011111111110011000
000111000111111111111011100
001110001111000000011111110
011100011100111111001111111
111000111001100110001100111
111000110011111111100110011
111000110011101110110110011
111000110011111111110110011
011100011001111111100111111
001110001100011111000111110
000111000110000000001111100
000011100011111111111111000
000001110000111111111100000
000000111000000000011000000
000000011111111111111000000
000000000111111111000000000
`;

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
      // random position within viewport
      const top = Math.floor(Math.random() * 70); // 0% to 70% vertical
      const left = Math.floor(Math.random() * 70); // 0% to 70% horizontal
      setPosition({ top, left });
      setShowMask(true);

      // hide after 2-3 seconds
      setTimeout(() => setShowMask(false), 2000 + Math.random() * 1000);
    }, 4000); // every 4 seconds a new mask appears

    return () => clearInterval(maskInterval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-gray-200 font-mono p-6 overflow-hidden">
      
      {/* Hacker mask floating */}
      {showMask && (
        <pre
          className="absolute text-green-400 font-mono text-xs sm:text-sm md:text-base opacity-80 animate-fadeIn"
          style={{ top: `${position.top}%`, left: `${position.left}%` }}
        >
          {binaryMask}
        </pre>
      )}

      {/* Neon Glitch Title */}
      <h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-green-400 tracking-widest glitch mb-6"
        data-text="PORTFOLIO UNDER CONSTRUCTION"
      >
        PORTFOLIO UNDER CONSTRUCTION
      </h1>

      {/* Animated terminal dots */}
      <p className="text-gray-400 text-lg sm:text-xl md:text-2xl">
        Loading the secure environment{dots}
      </p>

      {/* Optional neon border box */}
      <div className="mt-10 p-6 border border-green-400 neon-border rounded-lg text-gray-300 max-w-md text-center">
        <p>
          Portfolio is currently under construction.  
          Come back soon to explore exploits, labs, and cyber adventures.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
