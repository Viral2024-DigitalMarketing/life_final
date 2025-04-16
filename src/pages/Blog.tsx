"use client";
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Blog = () => {
    return (
        <div className="min-h-screen flex mt-[90px] bg-[#f9f9f9] flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section with background image - moved to right corner and optimized for mobile */}
                <section
                    className="relative bg-[#f7f7f7] ml-[-25px] mt-[-50px] bg-no-repeat bg-cover min-h-[600px] md:min-h-[750px] flex items-center overflow-hidden"
                    style={{
                        backgroundImage: "url('/images/legblog.svg')",
                        backgroundPosition: "122% center", // Push image right
                        backgroundSize: "auto 90%", // Increase height for visual balance
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Text Content */}
                    <div className="container mt-40 ml-[-10px] mx-auto relative z-10 px-6 py-10 sm:py-14 md:py-0">
                        <div className="max-w-xl md:ml-8 lg:ml-16 text-center sm:text-left">
                            <h1 className="font-['Be Vietnam Pro'] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight mb-4 text-gray-900">
                                Bone Health Mistakes You'll Regret
                            </h1>
                            <p className="font-['Be Vietnam Pro'] font-normal text-base sm:text-lg leading-relaxed mb-6 text-gray-700">
                                Ignoring early symptoms results in severe joint deterioration and expensive treatments.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:justify-start gap-4">
                                <span
                                    className="bg-[#015B52] text-white font-['Be Vietnam Pro'] font-medium text-sm sm:text-base rounded-[24px] px-5 sm:px-8 py-2.5 sm:py-3 border border-[#015B52] hover:bg-[#01473c] transition-all duration-300 text-center cursor-pointer"
                                >
                                  Read full article
                                </span>
                                <span
                                    className="border border-[#015B52] text-[#015B52] font-['Be Vietnam Pro'] font-medium text-sm sm:text-base rounded-[24px] px-5 sm:px-8 py-2.5 sm:py-3 hover:bg-[#015B52] hover:text-white transition-all duration-300 text-center cursor-pointer"
                                >
                                  Explore more articles
                                </span>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Your Guide to a Healthier You Section */}
                <section className="py-8 md:py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        {/* Added section heading */}
                        <h2 className="font-['Abhaya Libre SemiBold'] font-semibold text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-12">
                            Your Guide to a Healthier You
                        </h2>
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div
                                className="w-full lg:w-[560px] h-[200px] sm:h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-md">
                                <img
                                    src="/images/blog1.svg"
                                    alt="Future of Joint Replacement"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                                <h2 className="font-['Be Vietnam Pro'] font-medium text-xl sm:text-2xl md:text-3xl leading-tight mb-4">
                                    The Future of Joint Replacement
                                </h2>
                                <p className="font-['Be Vietnam Pro'] font-normal text-sm sm:text-base md:text-xl leading-relaxed mb-6">
                                    Our mission is to provide compassionate, high-quality healthcare services to all,
                                    regardless of location or socioeconomic status.
                                </p>
                                <span
                                    className="bg-[#06009E] text-white font-['Be Vietnam Pro'] font-medium text-sm sm:text-base rounded-full px-4 sm:px-6 py-2 hover:bg-[#04006e] cursor-pointer transition-colors inline-block">
                                    Read full article
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Healthier Blogs Section */}
                <section className="py-8 md:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="font-['Abhaya Libre SemiBold'] font-semibold text-xl sm:text-2xl md:text-3xl leading-tight mb-6 md:mb-8 text-center">
                            Healthier blogs
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                {
                                    title: 'Empowering Rural Communities',
                                    img: '/images/blog2.svg',
                                    desc: 'Our mission is to provide compassionate, high-quality healthcare services to all, regardless of location or socioeconomic status.',
                                },
                                {
                                    title: 'Focusing on Elderly Care',
                                    img: '/images/blog3.svg',
                                    desc: 'Understanding the unique healthcare needs of our senior population and providing tailored support and medical assistance.',
                                },
                                {
                                    title: 'The Importance of Mental Wellness',
                                    img: '/images/blog5.svg',
                                    desc: 'Prioritizing mental health and offering resources and support for emotional and psychological well-being.',
                                },
                                {
                                    title: 'Investing in Child Health',
                                    img: '/images/blog6.svg',
                                    desc: 'Ensuring a healthy future for the next generation through comprehensive pediatric care and health education.',
                                },
                                {
                                    title: 'The Power of Preventive Care',
                                    img: '/images/blog7.svg',
                                    desc: 'Focusing on proactive health measures and screenings to detect and prevent illnesses early on.',
                                },
                                {
                                    title: 'Embracing Technology in Healthcare',
                                    img: '/images/blog8.svg',
                                    desc: 'Leveraging innovative technologies to improve diagnostics, treatments, and overall patient experience.',
                                },
                            ].map((card, idx) => (
                                <div
                                    key={idx}
                                    className="w-full h-auto rounded-lg shadow-md overflow-hidden"
                                >
                                    <div className="w-full h-[180px] sm:h-[200px] rounded-t-lg overflow-hidden">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 md:p-6">
                                        <h3 className="font-['Be Vietnam Pro'] font-medium text-lg md:text-xl leading-tight mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="font-['Be Vietnam Pro'] font-normal text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                                            {card.desc}
                                        </p>
                                        <span className="text-[#06009E] font-['Be Vietnam Pro'] text-sm md:text-base font-medium cursor-pointer hover:underline">
                                            Read more
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;