import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
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

  const yellowControls1 = useAnimation();
  const violetControls = useAnimation();
  const yellowBlobFromSecondSection = useAnimation();

  const [yellowMoved, setYellowMoved] = useState(false);

  useEffect(() => {
    if (inView1) {
      yellowControls1.start({ x: '100%', y: '100%', opacity: 1, rotate: 360 });
      violetControls.start({ x: '90%', y: '100%', opacity: 1, rotate: 360 });
    }

    if (inView2 && !yellowMoved) {
      yellowBlobFromSecondSection.start({
        y: '150vh',
        rotate: 360,
        opacity: 1,
        transition: { duration: 2, ease: 'easeInOut' },
      }).then(() => {
        setYellowMoved(true);
      });
    }
  }, [inView1, inView2, yellowMoved, yellowControls1, violetControls, yellowBlobFromSecondSection]);

  return (
      <div className="bg-white font-['Abhaya_Libre']">
        {/* Header */}
        <div className="py-10 px-4">
          <h2 className="text-4xl font-bold text-center text-black mb-10">Why Choose Life Hospital</h2>
        </div>

        {/* Section 1 */}
        <motion.div ref={ref1} className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <div className="relative w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8">
              <div className="relative w-full lg:w-1/2 h-[600px] flex items-center justify-center">
                {/* Violet Card */}
                <motion.div
                    className="absolute w-[95%] h-[95%] z-0 top-[100px] left-[100px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView1 ? violetControls : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <BlobSVG color="#7272AF" />
                </motion.div>

                {/* Yellow Card */}
                <motion.div
                    className="absolute w-[98%] h-[98%] z-10 top-[60px] left-[60px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView1 ? yellowControls1 : {}}
                    transition={{ duration: 0.8 }}
                >
                  <BlobSVG color="#F9D020" />
                </motion.div>

                {/* Cyan Card */}
                <motion.div
                    className="relative w-full h-full z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView1 ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <BlobSVG color="#6FCBCF" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Recognized for Excellence</h3>
                    <p className="text-lg text-black/80 max-w-md">
                      We are proud to be a trusted name in healthcare, known for compassion and cutting-edge care.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView1 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format"
                    alt="Hospital Scene"
                    className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div ref={ref2} className="min-h-screen flex items-center justify-center py-20 relative">
          {/* Yellow Blob Animation Down */}
          {!yellowMoved && (
              <motion.div
                  className="absolute w-[300px] h-[300px] z-50 top-0 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: 0, rotate: 0 }}
                  animate={yellowBlobFromSecondSection}
              >
                <BlobSVG color="#F9D020" />
              </motion.div>
          )}

          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView2 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
              >
                <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format"
                    alt="Medical Team"
                    className="w-full h-[600px] object-cover rounded-2xl shadow-xl"
                />
              </motion.div>

              {/* Violet Card Only */}
              <motion.div
                  className="w-full lg:w-1/2 relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
              >
                <BlobSVG color="#7272AF" className="w-full h-[300px]" />
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                  <h3 className="text-2xl font-semibold text-white">Trusted Team of Experts</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Section 3 - No Yellow Blob */}
        <motion.div ref={ref3} className="min-h-screen flex items-center justify-center py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
                className="relative w-full max-w-4xl mx-auto h-[200px] bg-[#F9D020] rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                animate={inView3 ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 1.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView3 ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-4xl font-bold text-white"
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
