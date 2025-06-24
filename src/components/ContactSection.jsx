import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-amber-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ & Địa Chỉ</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-amber-200" />
            <h3 className="text-xl font-bold mb-2">Địa Chỉ</h3>
            <p className="text-amber-100">44 Bùi Thiện Ngộ<br />Đà Nẵng, Việt Nam</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <Clock className="h-12 w-12 mx-auto mb-4 text-amber-200" />
            <h3 className="text-xl font-bold mb-2">Giờ Mở Cửa</h3>
            <p className="text-amber-100">Thứ 2 - Chủ Nhật<br />7:00 AM - 10:00 PM</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <Phone className="h-12 w-12 mx-auto mb-4 text-amber-200" />
            <h3 className="text-xl font-bold mb-2">Đặt Bàn</h3>
            <p className="text-amber-100">0123 456 789<br />dreamhouse@coffee.vn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;