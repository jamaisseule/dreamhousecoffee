// About.js
import React from 'react';
import { Coffee, Star, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Premium Quality",
      description: "We source the finest beans from sustainable farms and roast them to perfection in small batches."
    },
    {
      icon: Star,
      title: "Authentic Experience",
      description: "Every cup tells a story of craftsmanship, tradition, and the pursuit of coffee excellence."
    },
    {
      icon: MapPin,
      title: "Community Hub",
      description: "More than a coffee shop, we're a gathering place where relationships are brewed and memories are made."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#c49b63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dream House Coffee was born from a passion for exceptional coffee and creating meaningful connections within our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
// about about
export default About;