'use client'
import React, { useEffect, useRef, useState } from 'react'
import AppointmentModal from '@/components/shared/AppointmentModal'

const DexaSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const elements = useRef<HTMLDivElement[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in')
                    } else {
                        entry.target.classList.remove('animate-fade-in')
                    }
                })
            },
            { threshold: 0.1 }
        )

        elements.current.forEach((el) => {
            if (el) observer.observe(el)
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !elements.current.includes(el)) {
            elements.current.push(el)
        }
    }

    return (
        <section ref={sectionRef} className="bg-[#207882] text-white py-24 px-6 md:px-12 lg:px-24">
            <div className="container mx-auto">
                <div className="text-left mb-12 flex flex-wrap items-center">
                    <h2 className="font-merriweather font-normal text-3xl md:text-4xl leading-none tracking-wider text-[#DAFFF4] mr-0 md:mr-8 mb-4 md:mb-0">
                        1st DEXA scanning in North Telangana
                    </h2>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="transition-colors duration-300 mt-4 md:mt-0 border border-[#FFDF26] text-[#FFDF26] hover:bg-[#FFDF26] hover:text-black"
                        style={{
                            width: '100%',
                            maxWidth: '355px',
                            height: '53px',
                            padding: '12px 20px',
                            borderRadius: '32px',
                            fontFamily: 'Product Sans Medium',
                            fontWeight: 500,
                            fontSize: '20px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Schedule your scan this week
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Video Frame & Text */}
                    <div ref={addToRefs} className="relative opacity-0">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl overflow-hidden w-full md:w-3/4">
                            <iframe
                                className="w-full h-48 rounded-xl"
                                src="https://www.youtube.com/embed/example_video_id"
                                title="DEXA Scan Video"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <h2 className="mt-6 text-2xl font-bold">Test Your Bone Health</h2>
                        <p className="font-product-sans text-base leading-relaxed tracking-wide text-white/80 mt-4">
                            A DEXA scan measures bone density using low-dose X-rays. It detects osteoporosis,
                            predicts fracture risk, and tracks bone health.
                        </p>
                        <p className="font-product-sans text-base leading-relaxed tracking-wide text-white/80 mt-4">
                            This quick, painless test provides accurate bone strength insights, guiding personalized care for healthier bones.
                        </p>
                    </div>

                    {/* Right Section - Image with overlay cards */}
                    <div ref={addToRefs} className="opacity-0 relative w-full flex justify-center mt-8 md:mt-0">
                        <div className="relative w-full max-w-[626px] h-auto">
                            <img
                                src="/images/dexa_oppo.svg"
                                alt="DEXA scanning equipment"
                                className="w-full h-auto rounded-3xl object-cover"
                            />

                            {/* Info Card 1 - Desktop */}
                            <div
                                className="absolute hidden md:block"
                                style={{
                                    width: '320px',
                                    height: '70px',
                                    top: '-20px',
                                    right: '-70px',
                                    padding: '14px 18px',
                                    borderRadius: '12px',
                                    background: '#CBF9FF',
                                    fontFamily: 'Product Sans',
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '145%',
                                    letterSpacing: '0.02em',
                                    color: '#000',
                                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                                }}
                            >
                                DEXA scans use very low doses of radiation, significantly less than a standard chest X-ray.
                            </div>

                            {/* Info Card 2 - Desktop */}
                            <div
                                className="absolute hidden md:block"
                                style={{
                                    width: '370px',
                                    height: '80px',
                                    bottom: '0px',
                                    left: '-15px',
                                    padding: '18px 22px',
                                    borderRadius: '14px',
                                    background: '#CBF9FF',
                                    fontFamily: 'Product Sans',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    lineHeight: '150%',
                                    letterSpacing: '0.02em',
                                    color: '#000',
                                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                                }}
                            >
                                The procedure is quick and painless, typically taking less than 15 minutes.
                            </div>

                            {/* Info Card 1 - Mobile */}
                            <div
                                className="absolute block md:hidden"
                                style={{
                                    width: '220px',
                                    height: '52px',
                                    top: '-52px',
                                    right: '-30px',
                                    padding: '5px 12px',
                                    borderRadius: '10px',
                                    background: '#CBF9FF',
                                    fontFamily: 'Product Sans',
                                    fontWeight: 500,
                                    fontSize: '10.5px',
                                    lineHeight: '145%',
                                    letterSpacing: '0.02em',
                                    color: '#000',
                                    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
                                }}
                            >
                                DEXA scans use very low doses of radiation, significantly less than a standard chest X-ray.
                            </div>

                            {/* Info Card 2 - Mobile */}
                            <div
                                className="absolute block md:hidden"
                                style={{
                                    width: '240px',
                                    height: '56px',
                                    bottom: '20px',
                                    left: '10px',
                                    padding: '10px 12px',
                                    borderRadius: '10px',
                                    background: '#CBF9FF',
                                    fontFamily: 'Product Sans',
                                    fontWeight: 500,
                                    fontSize: '12px',
                                    lineHeight: '145%',
                                    letterSpacing: '0.02em',
                                    color: '#000',
                                    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
                                }}
                            >
                                The procedure is quick and painless, typically taking less than 15 minutes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}

export default DexaSection
