import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

export interface HeroState {
  jobDescription: string;
  zipCode: string;
  showDialog: boolean;
  showBathroomsDialog: boolean;
  showCleaningTypeDialog: boolean;
  showAdditionalOptionsDialog: boolean;
  showDateSelectionDialog: boolean;
  showDescriptionDialog: boolean;
  showContactInfoDialog: boolean;
  selectedBedrooms: number | null;
  selectedBathrooms: number | null;
  selectedCleaningType: string | null;
  selectedAdditionalOptions: string[];
  selectedDate: Date | undefined;
  description: string;
  fullName: string;
  email: string;
  phoneNumber: string;
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
  setShowDateSelectionDialog: (value: boolean) => void;
  setShowDescriptionDialog: (value: boolean) => void;
  setShowContactInfoDialog: (value: boolean) => void;
  handleBedroomSelect: (option: number) => void;
  handleBathroomSelect: (option: number) => void;
  handleCleaningTypeSelect: (option: string) => void;
  handleAdditionalOptionToggle: (option: string) => void;
  handleDateSelect: (date: Date | undefined) => void;
  handleDescriptionChange: (value: string) => void;
  handleFullNameChange: (value: string) => void;
  handleEmailChange: (value: string) => void;
  handlePhoneNumberChange: (value: string) => void;
  setShowSuggestions: (value: boolean) => void;
  setSelectedPhrase: (value: string | null) => void;
}

export const predefinedPhrases = [
  "Standard Home Cleaning",
  "Deep Cleaning",
  "Move In/Out Cleaning",
  "Vacation Rental Cleaning",
  "Office Cleaning",
  "Post-Construction Cleaning",
  "Apartment Cleaning",
  "Recurring Cleaning Service"
];

export function useHeroState() {
  const [jobDescription, setJobDescription] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [showBathroomsDialog, setShowBathroomsDialog] = useState(false);
  const [showCleaningTypeDialog, setShowCleaningTypeDialog] = useState(false);
  const [showAdditionalOptionsDialog, setShowAdditionalOptionsDialog] = useState(false);
  const [showDateSelectionDialog, setShowDateSelectionDialog] = useState(false);
  const [showDescriptionDialog, setShowDescriptionDialog] = useState(false);
  const [showContactInfoDialog, setShowContactInfoDialog] = useState(false);
  const [selectedBedrooms, setSelectedBedrooms] = useState<number | null>(null);
  const [selectedBathrooms, setSelectedBathrooms] = useState<number | null>(null);
  const [selectedCleaningType, setSelectedCleaningType] = useState<string | null>(null);
  const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const handleFullNameChange = (value: string) => {
    setFullName(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  return {
    state: {
      jobDescription,
      zipCode,
      showDialog,
      showBathroomsDialog,
      showCleaningTypeDialog,
      showAdditionalOptionsDialog,
      showDateSelectionDialog,
      showDescriptionDialog,
      showContactInfoDialog,
      selectedBedrooms,
      selectedBathrooms,
      selectedCleaningType,
      selectedAdditionalOptions,
      selectedDate,
      description,
      fullName,
      email,
      phoneNumber,
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
      setShowDateSelectionDialog,
      setShowDescriptionDialog,
      setShowContactInfoDialog,
      handleBedroomSelect,
      handleBathroomSelect,
      handleCleaningTypeSelect,
      handleAdditionalOptionToggle,
      handleDateSelect,
      handleDescriptionChange,
      handleFullNameChange,
      handleEmailChange,
      handlePhoneNumberChange,
      setShowSuggestions,
      setSelectedPhrase,
    },
    toast
  };
}
