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
        path: '/joint-replacement',
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
            marginTop: "12px",
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
            marginTop: "12px",
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
            marginTop: "12px",
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
            marginTop: "12px",
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
                                className={`rounded-[32px] p-5 flex flex-col items-center justify-between transition-shadow duration-300 hover:shadow-md
                                    md:w-[592px] md:h-[317.33px] md:rounded-[40px] md:p-6 md:flex-row md:items-center
                                    sm:w-full sm:min-h-[280px] sm:rounded-[24px] sm:flex-col sm:items-center relative`}
                                style={{
                                    marginLeft: index % 2 === 0 ? '0' : 'auto',
                                    background: service.cardBackground || '#EDEDF6',
                                }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-[100px] h-[100px] object-contain mb-4 sm:w-[120px] sm:h-[120px] sm:mb-4 md:w-[200px] md:h-[200px] md:mb-0"
                                />
                                <div className="flex flex-col justify-start text-center w-full px-2 md:text-left md:max-w-[262px] md:ml-2 md:mt-[-80px] md:flex-grow md:px-0 sm:text-center sm:max-w-full sm:mt-0">
                                    <h3
                                        className="text-[22px] md:text-[30px]"
                                        style={{
                                            fontFamily: service.titleStyle?.fontFamily,
                                            fontWeight: service.titleStyle?.fontWeight,
                                            lineHeight: service.titleStyle?.lineHeight,
                                            letterSpacing: service.titleStyle?.letterSpacing,
                                            textTransform: service.titleStyle?.textTransform as any,
                                            color: service.titleStyle?.color,
                                        }}
                                    >
                                        {service.title}
                                    </h3>
                                    {service.tagline && (
                                        <p
                                            className="mt-2 text-sm leading-tight md:text-base md:leading-none"
                                            style={{
                                                fontFamily: service.taglineStyle?.fontFamily,
                                                fontWeight: service.taglineStyle?.fontWeight,
                                                letterSpacing: service.taglineStyle?.letterSpacing,
                                                textTransform: service.taglineStyle?.textTransform as any,
                                                color: service.taglineStyle?.color,
                                                marginTop: service.taglineStyle?.marginTop,
                                            }}
                                        >
                                            {service.tagline}
                                        </p>
                                    )}
                                    <div className="flex justify-center mt-5 md:mt-8 sm:mt-6">
                                        <div className="w-[32px] h-[32px] bg-[#28285A] rounded-full flex items-center justify-center md:w-[36px] md:h-[36px] md:absolute md:bottom-6 md:right-6 sm:w-[32px] sm:h-[32px]">
                                            <svg
                                                width="12"
                                                height="8"
                                                viewBox="0 0 14 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="md:w-[14px] md:h-[10px] sm:w-[12px] sm:h-[8px]"
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