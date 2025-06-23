import React from "react";
import { Coffee } from "lucide-react";
import { menuData } from "../data/menuData";

const CategorySection = ({ title, items }) => (
  <div className="bg-white rounded-2xl shadow-xl p-6">
    <h3 className="text-2xl font-bold text-amber-800 mb-6">{title}</h3>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-center border-b border-amber-100 pb-3">
          <div>
            <h4 className="font-semibold text-amber-900">{item.name}</h4>
            <p className="text-sm text-amber-600">{item.options}</p>
          </div>
          <span className="text-xl font-bold text-amber-700">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Menu Dream House Coffee</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <CategorySection title="COFFEE" items={menuData.coffee} />
        <CategorySection title="CACAO" items={menuData.cacao} />
        <CategorySection title="MATCHA" items={menuData.matcha} />
        <CategorySection title="TEA" items={menuData.tea} />
      </div>
    </div>
  </div>
);

export default Menu;
