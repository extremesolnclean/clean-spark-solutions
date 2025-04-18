import React from 'react';
import { Facebook, Instagram, ThumbsUp, Map } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-6 w-6 text-blue-600" />,
      image: '/images/logo/facebookprofile.png',
      link: 'https://www.facebook.com/profile.php?id=61564938880058'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-6 w-6 text-pink-600" />,
      image: '/images/logo/instagramprofile.png',
      link: 'https://www.instagram.com/extremesolnclean/'
    },
    {
      name: 'Thumbtack',
      icon: <ThumbsUp className="h-6 w-6 text-blue-800" />,
      image: '/images/logo/thumbtackreviews.png',
      link: 'https://www.thumbtack.com/il/chicago/house-cleaning/extreme-solutions-cleaning-inc/service/533536174690787333'
    },
    {
      name: 'Google Reviews',
      icon: <Map className="h-6 w-6 text-red-500" />,
      image: '/images/logo/googlereview.png',
      link: 'https://g.co/kgs/38UXJyY'
    }
  ];

  return (
    <section id="social" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect With Our Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow us on social media to see our latest projects, reviews, and updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-105"
            >
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  {platform.icon}
                  <CardTitle className="text-xl ml-2">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full aspect-[3/2] relative">
                    <img
                      src={platform.image}
                      alt={`${platform.name} profile`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Join our growing community and stay updated with our latest services and customer experiences!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
