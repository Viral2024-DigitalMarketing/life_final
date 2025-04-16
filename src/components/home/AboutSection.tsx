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
        // Check screen type based on width - added tablet breakpoint
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScreenType('mobile');
            } else if (width >= 640 && width < 1024) { // 640-1024px range for tablets
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
            // Tablet-specific animation
            tl.to(containerRef.current, {
                scale: 0.25, // Smaller scale for tablets
                x: "-22vw", // Less offset than desktop
                y: "-30vh",
                transformOrigin: "center center",
                duration: 1.8,
                ease: "power3.inOut",
            });
        } else {
            // Different desktop animations based on screen width
            let xPosition, scale, yPosition;

            switch(screenType) {
                case 'desktop':
                    xPosition = "-35vw";
                    scale = 0.2;
                    yPosition = "-35vh";
                    break;
                case 'large':
                    xPosition = "-28vw";
                    scale = 0.15;
                    yPosition = "-30vh";
                    break;
                case 'xlarge':
                    xPosition = "-25vw";
                    scale = 0.12;
                    yPosition = "-28vh";
                    break;
                default:
                    xPosition = "-35vw";
                    scale = 0.2;
                    yPosition = "-35vh";
            }

            tl.to(containerRef.current, {
                scale: scale,
                x: xPosition,
                y: yPosition,
                transformOrigin: "left center",
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
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [screenType]); // Updated dependency to screenType

    const isMobile = screenType === 'mobile';
    const isTablet = screenType === 'tablet';

    // Determine section height based on screen type
    const getSectionHeight = () => {
        switch(screenType) {
            case 'mobile': return 'min-h-[100vh]';
            case 'tablet': return 'min-h-[110vh]'; // Increased height for tablets
            case 'desktop': return 'min-h-[100vh]';
            case 'large': return 'min-h-[120vh]';
            case 'xlarge': return 'min-h-[130vh]';
            default: return 'min-h-[100vh]';
        }
    };

    // Determine number size based on screen type for better scaling
    const getNumberSize = () => {
        switch(screenType) {
            case 'mobile': return '450px';
            case 'tablet': return '600px'; // Better size for tablets
            case 'desktop': return '900px';
            case 'large': return '1800px';
            case 'xlarge': return '2000px';
            default: return '900px';
        }
    };

    // Calculate card section margin based on screen type
    const getCardSectionMargin = () => {
        switch(screenType) {
            case 'mobile': return 'mt-[34vh]';
            case 'tablet': return 'mt-[30vh]'; // Reduced for tablets
            case 'desktop': return 'mt-96';
            case 'large': return 'mt-[35rem]';
            case 'xlarge': return 'mt-[40rem]';
            default: return 'mt-96';
        }
    };

    // Calculate text container position and sizing
    const getTextContainerStyles = () => {
        let styles = {
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 700,
            lineHeight: '120%',
            letterSpacing: '3%',
            color: '#424294',
        };

        if (isMobile) {
            return {
                ...styles,
                fontSize: '23px',
                marginTop: '200px',
                marginRight: '67px',
            };
        } else if (isTablet) {
            return {
                ...styles,
                fontSize: '32px',
                marginTop: '90px',
                marginLeft: '280px',
            };
        } else {
            return {
                ...styles,
                fontSize: screenType === 'large' ? '42px' : screenType === 'xlarge' ? '48px' : '36px',
                marginTop: screenType === 'large' ? '20px' : screenType === 'xlarge' ? '30px' : '0',
                marginLeft: screenType === 'desktop' ? '360px' : screenType === 'large' ? '500px' : '600px',
            };
        }
    };

    return (
        <section
            ref={sectionRef}
            className={`bg-white mt-20 ${getSectionHeight()} pt-32 pb-16 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden relative`}
        >
            {/* Mobile/Tablet Floating Cards - Improved infinite scroll */}
            {(isMobile || isTablet) && (
                <div
                    ref={floatingCardsRef}
                    className="absolute left-0 top-0 w-full overflow-hidden pointer-events-none"
                >
                    {/* Single row with proper infinite scroll */}
                    <div className={`w-full ${isTablet ? 'mt-[15px]' : 'mt-[-5px]'} overflow-hidden h-[50px] flex items-center`}>
                        <div className="mobile-scrolling-cards flex gap-4">
                            {/* We need to duplicate the cards multiple times to ensure continuous flow */}
                            {[...cardsData[0], ...cardsData[0], ...cardsData[0]].map((card, cardIndex) => (
                                <div
                                    key={`mobile-row1-${cardIndex}`}
                                    className={`bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] px-4 py-2 gap-[4px] flex items-center ${isTablet ? 'min-w-[280px]' : 'min-w-[250px]'} h-[40px] opacity-100`}
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

                    {/* Add a second row of cards for tablet view */}
                    {isTablet && (
                        <div className="w-full mt-[10px] overflow-hidden h-[50px] flex items-center">
                            <div className="tablet-scrolling-cards-reverse flex gap-4">
                                {/* Second row moves in opposite direction */}
                                {[...cardsData[1], ...cardsData[1], ...cardsData[1]].map((card, cardIndex) => (
                                    <div
                                        key={`tablet-row2-${cardIndex}`}
                                        className="bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] px-4 py-2 gap-[4px] flex items-center min-w-[280px] h-[40px] opacity-100"
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
                    )}
                </div>
            )}

            {/* Initial container position - Special handling for tablet view */}
            <div
                ref={containerRef}
                className={`absolute ${
                    isTablet ? 'top-[15vh] left-1/2' :
                        screenType === 'large' || screenType === 'xlarge' ? 'top-1/4 left-1/2' : 'top-1/5 left-1/2'
                } transform -translate-x-1/2 -translate-y-1/4 w-full h-[80vh] flex items-center justify-center`}
            >
                <div
                    ref={numberRef}
                    className="relative flex items-center justify-center"
                >
                    <span
                        className="text-[450px] md:text-[900px] mt-30 items-center justify-center font-extrabold leading-none"
                        style={{
                            color: "#424294",
                            fontFamily: "Plus Jakarta Sans",
                            position: "relative",
                            fontSize: getNumberSize(),
                            marginTop: isMobile ? "-450px" :
                                isTablet ? "-180px" :
                                    screenType === 'large' || screenType === 'xlarge' ? "-200px" : "0px",
                        }}
                    >
                        9
                    </span>

                    <div
                        ref={imageRef}
                        className="absolute rounded-full overflow-hidden"
                        style={{
                            width: isMobile ? "150px" :
                                isTablet ? "300px" :
                                    screenType === 'large' ? "600px" : screenType === 'xlarge' ? "650px" : "650px",
                            height: isMobile ? "150px" :
                                isTablet ? "300px" :
                                    screenType === 'large' ? "600px" : screenType === 'xlarge' ? "650px" : "650px",
                            top: isMobile ? "-350px" :
                                isTablet ? "150px" :
                                    screenType === 'large' ? "450px" : screenType === 'xlarge' ? "500px" : "530px",
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

            {/* Text content positioned - Special handling for tablet view */}
            <div
                ref={textContainerRef}
                className={`absolute ${
                    isMobile
                        ? 'top-[10vh] text-center'
                        : isTablet
                            ? 'top-[28vh] left-0'
                            : 'top-1/4 left-0'
                }`}
                style={getTextContainerStyles()}
            >
                Years of <br/> Orthopedic Excellence
            </div>

            {/* Floating Cards - Desktop view */}
            {!isMobile && !isTablet && (
                <div
                    ref={floatingCardsRef}
                    className={`absolute -right-[80px] ${
                        screenType === 'large' || screenType === 'xlarge' ? 'top-[100px]' : 'top-[50px]'
                    } w-[50vw] flex flex-col gap-6 pointer-events-none fade-mask`}
                >
                    {[0, 1, 2, 3].map((rowIndex) => (
                        <div
                            key={rowIndex}
                            className="relative w-full overflow-hidden h-[50px] flex items-center card-row"
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
                                        className="bg-white border-dashed border-[1px] border-[#353535] rounded-[16px] px-4 py-2 gap-[4px] flex items-center min-w-[318px] h-[40px] opacity-100 transition-opacity duration-300 floating-card"
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

            {/* Cards Section - Special handling for tablet */}
            <div
                className={`grid grid-cols-1 gap-6 ${isTablet ? 'sm:grid-cols-1 md:grid-cols-2' : 'sm:grid-cols-2'} sm:gap-10 md:gap-12 ${getCardSectionMargin()} relative z-10 max-w-[1200px] mx-auto`}
            >
                {[1, 2].map((_, idx) => (
                    <div
                        key={idx}
                        className={`border-[2px] sm:border-[3px] md:border-[5px] border-solid border-light-blue-400 w-full max-w-full h-auto 
                            ${isTablet ? 'sm:max-w-[500px] sm:h-[550px]' :
                            screenType === 'large' || screenType === 'xlarge' ? 'sm:max-w-[650px] sm:h-[650px]' : 'sm:max-w-[600px] sm:h-[605px]'} 
                            flex flex-col items-start p-3 sm:p-4 md:p-6 rounded-xl bg-white shadow-lg ${isTablet ? 'mx-auto' : ''}`}
                    >
                        <img
                            src={`/images/about_sec${idx === 0 ? "" : "2"}.svg`}
                            className={`w-full 
                                ${isTablet ? 'h-[250px] sm:h-[350px] sm:w-full' :
                                screenType === 'large' || screenType === 'xlarge' ? 'h-[200px] sm:h-[420px] sm:w-[600px]' : 'h-[200px] sm:h-[385px] sm:w-[551px]'}
                                object-cover mb-3 sm:mb-4 rounded-lg`}
                            alt={idx === 0 ? "Best Healthcare" : "Trusted Specialists"}
                        />
                        <p className="text-xs sm:text-sm text-gray-600">#1 in Kamareddy</p>
                        <h3 className={`text-base sm:text-lg 
                            ${isTablet ? 'md:text-xl' :
                            screenType === 'large' || screenType === 'xlarge' ? 'md:text-3xl' : 'md:text-2xl'} 
                            font-bold text-black mt-1`}>
                            {idx === 0 ? "Best Healthcare" : "Trusted Specialists"}
                        </h3>
                        <p className={`text-sm text-gray-500 mt-1 
                            ${isTablet ? 'sm:text-base' :
                            screenType === 'large' || screenType === 'xlarge' ? 'sm:text-lg' : 'sm:text-base'}`}>
                            {idx === 0
                                ? "Delivering exceptional medical services with care."
                                : "Our team of experts is here for your health needs."}
                        </p>
                        <div className="flex justify-end w-full items-center mt-4 sm:mr-2">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className={`group w-full sm:w-[240px] h-[36px] 
                                    ${isTablet ? 'sm:h-[45px]' :
                                    screenType === 'large' || screenType === 'xlarge' ? 'sm:h-[50px] sm:w-[280px]' : 'sm:h-[42px]'} 
                                    bg-[#333374] text-[#CACAE8] flex items-center justify-between px-4 sm:px-5 md:px-6 rounded-full hover:bg-[#2a2a5e] transition-colors`}
                            >
                                <span className={`text-xs sm:text-sm 
                                    ${isTablet ? 'md:text-base' :
                                    screenType === 'large' || screenType === 'xlarge' ? 'md:text-lg' : 'md:text-base'}`}>
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
                /* Improved infinite scroll for mobile/tablet */
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

                /* Reverse direction for second tablet row */
                @keyframes tabletReverseScroll {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .tablet-scrolling-cards-reverse {
                    animation: tabletReverseScroll 60s linear infinite;
                    width: max-content;
                }

                /* Optimized animations for each row */
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

                /* Fade mask for better card appearance */
                .fade-mask::before,
                .fade-mask::after {
                    content: '';
                    position: absolute;
                    z-index: 2;
                    width: 30px;
                    height: 100%;
                    pointer-events: none;
                }

                .fade-mask::before {
                    left: 0;
                    background: linear-gradient(to right, white, transparent);
                }

                .fade-mask::after {
                    right: 0;
                    background: linear-gradient(to left, white, transparent);
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