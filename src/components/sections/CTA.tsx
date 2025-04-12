
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-blue to-blue-light rounded-2xl overflow-hidden shadow-lg">
          <div className="p-8 md:p-12 relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Ready for a cleaner, more relaxing home environment?
                </h2>
                <div className="space-y-3 mb-8 text-white/90">
                  <div className="flex items-center">
                    <CheckCircle size={20} className="mr-3" />
                    <span>Quick and easy booking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="mr-3" />
                    <span>Top-rated professional cleaners</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="mr-3" />
                    <span>Customized to your needs</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="mr-3" />
                    <span>Satisfaction guaranteed</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="bg-white text-blue hover:bg-gray-100 rounded-full">
                    Book Now <ArrowRight size={16} className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full">
                    View Services
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Schedule your cleaning in seconds
                </h3>
                <form className="space-y-4">
                  <div>
                    <select className="input-field" defaultValue="">
                      <option value="" disabled>Select service type</option>
                      <option value="regular">Regular Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move">Move In/Out</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="input-field"
                    />
                    <select className="input-field" defaultValue="">
                      <option value="" disabled>Home size</option>
                      <option value="studio">Studio</option>
                      <option value="1bed">1 Bedroom</option>
                      <option value="2bed">2 Bedrooms</option>
                      <option value="3bed">3+ Bedrooms</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input-field"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="input-field"
                    />
                  </div>
                  <Button className="w-full bg-blue hover:bg-blue-dark rounded-full">
                    Get Your Price
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    No credit card required. Free estimate.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
