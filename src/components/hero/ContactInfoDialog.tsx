import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { User, Mail, Phone } from 'lucide-react';

interface ContactInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialFullName?: string;
  initialEmail?: string;
  initialPhoneNumber?: string;
  onBack: () => void;
  onSubmit: (data: { fullName: string; email: string; phoneNumber: string }) => void;
}

const ContactInfoDialog: React.FC<ContactInfoDialogProps> = ({
  open,
  onOpenChange,
  initialFullName = '',
  initialEmail = '',
  initialPhoneNumber = '',
  onBack,
  onSubmit,
}) => {
  const [fullName, setFullName] = useState(initialFullName);
  const [email, setEmail] = useState(initialEmail);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateName = (name: string): string => {
    if (!name.trim()) return 'Full name is required.';
    if (name.trim().length < 4) return 'Full name must be at least 4 characters.';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Full name can only contain letters and spaces.';
    return '';
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'Email is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address.';
    if (/^[^@]+@\d+$/.test(email)) return 'Please enter a valid email address.';
    return '';
  };

  const validatePhone = (phone: string): string => {
    const digits = phone.replace(/\D/g, '');
    if (!digits) return 'Phone number is required.';
    if (digits.length !== 10) return 'Phone number must be 10 digits.';
    return '';
  };

  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, '');
    const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return digits;

    let formatted = '';
    if (match[1]) {
      formatted += `(${match[1]}`;
    }
    if (match[2]) {
      formatted += `) ${match[2]}`;
    }
    if (match[3]) {
      formatted += `-${match[3]}`;
    }
    return formatted;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullName(value);
    setNameError(validateName(value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digits = rawValue.replace(/\D/g, '');

    if (digits.length > 10) return;

    const formattedValue = formatPhoneNumber(digits);
    setPhoneNumber(formattedValue);
    setPhoneError(validatePhone(formattedValue));
  };

  const isFormValid = !validateName(fullName) && !validateEmail(email) && !validatePhone(phoneNumber);

  const handleSubmit = () => {
    const currentNameError = validateName(fullName);
    const currentEmailError = validateEmail(email);
    const currentPhoneError = validatePhone(phoneNumber);
    setNameError(currentNameError);
    setEmailError(currentEmailError);
    setPhoneError(currentPhoneError);

    if (!currentNameError && !currentEmailError && !currentPhoneError) {
      onSubmit({ fullName, email, phoneNumber: phoneNumber.replace(/\D/g, '') });
    }
  };

  useEffect(() => {
    setFullName(initialFullName);
    setEmail(initialEmail);
    setPhoneNumber(formatPhoneNumber(initialPhoneNumber.replace(/\D/g, '')));
    setNameError('');
    setEmailError('');
    setPhoneError('');
  }, [initialFullName, initialEmail, initialPhoneNumber, open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] flex flex-col max-h-[85vh]">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>Contact Information</DialogTitle>
          <DialogDescription>
            Please provide your contact details so we can connect you with service professionals.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="grid gap-4 py-4 flex-grow overflow-y-auto pr-2">
          <div className="grid gap-1.5">
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="fullName"
                className={`pl-10 ${nameError ? 'border-red-500' : ''}`}
                value={fullName}
                onChange={handleNameChange}
                placeholder="Enter your full name"
                aria-invalid={!!nameError}
                aria-describedby="name-error"
              />
            </div>
            {nameError && <p id="name-error" className="text-sm text-red-600 mt-1">{nameError}</p>}
          </div>
          
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                className={`pl-10 ${emailError ? 'border-red-500' : ''}`}
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                aria-invalid={!!emailError}
                aria-describedby="email-error"
              />
            </div>
            {emailError && <p id="email-error" className="text-sm text-red-600 mt-1">{emailError}</p>}
          </div>
          
          <div className="grid gap-1.5">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="phoneNumber"
                className={`pl-10 ${phoneError ? 'border-red-500' : ''}`}
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="(555) 123-4567"
                maxLength={14}
                aria-invalid={!!phoneError}
                aria-describedby="phone-error"
              />
            </div>
            {phoneError && <p id="phone-error" className="text-sm text-red-600 mt-1">{phoneError}</p>}
          </div>

          <div className="text-sm text-muted-foreground mt-2">
            <p className="flex items-center">
              <span className="text-amber-600">⚠️</span>
              <span className="ml-1">Your personal information will not be shared with service providers until a booking is confirmed.</span>
            </p>
          </div>
        </form>

        <DialogFooter className="sm:justify-between flex-shrink-0 mt-auto pt-4 border-t">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button onClick={handleSubmit} disabled={!isFormValid}>
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactInfoDialog;
