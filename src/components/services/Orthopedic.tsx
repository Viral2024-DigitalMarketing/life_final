// Orthopedic.tsx
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/shared/PageHero';
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import FaqSection from "@/components/home/FaqSection.tsx";

const Orthopedic = () => {
    const serviceInfo = {
        title: "Orthopedic Care",
        subtitle: "Orthopedics & Muscle Care",
        description:
            "Our orthopedic department provides comprehensive care for conditions affecting the musculoskeletal system. We diagnose and treat a wide range of issues, from sports injuries and fractures to chronic conditions like arthritis, offering both surgical and non-surgical approaches to improve mobility and reduce pain.",
        image: "/images/services/orthopedic-detail.jpg",
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
                                Completed
                            </div>
                            <h2 className="mt-[50px] text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center pb-8">
                                Total 100+ {serviceInfo.title} Surgeries
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

export default Orthopedic;