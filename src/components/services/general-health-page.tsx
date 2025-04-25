"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppointmentModal from "@/components/shared/AppointmentModal";

const GeneralHealthPage = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const generalMedicineConditions = [
        "Fever", "Heart Disease", "Liver Problems", "Hypertension", "Diabetes",
        "Thyroid Disorders", "Respiratory Infections", "Digestive Issues",
        "Cholesterol Problems", "Migraine", "Allergies", "Arthritis"
    ];

    const surgeryConditions = [
        "Appendicitis", "Gallbladder Issues", "Hernia", "Thyroid Surgery"
    ];

    const dentalSurgeryConditions = [
        "Cavities", "Gum Disease", "Tooth Extraction", "Root Canal", "Braces", "Teeth Whitening"
    ];

    // Preload critical images
    useEffect(() => {
        const imagesToPreload = [
            '/images/gen_heal.svg',
            '/images/heart_v.svg',
            '/images/heart_gre.svg',
            '/images/heart_or.svg'
        ];

        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    const renderTag = (text: string, borderColor: string, textColor: string, iconPath: string) => (
        <div
            key={text}
            className={`px-2 sm:px-3 py-1 border ${borderColor} rounded flex items-center justify-center`}
        >
            <img
                src={iconPath}
                alt="Icon"
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                width="16"
                height="16"
                loading="eager"
                decoding="async"
            />
            <span className={`text-xs sm:text-[14px] font-normal capitalize ${textColor}`}>{text}</span>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16 sm:pt-24 pb-8 sm:pb-16 bg-white">
                <div className="mt-4 sm:mt-6 mb-4">
                    <div className="text-center mb-4 sm:mb-8 px-4">
                        <h1 className="text-3xl sm:text-[40px] md:text-[64px] font-semibold font-['Abhaya Libre SemiBold'] leading-tight sm:leading-none text-[#3B3B56]">
                            General Health
                        </h1>
                    </div>

                    {/* Section Reusable */}
                    {[{
                        title: "General Medicine",
                        description: "Our General Medicine specialists provide comprehensive care for a wide range of medical conditions.",
                        tags: generalMedicineConditions,
                        borderColor: "border-[#3B3B56]",
                        tagBorder: "border-[#347C75]",
                        tagText: "text-[#6D6DB5]",
                        bgColor: "bg-[#E7EEEA]",
                        buttonColor: "bg-[#3B3B56]",
                        buttonText: "Request appointment",
                        imagePosition: "right",
                        imageAlt: "General Medicine",
                        imageSrc: "/images/gen_heal.svg",
                        iconPath: "/images/heart_v.svg"
                    },
                        {
                            title: "General Surgery",
                            description: "Our expert General Surgeons provide a wide range of surgical treatments with a focus on safety and recovery.",
                            tags: surgeryConditions,
                            borderColor: "border-[#129539]",
                            tagBorder: "border-[#347C75]",
                            tagText: "text-[#00A148]",
                            bgColor: "bg-[#E7EEEA]",
                            buttonColor: "bg-[#129539]",
                            buttonText: "Request appointment",
                            imagePosition: "left",
                            imageAlt: "General Surgery",
                            imageSrc: "/images/gen_hel.svg",
                            iconPath: "/images/heart_gre.svg"
                        },
                        {
                            title: "Dental Surgery",
                            description: "Our Dental Surgeons provide everything from checkups to advanced oral surgeries ensuring a healthy smile.",
                            tags: dentalSurgeryConditions,
                            borderColor: "border-[#DA9D19]",
                            tagBorder: "border-[#DA9D19]",
                            tagText: "text-[#DA9D19]",
                            bgColor: "bg-[#E7EEEA]",
                            buttonColor: "bg-[#DA9D19]",
                            buttonText: "Request Appointment",
                            imagePosition: "right",
                            imageAlt: "Dental Surgery",
                            imageSrc: "/images/den.svg",
                            iconPath: "/images/heart_or.svg"
                        }
                    ].map((section, index) => (
                        <div
                            key={index}
                            className={`w-full lg:w-[1280px] mx-auto px-3 sm:px-8 py-4 sm:py-8 mb-6 sm:mb-14 flex flex-col lg:flex-row ${
                                section.imagePosition === "left" ? "lg:flex-row-reverse" : ""
                            } ${section.bgColor} ${section.borderColor} border border-2 rounded-[16px] sm:rounded-[24px]`}
                        >
                            <div className="w-full lg:w-1/2 flex flex-col justify-between mb-4 lg:mb-0 lg:px-6 mt-3 sm:mt-6">
                                <div>
                                    <h2 className="font-['Be Vietnam Pro'] font-medium text-xl sm:text-[28px] md:text-[36px] leading-tight sm:leading-[100%] text-black mb-3 sm:mb-6">
                                        {section.title}
                                    </h2>
                                    <p className="text-sm sm:text-[15px] md:text-[16px] font-medium mb-4 sm:mb-8">
                                        {section.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-10">
                                        {section.tags.map(item =>
                                            renderTag(item, section.tagBorder, section.tagText, section.iconPath)
                                        )}
                                    </div>
                                    <div
                                        onClick={() => setIsPopupOpen(true)}
                                        className={`w-full max-w-[200px] sm:max-w-[248px] h-[38px] sm:h-[44px] ${section.buttonColor} rounded-[8px] sm:rounded-[12px] flex items-center justify-center cursor-pointer text-white text-[16px] sm:text-[18px]`}
                                    >
                                        <span className="mr-2">{section.buttonText}</span>
                                        <svg width="12" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[14px] sm:h-[10px]">
                                            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-[614px] h-[220px] sm:h-[300px] md:h-[400px] lg:h-[510px] rounded-[12px] sm:rounded-[20px] overflow-hidden mt-3 sm:mt-0">
                                <img
                                    src={section.imageSrc}
                                    alt={section.imageAlt}
                                    className="w-full h-full object-cover"
                                    loading={index === 0 ? "eager" : "lazy"}
                                    decoding="async"
                                    width="614"
                                    height="510"
                                    fetchPriority={index === 0 ? "high" : "auto"}
                                    onLoad={(e) => e.currentTarget.style.opacity = "1"}
                                    style={{ opacity: "0", transition: "opacity 0.3s ease" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <AppointmentModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
            </main>
            <Footer />
        </div>
    );
};

export default GeneralHealthPage;