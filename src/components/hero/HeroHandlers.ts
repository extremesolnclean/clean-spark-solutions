import { format } from 'date-fns';
import { HeroState, HeroActions } from "./HeroState";
import { toast as toastFunction } from "@/hooks/use-toast";
import { useEffect, useRef } from 'react';

export interface HeroHandlersProps {
  state: HeroState;
  actions: HeroActions;
  toast: typeof toastFunction;
}

export function useHeroHandlers({ state, actions, toast }: HeroHandlersProps) {
  // Refs to track previous selection values
  const prevSelectedBedrooms = useRef(state.selectedBedrooms);
  const prevSelectedBathrooms = useRef(state.selectedBathrooms);
  const prevSelectedCleaningType = useRef(state.selectedCleaningType);

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
    if (!state.selectedDateRange?.from) {
      toast({
        title: "Please select a date or range",
        description: "Select a preferred date or date range for your cleaning service",
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

  const handleFinishBooking = (data: { fullName: string; email: string; phoneNumber: string }) => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    // Format the date/range for the toast message
    let formattedDate = "No date selected";
    if (state.selectedDateRange?.from) {
      if (!state.selectedDateRange.to || state.selectedDateRange.from === state.selectedDateRange.to) {
        formattedDate = `on ${format(state.selectedDateRange.from, 'MMMM d, yyyy')}`;
      } else {
        formattedDate = `between ${format(state.selectedDateRange.from, 'MMM d')} and ${format(state.selectedDateRange.to, 'MMM d, yyyy')}`;
      }
    }
    
    // Process the completed form data with all selections
    toast({
      title: "Booking Submitted",
      description: `Thank you, ${data.fullName}! We've received your request for ${state.selectedBedrooms} bedroom(s), ${state.selectedBathrooms} bathroom(s) with ${state.selectedCleaningType} cleaning ${formattedDate}. We'll be in touch soon!`,
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

  // Effect for Bedrooms -> Bathrooms transition
  useEffect(() => {
    if (
      state.showDialog &&
      state.selectedBedrooms !== null &&
      state.selectedBedrooms !== prevSelectedBedrooms.current
    ) {
      handleNextAfterBedrooms();
    }
    prevSelectedBedrooms.current = state.selectedBedrooms;
  }, [state.selectedBedrooms, state.showDialog, handleNextAfterBedrooms]);

  // Effect for Bathrooms -> Cleaning Type transition
  useEffect(() => {
    if (
      state.showBathroomsDialog &&
      state.selectedBathrooms !== null &&
      state.selectedBathrooms !== prevSelectedBathrooms.current
    ) {
      handleNextAfterBathrooms();
    }
    prevSelectedBathrooms.current = state.selectedBathrooms;
  }, [state.selectedBathrooms, state.showBathroomsDialog, handleNextAfterBathrooms]);

  // Effect for Cleaning Type -> Additional Options transition
  useEffect(() => {
    if (
      state.showCleaningTypeDialog &&
      state.selectedCleaningType !== null &&
      state.selectedCleaningType !== prevSelectedCleaningType.current
    ) {
      handleNextAfterCleaningType();
    }
    prevSelectedCleaningType.current = state.selectedCleaningType;
  }, [state.selectedCleaningType, state.showCleaningTypeDialog, handleNextAfterCleaningType]);

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
