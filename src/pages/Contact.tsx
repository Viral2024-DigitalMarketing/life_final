import React, { useRef, useEffect, useState } from 'react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

const Contact = () => {
    const sectionRefs = useRef<HTMLDivElement[]>([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            sectionRefs.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    // Add element to refs array
    const addToRefs = (el: HTMLDivElement) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        setFormSubmitted(true);
        // In a real application, you would send the data to a server here
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow pt-16">
                {/* Hero Section */}
                <section
                    ref={addToRefs}
                    className="py-8 px-4 sm:px-6 md:px-12 lg:px-24 opacity-0 bg-white mt-8"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-6">
                        We're always here to lend a helping hand
                    </h1>

                    <div
                        className="container mx-auto"
                        style={{
                            maxWidth: '1280px',
                            height: 'auto',
                            border: '1px solid blue',
                            backgroundColor: 'white'
                        }}
                    >
                        <div className="flex flex-col md:flex-row p-4 sm:p-6 md:p-8 gap-6 md:gap-8">
                            {/* Left side content */}
                            <div className="flex-1 text-left">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-3">
                                    Request Appointment
                                </h2>
                                <p className="text-sm sm:text-base text-black opacity-90 mb-5">
                                    We're here to answer any questions you may have and provide you with the best possible care.
                                </p>
                                <img
                                    src="/images/contact.svg"
                                    alt="Appointment"
                                    className="w-full h-auto rounded-[15px] object-cover"
                                />
                            </div>

                            {/* Right side form */}
                            <div className="flex-1 mt-2">
                                <form className="space-y-4 sm:space-y-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-black mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            placeholder="Enter Your Full Name"
                                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="mobileNumber" className="block text-black mb-2">Mobile Number</label>
                                        <input
                                            type="tel"
                                            id="mobileNumber"
                                            placeholder="Enter Your Mobile Number"
                                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-black mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter Your Email"
                                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="reason" className="block text-black mb-2">Choose Reason</label>
                                        <select
                                            id="reason"
                                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                        >
                                            <option value="">Choose Reason</option>
                                            <option value="consultation">Consultation</option>
                                            <option value="checkup">Check-up</option>
                                            <option value="emergency">Emergency</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map and Directions Section */}
                <section
                    ref={addToRefs}
                    className="py-8 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50 opacity-0"
                >
                    <div className="container mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 text-center">
                            Recovery Begins Here
                        </h2>

                        <div className="relative">
                            {/* Show image and button on desktop */}
                            <div className="hidden md:block w-full h-[500px] rounded-xl overflow-hidden shadow-lg bg-white">
                                <img
                                    src="/images/map_img.svg" // Replace with an actual image placeholder
                                    alt="Map Placeholder"
                                    className="w-full h-full object-cover"
                                />
                                <a
                                    href="https://www.google.com/maps/dir/?api=1&destination=Kamareddy+Life+Hospitals"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all"
                                >
                                    Get Directions
                                </a>
                            </div>

                            {/* Show iframe on mobile */}
                            <div className="md:hidden w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg bg-white">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.344085618749!2d78.156674!3d17.228254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c42c88f8031%3A0x12fc29e0b7f3eae2!2sKamareddy%20Life%20Hospitals!5e0!3m2!1sen!2sin!4v1679429307751!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Kamareddy Life Hospitals Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;