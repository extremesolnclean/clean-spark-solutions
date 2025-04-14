import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';

interface DateSelectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDateRange: DateRange | undefined;
  onDateRangeSelect: (range: DateRange | undefined) => void;
  onBack: () => void;
  onNext: () => void;
}

const DateSelectionDialog: React.FC<DateSelectionDialogProps> = ({
  open,
  onOpenChange,
  selectedDateRange,
  onDateRangeSelect,
  onBack,
  onNext
}) => {
  const today = new Date();
  const disabledDays = { before: today };

  const formatDisplayDate = (range: DateRange | undefined): string => {
    if (!range?.from) {
      return '';
    }
    if (!range.to || range.from === range.to) {
      return `Selected date: ${format(range.from, 'EEEE, MMMM d, yyyy')}`;
    }
    return `Selected range: ${format(range.from, 'MMM d')} - ${format(range.to, 'MMM d, yyyy')}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white rounded-lg p-8 flex flex-col">
        <DialogHeader className="relative flex-shrink-0">
          <DialogTitle className="text-center text-2xl font-semibold">
            When do you need this service?
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-grow overflow-y-auto my-4 pr-2">
          <p className="text-center text-gray-600 mb-4">
            Select a single day or click a start date then an end date for a range.
          </p>

          <div className="flex flex-col items-center justify-center">
            <div className="border rounded-md p-1 bg-white">
              <Calendar
                mode="range"
                selected={selectedDateRange}
                onSelect={onDateRangeSelect}
                disabled={disabledDays}
                initialFocus
                numberOfMonths={1}
                className="p-3 pointer-events-auto"
              />
            </div>

            {selectedDateRange?.from && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600">
                <CalendarIcon className="h-4 w-4" />
                {formatDisplayDate(selectedDateRange)}
              </p>
            )}
          </div>
        </div>
        
        <div className="mt-auto flex justify-between gap-4 flex-shrink-0">
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
            disabled={!selectedDateRange?.from}
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DateSelectionDialog;
