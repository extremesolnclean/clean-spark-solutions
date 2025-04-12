
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

interface DateSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDate: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  onBack: () => void;
  onNext: () => void;
}

const DateSelectionDialog: React.FC<DateSelectionDialogProps> = ({
  open,
  onOpenChange,
  selectedDate,
  onDateSelect,
  onBack,
  onNext
}) => {
  const today = new Date();
  const disabledDays = { before: today };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white rounded-lg p-8">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-2xl font-semibold">
            When do you need this service?
          </DialogTitle>
        </DialogHeader>
        
        <p className="text-center text-gray-600 mt-2 mb-4">
          Select a preferred date for your cleaning service
        </p>

        <div className="flex flex-col items-center justify-center my-4">
          <div className="border rounded-md p-1 bg-white">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onDateSelect}
              disabled={disabledDays}
              initialFocus
              className="p-3 pointer-events-auto"
            />
          </div>

          {selectedDate && (
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600">
              <CalendarIcon className="h-4 w-4" />
              Selected date: {format(selectedDate, 'EEEE, MMMM d, yyyy')}
            </p>
          )}
        </div>
        
        <div className="mt-6 flex justify-between gap-4">
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
            disabled={!selectedDate}
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DateSelectionDialog;
