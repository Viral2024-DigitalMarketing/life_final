"use client";

import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesCTA from "@/components/services/ServicesCTA";
import AppointmentModal from "@/components/shared/AppointmentModal";

const JointReplacementPage = () => {
    const contentRefs = useRef<HTMLDivElement[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addToContentRefs = (el: HTMLDivElement | null) => {
        if (el && !contentRefs.current.includes(el)) {
            contentRefs.current.push(el);
        }
    };

    const JointReplacementCard = ({
                                      title,
                                      description,
                                      imageStatic,
                                      imageActive,
                                      replacementCount
                                  }: {
        title: string;
        description: string;
        imageStatic: string;
        imageActive: string;
        replacementCount: number;
    }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                className="w-full md:w-auto p-4 md:p-6 flex justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="bg-[#F9F9F9] rounded-[16px] p-[24px] flex flex-col justify-between relative shadow-lg mx-auto"
                    style={{
                        width: "548px",
                        height: "561px",
                    }}
                >
                    {/* Tag */}
                    <div className="absolute top-3 right-3 bg-[#06009E] text-white text-sm px-3 py-1 rounded-[16px] border border-[#06009E] font-product-sans tracking-wide z-10">
                        {replacementCount} Replaced in last year
                    </div>

                    {/* Image */}
                    <div className="flex justify-center items-center mb-4 mt-8">
                        <img
                            src={isHovered ? imageActive : imageStatic}
                            alt={title}
                            className="transition duration-500 object-contain w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-[24px] md:text-[32px] text-black font-bold font-vietnam-pro text-left tracking-[1%] leading-none mb-2 px-2 md:px-0">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#353535] text-[14px] md:text-[16px] font-normal font-vietnam-pro text-left tracking-[4%] leading-[120%] px-2 mb-[60px] md:mb-[70px]">
                        {description}
                    </p>

                    {/* Button */}
                    <div
                        onClick={() => setIsModalOpen(true)}
                        className="group absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-[#015B52] text-white rounded-full px-5 py-2 md:px-6 md:py-2 cursor-pointer hover:bg-[#01413A] transition font-vietnam-pro text-[14px] md:text-[16px] flex items-center gap-2"
                    >
                        Request appointment
                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:-rotate-[45deg] group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section
                    className="relative w-full h-[90vh] md:h-[100vh] bg-no-repeat bg-[length:220%] md:bg-cover bg-[center_top_40px] md:bg-[center_bottom_-20px] flex flex-col justify-center items-center text-center md:mb-[-10px]"
                    style={{
                        backgroundImage: "url('/images/100_hero.svg')",
                    }}
                >
                    {/* Top Text */}
                    <div className="absolute top-[75px] md:top-[100px] left-1/2 transform -translate-x-1/2 text-white text-xl md:text-3xl font-semibold tracking-wide">
                        Completed
                    </div>

                    {/* Bottom Text */}
                    <div className="absolute bottom-[180px] md:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center px-4">
                        <div className="text-[18px] md:text-4xl font-semibold md:font-bold uppercase tracking-[0.2em] leading-tight font-vietnam-pro">
                            TOTAL HIP REPLACEMENT
                        </div>
                        <div className="text-[15px] md:text-2xl font-semibold mt-1 uppercase tracking-[0.25em] font-vietnam-pro">
                            SURGERIES
                        </div>
                    </div>
                </section>

                {/* Cards Section */}
                <section className="text-center mt-[-140px] md:mt-0 pt-2 md:pt-12 pb-12 bg-[#F9F9F9]">

                    <h2 className="text-[36px] md:text-[52px] text-black font-abhaya-libre font-semibold tracking-[1%] leading-[100%] text-center px-4">
                        Specialized Joint Replacement Care
                    </h2>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[12px] px-4 mt-8">
                        <JointReplacementCard
                            title="Knee Replacement Surgery"
                            description="Expert knee replacements at Life Hospital: Advanced techniques, excellent outcomes."
                            imageStatic="/images/knee.svg"
                            imageActive="/images/knee_pain.svg"
                            replacementCount={254}
                        />
                        <JointReplacementCard
                            title="Hip Replacement Surgery"
                            description="Expert hip replacements at Life Hospital: Advanced techniques, excellent outcomes."
                            imageStatic="/images/hip.svg"
                            imageActive="/images/hip_pain.svg"
                            replacementCount={189}
                        />
                        <JointReplacementCard
                            title="Shoulder Replacement Surgery"
                            description="Expert shoulder replacements at Life Hospital: Advanced techniques, excellent outcomes."
                            imageStatic="/images/shol.svg"
                            imageActive="/images/shoul_pain.svg"
                            replacementCount={142}
                        />
                        <JointReplacementCard
                            title="Elbow Replacement Surgery"
                            description="Expert elbow replacements at Life Hospital: Advanced techniques, excellent outcomes."
                            imageStatic="/images/elb.svg"
                            imageActive="/images/elbow_pain.svg"
                            replacementCount={98}
                        />
                    </div>
                </section>

                {/* CTA */}
                <section className="mt-12">
                <ServicesCTA addToContentRefs={addToContentRefs} />
                </section>
            </main>

            <Footer />

            {/* Appointment Modal */}
            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default JointReplacementPage;
