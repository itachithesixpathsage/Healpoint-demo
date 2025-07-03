import React from 'react';
import { Star, Award, Clock, MapPin } from 'lucide-react';

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Family Medicine",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentials: "MD, FAAFP",
      experience: "12 years",
      rating: 4.9,
      education: "Harvard Medical School",
      statement: "I believe in building lasting relationships with my patients and their families, focusing on preventive care and overall wellness.",
      specializations: ["Preventive Medicine", "Chronic Disease Management", "Women's Health"],
      languages: ["English", "Mandarin", "Spanish"]
    },
    {
      name: "Dr. Michael Rodriguez",
      specialty: "Pediatrics",
      image: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentials: "MD, FAAP",
      experience: "15 years",
      rating: 4.8,
      education: "Johns Hopkins School of Medicine",
      statement: "Every child deserves compassionate, comprehensive care. I'm committed to supporting healthy development from infancy through adolescence.",
      specializations: ["Developmental Pediatrics", "Adolescent Medicine", "Pediatric Immunology"],
      languages: ["English", "Spanish"]
    },
    {
      name: "Dr. Jennifer Kim",
      specialty: "Internal Medicine",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
      credentials: "MD, FAIM",
      experience: "10 years",
      rating: 4.9,
      education: "Stanford University School of Medicine",
      statement: "I take a holistic approach to healthcare, working with patients to create personalized treatment plans that fit their lifestyle and goals.",
      specializations: ["Diabetes Care", "Hypertension Management", "Preventive Cardiology"],
      languages: ["English", "Korean"]
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of board-certified physicians brings decades of combined experience 
            and a commitment to providing exceptional, personalized healthcare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-lg">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-gray-900">{doctor.rating}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-sky-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm">{doctor.credentials}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    {doctor.experience}
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Award className="w-4 h-4 mr-2 text-gray-500" />
                    {doctor.education}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{doctor.statement}"</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specializations.map((spec, specIndex) => (
                      <span key={specIndex} className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Languages</h4>
                  <p className="text-gray-600 text-sm">{doctor.languages.join(', ')}</p>
                </div>
                
                <button className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition-colors font-medium">
                  Book with {doctor.name.split(' ')[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}