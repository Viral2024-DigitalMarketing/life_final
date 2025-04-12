"use client";

import React, { useEffect, useRef, useState } from "react";
import AppointmentModal from "@/components/shared/AppointmentModal"; // ✅ Ensure the path is correct

const AboutSection = () => {
    const sectionRef = useRef(null);
    const elements = useRef([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // ✨ Modal toggle state

    const cardsData = [
        {
            text: "World🌍-Class care🏥, zero financial burden!",
            width: "318px",
            height: "40px",
            top: "78px",
            left: "862px",
        },
        {
            text: "Healthcare made easy, just for you!✨",
            width: "350px",
            height: "50px",
            top: "140px",
            left: "820px",
        },
        {
            text: "Your health, our priority!💖",
            width: "300px",
            height: "40px",
            top: "220px",
            left: "890px",
        },
        {
            text: "Seamless care, anytime, anywhere!🌟",
            width: "400px",
            height: "60px",
            top: "300px",
            left: "800px",
        },
        {
            text: "Transforming healthcare for everyone!💡",
            width: "280px",
            height: "45px",
            top: "380px",
            left: "920px",
        },
    ];

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

    const addToRefs = (el) => {
        if (el && !elements.current.includes(el)) {
            elements.current.push(el);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="bg-white pt-16 pb-20 px-4 md:px-12 lg:px-24"
        >
            <div className="container mx-auto font-['Be_Vietnam_Pro']">
                {/* 🔵 Big Number + Circle Image Section */}
                <div className="flex flex-col items-start relative">
                    <div
                        className="text-[96px] sm:text-[500px] mt-[20px] ml-[-10px] sm:ml-[-20px] font-extrabold leading-none z-0"
                        style={{ color: "#424294", fontFamily: "Be Vietnam Pro" }}
                    >
                        9
                    </div>

                    <div
                        className="w-[90px] h-[90px] sm:w-[135px] sm:h-[130px] rounded-full bg-blue-100 flex items-center justify-center overflow-hidden absolute z-10"
                        style={{
                            top: "141px",
                            left: "78px",
                        }}
                    >
                        <img
                            src="/images/hap.svg"
                            alt="Circle Image"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        className="absolute left-[100px] sm:left-[300px] top-[130px]"
                        style={{
                            marginTop: "230px",
                            fontFamily: "Be Vietnam Pro",
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: "100%",
                            letterSpacing: "3%",
                            color: "#424294",
                        }}
                    >
                        Years of <br /> Orthopedic Excellence
                    </div>

                    {/* New Animated Cards Section */}
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className="absolute bg-white border-dashed border-[1px] border-gray-300 rounded-[16px] p-[8px_16px] gap-[4px] flex items-center opacity-0 animate-scroll-in"
                            style={{
                                width: card.width,
                                height: card.height,
                                top: card.top,
                                left: card.left,
                            }}
                        >
                            <img
                                src="/images/ab_ban.svg"
                                alt="Avatar"
                                className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] rounded-full"
                            />
                            <p className="font-['Be_Vietnam_Pro'] text-[10px] sm:text-[12px] font-[400] leading-[100%] text-[#030303]">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 📦 Cards Section */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 md:gap-12 mt-8 sm:mt-12 md:mt-16">
                    {/* Card 1 */}
                    <div
                        ref={addToRefs}
                        className="border-[2px] sm:border-[3px] md:border-[5px] border-solid border-light-blue-400 w-full max-w-full h-auto sm:max-w-[600px] sm:h-[605px] flex flex-col items-start p-3 sm:p-4 md:p-6 opacity-0 rounded-xl"
                    >
                        <img
                            src="/images/about_sec.svg"
                            className="w-full h-[200px] sm:h-[220px] sm:w-[551px] sm:h-[385px] object-cover mb-3 sm:mb-4 rounded-lg"
                            alt="Best Healthcare"
                        />
                        <p className="text-xs sm:text-sm text-gray-600">#1 in Kmareddy</p>
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-black mt-1">
                            Best Healthcare
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 sm:text-base">
                            Delivering exceptional medical services with care.
                        </p>
                        <div className="flex justify-end w-full items-center mt-4 sm:mr-2">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group w-full sm:w-[240px] h-[36px] sm:h-[42px] bg-[#333374] text-[#CACAE8] flex items-center justify-between px-4 sm:px-5 md:px-6 rounded-full hover:bg-[#2a2a5e] transition-colors"
                            >
                                <span className="text-xs sm:text-sm md:text-base">
                                    Request Appointment
                                </span>
                                <svg
                                    width="12"
                                    height="8"
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
                        className="border-[2px] sm:border-[3px] md:border-[5px] border-solid border-light-blue-400 w-full max-w-full h-auto sm:max-w-[600px] sm:h-[605px] flex flex-col items-start p-3 sm:p-4 md:p-6 opacity-0 rounded-xl"
                    >
                        <img
                            src="/images/about_sec2.svg"
                            className="w-full h-[200px] sm:h-[215px] sm:w-[551px] sm:h-[380px] object-cover mb-3 sm:mb-4 rounded-lg"
                            alt="Trusted Specialists"
                        />
                        <p className="text-xs sm:text-sm text-gray-600">#1 in Kmareddy</p>
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-black mt-1">
                            Trusted Specialists
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 sm:text-base">
                            Our team of experts is here for your health needs.
                        </p>
                        <div className="flex justify-end w-full items-center mt-4 sm:mr-2">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group w-full sm:w-[240px] h-[36px] sm:h-[42px] bg-[#333374] text-[#CACAE8] flex items-center justify-between px-4 sm:px-5 md:px-6 rounded-full hover:bg-[#2a2a5e] transition-colors"
                            >
                                <span className="text-xs sm:text-sm md:text-base">
                                    Request Appointment
                                </span>
                                <svg
                                    width="12"
                                    height="8"
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

            {/* 🗓️ Appointment Modal */}
            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default AboutSection;