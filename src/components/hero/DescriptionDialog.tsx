
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

interface DescriptionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  description: string;
  onDescriptionChange: (value: string) => void;
  onBack: () => void;
  onSkip: () => void;
}

const DescriptionDialog: React.FC<DescriptionDialogProps> = ({
  open,
  onOpenChange,
  description,
  onDescriptionChange,
  onBack,
  onSkip
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white rounded-lg p-8">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-2xl font-semibold">
            Send a message to the pro
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="text-center text-gray-600 mb-4">
            Ask questions or describe what you need. You don't need to include contact info yet.
          </p>
          
          <Textarea 
            placeholder="Can you help with my job?" 
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            className="min-h-[120px] w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue"
          />
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
            onClick={onSkip}
            className="w-1/2 py-2 rounded-md text-white font-medium bg-blue hover:bg-blue-dark"
          >
            Skip
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DescriptionDialog;
