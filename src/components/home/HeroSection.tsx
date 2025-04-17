import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AppointmentModal from '@/components/shared/AppointmentModal';
import PatientCareModal from '@/components/shared/PatientCardModel';
import DirectionsModal from '@/components/shared/DirectionsModal';
import EmergencyCardModal from '@/components/shared/EmergencyCardModal';

const HeroSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleCardClick = (modalType: string, e: React.MouseEvent) => {
        e.preventDefault();
        setActiveModal(modalType);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    // Preload the image
    useEffect(() => {
        const img = new Image();
        img.src = "/images/hero_section.webp";
        img.onload = () => setImageLoaded(true);
    }, []);

    return (
        <>
            <section ref={sectionRef} className="relative w-full h-screen opacity-0">
                {/* Background Image and Gradient */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero_section.webp"
                        alt="Medical professional with patient"
                        className="w-full h-full object-cover sm:object-cover sm:translate-y-0"
                        loading="eager"
                        style={{
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent h-full"></div>
                </div>

                {/* Text Container */}
                <div
                    className="relative z-10 container mx-auto h-full flex flex-col justify-center items-end px-6 md:px-12 md:pr-24 lg:pr-32 text-right"
                    style={{ transform: 'translate(-120px, -80px)' }}
                >
                    <div className="max-w-xl space-y-2 sm:block hidden">
                        {/* Desktop Heading - untouched */}
                        <h1
                            className="font-bold leading-tight"
                            style={{ fontFamily: 'Be Vietnam Pro, sans-serif', color: '#F0AD1C' }}
                        >
                            <div className="flex items-start justify-end">
                                <span
                                    style={{
                                        fontSize: '24px',
                                        fontWeight: 900,
                                        marginRight: '130px',
                                        marginTop: '-20px',
                                    }}
                                >
                                    Completed
                                </span>
                                <span
                                    style={{
                                        fontSize: '131.2px',
                                        fontWeight: 900,
                                        lineHeight: '1',
                                        marginTop: '-62px',
                                        marginRight: '60px',
                                        marginLeft: '-125px',
                                    }}
                                >
                                    100+
                                </span>
                            </div>
                            <span
                                style={{
                                    fontSize: '24px',
                                    fontWeight: 900,
                                    marginTop: '-15px',
                                    marginRight: '-35px',
                                }}
                            >
                                Total Knee /  Hip Replacement Surgeries
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Mobile Heading */}
                <div className="sm:hidden absolute top-[16%] left-6 right-6 text-center z-20">
                    <h1
                        style={{
                            fontFamily: 'Be Vietnam Pro, sans-serif',
                            color: '#F0AD1C',
                            fontWeight: 900,
                            fontSize: '30px',
                            lineHeight: '1.2',
                        }}
                    >
                        Completed <br />
                        <span style={{ fontSize: '64px', fontWeight: 900 }}>100+</span>
                        <br />
                        Total Knee /  Hip Replacement Surgeries
                    </h1>
                </div>

                {/* Cards - Desktop */}
                <div className="hidden sm:block absolute bottom-[-40px] left-0 w-full z-20 px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { text: 'Request Appointment', link: '/appointment', modalType: 'appointment' },
                            { text: '24/7 Patient Care', link: '/patient-care', modalType: 'patientCare' },
                            { text: 'Get Directions', link: '/directions', modalType: 'directions' },
                            { text: 'Emergency Card', link: '/emergency', modalType: 'emergency' },
                        ].map((item, index) => {
                            const isEmergency = item.modalType === 'emergency';

                            return (
                                <Link
                                    key={index}
                                    to={item.link}
                                    onClick={(e) => handleCardClick(item.modalType, e)}
                                    className={`px-6 py-3 rounded-[25px] font-semibold transition duration-300 flex items-center justify-between w-[300px] mx-auto ${
                                        isEmergency
                                            ? 'bg-[#FFECEC] text-[#D61A1A] hover:bg-[#fbd6d6]'
                                            : 'bg-white text-black hover:bg-gray-100'
                                    }`}
                                    style={{
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <span className="flex-1 text-center">{item.text}</span>
                                    <hr className="h-6 border-l-2 border-gray-300 mx-4" />
                                    <div
                                        className="w-10 h-10 flex items-center justify-center rounded-full"
                                        style={{
                                            backgroundColor: isEmergency ? '#D61A1A' : '#0A2540',
                                        }}
                                    >
                                        <svg
                                            width="14"
                                            height="10"
                                            viewBox="0 0 14 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 5H13M13 5L9 1M13 5L9 9"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Cards - Mobile */}
                <div className="sm:hidden absolute bottom-8 left-4 right-4 z-20">
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { text: 'Request', link: '/appointment', modalType: 'appointment' },
                            { text: '24/7 Care', link: '/patient-care', modalType: 'patientCare' },
                            { text: 'Directions', link: '/directions', modalType: 'directions' },
                            { text: 'Emergency', link: '/emergency', modalType: 'emergency' },
                        ].map((item, index) => {
                            const isEmergency = item.modalType === 'emergency';
                            return (
                                <Link
                                    key={index}
                                    to={item.link}
                                    onClick={(e) => handleCardClick(item.modalType, e)}
                                    className={`px-3 py-2 text-sm rounded-xl font-medium transition duration-300 flex items-center justify-between ${
                                        isEmergency
                                            ? 'bg-[#FFECEC] text-[#D61A1A] hover:bg-[#fbd6d6]'
                                            : 'bg-white text-black hover:bg-gray-100'
                                    }`}
                                    style={{
                                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <span className="flex-1 text-center">{item.text}</span>
                                    <hr className="h-4 border-l border-gray-300 mx-2" />
                                    <div
                                        className="w-8 h-8 flex items-center justify-center rounded-full"
                                        style={{
                                            backgroundColor: isEmergency ? '#D61A1A' : '#0A2540',
                                        }}
                                    >
                                        <svg
                                            width="12"
                                            height="8"
                                            viewBox="0 0 14 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 5H13M13 5L9 1M13 5L9 9"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            );
                        })}
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