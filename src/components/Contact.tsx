import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our healthcare team. We're here to help you with appointments, 
            questions, and any healthcare needs you may have.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">Main: (123) 456-7890</p>
                    <p className="text-gray-600">Emergency: (123) 456-7891</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">123 Healthcare Avenue<br />Medical District, MD 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p>Thursday: Extended hours until 8:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@healpointmedical.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 text-green-600 mr-2" />
                Quick Contact via WhatsApp
              </h4>
              <p className="text-gray-600 mb-4">
                For quick questions or urgent matters, reach out to us directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/1234567890"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Appointment Request</option>
                    <option value="billing">Billing Question</option>
                    <option value="medical">Medical Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  placeholder="Please describe your question or concern..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center font-medium"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Find Us</h3>
          <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be embedded here</p>
              <p className="text-sm text-gray-500 mt-2">123 Healthcare Avenue, Medical District, MD 12345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}