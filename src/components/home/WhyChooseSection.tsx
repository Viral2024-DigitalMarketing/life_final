"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const BlobSVG = ({ color, className = "", rotation = 0 }) => {
    return (
        <svg
            viewBox="0 0 662 546"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-full ${className}`}
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <path
                d="M92.25 3.68403C45.4408 13.56 23.6976 48.7734 12.3861 86.54C-6.09523 148.556 0.0121572 215.99 10.4151 279.56C22.2789 352.309 42.4588 433.343 99.3909 494.683C121.339 518.256 148.032 538.574 184.959 543.921C225.897 549.902 265.16 537.021 301.971 525.799C343.688 513.191 383.764 497.489 421.7 478.889C498.276 441.51 565.296 392.915 619.463 335.494C648.701 304.355 675.944 264.921 652.815 224.522C631.994 188.347 584.399 165.842 544.035 145.594C469.233 108.047 391.196 75.0568 310.599 46.9067C249.525 25.5848 178.454 -2.70276 111.124 1.24388C104.734 1.58431 98.4157 2.40112 92.25 3.68403Z"
                fill={color}
            />
        </svg>
    )
}

const WhyChooseSection = () => {
    const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
    const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
    const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })

    // Track animation states
    const animationStarted = useRef(false)
    const section1Animated = useRef(false)
    const section2Animated = useRef(false)
    const section3Animated = useRef(false)

    // Control animation sequences
    useEffect(() => {
        if (inView1 && !section1Animated.current) {
            section1Animated.current = true
            animationStarted.current = true
        }
    }, [inView1])

    useEffect(() => {
        if (inView2 && !section2Animated.current && animationStarted.current) {
            section2Animated.current = true
        }
    }, [inView2])

    useEffect(() => {
        if (inView3 && !section3Animated.current && section2Animated.current) {
            section3Animated.current = true
        }
    }, [inView3])

    return (
        <div className="bg-white font-['Abhaya_Libre'] overflow-hidden">
            {/* Header */}
            <div className="py-8 px-4 md:py-10">
                <h2 className="text-3xl lg:text-5xl font-bold text-center text-black mb-6 md:mb-10">
                    Why Choose Life Hospital
                </h2>
            </div>

            {/* Section 1 - Desktop View */}
            <motion.div
                ref={ref1}
                className="min-h-screen flex items-center justify-center py-20 hidden lg:flex relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto ml-0 mt-[-10px] px-4">
                    <div className="relative w-full max-w-6xl mt-[-250px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
                        <div className="relative w-full lg:w-1/2 h-[700px] flex items-center justify-center">
                            {/* Bottom Blob (Purple) - Falls to section 2 */}
                            <motion.div
                                className="absolute w-full h-full z-[3] top-[-60px] right-[-30px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    section1Animated.current
                                        ? { opacity: [1, 1, 0], scale: [1, 1, 0.8], x: [0, 0, 100], rotateZ: [0, 0, 180] }
                                        : { opacity: 1, scale: 1 }
                                }
                                transition={{
                                    duration: 2.5,
                                    times: [0, 0.4, 1],
                                    delay: 1.2,
                                }}
                            >
                                <BlobSVG color="#7272AF" />
                            </motion.div>

                            {/* Middle Blob (Yellow) - Falls to section 2 */}
                            <motion.div
                                className="absolute w-full h-full z-[4] top-[-90px] right-[-50px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    section1Animated.current
                                        ? { opacity: [1, 1, 0], scale: [1, 1, 0.8], x: [0, 0, 100], rotateZ: [0, 0, 180] }
                                        : { opacity: 1, scale: 1 }
                                }
                                transition={{
                                    duration: 2.5,
                                    times: [0, 0.4, 1],
                                    delay: 1.4,
                                }}
                            >
                                <BlobSVG color="#F9D020" />
                            </motion.div>

                            {/* Top Blob (Cyan) - Stays in section 1 */}
                            <motion.div
                                className="absolute w-full h-full z-[5] top-[-120px] right-[-70px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <BlobSVG color="#6FCBCF" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 font-merriweather">
                                        Recognized for excellence in Ayushman Bharat & Rajiv Aarogyasri.
                                    </h3>
                                    <p className="text-lg ml-[-5px] text-black/80 max-w-lg">
                                        This certificate is awarded to Life Hospital, Kamareddy for exemplary performance under Ayushman
                                        Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)-Rajiv Aarogyasri in the State of Telangana on 26
                                        January 2024
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="w-full lg:w-1/2 relative z-[10]"
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView1 ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <img
                                src="/images/certi_why.svg"
                                alt="Certified Badge"
                                className="absolute top-[-80px] right-[-60px] w-[400px] h-[400px] object-contain z-30"
                            />

                            <img
                                src="/images/why_image.svg"
                                alt="Hospital Scene"
                                className="w-full h-[447px] object-cover rounded-2xl shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Animated Blobs that Fall from Section 1 to Section 2 - With rotation - Only one of each color */}
                {inView1 && (
                    <>
                        <motion.div
                            className="absolute w-[500px] h-[500px] z-[20]"
                            initial={{ x: -100, y: 100, opacity: 0 }}
                            animate={{
                                x: [-100, 300, 600, 800],
                                y: [100, 600, 1000, 1400],
                                opacity: [0, 1, 1, 0],
                                rotate: [0, 120, 240, 360],
                            }}
                            transition={{
                                duration: 3,
                                delay: 1.5,
                                times: [0, 0.3, 0.7, 1],
                                ease: "easeInOut",
                            }}
                        >
                            <BlobSVG color="#7272AF" />
                        </motion.div>

                        <motion.div
                            className="absolute w-[520px] h-[520px] z-[21]"
                            initial={{ x: -50, y: 80, opacity: 0 }}
                            animate={{
                                x: [-50, 280, 580, 820],
                                y: [80, 580, 1020, 1420],
                                opacity: [0, 1, 1, 0],
                                rotate: [0, 120, 240, 360],
                            }}
                            transition={{
                                duration: 3.2,
                                delay: 1.7,
                                times: [0, 0.3, 0.7, 1],
                                ease: "easeInOut",
                            }}
                        >
                            <BlobSVG color="#F9D020" />
                        </motion.div>
                    </>
                )}
            </motion.div>

            {/* Section 2 - Desktop View - Purple blob with text that stays */}
            <motion.div
                ref={ref2}
                className="min-h-screen flex items-center justify-center py-20 relative hidden lg:flex"
                initial={{ opacity: 0, y: 50 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <div className="container mt-[-400px] mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 relative">
                            <img
                                src="/images/why_image.svg"
                                alt="Medical Team"
                                className="w-[551px] h-[447px] ml-[90px] object-cover rounded-[20px] shadow-xl"
                            />
                            <img
                                src="/images/cert2.svg"
                                alt="Certified Badge"
                                className="absolute top-[-80px] right-[-5px] w-[450px] h-[450px] object-contain z-10"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            {/* Stacked cards container - Increased height for better content display */}
                            <div className="relative h-[500px]">
                                {/* Bottom card (Purple) - Arrived from section 1 with text that stays */}
                                <motion.div
                                    className="absolute w-full h-full z-10"
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
                                    <div className="absolute inset-0 flex flex-col items-start justify-center px-12 py-4 text-left">
                                        <h3
                                            className="font-[500] text-2xl leading-[120%] tracking-[0.02em] text-[#002622] mb-6"
                                            style={{ fontFamily: "Be Vietnam Pro" }}
                                        >
                                            Recognized for excellence in Ayushman Bharat & Rajiv Aarogyasri.
                                        </h3>
                                        <p
                                            className="mt-4 font-[400] text-lg leading-[140%] tracking-[0.02em] text-[#002622] max-w-xl"
                                            style={{ fontFamily: "Be Vietnam Pro" }}
                                        >
                                            This Certificate Is Awarded To Life Hospital, Kamareddy For Exemplary Performance Under Ayushman
                                            Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)-Rajiv Aarogyasri In The State Of Telangana On
                                            26 January 2024
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Top card (Yellow) - Arrives then falls to section 3 */}
                                <motion.div
                                    className="absolute w-full h-full z-20 top-[-20px] left-[20px]"
                                    initial={{ opacity: 0, y: -400, scale: 0.8 }}
                                    animate={
                                        inView2 && !section3Animated.current
                                            ? { opacity: [0, 1, 1, 0], y: [-400, 0, 0, 800], scale: [0.8, 1, 1, 0.8], rotateZ: [0, 0, 0, 180] }
                                            : { opacity: 0 }
                                    }
                                    transition={{
                                        duration: 4,
                                        times: [0, 0.2, 0.7, 1],
                                        delay: 0.5,
                                    }}
                                >
                                    <BlobSVG color="#F9D020" className="w-full h-full" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation for yellow blob falling to become the appointment card */}
                {inView2 && (
                    <motion.div
                        className="absolute w-[900px] h-[340px] left-1/2 transform -translate-x-1/2 z-[25]"
                        initial={{ y: 0, opacity: 0, width: "520px", height: "520px" }}
                        animate={
                            inView2
                                ? {
                                    y: [0, 700, 1100],
                                    opacity: [0, 1, 1],
                                    width: ["520px", "520px", "1214px"],
                                    height: ["520px", "520px", "100px"],
                                    borderRadius: ["50%", "50%", "0.75rem"],
                                    rotate: [0, 180, 360],
                                }
                                : {}
                        }
                        transition={{
                            duration: 2.5,
                            delay: 3,
                            times: [0, 0.7, 1],
                            ease: "easeInOut",
                        }}
                    >
                        <BlobSVG color="#F9D020" />
                    </motion.div>
                )}
            </motion.div>

            {/* Section 3 - Desktop View - Yellow appointment card */}
            <div
                ref={ref3}
                className="min-h-[300px] mt-[-180px] lg:block hidden flex items-center justify-center py-18 relative"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="relative mx-auto rounded-xl overflow-hidden shadow-xl"
                        style={{ width: "1214px", height: "100px", backgroundColor: "#F9D020" }}
                        initial={{ opacity: 0, y: -200 }}
                        animate={inView3 ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 14,
                            delay: 0.2,
                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.h2
                                style={{
                                    fontFamily: "Merriweather, serif",
                                    fontWeight: 400,
                                    fontSize: "52px",
                                    lineHeight: "100%",
                                    letterSpacing: "2%",
                                    color: "#06009E",
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Request Appointment
                            </motion.h2>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Layout - Significantly improved and optimized */}
            <div className="block lg:hidden">
                {/* Mobile View - Card 1 with animated blobs */}
                <motion.div
                    ref={ref1}
                    className="py-6 px-4 md:py-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-full mb-12 md:mb-16">
                        {/* Single animated blob for mobile - simplified for better performance */}
                        <motion.div
                            className="relative w-full h-[400px] mx-auto z-[3]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <BlobSVG color="#6FCBCF" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center">
                                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6 font-merriweather">
                                    Recognized for excellence in Ayushman Bharat & Rajiv Aarogyasri.
                                </h3>
                                <p className="text-sm md:text-base text-black/80 mx-4 md:mx-6">
                                    This certificate is awarded to Life Hospital, Kamareddy for exemplary performance under Ayushman
                                    Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)-Rajiv Aarogyasri in the State of Telangana on 26
                                    January 2024
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Single falling card animation for mobile - one animation instead of multiple */}
                    {inView1 && section1Animated.current && (
                        <motion.div
                            className="fixed w-full h-[400px] z-[35] pointer-events-none"
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: [0, 400], opacity: [0, 1, 0], rotate: [0, 180] }}
                            transition={{ duration: 1.8, delay: 1.5 }}
                        >
                            <BlobSVG color="#7272AF" />
                        </motion.div>
                    )}

                    {/* Mobile Image 1 */}
                    <motion.div
                        className="relative mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView1 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img
                            src="/images/why_image.svg"
                            alt="Hospital Scene"
                            className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl"
                        />
                        <img
                            src="/images/certi_why.svg"
                            alt="Certified Badge"
                            className="absolute top-[-20px] right-[-5px] w-32 h-32 md:w-40 md:h-40 object-contain z-30"
                        />
                    </motion.div>
                </motion.div>

                {/* Mobile View - Purple card for Section 2 with text */}
                <motion.div
                    ref={ref2}
                    className="py-6 px-4 md:py-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {/* Stacked cards container - Increased height */}
                    <div className="relative w-full mb-12 md:mb-16 h-[400px]">
                        {/* Bottom card (Purple) - With text */}
                        <motion.div
                            className="absolute w-full h-full z-10"
                            initial={{ opacity: 0, y: -200, scale: 0.9 }}
                            animate={inView2 ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 15,
                                delay: 0.2,
                            }}
                        >
                            <BlobSVG color="#7272AF" className="w-full h-full" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center">
                                <h3
                                    className="text-xl md:text-2xl font-bold text-[#002622] mb-4 md:mb-6"
                                    style={{ fontFamily: "Merriweather, serif" }}
                                >
                                    Recognized for excellence in Ayushman Bharat & Rajiv Aarogyasri.
                                </h3>
                                <p
                                    className="text-sm md:text-base text-[#002622]/80 mx-3 md:mx-5"
                                    style={{ fontFamily: "Merriweather, serif" }}
                                >
                                    This Certificate Is Awarded To Life Hospital, Kamareddy For Exemplary Performance Under Ayushman
                                    Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)-Rajiv Aarogyasri In The State Of Telangana On 26
                                    January 2024
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile Image 2 */}
                    <motion.div
                        className="relative mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img
                            src="/images/why_image.svg"
                            alt="Medical Team"
                            className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl"
                        />
                        <img
                            src="/images/cert2.svg"
                            alt="Certified Badge"
                            className="absolute top-[-20px] right-[-5px] w-32 h-32 md:w-40 md:h-40 object-contain z-10"
                        />
                    </motion.div>

                    {/* Single Yellow card falling animation for mobile */}
                    {inView2 && section2Animated.current && (
                        <motion.div
                            className="fixed w-full z-[40] pointer-events-none"
                            initial={{
                                y: 0,
                                opacity: 0,
                                height: "320px",
                                borderRadius: "50%",
                                backgroundColor: "#F9D020",
                                rotate: 0,
                            }}
                            animate={{
                                y: [0, 400],
                                opacity: [0, 1],
                                height: ["320px", "72px"],
                                borderRadius: ["50%", "0.75rem"],
                                rotate: [0, 360],
                            }}
                            transition={{ duration: 1.8, delay: 1.2 }}
                        />
                    )}
                </motion.div>

                {/* Mobile Yellow Appointment Section */}
                <motion.div
                    ref={ref3}
                    className="block lg:hidden py-6 px-4 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="mx-auto rounded-xl overflow-hidden shadow-xl flex items-center justify-center"
                        style={{
                            width: "100%",
                            height: "72px",
                            backgroundColor: "#F9D020",
                        }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={inView3 ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 12,
                            delay: 0.2,
                        }}
                    >
                        <motion.h2
                            style={{
                                fontFamily: "Merriweather, serif",
                                fontWeight: 400,
                                color: "#06009E",
                                fontSize: "28px",
                                lineHeight: "1.2",
                            }}
                            className="px-4 text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            Request Appointment
                        </motion.h2>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default WhyChooseSection