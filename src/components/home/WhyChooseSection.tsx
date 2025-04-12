import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlobSVG = ({ color, className = "" }) => {
  return (
      <svg
          viewBox="0 0 662 546"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full ${className}`}
      >
        <path
            d="M92.25 3.68403C45.4408 13.56 23.6976 48.7734 12.3861 86.54C-6.09523 148.556 0.0121572 215.99 10.4151 279.56C22.2789 352.309 42.4588 433.343 99.3909 494.683C121.339 518.256 148.032 538.574 184.959 543.921C225.897 549.902 265.16 537.021 301.971 525.799C343.688 513.191 383.764 497.489 421.7 478.889C498.276 441.51 565.296 392.915 619.463 335.494C648.701 304.355 675.944 264.921 652.815 224.522C631.994 188.347 584.399 165.842 544.035 145.594C469.233 108.047 391.196 75.0568 310.599 46.9067C249.525 25.5848 178.454 -2.70276 111.124 1.24388C104.734 1.58431 98.4157 2.40112 92.25 3.68403Z"
            fill={color}
        />
      </svg>
  );
};

const WhyChooseSection = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.4 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (inView1) {
      // Any other animations related to the first section can remain here
    }
  }, [inView1]);

  return (
      <div className="bg-white font-['Abhaya_Libre']">
        {/* Header */}
        <div className="py-8 px-4">
          <h2 className="text-5xl font-bold text-center text-black mb-10">Why Choose Life Hospital</h2>
        </div>

        {/* Section 1 */}
        <motion.div ref={ref1} className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto ml-[0px] mt-[-10px] px-4">
            <div className="relative w-full max-w-6xl mt-[-250px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
              <div className="relative w-full lg:w-1/2 h-[600px] flex items-center justify-center">
                {/* Cyan Card */}
                <motion.div
                    className="absolute w-full h-full z-[5] top-[-120px] right-[-70px]" // Moved up and to the right, behind the right-side image
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <BlobSVG color="#6FCBCF" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 font-merriweather">
                      Recognized for excellence in Ayushman Bharat & Rajiv Aarogyasri.
                    </h3>
                    <p className="text-sm ml-[-5px] text-black/80 max-w-md">
                      This certificate is awarded to Life Hospital, Kamareddy for exemplary performance under Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY)-Rajiv Aarogyasri in the State of Telangana on 26 January 2024
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                  className="w-full lg:w-1/2 relative z-[10]" // Placed this image above the Cyan Card with a higher z-index
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView1 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Certified Badge */}
                <img
                    src="/images/certi_why.svg" // Replace with the actual path of your certified image
                    alt="Certified Badge"
                    className="absolute top-[-80px] right-[-60px] w-[400px] h-[400px] object-contain z-30" // Adjust size and position as needed
                />

                <img
                    src="/images/why_image.svg"
                    alt="Hospital Scene"
                    className="w-full h-[447px] object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Section 2 */}
        <div ref={ref2} className="min-h-screen flex items-center justify-center py-20 relative">
          <div className="container mt-[-400px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                <img
                    src="/images/why_image.svg"
                    alt="Medical Team"
                    className="w-[551px] h-[447px] ml-[90px] object-cover rounded-[20px] shadow-xl" // Increased width, height, and border-radius
                />
                {/* Certified Badge */}
                <img
                    src="/images/cert2.svg" // Replace with the actual path of your certified image
                    alt="Certified Badge"
                    className="absolute top-[-80px] right-[-5px] w-[450px] h-[450px] object-contain z-10"
                />
              </div>

              {/* Violet Card Section */}
              <div className="w-full lg:w-1/2 relative">
                <BlobSVG
                    color="#7272AF"
                    className="w-full h-[300px] ml-[-90px] mt-[-140px] transform rotate-[-220deg]"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center px-10 text-left">
                  <h3
                      className="font-[500] ml-[15px] mt-[-180px] text-[36px] leading-[100%] tracking-[2%] text-[#002622]"
                      style={{ fontFamily: "Be Vietnam Pro" }}
                  >
                    Recognized for excellence in Ayushman Bharat & Rajiv Aarogyasri.
                  </h3>
                  <p
                      className="mt-6 font-[400] ml-[10px] text-[16px] leading-[123%] tracking-[2%] text-[#002622] capitalize"
                      style={{fontFamily: "Be Vietnam Pro"}}
                  >
                    This certificate is awarded to Life Hospital, Kamareddy for exemplary performance under Ayushman
                    Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY) - Rajiv Aarogyasri in the State of
                    Telangana <br/> on 26 January 2024.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* Section 3 - No Yellow Blob */}
        <motion.div ref={ref3} className="min-h-screen flex items-center justify-center py-18 relative">
          <div className="container mx-auto px-4">
            <motion.div
                className="relative mt-[-500px] mx-auto rounded-xl overflow-hidden shadow-xl"
                style={{ width: "1214px", height: "100px", backgroundColor: "#F9D020" }}
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                animate={inView3 ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 1.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    style={{
                      fontFamily: "Merriweather, serif",
                      fontWeight: 400,
                      fontSize: "52px",
                      lineHeight: "100%",
                      letterSpacing: "2%",
                      color: "#06009E"
                    }}
                >
                  Request Appointment
                </motion.h2>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
  );
};

export default WhyChooseSection;