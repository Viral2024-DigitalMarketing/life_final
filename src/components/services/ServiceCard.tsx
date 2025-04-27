import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Service {
    id: number;
    image: string;
    title: string;
    tagline: string;
    path: string;
    cardBackground?: string;
}

const servicesData: Service[] = [
    {
        id: 1,
        image: '/images/ser1.svg',
        title: 'Orthopedic care',
        tagline: 'Bone, Joint, Muscle Health and Repair.',
        path: '/joint-replacement',
        cardBackground: '#EDEDF6',
    },
    {
        id: 2,
        image: '/images/ser2.svg',
        title: 'Arthroscopy',
        tagline: 'Minimally Invasive Joint Diagnosis and Treatment.',
        path: '/orthopedic',
        cardBackground: '#EDEDF6',
    },
    {
        id: 3,
        image: '/images/ser3.svg',
        title: 'General Surgery',
        tagline: 'Broad Surgical Procedures for Abdominal and Related Areas.',
        path: '/general-health',
        cardBackground: '#EDEDF6',
    },
    {
        id: 4,
        image: '/images/ser4.svg',
        title: 'Plastic Surgery',
        tagline: 'Reconstructive and Cosmetic Surgical Enhancements.',
        path: '/specialized-services#plastic',
        cardBackground: '#EDEDF6',
    },
    {
        id: 5,
        image: '/images/ser5.svg',
        title: 'Dental Surgery',
        tagline: 'Oral Surgery, Implants and Extractions.',
        path: '/general-health',
        cardBackground: '#EDEDF6',
    },
    {
        id: 6,
        image: '/images/ser6.svg',
        title: 'ENT',
        tagline: 'Ear, Nose, Throat and Head Care.',
        path: '/specialized-services#ent',
        cardBackground: '#EDEDF6',
    },
];

interface ServicesGridProps {
    className?: string;
    addToContentRefs: (el: HTMLDivElement) => void;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({
                                                       className = '',
                                                       addToContentRefs,
                                                   }) => {
    const navigate = useNavigate();

    const handleCardClick = (title: string) => {
        const matchedService = servicesData.find(service => service.title === title);
        if (matchedService) {
            navigate(`/services${matchedService.path}`);
        } else {
            console.warn('Service path not found for:', title);
        }
    };

    return (
        <section className={`py-12 sm:py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 xl:px-24 bg-white ${className}`}>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => handleCardClick(service.title)}
                            className="block cursor-pointer"
                        >
                            <div
                                ref={addToContentRefs}
                                className="rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 sm:p-5 md:p-6
                                    flex flex-col sm:flex-row items-center
                                    transition-all duration-300 hover:shadow-lg hover:scale-105
                                    h-auto min-h-[220px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[317px]
                                    relative"
                                style={{
                                    background: service.cardBackground || '#EDEDF6',
                                }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48
                                        object-contain mb-3 sm:mb-0"
                                    loading="lazy"
                                />
                                <div className="flex flex-col justify-start w-full text-center sm:text-left
                                    sm:w-auto sm:ml-4 md:ml-6 lg:ml-8
                                    sm:flex-grow">
                                    <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold
                                        font-['Be_Vietnam_Pro'] text-[#333374] leading-tight">
                                        {service.title}
                                    </h3>
                                    {service.tagline && (
                                        <p className="mt-2 text-sm sm:text-sm md:text-base lg:text-lg
                                            font-['Be_Vietnam_Pro'] text-[#999999] leading-snug sm:leading-normal">
                                            {service.tagline}
                                        </p>
                                    )}
                                </div>
                                <div className="w-8 h-8 bg-[#28285A] rounded-full
                                    flex items-center justify-center
                                    mt-4 sm:mt-0
                                    sm:absolute sm:bottom-5 sm:right-5 md:bottom-6 md:right-6">
                                    <svg
                                        width="12"
                                        height="8"
                                        viewBox="0 0 14 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-3 h-2 sm:w-3.5 sm:h-2.5 md:w-4 md:h-3"
                                    >
                                        <path
                                            d="M1 5H13M13 5L9 1M13 5L9 9"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;