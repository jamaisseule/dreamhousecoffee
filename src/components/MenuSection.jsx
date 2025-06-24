import React, { useState } from 'react';
import menuData from '../data/menuData';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('coffee');

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">Thực Đơn Của Chúng Tôi</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá những hương vị độc đáo được pha chế tỉ mỉ từ những nguyên liệu chất lượng cao
          </p>
        </div>
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
              }`}
            >
              {tab === 'coffee' && 'Cà Phê'}
              {tab === 'matcha' && 'Matcha'}
              {tab === 'cacao' && 'Cacao'}
              {tab === 'smoothies' && 'Sinh Tố'}
              {tab === 'tea' && 'Trà & Nước Ép'}
              {tab === 'snacks' && 'Đồ Ăn Vặt'}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuData[activeTab].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100"
            >
              <h3 className="font-bold text-lg text-amber-800 mb-3">{item.name}</h3>
              <div className="flex justify-between items-center">
                {item.hot && item.ice ? (
                  <div className="flex space-x-4">
                    <span className="text-amber-600">Nóng: <strong>{item.hot}</strong></span>
                    <span className="text-blue-600">Lạnh: <strong>{item.ice}</strong></span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-amber-700">{item.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;