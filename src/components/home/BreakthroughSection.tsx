'use client';
import React, { useEffect, useRef, useState } from 'react';

const BreakthroughSection = () => {
    const sectionRef = useRef(null);
    const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);

    // Track whether component is mounted to prevent state updates after unmount
    const isMounted = useRef(true);

    useEffect(() => {
        // Animation observer setup
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        elementsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        // Preload background image immediately
        const bgImg = new Image();
        bgImg.src = '/images/breat_bg.svg';
        bgImg.onload = () => {
            if (isMounted.current) {
                setBackgroundLoaded(true);
            }
        };

        return () => {
            isMounted.current = false;
            elementsRef.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !elementsRef.current.includes(el)) {
            elementsRef.current.push(el);
        }
    };

    const breakthroughImages = [
        '/images/mul1.svg',
        '/images/mul2.svg',
        '/images/mul3.svg',
        '/images/mul4.svg',
        '/images/mul5.svg',
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-24 px-6 md:px-12 lg:px-24"
            style={{
                backgroundImage: backgroundLoaded ? "url('/images/breat_bg.svg')" : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#f5f5f5', // Fallback color
                transition: 'background-image 0.3s ease'
            }}
        >
            <div className="container mx-auto">
                {/* Heading */}
                <div ref={addToRefs} className="mb-16 opacity-0">
                    <h2
                        className="font-bold text-black mb-4 pl-4 text-left text-2xl md:text-[32px]"
                        style={{
                            fontFamily: 'Be Vietnam Pro',
                            lineHeight: '100%',
                            letterSpacing: '1%',
                        }}
                    >
                        50+ Breakthrough Cases
                    </h2>
                    <p
                        className="text-gray-800 text-left ml-4 text-3xl sm:text-[26px] md:text-[42px] font-semibold"
                        style={{
                            fontFamily: 'Abhaya Libre SemiBold',
                            lineHeight: '100%',
                            letterSpacing: '1%',
                        }}
                    >
                        Life Hospital&apos;s Legacy of Excellence
                    </p>
                    <p
                        className="text-gray-700 text-left mt-4 ml-4 text-base md:text-[18px]"
                        style={{
                            lineHeight: '150%',
                        }}
                    >
                        With over 50 successful treatments of complex cases in Kamareddy and recognition for exemplary
                        service under Ayushman Bharat, Life Hospital has earned the trust of the community. Their
                        commitment to quality care and patient well-being shines through in every interaction.
                    </p>
                </div>

                {/* Desktop Images */}
                <div className="hidden md:flex mb-12">
                    {breakthroughImages.map((image, index) => (
                        <div key={index} className="w-[260px] h-[390px] relative">
                            <img
                                src={image}
                                alt={`Breakthrough Case ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading={index < 2 ? "eager" : "lazy"}
                                fetchPriority={index < 2 ? "high" : "auto"}
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>

                {/* Mobile Scrollable Images */}
                <div className="flex md:hidden overflow-x-auto mb-12 scrollbar-hide">
                    {breakthroughImages.map((image, index) => (
                        <div key={index} className="min-w-[240px] h-[340px] relative flex-shrink-0">
                            <img
                                src={image}
                                alt={`Breakthrough Case ${index + 1}`}
                                className="w-full h-full object-cover"
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "auto"}
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BreakthroughSection;