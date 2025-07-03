import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, CreditCard, Shield, Download } from 'lucide-react';

export default function PatientResources() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records. If you're seeing a specialist, bring your referral letter from your primary care physician."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can schedule appointments by calling our office at (123) 456-7890, using our online booking system, or through our patient portal. We offer same-day appointments for urgent care needs."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. Please contact our billing department to verify your specific coverage."
    },
    {
      question: "What are your office hours?",
      answer: "We're open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 2:00 PM. We also offer extended hours on Thursdays until 8:00 PM for your convenience."
    },
    {
      question: "How do I access my test results?",
      answer: "Test results are available through our secure patient portal within 24-48 hours. You'll receive an email notification when results are ready. You can also call our office to discuss results with your healthcare provider."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours notice for appointment cancellations. Same-day cancellations or no-shows may result in a cancellation fee. Please call us as soon as possible if you need to reschedule."
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: "Patient Forms",
      description: "Download and complete forms before your visit",
      items: ["New Patient Registration", "Medical History Form", "Insurance Information", "HIPAA Authorization"]
    },
    {
      icon: CreditCard,
      title: "Insurance & Billing",
      description: "Information about insurance and payment options",
      items: ["Accepted Insurance Plans", "Payment Options", "Financial Assistance", "Billing Questions"]
    },
    {
      icon: Shield,
      title: "Privacy & Policies",
      description: "Our commitment to protecting your information",
      items: ["Privacy Policy", "HIPAA Rights", "Patient Rights", "Clinic Policies"]
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about your healthcare journey with us. 
            Find answers to common questions and access important forms and information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <resource.icon className="w-8 h-8 text-sky-600" />
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{resource.title}</h3>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              
              <ul className="space-y-3">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center justify-between text-gray-700 hover:text-sky-600 cursor-pointer transition-colors">
                    <span>{item}</span>
                    <Download className="w-4 h-4" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}