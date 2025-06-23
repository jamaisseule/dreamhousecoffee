import React from "react";
import { Coffee, Heart, Star } from "lucide-react";

const Home = ({ setActiveSection }) => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100">
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-amber-900 mb-4">
          Dream House Coffee
        </h1>
        <p className="text-xl text-amber-700 mb-8">
          Nơi ước mơ bắt đầu từ một ly cà phê thơm ngon
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveSection("menu")}
            className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors shadow-lg"
          >
            Xem Menu
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-600 hover:text-white transition-colors"
          >
            Về chúng tôi
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <Feature icon={<Coffee />} title="Cà phê chất lượng" desc="Từ những hạt cà phê tuyển chọn kỹ lưỡng" />
        <Feature icon={<Heart />} title="Không gian ấm cúng" desc="Thiết kế như ngôi nhà thứ hai của bạn" />
        <Feature icon={<Star />} title="Dịch vụ tận tâm" desc="Phục vụ với tình yêu và sự chân thành" />
      </div>
    </div>
  </div>
);

const Feature = ({ icon, title, desc }) => (
  <div className="text-center p-6 bg-white rounded-xl shadow-lg">
    <div className="text-amber-600 h-12 w-12 mx-auto mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
    <p className="text-amber-700">{desc}</p>
  </div>
);

export default Home;
