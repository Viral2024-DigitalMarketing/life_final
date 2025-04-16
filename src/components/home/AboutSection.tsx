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
    const [screenType, setScreenType] = useState('desktop'); // 'mobile', 'tablet', 'desktop', 'large', 'xlarge'

    // Data for floating cards - multiple cards per row
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
        // Check screen type based on width
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScreenType('mobile');
            } else if (width >= 640 && width < 1024) {
                setScreenType('tablet');
            } else if (width >= 1024 && width < 1280) {
                setScreenType('desktop');
            } else if (width >= 1280 && width < 1536) {
                setScreenType('large');
            } else {
                setScreenType('xlarge');
            }
        };

        // Initial check
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current || !sectionRef.current || !textContainerRef.current || !floatingCardsRef.current) return;

        // Hide the text and floating cards initially
        gsap.set(textContainerRef.current, { opacity: 0 });
        gsap.set(floatingCardsRef.current, { opacity: 0 });

        // Clear any existing animations
        ScrollTrigger.getAll().forEach(st => st.kill(true));
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

        // Different animations based on screen type
        if (screenType === 'mobile') {
            // Mobile animation: Keep the number centered while scaling down
            tl.to(containerRef.current, {
                scale: 0.5,
                x: "0", // Keep centered horizontally
                y: "-20vh", // Move up vertically
                transformOrigin: "center center", // This ensures scaling happens from the center
                duration: 1.8,
                ease: "power3.inOut",
            });
        } else if (screenType === 'tablet') {
            // Tablet animation: Smaller movement to keep number in view
            tl.to(containerRef.current, {
                scale: 0.3,
                x: "-25vw", // Less movement to the left
                y: "-25vh",
                transformOrigin: "center center", // Center scaling for tablets
                duration: 1.8,
                ease: "power3.inOut",
            });
        } else {
            // Different desktop animations based on screen width
            let xPosition, scale, transformOrigin;

            switch(screenType) {
                case 'desktop':
                    xPosition = "-30vw"; // Less movement left for regular desktop
                    scale = 0.2;
                    transformOrigin = "center center";
                    break;
                case 'large':
                    xPosition = "-32vw";
                    scale = 0.2;
                    transformOrigin = "center center";
                    break;
                case 'xlarge':
                    xPosition = "-35vw";
                    scale = 0.18;
                    transformOrigin = "center center";
                    break;
                default:
                    xPosition = "-30vw";
                    scale = 0.2;
                    transformOrigin = "center center";
            }

            tl.to(containerRef.current, {
                scale: scale,
                x: xPosition,
                y: "-35vh",
                transformOrigin: transformOrigin,
                duration: 1.8,
                ease: "power3.inOut",
            });
        }

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
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
        };
    }, [screenType]); // Updated dependency to screenType

    const isMobile = screenType === 'mobile';
    const isTablet = screenType === 'tablet';

    return (
        <section
            ref={sectionRef}
            className="bg-white mt-20 min-h-[100vh] pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden relative"
        >
            {/* Mobile Floating Cards - Improved infinite scroll */}
            {isMobile && (
                <div
                    ref={floatingCardsRef}
                    className="absolute left-0 top-0 w-full overflow-hidden pointer-events-none"
                >
                    {/* Single row with proper infinite scroll */}
                    <div className="w-full mt-[-5px] overflow-hidden h-[50px] flex items-center">
                        <div className="mobile-scrolling-cards flex gap-4">
                            {/* We need to duplicate the cards multiple times to ensure continuous flow */}
                            {[...cardsData[0], ...cardsData[0], ...cardsData[0]].map((card, cardIndex) => (
                                <div
                                    key={`mobile-row1-${cardIndex}`}
                                    className="bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] px-4 py-2 gap-[4px] flex items-center min-w-[250px] h-[40px] opacity-100"
                                >
                                    <img
                                        src={card.icon}
                                        alt="Avatar"
                                        className="w-[24px] h-[24px] rounded-full flex-shrink-0" // Added flex-shrink-0 to prevent image shrinking
                                    />
                                    <p className="font-['Be_Vietnam_Pro'] text-[12px] font-[400] leading-[100%] text-[#030303] whitespace-nowrap overflow-hidden text-ellipsis ml-2"> {/* Added margin-left for spacing */}
                                        {card.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Initial container position - Updated for proper centering across all screen sizes */}
            <div
                ref={containerRef}
                className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full h-[80vh] flex items-center justify-center"
                style={{
                    // Ensure the container is fully visible initially
                    overflow: 'visible'
                }}
            >
                <div
                    ref={numberRef}
                    className="relative flex items-center justify-center"
                    style={{
                        // Ensure the number is fully visible initially
                        overflow: 'visible'
                    }}
                >
                    <span
                        className="text-[450px] sm:text-[600px] md:text-[900px] lg:text-[1200px] xl:text-[1500px] 2xl:text-[1800px] items-center justify-center font-extrabold leading-none"
                        style={{
                            color: "#424294",
                            fontFamily: "Plus Jakarta Sans",
                            position: "relative",
                            marginTop: isMobile ? "-450px" : isTablet ? "-300px" : "0px",
                        }}
                    >
                        9
                    </span>

                    <div
                        ref={imageRef}
                        className="absolute rounded-full overflow-hidden"
                        style={{
                            width: isMobile ? "150px" : isTablet ? "300px" : "650px",
                            height: isMobile ? "150px" : isTablet ? "300px" : "650px",
                            top: isMobile ? "-350px" : isTablet ? "-150px" : "530px",
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

            {/* Text content positioned - Updated for better positioning across screen sizes */}
            <div
                ref={textContainerRef}
                className={`absolute ${
                    isMobile
                        ? 'top-[10vh] text-center'
                        : isTablet
                            ? 'top-[15vh] text-center'
                            : 'top-1/4 left-0'
                }`}
                style={{
                    fontFamily: 'Be Vietnam Pro',
                    fontWeight: 700,
                    fontSize: isMobile ? '23px' : isTablet ? '28px' : '36px',
                    lineHeight: '120%',
                    letterSpacing: '3%',
                    color: '#424294',
                    marginTop: isMobile ? '200px' : isTablet ? '150px' : '0',
                    marginRight: isMobile || isTablet ? '0' : '0',
                    right: isMobile || isTablet ? 0 : 'auto',
                    left: isMobile || isTablet ? 0 : 'auto',
                    textAlign: isMobile || isTablet ? 'center' : 'left',
                    width: isMobile || isTablet ? '100%' : 'auto',
                    // Adjusted margins based on screen type
                    marginLeft: isMobile || isTablet ? '0' :
                        screenType === 'desktop' ? '35%' :
                            screenType === 'large' ? '40%' : '45%',
                }}
            >
                Years of <br/> Orthopedic Excellence
            </div>

            {/* Floating Cards - Desktop view remains untouched */}
            {!isMobile && (
                <div
                    ref={floatingCardsRef}
                    className={`absolute ${isTablet ? 'right-0' : '-right-[80px]'} top-[50px] ${isTablet ? 'w-[80vw]' : 'w-[50vw]'} flex flex-col gap-6 pointer-events-none fade-mask`}
                >
                    {[0, 1, 2, 3].map((rowIndex) => (
                        <div
                            key={rowIndex}
                            className="card-row relative w-full overflow-hidden h-[50px] flex items-center"
                        >
                            <div
                                className={`flex gap-4 animate-rowScroll${rowIndex}`}
                                style={{
                                    animationDelay: `${rowIndex * 2}s`,
                                }}
                            >
                                {/* Duplicated for seamless loop */}
                                {[...cardsData[rowIndex], ...cardsData[rowIndex]].map((card, cardIndex) => (
                                    <div
                                        key={`${rowIndex}-${cardIndex}`}
                                        className="floating-card bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] px-4 py-2 gap-[4px] flex items-center min-w-[318px] h-[40px] opacity-100 transition-opacity duration-300"
                                    >
                                        <img
                                            src={card.icon}
                                            alt="Avatar"
                                            className="w-[24px] h-[24px] rounded-full"
                                        />
                                        <p className="font-['Be_Vietnam_Pro'] text-[12px] font-[400] leading-[100%] text-[#030303] whitespace-nowrap overflow-hidden text-ellipsis ml-2">
                                            {card.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Cards Section - Moved higher up for mobile */}
            <div
                className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 md:gap-12 ${
                    isMobile ? 'mt-[34vh]' :
                        isTablet ? 'mt-[40vh]' :
                            'mt-96 sm:mt-96 md:mt-80'
                } relative z-10 max-w-[1200px] mx-auto`}
            >
                {[1, 2].map((_, idx) => (
                    <div
                        key={idx}
                        className="border-[2px] sm:border-[3px] md:border-[5px] border-solid border-light-blue-400 w-full max-w-full h-auto sm:max-w-[600px] sm:h-[605px] flex flex-col items-start p-3 sm:p-4 md:p-6 rounded-xl bg-white shadow-lg"
                    >
                        <img
                            src={`/images/about_sec${idx === 0 ? "" : "2"}.svg`}
                            className="w-full h-[200px] sm:h-[220px] sm:w-[551px] sm:h-[385px] object-con mb-3 sm:mb-4 rounded-lg"
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

            {/* Fixed style element */}
            <style jsx>{`
                /* Improved infinite scroll for mobile */
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

                /* Animation for desktop/tablet floating cards */
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

            {/* Appointment Modal */}
            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default AboutSection;