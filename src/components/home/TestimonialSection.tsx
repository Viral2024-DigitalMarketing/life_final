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
    const pauseAnimation = () => {
      cancelAnimationFrame(upperRowAnimation);
      cancelAnimationFrame(lowerRowAnimation);
    };

    // Resume animation when not hovering
    const resumeAnimation = () => {
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

  // Random testimonials with Indian villager names, unique headings, and varying text lengths
  const testimonials = [
    {
      id: 1,
      name: "Ramesh Kumar",
      heading: "Timely Help and Excellent Care",
      quote: "The doctors at Life Hospital treated me with great care and helped me recover quickly.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sita Devi",
      heading: "Emergency Care That Saved My Life",
      quote: "I am grateful for the timely care provided by the staff during my emergency.",
      rating: 5,
    },
    {
      id: 3,
      name: "Venkatesh Naidu",
      heading: "Successful Surgery with Expert Doctors",
      quote: "Life Hospital's facilities and doctors ensured my surgery was a success. Thank you!",
      rating: 5,
    },
    {
      id: 4,
      name: "Lakshmi Bai",
      heading: "Compassionate and Stress-Free Treatment",
      quote: "Their dedication and care made my treatment smooth and stress-free.",
      rating: 5,
    },
    {
      id: 5,
      name: "Arvind Patel",
      heading: "Highly Recommended for Quality Care",
      quote: "I will always recommend Life Hospital for their professional and kind-hearted approach.",
      rating: 5,
    },
    {
      id: 6,
      name: "Manju Yadav",
      heading: "Recovery Made Possible by Their Team",
      quote: "The team at Life Hospital worked tirelessly to ensure my recovery.",
      rating: 5,
    },
  ];

  // Duplicate testimonials for smooth scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const calculateCardSize = (quote: string) => {
    const baseWidth = 260;
    const baseHeight = 160;
    const extraWidth = Math.min(quote.length * 1.2, 100); // Adjust width based on text length
    const extraHeight = Math.min(quote.length * 0.8, 120); // Adjust height based on text length
    return {
      width: `${baseWidth + extraWidth}px`,
      height: `${baseHeight + extraHeight}px`,
    };
  };

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
              {duplicatedTestimonials.map((testimonial, index) => {
                const { width, height } = calculateCardSize(testimonial.quote);
                return (
                    <div
                        key={`upper-${testimonial.id}-${index}`}
                        className="flex-shrink-0 rounded-xl shadow-lg p-5 border border-gray-100 mx-3"
                        style={{ width, height, backgroundColor: '#F9F9F9' }}
                    >
                      <div className="flex items-start mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-5 h-5 text-orange-500 fill-current mr-1"
                            />
                        ))}
                      </div>
                      <p className="text-black text-sm font-bold mb-4">
                        {testimonial.heading}
                      </p>
                      <p className="text-black text-xs font-medium mb-4">
                        {testimonial.quote}
                      </p>
                      <div className="flex flex-col items-end">
                        <h3 className="font-bold text-lg text-black mb-1">{testimonial.name}</h3>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>

          {/* Lower Row - Moving Left */}
          <div className="relative">
            <div
                ref={lowerRowRef}
                className="flex overflow-x-hidden scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedTestimonials.map((testimonial, index) => {
                const { width, height } = calculateCardSize(testimonial.quote);
                return (
                    <div
                        key={`lower-${testimonial.id}-${index}`}
                        className="flex-shrink-0 rounded-xl shadow-lg p-5 border border-gray-100 mx-3"
                        style={{ width, height, backgroundColor: '#F9F9F9' }}
                    >
                      <div className="flex items-start mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-5 h-5 text-orange-500 fill-current mr-1"
                            />
                        ))}
                      </div>
                      <p className="text-black text-sm font-bold mb-4">
                        {testimonial.heading}
                      </p>
                      <p className="text-black text-xs font-medium mb-4">
                        {testimonial.quote}
                      </p>
                      <div className="flex flex-col items-end">
                        <h3 className="font-bold text-lg text-black mb-1">{testimonial.name}</h3>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
};

export default TestimonialsSection;