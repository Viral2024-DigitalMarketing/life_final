// GeneralMedicine.tsx
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/shared/PageHero';
import ServiceDetailTemplate from "@/components/services/ServiceDetailTemplate";
import FaqSection from "@/components/home/FaqSection.tsx";

const GeneralMedicine = () => {
    const serviceInfo = {
        title: "General Medicine",
        subtitle: "Comprehensive Health Care",
        description:
            "Our general medicine department provides primary care services for a wide range of acute and chronic illnesses. Our experienced physicians focus on diagnosis, treatment, and preventive care for patients of all ages.",
        image: "/images/services/general-medicine-detail.jpg", // Add appropriate image
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
                                Your Health First
                            </div>
                            <h2 className="mt-[50px] text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center pb-8">
                                Expert General Medical Care
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

export default GeneralMedicine;