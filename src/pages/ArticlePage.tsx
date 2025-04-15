"use client";
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ArticlePage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow py-20 px-4 max-w-3xl mx-auto">
                {/* Featured Badge */}
                <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs">OS</span>
                    </div>
                    <p className="font-['Be Vietnam Pro'] font-bold text-lg">Featured</p>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl font-semibold font-['Abhaya Libre SemiBold'] mb-8 leading-[100%]">
                    The Future of Joint Replacement
                </h1>

                {/* Hero Image */}
                <div className="mb-6">
                    <img
                        src="/images/legblog.svg"
                        alt="Orthopedic Surgery"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>

                {/* Text Below Image */}
                <p className="font-['Be Vietnam Pro'] text-base text-center text-[#3C3C43D9] mb-12 leading-[100%]">
                    Orthopedic surgery is a medical specialty that focuses on the musculoskeletal system, which includes the bones, joints, ligaments, tendons, muscles, and nerves. Orthopedic surgeons treat a wide range of conditions, from sports injuries to degenerative diseases. One of the most common orthopedic procedures is joint replacement surgery, which involves replacing a damaged joint with an artificial one.
                </p>

                {/* Content Section */}
                <div className="bg-white shadow-lg rounded-[24.36px] overflow-hidden flex flex-col md:flex-row mb-12">
                    {/* Left Image */}
                    <div className="md:w-1/2">
                        <img
                            src="/images/legblog.svg"
                            alt="Orthopedic Treatment"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Text */}
                    <div className="md:w-1/2 p-8">
                        <p className="font-['Be Vietnam Pro'] font-normal text-base leading-[120%] text-[#3C3C43D9]">
                            Orthopedic surgery is a medical specialty that focuses on the musculoskeletal system, which includes the bones, joints, ligaments, tendons, muscles, and nerves.
                            <br /><br />
                            Orthopedic surgeons treat a wide range of conditions, from sports injuries to degenerative diseases.
                            <br /><br />
                            One of the most common orthopedic procedures is joint replacement surgery, which involves replacing a damaged joint with an artificial one.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ArticlePage;