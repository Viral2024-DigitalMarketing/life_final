'use client';
import React, { useEffect, useRef, useState } from 'react';

const cardData = [
  {
    number: '1',
    title: 'Initial Consultation and Diagnosis',
    description: 'Patients undergo a thorough physical examination, medical history review, and imaging tests (X-rays, MRI, CT scans) to determine the diagnosis..',
    image: '/images/our1.svg',
    bgImage: '/images/1-background.png',
  },
  {
    number: '2',
    title: 'Non Surgical Treatments',
    description: 'In a supportive healthcare setting, dedicated professionals explore diverse solutions to ensure the well-being of every individual.',
    image: '/images/our5.svg',
    bgImage: '/images/2-background.png',
  },
  {
    number: '3',
    title: 'Surgical Procedures',
    description: 'Life Hospital provides advanced surgical care, including minimally invasive procedures, joint replacements, and fracture repairs, in a sterile environment.',
    image: '/images/our3.svg',
    bgImage: '/images/3-background.png',
  },
  {
    number: '4',
    title: 'Post Operative Care and Rehabilitation',
    description: 'Life Hospital provides comprehensive post-operative care, including pain management, wound care, and physical therapy, to ensure optimal recovery and rehabilitation.',
    image: '/images/our4.svg',
    bgImage: '/images/4-background.png',
  },
];

const SkillRecoverySection = () => {
  const containerRef = useRef(null);
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
      <div className="relative w-full">
        {/* Sticky Heading Section */}
        <div className="sticky top-0 w-full px-4 md:px-20 pt-12 pb-8 bg-white z-50 shadow-md">
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-wide font-semibold text-left font-['Abhaya_Libre'] text-black">
            Our Skill, Your Recovery.
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal text-left font-['Be_Vietnam_Pro'] text-gray-800 mt-4 max-w-3xl">
            Life Hospital's orthopedic department offers comprehensive care for a wide range of musculoskeletal conditions, from joint replacements to sports injuries.
          </p>
        </div>

        {/* Card Container */}
        <div ref={containerRef} className="w-full mt-12">
          {/* Cards Section */}
          {cardData.map((card, index) => (
              <div
                  key={index}
                  className="card-section h-screen w-full sticky top-32 flex items-center justify-center px-4 sm:px-6"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: index,
                  }}
              >
                <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-7">
                  <div className="text-gray-900 w-full md:w-1/2 mt-16 md:mt-20 text-center md:text-left">
                <span
                    className="text-4xl md:text-6xl font-bold leading-none tracking-wide font-['Be_Vietnam_Pro'] block transition-all duration-500"
                    style={{
                      color: activeIndex === index ? '#000000' : 'transparent',
                      WebkitTextStroke: activeIndex === index ? '0px #000000' : '1px #000000',
                    }}
                >
                  {card.number}
                </span>
                    <h2 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4 leading-tight tracking-wide font-['Be_Vietnam_Pro'] text-black">
                      {card.title}
                    </h2>
                    <p className="text-xs md:text-sm font-medium leading-relaxed tracking-wide font-['Be_Vietnam_Pro'] text-gray-700 mt-2">
                      {card.description}
                    </p>
                  </div>
                  <img
                      src={card.image}
                      alt={card.title}
                      className="w-60 h-60 object-contain md:w-96 md:h-72"
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default SkillRecoverySection;