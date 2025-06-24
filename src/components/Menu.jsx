import React, { useState } from "react";
import {
  Coffee,
  Droplets,
  Leaf,
  Cookie,
  ChevronRight,
  Star,
} from "lucide-react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const menuData = {
    coffee: {
      title: "COFFEE",
      icon: <Coffee className="w-6 h-6" />,
      color: "amber",
      items: [
        {
          name: "CAFE ĐEN",
          hot: "23K",
          cold: "23K",
          description: "Traditional Vietnamese black coffee",
        },
        {
          name: "CAFE SỮA",
          hot: "25K",
          cold: "25K",
          description: "Vietnamese coffee with condensed milk",
        },
        {
          name: "CAFE MUỐI",
          hot: "-",
          cold: "35K",
          description: "Salted coffee - a unique twist",
        },
        {
          name: "BẠC XỈU",
          hot: "-",
          cold: "33K",
          description: "White coffee with lots of milk",
        },
        {
          name: "BẠC XỈU MUỐI",
          hot: "-",
          cold: "35K",
          description: "Salted white coffee",
        },
        {
          name: "CAFE DỪA",
          hot: "-",
          cold: "42K",
          description: "Coconut coffee blend",
        },
      ],
    },
    matcha: {
      title: "MATCHA",
      icon: <Leaf className="w-6 h-6" />,
      color: "green",
      items: [
        {
          name: "MATCHA LATTE",
          price: "39K",
          description: "Smooth matcha with steamed milk",
        },
        {
          name: "MATCHA KEM MUỐI",
          price: "44K",
          description: "Matcha with salted cream topping",
        },
        {
          name: "MATCHA OREO",
          price: "42K",
          description: "Matcha blended with Oreo cookies",
        },
        {
          name: "MATCHA OREO KEM PHÔ MAI ĐEO",
          price: "48K",
          description: "Matcha Oreo with cheese cream",
        },
        {
          name: "MATCHA OREO KEM MUỐI",
          price: "45K",
          description: "Matcha Oreo with salted cream",
        },
        {
          name: "MATCHA COCO",
          price: "43K",
          description: "Matcha with coconut flavor",
        },
      ],
    },
    cacao: {
      title: "CACAO",
      icon: <Coffee className="w-6 h-6" />,
      color: "orange",
      items: [
        {
          name: "CACAO",
          hot: "29K",
          cold: "29K",
          description: "Rich chocolate drink",
        },
        {
          name: "CACAO MUỐI",
          hot: "-",
          cold: "34K",
          description: "Salted chocolate drink",
        },
        {
          name: "CACAO COCO",
          hot: "-",
          cold: "37K",
          description: "Chocolate coconut blend",
        },
        {
          name: "CACAO PHÔ MAI",
          hot: "-",
          cold: "39K",
          description: "Chocolate with cheese topping",
        },
      ],
    },
    smoothies: {
      title: "SỮA CHUA",
      icon: <Droplets className="w-6 h-6" />,
      color: "pink",
      items: [
        { name: "ĐÁ", price: "30K", description: "Yogurt with ice" },
        { name: "ĐÀO", price: "35K", description: "Peach yogurt smoothie" },
        { name: "KIWI", price: "35K", description: "Kiwi yogurt smoothie" },
        {
          name: "VIỆT QUẤT",
          price: "35K",
          description: "Blueberry yogurt smoothie",
        },
        { name: "XOÀI", price: "35K", description: "Mango yogurt smoothie" },
        {
          name: "DÂU",
          price: "35K",
          description: "Strawberry yogurt smoothie",
        },
      ],
    },
    tea: {
      title: "TEA",
      icon: <Leaf className="w-6 h-6" />,
      color: "emerald",
      items: [
        {
          name: "TRÀ ĐÀO CAM SẢ",
          price: "45K",
          description: "Peach orange lemongrass tea",
        },
        {
          name: "TRÀ Ổ LONG VẢI",
          price: "45K",
          description: "Oolong tea with lychee",
        },
        {
          name: "TRÀ ỐI HOA HỒNG",
          price: "45K",
          description: "Guava rose tea",
        },
        {
          name: "TRÀ Ổ LONG ỐI",
          price: "45K",
          description: "Oolong guava tea",
        },
        { name: "TRÀ CHANH", price: "29K", description: "Lemon tea" },
        { name: "NƯỚC CAM", price: "27K", description: "Fresh orange juice" },
      ],
    },
    snacks: {
      title: "ĐỒ ĂN VẶT",
      icon: <Cookie className="w-6 h-6" />,
      color: "yellow",
      items: [
        {
          name: "BẮP RONG BIỂN/PHÔ MAI/CARAMEL/SOCOLA",
          price: "20K",
          description: "Popcorn varieties",
        },
        {
          name: "BÁNH TRÁNG PMHK/TỎI BƠ/THÁP CẦM/TÔM BƠ/GÀ QUAY",
          price: "20K",
          description: "Rice paper snacks",
        },
        {
          name: "KHÔ GÀ/BÒ/MỰC",
          price: "22K",
          description: "Dried meat snacks",
        },
        {
          name: "HƯỚNG DƯƠNG DỪA",
          price: "17K",
          description: "Coconut sunflower seeds",
        },
        { name: "HƯỚNG DƯƠNG", price: "15K", description: "Sunflower seeds" },
      ],
    },
  };

  const categories = Object.keys(menuData);

  const getColorClasses = (color, active = false) => {
    const colors = {
      amber: active
        ? "bg-amber-500 text-white"
        : "text-amber-600 hover:bg-amber-50",
      green: active
        ? "bg-green-500 text-white"
        : "text-green-600 hover:bg-green-50",
      orange: active
        ? "bg-orange-500 text-white"
        : "text-orange-600 hover:bg-orange-50",
      pink: active
        ? "bg-pink-500 text-white"
        : "text-pink-600 hover:bg-pink-50",
      emerald: active
        ? "bg-emerald-500 text-white"
        : "text-emerald-600 hover:bg-emerald-50",
      yellow: active
        ? "bg-yellow-500 text-white"
        : "text-yellow-600 hover:bg-yellow-50",
    };
    return colors[color] || colors.amber;
  };

  const getBorderColor = (color) => {
    const colors = {
      amber: "border-amber-200",
      green: "border-green-200",
      orange: "border-orange-200",
      pink: "border-pink-200",
      emerald: "border-emerald-200",
      yellow: "border-yellow-200",
    };
    return colors[color] || colors.amber;
  };

  const currentCategory = menuData[activeCategory];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 ">
      <div className="min-h-screen py-4">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header - Compact */}
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white-500 mb-2">
              NHÀ MƠ's MENU
            </h1>
            <p className="text-lg text-white-500  mb-1">44 Bùi Thiện Ngộ</p>
            <div className="flex justify-center items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>

          {/* Category Navigation - Horizontal on mobile */}
          <div className="mb-6">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {categories.map((category) => {
                  const categoryData = menuData[category];
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-300 ${getColorClasses(
                        categoryData.color,
                        isActive
                      )}`}
                    >
                      {categoryData.icon}
                      <span className="text-xs font-semibold text-center">
                        {categoryData.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Menu Items - Compact */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Category Header - Smaller */}
            <div
              className={`p-4 bg-gradient-to-r ${
                currentCategory.color === "amber"
                  ? "from-amber-400 to-orange-400"
                  : currentCategory.color === "green"
                  ? "from-green-400 to-emerald-400"
                  : currentCategory.color === "orange"
                  ? "from-orange-400 to-red-400"
                  : currentCategory.color === "pink"
                  ? "from-pink-400 to-rose-400"
                  : currentCategory.color === "emerald"
                  ? "from-emerald-400 to-teal-400"
                  : "from-yellow-400 to-amber-400"
              }`}
            >
              <div className="flex items-center gap-3 text-white">
                <div className="p-2 bg-white/20 rounded-lg">
                  {currentCategory.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {currentCategory.title}
                </h2>
              </div>
            </div>

            {/* Menu Items Grid - Compact */}
            <div className="p-4">
              <div className="grid md:grid-cols-2 gap-3">
                {currentCategory.items.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 border ${getBorderColor(
                      currentCategory.color
                    )} rounded-lg hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-white-800 mb-1 leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-white-600 text-xs mb-2 line-clamp-2">
                          {item.description}
                        </p>

                        {/* Price Display - Compact */}
                        <div className="flex items-center gap-3 text-sm">
                          {item.hot && item.cold ? (
                            <>
                              <div className="flex items-center gap-1">
                                <span className="text-white-500">Hot:</span>
                                <span className="font-bold text-white-800">
                                  {item.hot}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-white-500">Cold:</span>
                                <span className="font-bold text-white-800">
                                  {item.cold}
                                </span>
                              </div>
                            </>
                          ) : (
                            <span className="font-bold text-lg text-white-800">
                              {item.price}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Item Icon - Smaller */}
                      <div
                        className={`p-2 rounded-lg flex-shrink-0 ${
                          currentCategory.color === "amber"
                            ? "bg-amber-100 text-amber-600"
                            : currentCategory.color === "green"
                            ? "bg-green-100 text-green-600"
                            : currentCategory.color === "orange"
                            ? "bg-orange-100 text-orange-600"
                            : currentCategory.color === "pink"
                            ? "bg-pink-100 text-pink-600"
                            : currentCategory.color === "emerald"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        <div className="w-5 h-5">{currentCategory.icon}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
