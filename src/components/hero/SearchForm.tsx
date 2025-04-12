
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface SearchFormProps {
  jobDescription: string;
  setJobDescription: React.Dispatch<React.SetStateAction<string>>;
  zipCode: string;
  setZipCode: React.Dispatch<React.SetStateAction<string>>;
  showSuggestions: boolean;
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPhrase: string | null;
  setSelectedPhrase: React.Dispatch<React.SetStateAction<string | null>>;
  predefinedPhrases: string[];
  onSearch: (e: React.FormEvent) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  jobDescription,
  setJobDescription,
  zipCode,
  setZipCode,
  showSuggestions,
  setShowSuggestions,
  selectedPhrase,
  setSelectedPhrase,
  predefinedPhrases,
  onSearch
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobDescription(e.target.value);
    if (e.target.value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
    setSelectedPhrase(null);
  };

  const handleInputFocus = () => {
    if (jobDescription.length > 0 && !selectedPhrase) {
      setShowSuggestions(true);
    }
  };

  const handlePhraseSelect = (phrase: string) => {
    setJobDescription(phrase);
    setSelectedPhrase(phrase);
    setShowSuggestions(false);
  };

  return (
    <div className="max-w-3xl mx-auto relative">
      <form onSubmit={onSearch} className="flex flex-col md:flex-row gap-3 md:gap-0 p-2 md:p-3 bg-white rounded-full shadow-lg">
        <div className="flex-grow px-2 md:px-4 py-2 md:py-0">
          <Input 
            type="text" 
            value={jobDescription}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
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
      
      {/* Suggestions dropdown */}
      {showSuggestions && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-40">
          <div className="p-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-500">Popular searches</p>
          </div>
          <div className="py-2">
            {predefinedPhrases.map((phrase, index) => (
              <button 
                key={index} 
                className={`w-full text-left px-4 py-3 flex items-center hover:bg-gray-50 ${selectedPhrase === phrase ? 'bg-gray-50' : ''}`}
                onClick={() => handlePhraseSelect(phrase)}
              >
                <Search className="text-gray-400 mr-3" size={18} />
                <span className="text-gray-700">{phrase}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
