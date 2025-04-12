'use client';

import React from 'react';

const FounderDescriptionSection = () => {
    return (
        <section
            className="w-full min-h-[958px] bg-white px-6 pt-[120px] pb-16 relative lg:px-[101.33px] lg:pt-[180px] lg:pb-20">

            {/* Pin Icon on top of the card */}
            <img
                src="/images/pin_ab.png"
                alt="Pin Icon"
                className="absolute top-[60px] left-[120px] w-[60px] h-[70px] object-contain sm:w-[50px] sm:h-[60px] lg:top-[90px] lg:right-[40px] lg:w-[108px] lg:h-[122px] md:top-[60px] md:right-[20px] md:w-[80px] md:h-[90px] z-10"
            />

            {/* Main Card */}
            <div
                className="relative w-full bg-[#6D6DB5] border-2 border-[#565656] rounded-2xl px-6 py-6 shadow-[0_10px_25px_rgba(0,0,0,0.2)] sm:px-4 sm:py-4 lg:w-[1169.33px] lg:h-[300px] lg:px-10 lg:py-6 z-0">

                {/* Desktop Headings on the Left */}
                <div className="hidden lg:block absolute top-[20px] left-[100px]">
                    <h2 className="text-[65px] font-extrabold text-white leading-tight">
                        We Perform Surgeries
                    </h2>
                    <h2 className="text-[60px] font-extrabold text-white leading-tight">
                        <span className="text-[#B3D6FF]">ONLY</span> If Needed
                    </h2>
                </div>

                {/* Mobile Headings (Centered) */}
                <div className="pl-4 pt-4 sm:pl-4 sm:pt-4 lg:hidden">
                    <h2 className="text-[30px] font-extrabold text-white sm:text-[24px] sm:font-extrabold sm:text-center">
                        We Perform Surgeries
                    </h2>
                    <h2 className="text-[25px] font-extrabold text-white sm:text-[20px] sm:font-extrabold sm:text-center">
                        <span className="text-[#B3D6FF]">ONLY</span> If Needed
                    </h2>
                </div>

                {/* Doctor Image */}
                <img
                    src="/images/foun.svg"
                    alt="Dr. Mujeeb"
                    className="w-[250px] h-[250px] object-contain mx-auto mt-4 sm:w-[200px] sm:h-[200px] lg:absolute lg:top-[-50px] lg:left-[956.25px] lg:w-[382px] lg:h-[380px]"
                />

                {/* Doctor Name & Title */}
                <div
                    className="text-white font-['Be_Vietnam_Pro'] text-center mt-4 lg:absolute lg:top-[180px] lg:left-[680px] lg:text-left">
                    <p className="text-[18px] font-semibold leading-[28px] sm:text-[16px] lg:text-[24px]">
                        Dr. Mujeeb
                    </p>
                    <p className="text-[14px] font-medium leading-[24px] sm:text-[12px] lg:text-[18px]">
                        Founder of Life Hospital
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full flex justify-center mt-[60px] sm:mt-[40px] lg:mt-[120px]">
                <div
                    className="w-full max-w-[823px] border-[2px] border-dashed border-[#565656] rounded-xl px-4 py-4 space-y-6 sm:px-4 sm:py-4 sm:border-[2px] sm:border-dashed sm:border-[#565656] sm:rounded-xl sm:space-y-6 lg:px-6 lg:py-[24px] lg:w-[823px] lg:border-[3px] lg:border-dashed lg:border-[#565656] lg:rounded-xl">
                    {[
                        "We have complete care and physiotherapy programs after the surgery.",
                        "Personalized recovery care designed for your health journey.",
                        "Expert physiotherapy support from day one of recovery.",
                        "We guide you every step after surgery for complete healing.",
                    ].map((text, i) => (
                        <div key={i}
                             className="w-full flex items-start px-4 py-2 gap-2 sm:px-4 sm:py-2 sm:gap-2 lg:w-[712px] lg:px-4 lg:py-2 lg:gap-4 mx-auto">
                            <img
                                src="/images/logo_butt.svg"
                                alt="Icon"
                                className="w-[18px] h-[18px] object-contain mt-1 sm:w-[16px] sm:h-[16px] lg:w-[24px] lg:h-[24px]"
                            />
                            <p className="text-black text-[16px] font-normal leading-[24px] font-['Be_Vietnam_Pro'] tracking-tight sm:text-[14px] sm:leading-[20px] lg:text-[20px] lg:leading-[30px]">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FounderDescriptionSection;
