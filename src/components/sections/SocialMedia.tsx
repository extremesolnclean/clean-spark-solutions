
import React, { useEffect } from 'react';
import { Facebook, Instagram, Map, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const SocialMedia = () => {
  // Initialize Facebook SDK and other widgets
  useEffect(() => {
    // Load Facebook SDK
    const script = document.createElement('script');
    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0&appId=681968907486539";
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

    // Load Elfsight script for Google Reviews and Instagram
    const elfsightScript = document.createElement('script');
    elfsightScript.src = "https://static.elfsight.com/platform/platform.js";
    elfsightScript.async = true;
    document.body.appendChild(elfsightScript);

    // Load Thumbtack script - updated to type "one"
    const thumbtackScript = document.createElement('script');
    thumbtackScript.src = "https://www.thumbtack.com/profile/widgets/scripts/?service_pk=533536174690787333&widget_id=review&type=one";
    thumbtackScript.async = true;
    document.body.appendChild(thumbtackScript);

    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      if (elfsightScript.parentNode) {
        document.body.removeChild(elfsightScript);
      }
      if (thumbtackScript.parentNode) {
        document.body.removeChild(thumbtackScript);
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
          {/* Facebook Widget - Using Card component */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-[500px]">
            <CardHeader className="pb-2 border-b">
              <div className="flex items-center">
                <Facebook className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-semibold text-lg">Facebook</h3>
              </div>
            </CardHeader>
            <CardContent className="p-0 h-full">
              <div className="fb-page h-full" 
                data-href="https://www.facebook.com/profile.php?id=61564938880058"
                data-tabs="timeline" 
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
            </CardContent>
          </Card>

          {/* Instagram Widget - Using Card component */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-[500px]">
            <CardHeader className="pb-2 border-b">
              <div className="flex items-center">
                <Instagram className="h-5 w-5 text-pink-500 mr-2" />
                <h3 className="font-semibold text-lg">Instagram</h3>
              </div>
            </CardHeader>
            <CardContent className="p-0 h-full overflow-hidden">
              <div className="elfsight-app-b135836f-a390-4cec-b750-00fdc0617c98 h-full" data-elfsight-app-lazy></div>
            </CardContent>
          </Card>

          {/* Thumbtack Widget - Using Card component */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-[500px]">
            <CardHeader className="pb-2 border-b">
              <div className="flex items-center">
                <ThumbsUp className="h-5 w-5 text-orange-500 mr-2" />
                <h3 className="font-semibold text-lg">Thumbtack</h3>
              </div>
            </CardHeader>
            <CardContent className="p-4 overflow-y-auto h-[calc(100%-60px)]">
              <div className="widget" id="tt-review-widget-one">
                <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg" alt="Thumbtack" className="h-6 mb-4" />
                <div id="tt-dynamic" className="flex flex-col">
                  <div className="flex items-start mb-3">
                    <div className="tt-left mr-3">
                      <img 
                        src="https://cdn.thumbtackstatic.com/fe-assets-web/_assets/images/release/components/avatar/images/legacy-default-avatar-50x50.25cbe35c0002a2eef6cbc5f1c4f271545eafbb59.png" 
                        alt="avatar"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="tt-right flex-1">
                      <div className="tt-name font-medium text-gray-900">Melissa R.</div>
                      <div className="tt-stars flex items-center my-1">
                        {[...Array(5)].map((_, i) => (
                          <img 
                            key={i}
                            src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" 
                            alt="star" 
                            className="w-4 h-4"
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">8 reviews</span>
                        <span className="text-xs text-gray-500 ml-2">60d ago</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Excellent service I didn't know where to start. They came in and I didn't have to say a word. They worked their magic. My house looks n feels brand new I will def be a returning customer thank you for coming out to help.
                        <br /><br />
                        Also,that oven it should just b put in it's original box hahaha. She made sure to clean top to bottom and that stove was BAD..BAD. Thanks again :)
                      </p>
                      <a 
                        target="_blank" 
                        href="https://www.thumbtack.com/il/chicago/house-cleaning/extreme-solutions-cleaning-inc/service/533536174690787333" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        See all reviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google Widget - Using Card component */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-[500px]">
            <CardHeader className="pb-2 border-b">
              <div className="flex items-center">
                <Map className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="font-semibold text-lg">Google Reviews</h3>
              </div>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-60px)] overflow-hidden">
              <div className="elfsight-app-bf85f069-170a-4d1f-b2cb-1233e03a6b40 h-full" data-elfsight-app-lazy></div>
            </CardContent>
          </Card>
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
