
import React from 'react';
import { 
  Home, 
  Calendar, 
  Sparkles, 
  Building, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Briefcase 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <Home size={32} className="text-blue" />,
    title: 'Regular Home Cleaning',
    description: 'Recurring cleaning services to keep your home pristine with customized plans.',
  },
  {
    icon: <Sparkles size={32} className="text-blue" />,
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of every corner, perfect for seasonal cleaning or special occasions.',
  },
  {
    icon: <Calendar size={32} className="text-blue" />,
    title: 'Move In/Move Out',
    description: 'Leave your old place spotless or start fresh in your new home with our detailed cleaning.',
  },
  {
    icon: <Building size={32} className="text-blue" />,
    title: 'Commercial Cleaning',
    description: 'Professional cleaning solutions for offices and commercial spaces.',
  },
];

const additionalFeatures = [
  {
    icon: <CheckCircle2 size={20} className="text-blue" />,
    text: 'Eco-friendly products',
  },
  {
    icon: <CheckCircle2 size={20} className="text-blue" />,
    text: 'Background checked staff',
  },
  {
    icon: <CheckCircle2 size={20} className="text-blue" />,
    text: 'Insured & bonded',
  },
  {
    icon: <CheckCircle2 size={20} className="text-blue" />,
    text: 'Satisfaction guarantee',
  },
  {
    icon: <CheckCircle2 size={20} className="text-blue" />,
    text: 'Flexible scheduling',
  },
  {
    icon: <CheckCircle2 size={20} className="text-blue" />,
    text: 'Online booking & management',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">Our Professional Services</h2>
          <p className="section-subtitle">
            Tailored cleaning solutions to meet your specific needs, delivered by experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card hover:translate-y-[-5px]"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-blue font-medium hover:underline"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why choose Extreme Solutions Cleaning?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {feature.icon}
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full">
                  Book a Cleaning
                </Button>
                <Button variant="outline" className="rounded-full border-blue text-blue hover:bg-blue-50">
                  See All Services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-light rounded-2xl p-6 md:p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-blue/10 p-3 rounded-full">
                    <Clock size={24} className="text-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Save time</h4>
                    <p className="text-gray-600">Reclaim your weekends and free time with our reliable cleaning services.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-blue/10 p-3 rounded-full">
                    <Sparkles size={24} className="text-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Consistent quality</h4>
                    <p className="text-gray-600">Enjoy the same high-quality cleaning experience with every visit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue/10 p-3 rounded-full">
                    <Briefcase size={24} className="text-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Professional team</h4>
                    <p className="text-gray-600">Our skilled and vetted cleaning experts deliver excellence every time.</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="hidden lg:block absolute -top-4 -right-4 w-16 h-16 bg-blue/10 rounded-full"></div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 w-20 h-20 bg-blue/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
