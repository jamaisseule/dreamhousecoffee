import React from 'react';
import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Coffee className="h-6 w-6 text-amber-300" />
          <span className="text-xl font-bold">Dream House Coffee</span>
        </div>
        <p className="text-amber-200">© 2025 Dream House Coffee. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;
