"use client";

import React, { useEffect, useRef, useState } from "react";
import AppointmentModal from "@/components/shared/AppointmentModal"; // Make sure path is correct

const AboutSection = () => {
  const sectionRef = useRef(null);
  const elements = useRef<HTMLElement[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✨ Modal toggle state

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in");
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

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  return (
      <section
          ref={sectionRef}
          className="bg-white pt-16 pb-20 px-4 md:px-12 lg:px-24"
      >
        <div className="container mx-auto">
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-12 md:mt-16">
            {/* Card 1 */}
            <div
                ref={addToRefs}
                className="border-[3px] md:border-[5px] border-solid border-light-blue-400 w-full max-w-full md:max-w-[600px] h-auto md:h-[605px] flex flex-col items-start p-4 md:p-6 opacity-0 rounded-xl"
            >
              <img
                  src="/images/about_sec.svg"
                  className="w-full h-[220px] md:w-[551px] md:h-[385px] object-cover mb-3 md:mb-4 rounded-lg"
                  alt="Location"
              />
              <p className="text-xs md:text-sm text-gray-600">#1 in Kmareddy</p>
              <h3 className="text-lg md:text-2xl font-bold text-black mt-1">
                Best Healthcare
              </h3>
              <p className="text-sm md:text-base text-gray-500 mt-1">
                Delivering exceptional medical services with care.
              </p>
              <div className="flex justify-end w-full items-center mt-4 md:mr-2">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group w-full md:w-[240px] h-[42px] bg-[#333374] text-[#CACAE8] flex items-center justify-between px-5 md:px-6 rounded-full hover:bg-[#2a2a5e] transition-colors"
                >
                  <span className="text-sm md:text-base">Request Appointment</span>
                  <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 transition-transform duration-300 group-hover:-rotate-[45deg] group-hover:-translate-y-1 group-hover:translate-x-1"
                  >
                    <path
                        d="M1 5H13M13 5L9 1M13 5L9 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div
                ref={addToRefs}
                className="border-[3px] md:border-[5px] border-solid border-light-blue-400 w-full max-w-full md:max-w-[600px] h-auto md:h-[605px] flex flex-col items-start p-4 md:p-6 opacity-0 rounded-xl"
            >
              <img
                  src="/images/about_sec2.svg"
                  className="w-full h-[215px] md:w-[551px] md:h-[380px] object-cover mb-3 md:mb-4 rounded-lg"
                  alt="Location"
              />
              <p className="text-xs md:text-sm text-gray-600">#1 in Kmareddy</p>
              <h3 className="text-lg md:text-2xl font-bold text-black mt-1">
                Trusted Specialists
              </h3>
              <p className="text-sm md:text-base text-gray-500 mt-1">
                Our team of experts is here for your health needs.
              </p>
              <div className="flex justify-end w-full items-center mt-4 md:mr-2">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group w-full md:w-[240px] h-[42px] bg-[#333374] text-[#CACAE8] flex items-center justify-between px-5 md:px-6 rounded-full hover:bg-[#2a2a5e] transition-colors"
                >
                  <span className="text-sm md:text-base">Request Appointment</span>
                  <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 transition-transform duration-300 group-hover:-rotate-[45deg] group-hover:-translate-y-1 group-hover:translate-x-1"
                  >
                    <path
                        d="M1 5H13M13 5L9 1M13 5L9 9"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Modal */}
        <AppointmentModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
      </section>
  );
};

export default AboutSection;
