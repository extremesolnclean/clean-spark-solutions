
import React from 'react';
import { Star } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default TrustIndicators;
