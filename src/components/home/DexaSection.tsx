'use client'
import React from 'react'
import Dexa3DModel from "@/components/Dexa3DModel.tsx";

const DexaSection = () => {
    return (
        <section className="bg-[#207882] relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Heading Positioned at Top */}
            <h2 className="absolute top-12 w-full text-center font-[Merriweather] font-normal text-[40px] leading-[100%] tracking-[0.02em] text-[#DAFFF4] z-10">
                1st DEXA scanning in North Telangana.
            </h2>

            {/* Dexa 3D Model Fullscreen Centered */}
            <div className="w-full h-full flex justify-center items-center max-w-6xl z-0">
                <Dexa3DModel />
            </div>
        </section>
    )
}

export default DexaSection;
