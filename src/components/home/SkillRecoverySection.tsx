'use client';
import React, { useEffect, useRef, useState } from 'react';

const cardData = [
  {
    number: '01',
    title: 'Personalized Treatment Plans',
    description: 'We develop customized treatment plans tailored to your specific condition, lifestyle, and goals.',
    image: '/images/our1.svg',
    bgColor: '#EAF3FB',
  },
  {
    number: '02',
    title: 'Advanced Therapy Techniques',
    description: 'We utilize state-of-the-art therapy methods to ensure the most effective recovery.',
    image: '/images/our5.svg',
    bgColor: '#F2F8F2',
  },
  {
    number: '03',
    title: 'Comprehensive Rehabilitation',
    description: 'Our rehabilitation programs are designed for complete physical and mental well-being.',
    image: '/images/our3.svg',
    bgColor: '#FFF3EC',
  },
  {
    number: '04',
    title: 'Expert Physiotherapists',
    description: 'Our team of physiotherapists brings unmatched experience and care.',
    image: '/images/our4.svg',
    bgColor: '#F1F1FF',
  },
];

const SkillRecoverySection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sections = containerRef.current.querySelectorAll('.card-section');
      let current = 0;

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = i;
        }
      });

      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div ref={containerRef}>
        {cardData.map((card, index) => (
            <div
                key={index}
                className="card-section h-screen w-full sticky top-0 flex items-center justify-center"
                style={{
                  backgroundColor: card.bgColor,
                  zIndex: index,
                }}
            >
              <div className="w-[90%] max-w-5xl h-[500px] bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center justify-between transition-all duration-700 ease-in-out
            md:h-[500px] h-auto p-6 sm:p-4 sm:gap-6"
              >
                <div className="text-gray-900 w-full md:w-1/2 sm:text-center sm:mb-6">
                  <span className="text-7xl font-bold opacity-20 sm:text-5xl md:text-8xl">{card.number}</span>
                  <h2 className="text-4xl font-bold mt-4 sm:text-2xl md:text-5xl md:mt-6">{card.title}</h2>
                  <p className="mt-4 text-lg text-gray-700 sm:text-sm md:text-xl md:mt-6">{card.description}</p>

                </div>
                <img
                    src={card.image}
                    alt={card.title}
                    className="w-[600px] h-[500px] object-contain sm:w-[250px] sm:h-[250px] md:w-[650px] md:h-[550px] lg:w-[500px] lg:h-[450px]"
                />

              </div>
            </div>
        ))}
      </div>
  );
};

export default SkillRecoverySection;
