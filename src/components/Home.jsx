import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bg1 from "../assets/bg_1.jpg";
import bg2 from "../assets/bg_2.jpg";
import bg3 from "../assets/bg_3.jpg";

const Home = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: bg1,
      title: "Pure Coffee.",
      subtitle: "Pure Experience.",
      description: "Cà phê thuần khiết. Trải nghiệm thuần khiết.",
      text: "We put a little love in your cup, so you can put a lot of love in someone else's day...with coffee.",
    },
    {
      id: 2,
      image: bg2,
      title: "Premium Quality.",
      subtitle: "Exceptional Taste.",
      description: "Chất lượng cao cấp. Hương vị đặc biệt.",
      text: "Every bean is carefully selected and roasted to perfection, delivering an unforgettable coffee experience.",
    },
    {
      id: 3,
      image: bg3,
      title: "Your Daily Escape.",
      subtitle: "Perfect Moments.",
      description: "Nơi nghỉ ngơi hàng ngày. Khoảnh khắc hoàn hảo.",
      text: "Start your day with us, take a break with us, or end your evening in our cozy atmosphere.",
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Chuyển slide mỗi 5 giây

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center"
      style={{
        backgroundImage: "url(./assets/coffee_hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Slide Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center text-white">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                    {slide.title}
                    <br />
                    <span className="text-amber-400">{slide.subtitle}</span>
                  </h1>
                  <p className="text-xl md:text-2xl mb-4 drop-shadow-md">
                    {slide.description}
                  </p>
                  <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
                    {slide.text}
                  </p>
                  <div className="flex flex-row sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => scrollToSection("menu")}
                      className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-300 shadow-lg"
                    >
                      View Menu
                    </button>
                    <button
                      onClick={() => scrollToSection("location")}
                      className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-300 shadow-lg"
                    >
                      Find Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? "bg-amber-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
