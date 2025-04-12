
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface CleaningTypeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCleaningType: string | null;
  onCleaningTypeSelect: (option: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const CleaningTypeDialog: React.FC<CleaningTypeDialogProps> = ({
  open,
  onOpenChange,
  selectedCleaningType,
  onCleaningTypeSelect,
  onBack,
  onNext
}) => {
  const cleaningOptions = [
    { id: 'standard', label: 'Standard cleaning' },
    { id: 'deep', label: 'Deep cleaning' },
    { id: 'moveout', label: 'Move out cleaning' },
    { id: 'vacation', label: 'Vacation rental cleaning' }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white rounded-lg p-8">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-2xl font-semibold">
            What kind of cleaning do you need?
          </DialogTitle>
        </DialogHeader>

        <p className="text-center text-gray-600 text-sm mt-2">
          Note: deep cleaning is for houses that are especially dirty or haven't been cleaned in over a month
        </p>
        
        <div className="mt-6">
          <RadioGroup value={selectedCleaningType || ''} onValueChange={onCleaningTypeSelect}>
            <div className="flex flex-col space-y-4">
              {cleaningOptions.map((option) => (
                <label key={option.id} className="flex items-center cursor-pointer p-3 border rounded-md hover:bg-gray-50">
                  <div className="flex items-center justify-center w-6 h-6 mr-4">
                    <input
                      type="radio"
                      name="cleaningType"
                      value={option.id}
                      checked={selectedCleaningType === option.id}
                      onChange={() => onCleaningTypeSelect(option.id)}
                      className="hidden"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedCleaningType === option.id ? 'border-blue' : 'border-gray-300'}`}>
                      {selectedCleaningType === option.id && (
                        <div className="w-3 h-3 rounded-full bg-blue"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-800">{option.label}</span>
                </label>
              ))}
            </div>
          </RadioGroup>
        </div>
        
        <div className="mt-8 flex justify-between gap-4">
          <Button 
            type="button"
            variant="outline"
            onClick={onBack}
            className="w-1/2 py-2 rounded-md font-medium border border-gray-300"
          >
            Back
          </Button>
          <Button 
            type="button"
            onClick={onNext}
            className="w-1/2 py-2 rounded-md text-white font-medium bg-blue hover:bg-blue-dark"
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CleaningTypeDialog;
