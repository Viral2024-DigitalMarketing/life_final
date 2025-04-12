"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppointmentModal from "@/components/shared/AppointmentModal";

const SpecializedServicesPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const specializedServices = [
        {
            title: "Plastic Surgery",
            description:
                "Our Plastic Surgery specialists provide a wide range of reconstructive and cosmetic procedures with a focus on enhancing your natural beauty and boosting your confidence. We prioritize your safety and comfort throughout your journey.",
            tags: [
                "Reconstructing breasts after cancer treatment",
                "Repairing cleft lip and palate",
                "Repairing burns",
                "Fixing deformities caused by trauma or disease",
                "Tissue expansion to rebuild tissue",
            ],
            tagIcon: "/images/heart_g.svg",
            borderColor: "border-[#129539]",
            tagBorder: "border-[#347C75]",
            tagText: "text-[#129539]",
            bgColor: "bg-[#E7EEEA]",
            buttonColor: "bg-[#129539]",
            buttonText: "Request appointment",
            imagePosition: "right",
            imageSrc: "/images/plastic.svg",
            imageAlt: "Plastic Surgery",
        },
        {
            title: "ENT",
            description:
                "Advanced treatments for Ear, Nose, and Throat conditions. Our ENT specialists provide personalized treatment plans for better hearing and respiratory health.",
            tags: ["Ear", "Nose", "Throat", "Head and Neck"],
            tagIcon: "/images/black_heart.svg",
            borderColor: "border-black",
            tagBorder: "border-[#347C75]",
            tagText: "text-[#000000]",
            bgColor: "bg-[#E7EEEA]",
            buttonColor: "bg-black",
            buttonText: "Request appointment",
            imagePosition: "left",
            imageSrc: "/images/ent.svg",
            imageAlt: "ENT Surgery",
        },
    ];

    const renderTag = (
        text: string,
        borderColor: string,
        textColor: string,
        icon: string
    ) => (
        <div
            key={text}
            className={`px-3 py-1 border ${borderColor} rounded flex items-center justify-center`}
        >
            <img src={icon} alt="Tag Icon" className="w-4 h-4 mr-1" />
            <span className={`text-[14px] font-normal capitalize ${textColor}`}>
                {text}
            </span>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-28 pb-16 bg-white">
                <div className="mt-4 mb-6">
                    <div className="text-center mb-8 px-4">
                        <h1 className="text-[36px] sm:text-[40px] md:text-[64px] font-semibold font-['Abhaya Libre SemiBold'] leading-none text-[#3B3B56]">
                            Specialized Services
                        </h1>

                    </div>

                    {specializedServices.map((section, index) => (
                        <div
                            key={index}
                            className={`w-full lg:w-[1280px] mx-auto px-4 sm:px-6 py-8 sm:py-12 mb-10 sm:mb-14 flex flex-col lg:flex-row ${section.imagePosition === "left" ? "lg:flex-row-reverse" : ""
                            } ${section.bgColor} ${section.borderColor} border-2 rounded-[20px] sm:rounded-[24px] min-h-[auto] lg:min-h-[600px]`}
                        >
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-between mb-6 lg:mb-0 lg:px-6 px-2 sm:px-4">
                                <div className="mt-2 sm:mt-6">
                                    <h2
                                        className="mb-4 sm:mb-5 text-[20px] sm:text-[28px] font-medium"
                                        style={{
                                            fontFamily: "Be Vietnam Pro",
                                            lineHeight: "110%",
                                            color: "#000000",
                                        }}
                                    >
                                        {section.title}
                                    </h2>

                                    <p className="text-[15px] sm:text-[16px] font-medium leading-[1.6] mb-6">
                                        {section.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 mt-4">
                                        {section.tags.map((item) =>
                                            renderTag(item, section.tagBorder, section.tagText, section.tagIcon)
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <div
                                        onClick={() => setIsPopupOpen(true)}
                                        className={`w-full sm:max-w-[248px] h-[44px] ${section.buttonColor} rounded-[12px] flex items-center justify-center cursor-pointer text-white text-[16px] sm:text-[18px]`}
                                    >
                                        <span className="mr-2">{section.buttonText}</span>
                                        <svg
                                            width="14"
                                            height="10"
                                            viewBox="0 0 14 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="ml-2"
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
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full lg:w-1/2 h-auto flex justify-center items-center px-2 sm:px-6 mt-6 sm:mt-0">
                                <div className="w-full h-full max-w-[100%] sm:max-w-[614px] max-h-[auto] sm:max-h-[510px] rounded-[16px] sm:rounded-[20px] overflow-hidden">
                                    <img
                                        src={section.imageSrc}
                                        alt={section.imageAlt}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Popup Modal */}
                    <AppointmentModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SpecializedServicesPage;
