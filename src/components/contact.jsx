import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-br from-amber-100 to-yellow-50 py-16">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Liên hệ</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-amber-800 mb-6">Thông tin liên hệ</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-amber-600" />
              <span className="text-amber-700">44 Bùi Thiện Ngộ</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-amber-600" />
              <span className="text-amber-700">0123 456 789</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-amber-600" />
              <span className="text-amber-700">7:00 - 22:00 (Hàng ngày)</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-amber-800 mb-6">Gửi tin nhắn</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Tên của bạn"
              className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none"
            />
            <textarea
              placeholder="Tin nhắn"
              rows="4"
              className="w-full p-3 border border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none"
            ></textarea>
            <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors">
              Gửi tin nhắn
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
