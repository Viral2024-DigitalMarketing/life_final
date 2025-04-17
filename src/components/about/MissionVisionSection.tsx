'use client';

import React from 'react';

const FounderDescriptionSection = () => {
    return (
        <section
            className="w-full min-h-[958px] bg-white px-6 pt-[120px] pb-16 relative lg:px-[101.33px] lg:pt-[180px] lg:pb-20 xl:px-[120px] 2xl:px-[150px]">

            {/* Pin Icon on top of the purple card */}
            <img
                src="/images/pin_ab.png"
                alt="Pin Icon"
                className="absolute top-[80px] left-[50px] w-[60px] h-[70px] object-contain z-20 sm:w-[50px] sm:h-[60px] sm:top-[-15px] sm:left-[-15px] md:w-[80px] md:h-[90px] md:top-[50px] md:left-[-25px] lg:w-[108px] lg:h-[122px] lg:top-[90px] lg:left-[40px] xl:w-[108px] xl:h-[122px] xl:top-[100px] xl:left-[210px] 2xl:w-[120px] 2xl:h-[135px] 2xl:top-[-40px] 2xl:left-[-40px]"
            />

            {/* Main Card (Purple) */}
            <div
                className="relative w-full bg-[#6D6DB5] border-2 border-[#565656] rounded-2xl px-6 py-6 shadow-[0_10px_25px_rgba(0,0,0,0.2)] sm:px-4 sm:py-4 md:w-[700px] md:h-[320px] md:mx-auto lg:w-[900px] lg:h-[340px] lg:px-10 lg:py-8 xl:w-[1100px] xl:h-[360px] 2xl:w-[1300px] 2xl:h-[380px] 2xl:px-12 2xl:py-10">

                {/* Desktop Headings on the Left */}
                <div className="hidden lg:block absolute top-[20px] left-[40px] md:left-[50px] lg:left-[60px] xl:left-[80px] 2xl:left-[100px]">
                    <h2 className="text-[50px] font-extrabold text-white leading-tight md:text-[55px] lg:text-[60px] xl:text-[65px] 2xl:text-[70px]">
                        We Perform Surgeries
                    </h2>
                    <h2 className="text-[45px] font-extrabold text-white leading-tight md:text-[50px] lg:text-[55px] xl:text-[60px] 2xl:text-[65px]">
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
                    className="w-[250px] h-[250px] object-contain mx-auto mt-4 sm:w-[200px] sm:h-[200px] sm:mt-6 md:w-[280px] md:h-[280px] md:absolute md:top-[-20px] md:right-[20px] lg:w-[340px] lg:h-[340px] lg:top-[-30px] lg:right-[20px] xl:w-[380px] xl:h-[380px] xl:top-[-15px] xl:right-[30px] 2xl:w-[420px] 2xl:h-[420px] 2xl:top-[-10px] 2xl:right-[40px]"
                />

                {/* Doctor Name & Title */}
                <div
                    className="text-white font-['Be_Vietnam_Pro'] text-center mt-4 lg:absolute lg:top-[180px] lg:left-[440px] xl:left-[540px] xl:top-[200px] 2xl:left-[640px] 2xl:top-[220px] lg:text-left">
                    <p className="text-[18px] font-semibold leading-[28px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px]">
                        Dr. Mujeeb
                    </p>
                    <p className="text-[14px] font-medium leading-[24px] sm:text-[12px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                        Founder of Life Hospital
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full flex justify-center mt-[60px] sm:mt-[40px] lg:mt-[120px] xl:mt-[140px] 2xl:mt-[160px]">
                <div
                    className="w-full max-w-[823px] border-[2px] border-dashed border-[#565656] rounded-xl px-4 py-4 space-y-6 sm:px-4 sm:py-4 sm:border-[2px] sm:border-dashed sm:border-[#565656] sm:rounded-xl sm:space-y-6 md:w-[700px] lg:px-6 lg:py-[24px] lg:w-[823px] lg:border-[3px] lg:border-dashed lg:border-[#565656] lg:rounded-xl xl:w-[900px] 2xl:w-[1000px]">
                    {[
                        "We have complete care and physiotherapy programs after the surgery.",
                        "Personalized recovery care designed for your health journey.",
                        "Expert physiotherapy support from day one of recovery.",
                        "We guide you every step after surgery for complete healing.",
                    ].map((text, i) => (
                        <div key={i}
                             className="w-full flex items-start px-4 py-2 gap-2 sm:px-4 sm:py-2 sm:gap-2 md:w-[650px] lg:w-[712px] lg:px-4 lg:py-2 lg:gap-4 xl:w-[800px] 2xl:w-[900px] mx-auto">
                            <img
                                src="/images/logo_butt.svg"
                                alt="Icon"
                                className="w-[18px] h-[18px] object-contain mt-1 sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] xl:w-[26px] xl:h-[26px]"
                            />
                            <p className="text-black text-[16px] font-normal leading-[24px] font-['Be_Vietnam_Pro'] tracking-tight sm:text-[14px] sm:leading-[20px] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[30px] xl:text-[22px] xl:leading-[32px]">
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