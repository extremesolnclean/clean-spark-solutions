
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Extreme Solutions Cleaning</h3>
            <p className="mb-4 text-gray-300">
              Professional cleaning services dedicated to making your space spotless and your life easier.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-light hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-light hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-light hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-light hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-blue-light transition-colors">Regular Cleaning</a></li>
              <li><a href="#services" className="hover:text-blue-light transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-blue-light transition-colors">Move In/Out Cleaning</a></li>
              <li><a href="#services" className="hover:text-blue-light transition-colors">Commercial Cleaning</a></li>
              <li><a href="#services" className="hover:text-blue-light transition-colors">Post-Construction</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#cities" className="hover:text-blue-light transition-colors">Chicago, IL</a></li>
              <li><a href="#cities" className="hover:text-blue-light transition-colors">Los Angeles, CA</a></li>
              <li><a href="#cities" className="hover:text-blue-light transition-colors">Orlando, FL</a></li>
              <li><a href="#cities" className="hover:text-blue-light transition-colors">Boston, MA</a></li>
              <li><a href="#cities" className="hover:text-blue-light transition-colors">View All Locations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" /> 
                <a href="mailto:info@extremesolutionscleaning.com" className="hover:text-blue-light transition-colors">
                  info@extremesolutionscleaning.com
                </a>
              </li>
              <li><a href="tel:+15551234567" className="hover:text-blue-light transition-colors">(555) 123-4567</a></li>
              <li><a href="#contact" className="hover:text-blue-light transition-colors">Contact Form</a></li>
              <li><a href="#" className="hover:text-blue-light transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Extreme Solutions Cleaning. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-light transition-colors">
                Terms of Service
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="bg-blue hover:bg-blue-dark text-white p-2 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
