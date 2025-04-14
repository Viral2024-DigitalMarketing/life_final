'use client'
import React from 'react'
import Dexa3DModel from "@/components/Dexa3DModel.tsx";

const DexaSection = () => {
    return (
        <section className="bg-[#207882] py-24 px-6 md:px-12 lg:px-24 flex justify-center items-center">
            <div className="w-full max-w-3xl">
                <Dexa3DModel />
            </div>
        </section>
    )
}

export default DexaSection
