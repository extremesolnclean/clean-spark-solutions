import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Clock, Calendar, Check } from 'lucide-react';
import { toast } from "sonner";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly.", {
      description: "Your message has been received by our team."
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-6">
              Ready to experience the difference with Extreme Solutions Cleaning? 
              Contact us today for a free quote or to schedule your cleaning service.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Phone size={20} className="text-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">Mon-Fri, 8am-7pm EST</p>
                  <a href="tel:+16305506605" className="text-blue hover:underline">(630) 550-6605</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">We'll respond within 24 hours</p>
                  <a href="mailto:support@extremesolnclean.com" className="text-blue hover:underline">
                    support@extremesolnclean.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Calendar size={20} className="text-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Scheduling</h3>
                  <p className="text-gray-600">Book online or call us</p>
                  <p className="text-gray-600">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue/10 p-3 rounded-full mr-4">
                  <Clock size={20} className="text-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 8am-7pm</p>
                  <p className="text-gray-600">Saturday-Sunday: 9am-5pm</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-light rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <Check size={20} className="text-blue mr-2" />
                100% Satisfaction Guarantee
              </h3>
              <p className="text-gray-700">
                If you're not completely satisfied with our service, we'll return and make it right at no additional cost.
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-2xl shadow-card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Free Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(630) 550-6605"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select id="service" className="input-field" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option value="regular">Regular Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move">Move In/Out Cleaning</option>
                    <option value="office">Commercial Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs, property size, specific requests, etc."
                    className="input-field min-h-[100px]"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full">
                  Submit Request
                </Button>
                <p className="text-xs text-center text-gray-500">
                  By submitting, you agree to be contacted about our cleaning services.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
