import TerminalIntro from "./TerminalIntro";

const Header = () => (
  <section className="text-center relative px-4 sm:px-6">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-400 tracking-widest glitch">
      CYBER•PORTFOLIO
    </h1>

    <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg">
      Ethical Hacker • Security Researcher
    </p>

    <div className="mt-4">
      <TerminalIntro />
    </div>

    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 z-50">
      <a
        href="mailto:emmanual.dev@gmail.com"
        className="px-5 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all text-sm sm:text-base"
      >
        Contact Me
      </a>
    </div>
  </section>
);

export default Header;
