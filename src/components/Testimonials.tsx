import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "The team at HealPoint truly cares about their patients. Dr. Chen took the time to listen to my concerns and created a treatment plan that worked perfectly for me. The staff is professional and the facility is always clean and welcoming.",
      service: "Family Medicine"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "As a parent, finding the right pediatrician was crucial. Dr. Rodriguez has been amazing with my children. He's patient, knowledgeable, and makes every visit comfortable. I couldn't ask for better care.",
      service: "Pediatrics"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "The diagnostic services at HealPoint are top-notch. Quick, accurate, and the results were explained clearly. The entire process was seamless and stress-free. Highly recommend their services.",
      service: "Diagnostic Services"
    },
    {
      name: "David K.",
      rating: 5,
      text: "I've been a patient here for over 3 years and the consistency of care is outstanding. The online booking system is convenient, and I've never had to wait long for appointments. Excellent healthcare experience.",
      service: "General Practice"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to serve our community and grateful for the trust our patients place in us. 
            Here's what some of them have to say about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-sky-200" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-sky-600">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-sky-50 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
            <span className="text-gray-900 font-medium">4.9/5 average rating from 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}