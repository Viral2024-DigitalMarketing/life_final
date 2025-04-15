import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const upperRowRef = useRef<HTMLDivElement>(null);
  const lowerRowRef = useRef<HTMLDivElement>(null);

  // Animation speed (pixels per frame)
  const ANIMATION_SPEED = 0.5;

  useEffect(() => {
    const upperRow = upperRowRef.current;
    const lowerRow = lowerRowRef.current;

    if (!upperRow || !lowerRow) return;

    let upperRowAnimation: number;
    let lowerRowAnimation: number;

    // Function to handle upper row animation (left to right)
    const animateUpperRow = () => {
      if (!upperRow) return;

      upperRow.scrollLeft += ANIMATION_SPEED;

      // Reset when reaching the end
      if (upperRow.scrollLeft >= upperRow.scrollWidth / 2) {
        upperRow.scrollLeft = 0;
      }

      upperRowAnimation = requestAnimationFrame(animateUpperRow);
    };

    // Function to handle lower row animation (right to left)
    const animateLowerRow = () => {
      if (!lowerRow) return;

      lowerRow.scrollLeft -= ANIMATION_SPEED;

      // Reset when reaching the beginning
      if (lowerRow.scrollLeft <= 0) {
        lowerRow.scrollLeft = lowerRow.scrollWidth / 2;
      }

      lowerRowAnimation = requestAnimationFrame(animateLowerRow);
    };

    // Start animations
    upperRowAnimation = requestAnimationFrame(animateUpperRow);
    lowerRowAnimation = requestAnimationFrame(animateLowerRow);

    // Pause animation on hover
    const pauseAnimation = (e: MouseEvent) => {
      cancelAnimationFrame(upperRowAnimation);
      cancelAnimationFrame(lowerRowAnimation);
    };

    // Resume animation when not hovering
    const resumeAnimation = (e: MouseEvent) => {
      upperRowAnimation = requestAnimationFrame(animateUpperRow);
      lowerRowAnimation = requestAnimationFrame(animateLowerRow);
    };

    upperRow.addEventListener('mouseenter', pauseAnimation);
    upperRow.addEventListener('mouseleave', resumeAnimation);
    lowerRow.addEventListener('mouseenter', pauseAnimation);
    lowerRow.addEventListener('mouseleave', resumeAnimation);

    // Clean up animations and event listeners
    return () => {
      cancelAnimationFrame(upperRowAnimation);
      cancelAnimationFrame(lowerRowAnimation);
      upperRow.removeEventListener('mouseenter', pauseAnimation);
      upperRow.removeEventListener('mouseleave', resumeAnimation);
      lowerRow.removeEventListener('mouseenter', pauseAnimation);
      lowerRow.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  // Initialize cards with optimal duplication for smooth infinite scrolling
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Hip Replacement Patient",
      quote: "The entire team at Life Hospital made my hip replacement experience remarkably smooth.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Cardiac Patient",
      quote: "After my cardiac event, I was terrified. The cardiologists provided exceptional medical care.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rebecca Torres",
      role: "ENT Surgery Patient",
      quote: "The ENT specialists identified and resolved an issue other doctors had missed for years.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Orthopedic Patient",
      quote: "Thanks to the orthopedic team, I'm back to doing what I love after my sports injury.",
      rating: 5,
    },
  ];

  // Duplicate testimonials for smooth scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
      <section className="bg-white py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Real Voices</h2>
          </div>

          {/* Upper Row - Moving Right */}
          <div className="mb-8 relative">
            <div
                ref={upperRowRef}
                className="flex overflow-x-hidden scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                  <div
                      key={`upper-${testimonial.id}-${index}`}
                      className="flex-shrink-0 w-80 h-52 bg-white rounded-xl shadow-lg p-5 border border-gray-100 mx-3"
                  >
                    <p className="text-black mb-4 text-sm">{testimonial.quote}</p>
                    <div className="flex flex-col items-end">
                      <h3 className="font-bold text-lg text-black mb-1">{testimonial.name}</h3>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Lower Row - Moving Left */}
          <div className="relative">
            <div
                ref={lowerRowRef}
                className="flex overflow-x-hidden scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                  <div
                      key={`lower-${testimonial.id}-${index}`}
                      className="flex-shrink-0 w-64 h-48 bg-white rounded-lg shadow-md p-4 border border-gray-100 mx-3"
                  >
                    <p className="text-black mb-3 text-xs">{testimonial.quote}</p>
                    <div className="flex flex-col items-end">
                      <h3 className="font-bold text-base text-black mb-1">{testimonial.name}</h3>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-orange-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default TestimonialsSection;