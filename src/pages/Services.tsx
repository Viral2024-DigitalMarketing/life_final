import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesGrid from "@/components/services/ServiceCard.tsx";
import ServicesCTA from "@/components/services/ServicesCTA.tsx";
import FaqSection from "@/components/home/FaqSection.tsx";
import AppointmentModal from "@/components/shared/AppointmentModal";

const Services = () => {
    const contentRefs = useRef<HTMLDivElement[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
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

        contentRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            contentRefs.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const addToContentRefs = (el: HTMLDivElement | null) => {
        if (el && !contentRefs.current.includes(el)) {
            contentRefs.current.push(el);
        }
    };

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Hero Background Image */}
            <div className="absolute inset-0 h-[120vh] z-0">
                <img
                    src="/images/ser_hero.svg"
                    alt="Healthcare Services"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <Navbar />

            <main className="flex-grow pt-24 relative z-10">
                {isMobile ? (
                    // ✅ MOBILE LAYOUT
                    <section className="relative w-full min-h-[100vh] flex flex-col justify-between text-white px-4 pt-6 pb-10">
                        <div className="absolute inset-0 z-[-1]">
                            <img
                                src="/images/ser_hero.svg"
                                alt="Healthcare Services"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60" />
                        </div>

                        <div className="flex flex-col items-center mt-0 text-center">
                            <img
                                src="/images/logos.svg"
                                alt="Hero Logo"
                                className="w-24 h-auto mb-4"
                            />
                            <h1 className="text-[32px] font-semibold mt-[-5px] leading-tight tracking-tight text-yellow-500 font-[Abhaya Libre SemiBold] mb-1">
                                Uchita Vaidhyam
                            </h1>
                            <h2 className="text-[22px] font-semibold mt-[-10px] leading-tight tracking-tight text-yellow-500 font-[Abhaya Libre SemiBold] mb-2">
                                Anthu Leni Vishvasam
                            </h2>
                        </div>

                        <div className="w-full flex flex-col items-center justify-center px-4">
                            <p className="text-sm font-normal text-white mb-4 font-[Be Vietnam Pro] text-center">
                                9 Years of Excellence, 80% Growth:<br />
                                <span className="block">Your Trust is Our Foundation</span>
                            </p>
                            <button
                                onClick={handleOpenModal}
                                className="w-full max-w-xs px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-[#F0AD1C] text-black rounded-[30px] font-[Be Vietnam Pro] font-medium hover:bg-[#d98d14] active:scale-95"
                            >
                                Request Appointment This Week
                            </button>
                        </div>
                    </section>
                ) : (
                    // ✅ DESKTOP LAYOUT
                    <section
                        id="services-hero"
                        className="relative h-screen flex items-center justify-between text-white px-6 md:px-12 lg:px-24"
                    >
                        {/* Left Logo */}
                        <div className="flex flex-col items-start mt-[-500px]">
                            <img
                                src="/images/logos.svg"
                                alt="Hero Logo"
                                className="w-[180px] h-[50px] object-contain"
                            />
                        </div>

                        {/* Right Text */}
                        <div className="max-w-2xl text-left relative -mt-20 pr-6 mr-[-30px]">
                            <h1 className="font-[Abhaya Libre SemiBold] font-semibold text-[58px] leading-[100%] tracking-[-2%] text-yellow-500">
                                Uchita Vaidhyam
                            </h1>
                            <h2 className="font-[Abhaya Libre SemiBold] font-semibold text-[43px] mt-[-2px] leading-[100%] tracking-[-2%] text-yellow-500 ml-1.5">
                                Anthu Leni Vishvasam
                            </h2>
                            <p className="font-[Be Vietnam Pro] mt-3 font-normal text-[16px] leading-[140%] tracking-[-2%] text-white mb-6 ml-2.5">
                                9 Years of Excellence, 80% Growth:<br />
                                <span className="block">Your Trust is Our Foundation</span>
                            </p>
                            <button
                                onClick={handleOpenModal}
                                className="px-6 py-3 bg-[#F0AD1C] text-black rounded-[30px] font-[Be Vietnam Pro] font-medium text-[16px] leading-[100%] tracking-[0%] transition-all duration-300 hover:bg-[#d98d14] active:scale-95 ml-2"
                            >
                                Request Appointment This Week
                            </button>
                        </div>
                    </section>
                )}

                {/* Services Section */}
                <section id="services-grid">
                    <ServicesGrid addToContentRefs={addToContentRefs} />
                </section>

                <section id="services-cta">
                    <ServicesCTA addToContentRefs={addToContentRefs} />
                </section>

                <FaqSection />
            </main>

            <Footer />
            <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Services;
