import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentModal from '@/components/shared/AppointmentModal';
import PatientCareModal from '@/components/shared/PatientCardModel';
import DirectionsModal from '@/components/shared/DirectionsModal';
import EmergencyCardModal from '@/components/shared/EmergencyCardModal';

const HeroSection = () => {
    const sectionRef = useRef(null);
    const [activeModal, setActiveModal] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    // Handle window resize - throttled for performance
    useEffect(() => {
        let timeoutId = null;
        const handleResize = () => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    setWindowWidth(window.innerWidth);
                    timeoutId = null;
                }, 150); // Throttle to 150ms
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    // Animation observer
    useEffect(() => {
        if (!sectionRef.current || windowWidth < 640) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [windowWidth]);

    const handleCardClick = (modalType, e) => {
        e.preventDefault();
        setActiveModal(modalType);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    // Enhanced image loading for faster display
    useEffect(() => {
        // Simplified image loading with fallback
        const timer = setTimeout(() => setImageLoaded(true), 50);

        const preloadImages = () => {
            const desktopImg = new Image();
            const mobileImg = new Image();

            desktopImg.fetchPriority = "high";
            mobileImg.fetchPriority = "high";

            const handleImageLoad = () => {
                clearTimeout(timer);
                setImageLoaded(true);
            };

            desktopImg.onload = handleImageLoad;
            mobileImg.onload = handleImageLoad;

            desktopImg.src = "/images/hero_section.webp?v=1";
            mobileImg.src = "/images/hero_section_mobile.webp?v=1";

            const handleError = () => {
                clearTimeout(timer);
                setImageLoaded(true); // Show fallback if image fails
            };

            desktopImg.onerror = handleError;
            mobileImg.onerror = handleError;
        };

        preloadImages();

        return () => {
            clearTimeout(timer);
        };
    }, []);

    // Card data
    const cardData = [
        { text: 'Request Appointment', link: '/appointment', modalType: 'appointment', emergency: false },
        { text: '24/7 Patient Care', link: '/patient-care', modalType: 'patientCare', emergency: false },
        { text: 'Get Directions', link: '/directions', modalType: 'directions', emergency: false },
        { text: 'Emergency Card', link: '/emergency', modalType: 'emergency', emergency: true },
    ];

    const mobileCardData = [
        { text: 'Request', link: '/appointment', modalType: 'appointment', emergency: false },
        { text: '24/7 Care', link: '/patient-care', modalType: 'patientCare', emergency: false },
        { text: 'Directions', link: '/directions', modalType: 'directions', emergency: false },
        { text: 'Emergency', link: '/emergency', modalType: 'emergency', emergency: true },
    ];

    return (
        <>
            <section
                ref={sectionRef}
                className={`relative w-full h-screen ${windowWidth >= 640 ? 'opacity-0' : ''}`}
                aria-label="Hero section showcasing surgical expertise"
            >
                {/* Background Image with optimized loading */}
                <div className="absolute inset-0 z-0 bg-gray-100">
                    <img
                        src={windowWidth < 640
                            ? "/images/hero_section.webp?v=1"
                            : "/images/hero_section.webp?v=1"}
                        alt="Medical professional"
                        className="w-full h-full object-cover"
                        loading="eager"
                        fetchPriority="high"
                        onLoad={() => setImageLoaded(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent h-full"></div>
                </div>

                {/* Text Container - Tablet & Desktop */}
                <div className="relative z-10 container mx-auto h-full hidden sm:flex flex-col justify-center items-end px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 text-right">
                    <div className="max-w-xl sm:transform sm:-translate-x-6 md:-translate-x-12 lg:-translate-x-20 xl:-translate-x-24 sm:-translate-y-10 md:-translate-y-16 lg:-translate-y-20 xl:-translate-y-24">
                        <h1 className="font-bold leading-tight font-['Be_Vietnam_Pro',_sans-serif] text-yellow-400">
                            <div className="flex items-start justify-end">
                                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black mr-4 sm:mr-6 md:mr-8 lg:mr-10 -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 -ml-7">Completed</span>
                                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8.2rem] font-black leading-none -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16 -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8">100+</span>
                            </div>
                            <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-black block -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-0 mt-4 -mr-1 sm:-mr-2 md:-mr-3 lg:-mr-6">
                                Total Knee / Hip Replacement Surgeries
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Mobile Heading - Moved up by 8px */}
                <div className="sm:hidden absolute top-1/4 -mt-8 inset-x-0 px-4 text-center z-20">
                    <h1 className="text-yellow-400 font-black font-['Be_Vietnam_Pro',_sans-serif] text-2xl xs:text-3xl leading-tight">
                        Completed <br />
                        <span className="text-5xl xs:text-6xl">100+</span>
                        <br />
                        <span className="mt-1 inline-block -ml-0.75">Total Knee / Hip Replacement Surgeries</span>
                    </h1>
                </div>

                {/* Cards - Tablet & Desktop */}
                <div className="hidden sm:block absolute bottom-0 sm:-bottom-10 lg:-bottom-16 xl:-bottom-20 left-0 w-full z-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pb-6 sm:pb-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                        {cardData.map((item, index) => {
                            const isEmergency = item.emergency;
                            return (
                                <Link
                                    key={index}
                                    to={item.link}
                                    onClick={(e) => handleCardClick(item.modalType, e)}
                                    className={`px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl md:rounded-[25px] 
                                        font-semibold transition duration-300 flex items-center justify-between 
                                        w-full sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[300px] mx-auto shadow-md ${
                                        isEmergency
                                            ? 'bg-[#FFECEC] text-[#D61A1A] hover:bg-[#fbd6d6]'
                                            : 'bg-white text-black hover:bg-gray-100'
                                    }`}
                                    aria-label={`${item.text} button`}
                                >
                                    <span className="flex-1 text-center text-sm sm:text-base md:text-lg">{item.text}</span>
                                    <hr className="h-4 sm:h-5 md:h-6 border-l border-l-gray-300 mx-2 sm:mx-3 md:mx-4" />
                                    <div
                                        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center 
                                            rounded-full ${isEmergency ? 'bg-red-600' : 'bg-[#0A2540]'}`}
                                        aria-hidden="true"
                                    >
                                        <svg width="12" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4">
                                            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Cards - Mobile (Extra Small & Small) */}
                <div className="sm:hidden absolute bottom-4 xs:bottom-6 sm:bottom-8 inset-x-0 px-3 xs:px-4 z-20">
                    <div className="grid grid-cols-2 gap-2 xs:gap-3">
                        {mobileCardData.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                onClick={(e) => handleCardClick(item.modalType, e)}
                                className={`px-2 xs:px-3 py-1.5 xs:py-2 text-xs xs:text-sm rounded-lg xs:rounded-xl font-medium 
                                    flex items-center justify-between shadow-sm ${
                                    item.emergency ? 'bg-[#FFECEC] text-[#D61A1A]' : 'bg-white text-black'
                                }`}
                                aria-label={`${item.text} button`}
                            >
                                <span className="flex-1 text-center">{item.text}</span>
                                <hr className="h-3 xs:h-4 border-l border-gray-300 mx-1 xs:mx-2" />
                                <div className={`w-5 h-5 xs:w-7 xs:h-7 flex items-center justify-center 
                                    rounded-full ${item.emergency ? 'bg-red-600' : 'bg-[#0A2540]'}`}
                                     aria-hidden="true"
                                >
                                    <svg width="10" height="6" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                                         className="w-2 h-2 xs:w-2.5 xs:h-2.5">
                                        <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modals */}
            <AppointmentModal isOpen={activeModal === 'appointment'} onClose={closeModal} />
            <PatientCareModal isOpen={activeModal === 'patientCare'} onClose={closeModal} />
            <DirectionsModal isOpen={activeModal === 'directions'} onClose={closeModal} />
            <EmergencyCardModal isOpen={activeModal === 'emergency'} onClose={closeModal} />
        </>
    );
};

export default HeroSection;