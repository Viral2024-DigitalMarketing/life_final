"use client";
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ArticlePage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [articleData, setArticleData] = useState(null);

    // Define article mapping
    const articleMapping = {
        'joint-replacement': {
            title: 'The Future of Joint Replacement',
            category: 'Orthopedics',
            publishDate: "April 12, 2025",
            readTime: "10 min read",
            author: "Dr. Michael Chen",
            authorRole: "Orthopedic Surgeon",
            content: `Joint replacement surgery has evolved significantly over the past few decades. Modern techniques allow for faster recovery and better outcomes. Patients can now expect to return to many of their normal activities within weeks of surgery.`
        },
        'bone-health': {
            title: 'Bone Health Mistakes You\'ll Regret',
            category: 'Wellness',
            publishDate: "April 15, 2025",
            readTime: "8 min read",
            author: "Dr. Sarah Johnson",
            authorRole: "Orthopedic Specialist",
            content: `Many people overlook the importance of bone health until problems arise. Common mistakes include inadequate calcium intake, vitamin D deficiency, and insufficient weight-bearing exercise. Addressing these issues early can prevent serious complications later in life.`
        },
        'rural-communities': {
            title: 'Empowering Rural Communities',
            category: 'Healthcare Access',
            publishDate: "April 10, 2025",
            readTime: "5 min read",
            author: "Emma Rodriguez",
            authorRole: "Community Health Director",
            content: `Access to quality healthcare remains a challenge for many rural communities. Innovative solutions such as telehealth, mobile clinics, and community health workers are helping bridge this gap and improve health outcomes in these underserved areas.`
        },
        'elderly-care': {
            title: 'Focusing on Elderly Care',
            category: 'Senior Health',
            publishDate: "April 8, 2025",
            readTime: "7 min read",
            author: "Dr. Robert Williams",
            authorRole: "Geriatric Specialist",
            content: `As our population ages, specialized care for seniors becomes increasingly important. Comprehensive geriatric assessments, medication management, and fall prevention strategies are essential components of effective elderly care programs.`
        },
        'mental-wellness': {
            title: 'The Importance of Mental Wellness',
            category: 'Mental Health',
            publishDate: "April 5, 2025",
            readTime: "6 min read",
            author: "Dr. Lisa Thompson",
            authorRole: "Psychiatrist",
            content: `Mental health is as important as physical health but often receives less attention. Regular mental health check-ins, stress management techniques, and destigmatizing mental health conditions are crucial steps toward overall wellness.`
        },
        'child-health': {
            title: 'Investing in Child Health',
            category: 'Pediatric Care',
            publishDate: "April 3, 2025",
            readTime: "4 min read",
            author: "Dr. James Wilson",
            authorRole: "Pediatrician",
            content: `Childhood is a critical period for establishing lifelong health habits. Proper nutrition, regular physical activity, and preventive care set the foundation for healthy development and reduce the risk of chronic diseases later in life.`
        },
        'preventive-care': {
            title: 'The Power of Preventive Care',
            category: 'Wellness',
            publishDate: "March 30, 2025",
            readTime: "8 min read",
            author: "Dr. Emily Chen",
            authorRole: "Primary Care Physician",
            content: `Preventive care is more cost-effective and less disruptive than treating established diseases. Regular screenings, immunizations, and healthy lifestyle choices can significantly reduce your risk of serious health conditions.`
        },
        'healthcare-tech': {
            title: 'Embracing Technology in Healthcare',
            category: 'Innovation',
            publishDate: "March 25, 2025",
            readTime: "5 min read",
            author: "Dr. David Kim",
            authorRole: "Health Technology Director",
            content: `Technology is transforming healthcare delivery in numerous ways. Artificial intelligence, wearable devices, and electronic health records are improving diagnosis accuracy, patient monitoring, and care coordination across healthcare systems.`
        }
    };

    // Default article data
    const defaultArticle = {
        title: "Article Not Found",
        category: "General",
        publishDate: "N/A",
        readTime: "N/A",
        author: "Unknown",
        authorRole: "N/A",
        content: `The article you are looking for could not be found. Please check the URL or explore other articles.`
    };

    // Fetch article data based on ID
    useEffect(() => {
        setLoading(true);
        const article = id && articleMapping[id] ? articleMapping[id] : defaultArticle;
        setArticleData(article);
        setLoading(false);
    }, [id]);

    // Related articles
    const getRelatedArticles = () => {
        const allArticles = [
            {
                id: 'joint-replacement',
                title: 'The Future of Joint Replacement',
                img: '/images/blog1.svg',
                category: 'Orthopedics'
            },
            {
                id: 'bone-health',
                title: 'Bone Health Mistakes You\'ll Regret',
                img: '/images/legblog.svg',
                category: 'Wellness'
            },
            {
                id: 'rural-communities',
                title: 'Empowering Rural Communities',
                img: '/images/blog2.svg',
                category: 'Healthcare Access'
            },
            {
                id: 'elderly-care',
                title: 'Focusing on Elderly Care',
                img: '/images/blog3.svg',
                category: 'Senior Health'
            },
            {
                id: 'mental-wellness',
                title: 'The Importance of Mental Wellness',
                img: '/images/blog5.svg',
                category: 'Mental Health'
            }
        ];
        return allArticles.filter(article => article.id !== id).slice(0, 3);
    };

    // Handle image errors
    const handleImageError = (e) => {
        if (e && e.target) {
            e.target.src = "/images/default-article.svg";
            e.target.onerror = null;
        }
    };

    // Get article image with category-based fallback
    const getArticleImage = () => {
        const defaultCategoryImages = {
            'Orthopedics': '/images/blog1.svg',
            'Wellness': '/images/legblog.svg',
            'Healthcare Access': '/images/blog2.svg',
            'Senior Health': '/images/blog3.svg',
            'Mental Health': '/images/blog5.svg',
            'Pediatric Care': '/images/blog6.svg',
            'Innovation': '/images/blog8.svg',
            'General': '/images/default-article.svg'
        };
        return defaultCategoryImages[articleData?.category] || '/images/default-article.svg';
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col bg-gray-50">
                <div className="sticky top-0 z-50">
                    <Navbar />
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#015B52]"></div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <main className="flex-grow pt-24 pb-16">
                <div className="container mx-auto px-4 mb-6">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link to="/" className="text-gray-600 hover:text-[#015B52]">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <Link to="/blog" className="ml-1 text-gray-600 hover:text-[#015B52] md:ml-2">
                                        Blog
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="ml-1 text-gray-500 md:ml-2 font-medium truncate">
                                        {articleData.title}
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <article className="container mx-auto px-4 max-w-4xl bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                            {articleData.category}
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-['Abhaya Libre SemiBold'] mb-6 leading-tight">
                        {articleData.title}
                    </h1>
                    <div className="flex flex-wrap items-center text-gray-600 mb-8">
                        <div className="flex items-center mr-6 mb-2 sm:mb-0">
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>{articleData.publishDate}</span>
                        </div>
                        <div className="flex items-center mb-2 sm:mb-0">
                            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>{articleData.readTime}</span>
                        </div>
                    </div>
                    <div className="flex items-center mb-8">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center overflow-hidden">
                            <span className="text-gray-600 font-semibold text-xl">
                                {articleData.author.charAt(0)}
                            </span>
                        </div>
                        <div>
                            <p className="font-medium text-gray-900">{articleData.author}</p>
                            <p className="text-sm text-gray-600">{articleData.authorRole}</p>
                        </div>
                        <div className="ml-auto flex space-x-2">
                            <button className="p-2 text-gray-500 hover:text-blue-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                            </button>
                            <button className="p-2 text-gray-500 hover:text-blue-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.056 10.056 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </button>
                            <button className="p-2 text-gray-500 hover:text-blue-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mb-8">
                        <img
                            src={getArticleImage()}
                            alt={articleData.title}
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                            onError={handleImageError}
                            loading="lazy"
                        />
                    </div>
                    <div className="prose prose-lg max-w-none mb-12">
                        <p className="text-lg leading-relaxed mb-6">
                            {articleData.content}
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 mt-8">Key Considerations</h2>
                        <p className="mb-6">
                            When it comes to {articleData.category.toLowerCase()} care, there are several important factors to consider. Early intervention and proper diagnosis are crucial for achieving optimal outcomes. Healthcare providers should work closely with patients to develop personalized treatment plans.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 mt-8">Latest Developments</h2>
                        <p className="mb-6">
                            Recent advances in medical technology have revolutionized how we approach {articleData.category.toLowerCase()} care. From minimally invasive procedures to AI-assisted diagnostics, these innovations are improving patient experiences and outcomes across the board.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 mt-8">Patient Experience</h2>
                        <p className="mb-6">
                            The patient experience remains central to effective healthcare delivery. By focusing on patient comfort, clear communication, and comprehensive follow-up care, healthcare providers can ensure better compliance with treatment protocols and improved satisfaction.
                        </p>
                        <blockquote className="border-l-4 border-[#015B52] pl-4 italic my-8">
                            "The future of healthcare depends on our ability to combine cutting-edge technology with compassionate, patient-centered care."
                        </blockquote>
                        <h2 className="text-2xl font-semibold mb-4 mt-8">Conclusion</h2>
                        <p className="mb-6">
                            As we continue to advance in our understanding of {articleData.category.toLowerCase()}, it's essential that we maintain a holistic approach to patient care. By integrating the latest research findings with proven clinical practices, we can provide patients with the best possible care and outcomes.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-12">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                            {articleData.category}
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                            Healthcare
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                            Wellness
                        </span>
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                            Medical Research
                        </span>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg mb-12">
                        <div className="flex items-center mb-4">
                            <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex items-center justify-center overflow-hidden">
                                <span className="text-gray-600 font-semibold text-2xl">
                                    {articleData.author.charAt(0)}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">About {articleData.author}</h3>
                                <p className="text-gray-600">{articleData.authorRole}</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            {articleData.author} is a respected expert in the field of {articleData.category.toLowerCase()} with over 15 years of experience. They have published numerous research papers and are dedicated to improving patient outcomes through innovative approaches to healthcare.
                        </p>
                    </div>
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {getRelatedArticles().map((article) => (
                                <Link
                                    to={`/blog/${article.id}`}
                                    key={`related-${article.id}`}
                                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={article.img}
                                            alt={article.title}
                                            className="w-full h-full object-cover"
                                            onError={handleImageError}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <span className="text-xs font-medium text-blue-600 mb-2 block">
                                            {article.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <span>Read article</span>
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </article>
            </main>
            <Footer />
        </div>
    );
};

export default ArticlePage;