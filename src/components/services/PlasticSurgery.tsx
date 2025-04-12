// PlasticSurgery.tsx
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/shared/PageHero';
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import FaqSection from "@/components/home/FaqSection.tsx";

const PlasticSurgery = () => {
    const serviceInfo = {
        title: "Plastic Surgery",
        subtitle: "Enhancing Aesthetics and Reconstruction",
        description:
            "Our plastic surgery department offers a variety of cosmetic and reconstructive procedures. Our skilled plastic surgeons are dedicated to helping patients achieve their aesthetic goals and restore form and function.",
        image: "/images/services/plastic-surgery-detail.jpg", // Add appropriate image
        faqs: [],
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <PageHero
                    title={serviceInfo.title}
                    backgroundImage="/images/ser_hero.svg"
                    height="h-96 md:h-[28rem] lg:h-[36rem]"
                    customContent={
                        <div className="absolute inset-0 flex flex-col items-center">
                            <div className="mt-auto text-white text-center text-xl md:text-2xl lg:text-3xl font-semibold">
                                Transforming Lives
                            </div>
                            <h2 className="mt-[50px] text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center pb-8">
                                Comprehensive Plastic Surgery Services
                            </h2>
                        </div>
                    }
                />
                <ServiceDetailTemplate service={serviceInfo} />
                <FaqSection />
            </main>
            <Footer />
        </div>
    );
};

export default PlasticSurgery;