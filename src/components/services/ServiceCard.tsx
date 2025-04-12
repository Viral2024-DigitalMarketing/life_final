import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Service {
    id: number;
    image: string;
    title: string;
    tagline: string;
    path: string;
    titleStyle?: React.CSSProperties;
    taglineStyle?: React.CSSProperties;
    cardBackground?: string;
}
const servicesData: Service[] = [
    {
        id: 1,
        image: '/images/ser1.svg',
        title: 'Orthopedic care',
        tagline: 'Bone, joint, muscle health and repair.',
        path: '/orthopedic',
        titleStyle: {

            fontFamily: 'Be Vietnam Pro',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#333374',
        },
        taglineStyle: {
            marginTop:"12px",
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#999999',
        },
    },
    {
        id: 2,
        image: '/images/ser2.svg',
        title: 'Arthroscopy',
        tagline: 'Minimally invasive joint diagnosis and treatment.',
        path: '/orthopedic',
        titleStyle: {
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#333374',
        },
        taglineStyle: {
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#999999',
        },
    },
    {
        id: 3,
        image: '/images/ser3.svg',
        title: 'General Surgery',
        tagline: 'Broad surgical procedures, abdominal, and related areas.',
        path: '/general-health',
        titleStyle: {
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#333374',
        },
        taglineStyle: {
            marginTop:"12px",
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#999999',
        },
    },
    {
        id: 4,
        image: '/images/ser4.svg',
        title: 'Plastic Surgery',
        tagline: 'Reconstructive and cosmetic surgical enhancements.',
        path: '/specialized-services#plastic',
        titleStyle: {

            fontFamily: 'Be Vietnam Pro',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#333374',
        },
        taglineStyle: {
            marginTop:"12px",
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#999999',
        },
    },
    {
        id: 5,
        image: '/images/ser5.svg',
        title: 'Dental Surgery',
        tagline: 'Oral surgery, implants, and extractions.',
        path: '/general-health',
        titleStyle: {
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#333374',
        },
        taglineStyle: {
            marginTop:"12px",
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#999999',
        },
    },
    {
        id: 6,
        image: '/images/ser6.svg',
        title: 'ENT',
        tagline: 'Ear, nose, throat, and head care.',
        path: '/specialized-services#ent',
        titleStyle: {
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#333374',
        },
        taglineStyle: {
            fontFamily: 'Be Vietnam Pro',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            textTransform: 'capitalize',
            color: '#999999',
        },
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
        <section className={`py-24 px-4 md:px-12 lg:px-24 bg-white ${className}`}>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            onClick={() => handleCardClick(service.title)}
                            className="block cursor-pointer"
                        >
                            <div
                                ref={addToContentRefs}
                                className={`rounded-[32px] p-6 flex flex-col md:flex-row items-center justify-between transition-shadow duration-300 hover:shadow-md
                  md:w-[592px] md:h-[317.33px] md:rounded-[40px]`}
                                style={{
                                    marginLeft: index % 2 === 0 ? '0' : 'auto',
                                    background: service.cardBackground || '#EDEDF6',
                                }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-[160px] h-[160px] object-contain mb-4 md:mb-0 md:w-[200px] md:h-[200px]"
                                />
                                <div className="flex flex-col justify-start text-center md:text-left md:max-w-[262px] md:ml-2 md:mt-[-80px] flex-grow">
                                    <h3 style={service.titleStyle}>
                                        {service.title}
                                    </h3>
                                    {service.tagline && (
                                        <p className="mt-2 text-sm md:text-base" style={service.taglineStyle}>
                                            {service.tagline}
                                        </p>
                                    )}
                                    <div className="flex justify-center md:justify-start mt-4 ml-60 md:mt-auto md:absolute md:bottom-[40px] md:right-[50px]">
                                        <div className="w-[36px] h-[36px] bg-[#28285A] rounded-full flex items-center justify-center">
                                            <svg
                                                width="14"
                                                height="10"
                                                viewBox="0 0 14 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
