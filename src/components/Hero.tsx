import React from 'react';
import { Calendar, Shield, Clock, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-sky-50 to-blue-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Trusted Care,
                <span className="block text-sky-600">Delivered Fast</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Experience compassionate healthcare with our team of dedicated professionals. 
                We're here to provide quality medical care when you need it most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center text-lg font-semibold shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
              <button className="border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-lg hover:bg-sky-50 transition-colors flex items-center justify-center text-lg font-semibold">
                <Shield className="w-5 h-5 mr-2" />
                Emergency Care
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24/7 Emergency</p>
                  <p className="text-sm text-gray-600">Round-the-clock care</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Team</p>
                  <p className="text-sm text-gray-600">Certified specialists</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Safe & Secure</p>
                  <p className="text-sm text-gray-600">HIPAA compliant</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Medical professional providing care" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}