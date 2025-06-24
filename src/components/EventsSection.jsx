// EnhancedQuoteSection.jsx
import React, { useState } from 'react';
import { Calendar, Gift, ArrowRight, Sparkles, Coffee, Users } from 'lucide-react';

const EventsSection = () => {
  const [showEvents, setShowEvents] = useState(false);

  const events = [
    {
      title: "Happy Hour",
      description: "Giảm 20% tất cả đồ uống từ 14:00 - 16:00 hàng ngày",
      icon: <Coffee className="h-6 w-6" />,
      color: "bg-yellow-500"
    },
    {
      title: "Weekend Special",
      description: "Mua 2 tặng 1 cho tất cả sinh tố cuối tuần",
      icon: <Gift className="h-6 w-6" />,
      color: "bg-green-500"
    },
    {
      title: "Group Meeting",
      description: "Ưu đãi 15% cho nhóm từ 5 người trở lên",
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Birthday Party",
      description: "Tổ chức sinh nhật miễn phí không gian cho nhóm 10+ người",
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-amber-800 to-orange-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-20 h-20 border-2 border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-10 right-32 w-16 h-16 border-2 border-white rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Coffee Bean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="coffeePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <ellipse cx="8" cy="6" rx="3" ry="5" fill="white" opacity="0.3" transform="rotate(15)"/>
              <ellipse cx="15" cy="12" rx="2.5" ry="4" fill="white" opacity="0.2" transform="rotate(-20)"/>
              <ellipse cx="5" cy="15" rx="2" ry="3.5" fill="white" opacity="0.25" transform="rotate(45)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#coffeePattern)" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Quote */}
          <div className="text-center lg:text-left">
            <blockquote className="text-3xl md:text-4xl font-light italic mb-6 leading-relaxed">
              "Những ý tưởng hay bắt đầu từ việc suy nghĩ,<br />
              Những ý tưởng tuyệt vời bắt đầu từ cà phê"
            </blockquote>
            <cite className="text-xl text-amber-200 mb-8 block">- Joe Hamilton</cite>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setShowEvents(!showEvents)}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-white/30 flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                {showEvents ? 'Ẩn Events' : 'Xem Events & Khuyến Mãi'}
              </button>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Gift className="h-5 w-5" />
                Nhận Ưu Đãi
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Side - Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-96">
              {/* Coffee Cup Image */}
              <div className="bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl p-6 flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl">
                <div className="text-6xl">☕</div>
              </div>

              {/* Matcha Image */}
              <div className="bg-gradient-to-br from-green-200 to-green-400 rounded-2xl p-6 flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl mt-8">
                <div className="text-6xl">🍵</div>
              </div>

              {/* Dessert Image */}
              <div className="bg-gradient-to-br from-pink-200 to-pink-400 rounded-2xl p-6 flex items-center justify-center transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl -mt-4">
                <div className="text-6xl">🧁</div>
              </div>

              {/* Atmosphere Image */}
              <div className="bg-gradient-to-br from-purple-200 to-purple-400 rounded-2xl p-6 flex items-center justify-center transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl">
                <div className="text-6xl">🌟</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-2xl animate-bounce">
              ✨
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-red-300 rounded-full flex items-center justify-center text-xl animate-pulse">
              ❤️
            </div>
          </div>
        </div>

        {/* Events & Promotions Section */}
        {showEvents && (
          <div className="mt-16 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <Sparkles className="h-8 w-8 text-yellow-300" />
                Events & Khuyến Mãi
                <Sparkles className="h-8 w-8 text-yellow-300" />
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((event, index) => (
                  <div 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-2 border border-white/30"
                  >
                    <div className={`${event.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 mx-auto`}>
                      {event.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-center">{event.title}</h4>
                    <p className="text-amber-100 text-center text-sm leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Đăng Ký Nhận Thông Báo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default EventsSection;
