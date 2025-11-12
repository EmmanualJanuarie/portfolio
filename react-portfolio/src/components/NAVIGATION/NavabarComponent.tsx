import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons, install with: npm i lucide-react

type NavbarComponentProps = {
  onSelect: (id: string) => void;
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cert", label: "Certifications" },
];

export default function NavbarComponent({ onSelect }: NavbarComponentProps) {
  const [active, setActive] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id: string) => {
    setActive(id);
    onSelect(id);
    setIsOpen(false); // close menu on mobile
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4">
        {/* Logo / Name */}
        <div
          className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 cursor-pointer select-none"
          onClick={() => handleSelect("home")}
        >
          Emmanual<span className="text-gray-500">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleSelect(id)}
              className={`relative font-medium text-gray-700 hover:text-black transition-all duration-200 ${
                active === id ? "text-black" : ""
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-black rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-black transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleSelect(id)}
              className={`text-base font-medium px-4 py-2 rounded-full w-40 transition-all duration-200 ${
                active === id
                  ? "bg-black text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
