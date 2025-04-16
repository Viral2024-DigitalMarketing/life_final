"use client";

import React, { useEffect, useRef, useState } from "react";
import AppointmentModal from "@/components/shared/AppointmentModal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const numberRef = useRef(null);
    const imageRef = useRef(null);
    const textContainerRef = useRef(null);
    const floatingCardsRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const cardsData = [
        [
            { icon: "/images/gen_hel.svg", text: "World🌍-Class care🏥, zero financial burden!" },
            { icon: "/images/gen_heal.svg", text: "Exceptional treatment, affordable prices💰" },
            { icon: "/images/nav1.svg", text: "Quality healthcare that won't break the bank💯" }
        ],
        [
            { icon: "/images/gen_hel.svg", text: "Healthcare made easy, just for you!✨" },
            { icon: "/images/gen_heal.svg", text: "Simple solutions for complex health needs🩺" },
            { icon: "/images/nav1.svg", text: "Patient-friendly approach to medical care🙌" }
        ],
        [
            { icon: "/images/gen_hel.svg", text: "Your health, our priority!💖" },
            { icon: "/images/gen_heal.svg", text: "We put patients first, always❤️" },
            { icon: "/images/nav1.svg", text: "Dedicated to your wellbeing, 24/7⏰" }
        ],
        [
            { icon: "/images/gen_hel.svg", text: "Seamless care, anytime, anywhere!🌟" },
            { icon: "/images/gen_heal.svg", text: "Accessible healthcare without boundaries🔄" },
            { icon: "/images/nav1.svg", text: "Medical excellence at your convenience📱" }
        ]
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current || !sectionRef.current || !textContainerRef.current || !floatingCardsRef.current) return;

        gsap.set(textContainerRef.current, { opacity: 0 });
        gsap.set(floatingCardsRef.current, { opacity: 0 });
        gsap.set(containerRef.current, { clearProps: "all" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 50%",
                end: "top 10%",
                scrub: false,
                markers: false,
                once: true,
                toggleActions: "play none none none",
            },
        });

        if (isMobile) {
            tl.to(containerRef.current, {
                scale: 0.5,
                x: "0",
                y: "-20vh",
                transformOrigin: "center center",
                duration: 1.8,
                ease: "power3.inOut",
            });
        } else {
            tl.to(containerRef.current, {
                scale: 0.2,
                x: "-35%",
                y: "-35vh",
                transformOrigin: "center center",
                duration: 1.8,
                ease: "power3.inOut",
            });
        }

        tl.to(
            textContainerRef.current,
            {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "-=0.3"
        );

        tl.to(
            floatingCardsRef.current,
            {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            },
            "-=0.3"
        );

        document.querySelectorAll('.card-row').forEach((row, rowIndex) => {
            const cards = row.querySelectorAll('.floating-card');
            const rowTimeline = gsap.timeline({
                repeat: -1,
                delay: rowIndex * 0.5,
            });
            gsap.set(cards, { x: '100vw', opacity: 0 });
            cards.forEach((card, cardIndex) => {
                rowTimeline.to(card, {
                    x: '0',
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.out",
                    delay: cardIndex * 0.8,
                }, cardIndex > 0 ? ">" : 0);
                rowTimeline.to(card, { duration: 1.5 });
                rowTimeline.to(card, {
                    x: '-100vw',
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.in",
                });
            });
            rowTimeline.to({}, { duration: 1 });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [isMobile]);

    return (
        <section
            ref={sectionRef}
            className="bg-white mt-20 min-h-[100vh] pt-32 pb-16 px-4 sm:px-8 md}px-12 lg:px-24 overflow-hidden relative"
        >
            {isMobile && (
                <div
                    ref={floatingCardsRef}
                    className="absolute left-0 top-0 w-full overflow-hidden pointer-events-none"
                >
                    <div className="w-full mt-[-5px] overflow-hidden h-[50px] flex items-center">
                        <div className="mobile-scrolling-cards flex gap-4">
                            {[...cardsData[0], ...cardsData[0], ...cardsData[0]].map((card, cardIndex) => (
                                <div
                                    key={`mobile-row1-${cardIndex}`}
                                    className="bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] px-4 py-2 gap-[4px] flex items-center min-w-[250px] h-[40px] opacity-100"
                                >
                                    <img
                                        src={card.icon}
                                        alt="Avatar"
                                        className="w-[24px] h-[24px] rounded-full flex-shrink-0"
                                    />
                                    <p className="font-['Be_Vietnam_Pro'] text-[12px] font-[400] leading-[100%] text-[#030303] whitespace-nowrap overflow-hidden text-ellipsis ml-2">
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div
                ref={containerRef}
                className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full h-[80vh] flex items-center justify-center"
            >
                <div
                    ref={numberRef}
                    className="relative flex items-center justify-center"
                >
                    <span
                        className="text-[450px] md:text-[900px] lg:text-[clamp(900px,150vw,1800px)] font-extrabold leading-none"
                        style={{
                            color: "#424294",
                            fontFamily: "Plus Jakarta Sans",
                            position: "relative",
                            marginTop: isMobile ? "-450px" : "0px",
                        }}
                    >
                        9
                    </span>

                    <div
                        ref={imageRef}
                        className="absolute rounded-full overflow-hidden"
                        style={{
                            width: isMobile ? "150px" : "650px",
                            height: isMobile ? "150px" : "650px",
                            top: isMobile ? "-350px" : "530px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        }}
                    >
                        <img
                            src="/images/hap.svg"
                            alt="Healthcare Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div
                ref={textContainerRef}
                className={`absolute ${
                    isMobile
                        ? 'top-[10vh] text-center'
                        : 'top-1/4 left-0 ml-[360px] mt-[-10px]'
                }`}
                style={{
                    fontFamily: 'Be Vietnam Pro',
                    fontWeight: 700,
                    fontSize: isMobile ? '23px' : '36px',
                    lineHeight: '120%',
                    letterSpacing: '3%',
                    color: '#424294',
                    marginTop: isMobile ? '190px' : '0',
                }}
            >
                Years of <br/> Orthopedic Excellence
            </div>

            {!isMobile && (
                <div
                    ref={floatingCardsRef}
                    className="absolute -right-[80px] top-[50px] w-[50vw] flex flex-col gap-6 pointer-events-none fade-mask"
                >
                    {[0, 1, 2, 3].map((rowIndex) => (
                        <div
                            key={rowIndex}
                            className="relative w-full overflow-hidden h-[50px] flex items-center"
                        >
                            <div
                                className={`flex gap-4 animate-rowScroll${rowIndex}`}
                                style={{
                                    animationDelay: `${rowIndex * 2}s`,
                                }}
                            >
                                {[...cardsData[rowIndex], ...cardsData[rowIndex]].map((card, cardIndex) => (
                                    <div
                                        key={`${rowIndex}-${cardIndex}`}
                                        className="bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] px-4 py-2 gap-[4px] flex items-center min-w-[318px] h-[40px] opacity-100 transition-opacity duration-300"
                                    >
                                        <img
                                            src={card.icon}
                                            alt="Avatar"
                                            className="w-[24px] h-[24px] rounded-full"
                                        />
                                        <p className="font-['Be_Vietnam_Pro'] text-[12px] font-[400] leading-[100%] text-[#030303] whitespace-nowrap overflow-hidden text-ellipsis">
                                            {card.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div
                className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 md:gap-12 ${isMobile ? 'mt-[30vh]' : 'mt-96 sm:mt-96 md:mt-80'} relative z-10 max-w-[1200px] mx-auto`}
            >
                {[1, 2].map((_, idx) => (
                    <div
                        key={idx}
                        className="border-[2px] sm:border-[3px] md:border-[5px] border-solid border-light-blue-400 w-full max-w-full h-auto sm:max-w-[600px] sm:h-[605px] flex flex-col items-start p-3 sm:p-4 md:p-6 rounded-xl bg-white shadow-lg"
                    >
                        <img
                            src={`/images/about_sec${idx === 0 ? "" : "2"}.svg`}
                            className="w-full h-[200px] sm:h-[220px] sm:w-[551px] sm:h-[385px] object-contain mb-3 sm:mb-4 rounded-lg"
                            alt={idx === 0 ? "Best Healthcare" : "Trusted Specialists"}
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
                ))}
            </div>

            <style jsx>{`
                @keyframes mobileInfiniteScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                .mobile-scrolling-cards {
                    animation: mobileInfiniteScroll 60s linear infinite;
                    width: max-content;
                }

                @keyframes animate-rowScroll0 {
                    0% {
                        transform: translateX(100vw);
                    }
                    100% {
                        transform: translateX(-200vw);
                    }
                }

                @keyframes animate-rowScroll1 {
                    0% {
                        transform: translateX(100vw);
                    }
                    100% {
                        transform: translateX(-200vw);
                    }
                }

                @keyframes animate-rowScroll2 {
                    0% {
                        transform: translateX(100vw);
                    }
                    100% {
                        transform: translateX(-200vw);
                    }
                }

                @keyframes animate-rowScroll3 {
                    0% {
                        transform: translateX(100vw);
                    }
                    100% {
                        transform: translateX(-200vw);
                    }
                }
            `}</style>

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default AboutSection;