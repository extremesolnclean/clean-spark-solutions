
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { User, Mail, Phone } from 'lucide-react';

interface ContactInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fullName: string;
  email: string;
  phoneNumber: string;
  onFullNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}

const ContactInfoDialog: React.FC<ContactInfoDialogProps> = ({
  open,
  onOpenChange,
  fullName,
  email,
  phoneNumber,
  onFullNameChange,
  onEmailChange,
  onPhoneNumberChange,
  onBack,
  onSubmit,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogDescription>
            Please provide your contact details so we can connect you with service professionals.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="fullName"
                className="pl-10"
                value={fullName}
                onChange={(e) => onFullNameChange(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                className="pl-10"
                type="email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="phoneNumber"
                className="pl-10"
                type="tel"
                value={phoneNumber}
                onChange={(e) => onPhoneNumberChange(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="text-sm text-muted-foreground mt-2">
            <p className="flex items-center">
              <span className="text-amber-600">⚠️</span>
              <span className="ml-1">Your personal information will not be shared with service providers until a booking is confirmed.</span>
            </p>
          </div>
        </div>

        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button onClick={onSubmit}>
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactInfoDialog;
