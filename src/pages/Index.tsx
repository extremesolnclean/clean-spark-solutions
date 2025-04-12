
import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Cities from '@/components/sections/Cities';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Cities />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
