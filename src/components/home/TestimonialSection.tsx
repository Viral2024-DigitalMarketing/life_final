import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const upperRowRef = useRef(null);
  const lowerRowRef = useRef(null);

  useEffect(() => {
    const upperRow = upperRowRef.current;
    const lowerRow = lowerRowRef.current;

    if (!upperRow || !lowerRow) return;

    const pauseAnimation = (row) => {
      const scrollContent = row.querySelector('.scroll-content, .scroll-content-reverse');
      if (scrollContent) scrollContent.style.animationPlayState = 'paused';
    };

    const resumeAnimation = (row) => {
      const scrollContent = row.querySelector('.scroll-content, .scroll-content-reverse');
      if (scrollContent) scrollContent.style.animationPlayState = 'running';
    };

    // Handle hover
    upperRow.addEventListener('mouseenter', () => pauseAnimation(upperRow));
    upperRow.addEventListener('mouseleave', () => resumeAnimation(upperRow));
    lowerRow.addEventListener('mouseenter', () => pauseAnimation(lowerRow));
    lowerRow.addEventListener('mouseleave', () => resumeAnimation(lowerRow));

    // Touch event handling with improved performance
    let isTouching = false;
    let startX = 0;

    const handleTouchStart = (e, row) => {
      isTouching = true;
      startX = e.touches[0].clientX;
      pauseAnimation(row);
    };

    const handleTouchEnd = (row) => {
      isTouching = false;
      resumeAnimation(row);
    };

    upperRow.addEventListener('touchstart', (e) => handleTouchStart(e, upperRow), { passive: false });
    upperRow.addEventListener('touchend', () => handleTouchEnd(upperRow));
    lowerRow.addEventListener('touchstart', (e) => handleTouchStart(e, lowerRow), { passive: false });
    lowerRow.addEventListener('touchend', () => handleTouchEnd(lowerRow));

    return () => {
      upperRow.removeEventListener('mouseenter', () => pauseAnimation(upperRow));
      upperRow.removeEventListener('mouseleave', () => resumeAnimation(upperRow));
      lowerRow.removeEventListener('mouseenter', () => pauseAnimation(lowerRow));
      lowerRow.removeEventListener('mouseleave', () => resumeAnimation(lowerRow));
      upperRow.removeEventListener('touchstart', (e) => handleTouchStart(e, upperRow));
      upperRow.removeEventListener('touchend', () => handleTouchEnd(upperRow));
      lowerRow.removeEventListener('touchstart', (e) => handleTouchStart(e, lowerRow));
      lowerRow.removeEventListener('touchend', () => handleTouchEnd(lowerRow));
    };
  }, []);

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

  // Triple the testimonials for continuous scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
      <section className="bg-white py-8 md:py-16 overflow-hidden">
        <style>
          {`
          .scroll-container {
            display: flex;
            overflow: hidden;
            width: 100%;
            position: relative;
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          }

          .scroll-content {
            display: flex;
            animation: scroll-left 80s linear infinite;
            will-change: transform;
            transform: translateZ(0);
          }

          .scroll-content-reverse {
            display: flex;
            animation: scroll-right 80s linear infinite;
            will-change: transform;
            transform: translateZ(0);
          }

          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }

          @keyframes scroll-right {
            0% { transform: translateX(-33.33%); }
            100% { transform: translateX(0); }
          }

          .testimonial-card {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transform: translateZ(0);
            transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
            backface-visibility: hidden;
          }

          .testimonial-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          }

          .quote-text {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            word-wrap: break-word;
          }

          /* Smoothness improvements */
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          /* Mobile view (unchanged) */
          @media (max-width: 480px) {
            .scroll-content, .scroll-content-reverse {
              animation-duration: 50s;
            }
            .testimonial-card {
              width: 240px;
              height: 180px;
            }
          }

          /* Small tablets - improved spacing */
          @media (min-width: 481px) and (max-width: 640px) {
            .scroll-content, .scroll-content-reverse {
              animation-duration: 60s;
            }
            .testimonial-card {
              width: 240px;
              height: 180px;
              margin-left: 12px;
              margin-right: 12px;
            }
          }

          /* Medium tablets - improved spacing */
          @media (min-width: 641px) and (max-width: 768px) {
            .scroll-content, .scroll-content-reverse {
              animation-duration: 65s;
            }
            .testimonial-card {
              width: 260px;
              height: 190px;
              margin-left: 16px;
              margin-right: 16px;
            }
          }

          /* Large tablets & small laptops - NEW optimized view */
          @media (min-width: 769px) and (max-width: 1024px) {
            .scroll-content, .scroll-content-reverse {
              animation-duration: 70s;
            }
            .testimonial-card {
              width: 280px;
              height: 200px;
              margin-left: 20px;
              margin-right: 20px;
            }
            .scroll-container {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          }

          /* Small laptops - NEW optimized view */
          @media (min-width: 1025px) and (max-width: 1280px) {
            .testimonial-card {
              width: 300px;
              height: 200px;
              margin-left: 24px;
              margin-right: 24px;
            }
          }

          /* Large laptops/desktops (unchanged) */
          @media (min-width: 1281px) {
            .testimonial-card {
              width: 320px;
              height: 200px;
            }
          }

          @media (min-width: 1440px) {
            .testimonial-card {
              width: 340px;
              height: 220px;
            }
          }
        `}
        </style>

        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Real Voices</h2>
          </div>

          <div className="mb-8 md:mb-12">
            <div ref={upperRowRef} className="scroll-container">
              <div className="scroll-content">
                {duplicatedTestimonials.map((testimonial, index) => (
                    <div
                        key={`upper-${testimonial.id}-${index}`}
                        className="testimonial-card rounded-xl shadow-md border border-gray-100 mx-3"
                        style={{ backgroundColor: '#F9F9F9' }}
                    >
                      <div className="flex items-start p-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-orange-500 fill-current mr-1" />
                        ))}
                      </div>

                      <div className="px-4 flex-grow">
                        <p className="text-black text-sm font-bold mb-2">{testimonial.heading}</p>
                        <p className="text-black text-xs leading-relaxed quote-text">{testimonial.quote}</p>
                      </div>

                      <div className="flex flex-col items-end px-4 pb-4 pt-2">
                        <h3 className="font-semibold text-sm text-black">{testimonial.name}</h3>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div ref={lowerRowRef} className="scroll-container">
              <div className="scroll-content-reverse">
                {duplicatedTestimonials.map((testimonial, index) => (
                    <div
                        key={`lower-${testimonial.id}-${index}`}
                        className="testimonial-card rounded-xl shadow-md border border-gray-100 mx-3"
                        style={{ backgroundColor: '#F9F9F9' }}
                    >
                      <div className="flex items-start p-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-orange-500 fill-current mr-1" />
                        ))}
                      </div>

                      <div className="px-4 flex-grow">
                        <p className="text-black text-sm font-bold mb-2">{testimonial.heading}</p>
                        <p className="text-black text-xs leading-relaxed quote-text">{testimonial.quote}</p>
                      </div>

                      <div className="flex flex-col items-end px-4 pb-4 pt-2">
                        <h3 className="font-semibold text-sm text-black">{testimonial.name}</h3>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default TestimonialsSection;