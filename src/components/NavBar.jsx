import React from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const Navbar = ({ scrollY, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-amber-800">Dream House Coffee</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-amber-800 hover:text-amber-600 transition-colors">Trang chủ</a>
            <a href="#menu" className="text-amber-800 hover:text-amber-600 transition-colors">Thực đơn</a>
            <a href="#about" className="text-amber-800 hover:text-amber-600 transition-colors">Về chúng tôi</a>
            <a href="#contact" className="text-amber-800 hover:text-amber-600 transition-colors">Liên hệ</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#home" className="block text-amber-800 hover:text-amber-600 py-2">Trang chủ</a>
            <a href="#menu" className="block text-amber-800 hover:text-amber-600 py-2">Thực đơn</a>
            <a href="#about" className="block text-amber-800 hover:text-amber-600 py-2">Về chúng tôi</a>
            <a href="#contact" className="block text-amber-800 hover:text-amber-600 py-2">Liên hệ</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
