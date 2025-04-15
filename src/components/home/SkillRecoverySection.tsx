'use client';
import React, { useEffect, useRef, useState } from 'react';

const cardData = [
  {
    number: '1',
    title: 'Initial Consultation and Diagnosis',
    description: 'Patients undergo a thorough physical examination, medical history review, and imaging tests (X-rays, MRI, CT scans) to determine the diagnosis.',
    image: '/images/our1.svg',
    bgImage: '/images/1-background.png',
  },
  {
    number: '2',
    title: 'Advanced Therapy Techniques',
    description: 'We utilize state-of-the-art therapy methods to ensure the most effective recovery.',
    image: '/images/our5.svg',
    bgImage: '/images/2-background.png',
  },
  {
    number: '3',
    title: 'Comprehensive Rehabilitation',
    description: 'Our rehabilitation programs are designed for complete physical and mental well-being.',
    image: '/images/our3.svg',
    bgImage: '/images/3-background.png',
  },
  {
    number: '4',
    title: 'Expert Physiotherapists',
    description: 'Our team of physiotherapists brings unmatched experience and care.',
    image: '/images/our4.svg',
    bgImage: '/images/4-background.png',
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
      <div ref={containerRef} className="w-full">
        {/* ⬇️ Heading Section */}
        <div className="w-full px-4 md:px-[80px] pt-[60px] pb-[40px] bg-white">
          <h2
              className="text-[32px] md:text-[52px] leading-[100%] tracking-[1%] font-[600] text-left font-['Abhaya_Libre'] text-[#000000]"
          >
            Our Skill, Your Recovery.
          </h2>
          <p
              className="text-[16px] md:text-[20px] leading-[100%] font-[400] tracking-[0%] text-left font-['Be_Vietnam_Pro'] text-[#1E1E1ECC] mt-[16px] max-w-[900px]"
          >
            Life Hospital's orthopedic department offers comprehensive care for a wide range of musculoskeletal conditions, from joint replacements to sports injuries.
          </p>
        </div>

        {/* ⬇️ Cards Section */}
        {cardData.map((card, index) => (
            <div
                key={index}
                className="card-section h-screen w-full sticky top-0 flex items-center justify-center px-4 sm:px-6"
                style={{
                  backgroundImage: `url(${card.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  zIndex: index,
                }}
            >
              <div className="w-full max-w-[1000px] bg-white rounded-[20px] shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-[29.38px]">
                <div className="text-gray-900 w-full md:w-1/2 text-center md:text-left">
              <span className="text-[40px] md:text-[65.59px] font-bold leading-[100%] tracking-[1%] font-[Be Vietnam Pro] text-[#000000] block">
                {card.number}
              </span>
                  <h2 className="text-[20px] md:text-[28.59px] font-bold mt-2 md:mt-4 leading-[100%] tracking-[1%] font-[Be Vietnam Pro] text-[#000000]">
                    {card.title}
                  </h2>
                  <p className="text-[12px] md:text-[13px] font-medium leading-[140%] tracking-[0.5%] font-[Be Vietnam Pro] text-[#4A4A4A] mt-2">
                    {card.description}
                  </p>
                </div>
                <img
                    src={card.image}
                    alt={card.title}
                    className="w-[250px] h-[250px] object-contain md:w-[472px] md:h-[302px]"
                />
              </div>
            </div>
        ))}
      </div>
  );
};

export default SkillRecoverySection;
