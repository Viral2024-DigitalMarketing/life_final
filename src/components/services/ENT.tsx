// ENT.tsx
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/shared/PageHero';
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import FaqSection from "@/components/home/FaqSection.tsx";

const ENT = () => {
    const serviceInfo = {
        title: "ENT Services",
        subtitle: "Ear, Nose, and Throat Care",
        description:
            "Our ENT (Ear, Nose, and Throat) department specializes in the diagnosis and treatment of conditions affecting the ears, nose, throat, and related structures of the head and neck. We provide comprehensive care for patients of all ages, from simple ear infections to complex head and neck surgeries.",
        image: "/images/services/ent-detail.jpg",
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

export default ENT;