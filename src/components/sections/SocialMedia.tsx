
import React, { useEffect } from 'react';
import { Facebook, Instagram, Map, ThumbsUp } from 'lucide-react';

const SocialMedia = () => {
  // Initialize Facebook SDK
  useEffect(() => {
    // Load Facebook SDK
    const script = document.createElement('script');
    script.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v22.0&appId=681968907486539";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Initialize Facebook root div if it doesn't exist
    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.appendChild(fbRoot);
    }

    // Load Elfsight script for Google Reviews
    const elfsightScript = document.createElement('script');
    elfsightScript.src = "https://static.elfsight.com/platform/platform.js";
    elfsightScript.async = true;
    document.body.appendChild(elfsightScript);

    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      if (elfsightScript.parentNode) {
        document.body.removeChild(elfsightScript);
      }
    };
  }, []);

  return (
    <section id="social" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect With Our Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow us on social media to see our latest projects, reviews, and updates. Join our growing community of satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Facebook Widget */}
          <div className="social-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Facebook className="h-6 w-6 text-blue mr-2" />
              <h3 className="font-semibold text-xl">Facebook</h3>
            </div>
            <div className="fb-page" 
              data-href="https://www.facebook.com/profile.php?id=61564938880058"
              data-tabs="" 
              data-width="" 
              data-height="" 
              data-small-header="false"
              data-adapt-container-width="true" 
              data-hide-cover="true" 
              data-show-facepile="false">
              <blockquote cite="https://www.facebook.com/profile.php?id=61564938880058" className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/profile.php?id=61564938880058">Extreme Solutions Cleaning</a>
              </blockquote>
            </div>
          </div>

          {/* Instagram Widget Placeholder */}
          <div className="social-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Instagram className="h-6 w-6 text-blue mr-2" />
              <h3 className="font-semibold text-xl">Instagram</h3>
            </div>
            <div className="h-[300px] flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4">
              <p className="text-gray-500">Instagram feed coming soon</p>
              <a href="https://www.instagram.com/extremesolnclean/" className="block mt-4 text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Follow us on Instagram
              </a>
            </div>
          </div>

          {/* Thumbtack Widget */}
          <div className="social-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <ThumbsUp className="h-6 w-6 text-blue mr-2" />
              <h3 className="font-semibold text-xl">Thumbtack</h3>
            </div>
            <div className="h-[300px] flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4">
              <p className="text-gray-500 text-center">
                Check our reviews and book our services on Thumbtack
              </p>
              <div className="mt-4 text-sm text-gray-400">
                <p>API Endpoint: app.thumbtack.com/graphql</p>
              </div>
              <a href="https://www.thumbtack.com/extreme-solutions-cleaning-inc" className="block mt-4 text-blue hover:underline" target="_blank" rel="noopener noreferrer">
                See our Thumbtack profile
              </a>
            </div>
          </div>

          {/* Google Widget */}
          <div className="social-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Map className="h-6 w-6 text-blue mr-2" />
              <h3 className="font-semibold text-xl">Google Reviews</h3>
            </div>
            <div className="p-4">
              <div className="elfsight-app-bf85f069-170a-4d1f-b2cb-1233e03a6b40" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Follow us and be part of our growing community. Share your cleaning experiences with us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
