import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const upperRowRef = useRef<HTMLDivElement>(null);
  const lowerRowRef = useRef<HTMLDivElement>(null);
  const elements = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.2 }
    );

    elements.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    const upperRow = upperRowRef.current;
    const lowerRow = lowerRowRef.current;

    const animateRow = (row: HTMLDivElement, scrollAmount: number, direction: number) => {
      let animationId: number;

      const animate = () => {
        row.scrollLeft += scrollAmount * direction;
        if (direction > 0 && row.scrollLeft >= row.scrollWidth - row.clientWidth) {
          row.scrollLeft = 0;
        } else if (direction < 0 && row.scrollLeft <= 0) {
          row.scrollLeft = row.scrollWidth - row.clientWidth;
        }
        animationId = requestAnimationFrame(animate);
      };

      const handleMouseEnter = () => cancelAnimationFrame(animationId);
      const handleMouseLeave = () => animationId = requestAnimationFrame(animate);

      animationId = requestAnimationFrame(animate);
      row.addEventListener('mouseenter', handleMouseEnter);
      row.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        cancelAnimationFrame(animationId);
        row.removeEventListener('mouseenter', handleMouseEnter);
        row.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    if (upperRow) {
      animateRow(upperRow, 1, 1);
    }

    if (lowerRow) {
      animateRow(lowerRow, 1, -1);
    }
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Hip Replacement Patient",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470&auto=format&fit=crop",
      quote: "The entire team at Life Hospital made my hip replacement experience remarkably smooth.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Cardiac Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
      quote: "After my cardiac event, I was terrified. The cardiologists provided exceptional medical care.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rebecca Torres",
      role: "ENT Surgery Patient",
      image: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=1287&auto=format&fit=crop",
      quote: "The ENT specialists identified and resolved an issue other doctors had missed for years.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Orthopedic Patient",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop",
      quote: "Thanks to the orthopedic team, I'm back to doing what I love after my sports injury.",
      rating: 5,
    },
  ];

  return (
      <section ref={sectionRef} className="bg-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div ref={addToRefs} className="text-center max-w-3xl mx-auto mb-12 opacity-100">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Real Voices</h2>
          </div>

          {/* Upper Row - Large Cards - Marquee Right */}
          <div
              ref={upperRowRef}
              className="flex space-x-6 mb-12 overflow-x-hidden scroll-smooth cursor-grab"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                    key={`${testimonial.id}-${index}`}
                    ref={addToRefs}
                    className="flex-shrink-0 w-[350px] md:w-[380px] h-[200px] md:h-[220px] bg-white rounded-xl shadow-lg p-5 border border-gray-100 opacity-100 transition-opacity duration-700 ease-in"
                >
                  <p className="text-black mb-4">{testimonial.quote}</p>
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

          {/* Lower Row - Small Cards - Marquee Left */}
          <div
              ref={lowerRowRef}
              className="flex space-x-6 overflow-x-hidden scroll-smooth cursor-grab"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                    key={`${testimonial.id}-${index}`}
                    ref={addToRefs}
                    className="flex-shrink-0 w-[280px] md:w-[320px] h-[180px] md:h-[200px] bg-white rounded-lg shadow-md p-4 border border-gray-100 opacity-100 transition-opacity duration-700 ease-in"
                >
                  <p className="text-black mb-4">{testimonial.quote}</p>
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
      </section>
  );
};

export default TestimonialsSection;