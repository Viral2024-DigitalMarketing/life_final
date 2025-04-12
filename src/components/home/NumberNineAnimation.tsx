"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function NumberNineAnimation() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer to detect visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Scroll animation
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [2, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0, 1, 1, 0]);

    return (
        <div ref={sectionRef} className="h-[300px] flex justify-center items-center">
            {isVisible && (
                <motion.div
                    style={{ scale, y, opacity }}
                    className="text-[100px] font-bold text-blue-600"
                >
                    9
                </motion.div>
            )}
        </div>
    );
}
