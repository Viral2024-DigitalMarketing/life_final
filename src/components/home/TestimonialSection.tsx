import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const upperRowRef = useRef<HTMLDivElement>(null);
  const lowerRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const upperRow = upperRowRef.current;
    const lowerRow = lowerRowRef.current;

    if (!upperRow || !lowerRow) return;

    // Pause animation on hover for specific row
    const pauseAnimation = (row: HTMLDivElement) => {
      const scrollContent = row.querySelector('.scroll-content, .scroll-content-reverse') as HTMLDivElement;
      if (scrollContent) scrollContent.style.animationPlayState = 'paused';
    };

    // Resume animation for specific row
    const resumeAnimation = (row: HTMLDivElement) => {
      const scrollContent = row.querySelector('.scroll-content, .scroll-content-reverse') as HTMLDivElement;
      if (scrollContent) scrollContent.style.animationPlayState = 'running';
    };

    // Touch support for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent, row: HTMLDivElement) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      pauseAnimation(row);
    };

    const handleTouchMove = (e: TouchEvent, row: HTMLDivElement) => {
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      const deltaX = touchStartX - touchX;
      const deltaY = touchStartY - touchY;

      // Prevent vertical scrolling if horizontal swipe is detected
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (row: HTMLDivElement) => {
      resumeAnimation(row);
    };

    upperRow.addEventListener('mouseenter', () => pauseAnimation(upperRow));
    upperRow.addEventListener('mouseleave', () => resumeAnimation(upperRow));
    lowerRow.addEventListener('mouseenter', () => pauseAnimation(lowerRow));
    lowerRow.addEventListener('mouseleave', () => resumeAnimation(lowerRow));

    // Add touch event listeners
    upperRow.addEventListener('touchstart', (e) => handleTouchStart(e, upperRow));
    upperRow.addEventListener('touchmove', (e) => handleTouchMove(e, upperRow));
    upperRow.addEventListener('touchend', () => handleTouchEnd(upperRow));
    lowerRow.addEventListener('touchstart', (e) => handleTouchStart(e, lowerRow));
    lowerRow.addEventListener('touchmove', (e) => handleTouchMove(e, lowerRow));
    lowerRow.addEventListener('touchend', () => handleTouchEnd(lowerRow));

    // Clean up event listeners
    return () => {
      upperRow.removeEventListener('mouseenter', () => pauseAnimation(upperRow));
      upperRow.removeEventListener('mouseleave', () => resumeAnimation(upperRow));
      lowerRow.removeEventListener('mouseenter', () => pauseAnimation(lowerRow));
      lowerRow.removeEventListener('mouseleave', () => resumeAnimation(lowerRow));
      upperRow.removeEventListener('touchstart', (e) => handleTouchStart(e, upperRow));
      upperRow.removeEventListener('touchmove', (e) => handleTouchMove(e, upperRow));
      upperRow.removeEventListener('touchend', () => handleTouchEnd(upperRow));
      lowerRow.removeEventListener('touchstart', (e) => handleTouchStart(e, lowerRow));
      lowerRow.removeEventListener('touchmove', (e) => handleTouchMove(e, lowerRow));
      lowerRow.removeEventListener('touchend', () => handleTouchEnd(lowerRow));
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

  // Duplicate testimonials for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const calculateCardSize = (quote: string) => {
    // Responsive base sizes using viewport units
    const baseWidth = Math.min(240, window.innerWidth * 0.6); // 60% of viewport width, capped at 240px
    const baseHeight = 140;
    const extraWidth = Math.min(quote.length * 1.0, 80); // Reduced to prevent overly wide cards
    const extraHeight = Math.min(quote.length * 0.6, 100); // Reduced to keep cards compact
    return {
      width: `${baseWidth + extraWidth}px`,
      height: `${baseHeight + extraHeight}px`,
    };
  };

  return (
      <section className="bg-white py-8 md:py-16 overflow-hidden">
        <style>
          {`
          .scroll-container {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            user-select: none;
            -webkit-overflow-scrolling: touch;
            width: 100%;
          }

          .scroll-content {
            display: flex;
            animation: scroll-left 50s linear infinite;
            will-change: transform;
          }

          .scroll-content-reverse {
            display: flex;
            animation: scroll-right 50s linear infinite;
            will-change: transform;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }

          @keyframes scroll-right {
            0% {
              transform: translateX(-33.33%);
            }
            100% {
              transform: translateX(0);
            }
 واقرأ المزيد
          }

          /* Hide scrollbar */
          .scroll-container::-webkit-scrollbar {
            display: none;
          }

          .scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          /* Ensure text stays within card */
          .testimonial-card {
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .testimonial-card p {
            overflow-wrap: break-word;
            word-break: break-word;
            hyphens: auto;
            max-height: 4.5em; /* Limit text height to prevent overflow */
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* Limit to 3 lines */
            -webkit-box-orient: vertical;
          }

          /* Responsive adjustments */
          @media (max-width: 640px) {
            .scroll-content, .scroll-content-reverse {
              animation-duration: 35s; /* Slower on mobile */
            }

            .testimonial-card {
              min-width: 180px; /* Smaller cards on small screens */
              padding: 0.75rem;
            }

            .testimonial-card p {
              font-size: 0.65rem; /* Smaller text on mobile */
              max-height: 3.5em;
            }

            .testimonial-card h3 {
              font-size: 0.9rem;
            }
          }

          @media (min-width: 641px) and (max-width: 768px) {
            .scroll-content, .scroll-content-reverse {
              animation-duration: 40s;
            }

            .testimonial-card {
              min-width: 200px;
            }

            .testimonial-card p {
              font-size: 0.75rem;
            }

            .testimonial-card h3 {
              font-size: 1rem;
            }
          }

          @media (min-width: 769px) and (max-width: 1024px) {
            .scroll-content, .scroll-content-reverse {
              animation-duration: 45s;
            }

            .testimonial-card {
              min-width: 220px;
            }
          }

          @media (min-width: 1025px) {
            .testimonial-card {
              min-width: 240px;
            }
          }

          @media (min-width: 1440px) {
            .testimonial-card {
              min-width: 260px;
            }

            .testimonial-card p {
              font-size: 0.85rem;
            }

            .testimonial-card h3 {
              font-size: 1.1rem;
            }
          }

          @media (min-width: 1920px) {
            .testimonial-card {
              min-width: 280px;
            }

            .testimonial-card p {
              font-size: 0.9rem;
            }

            .testimonial-card h3 {
              font-size: 1.2rem;
            }
          }
        `}
        </style>
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Real Voices</h2>
          </div>

          {/* Upper Row - Moving Left */}
          <div className="mb-6 md:mb-8">
            <div ref={upperRowRef} className="scroll-container">
              <div className="scroll-content">
                {duplicatedTestimonials.map((testimonial, index) => {
                  const { width, height } = calculateCardSize(testimonial.quote);
                  return (
                      <div
                          key={`upper-${testimonial.id}-${index}`}
                          className="testimonial-card flex-shrink-0 rounded-xl shadow-lg border border-gray-100 mx-2 sm:mx-3"
                          style={{ width, height, backgroundColor: '#F9F9F9' }}
                      >
                        <div className="flex items-start mb-3 p-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-current mr-1" />
                          ))}
                        </div>
                        <p className="text-black text-xs sm:text-sm font-bold mb-3 px-4">{testimonial.heading}</p>
                        <p className="text-black text-[0.65rem] sm:text-xs font-medium mb-3 px-4">{testimonial.quote}</p>
                        <div className="flex flex-col items-end px-4 pb-4">
                          <h3 className="font-bold text-sm sm:text-lg text-black">{testimonial.name}</h3>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Lower Row - Moving Right */}
          <div>
            <div ref={lowerRowRef} className="scroll-container">
              <div className="scroll-content-reverse">
                {duplicatedTestimonials.map((testimonial, index) => {
                  const { width, height } = calculateCardSize(testimonial.quote);
                  return (
                      <div
                          key={`lower-${testimonial.id}-${index}`}
                          className="testimonial-card flex-shrink-0 rounded-xl shadow-lg border border-gray-100 mx-2 sm:mx-3"
                          style={{ width, height, backgroundColor: '#F9F9F9' }}
                      >
                        <div className="flex items-start mb-3 p-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-current mr-1" />
                          ))}
                        </div>
                        <p className="text-black text-xs sm:text-sm font-bold mb-3 px-4">{testimonial.heading}</p>
                        <p className="text-black text-[0.65rem] sm:text-xs font-medium mb-3 px-4">{testimonial.quote}</p>
                        <div className="flex flex-col items-end px-4 pb-4">
                          <h3 className="font-bold text-sm sm:text-lg text-black">{testimonial.name}</h3>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default TestimonialsSection;