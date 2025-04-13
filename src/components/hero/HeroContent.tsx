
import React from 'react';
import SearchForm from './SearchForm';
import TrustIndicators from './TrustIndicators';
import { HeroState, HeroActions, predefinedPhrases } from './HeroState';

interface HeroContentProps {
  state: HeroState;
  actions: HeroActions;
  handleSearch: (e: React.FormEvent) => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ state, actions, handleSearch }) => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Home Cleaning,
        <span className="text-blue block mt-2">
          Made Easy.
        </span>
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Find the perfect cleaning service for your home in our 8 service areas.
      </p>
      
      <SearchForm 
        jobDescription={state.jobDescription}
        setJobDescription={actions.setJobDescription}
        zipCode={state.zipCode}
        setZipCode={actions.setZipCode}
        showSuggestions={state.showSuggestions}
        setShowSuggestions={actions.setShowSuggestions}
        selectedPhrase={state.selectedPhrase}
        setSelectedPhrase={actions.setSelectedPhrase}
        predefinedPhrases={predefinedPhrases}
        onSearch={handleSearch}
      />
      
      <TrustIndicators />
    </div>
  );
};

export default HeroContent;
