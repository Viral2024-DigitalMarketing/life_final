'use client';
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import * as THREE from 'three';

const DexaSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [interacting, setInteracting] = useState(false);
    const [modelLoaded, setModelLoaded] = useState(false);

    // Performance flag for animation control
    const shouldAnimate = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
                shouldAnimate.current = entry.isIntersecting;
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current && observer) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Calculate DPR for optimal performance
    const getDpr = () => (typeof window === 'undefined' ? 1 : Math.min(window.devicePixelRatio, 1.5));

    // Camera controller with optimized zoom effects
    const CameraController = ({ active }: { active: boolean }) => {
        const { camera } = useThree();
        const initialPos = useRef(new THREE.Vector3(0, 0, 5));
        const targetPos = useRef(new THREE.Vector3(0, 0, 3.5));
        const time = useRef(0);
        const zoomingIn = useRef(true);
        const zoomCycleTime = 8; // seconds for complete zoom cycle

        useEffect(() => {
            camera.position.set(0, 0, 5);
            zoomingIn.current = true;
            time.current = 0;
        }, [camera]);

        useFrame((state, delta) => {
            if (!active || !shouldAnimate.current || !modelLoaded) return;

            time.current += delta;

            if (time.current > zoomCycleTime / 2) {
                zoomingIn.current = !zoomingIn.current;
                time.current = 0;
            }

            const progress = time.current / (zoomCycleTime / 2);
            const easedProgress = easeInOutSine(progress);

            const targetZ = zoomingIn.current
                ? THREE.MathUtils.lerp(initialPos.current.z, targetPos.current.z, easedProgress)
                : THREE.MathUtils.lerp(targetPos.current.z, initialPos.current.z, easedProgress);

            const targetY = THREE.MathUtils.lerp(0, zoomingIn.current ? 0.3 : -0.2, easedProgress);

            const newPos = new THREE.Vector3(camera.position.x, targetY, targetZ);
            camera.position.lerp(newPos, 0.05);
            camera.lookAt(0, 0, 0);
        });

        return null;
    };

    // Easing function for smooth animations
    const easeInOutSine = (x: number): number => {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    };

    // Optimized DexaModel component
    const DexaModel = () => {
        const modelRef = useRef<THREE.Group>(null);
        const rotationSpeed = useRef(0.2);

        // Preload model with high priority
        const { scene } = useGLTF('/models/3d modal.glb', true);

        useEffect(() => {
            if (modelRef.current) {
                // Set scale based on screen size
                const isMobile = window.innerWidth < 640; // Matches Tailwind's 'sm' breakpoint
                modelRef.current.scale.set(isMobile ? 1.0 : 1.5, isMobile ? 1.0 : 1.5, isMobile ? 1.0 : 1.5);
                modelRef.current.position.y = 0;
                setModelLoaded(true);
            }

            // Apply material optimizations - fixed type issue
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.castShadow = false;
                    child.receiveShadow = false;

                    // Handle material optimization safely with proper type casting
                    if (child.material) {
                        const applyOptimization = (material: THREE.Material) => {
                            // Cast to unknown first, then to the desired type
                            const matProps = material as unknown as { precision?: string };
                            matProps.precision = 'lowp';
                        };

                        if (Array.isArray(child.material)) {
                            child.material.forEach(applyOptimization);
                        } else {
                            applyOptimization(child.material);
                        }
                    }
                }
            });
        }, [scene]);

        useFrame((state, delta) => {
            if (!shouldAnimate.current || !modelRef.current) return;

            modelRef.current.rotation.y += delta * rotationSpeed.current;
            rotationSpeed.current = 0.2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        });

        return (
            <group ref={modelRef}>
                <primitive object={scene} />
            </group>
        );
    };

    // Optimized loading indicator
    const LoadingIndicator = () => {
        const spinnerRef = useRef<THREE.Mesh>(null);

        useFrame((state, delta) => {
            if (spinnerRef.current) {
                spinnerRef.current.rotation.x += delta * 2;
                spinnerRef.current.rotation.y += delta * 3;
            }
        });

        return (
            <mesh ref={spinnerRef} position={[0, 0, 0]}>
                <sphereGeometry args={[1, 8, 8]} />
                <meshStandardMaterial color="#207882" wireframe />
            </mesh>
        );
    };

    return (
        <section
            ref={sectionRef}
            className="bg-[#207882] relative h-[80vh] flex flex-col items-center w-full"
        >
            {/* Heading at the top with minimal spacing */}
            <h2 className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 w-full text-center font-[Merriweather] font-normal
                text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]
                leading-tight tracking-[0.02em] text-[#DAFFF4] z-10">
                1st DEXA Scanning in North Telangana.
            </h2>

            {/* 3D Model container takes remaining space but with controlled height */}
            <div className="w-full flex-1 flex justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24 pt-2 sm:pt-4">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 45 }}
                        dpr={getDpr()}
                        gl={{
                            antialias: false,
                            powerPreference: 'high-performance',
                            alpha: true
                        }}
                    >
                        <ambientLight intensity={0.4} />
                        <spotLight position={[10, 20, 10]} angle={0.3} intensity={0.8} castShadow={false} />
                        <directionalLight position={[-5, 5, 5]} intensity={1} />
                        <CameraController active={visible && !interacting} />

                        <Suspense fallback={<LoadingIndicator />}>
                            <DexaModel />
                            <Preload all />
                        </Suspense>

                        <OrbitControls
                            enabled={true}
                            enableZoom
                            enablePan={false}
                            minDistance={2.5}
                            maxDistance={7}
                            enableDamping
                            dampingFactor={0.05}
                            onStart={() => setInteracting(true)}
                            onEnd={() => setInteracting(false)}
                        />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default DexaSection;