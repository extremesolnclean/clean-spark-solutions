import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, MapPin } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!zipCode.trim()) {
      toast({
        title: "ZIP Code Required",
        description: "Please enter your ZIP code to find services in your area.",
        variant: "destructive"
      });
      return;
    }
    
    onSearch(e);
  };

  const handleServiceSelect = (value: string) => {
    setJobDescription(value);
    setSelectedPhrase(value);
    setShowSuggestions(false);
  };

  return (
    <div className="max-w-3xl mx-auto relative">
      <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row gap-3 md:gap-0 p-2 md:p-3 bg-white rounded-md shadow-lg">
        <div className="flex-grow px-2 md:px-4 py-2 md:py-0">
          <Select value={jobDescription} onValueChange={handleServiceSelect}>
            <SelectTrigger className="border-0 text-base md:text-lg h-12 focus:ring-0 pl-1 shadow-none">
              <SelectValue placeholder="What service do you need?" />
            </SelectTrigger>
            <SelectContent>
              {predefinedPhrases.map((phrase, index) => (
                <SelectItem key={index} value={phrase}>
                  {phrase}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center border-l border-gray-200 pl-3 md:pl-5">
          <MapPin className="text-gray-400 mr-1" size={20} />
          <Input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="ZIP Code"
            className="border-0 w-24 md:w-28 text-base md:text-lg focus:ring-0 px-1 shadow-none"
            required
          />
        </div>
        
        <div className="px-2">
          <Button type="submit" className="w-full md:w-auto h-12 px-6 md:px-8 rounded-md bg-blue hover:bg-blue-dark">
            <span>Search</span>
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
