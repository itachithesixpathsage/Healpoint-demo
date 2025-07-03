import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">HealPoint</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-sky-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-sky-600 transition-colors">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-sky-600 transition-colors">Doctors</a>
              <a href="#resources" className="text-gray-700 hover:text-sky-600 transition-colors">Resources</a>
              <a href="#contact" className="text-gray-700 hover:text-sky-600 transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-sky-600 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">Emergency: (123) 456-7890</span>
            </a>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sky-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-sky-600 transition-colors">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-sky-600 transition-colors">Services</a>
            <a href="#doctors" className="block px-3 py-2 text-gray-700 hover:text-sky-600 transition-colors">Doctors</a>
            <a href="#resources" className="block px-3 py-2 text-gray-700 hover:text-sky-600 transition-colors">Resources</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-sky-600 transition-colors">Contact</a>
            <div className="px-3 py-2 border-t border-gray-200">
              <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:text-sky-600 transition-colors mb-2">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">Emergency: (123) 456-7890</span>
              </a>
              <button className="w-full bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}