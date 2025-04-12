
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface BedroomsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedBedrooms: number | null;
  onBedroomSelect: (option: number) => void;
  onNext: () => void;
}

const BedroomsDialog: React.FC<BedroomsDialogProps> = ({
  open,
  onOpenChange,
  selectedBedrooms,
  onBedroomSelect,
  onNext
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white rounded-lg p-8">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-2xl font-semibold">
            How many bedrooms are there?
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 flex flex-col space-y-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <label key={num} className="flex items-center cursor-pointer">
              <div className="flex items-center justify-center w-6 h-6 mr-4">
                <input
                  type="radio"
                  name="bedrooms"
                  value={num}
                  checked={selectedBedrooms === num}
                  onChange={() => onBedroomSelect(num)}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedBedrooms === num ? 'border-blue' : 'border-gray-300'}`}>
                  {selectedBedrooms === num && (
                    <div className="w-3 h-3 rounded-full bg-blue"></div>
                  )}
                </div>
              </div>
              <span className="text-gray-800">
                {num === 1 ? `${num} bedroom` : `${num} bedrooms`}
              </span>
            </label>
          ))}
        </div>
        
        <div className="mt-8">
          <Button 
            type="button"
            onClick={onNext}
            className="w-full py-2 rounded-md text-white font-medium text-center bg-blue hover:bg-blue-dark"
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BedroomsDialog;
