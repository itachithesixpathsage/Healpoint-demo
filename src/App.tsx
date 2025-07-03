import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import PatientResources from './components/PatientResources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <PatientResources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;