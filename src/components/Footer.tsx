import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="ml-2 text-xl font-bold">HealPoint Medical</span>
            </div>
            <p className="text-gray-400">
              Providing trusted, compassionate healthcare services to our community 
              with a commitment to excellence and patient-centered care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">General Practice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pediatrics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diagnostic Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ophthalmology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orthopedics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mental Health</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Patient Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patient Forms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Billing & Payments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patient Rights</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>123 Healthcare Avenue<br />Medical District, MD 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>info@healpointmedical.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 HealPoint Medical Clinic. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}