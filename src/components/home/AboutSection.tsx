"use client";

import React, { useEffect, useRef, useState } from "react";
import AppointmentModal from "@/components/shared/AppointmentModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const AboutSection = () => {
    const sectionRef = useRef(null);
    const numberRef = useRef(null);
    const imageWrapperRef = useRef(null);
    const elements = useRef<HTMLDivElement[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
        });

        tl.fromTo(
            numberRef.current,
            {
                scale: 1,
                xPercent: -50,
                yPercent: -50,
            },
            {
                scale: 0.01,
                xPercent: -50,
                yPercent: -50,
                ease: "power2.inOut",
                duration: 2,
            }
        );

        tl.fromTo(
            imageWrapperRef.current,
            {
                scale: 0.01,
            },
            {
                scale: 1,
                ease: "power2.inOut",
                duration: 2,
            },
            "<"
        );

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

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

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !elements.current.includes(el)) {
            elements.current.push(el);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="bg-white min-h-[200vh] pt-24 pb-32 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden flex flex-col items-center relative"
        >
            {/* Number + Circle Image Animation */}
            <div className="relative w-full h-[100vh] flex items-center justify-center mb-32">
                <div
                    ref={numberRef}
                    className="text-[1000px] sm:text-[1600px] md:text-[3000px] lg:text-[4000px] font-extrabold leading-none absolute z-0"
                    style={{
                        color: "#424294",
                        fontFamily: "Plus Jakarta Sans",
                        whiteSpace: "nowrap",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    9
                </div>

                <div
                    ref={imageWrapperRef}
                    className="absolute z-10 rounded-full overflow-hidden flex items-center justify-center"
                    style={{
                        width: "300px",
                        height: "300px",
                        top: "20%",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                >
                    <img
                        src="/images/hap.svg"
                        alt="Circle Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Floating Cards (Right Side) */}
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        ref={addToRefs}
                        className="absolute bg-white border-dashed border-[1px] border-gray-300 rounded-[16px] p-[8px_16px] gap-[4px] flex items-center opacity-0 z-10"
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

            {/* Cards Section */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 md:gap-12 w-full max-w-6xl relative z-10 px-2 sm:px-0">
                {[1, 2].map((_, idx) => (
                    <div
                        key={idx}
                        className="border-[2px] sm:border-[3px] md:border-[5px] border-light-blue-400 w-full max-w-full h-auto sm:max-w-[600px] sm:h-[605px] flex flex-col items-start p-4 sm:p-6 md:p-8 rounded-xl bg-white shadow-md"
                    >
                        <img
                            src={`/images/about_sec${idx === 0 ? "" : "2"}.svg`}
                            alt={idx === 0 ? "Best Healthcare" : "Trusted Specialists"}
                            className="w-full h-[200px] sm:h-[385px] object-cover mb-4 rounded-lg"
                        />
                        <p className="text-xs sm:text-sm text-gray-600">#1 in Kamareddy</p>
                        <h3 className="text-base sm:text-lg md:text-2xl font-bold text-black mt-1">
                            {idx === 0 ? "Best Healthcare" : "Trusted Specialists"}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 sm:text-base">
                            {idx === 0
                                ? "Delivering exceptional medical services with care."
                                : "Our team of experts is here for your health needs."}
                        </p>
                        <div className="flex justify-end w-full items-center mt-4 sm:mt-6">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group w-full sm:w-[240px] h-[42px] bg-[#333374] text-[#CACAE8] flex items-center justify-between px-5 md:px-6 rounded-full hover:bg-[#2a2a5e] transition-colors"
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
                ))}
            </div>

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default AboutSection;
