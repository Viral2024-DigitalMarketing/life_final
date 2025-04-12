"use client";

import React, { useState } from "react";
import AppointmentModal from "@/components/shared/AppointmentModal";

const EmpoweringSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative bg-[#F4F9F2] w-full py-[80px] px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-[52px] font-extrabold leading-[100%] text-black font-['Abhaya_Libre'] mb-6">
                        Empowering <br />
                        <span className="text-[#06009E] font-semibold">Health</span> for All
                    </h2>
                    <p className="text-[16px] text-gray-600 mb-8 max-w-md font-['Be_Vietnam_Pro']">
                        Dedicated to providing accessible, high-quality healthcare for
                        everyone, emphasizing patient-centered care and a commitment to
                        continuous improvement.
                    </p>
                    <button
                        className="w-[460px] h-[57px] rounded-[32px] border border-[#06009E] text-[#06009E] font-['Ranade'] font-[500] text-[24px] leading-[100%] tracking-[0%] px-[20px] py-[12px] hover:bg-[#06009E] hover:text-white transition"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Request your appointment today.
                    </button>
                </div>

                {/* Right Content */}
                <div className="flex flex-col items-center">
                    {/* Headings */}
                    <div className="flex flex-row justify-center mt-[20px] items-center gap-8">
                        <h2
                            className="text-[32px] font-['Ranade'] font-700 leading-[100%] tracking-[1%] text-[#F0AD1C]"
                        >
                            Relief
                        </h2>
                        <h2
                            className="text-[32px] font-['Ranade'] font-700 leading-[100%] tracking-[1%] text-[#4848A3]"
                        >
                            Rebuild
                        </h2>
                        <h2
                            className="text-[32px] font-['Ranade'] font-700 leading-[100%] tracking-[1%] text-[#01D0BF]"
                        >
                            Recover
                        </h2>
                    </div>

                    {/* Logo Image */}
                    <div className="mt-8">
                        <img
                            src="/images/emp_logo.svg" // Replace with your actual logo image path
                            alt="Logo"
                            className="w-43 h-43 object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Appointment Modal */}
            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default EmpoweringSection;