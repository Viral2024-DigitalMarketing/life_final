import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/shared/PageHero';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import HistorySection from '@/components/about/HistorySection';
import TeamSection from '@/components/about/TeamSection';
import FacilitiesSection from '@/components/about/FacilitiesSection';
import EmpoweringSection from '@/components/home/EmpoweringSection';
import FounderDescriptionSection from "@/components/about/MissionVisionSection";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <PageHero
                    customContent={<></>} // No text, just image
                    backgroundImage="/images/abt_he.svg"

                    height="h-[100vh]" // Full screen height
                    backgroundPositionY="1%" // Adjust image framing
                />

                <FounderDescriptionSection />
                <HistorySection />
                {/*<TeamSection />*/}
                {/*<FacilitiesSection />*/}
                <EmpoweringSection />
            </main>
            <Footer />
        </div>
    );
};

export default About;
