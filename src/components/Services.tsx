import React from 'react';
import { Heart, Baby, Stethoscope, Eye, Bone, Brain, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "General Practice",
      description: "Comprehensive primary care services including routine check-ups, preventive care, and treatment of common conditions.",
      features: ["Annual Physical Exams", "Chronic Disease Management", "Preventive Screenings", "Immunizations"]
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents with a focus on growth, development, and wellness.",
      features: ["Well-Child Visits", "Developmental Screenings", "Vaccinations", "Pediatric Sick Care"]
    },
    {
      icon: Stethoscope,
      title: "Diagnostic Services",
      description: "Advanced diagnostic testing and imaging services to accurately identify and monitor health conditions.",
      features: ["Laboratory Testing", "X-Ray Imaging", "EKG Services", "Health Screenings"]
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services from routine eye exams to specialized treatment of eye conditions.",
      features: ["Comprehensive Eye Exams", "Glaucoma Screening", "Diabetic Eye Care", "Vision Correction"]
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Expert care for bones, joints, muscles, and connective tissues to restore mobility and function.",
      features: ["Joint Pain Treatment", "Sports Medicine", "Fracture Care", "Physical Therapy"]
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Compassionate mental health services to support emotional wellbeing and psychological health.",
      features: ["Counseling Services", "Anxiety & Depression Care", "Stress Management", "Therapy Sessions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive healthcare services with a patient-centered approach, 
            ensuring you receive the best possible care for your health needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 group">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors">
                <service.icon className="w-8 h-8 text-sky-600" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium group-hover:translate-x-1 transition-transform">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}