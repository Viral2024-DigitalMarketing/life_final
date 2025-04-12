'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HistorySection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/blog');
  };

  return (
      <section className="w-full bg-white pt-[80px] pb-[50px] px-6">
        <div className="relative max-w-[1280px] mx-auto border border-[#015B52] rounded-[16px] overflow-hidden">
          {/* Content */}
          <div className="relative z-10 px-6 py-8 flex flex-col items-center gap-6 sm:px-10 sm:py-12 sm:flex-row sm:justify-between">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-start w-full sm:max-w-[480px] sm:mt-[120px] space-y-6">
              <div className="space-y-4">
                <h2 className="text-[28px] sm:text-[45px] leading-[110%] font-extrabold text-[#01413A] font-['Be Vietnam Pro'] text-left">
                  Knowledge for Wellness
                </h2>
                <p className="text-[18px] sm:text-[20px] font-semibold text-[#015B52] font-['Be Vietnam Pro'] text-left">
                  Our Community Events
                </p>
                <p className="text-[16px] sm:text-[18px] text-[#3C3C43D9] font-['Be Vietnam Pro'] leading-[160%] text-left">
                  To provide compassionate, high-quality healthcare services to all,
                  regardless of location or socio-economic status.
                </p>
              </div>

              {/* Button with micro interaction */}
              <button
                  onClick={handleNavigate}
                  className="group flex items-center bg-[#01413A] border border-[#015B52] rounded-full px-6 py-3 w-fit transition-all duration-300 ease-in-out"
              >
              <span className="text-white font-medium text-[16px] font-['Be Vietnam Pro'] leading-[100%]">
                Explore more articles
              </span>
                <span className="ml-3 flex items-center justify-center w-9 h-9 bg-[#01413A] border border-[#015B52] rounded-full transition-transform duration-300 ease-in-out group-hover:-rotate-45">
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 ease-in-out" />
              </span>
              </button>
            </div>

            {/* RIGHT IMAGES */}
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-6 sm:ml-[-20px] sm:mr-[-20px]">
              <img
                  src="/images/about_k1.svg"
                  alt="Community Event 1"
                  className="w-full sm:w-[340px] h-[300px] sm:h-[420px] object-cover rounded-[18px]"
              />
              <img
                  src="/images/about_k2.svg"
                  alt="Community Event 2"
                  className="w-full sm:w-[340px] h-[300px] sm:h-[420px] object-cover rounded-[18px]"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default HistorySection;
