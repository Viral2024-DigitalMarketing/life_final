import React, { useState } from 'react';
import FaqSection from '@/components/home/FaqSection.tsx'; // Or .js if you rename

interface ServiceDetailTemplateProps {
    service: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
        faqs: {
            question: string;
            answer: string;
        }[];
    };
}

const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({ service }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <main className="flex-grow">
            {/* Title Section */}
            <section className="text-center py-12">
                <h2 className="text-3xl font-semibold text-gray-800">
                    {service.title}
                </h2>
                {service.subtitle && (
                    <p className="mt-2 text-lg text-gray-600">{service.subtitle}</p>
                )}
            </section>

            {/* Info Card */}
            <section
                className="w-full max-w-6xl mx-auto flex bg-white rounded-lg overflow-hidden relative"
                style={{
                    height: '500px',
                    boxShadow:
                        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), -4px 0 6px -1px rgba(0, 0, 0, 0.1), 4px 0 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Image */}
                <div className="w-1/2 relative overflow-hidden">
                    <img
                        src={hovered ? '/images/ser.svg' : service.image}
                        alt={service.title}
                        className="w-[400px] h-[400px] object-contain absolute top-[50px] right-[-140px] transition-opacity duration-500"
                    />
                    {hovered && (
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-20 h-20 border-4 border-red-600 animate-ping rounded-full"></div>
                        </div>
                    )}
                </div>

                {/* Text */}
                <div className="w-1/2 p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold text-gray-800">
                        {service.title} {/* Use the title from the prop again */}
                    </h3>
                    <p className="text-lg text-gray-600 mt-6">
                        {service.description}
                    </p>
                    {/* You might want to display benefits or other data here */}
                </div>
            </section>

            {/* FAQs */}

        </main>
    );
};

export default ServiceDetailTemplate;