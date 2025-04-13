import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cities = [
  {
    name: 'Chicago',
    description: 'Serving the Windy City and nearby suburbs with premium cleaning services.',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&q=75&fit=crop&w=600'
  },
  {
    name: 'Los Angeles',
    description: 'Bringing sparkle to homes across Los Angeles and surrounding areas.',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?auto=format&q=75&fit=crop&w=600'
  },
  {
    name: 'Orlando',
    description: 'Trusted cleaning professionals serving the Orlando metropolitan area.',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&q=75&fit=crop&w=600'
  },
  {
    name: 'Newark',
    description: 'Professional home cleaning services throughout Newark and Essex County.',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&q=75&fit=crop&w=600'
  },
  {
    name: 'Boston',
    description: 'Serving Boston and neighboring communities with quality cleaning.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&q=75&fit=crop&w=600'
  },
  {
    name: 'Charlotte',
    description: 'Bringing spotless homes to Charlotte and the surrounding region.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&q=75&fit=crop&w=600'
  },
  {
    name: 'Hartford',
    description: 'Quality cleaning services for homes throughout Hartford and beyond.',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&q=75&fit=crop&w=600'
  },
  {
    name: 'San Francisco',
    description: 'Premium cleaning solutions across the San Francisco Bay Area.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&q=75&fit=crop&w=600'
  }
];

const Cities = () => {
  return (
    <section id="cities" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title">Serving Major Cities</h2>
          <p className="section-subtitle">
            Extreme Solutions Cleaning proudly offers professional cleaning services in these metropolitan areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-card hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="aspect-[4/3] bg-cover bg-center" 
                style={{ backgroundImage: `url(${city.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin size={18} className="mr-2" />
                  <h3 className="text-xl font-bold">{city.name}</h3>
                </div>
                <p className="text-sm text-white/80 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {city.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-block text-sm text-white hover:underline"
                >
                  Book in {city.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Don't see your city? We may still serve your area!
          </p>
          <Button className="rounded-full">
            Check Availability in Your Area
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cities;
