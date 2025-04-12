// HipReplacement.tsx
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/shared/PageHero';
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import FaqSection from "@/components/home/FaqSection.tsx";

const HipReplacement = () => {
    const serviceInfo = {
        title: "Hip Replacement Surgery",
        subtitle: "Joint Replacement",
        description:
            "Hip replacement surgery is a procedure in which a diseased or damaged hip joint is replaced with an artificial joint called a prosthesis. This surgery can relieve pain and improve function in people with severe hip problems.",
        image: "/images/services/hip-replacement-detail.jpg", // Add appropriate image
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
                                Restoring Mobility
                            </div>
                            <h2 className="mt-[50px] text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center pb-8">
                                Advanced Hip Replacement Solutions
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

export default HipReplacement;