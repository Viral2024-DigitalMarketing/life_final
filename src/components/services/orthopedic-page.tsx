"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const OrthopedicPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-28 pb-16 bg-white">
                <div className="mt-10 mb-5 px-4 lg:px-0">
                    {/* Page Heading */}
                    <div className="text-center mb-10 mt-[-25px]">
                        <h1 className="text-[40px] sm:text-[48px] md:text-[64px] font-semibold font-['Abhaya Libre SemiBold'] leading-none">
                            Orthopedics & Muscle Care
                        </h1>
                    </div>

                    {/* CARD 1: Orthopedic care */}
                    <div className="w-full lg:w-[1280px] mx-auto p-6 lg:p-9 flex flex-col lg:flex-row justify-between bg-[#E7EEEA] border-[1px] border-[#2B63A4] rounded-[24px] mb-10">
                        {/* Left Side Content */}
                        <div className="flex flex-col justify-between w-full lg:w-1/2 lg:pr-6">
                            <div>
                                <h2 className="mb-4 text-[28px] lg:text-[36px] font-[500] font-['Be Vietnam Pro'] leading-none text-black">
                                    Orthopedic care
                                </h2>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    <div className="bg-[#306EB6] text-white px-4 py-1 rounded w-fit h-[33px] flex items-center justify-center text-[18px] font-medium">
                                        Arogyasri
                                    </div>
                                    <div className="bg-[#129539] text-white px-4 py-1 rounded w-fit h-[33px] flex items-center justify-center text-[18px] font-medium">
                                        Ayushman Bheema
                                    </div>
                                </div>

                                <p className="text-[16px] font-normal font-['Be Vietnam Pro'] leading-[135%] mt-5 mb-5">
                                    Experience compassionate and expert care for your musculoskeletal health.
                                    <br /><br />
                                    Our orthopedic specialists provide personalized treatment plans to get you moving and feeling your best again.
                                </p>

                                {/* Icons */}
                                <div className="flex flex-wrap gap-2 mt-8 mb-5">
                                    {["Bones", "Joints", "Ligaments", "Tendons", "Muscles", "Nerves"].map((label, index) => (
                                        <div
                                            key={index}
                                            className="w-fit px-3 py-1 border border-[#129539] rounded flex items-center justify-center"
                                        >
                                            <img src="/images/heart_g.svg" alt="Icon" className="w-4 h-4 mr-1"/>
                                            <span className="text-[14px] font-normal capitalize">{label}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[18px] font-normal font-['Be Vietnam Pro'] mt-10 lg:mt-20 mb-5">
                                    100+ Orthopedic cases treated.
                                </p>

                                {/* Button - green */}
                                <div className="w-full lg:w-[248px] h-[44px] bg-[#129539] rounded-[12px] flex items-center justify-center cursor-pointer text-white text-[18px]">
                                    <span className="mr-2">Request appointment</span>
                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="mt-10 lg:mt-0 w-full lg:w-[614px] h-auto max-h-[510px] rounded-[20px] overflow-hidden">
                            <img
                                src="/images/ortho1.svg"
                                alt="Orthopedic"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* CARD 2: Arthroscopic care */}
                    <div className="w-full lg:w-[1280px] mx-auto p-6 lg:p-9 flex flex-col lg:flex-row justify-between bg-[#E7EEEA] border-[1px] border-[#2B63A4] rounded-[24px]">
                        {/* Left Image */}
                        <div className="w-full lg:w-[614px] h-auto max-h-[510px] rounded-[20px] overflow-hidden">
                            <img
                                src="/images/orth1.svg"
                                alt="Arthroscopic"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Content */}
                        <div className="flex flex-col justify-between w-full lg:w-1/2 lg:pl-6 mt-10 lg:mt-0">
                            <div>
                                <h2 className="mb-4 text-[28px] lg:text-[36px] font-[500] font-['Be Vietnam Pro'] leading-none text-black">
                                    Arthroscopic care
                                </h2>

                                <p className="text-[16px] font-normal font-['Be Vietnam Pro'] leading-[135%] mt-5 mb-5">
                                    Experience minimally invasive treatment with our expert arthroscopic specialists.
                                    <br /><br />
                                    Our team utilizes advanced techniques to diagnose and treat joint conditions with
                                    minimal invasiveness, leading to faster recovery and reduced discomfort.
                                </p>

                                {/* Icons */}
                                <div className="flex flex-wrap gap-2 mt-8 mb-5">
                                    {["Knee", "Shoulder", "Elbow", "Ankle", "Hip", "Wrist"].map((label, index) => (
                                        <div
                                            key={index}
                                            className="w-fit px-3 py-1 border border-[#2B63A4] rounded flex items-center justify-center"
                                        >
                                            <img src="/images/heart_bl.svg" alt="Icon" className="w-4 h-4 mr-1" />
                                            <span className="text-[14px] font-normal capitalize">{label}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-[18px] font-normal font-['Be Vietnam Pro'] mt-10 lg:mt-24 mb-5">
                                    Less pain, fast <strong>Recovery</strong>
                                </p>

                                {/* Button - blue */}
                                <div className="w-full lg:w-[248px] h-[44px] bg-[#2B63A4] rounded-[12px] flex items-center justify-center cursor-pointer text-white text-[18px]">
                                    <span className="mr-2">Request appointment</span>
                                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OrthopedicPage;