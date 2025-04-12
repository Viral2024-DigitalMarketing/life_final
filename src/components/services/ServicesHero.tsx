
import React, { useRef, useEffect } from 'react';

interface ServicesHeroProps {
    className?: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ className }) => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroRef.current) {
            heroRef.current.classList.add('animate-fade-in');
        }
    }, []);

    return (
        <section
            ref={heroRef}
            className={`bg-white text-black py-24 px-6 md:px-12 lg:px-24 opacity-0 ${className || ''}`}
        >
            <div className="container mx-auto">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-gray-700 mb-8">
                        Discover our comprehensive range of medical services designed to provide exceptional care for all your health needs.
                    </p>
                    <button className="px-6 py-3 bg-hospital-blue text-white rounded-md font-medium transition-all duration-300 hover:bg-hospital-blue/90 hover:shadow-lg active:scale-95">
                        Schedule Appointment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
