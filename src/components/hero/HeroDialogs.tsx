
import React from 'react';
import BedroomsDialog from './BedroomsDialog';
import BathroomsDialog from './BathroomsDialog';
import CleaningTypeDialog from './CleaningTypeDialog';
import AdditionalOptionsDialog from './AdditionalOptionsDialog';
import DescriptionDialog from './DescriptionDialog';
import { HeroState, HeroActions } from './HeroState';

interface HeroDialogsProps {
  state: HeroState;
  actions: HeroActions;
  handlers: {
    handleNextAfterBedrooms: () => void;
    handleNextAfterBathrooms: () => void;
    handleNextAfterCleaningType: () => void;
    handleNextAfterAdditionalOptions: () => void;
    handleFinishBooking: () => void;
    handleBackToBedroomsDialog: () => void;
    handleBackToCleaningTypeDialog: () => void;
    handleBackToBathroomsDialog: () => void;
    handleBackToAdditionalOptionsDialog: () => void;
  };
}

const HeroDialogs: React.FC<HeroDialogsProps> = ({ state, actions, handlers }) => {
  return (
    <>
      {/* Bedrooms Selection Dialog */}
      <BedroomsDialog 
        open={state.showDialog}
        onOpenChange={actions.setShowDialog}
        selectedBedrooms={state.selectedBedrooms}
        onBedroomSelect={actions.handleBedroomSelect}
        onNext={handlers.handleNextAfterBedrooms}
      />

      {/* Bathrooms Selection Dialog */}
      <BathroomsDialog 
        open={state.showBathroomsDialog}
        onOpenChange={actions.setShowBathroomsDialog}
        selectedBathrooms={state.selectedBathrooms}
        onBathroomSelect={actions.handleBathroomSelect}
        onBack={handlers.handleBackToBedroomsDialog}
        onNext={handlers.handleNextAfterBathrooms}
      />

      {/* Cleaning Type Selection Dialog */}
      <CleaningTypeDialog 
        open={state.showCleaningTypeDialog}
        onOpenChange={actions.setShowCleaningTypeDialog}
        selectedCleaningType={state.selectedCleaningType}
        onCleaningTypeSelect={actions.handleCleaningTypeSelect}
        onBack={handlers.handleBackToBathroomsDialog}
        onNext={handlers.handleNextAfterCleaningType}
      />

      {/* Additional Options Dialog */}
      <AdditionalOptionsDialog
        open={state.showAdditionalOptionsDialog}
        onOpenChange={actions.setShowAdditionalOptionsDialog}
        selectedOptions={state.selectedAdditionalOptions}
        onOptionToggle={actions.handleAdditionalOptionToggle}
        onBack={handlers.handleBackToCleaningTypeDialog}
        onNext={handlers.handleNextAfterAdditionalOptions}
      />

      {/* Description Dialog */}
      <DescriptionDialog
        open={state.showDescriptionDialog}
        onOpenChange={actions.setShowDescriptionDialog}
        description={state.description}
        onDescriptionChange={actions.handleDescriptionChange}
        onBack={handlers.handleBackToAdditionalOptionsDialog}
        onSkip={handlers.handleFinishBooking}
      />
    </>
  );
};

export default HeroDialogs;
