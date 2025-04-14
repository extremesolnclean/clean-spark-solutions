import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Checkbox } from '@/components/ui/checkbox';

interface AdditionalOption {
  id: string;
  label: string;
}

interface AdditionalOptionsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedOptions: string[];
  onOptionToggle: (option: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const AdditionalOptionsDialog: React.FC<AdditionalOptionsDialogProps> = ({
  open,
  onOpenChange,
  selectedOptions,
  onOptionToggle,
  onBack,
  onNext
}) => {
  const additionalOptions: AdditionalOption[] = [
    { id: 'window_cleaning', label: 'Window cleaning (interior)' },
    { id: 'fridge_cleaning', label: 'Fridge cleaning' },
    { id: 'oven_cleaning', label: 'Oven cleaning' },
    { id: 'laundry', label: 'Laundry' },
    { id: 'baseboard_cleaning', label: 'Baseboard cleaning' },
    { id: 'interior_cabinet', label: 'Interior cabinet cleaning' },
    { id: 'basement_cleaning', label: 'Basement cleaning' },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white rounded-lg p-8">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-2xl font-semibold">
            Is there anything else you need?
          </DialogTitle>
        </DialogHeader>

        <p className="text-center text-gray-500 mt-2">
          Optional
        </p>
        
        <div className="mt-6 overflow-y-auto max-h-[45vh] pr-2">
          <div className="space-y-4">
            {additionalOptions.map((option) => (
              <label key={option.id} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                <Checkbox
                  id={option.id}
                  checked={selectedOptions.includes(option.id)}
                  onCheckedChange={() => onOptionToggle(option.id)}
                />
                <span className="text-gray-800">{option.label}</span>
              </label>
            ))}
          </div>
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

export default AdditionalOptionsDialog;
