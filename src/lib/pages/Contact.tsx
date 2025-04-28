import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import Navbar from '@/components/layout/Navbar.tsx';
import Footer from '@/components/layout/Footer.tsx';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

const Contact = () => {
    const sectionRefs = useRef<HTMLDivElement[]>([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: ''
    });

    // Initialize EmailJS with Public Key
    useEffect(() => {
        emailjs.init("MikydQenH8f_SH65S"); // EmailJS Public Key
    }, []);

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

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Basic form validation
    const validateForm = () => {
        if (!formData.name.trim()) {
            setError("Please enter your full name.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(formData.phone)) {
            setError("Please enter a valid phone number.");
            return false;
        }
        if (!formData.reason) {
            setError("Please select a reason.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            const response = await emailjs.send(
                "service_7ee1bih", // EmailJS Service ID
                "template_6odi0nn", // EmailJS Template ID
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    specialization: formData.reason,
                }
            );

            console.log("Email sent successfully:", response);
            setSuccess("Appointment request sent successfully!");
            setFormSubmitted(true);

            // Reset form fields
            setFormData({
                name: '',
                email: '',
                phone: '',
                reason: '',
                message: ''
            });

        } catch (err: any) {
            console.error("Failed to send email:", err);
            setError(
                err.text || "Failed to send appointment request. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
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
                                {formSubmitted ? (
                                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                                        <div className="bg-green-100 rounded-full p-3 mb-4">
                                            <Check className="h-8 w-8 text-green-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-2">Thank You!</h3>
                                        <p className="text-gray-700">Your appointment request has been successfully submitted. We'll contact you shortly.</p>
                                        <button
                                            onClick={() => setFormSubmitted(false)}
                                            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            Submit Another Request
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-black mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter Your Full Name"
                                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-black mb-2">Mobile Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Enter Your Mobile Number"
                                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-black mb-2">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter Your Email"
                                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="reason" className="block text-black mb-2">Choose Reason</label>
                                            <select
                                                id="reason"
                                                name="reason"
                                                value={formData.reason}
                                                onChange={handleInputChange}
                                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                                            >
                                                <option value="">Choose Reason</option>
                                                <option value="orthopedics">Orthopedics</option>
                                                <option value="general-medicine">General Medicine</option>
                                                <option value="dental">Dental</option>
                                                <option value="ent">ENT</option>
                                                <option value="plastic-surgery">Plastic Surgery</option>
                                            </select>
                                        </div>

                                        {/* Success Message */}
                                        {success && (
                                            <p className="text-green-500 text-sm text-center">{success}</p>
                                        )}

                                        {/* Error Message */}
                                        {error && (
                                            <p className="text-red-500 text-sm text-center">{error}</p>
                                        )}

                                        <div>
                                            <button
                                                type="submit"
                                                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <span>Submitting...</span>
                                                ) : (
                                                    <span className="flex items-center">
                                                        Submit <Send className="ml-2 h-4 w-4" />
                                                    </span>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
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
                            {/* Desktop view: Image with Get Directions button */}
                            <div className="hidden md:block w-full h-[500px] rounded-xl overflow-hidden shadow-lg bg-white">
                                <img
                                    src="/images/maps.png"
                                    alt="Kamareddy Life Hospitals Map"
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

                            {/* Mobile view: Google Maps iframe with button */}
                            <div className="md:hidden w-full rounded-xl overflow-hidden shadow-lg bg-white">
                                <div className="w-full h-[300px] sm:h-[400px]">
                                    <iframe
                                        src="/images/map2.png"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title="Kamareddy Life Hospitals Location"
                                    ></iframe>
                                </div>
                                <div className="mt-3 flex justify-center">
                                    <a
                                        href="https://www.google.com/maps/dir/?api=1&destination=Kamareddy+Life+Hospitals"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 mb-5 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-700 transition-all"
                                    >
                                        Get Directions
                                    </a>
                                </div>
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