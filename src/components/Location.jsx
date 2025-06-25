// Location.js
import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { contactInfo } from "../data/menuData";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-[#c49b63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600">
            Find your perfect spot in our cozy coffee house
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-amber-50 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Address
                    </h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Hours
                    </h3>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Phone
                    </h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-amber-600 mt-1"
                  >
                    <path d="M22 12.07C22 6.53 17.52 2 12 2S2 6.53 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H8.08v-2.91h2.36V9.83c0-2.33 1.38-3.63 3.5-3.63.71 0 1.44.12 1.44.12v1.61h-.81c-1.27 0-1.67.79-1.67 1.6v1.93h2.84l-.45 2.91h-2.39v7.02C18.34 21.25 22 17.09 22 12.07z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Facebook
                    </h3>
                    <a
                      href="https://www.facebook.com/cafe.dreamhouse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:underline"
                    >
                      facebook.com/cafe.dreamhouse
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.972370346066!2d108.21491787471057!3d16.014953740889514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a1ee7648167%3A0x2397a7648f7a3497!2zNDQgQsO5aSBUaGnhu4duIE5n4buZLCBIb8OgIFh1w6JuLCBD4bqpbSBM4buHLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1750775764212!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
