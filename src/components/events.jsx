import React from "react";
import { Calendar } from "lucide-react";
import { events } from "../data/events";

const Events = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-amber-50 py-16">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Sự kiện sắp tới</h2>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Calendar className="text-amber-600 h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-amber-900 mb-2">{event.title}</h3>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-amber-700 font-semibold">{event.date}</span>
                  <span className="text-amber-600">{event.time}</span>
                </div>
                <p className="text-amber-700 text-lg">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Events;
