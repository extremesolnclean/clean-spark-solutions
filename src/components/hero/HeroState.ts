
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

export interface HeroState {
  jobDescription: string;
  zipCode: string;
  showDialog: boolean;
  showBathroomsDialog: boolean;
  showCleaningTypeDialog: boolean;
  showAdditionalOptionsDialog: boolean;
  showDescriptionDialog: boolean;
  selectedBedrooms: number | null;
  selectedBathrooms: number | null;
  selectedCleaningType: string | null;
  selectedAdditionalOptions: string[];
  description: string;
  showSuggestions: boolean;
  selectedPhrase: string | null;
}

export interface HeroActions {
  setJobDescription: (value: string) => void;
  setZipCode: (value: string) => void;
  setShowDialog: (value: boolean) => void;
  setShowBathroomsDialog: (value: boolean) => void;
  setShowCleaningTypeDialog: (value: boolean) => void;
  setShowAdditionalOptionsDialog: (value: boolean) => void;
  setShowDescriptionDialog: (value: boolean) => void;
  handleBedroomSelect: (option: number) => void;
  handleBathroomSelect: (option: number) => void;
  handleCleaningTypeSelect: (option: string) => void;
  handleAdditionalOptionToggle: (option: string) => void;
  handleDescriptionChange: (value: string) => void;
  setShowSuggestions: (value: boolean) => void;
  setSelectedPhrase: (value: string | null) => void;
}

export const predefinedPhrases = [
  "I'm looking for a house cleaner",
  "Need commercial cleaning service for my office",
  "Looking for sofa cleaning services",
  "Need house painting services",
  "Need carpet shampooing service"
];

export function useHeroState() {
  const [jobDescription, setJobDescription] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [showBathroomsDialog, setShowBathroomsDialog] = useState(false);
  const [showCleaningTypeDialog, setShowCleaningTypeDialog] = useState(false);
  const [showAdditionalOptionsDialog, setShowAdditionalOptionsDialog] = useState(false);
  const [showDescriptionDialog, setShowDescriptionDialog] = useState(false);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number | null>(null);
  const [selectedBathrooms, setSelectedBathrooms] = useState<number | null>(null);
  const [selectedCleaningType, setSelectedCleaningType] = useState<string | null>(null);
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPhrase, setSelectedPhrase] = useState<string | null>(null);
  const { toast } = useToast();

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

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  return {
    state: {
      jobDescription,
      zipCode,
      showDialog,
      showBathroomsDialog,
      showCleaningTypeDialog,
      showAdditionalOptionsDialog,
      showDescriptionDialog,
      selectedBedrooms,
      selectedBathrooms,
      selectedCleaningType,
      selectedAdditionalOptions,
      description,
      showSuggestions,
      selectedPhrase,
    },
    actions: {
      setJobDescription,
      setZipCode,
      setShowDialog,
      setShowBathroomsDialog,
      setShowCleaningTypeDialog,
      setShowAdditionalOptionsDialog,
      setShowDescriptionDialog,
      handleBedroomSelect,
      handleBathroomSelect,
      handleCleaningTypeSelect,
      handleAdditionalOptionToggle,
      handleDescriptionChange,
      setShowSuggestions,
      setSelectedPhrase,
    },
    toast
  };
}
