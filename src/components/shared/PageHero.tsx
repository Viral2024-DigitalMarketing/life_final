import React from 'react';

interface PageHeroProps {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
    customContent?: React.ReactNode;
    height?: string;
    backgroundPositionY?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
                                               title,
                                               subtitle,
                                               backgroundImage = '/src/assets/hero-bg.jpg',
                                               customContent,
                                               height = 'h-[100vh]',
                                               backgroundPositionY = '-10%' // ✅ Shift the image slightly upward
                                           }) => {
    return (
        <div className={`relative w-full ${height} flex items-center justify-center`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPositionY: backgroundPositionY,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            />

            {/* Optional Content */}
            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                {customContent ? (
                    customContent
                ) : (
                    <>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-abhaya mb-4">{title}</h1>
                        {subtitle && <p className="text-xl md:text-2xl max-w-2xl mx-auto">{subtitle}</p>}
                    </>
                )}
            </div>
        </div>
    );
};

export default PageHero;
