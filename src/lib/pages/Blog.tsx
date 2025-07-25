"use client";
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar.tsx';
import Footer from '@/components/layout/Footer.tsx';

const Blog = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const articlesSectionRef = useRef(null);

    // All blog categories
    const categories = ['All', 'Bone Health', 'Joint Care', 'Nutrition', 'Fitness'];

    // Blog articles data
    const blogArticles = [
        {
            id: 'rural-communities',
            title: 'Empowering Rural Communities',
            img: '/images/blog2.svg',
            category: 'Healthcare Access',
            desc: 'Our mission is to provide compassionate, high-quality healthcare services to all, regardless of location or socioeconomic status.',
            readTime: '5 min read',
            date: 'April 10, 2025'
        },
        {
            id: 'elderly-care',
            title: 'Focusing on Elderly Care',
            img: '/images/blog3.svg',
            category: 'Senior Health',
            desc: 'Understanding the unique healthcare needs of our senior population and providing tailored support and medical assistance.',
            readTime: '7 min read',
            date: 'April 8, 2025'
        },
        {
            id: 'mental-wellness',
            title: 'The Importance of Mental Wellness',
            img: '/images/blog5.svg',
            category: 'Mental Health',
            desc: 'Prioritizing mental health and offering resources and support for emotional and psychological well-being.',
            readTime: '6 min read',
            date: 'April 5, 2025'
        },
        {
            id: 'child-health',
            title: 'Investing in Child Health',
            img: '/images/blog6.svg',
            category: 'Pediatric Care',
            desc: 'Ensuring a healthy future for the next generation through comprehensive pediatric care and health education.',
            readTime: '4 min read',
            date: 'April 3, 2025'
        },
        {
            id: 'preventive-care',
            title: 'The Power of Preventive Care',
            img: '/images/blog7.svg',
            category: 'Wellness',
            desc: 'Focusing on proactive health measures and screenings to detect and prevent illnesses early on.',
            readTime: '8 min read',
            date: 'March 30, 2025'
        },
        {
            id: 'healthcare-tech',
            title: 'Embracing Technology in Healthcare',
            img: '/images/blog8.svg',
            category: 'Innovation',
            desc: 'Leveraging innovative technologies to improve diagnostics, treatments, and overall patient experience.',
            readTime: '5 min read',
            date: 'March 28, 2025'
        },
    ];

    // Handler function to navigate to article page
    const handleNavigateToArticle = (articleId) => {
        navigate(`/blog/${articleId}`);
    };

    // Handle newsletter subscription
    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing with: ${email}`);
        setEmail('');
    };

    // Filter articles by category
    const handleCategoryFilter = (category) => {
        setActiveCategory(category);
    };

    // Scroll to articles section
    const handleScrollToArticles = () => {
        articlesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Navbar with proper positioning */}
            <Navbar />

            <main className="flex-grow">
                {/* Enhanced Hero Section with improved responsive layout */}
                <section className="relative bg-white overflow-hidden">
                    {/* Mobile Hero (Image on top, text below) */}
                    <div className="block sm:hidden">
                        <img
                            src="/images/legblog.svg"
                            className="h-[400px] w-full object-cover object-center"
                            loading="lazy"
                            alt="Blog visual"
                        />

                        <div className="container mx-auto px-4 mt-30           py-10">
                            <div className="text-left">
                                <h1 className="font-['Be Vietnam Pro'] font-semibold text-3xl leading-tight mb-4 text-gray-900 animate-fadeIn">
                                    Bone Health Mistakes You'll Regret
                                </h1>
                                <p className="font-['Be Vietnam Pro'] font-normal text-base leading-relaxed mb-6 text-gray-700 animate-fadeIn">
                                    Ignoring early symptoms results in severe joint deterioration and expensive
                                    treatments. Learn how to protect your bone health today.
                                </p>
                                <div className="flex flex-wrap gap-4 animate-fadeIn">
                                    <button
                                        onClick={() => handleNavigateToArticle('bone-health')}
                                        className="bg-[#015B52] text-white font-['Be Vietnam Pro'] font-medium text-sm rounded-[24px] px-6 py-3 border border-[#015B52] hover:bg-[#01473c] transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                                    >
                                        <span>Read full article</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleScrollToArticles}
                                        className="border border-[#015B52] text-[#015B52] font-['Be Vietnam Pro'] font-medium text-sm rounded-[24px] px-6 py-3 hover:bg-[#015B52] hover:text-white transition-all duration-300"
                                    >
                                        Explore more articles
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Hero (Full background image) */}
                    <div
                        className="hidden sm:block relative h-[700px] lg:h-[800px] bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/legblog.svg')" }}
                    >
                        {/* Text Content */}
                        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                            <div className="max-w-xl lg:max-w-2xl text-left relative top-[130px]"> {/* Changed from top-[50px] to top-[60px] */}
                                <h1 className="font-['Be Vietnam Pro'] font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-gray-900 animate-fadeIn">
                                    Bone Health Mistakes You'll Regret
                                </h1>
                                <p className="font-['Be Vietnam Pro'] font-normal text-lg md:text-xl leading-relaxed mb-8 text-gray-700 animate-fadeIn animation-delay-200">
                                    Ignoring early symptoms results in severe joint deterioration and expensive treatments. Learn how to protect your bone health today.
                                </p>
                                <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-400">
                                    <button
                                        onClick={() => handleNavigateToArticle('bone-health')}
                                        className="bg-[#015B52] text-white font-['Be Vietnam Pro'] font-medium text-base rounded-[24px] px-8 py-4 border border-[#015B52] hover:bg-[#01473c] transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                                    >
                                        <span>Read full article</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleScrollToArticles}
                                        className="border border-[#015B52] text-[#015B52] font-['Be Vietnam Pro'] font-medium text-base rounded-[24px] px-8 py-4 hover:bg-[#015B52] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                                    >
                                        Explore more articles
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Article Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-['Abhaya Libre SemiBold'] font-semibold text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-16">
                            Your Guide to a Healthier You
                        </h2>
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
                            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                                <img
                                    src="/images/blog1.svg"
                                    alt="Future of Joint Replacement"
                                    className="w-full h-[300px] sm:h-[400px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-4">
                                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                                    Featured Article
                                </div>
                                <h2 className="font-['Be Vietnam Pro'] font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6">
                                    The Future of Joint Replacement
                                </h2>
                                <p className="font-['Be Vietnam Pro'] font-normal text-base md:text-lg leading-relaxed mb-8 text-gray-700">
                                    Discover groundbreaking advancements in joint replacement technology that are revolutionizing orthopedic care. Our mission is to provide compassionate, high-quality healthcare services to all, regardless of location or socioeconomic status.
                                </p>
                                <button
                                    onClick={() => handleNavigateToArticle('joint-replacement')}
                                    className="bg-[#06009E] text-white font-['Be Vietnam Pro'] font-medium text-base rounded-full px-8 py-3 hover:bg-[#04006e] transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
                                >
                                    <span>Read full article</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Healthier Blogs Section */}
                <section ref={articlesSectionRef} className="py-16 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="font-['Abhaya Libre SemiBold'] font-semibold text-3xl md:text-4xl text-center mb-12">
                            Latest Health Articles
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                            {blogArticles.map((article, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] cursor-pointer"
                                    onClick={() => handleNavigateToArticle(article.id)}
                                >
                                    <div className="relative w-full h-[220px] overflow-hidden">
                                        <img
                                            src={article.img}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-[#015B52] font-medium text-xs rounded-full px-3 py-1">
                                            {article.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-['Be Vietnam Pro'] font-semibold text-xl md:text-2xl leading-tight mb-3">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                {article.readTime}
                                            </span>
                                            <span>{article.date}</span>
                                        </div>
                                        <p className="font-['Be Vietnam Pro'] font-normal text-base leading-relaxed text-gray-700 mb-6">
                                            {article.desc}
                                        </p>
                                        <button
                                            className="text-[#06009E] font-['Be Vietnam Pro'] text-base font-medium flex items-center hover:underline transition-colors">
                                            Read more
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;