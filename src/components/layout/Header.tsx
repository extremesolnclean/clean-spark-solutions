import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/images/logo/logo.png" 
              alt="Extreme Solutions Cleaning Logo"
              width="40"
              height="40"
              className="mr-3"
            />
            <span className="font-bold text-xl md:text-2xl text-blue">
              Extreme<span className="text-gray-800">Solutions</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="font-medium text-gray-700 hover:text-blue transition-colors">
            Services
          </a>
          <a href="#cities" className="font-medium text-gray-700 hover:text-blue transition-colors">
            Locations
          </a>
          <a href="#testimonials" className="font-medium text-gray-700 hover:text-blue transition-colors">
            Reviews
          </a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-blue transition-colors">
            Contact
          </a>
          <Button variant="outline" className="rounded-full border-blue text-blue hover:bg-blue-50">
            <Phone size={16} className="mr-2" /> (630) 550-6605
          </Button>
          <Button className="rounded-full bg-blue hover:bg-blue-dark">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 hover:text-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="font-medium text-gray-700 hover:text-blue px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#cities" 
              className="font-medium text-gray-700 hover:text-blue px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Locations
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-gray-700 hover:text-blue px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className="font-medium text-gray-700 hover:text-blue px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button variant="outline" className="w-full justify-center rounded-full border-blue text-blue hover:bg-blue-50">
              <Phone size={16} className="mr-2" /> (630) 550-6605
            </Button>
            <Button className="w-full justify-center rounded-full bg-blue hover:bg-blue-dark">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
