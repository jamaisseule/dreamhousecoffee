import React from "react";
import { Gift } from "lucide-react";
import { promotions } from "../data/promotion";

const Promotions = () => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 py-16">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Khuyến mãi đặc biệt</h2>
      <div className="space-y-6">
        {promotions.map((promo, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-amber-500">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <Gift className="text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-amber-900">{promo.title}</h3>
                </div>
                <p className="text-amber-700 text-lg mb-3">{promo.description}</p>
                <p className="text-amber-600 font-semibold">{promo.validUntil}</p>
              </div>
              <div className="bg-amber-100 px-4 py-2 rounded-full">
                <span className="text-amber-800 font-semibold text-sm uppercase">
                  {promo.type === "daily"
                    ? "Hàng ngày"
                    : promo.type === "student"
                    ? "Sinh viên"
                    : "Cuối tuần"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Promotions;
