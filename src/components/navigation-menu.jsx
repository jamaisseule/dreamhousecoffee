import React from "react";
import { Coffee } from "lucide-react";

const NavigationMenu = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "home", label: "Trang chủ" },
    { id: "about", label: "Giới thiệu" },
    { id: "menu", label: "Menu" },
    { id: "promotions", label: "Khuyến mãi" },
    { id: "events", label: "Sự kiện" },
    { id: "contact", label: "Liên hệ" }
  ];//lala

  return (
    <nav className="bg-yellow-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-yellow-700" />
            <span className="text-2xl font-bold text-amber-800">Dream House Coffee</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-amber-200 text-amber-900 shadow-md"
                    : "text-amber-700 hover:bg-amber-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
