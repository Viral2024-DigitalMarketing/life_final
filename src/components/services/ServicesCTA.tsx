import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ServicesCTAProps {
    className?: string;
    addToContentRefs: (el: HTMLDivElement) => void;
}

const ServicesCTA: React.FC<ServicesCTAProps> = ({ className = '', addToContentRefs }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/contact');
    };

    return (
        <section
            ref={addToContentRefs}
            className={`py-10 md:py-20 px-4 md:px-12 lg:px-24 bg-gradient-to-r from-[#C3DEFE] to-[#B1E3C8] ${className}`}
        >
            <div className="container mx-auto flex flex-col items-center text-center">
                {/* Centered Tagline */}
                <p className="font-['Be Vietnam Pro'] font-medium text-base md:text-[20px] leading-tight md:leading-[100%] tracking-[1%] text-gray-700 mb-2 md:mb-4">
                    Patient Support Programs.
                </p>
                <h2 className="font-abhaya-libre font-semibold text-3xl md:text-[40px] lg:text-[52px] leading-tight md:leading-[100%] tracking-[1%] text-[#000000] mb-6 md:mb-12">
                    Orthopedic Wellness
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full">
                    {/* Left Card - Arogyasri Scheme */}
                    <div className="w-full md:w-[580px] bg-[#306EB6] rounded-[12px] p-4 md:p-[24px] flex flex-col justify-between items-start text-left space-y-3 md:space-y-4 md:h-[292px]">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <h3 className="font-['Be Vietnam Pro'] font-normal text-2xl md:text-[28px] lg:text-[40px] leading-tight md:leading-[100%] tracking-[1%] text-white">
                                Arogyasri Scheme
                            </h3>
                            <img
                                src="/images/logos.svg"
                                alt="Arogyasri Logo"
                                className="w-[100px] h-[40px] md:w-[120px] md:h-[50px] lg:w-[140px] lg:h-[60px] ml-0 md:ml-4"
                            />
                        </div>
                        <p className="font-['Be Vietnam Pro'] font-normal text-sm md:text-[16px] leading-snug md:leading-[150%] tracking-[6%] text-white w-full md:w-[532px]">
                            Life Hospital makes orthopedic care accessible through the Arogyasri scheme. Eligible
                            patients can receive free treatment for a range of orthopedic conditions.
                        </p>
                        <button
                            onClick={handleNavigate}
                            className="w-full md:w-[273px] h-10 md:h-[45px] bg-white text-[#306EB6] rounded-[32px] font-medium px-4 py-2 text-sm md:text-base self-center md:self-end"
                        >
                            Contact Us for Eligibility
                        </button>
                    </div>

                    {/* Right Card - Ayushman Bheema */}
                    <div className="w-full md:w-[580px] bg-[#00A148] rounded-[12px] p-4 md:p-[24px] flex flex-col justify-between items-start text-left space-y-3 md:space-y-4 md:h-[292px]">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                            <h3 className="font-['Be Vietnam Pro'] font-medium text-2xl md:text-[28px] lg:text-[40px] leading-tight md:leading-[100%] tracking-[1%] text-white">
                                Ayushman Bheema
                            </h3>
                            <img
                                src="/images/logo4.svg"
                                alt="Small Icon"
                                className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] ml-0 md:ml-4"
                            />
                        </div>
                        <p className="font-['Be Vietnam Pro'] font-normal text-sm md:text-[16px] leading-snug md:leading-[150%] tracking-[6%] text-white w-full md:w-[532px]">
                            Life Hospital supports eligible patients through the Ayushman Bheema program, ensuring
                            accessible orthopedic care for all.
                        </p>
                        <button
                            onClick={handleNavigate}
                            className="w-full md:w-[273px] h-10 md:h-[45px] bg-white text-[#00A148] rounded-[32px] font-medium px-4 py-2 text-sm md:text-base self-center md:self-end"
                        >
                            Contact Us for Eligibility
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesCTA;