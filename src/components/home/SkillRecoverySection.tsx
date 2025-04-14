'use client';
import React, { useEffect, useRef, useState } from 'react';

const cardData = [
  {
    number: '1',
    title: 'Initial Consultation and Diagnosis',
    description: 'Patients undergo a thorough physical examination, medical history review, and imaging tests (X-rays, MRI, CT scans) to determine the diagnosis.',
    image: '/images/our1.svg',
    bgColor: '#EAF3FB',
  },
  {
    number: '2',
    title: 'Advanced Therapy Techniques',
    description: 'We utilize state-of-the-art therapy methods to ensure the most effective recovery.',
    image: '/images/our5.svg',
    bgColor: '#F2F8F2',
  },
  {
    number: '3',
    title: 'Comprehensive Rehabilitation',
    description: 'Our rehabilitation programs are designed for complete physical and mental well-being.',
    image: '/images/our3.svg',
    bgColor: '#FFF3EC',
  },
  {
    number: '4',
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
              <div
                  className="w-[90%] h-auto md:w-[1000px] md:h-[350px] bg-white rounded-[20px] shadow-2xl p-[16px] md:p-[24px] flex flex-col md:flex-row items-center justify-between transition-all duration-700 ease-in-out gap-4 md:gap-[29.38px]"
              >
                <div className="text-gray-900 w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                  <span
                      className="text-[40px] md:text-[65.59px] font-[700] leading-[100%] tracking-[1%] font-[Be Vietnam Pro] text-[#000000] block"
                  >
                    {card.number}
                  </span>
                  <h2
                      className="text-[20px] md:text-[28.59px] font-[700] mt-2 md:mt-4 leading-[100%] tracking-[1%] font-[Be Vietnam Pro] text-[#000000]"
                  >
                    {card.title}
                  </h2>

                  <p
                      className="text-[12px] md:text-[13px] font-[500] leading-[140%] tracking-[0.5%] font-[Be Vietnam Pro] text-[#4A4A4A] mt-2"
                  >
                    {card.description}
                  </p>
                </div>
                <img
                    src={card.image}
                    alt={card.title}
                    className="w-[250px] h-[250px] object-contain md:w-[650px] md:h-[550px] lg:w-[472px] lg:h-[302px]"
                />
              </div>
            </div>
        ))}
      </div>
  );
};

export default SkillRecoverySection;