import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import SearchForm from '../hero/SearchForm';
import BedroomsDialog from '../hero/BedroomsDialog';
import BathroomsDialog from '../hero/BathroomsDialog';
import CleaningTypeDialog from '../hero/CleaningTypeDialog';
import AdditionalOptionsDialog from '../hero/AdditionalOptionsDialog';
import TrustIndicators from '../hero/TrustIndicators';

const Hero = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [showBathroomsDialog, setShowBathroomsDialog] = useState(false);
  const [showCleaningTypeDialog, setShowCleaningTypeDialog] = useState(false);
  const [showAdditionalOptionsDialog, setShowAdditionalOptionsDialog] = useState(false);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number | null>(null);
  const [selectedBathrooms, setSelectedBathrooms] = useState<number | null>(null);
  const [selectedCleaningType, setSelectedCleaningType] = useState<string | null>(null);
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPhrase, setSelectedPhrase] = useState<string | null>(null);
  const { toast } = useToast();

  // Predefined phrases
  const predefinedPhrases = [
    "I'm looking for a house cleaner",
    "Need commercial cleaning service for my office",
    "Looking for sofa cleaning services",
    "Need house painting services",
    "Need carpet shampooing service"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPhrase) {
      toast({
        title: "Please select a service",
        description: "Choose one of the suggested services to continue",
        variant: "destructive",
      });
      return;
    }
    
    // Only show the dialog for house cleaning service
    if (selectedPhrase === "I'm looking for a house cleaner") {
      setShowDialog(true);
    } else {
      // For other services, just show a toast for now
      toast({
        title: "Service Coming Soon",
        description: "This service option will be available soon!",
      });
    }
  };

  const handleBedroomSelect = (option: number) => {
    setSelectedBedrooms(option);
  };

  const handleBathroomSelect = (option: number) => {
    setSelectedBathrooms(option);
  };

  const handleCleaningTypeSelect = (option: string) => {
    setSelectedCleaningType(option);
  };

  const handleAdditionalOptionToggle = (option: string) => {
    setSelectedAdditionalOptions(prev => {
      if (prev.includes(option)) {
        return prev.filter(item => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleNextAfterBedrooms = () => {
    if (!selectedBedrooms) {
      toast({
        title: "Please select an option",
        description: "Select the number of bedrooms to continue",
        variant: "destructive",
      });
      return;
    }
    
    // Close bedrooms dialog and open bathrooms dialog
    setShowDialog(false);
    setShowBathroomsDialog(true);
  };

  const handleNextAfterBathrooms = () => {
    if (!selectedBathrooms) {
      toast({
        title: "Please select an option",
        description: "Select the number of bathrooms to continue",
        variant: "destructive",
      });
      return;
    }

    // Close bathrooms dialog and open cleaning type dialog
    setShowBathroomsDialog(false);
    setShowCleaningTypeDialog(true);
  };

  const handleNextAfterCleaningType = () => {
    if (!selectedCleaningType) {
      toast({
        title: "Please select an option",
        description: "Select the type of cleaning you need to continue",
        variant: "destructive",
      });
      return;
    }

    // Close cleaning type dialog and open additional options dialog
    setShowCleaningTypeDialog(false);
    setShowAdditionalOptionsDialog(true);
  };

  const handleNextAfterAdditionalOptions = () => {
    // Process the completed form data with all selections
    toast({
      title: "Information Submitted",
      description: `You selected ${selectedBedrooms} bedroom(s), ${selectedBathrooms} bathroom(s), ${selectedCleaningType} cleaning, and ${selectedAdditionalOptions.length} additional options`,
    });
    
    // Close the additional options dialog
    setShowAdditionalOptionsDialog(false);
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
          
          <SearchForm 
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
            zipCode={zipCode}
            setZipCode={setZipCode}
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
            selectedPhrase={selectedPhrase}
            setSelectedPhrase={setSelectedPhrase}
            predefinedPhrases={predefinedPhrases}
            onSearch={handleSearch}
          />
          
          <TrustIndicators />
        </div>
      </div>

      {/* Bedrooms Selection Dialog */}
      <BedroomsDialog 
        open={showDialog}
        onOpenChange={setShowDialog}
        selectedBedrooms={selectedBedrooms}
        onBedroomSelect={handleBedroomSelect}
        onNext={handleNextAfterBedrooms}
      />

      {/* Bathrooms Selection Dialog */}
      <BathroomsDialog 
        open={showBathroomsDialog}
        onOpenChange={setShowBathroomsDialog}
        selectedBathrooms={selectedBathrooms}
        onBathroomSelect={handleBathroomSelect}
        onBack={() => {
          setShowBathroomsDialog(false);
          setShowDialog(true);
        }}
        onNext={handleNextAfterBathrooms}
      />

      {/* Cleaning Type Selection Dialog */}
      <CleaningTypeDialog 
        open={showCleaningTypeDialog}
        onOpenChange={setShowCleaningTypeDialog}
        selectedCleaningType={selectedCleaningType}
        onCleaningTypeSelect={handleCleaningTypeSelect}
        onBack={() => {
          setShowCleaningTypeDialog(false);
          setShowBathroomsDialog(true);
        }}
        onNext={handleNextAfterCleaningType}
      />

      {/* Additional Options Dialog */}
      <AdditionalOptionsDialog
        open={showAdditionalOptionsDialog}
        onOpenChange={setShowAdditionalOptionsDialog}
        selectedOptions={selectedAdditionalOptions}
        onOptionToggle={handleAdditionalOptionToggle}
        onBack={() => {
          setShowAdditionalOptionsDialog(false);
          setShowCleaningTypeDialog(true);
        }}
        onNext={handleNextAfterAdditionalOptions}
      />
    </div>
  );
};

export default Hero;
