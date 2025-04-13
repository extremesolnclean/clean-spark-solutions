
import { format } from 'date-fns';
import { HeroState, HeroActions } from "./HeroState";
import { toast as toastFunction } from "@/hooks/use-toast";

export interface HeroHandlersProps {
  state: HeroState;
  actions: HeroActions;
  toast: typeof toastFunction;
}

export function useHeroHandlers({ state, actions, toast }: HeroHandlersProps) {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!state.selectedPhrase) {
      toast({
        title: "Please select a service",
        description: "Choose one of the suggested services to continue",
        variant: "destructive",
      });
      return;
    }
    
    // Agora verificamos tanto "House Cleaning" quanto o valor antigo para compatibilidade
    if (state.selectedPhrase === "House Cleaning") {
      actions.setShowDialog(true);
    } else {
      // Para outros serviços, apenas mostrar um toast por enquanto
      toast({
        title: "Service Coming Soon",
        description: "This service option will be available soon!",
      });
    }
  };

  const handleNextAfterBedrooms = () => {
    if (!state.selectedBedrooms) {
      toast({
        title: "Please select an option",
        description: "Select the number of bedrooms to continue",
        variant: "destructive",
      });
      return;
    }
    
    // Close bedrooms dialog and open bathrooms dialog
    actions.setShowDialog(false);
    actions.setShowBathroomsDialog(true);
  };

  const handleNextAfterBathrooms = () => {
    if (!state.selectedBathrooms) {
      toast({
        title: "Please select an option",
        description: "Select the number of bathrooms to continue",
        variant: "destructive",
      });
      return;
    }

    // Close bathrooms dialog and open cleaning type dialog
    actions.setShowBathroomsDialog(false);
    actions.setShowCleaningTypeDialog(true);
  };

  const handleNextAfterCleaningType = () => {
    if (!state.selectedCleaningType) {
      toast({
        title: "Please select an option",
        description: "Select the type of cleaning you need to continue",
        variant: "destructive",
      });
      return;
    }

    // Close cleaning type dialog and open additional options dialog
    actions.setShowCleaningTypeDialog(false);
    actions.setShowAdditionalOptionsDialog(true);
  };

  const handleNextAfterAdditionalOptions = () => {
    // Close the additional options dialog and open date selection dialog
    actions.setShowAdditionalOptionsDialog(false);
    actions.setShowDateSelectionDialog(true);
  };

  const handleNextAfterDateSelection = () => {
    if (!state.selectedDate) {
      toast({
        title: "Please select a date",
        description: "Select a preferred date for your cleaning service",
        variant: "destructive",
      });
      return;
    }
    
    // Close date selection dialog and open description dialog
    actions.setShowDateSelectionDialog(false);
    actions.setShowDescriptionDialog(true);
  };

  const handleNextAfterDescription = () => {
    // Close the description dialog and open contact info dialog
    actions.setShowDescriptionDialog(false);
    actions.setShowContactInfoDialog(true);
  };

  const handleFinishBooking = () => {
    // Validate email format
    if (state.fullName.trim() === '') {
      toast({
        title: "Please enter your full name",
        description: "We need your name to process your booking",
        variant: "destructive",
      });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    if (state.phoneNumber.trim() === '') {
      toast({
        title: "Please enter your phone number",
        description: "We need your phone number to process your booking",
        variant: "destructive",
      });
      return;
    }

    // Format the date to display in the toast
    const formattedDate = state.selectedDate ? format(state.selectedDate, 'MMMM d, yyyy') : "";
    
    // Process the completed form data with all selections
    toast({
      title: "Booking Submitted",
      description: `Thank you, ${state.fullName}! We've received your request for ${state.selectedBedrooms} bedroom(s), ${state.selectedBathrooms} bathroom(s) with ${state.selectedCleaningType} cleaning on ${formattedDate}. We'll be in touch soon!`,
    });
    
    // Close the contact info dialog
    actions.setShowContactInfoDialog(false);
  };

  const handleBackToBedroomsDialog = () => {
    actions.setShowBathroomsDialog(false);
    actions.setShowDialog(true);
  };

  const handleBackToCleaningTypeDialog = () => {
    actions.setShowAdditionalOptionsDialog(false);
    actions.setShowCleaningTypeDialog(true);
  };

  const handleBackToBathroomsDialog = () => {
    actions.setShowCleaningTypeDialog(false);
    actions.setShowBathroomsDialog(true);
  };

  const handleBackToAdditionalOptionsDialog = () => {
    actions.setShowDateSelectionDialog(false);
    actions.setShowAdditionalOptionsDialog(true);
  };

  const handleBackToDateSelectionDialog = () => {
    actions.setShowDescriptionDialog(false);
    actions.setShowDateSelectionDialog(true);
  };

  const handleBackToDescriptionDialog = () => {
    actions.setShowContactInfoDialog(false);
    actions.setShowDescriptionDialog(true);
  };

  return {
    handleSearch,
    handleNextAfterBedrooms,
    handleNextAfterBathrooms,
    handleNextAfterCleaningType,
    handleNextAfterAdditionalOptions,
    handleNextAfterDateSelection,
    handleNextAfterDescription,
    handleFinishBooking,
    handleBackToBedroomsDialog,
    handleBackToCleaningTypeDialog,
    handleBackToBathroomsDialog,
    handleBackToAdditionalOptionsDialog,
    handleBackToDateSelectionDialog,
    handleBackToDescriptionDialog
  };
}
