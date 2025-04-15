import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AppointmentModal from "@/components/shared/AppointmentModal";

const BlobShape = ({ fillColor }) => (
    <svg width="199" height="188" viewBox="0 0 199 188" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
            d="M187.629 11.8105C198.808 20.9184 199.965 35.7142 197.988 50.0936C194.736 73.7309 184.252 96.1867 173.062 116.863C160.317 140.503 144.225 165.995 121.008 180.121C112.055 185.567 102.248 189.303 91.7017 186.642C79.9928 183.687 71.2226 174.465 62.87 166.143C53.3779 156.683 44.7567 146.389 37.1103 135.384C21.566 113.03 10.1069 88.0958 3.26332 61.7337C-0.417631 47.4284 -2.48179 30.5005 8.99343 19.4724C19.3556 9.52579 34.9769 7.60006 48.4035 5.5534C73.3309 1.74552 98.5152 -0.101189 123.724 0.0302952C142.823 0.136374 165.502 -0.927925 182.93 8.65561C184.588 9.56389 186.161 10.6198 187.629 11.8105Z"
            fill={fillColor}
        />
    </svg>
);

const EmpoweringSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Blob controls
    const reliefBlobControls = useAnimation();
    const rebuildBlobControls = useAnimation();
    const recoverBlobControls = useAnimation();

    // Text controls
    const reliefTextControls = useAnimation();
    const rebuildTextControls = useAnimation();
    const recoverTextControls = useAnimation();

    // Top aligned text controls
    const topReliefTextControls = useAnimation();
    const topRebuildTextControls = useAnimation();
    const topRecoverTextControls = useAnimation();

    // Logo controls
    const logoControls = useAnimation();
    const blobsContainerControls = useAnimation();

    useEffect(() => {
        if (inView) {
            const animateSequence = async () => {
                await new Promise((resolve) => setTimeout(resolve, 500));

                // 1. Yellow Card Animation (Relief)
                await Promise.all([
                    reliefBlobControls.start({
                        fill: ["#000000", "#F9D020"],
                        transition: { duration: 1 }
                    }),
                    reliefTextControls.start({
                        color: ["#000000", "#F9D020"],
                        transition: { duration: 1 }
                    })
                ]);

                // 2. Violet Card Animation (Rebuild)
                await Promise.all([
                    rebuildBlobControls.start({
                        fill: ["#000000", "#7272AF"],
                        transition: { duration: 1 }
                    }),
                    rebuildTextControls.start({
                        color: ["#000000", "#7272AF"],
                        transition: { duration: 1 }
                    })
                ]);

                // 3. Teal Card Animation (Recover)
                await Promise.all([
                    recoverBlobControls.start({
                        fill: ["#000000", "#6FCBCF"],
                        transition: { duration: 1 }
                    }),
                    recoverTextControls.start({
                        color: ["#000000", "#6FCBCF"],
                        transition: { duration: 1 }
                    })
                ]);

                // 4. Hide all original headings
                await Promise.all([
                    reliefTextControls.start({
                        opacity: 0,
                        transition: { duration: 0.3 },
                    }),
                    rebuildTextControls.start({
                        opacity: 0,
                        transition: { duration: 0.3 },
                    }),
                    recoverTextControls.start({
                        opacity: 0,
                        transition: { duration: 0.3 },
                    })
                ]);

                // 5. Show the top headings one by one in sequence
                await topReliefTextControls.start({
                    opacity: 1,
                    transition: { duration: 0.5 },
                });

                await topRebuildTextControls.start({
                    opacity: 1,
                    transition: { duration: 0.5 },
                });

                await topRecoverTextControls.start({
                    opacity: 1,
                    transition: { duration: 0.5 },
                });

                // 6. Fade out blobs and show logo
                await blobsContainerControls.start({
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.5 }
                });

                await logoControls.start({
                    opacity: 1,
                    scale: [0.5, 1.2, 1],
                    transition: { duration: 1, times: [0, 0.7, 1] }
                });
            };

            animateSequence();
        }
    }, [
        inView,
        reliefBlobControls,
        rebuildBlobControls,
        recoverBlobControls,
        reliefTextControls,
        rebuildTextControls,
        recoverTextControls,
        topReliefTextControls,
        topRebuildTextControls,
        topRecoverTextControls,
        logoControls,
        blobsContainerControls
    ]);

    return (
        <section ref={ref} className="relative bg-[#F4F9F2] w-full py-[60px] px-4 md:px-12 lg:px-24 overflow-hidden">
            {/* Desktop Layout (md and up) */}
            <div className="hidden md:grid max-w-[1440px] mx-auto grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left Content */}
                <div className="text-left">
                    <h2 className="text-[42px] md:text-[52px] font-extrabold leading-[110%] text-black font-['Abhaya_Libre'] mb-5 sm:mb-6">
                        Empowering <br className="hidden sm:block" />
                        <span className="text-[#06009E] font-semibold">Health</span> for All
                    </h2>
                    <p className="text-[16px] text-gray-600 mb-6 max-w-md font-['Be_Vietnam_Pro']">
                        Dedicated to providing accessible, high-quality healthcare for
                        everyone, emphasizing patient-centered care and a commitment to
                        continuous improvement.
                    </p>
                    <button
                        className="w-[460px] h-[57px] rounded-[32px] border border-[#06009E] text-[#06009E] font-['Ranade'] font-medium text-[24px] leading-[100%] tracking-[0%] px-4 py-3 hover:bg-[#06009E] hover:text-white transition"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Request your appointment today.
                    </button>
                </div>

                {/* Right - Desktop Animation */}
                <div className="relative w-full max-w-[626px] h-[476.21px] flex justify-center items-center">
                    {/* Top aligned headings that will appear in sequence */}
                    <div className="absolute top-[50px] left-0 w-full flex justify-center items-center">
                        <motion.span
                            className="text-3xl font-semibold text-[#F9D020] mx-4"
                            initial={{ opacity: 0 }}
                            animate={topReliefTextControls}
                        >
                            Relief
                        </motion.span>
                        <motion.span
                            className="text-3xl font-semibold text-[#7272AF] mx-4"
                            initial={{ opacity: 0 }}
                            animate={topRebuildTextControls}
                        >
                            Rebuild
                        </motion.span>
                        <motion.span
                            className="text-3xl font-semibold text-[#6FCBCF] mx-4"
                            initial={{ opacity: 0 }}
                            animate={topRecoverTextControls}
                        >
                            Recover
                        </motion.span>
                    </div>

                    {/* Logo */}
                    <motion.div
                        className="absolute inset-0 flex items-center mt-[200px] justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={logoControls}
                    >
                        <img
                            src="/images/emp_logo.svg"
                            alt="Logo"
                            className="w-[300px] h-[300px]"
                        />
                    </motion.div>

                    {/* Blobs Container - Desktop */}
                    <motion.div
                        className="relative w-full h-full"
                        animate={blobsContainerControls}
                    >
                        {/* Yellow - Relief */}
                        <div className="absolute bottom-1/4 left-1/2 translate-x-[-161%] w-[199px] h-[188px] flex items-center justify-center">
                            <div className="relative w-full h-full rotate-[20deg]">
                                <motion.div initial={{ fill: "#000000" }} animate={reliefBlobControls}>
                                    <BlobShape fillColor="#F9D020" />
                                </motion.div>
                                <motion.span
                                    className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-3xl font-semibold"
                                    initial={{ color: "#000000" }}
                                    animate={reliefTextControls}
                                >
                                    Relief
                                </motion.span>
                            </div>
                        </div>

                        {/* Violet - Rebuild */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[199px] h-[188px] flex items-center justify-center">
                            <div className="mt-[100px] relative w-full h-full">
                                <motion.div initial={{ fill: "#000000" }} animate={rebuildBlobControls}>
                                    <BlobShape fillColor="#7272AF" />
                                </motion.div>
                                <motion.span
                                    className="absolute top-[-35px] left-1/2 -translate-x-1/2 text-3xl font-semibold"
                                    initial={{ color: "#000000" }}
                                    animate={rebuildTextControls}
                                >
                                    Rebuild
                                </motion.span>
                            </div>
                        </div>

                        {/* Teal - Recover */}
                        <div className="absolute bottom-1/4 right-0 translate-x-1/4 w-[199px] h-[188px] flex items-center justify-center">
                            <div className="relative w-full h-full rotate-[-20deg]">
                                <motion.div initial={{ fill: "#000000" }} animate={recoverBlobControls}>
                                    <BlobShape fillColor="#6FCBCF" />
                                </motion.div>
                                <motion.span
                                    className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-3xl font-semibold"
                                    initial={{ color: "#000000" }}
                                    animate={recoverTextControls}
                                >
                                    Recover
                                </motion.span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Layout (sm and below) */}
            <div className="md:hidden max-w-[1440px] mx-auto flex flex-col items-center">
                {/* Content */}
                <div className="text-center w-full mb-8">
                    <h2 className="text-[36px] font-extrabold leading-[110%] text-black font-['Abhaya_Libre'] mb-5">
                        Empowering <span className="text-[#06009E] font-semibold">Health</span> for All
                    </h2>
                    <p className="text-[16px] text-gray-600 mb-6 max-w-full mx-auto font-['Be_Vietnam_Pro']">
                        Dedicated to providing accessible, high-quality healthcare for
                        everyone, emphasizing patient-centered care and a commitment to
                        continuous improvement.
                    </p>
                    <button
                        className="w-full sm:w-[90%] h-[52px] rounded-[32px] border border-[#06009E] text-[#06009E] font-['Ranade'] font-medium text-[18px] leading-[100%] tracking-[0%] px-4 py-3 hover:bg-[#06009E] hover:text-white transition"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Request your appointment today.
                    </button>
                </div>

                {/* Mobile Animation Section */}
                <div className="relative w-full max-w-[626px] h-[300px] mx-auto flex justify-center items-center">
                    {/* Top aligned headings that will appear in sequence */}
                    <div className="absolute top-0 left-0 w-full flex justify-center items-center space-x-4">
                        <motion.span
                            className="text-xl font-semibold text-[#F9D020]"
                            initial={{ opacity: 0 }}
                            animate={topReliefTextControls}
                        >
                            Relief
                        </motion.span>
                        <motion.span
                            className="text-xl font-semibold text-[#7272AF]"
                            initial={{ opacity: 0 }}
                            animate={topRebuildTextControls}
                        >
                            Rebuild
                        </motion.span>
                        <motion.span
                            className="text-xl font-semibold text-[#6FCBCF]"
                            initial={{ opacity: 0 }}
                            animate={topRecoverTextControls}
                        >
                            Recover
                        </motion.span>
                    </div>

                    {/* Logo */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={logoControls}
                    >
                        <img
                            src="/images/emp_logo.svg"
                            alt="Logo"
                            className="w-[120px] h-[120px]"
                        />
                    </motion.div>

                    {/* Blobs Container - Mobile */}
                    <motion.div
                        className="relative w-full h-full flex justify-center items-center"
                        animate={blobsContainerControls}
                    >
                        {/* Yellow - Relief */}
                        <div className="absolute bottom-1/2 left-0 w-[100px] h-[95px]">
                            <div className="relative w-full h-full rotate-[20deg]">
                                <motion.div initial={{ fill: "#000000" }} animate={reliefBlobControls}>
                                    <BlobShape fillColor="#F9D020" />
                                </motion.div>
                                <motion.span
                                    className="absolute top-[-25px] left-1/2 -translate-x-1/2 text-lg font-semibold"
                                    initial={{ color: "#000000" }}
                                    animate={reliefTextControls}
                                >
                                    Relief
                                </motion.span>
                            </div>
                        </div>

                        {/* Violet - Rebuild */}
                        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[100px] h-[95px]">
                            <div className="relative w-full h-full">
                                <motion.div initial={{ fill: "#000000" }} animate={rebuildBlobControls}>
                                    <BlobShape fillColor="#7272AF" />
                                </motion.div>
                                <motion.span
                                    className="absolute top-[-25px] left-1/2 -translate-x-1/2 text-lg font-semibold"
                                    initial={{ color: "#000000" }}
                                    animate={rebuildTextControls}
                                >
                                    Rebuild
                                </motion.span>
                            </div>
                        </div>

                        {/* Teal - Recover */}
                        <div className="absolute bottom-1/2 right-0 w-[100px] h-[95px]">
                            <div className="relative w-full h-full rotate-[-20deg]">
                                <motion.div initial={{ fill: "#000000" }} animate={recoverBlobControls}>
                                    <BlobShape fillColor="#6FCBCF" />
                                </motion.div>
                                <motion.span
                                    className="absolute top-[-25px] left-1/2 -translate-x-1/2 text-lg font-semibold"
                                    initial={{ color: "#000000" }}
                                    animate={recoverTextControls}
                                >
                                    Recover
                                </motion.span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Appointment Modal */}
            <AppointmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default EmpoweringSection;