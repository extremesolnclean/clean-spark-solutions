
import { HeroState, HeroActions } from "./HeroState";
import { Toast } from "@/hooks/use-toast";

export interface HeroHandlersProps {
  state: HeroState;
  actions: HeroActions;
  toast: Toast;
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
    
    // Only show the dialog for house cleaning service
    if (state.selectedPhrase === "I'm looking for a house cleaner") {
      actions.setShowDialog(true);
    } else {
      // For other services, just show a toast for now
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
    // Close the additional options dialog and open description dialog
    actions.setShowAdditionalOptionsDialog(false);
    actions.setShowDescriptionDialog(true);
  };

  const handleFinishBooking = () => {
    // Process the completed form data with all selections
    toast({
      title: "Information Submitted",
      description: `You selected ${state.selectedBedrooms} bedroom(s), ${state.selectedBathrooms} bathroom(s), ${state.selectedCleaningType} cleaning, ${state.selectedAdditionalOptions.length} additional options, and ${state.description ? 'added a description' : 'skipped the description'}`,
    });
    
    // Close the description dialog
    actions.setShowDescriptionDialog(false);
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
    actions.setShowDescriptionDialog(false);
    actions.setShowAdditionalOptionsDialog(true);
  };

  return {
    handleSearch,
    handleNextAfterBedrooms,
    handleNextAfterBathrooms,
    handleNextAfterCleaningType,
    handleNextAfterAdditionalOptions,
    handleFinishBooking,
    handleBackToBedroomsDialog,
    handleBackToCleaningTypeDialog,
    handleBackToBathroomsDialog,
    handleBackToAdditionalOptionsDialog
  };
}
