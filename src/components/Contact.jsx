// Contact.js
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  PhoneCall,
} from "lucide-react";
import { contactInfo } from "../data/menuData";

const Contact = () => {
  const handleSubmit = () => {
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-amber-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-amber-400" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-amber-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/dreamhouse.coffee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 cursor-pointer transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/cafe.dreamhouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 cursor-pointer transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="tel:+84906538102"
                  className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 cursor-pointer transition-colors"
                >
                  <PhoneCall className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white"
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 text-white resize-none"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
