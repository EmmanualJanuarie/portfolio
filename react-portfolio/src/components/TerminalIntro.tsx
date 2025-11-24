import { useState, useEffect } from "react";

const text = "Initializing system... Loading modules... Access granted.";

const TerminalIntro: React.FC = () => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 40);
  }, []);

  return (
    <p className="text-green-400 tracking-wider text-sm md:text-base">
      {display}
      <span className="animate-pulse">█</span>
    </p>
  );
};

export default TerminalIntro;
