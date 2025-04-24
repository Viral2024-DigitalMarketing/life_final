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
            { icon: "/images/nav1.svg", text: "Quality healthcare that won't break the bank💯" },
            { icon: "/images/gen_hel.svg", text: "Comprehensive care without compromise!" },
            { icon: "/images/gen_heal.svg", text: "Top-tier medical services at fair rates✨" }
        ],
        [
            { icon: "/images/gen_hel.svg", text: "Healthcare made easy, just for you!✨" },
            { icon: "/images/gen_heal.svg", text: "Simple solutions for complex health needs🩺" },
            { icon: "/images/nav1.svg", text: "Patient-friendly approach to medical care🙌" },
            { icon: "/images/gen_hel.svg", text: "Streamlined healthcare experience for all!" },
            { icon: "/images/gen_heal.svg", text: "Easy access to expert medical advice🧠" }
        ],
        [
            { icon: "/images/gen_hel.svg", text: "Your health, our priority!💖" },
            { icon: "/images/gen_heal.svg", text: "We put patients first, always❤️" },
            { icon: "/images/nav1.svg", text: "Dedicated to your wellbeing, 24/7⏰" },
            { icon: "/images/gen_hel.svg", text: "Committed to excellence in patient care!" },
            { icon: "/images/gen_heal.svg", text: "Your health journey matters to us🛣️" }
        ],
        [
            { icon: "/images/gen_hel.svg", text: "Seamless care, anytime, anywhere!🌟" },
            { icon: "/images/gen_heal.svg", text: "Accessible healthcare without boundaries🔄" },
            { icon: "/images/nav1.svg", text: "Medical excellence at your convenience📱" },
            { icon: "/images/gen_hel.svg", text: "Healthcare that fits your busy schedule!" },
            { icon: "/images/gen_heal.svg", text: "Reliable medical support when you need it⚡" }
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
            // Mobile animation: Keep the number perfectly centered while scaling down
            tl.to(containerRef.current, {
                scale: 0.5,
                x: "0%", // Ensure it's centered horizontally
                y: "-20vh", // Move up vertically
                transformOrigin: "center center", // This ensures scaling happens from the center
                duration: 1.8,
                ease: "power3.inOut",
            });
        } else {
            // Tablet, Desktop, and larger screens - all use the same animation style now
            tl.to(containerRef.current, {
                scale: screenType === 'tablet' ? 0.3 : screenType === 'desktop' ? 0.3 : screenType === 'large' ? 0.25 : 0.2,
                x: "calc(-50% + 180px)", // Unified positioning for tablet and above
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

    // Animation styles as a string to be injected in the head
    useEffect(() => {
        // Create a style element
        const styleElement = document.createElement('style');
        styleElement.type = 'text/css';

        // Animation CSS as string
        styleElement.innerHTML = `
            /* Fast, smooth infinite scroll for mobile */
            @keyframes mobileInfiniteScroll {
                0% {
                    transform: translateX(0);
                    z-index: 10; /* Start behind the number */
                }
                25% {
                    z-index: 10; /* Still behind */
                }
                45% {
                    z-index: 10; /* About to pass through */
                }
                50% {
                    z-index: 25; /* Passing through the number - higher than number */
                }
                55% {
                    z-index: 25; /* Still passing through */
                }
                75% {
                    z-index: 25; /* In front of the number */
                }
                100% {
                    transform: translateX(-100%);
                    z-index: 10; /* Back behind as it loops */
                }
            }

            .mobile-scrolling-cards {
                animation: mobileInfiniteScroll 40s linear infinite; /* Faster animation for smoother look */
                width: max-content;
            }

            .mobile-card {
                position: relative;
                animation: cardZIndexAnimation 40s linear infinite;
                animation-delay: inherit; /* Inherit delay from parent */
            }

            /* UPDATED ANIMATIONS - Now all rows move in the same direction/sequence */
            @keyframes animate-rowScroll0 {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%); /* Only move half way since we duplicated the content */
                }
            }

            @keyframes animate-rowScroll1 {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }

            @keyframes animate-rowScroll2 {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }

            @keyframes animate-rowScroll3 {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }

            /* Enhanced Z-index animation for cards with improved fade effect at edges */
            @keyframes cardZIndexAnimation {
                0% {
                    z-index: 10; /* Start behind the number */
                    opacity: 0.7; /* Partially visible at start */
                }
                5% {
                    opacity: 1; /* Quickly fade in as it moves right */
                }
                40% {
                    z-index: 10; /* Still behind */
                }
                48% {
                    z-index: 10; /* About to transition */
                }
                50% {
                    z-index: 23; /* Same level as number */
                }
                52% {
                    z-index: 25; /* Above the number */
                }
                80% {
                    z-index: 25; /* Still above */
                    opacity: 1; /* Full opacity */
                }
                95% {
                    opacity: 0.7; /* Fade out as approaching left edge */
                }
                100% {
                    z-index: 10; /* Back behind */
                    opacity: 0.7; /* Partially visible at end/start */
                }
            }

            /* Apply animations to each row with different speeds */
            .animate-rowScroll0 {
                animation: animate-rowScroll0 60s linear infinite;
            }

            .animate-rowScroll1 {
                animation: animate-rowScroll1 75s linear infinite; /* Adjusted for more variety */
            }

            .animate-rowScroll2 {
                animation: animate-rowScroll2 67s linear infinite; /* Adjusted for more variety */
            }

            .animate-rowScroll3 {
                animation: animate-rowScroll3 82s linear infinite; /* Adjusted for more variety */
            }

            /* Apply z-index animation to each card */
            .floating-card {
                position: relative;
                animation: cardZIndexAnimation 60s linear infinite;
            }

            /* Stagger the z-index animations for different rows */
            .card-0-0, .card-0-1, .card-0-2, .card-0-3, .card-0-4, .card-0-5, .card-0-6, .card-0-7, .card-0-8, .card-0-9 {
                animation-delay: 0s;
            }
            .card-1-0, .card-1-1, .card-1-2, .card-1-3, .card-1-4, .card-1-5, .card-1-6, .card-1-7, .card-1-8, .card-1-9 {
                animation-delay: 15s;
            }
            .card-2-0, .card-2-1, .card-2-2, .card-2-3, .card-2-4, .card-2-5, .card-2-6, .card-2-7, .card-2-8, .card-2-9 {
                animation-delay: 30s;
            }
            .card-3-0, .card-3-1, .card-3-2, .card-3-3, .card-3-4, .card-3-5, .card-3-6, .card-3-7, .card-3-8, .card-3-9 {
                animation-delay: 45s;
            }
        `;

        // Add the style element to the document head
        document.head.appendChild(styleElement);

        // Clean up function to remove the style element when component unmounts
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []); // Empty dependency array ensures this runs only once

    const isMobile = screenType === 'mobile';
    const isTablet = screenType === 'tablet';
    const isDesktop = screenType === 'desktop';
    const isLarge = screenType === 'large';
    const isXLarge = screenType === 'xlarge';
    const isLargeOrAbove = isLarge || isXLarge;
    const isDesktopOrAbove = isDesktop || isLarge || isXLarge;

    // Calculate consistent text distance from number across all screen sizes
    // Moved up 2px for mobile as requested
    const getTextDistanceFromNumber = () => {
        if (isMobile) {
            return '220px'; // 240px - 2px (moved up 2px for mobile)
        } else if (isTablet) {
            return '240px'; // Consistent distance for tablet
        } else {
            return '300px'; // Consistent distance for desktop and larger
        }
    };

    // Calculate the vertical margin for cards to prevent overlap
    const getCardsMarginTop = () => {
        if (isMobile) {
            return '40vh'; // Increased margin to prevent overlap
        } else if (isTablet) {
            return '45vh'; // Increased margin for tablet
        } else if (isDesktop) {
            return '68vh'; // Increased margin for desktop
        } else if (isLarge) {
            return '68vh'; // Increased margin for large screens
        } else {
            return '75vh'; // Increased margin for xlarge screens
        }
    };

    return (
        <section
            ref={sectionRef}
            className="bg-white mt-20 min-h-[100vh] pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden relative"
        >
            {/* Initial container position with the number "9" - Middle z-index */}
            <div
                ref={containerRef}
                className={`absolute ${isMobile || isTablet ? 'top-1/5 left-1/2 transform -translate-x-1/2' : 'top-1/5 left-[180px]'} -translate-y-1/4 w-full h-[80vh] flex items-center ${isMobile || isTablet ? 'justify-center' : 'justify-start'}`}
                style={{
                    overflow: 'visible',
                    zIndex: 20, // Middle z-index (cards will go from below to above this)
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
                          left: isMobile ? "0px" : isTablet ? "0px" : "200px", // Center for mobile and tablet, 200px left for desktop+
                      }}
                  >
                    9
                  </span>

                    <div
                        ref={imageRef}
                        className="absolute rounded-full overflow-hidden"
                        style={{
                            width: isMobile ? "150px" : isTablet ? "300px" : isDesktop ? "500px" : isLarge ? "600px" : "610px",
                            height: isMobile ? "150px" : isTablet ? "300px" : isDesktop ? "500px" : isLarge ? "600px" : "610px",
                            top: isMobile
                                ? "-350px"
                                : isTablet
                                    ? "-100px"
                                    : isDesktop
                                        ? "300px"
                                        : isLarge
                                            ? "320px"
                                            : "401px",
                            left: isMobile
                                ? "50%"
                                : isTablet
                                    ? "50%"
                                    : isDesktop
                                        ? "calc(50% + 200px)" // fine-tune this offset
                                        : isLarge
                                            ? "calc(50% + 200px)"
                                            : "calc(50% + 190px)",
                            transform:
                                isMobile || isTablet ? "translateX(-50%)" : "translateX(-50%)", // Center for mobile and tablet
                            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                            zIndex: 25,
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

            {/* Floating Cards - Now positioned relative to use z-index animation */}
            {!isMobile && (
                <div
                    ref={floatingCardsRef}
                    className="absolute left-0 right-0 top-[130px] w-full flex flex-col gap-6 pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 100%)',
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
                                    width: "200%", // Ensure there's enough width for animation
                                }}
                            >
                                {/* Duplicated for seamless loop with different cards */}
                                {[...cardsData[rowIndex], ...cardsData[rowIndex].reverse()].map((card, cardIndex) => (
                                    <div
                                        key={`${rowIndex}-${cardIndex}`}
                                        className={`floating-card card-${rowIndex}-${cardIndex} bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] px-4 py-2 gap-[4px] flex items-center min-w-[318px] h-[40px] opacity-100 transition-opacity duration-300`}
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

            {/* Mobile Floating Cards - With z-index animation - Single row for all mobile views */}
            {isMobile && (
                <div
                    ref={floatingCardsRef}
                    className="absolute left-0 top-1 w-full overflow-hidden pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 100%)',
                    }}
                >
                    {/* Single row with proper infinite scroll */}
                    <div className="w-full mt-[-5px] overflow-hidden h-[50px] flex items-center">
                        <div className="mobile-scrolling-cards flex gap-4">
                            {/* We need to duplicate the cards multiple times to ensure continuous flow */}
                            {[...cardsData[0], ...cardsData[1], ...cardsData[2]].map((card, cardIndex) => (
                                <div
                                    key={`mobile-row1-${cardIndex}`}
                                    className="mobile-card bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] px-4 py-2 gap-[4px] flex items-center min-w-[250px] h-[40px] opacity-100"
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

            {/* Text content positioned - With highest z-index to always appear on top */}
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
                    marginTop: getTextDistanceFromNumber(), // Consistent distance from number across all screen sizes
                    right: isMobile ? 0 : 'auto',
                    left: isMobile ? 0 : isTablet ? '50px' : '230px', // Center for mobile, offset for tablet/desktop
                    textAlign: isMobile ? 'center' : 'left',
                    width: isMobile ? '100%' : 'auto',
                    zIndex: 30, // Higher z-index to ensure text appears above everything
                }}
            >
                Years of <br/> Orthopedic Excellence
            </div>

            {/* Cards Section - with adjusted vertical margins to prevent overlap with text */}
            <div
                className={`grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 md:gap-12 relative z-40 max-w-[1200px] mx-auto`} // Higher z-index to ensure cards appear above everything
                style={{
                    marginTop: getCardsMarginTop() // Dynamic margin based on screen size to prevent overlap
                }}
            >
                {[1, 2].map((_, idx) => (
                    <div
                        key={idx}
                        className="border-[2px] sm:border-[3px] md:border-[5px] border-solid border-light-blue-400 w-full max-w-full h-auto sm:max-w-[600px] sm:h-[605px] flex flex-col items-start p-3 sm:p-4 md:p-6 rounded-xl bg-white shadow-lg"
                    >
                        <img
                            src={`/images/about_sec${idx === 0 ? "" : "2"}.svg`}
                            className="w-full h-[200px] sm:h-[220px] md:w-[551px] md:h-[385px] object-cover mb-3 sm:mb-4 rounded-lg"
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