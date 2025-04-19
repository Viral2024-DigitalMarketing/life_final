import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar.tsx';
import Footer from '@/components/layout/Footer.tsx';
import PageHero from '@/components/shared/PageHero.tsx';
import MissionVisionSection from '@/components/about/MissionVisionSection.tsx';
import HistorySection from '@/components/about/HistorySection.tsx';
import TeamSection from '@/components/about/TeamSection.tsx';
import FacilitiesSection from '@/components/about/FacilitiesSection.tsx';
import EmpoweringSection from '@/components/home/EmpoweringSection.tsx';
import FounderDescriptionSection from "@/components/about/MissionVisionSection.tsx";

const About = () => {
    // Create a ref for the hero image to manually handle lazy loading
    const heroImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Create an IntersectionObserver for the hero image
        if (heroImageRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // When the container enters viewport, set the background image
                            if (heroImageRef.current) {
                                heroImageRef.current.src = "/images/abt_he.webp";
                                observer.unobserve(entry.target);
                            }
                        }
                    });
                },
                { threshold: 0.1 }
            );

            observer.observe(heroImageRef.current);

            return () => {
                if (heroImageRef.current) {
                    observer.unobserve(heroImageRef.current);
                }
            };
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-10 sm:pt-0"> {/* Added top padding to entire main content on mobile */}
                {/* Option 1: If PageHero supports passing a loading attribute */}
                <PageHero
                    customContent={<></>} // No text, just image
                    backgroundImage="/images/abt_he.webp"
                    height="h-[50vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh]" // Shorter on mobile
                    backgroundPositionY="top" // Use standard positioning
                    backgroundSize="cover" // Full cover on all screens
                    backgroundPosition="center" // Center on all screens
                    className="pt-16 md:pt-20 max-w-[90%] mx-auto sm:max-w-full mt-8 sm:mt-0" // Increased margin-top on mobile
                    style={{
                        marginTop: 'var(--mobile-offset, 30px)'
                    }}
                    // Add lazy loading attribute if PageHero component supports it
                    lazyLoad={true}
                />

                {/* Option 2: Hidden image with lazy loading that preloads the hero background */}
                <img
                    ref={heroImageRef}
                    className="hidden"
                    alt="Hero background preload"
                    loading="lazy"
                    src="" // Empty src initially, will be set by the IntersectionObserver
                />

                <FounderDescriptionSection />
                <HistorySection />
                {/* <TeamSection /> */}
                {/* <FacilitiesSection /> */}
                <EmpoweringSection />
            </main>
            <Footer />
        </div>
    );
};

// Add this CSS variable to your global styles or component
// :root {
//   --mobile-offset: 30px;
// }
// @media (min-width: 640px) {
//   :root {
//     --mobile-offset: 0px;
//   }
// }

export default About;