
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Chicago, IL',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=75&fit=crop&w=120&h=120',
    text: 'Extreme Solutions Cleaning consistently delivers outstanding results. Their attention to detail is impressive, and my home always feels fresh and spotless after they visit. Highly recommend their services!',
  },
  {
    name: 'Michael Rodriguez',
    location: 'Los Angeles, CA',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&q=75&fit=crop&w=120&h=120',
    text: "I've tried several cleaning services in LA, but Extreme Solutions stands out. The team is professional, thorough, and always on time. They've made my busy life so much easier!",
  },
  {
    name: 'Jennifer Parker',
    location: 'Orlando, FL',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=75&fit=crop&w=120&h=120',
    text: 'As a working mom, I need reliable cleaning help. Extreme Solutions provides just that - dependable, high-quality service that keeps my home clean and organized. Worth every penny!',
  },
  {
    name: 'David Thompson',
    location: 'Boston, MA',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&q=75&fit=crop&w=120&h=120',
    text: "What impresses me most about Extreme Solutions is their consistency. Every cleaning is as thorough as the last, and they're very responsive to special requests. Excellent service!",
  },
  {
    name: 'Amanda Martinez',
    location: 'San Francisco, CA',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=120&h=120',
    text: 'I love coming home after Extreme Solutions has cleaned - everything sparkles! Their team is friendly and professional, and they use eco-friendly products which is important to me.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const maxIndex = testimonials.length - 1;

  const handlePrev = () => {
    setCurrentIndex(current => (current > 0 ? current - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex(current => {
      // Get the max index based on current screen size
      const visibleItems = window.innerWidth < 640 ? itemsPerView.mobile : 
                          window.innerWidth < 1024 ? itemsPerView.tablet : 
                          itemsPerView.desktop;
      const max = testimonials.length - visibleItems;
      return current < max ? current + 1 : current;
    });
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Hear from satisfied customers about their experience with our cleaning services.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 w-20 h-20 bg-blue/5 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 w-16 h-16 bg-blue/5 rounded-full"></div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-3"
                >
                  <div className="card h-full flex flex-col">
                    <div className="mb-6 relative">
                      <Quote size={36} className="absolute -top-3 -left-3 text-blue/10" />
                      <p className="text-gray-700 relative z-10">{testimonial.text}</p>
                    </div>
                    <div className="mt-auto flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={14} fill="#FFC107" color="#FFC107" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full border ${
                currentIndex === 0 
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                  : 'border-blue text-blue hover:bg-blue-50'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex - 1}
              className={`p-2 rounded-full border ${
                currentIndex >= maxIndex - 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                  : 'border-blue text-blue hover:bg-blue-50'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
