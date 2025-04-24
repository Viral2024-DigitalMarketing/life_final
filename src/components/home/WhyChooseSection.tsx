"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const BlobSVG = ({ color, className = "", rotation = 0 }) => {
    return (
        <svg
            viewBox="0 0 662 546"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-full ${className}`}
            style={{ transform: `rotate(${rotation}deg)` }}
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                d="M92.25 3.68403C45.4408 13.56 23.6976 48.7734 12.3861 86.54C-6.09523 148.556 0.0121572 215.99 10.4151 279.56C22.2789 352.309 42.4588 433.343 99.3909 494.683C121.339 518.256 148.032 538.574 184.959 543.921C225.897 549.902 265.16 537.021 301.971 525.799C343.688 513.191 383.764 497.489 421.7 478.889C498.276 441.51 565.296 392.915 619.463 335.494C648.701 304.355 675.944 264.921 652.815 224.522C631.994 188.347 584.399 165.842 544.035 145.594C469.233 108.047 391.196 75.0568 310.599 46.9067C249.525 25.5848 178.454 -2.70276 111.124 1.24388C104.734 1.58431 98.4157 2.40112 92.25 3.68403Z"
                fill={color}
            />
        </svg>
    );
};

const AppointmentModal = ({ isOpen, onClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [specialization, setSpecialization] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="bg-white rounded-2xl shadow-2xl px-4 py-6 sm:px-8 sm:py-10 w-[92vw] max-w-[740px] mx-auto flex flex-col items-center"
                style={{ transform: "translate(-50%, 0)", top: "5%", left: "50%" }}
            >
                <div className="text-center mb-5 sm:mb-8 mt-2 sm:mt-0 w-full max-w-[400px]">
                    <h1 className="font-merriweather font-bold text-[20px] sm:text-[32px] leading-[26px] sm:leading-[40px] text-[#111827]">
                        Book your appointment now
                    </h1>
                    <p className="font-product-sans mt-1 sm:mt-2 text-[13px] sm:text-[16px] leading-[18px] sm:leading-[22px] text-[#111827]">
                        So our team can reach out to you on time
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 sm:gap-6 w-full"
                    style={{ maxWidth: "400px" }}
                >
                    <div className="space-y-1 sm:space-y-2">
                        <Label
                            htmlFor="name"
                            className="text-[13px] sm:text-[16px] text-[#6F7482] font-ibm-plex-sans"
                        >
                            Full Name
                        </Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="h-[44px] sm:h-[48px] text-[14px] px-3"
                        />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                        <Label
                            htmlFor="phone"
                            className="text-[13px] sm:text-[16px] text-[#6F7482] font-ibm-plex-sans"
                        >
                            Mobile Number
                        </Label>
                        <Input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your mobile number"
                            className="h-[44px] sm:h-[48px] text-[14px] px-3"
                        />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                        <Label
                            htmlFor="email"
                            className="text-[13px] sm:text-[16px] text-[#6F7482] font-ibm-plex-sans"
                        >
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="h-[44px] sm:h-[48px] text-[14px] px-3"
                        />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                        <Label
                            htmlFor="specialization"
                            className="text-[13px] sm:text-[16px] text-[#6F7482] font-ibm-plex-sans"
                        >
                            Choose your treatment specialization
                        </Label>
                        <Select value={specialization} onValueChange={setSpecialization}>
                            <SelectTrigger
                                id="specialization"
                                className="h-[44px] sm:h-[48px] text-[14px] px-3 rounded-md border"
                            >
                                <SelectValue placeholder="Select your specialization" />
                            </SelectTrigger>
                            <SelectContent className="text-black bg-white">
                                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                                <SelectItem value="general-medicine">General Medicine</SelectItem>
                                <SelectItem value="dental">Dental</SelectItem>
                                <SelectItem value="ent">ENT</SelectItem>
                                <SelectItem value="plastic-surgery">Plastic Surgery</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button
                        type="submit"
                        className="w-full h-[44px] sm:h-[48px] text-[15px] sm:text-[18px] bg-[#1915C3] text-white font-semibold rounded-md"
                        style={{ fontFamily: "Public Sans" }}
                    >
                        Submit
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

const WhyChooseSection = () => {
    const [ref1, inView1] = useInView({
        threshold: 0.2,
        triggerOnce: true,
        rootMargin: '50px 0px' // Added margin to trigger earlier for smoother animations
    });
    const [ref2, inView2] = useInView({
        threshold: 0.2,
        triggerOnce: true,
        rootMargin: '50px 0px'
    });
    const [ref3, inView3] = useInView({
        threshold: 0.2,
        triggerOnce: true,
        rootMargin: '50px 0px'
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const animationStarted = useRef(false);
    const section1Animated = useRef(false);
    const section2Animated = useRef(false);
    const section3Animated = useRef(false);

    useEffect(() => {
        if (inView1 && !section1Animated.current) {
            section1Animated.current = true;
            animationStarted.current = true;
        }
    }, [inView1]);

    useEffect(() => {
        if (inView2 && !section2Animated.current && animationStarted.current) {
            section2Animated.current = true;
        }
    }, [inView2]);

    useEffect(() => {
        if (inView3 && !section3Animated.current && section2Animated.current) {
            section3Animated.current = true;
        }
    }, [inView3]);

    return (
        <div className="bg-white font-['Abhaya_Libre'] overflow-hidden">
            <div className="py-6 px-4 md:py-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-center text-black mb-4 md:mb-10">
                    Why Choose Life Hospital
                </h2>
            </div>

            {/* Section 1 - Fixed text positioning for mobile */}
            <motion.div
                ref={ref1}
                className="min-h-[80vh] md:min-h-[90vh] lg:min-h-screen py-6 md:py-10 lg:py-20 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }} // Added easeOut for smoother animation
            >
                <div className="container mx-auto px-4">
                    <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
                        {/* Blob Container */}
                        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center mx-auto">
                            {/* Background Blobs */}
                            <motion.div
                                className="absolute w-[90%] sm:w-[95%] h-[90%] sm:h-[95%] z-[3] top-0 lg:top-[-60px] right-0 lg:right-[-30px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    section1Animated.current
                                        ? {
                                            opacity: [1, 1, 0],
                                            scale: [1, 1, 0.8],
                                            x: [0, 0, 100],
                                            rotateZ: [0, 0, 180],
                                        }
                                        : { opacity: 1, scale: 1 }
                                }
                                transition={{
                                    duration: 2.5,
                                    times: [0, 0.4, 1],
                                    delay: 1.2,
                                    ease: "easeInOut" // Smoother animation
                                }}
                            >
                                <BlobSVG color="#7272AF" />
                            </motion.div>
                            <motion.div
                                className="absolute w-[90%] sm:w-[95%] h-[90%] sm:h-[95%] z-[4] top-[5px] md:top-[-30px] lg:top-[-90px] right-[5px] md:right-[-20px] lg:right-[-50px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    section1Animated.current
                                        ? {
                                            opacity: [1, 1, 0],
                                            scale: [1, 1, 0.8],
                                            x: [0, 0, 100],
                                            rotateZ: [0, 0, 180],
                                        }
                                        : { opacity: 1, scale: 1 }
                                }
                                transition={{
                                    duration: 2.5,
                                    times: [0, 0.4, 1],
                                    delay: 1.4,
                                    ease: "easeInOut" // Smoother animation
                                }}
                            >
                                <BlobSVG color="#F9D020" />
                            </motion.div>

                            {/* Main Blob with Text - Moved text 2px to the left for mobile */}
                            <motion.div
                                className="absolute w-[90%] sm:w-[95%] h-[90%] sm:h-[95%] z-[5] top-[10px] md:top-[-60px] lg:top-[-120px] right-[10px] md:right-[-40px] lg:right-[-70px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                <BlobSVG color="#6FCBCF" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 text-center" style={{ paddingLeft: "calc(1rem + 2px)" }}>
                                    {/* Shifted text slightly to the left with paddingLeft */}
                                    <h3 className="text-sm sm:text-base md:text-xl lg:text-3xl font-bold text-white mb-2 md:mb-4 lg:mb-6 font-merriweather px-2">
                                        Recognized for excellence in Ayushman Bharat & Rajiv
                                        Aarogyasri.
                                    </h3>
                                    <p className="text-[9px] sm:text-xs md:text-sm ml-[-12px] lg:text-base text-white max-w-[85%] sm:max-w-[85%] mt-[-8px] md:max-w-md">
                                        This certificate is awarded to Life Hospital, Kamareddy for
                                        exemplary performance under Ayushman Bharat Pradhan Mantri Jan
                                        Arogya Yojana (AB PM-JAY)-Rajiv Aarogyasri in the State of
                                        Telangana on 26 January 2024
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Image Section */}
                        <motion.div
                            className="w-full lg:w-1/2 relative z-[10] mt-4 lg:mt-0 mx-auto"
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView1 ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            <img
                                src="/images/certi_why.svg"
                                alt="Certified Badge"
                                className="absolute top-[-20px] md:top-[-40px] lg:top-[-80px] right-[-10px] md:right-[-20px] lg:right-[-60px] w-[100px] md:w-[180px] lg:w-[400px] h-[100px] md:h-[180px] lg:h-[400px] object-contain z-30"
                                width="400"
                                height="400"
                                loading="lazy"
                            />
                            <img
                                src="/images/why_image.svg"
                                alt="Hospital Scene"
                                className="w-full h-[180px] sm:h-[200px] md:h-[300px] lg:h-[447px] object-cover rounded-2xl shadow-xl"
                                width="1200"
                                height="447"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Section 2 - Fixed text positioning for mobile */}
            <motion.div
                ref={ref2}
                className="min-h-[80vh] md:min-h-[90vh] lg:min-h-screen py-6 md:py-10 lg:py-20 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 md:mt-[-50px] lg:mt-[-150px]">
                    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 mx-auto">
                            <img
                                src="/images/why5.svg"
                                alt="Medical Team"
                                className="w-full lg:w-[551px] h-[180px] sm:h-[200px] md:h-[300px] lg:h-[447px] mx-auto lg:ml-[90px] object-cover rounded-[20px] shadow-xl"
                                width="551"
                                height="447"
                            />
                            <img
                                src="/images/cert2.svg"
                                alt="Certified Badge"
                                className="absolute top-[-20px] md:top-[-40px] lg:top-[-80px] right-[-5px] w-[100px] md:w-[180px] lg:w-[450px] h-[100px] md:h-[180px] lg:h-[450px] object-contain z-10"
                                width="450"
                                height="450"
                                loading="lazy"
                            />
                        </div>

                        {/* Blob Section - Fixed text positioning for mobile */}
                        <div className="w-full lg:w-1/2 relative mx-auto">
                            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px]">
                                {/* Purple Blob */}
                                <motion.div
                                    className="absolute w-[90%] sm:w-[95%] h-[90%] sm:h-[95%] z-10 left-[5%] sm:left-[2.5%]"
                                    initial={{ opacity: 0, y: -400, scale: 0.8 }}
                                    animate={inView2 ? { opacity: 1, y: 0, scale: 1 } : {}}
                                    transition={{
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 20,
                                        duration: 1,
                                        delay: 0.3,
                                    }}
                                >
                                    <BlobSVG color="#7272AF" className="w-full h-full" />
                                    {/* Text on Purple Blob - Moved text 2px to the left for mobile */}
                                    <motion.div
                                        className="absolute inset-0 flex flex-col items-center lg:items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12 text-center lg:text-left"
                                        style={{ paddingLeft: "calc(1rem + 2px)" }} // Shifted text 2px left
                                        initial={{ opacity: 0 }}
                                        animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
                                        transition={{ duration: 0.3, delay: 2.7 }}
                                    >
                                        <h3 className="text-sm sm:text-base md:text-xl lg:text-3xl ml-2 font-bold text-white mb-2 md:mb-4 lg:mb-6 font-merriweather px-2">
                                            Recognized for excellence in Ayushman Bharat & Rajiv
                                            Aarogyasri.
                                        </h3>
                                        <p className="text-[9px] sm:text-xs md:text-sm lg:text-base ml-5 text-white max-w-[85%] sm:max-w-[85%] md:max-w-md lg:max-w-md">
                                            This certificate is awarded to Life Hospital, Kamareddy for
                                            exemplary performance under Ayushman Bharat Pradhan Mantri Jan
                                            Arogya Yojana (AB PM-JAY)-Rajiv Aarogyasri in the State of
                                            Telangana on 26 January 2024
                                        </p>
                                    </motion.div>
                                </motion.div>

                                {/* Yellow Blob - Fixed position and text alignment */}
                                <motion.div
                                    className="absolute w-[90%] sm:w-[95%] h-[90%] sm:h-[95%] z-20 top-[5px] left-[7%] sm:left-[5%] md:left-[10px] lg:left-[20px]"
                                    initial={{opacity: 0, y: -400, scale: 0.8}}
                                    animate={
                                        inView2
                                            ? {
                                                opacity: [0, 1, 1, 0],
                                                y: [-400, 0, 0, 800],
                                                scale: [0.8, 1, 1, 0.8],
                                                rotateZ: [0, 0, 0, 180],
                                            }
                                            : { opacity: 0 }
                                    }
                                    transition={{
                                        duration: 4,
                                        times: [0, 0.2, 0.7, 1],
                                        delay: 0.5,
                                        ease: "easeInOut" // Smoother animation
                                    }}
                                >
                                    <BlobSVG color="#F9D020" className="w-full h-full" />
                                    {/* Text on Yellow Blob - Moved text 2px to the left for mobile */}
                                    <motion.div
                                        className="absolute inset-0 flex flex-col items-center lg:items-start justify-center p-4 sm:p-6 md:p-8 lg:p-12 text-center lg:text-left"
                                        style={{ paddingLeft: "calc(1rem + 2px)" }} // Shifted text 2px left
                                        initial={{ opacity: 0 }}
                                        animate={inView2 ? { opacity: [0, 1, 0] } : { opacity: 0 }}
                                        transition={{
                                            duration: 2.2,
                                            times: [0, 0.3, 1],
                                            delay: 0.7,
                                            ease: "easeInOut" // Smoother animation
                                        }}
                                    >
                                        <h3
                                            className="font-[500] text-sm sm:text-base md:text-xl lg:text-2xl leading-[120%] tracking-[0.02em] text-white mb-2 md:mb-4 lg:mb-6 px-2"
                                            style={{ fontFamily: "Merriweather, serif" }}
                                        >
                                            Recognized for excellence in Ayushman Bharat & Rajiv
                                            Aarogyasri.
                                        </h3>
                                        <p
                                            className="font-[400] text-[9px] sm:text-xs md:text-sm lg:text-lg leading-[140%] tracking-[0.02em] text-white max-w-[85%] sm:max-w-[85%] md:max-w-md lg:max-w-xl"
                                            style={{ fontFamily: "Merriweather, serif" }}
                                        >
                                            This Certificate Is Awarded To Life Hospital, Kamareddy For
                                            Exemplary Performance Under Ayushman Bharat Pradhan Mantri
                                            Jan Arogya Yojana (AB PM-JAY)-Rajiv Aarogyasri In The State
                                            Of Telangana On 26 January 2024
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Section 3 - Desktop Appointment Button */}
            <div
                ref={ref3}
                className="min-h-[100px] md:min-h-[150px] lg:min-h-[200px] mt-[-40px] md:mt-[-60px] lg:mt-[-100px] flex items-center justify-center py-6 md:py-8 lg:py-12 relative hidden md:block"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="relative mx-auto rounded-xl overflow-hidden shadow-xl cursor-pointer flex items-center justify-center"
                        style={{
                            width: "80%",
                            maxWidth: "904px",
                            height: "90px",
                            backgroundColor: "#F9D020",
                        }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={inView3 ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 14,
                            delay: 0.2,
                        }}
                        onClick={() => setIsModalOpen(true)}
                        whileHover={{ scale: 1.02 }} // Subtle hover effect
                        whileTap={{ scale: 0.98 }} // Subtle tap effect
                    >
                        <div className="flex items-center justify-center w-full">
                            <motion.h2
                                style={{
                                    fontFamily: "Merriweather, serif",
                                    fontWeight: 400,
                                    fontSize: "clamp(18px, 4vw, 38px)",
                                    lineHeight: "100%",
                                    letterSpacing: "2%",
                                    color: "#06009E",
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                            >
                                Request Appointment
                            </motion.h2>
                            <motion.div
                                className="ml-3 md:ml-6"
                                initial={{ opacity: 0, x: -10 }}
                                animate={inView3 ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                            >
                                <ArrowRight size={24} color="#06009E" strokeWidth={2.5} />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Version Appointment Button */}
            <div className="block md:hidden my-8">
                <motion.div
                    className="relative mx-auto rounded-xl overflow-hidden shadow-xl cursor-pointer flex items-center justify-center"
                    style={{
                        width: "90%",
                        maxWidth: "350px",
                        height: "60px",
                        backgroundColor: "#F9D020",
                    }}
                    onClick={() => setIsModalOpen(true)}
                    whileHover={{ scale: 1.02 }} // Subtle hover effect
                    whileTap={{ scale: 0.98 }} // Subtle tap effect
                >
                    <div className="flex items-center justify-center w-full px-2">
                        <h2
                            style={{
                                fontFamily: "Merriweather, serif",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "120%",
                                letterSpacing: "0.02em",
                                color: "#06009E",
                            }}
                        >
                            Request Appointment
                        </h2>
                        <div className="ml-2">
                            <ArrowRight size={20} color="#06009E" strokeWidth={2.5} />
                        </div>
                    </div>
                </motion.div>
            </div>

            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default WhyChooseSection;