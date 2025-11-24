import type { ReactNode } from "react";


interface Props {
  title: string;
  children: ReactNode;
}

const SectionContainer: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="
      bg-neutral-900/70 dark:bg-neutral-900 p-6 
      border border-neutral-700
      hover:border-green-400 neon-border
      transition-all backdrop-blur-sm
    ">
      <h2 className="text-xl text-green-400 mb-3 glitch">{title}</h2>
      {children}
    </div>
  );
};

export default SectionContainer;
