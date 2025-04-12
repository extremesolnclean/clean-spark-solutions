
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-gray-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional Home Cleaning,
              <span className="text-blue block mt-2">
                Made Easy.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Trusted cleaning services in 8 major cities. We bring sparkle to your home while you focus on what matters most.
            </p>
            <form className="max-w-md mx-auto lg:mx-0 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <Input
                    type="text"
                    placeholder="Enter your ZIP code"
                    className="pl-10 h-12 rounded-full shadow-md focus:shadow-button"
                  />
                </div>
                <Button type="submit" className="h-12 rounded-full">
                  Get Quote <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </form>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue rounded-full mr-2"></span>
                <span>Insured & Bonded</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue rounded-full mr-2"></span>
                <span>5-Star Service</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-blue rounded-full mr-2"></span>
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get an instant quote</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select 
                      id="service" 
                      className="input-field"
                      defaultValue=""
                    >
                      <option value="" disabled>Select service type</option>
                      <option value="regular">Regular Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move">Move In/Out Cleaning</option>
                      <option value="office">Office Cleaning</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Home Size</label>
                    <select 
                      id="size" 
                      className="input-field"
                      defaultValue=""
                    >
                      <option value="" disabled>Select home size</option>
                      <option value="studio">Studio / 1 Bath</option>
                      <option value="1bed">1 Bedroom / 1 Bath</option>
                      <option value="2bed">2 Bedroom / 1-2 Bath</option>
                      <option value="3bed">3+ Bedroom / 2+ Bath</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="input-field"
                    />
                  </div>
                  <Button className="w-full rounded-full">
                    See Pricing
                  </Button>
                </form>
                <p className="text-xs text-center text-gray-500 mt-4">
                  No credit card required. Free instant quote.
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="hidden md:block absolute -bottom-6 -left-6 w-20 h-20 bg-blue/10 rounded-full"></div>
              <div className="hidden md:block absolute -top-6 -right-6 w-12 h-12 bg-blue/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
