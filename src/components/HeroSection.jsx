import React from 'react';

const HeroSection = ({ scrollY }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="coffee-beans" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <ellipse cx="20" cy="15" rx="8" ry="12" fill="#8B4513" opacity="0.1"/>
                  <ellipse cx="10" cy="30" rx="6" ry="10" fill="#A0522D" opacity="0.1"/>
                  <ellipse cx="30" cy="35" rx="7" ry="11" fill="#8B4513" opacity="0.1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#coffee-beans)"/>
            </svg>
          `)})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      ></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-amber-800 mb-6 animate-fade-in">
          Dream House Coffee
        </h1>
        <p className="text-xl md:text-2xl text-amber-700 mb-8 animate-slide-up">
          44 Bùi Thiện Ngộ - Nơi những ý tưởng tuyệt vời bắt đầu
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Xem Thực Đơn
          </button>
          <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Đặt Bàn Ngay
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;