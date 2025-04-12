"use client";
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ArticlePage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow py-20 px-4 max-w-3xl mx-auto">
                <h1 className="text-4xl font-semibold font-['Abhaya Libre SemiBold'] mb-4">
                    Bone Health Mistakes You’ll Regret
                </h1>
                <p className="font-['Be Vietnam Pro'] text-base mb-6">
                    This is a demo article page. Here you’ll learn about the bone health mistakes
                    that many people make and how to avoid them with early awareness and proper treatment.
                </p>
                <img src="/images/legblog.svg" alt="Bone Health" className="w-full rounded-lg shadow-md mb-6" />
                <p className="font-['Be Vietnam Pro'] text-base leading-relaxed">
                    Bone health is critical at all stages of life. In this article, we’ll cover early warning signs,
                    proper nutrition, when to consult a doctor, and how small changes can save you from serious issues.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default ArticlePage;
