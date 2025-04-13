
import React from 'react';

const TrustIndicators: React.FC = () => {
  return (
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
  );
};

export default TrustIndicators;
