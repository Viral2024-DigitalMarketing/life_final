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
            // Unified desktop, large, and xlarge layout
            // Consistent positioning with 180px margin from left (increased by 150px total)
            tl.to(containerRef.current, {
                scale: screenType === 'desktop' ? 0.3 : screenType === 'large' ? 0.25 : 0.2,
                x: "calc(-50% + 180px)", // Increased from original 30px to 180px (added 150px total)
                y: "-25vh",
                transformOrigin: "left center", // Scale from left side
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

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
        };
    }, [screenType]);

    const isMobile = screenType === 'mobile';
    const isTablet = screenType === 'tablet';
    const isDesktop = screenType === 'desktop';
    const isLarge = screenType === 'large';
    const isXLarge = screenType === 'xlarge';
    const isLargeOrAbove = isLarge || isXLarge;
    const isDesktopOrAbove = isDesktop || isLarge || isXLarge;

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

            {/* Initial container position - Updated for consistent desktop layout with additional 150px margin */}
            <div
                ref={containerRef}
                className={`absolute ${isMobile || isTablet ? 'top-1/5 left-1/2 transform -translate-x-1/2' : 'top-1/5 left-[180px]'} -translate-y-1/4 w-full h-[80vh] flex items-center ${isMobile || isTablet ? 'justify-center' : 'justify-start'}`}
                style={{
                    overflow: 'visible'
                }}
            >
                <div
                    ref={numberRef}
                    className="relative flex items-center justify-center"
                    style={{
                        overflow: 'visible'
                    }}
                >
                  <span
                      className="text-[450px] sm:text-[600px] md:text-[900px] lg:text-[1400px] xl:text-[1600px] 2xl:text-[1800px] items-center justify-center font-extrabold leading-none"
                      style={{
                          color: "#424294",
                          fontFamily: "Plus Jakarta Sans",
                          position: "relative",
                          marginTop: isMobile ? "-450px" : isTablet ? "-300px" : "0px",
                          left: isMobile || isTablet ? "0px" : "200px", // Increased from 50px to 200px (added 150px)
                      }}
                  >
                    9
                  </span>

                    {/* Circular image inside the "9" - adjusted position for all screens */}
                    <div
                        ref={imageRef}
                        className="absolute rounded-full overflow-hidden"
                        style={{
                            width: isMobile ? "150px" : isTablet ? "300px" : isDesktop ? "600px" : isLarge ? "600px" : "700px",
                            height: isMobile ? "150px" : isTablet ? "300px" : isDesktop ? "600px" : isLarge ? "600px" : "700px",
                            // Move image higher for larger screens
                            top: isMobile ? "-350px" : isTablet ? "-100px" : isDesktop ? "330px" : isLarge ? "320px" : "380px",
                            left: "70%",
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

            {/* Text content positioned - Updated with additional 150px margin from left */}
            <div
                ref={textContainerRef}
                className={`absolute ${
                    isMobile
                        ? 'top-[10vh] text-center'
                        : isTablet
                            ? 'top-[15vh] text-left'
                            : 'text-left' // Desktop alignment 
                }`}
                style={{
                    fontFamily: 'Be Vietnam Pro',
                    fontWeight: 700,
                    fontSize: isMobile ? '23px' : isTablet ? '28px' : isDesktop ? '36px' : isLarge ? '38px' : '42px',
                    lineHeight: '120%',
                    letterSpacing: '3%',
                    color: '#424294',
                    marginTop: isMobile ? '200px' : isTablet ? '210px' : '300px',
                    right: isMobile ? 0 : 'auto',
                    // Consistent left positioning for desktop and above with additional 150px
                    left: isMobile ? 0 : isTablet ? '50px' : '230px', // Increased from 80px to 230px (added 150px)
                    textAlign: isMobile ? 'center' : 'left',
                    width: isMobile ? '100%' : 'auto',
                }}
            >
                Years of <br/> Orthopedic Excellence
            </div>

            {/* Floating Cards - Consistently positioned for desktop and above */}
            {!isMobile && (
                <div
                    ref={floatingCardsRef}
                    className="absolute right-0 top-[100px] flex flex-col gap-6 pointer-events-none"
                    style={{
                        width: isTablet ? '50vw' : '50vw',
                        maskImage: isTablet ? 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' : 'none',
                        WebkitMaskImage: isTablet ? 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' : 'none',
                    }}
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

            {/* Cards Section - maintained at bottom of page with consistent positioning */}
            <div
                className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 md:gap-12 ${
                    isMobile ? 'mt-[34vh]' :
                        isTablet ? 'mt-[40vh]' :
                            isDesktop ? 'mt-[65vh]' :
                                isLarge ? 'mt-[65vh]' :
                                    'mt-[70vh]'
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

            {/* Fixed style element with animations */}
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

                /* IMPROVED ANIMATIONS for desktop/tablet floating cards */
                @keyframes animate-rowScroll0 {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                @keyframes animate-rowScroll1 {
                    0% {
                        transform: translateX(-20%);
                    }
                    100% {
                        transform: translateX(-120%);
                    }
                }

                @keyframes animate-rowScroll2 {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                @keyframes animate-rowScroll3 {
                    0% {
                        transform: translateX(-20%);
                    }
                    100% {
                        transform: translateX(-120%);
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