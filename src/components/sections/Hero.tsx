
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, MapPin, Star, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Hero = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const handleOptionSelect = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-light to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Home Cleaning,
            <span className="text-blue block mt-2">
              Made Easy.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Trusted cleaning services in 8 major cities. We bring sparkle to your home while you focus on what matters most.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 md:gap-0 p-2 md:p-3 bg-white rounded-full shadow-lg">
              <div className="flex-grow px-2 md:px-4 py-2 md:py-0">
                <Input 
                  type="text" 
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Describe your cleaning project or problem — be as detailed as you'd like" 
                  className="border-0 text-base md:text-lg h-12 focus:ring-0 pl-1 shadow-none"
                />
              </div>
              <div className="flex items-center border-l border-gray-200 pl-3 md:pl-5">
                <MapPin className="text-gray-400 mr-1" size={20} />
                <Input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="ZIP Code"
                  className="border-0 w-24 md:w-28 text-base md:text-lg focus:ring-0 px-1 shadow-none"
                />
              </div>
              <div className="px-2">
                <Button type="submit" className="w-full md:w-auto h-12 px-6 md:px-8 rounded-full bg-blue hover:bg-blue-dark">
                  <span>Search</span>
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="flex items-center justify-center mt-6 text-gray-600 text-sm">
            <div className="flex items-center">
              <span>Trusted by 4.5M+ people</span>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <span>4.9/5</span>
                <Star size={14} fill="#FFC107" color="#FFC107" className="ml-1" />
              </div>
              <span className="mx-2">•</span>
              <span>300k+ reviews across all cities</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-8">
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
      </div>

      {/* Dialog for bedroom selection */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md bg-white rounded-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-semibold">
              How many bedrooms are there?
            </DialogTitle>
            <button 
              onClick={() => setShowDialog(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogHeader>
          
          <div className="mt-6 flex flex-col space-y-3">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <label key={num} className="flex items-center cursor-pointer">
                <div className="flex items-center justify-center w-6 h-6 mr-4">
                  <input
                    type="radio"
                    name="bedrooms"
                    value={num}
                    checked={selectedOption === num}
                    onChange={() => handleOptionSelect(num)}
                    className="hidden"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedOption === num ? 'border-blue' : 'border-gray-300'}`}>
                    {selectedOption === num && (
                      <div className="w-3 h-3 rounded-full bg-blue"></div>
                    )}
                  </div>
                </div>
                <span className="text-gray-800">
                  {num === 1 ? `${num} bedroom` : `${num} bedrooms`}
                </span>
              </label>
            ))}
          </div>
          
          <div className="mt-8">
            <Button 
              type="button"
              className="w-full h-12 rounded-md text-white font-medium text-center bg-blue hover:bg-blue-dark"
            >
              Next
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
