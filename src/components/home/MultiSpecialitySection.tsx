import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MultiSpecialtySection = () => {
  const sectionRef = useRef(null);
  const elements = useRef<HTMLDivElement[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
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

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  const handleCardClick = (title: string) => {
    const pathMap: Record<string, string> = {
      "Orthopedic Care": "/services/joint-replacement",
      "Arthroscopy": "/services/orthopedic",
      "ENT": "/services/specialized-services",
      "General Care": "/services/general-health",
      "Plastic Surgery": "/services/specialized-services",
      "Dental Surgery": "/services/general-health",
    };

    const route = pathMap[title];
    if (route) navigate(route);
    else console.warn("No route mapped for", title);
  };

  const specialtyCards = [
    {
      id: 1,
      title: "Orthopedic Care",
      tagline: "Bone, joint, and muscle health and repair.",
      image: "/images/vec2.svg",
    },
    {
      id: 2,
      title: "Arthroscopy",
      tagline: "Minimally invasive joint care and surgery.",
      image: "/images/vec1.svg",
    },
    {
      id: 3,
      title: "ENT",
      tagline: "Ear, nose, and throat care.",
      image: "/images/vec3.svg",
    },
    {
      id: 4,
      title: "General Care",
      tagline: "Comprehensive primary and preventive healthcare.",
      image: "/images/vec5.svg",
    },
    {
      id: 5,
      title: "Plastic Surgery",
      tagline: "Reconstructive and cosmetic procedures.",
      image: "/images/vec4.svg",
    },
    {
      id: 6,
      title: "Dental Surgery",
      tagline: "Advanced dental procedures and oral surgery.",
      image: "/images/mul6.svg",
    },
  ];

  return (
      <section ref={sectionRef} className="bg-[#DCF4F1] py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          <div ref={addToRefs} className="mb-8 md:mb-16 opacity-0 text-center sm:text-left">
            <h2 className="text-black mb-4 text-3xl sm:text-4xl md:text-5xl font-semibold">
              Multi Specialty Care
            </h2>
            <p className="text-gray-800 text-base sm:text-lg">
              Your Health, Our Priority.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center sm:place-items-stretch">
            {specialtyCards.map((card, index) => (
                <div
                    key={card.id}
                    ref={addToRefs}
                    onClick={() => handleCardClick(card.title)}
                    className="relative flex flex-col bg-white rounded-[12px] shadow-lg p-4 sm:p-6 opacity-0 hover:border-2 hover:border-[#8B5CF6] hover:scale-[1.02] transition-all duration-150 ease-in-out cursor-pointer mx-auto sm:mx-0"
                    style={{
                      width: '100%',
                      maxWidth: '394px',
                      minHeight: '210px',
                      marginTop: index < 3 ? '-10px' : '10px',
                    }}
                >
                  <div className="flex justify-center sm:justify-start mb-4">
                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between flex-1 gap-2 sm:gap-0 text-center sm:text-left">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{card.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{card.tagline}</p>
                    </div>

                    {/* Desktop Button */}
                    <button className="hidden sm:inline-flex p-2 bg-[#01534B] rounded-full hover:bg-[#013d38] transition-colors duration-150 ease-in-out">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Mobile Button - absolute bottom right */}
                  <button className="absolute sm:hidden bottom-2 right-4 p-2 bg-[#01534B] rounded-full hover:bg-[#013d38] transition-colors duration-150 ease-in-out">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default MultiSpecialtySection;
