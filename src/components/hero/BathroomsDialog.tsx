import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface BathroomsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedBathrooms: number | null;
  onBathroomSelect: (option: number) => void;
  onBack: () => void;
  onNext: () => void;
}

const BathroomsDialog: React.FC<BathroomsDialogProps> = ({
  open,
  onOpenChange,
  selectedBathrooms,
  onBathroomSelect,
  onBack,
  onNext
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white rounded-lg p-8">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-2xl font-semibold">
            How many bathrooms?
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 flex flex-col space-y-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className="flex items-center cursor-pointer">
              <div className="flex items-center justify-center w-6 h-6 mr-4">
                <input
                  type="radio"
                  name="bathrooms"
                  value={num}
                  checked={selectedBathrooms === num}
                  onChange={() => onBathroomSelect(num)}
                  className="hidden"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedBathrooms === num ? 'border-blue' : 'border-gray-300'}`}>
                  {selectedBathrooms === num && (
                    <div className="w-3 h-3 rounded-full bg-blue"></div>
                  )}
                </div>
              </div>
              <span className="text-gray-800">
                {num === 1 ? `${num} bathroom` : `${num} bathrooms`}
              </span>
            </label>
          ))}
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

export default BathroomsDialog;
