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

    // Data for floating cards - multiple cards per row
    const cardsData = [
        [
            { icon: "/images/ab_ban.svg", text: "World🌍-Class care🏥, zero financial burden!" },
            { icon: "/images/ab_ban.svg", text: "Exceptional treatment, affordable prices💰" },
            { icon: "/images/ab_ban.svg", text: "Quality healthcare that won't break the bank💯" }
        ],
        [
            { icon: "/images/ab_ban.svg", text: "Healthcare made easy, just for you!✨" },
            { icon: "/images/ab_ban.svg", text: "Simple solutions for complex health needs🩺" },
            { icon: "/images/ab_ban.svg", text: "Patient-friendly approach to medical care🙌" }
        ],
        [
            { icon: "/images/ab_ban.svg", text: "Your health, our priority!💖" },
            { icon: "/images/ab_ban.svg", text: "We put patients first, always❤️" },
            { icon: "/images/ab_ban.svg", text: "Dedicated to your wellbeing, 24/7⏰" }
        ],
        [
            { icon: "/images/ab_ban.svg", text: "Seamless care, anytime, anywhere!🌟" },
            { icon: "/images/ab_ban.svg", text: "Accessible healthcare without boundaries🔄" },
            { icon: "/images/ab_ban.svg", text: "Medical excellence at your convenience📱" }
        ]
    ];

    useEffect(() => {
        if (!containerRef.current || !sectionRef.current || !textContainerRef.current || !floatingCardsRef.current) return;

        // Hide the text and floating cards initially
        gsap.set(textContainerRef.current, { opacity: 0 });
        gsap.set(floatingCardsRef.current, { opacity: 0 });

        // Clear any existing animations
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

        // Advanced animation: Simultaneous shrink while moving to extreme left
        tl.to(containerRef.current, {
            scale: 0.2,
            x: "-42vw",
            y: "-35vh",
            transformOrigin: "left center",
            duration: 1.8,
            ease: "power3.inOut",
        });

        // Show the text content and floating cards after animation is complete
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

        // Improved scrolling animation for floating cards
        // Animate each row of cards
        document.querySelectorAll('.card-row').forEach((row, rowIndex) => {
            const cards = row.querySelectorAll('.floating-card');

            // Create a separate timeline for each row
            const rowTimeline = gsap.timeline({
                repeat: -1,
                delay: rowIndex * 0.5, // Stagger start time between rows
            });

            // Set initial positions for all cards in the row (outside view)
            gsap.set(cards, { x: '100vw', opacity: 0 });

            // Animate each card in the row with staggered delays
            cards.forEach((card, cardIndex) => {
                // Entry animation
                rowTimeline.to(card, {
                    x: '0',
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.out",
                    delay: cardIndex * 0.8, // Stagger between cards in same row
                }, cardIndex > 0 ? ">" : 0);

                // Hold visible
                rowTimeline.to(card, {
                    duration: 1.5,
                });

                // Exit animation
                rowTimeline.to(card, {
                    x: '-100vw',
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.in",
                });
            });

            // Add delay between cycles of this row
            rowTimeline.to({}, { duration: 1 });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white mt-20 min-h-[100vh] pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden relative"
        >
            {/* Initial container position */}
            <div
                ref={containerRef}
                className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full h-[80vh] flex items-center justify-center"
            >
                <div
                    ref={numberRef}
                    className="relative flex items-center justify-center"
                >
                    <span
                        className="text-[900px] md:text-[900px] mt-30 lg:text-[2200px] font-extrabold leading-none"
                        style={{
                            color: "#424294",
                            fontFamily: "Plus Jakarta Sans",
                            position: "relative",
                        }}
                    >
                        9
                    </span>

                    <div
                        ref={imageRef}
                        className="absolute rounded-full overflow-hidden"
                        style={{
                            width: "650px",
                            height: "650px",
                            top: "550px",
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

            {/* Text content positioned to appear next to the number when it's in left position */}
            <div
                ref={textContainerRef}
                className="absolute top-1/4 left-0"
                style={{
                    marginLeft: "360px",
                    marginTop: "-20px",
                    fontFamily: "Be Vietnam Pro",
                    fontWeight: 700,
                    fontSize: "36px",
                    lineHeight: "100%",
                    letterSpacing: "3%",
                    color: "#424294",
                }}
            >
                Years of <br /> Orthopedic Excellence
            </div>

            {/* Floating Cards Container - Improved with rows */}
            <div
                ref={floatingCardsRef}
                className="absolute right-0 top-1/5 w-1/2 flex flex-col gap-8"
                style={{ marginTop: "120px" }}
            >
                {cardsData.map((rowCards, rowIndex) => (
                    <div key={rowIndex} className="card-row relative h-12 w-full overflow-hidden">
                        {rowCards.map((card, cardIndex) => (
                            <div
                                key={`${rowIndex}-${cardIndex}`}
                                className="floating-card absolute bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] p-[8px_16px] gap-[4px] flex items-center"
                                style={{
                                    width: "318px",
                                    height: "40px",
                                    left: 0,
                                    transition: "transform 0.3s ease",
                                }}
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
                ))}
            </div>

            {/* Cards Section */}
            <div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 md:gap-12 mt-96 sm:mt-96 md:mt-96 relative z-10 max-w-[1200px] mx-auto"
            >
                {[1, 2].map((_, idx) => (
                    <div
                        key={idx}
                        className="border-[2px] sm:border-[3px] md:border-[5px] border-solid border-light-blue-400 w-full max-w-full h-auto sm:max-w-[600px] sm:h-[605px] flex flex-col items-start p-3 sm:p-4 md:p-6 rounded-xl bg-white shadow-lg"
                    >
                        <img
                            src={`/images/about_sec${idx === 0 ? "" : "2"}.svg`}
                            className="w-full h-[200px] sm:h-[220px] sm:w-[551px] sm:h-[385px] object-cover mb-3 sm:mb-4 rounded-lg"
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

            {/* Appointment Modal */}
            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default AboutSection;