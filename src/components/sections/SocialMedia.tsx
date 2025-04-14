
import React, { useEffect } from 'react';
import { Facebook, Instagram, Map, ThumbsUp } from 'lucide-react';

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

    // Load Elfsight script for Google Reviews
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
          {/* Facebook Widget - Updated to show timeline */}
          <div className="social-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Facebook className="h-6 w-6 text-blue mr-2" />
              <h3 className="font-semibold text-xl">Facebook</h3>
            </div>
            <div className="fb-page" 
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
          </div>

          {/* Instagram Widget - Updated with real Elfsight Instagram feed */}
          <div className="social-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Instagram className="h-6 w-6 text-blue mr-2" />
              <h3 className="font-semibold text-xl">Instagram</h3>
            </div>
            <div className="elfsight-app-b135836f-a390-4cec-b750-00fdc0617c98" data-elfsight-app-lazy></div>
          </div>

          {/* Thumbtack Widget - Updated to new review widget */}
          <div className="social-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <ThumbsUp className="h-6 w-6 text-blue mr-2" />
              <h3 className="font-semibold text-xl">Thumbtack</h3>
            </div>
            <div className="p-4">
              <div className="widget" id="tt-review-widget-one">
                <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/logos/thumbtack/wordmark.svg" alt="Thumbtack" />
                <div id="tt-dynamic">
                  <div className="tt-left">
                    <img src="https://cdn.thumbtackstatic.com/fe-assets-web/_assets/images/release/components/avatar/images/legacy-default-avatar-50x50.25cbe35c0002a2eef6cbc5f1c4f271545eafbb59.png" alt="avatar" />
                  </div>
                  <div className="tt-right">
                    <div className="tt-name">Melissa R.</div>
                    <div className="tt-stars">
                      <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
                      <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
                      <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
                      <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
                      <img src="https://cdn.thumbtackstatic.com/fe-assets-web/media/pages/profile/standard-widgets/review-widget/orange_star.svg" alt="star" />
                      <span>8 reviews</span>
                      <span>60d ago</span>
                    </div>
                    <p>Excellent service I didn't know where to start. They came in and I didn't have to say a word. They worked their magic. My house looks n feels brand new I will def be a returning customer thank you for coming out to help.

Also,that oven it should just b put in it's original box hahaha. She made sure to clean top to bottom and that stove was BAD..BAD. Thanks again :)</p>
                    <a target="_blank" href="https://www.thumbtack.com/il/chicago/house-cleaning/extreme-solutions-cleaning-inc/service/533536174690787333" rel="noopener noreferrer">See all reviews</a>
                  </div>
                  <br/>
                </div>
              </div>
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
