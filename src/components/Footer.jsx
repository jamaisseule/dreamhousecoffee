// Footer.js
import React from 'react';
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Coffee className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-bold">Dream House Coffee</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2025 Dream House Coffee. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Relax. Refresh. Recharge.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;