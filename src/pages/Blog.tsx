"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Blog = () => {
    return (
        <div className="min-h-screen flex mt-[95px] flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section with increased height */}
                <section className="bg-white py-24 md:py-32 lg:py-40">
                    <div className="container mx-auto flex flex-col-reverse md:flex-row mt-[-100px] items-center justify-between px-4 gap-8">
                        <div className="w-full md:w-1/2">
                            <h1 className="font-['Abhaya Libre SemiBold'] font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight mb-4">
                                <br />
                                Bone Health Mistakes You’ll Regret
                            </h1>
                            <p className="font-['Be Vietnam Pro'] font-normal text-base leading-tight mb-6">
                                Ignoring early symptoms results in severe joint deterioration and expensive treatments.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#015B52] text-white font-['Product Sans Medium'] font-medium text-base rounded-[24.04px] px-8 py-3 border border-[#015B52]">
                                    Read full article
                                </button>
                                <button className="border border-[#015B52] text-[#015B52] font-['Product Sans Medium'] font-medium text-base rounded-[24.04px] px-8 py-3">
                                    Explore more articles
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src="/images/legblog.svg"
                                alt="Bone Health"
                                className="rounded-lg shadow-md w-full h-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* Your Guide to a Healthier You Section */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-[560px] h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-md">
                            <img
                                src="/images/blog1.svg"
                                alt="Future of Joint Replacement"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="font-['Be Vietnam Pro'] font-medium text-2xl md:text-3xl leading-tight mb-4">
                                The Future of Joint Replacement
                            </h2>
                            <p className="font-['Be Vietnam Pro'] font-normal text-base md:text-xl leading-relaxed mb-6">
                                Our mission is to provide compassionate, high-quality healthcare services to all, regardless of location or socioeconomic status.
                            </p>
                            <button className="bg-[#06009E] text-white font-['Be Vietnam Pro'] font-medium text-base rounded-full px-6 py-2">
                                Read full article
                            </button>
                        </div>
                    </div>
                </section>

                {/* Healthier Blogs Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="font-['Abhaya Libre SemiBold'] font-semibold text-2xl md:text-3xl leading-tight mb-8">
                            Healthier blogs
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                            {/* Blog Cards */}
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
                                    className="w-full max-w-[382px] h-auto rounded-lg shadow-md overflow-hidden mx-auto"
                                >
                                    <div className="w-full h-[200px] sm:h-[219px] rounded-t-lg overflow-hidden">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-['Be Vietnam Pro'] font-medium text-xl leading-tight mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="font-['Be Vietnam Pro'] font-normal text-base leading-relaxed text-gray-700 mb-4">
                                            {card.desc}
                                        </p>
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
