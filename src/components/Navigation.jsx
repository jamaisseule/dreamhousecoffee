import React, { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import logoDream from "../assets/logo_dream.png";

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["home", "about", "menu", "location", "contact"];

  const handleNavClick = (item) => {
    scrollToSection(item);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        activeSection === "home"
          ? "bg-transparent text-white"
          : "bg-black text-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center pt-2 space-x-2 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <img
              src={logoDream}
              alt="Dream House Coffee Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === item
                    ? "text-amber-400 border-b-2 border-amber-400"
                    : "hover:text-amber-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block px-3 py-2 w-full text-left capitalize ${
                  activeSection === item
                    ? "text-amber-400"
                    : "hover:text-amber-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
