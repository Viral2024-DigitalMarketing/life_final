'use client';
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import * as THREE from 'three';

// Performance Optimization: Reduce object updates outside visibility
let shouldAnimate = false;

// Camera controller for zoom effects - Optimized for initial play
const CameraController = ({ active }) => {
    const { camera } = useThree();
    const initialPos = useRef(new THREE.Vector3(0, 0, 5));
    const targetPos = useRef(new THREE.Vector3(0, 0, 3.5));
    const time = useRef(0);
    const zoomingIn = useRef(true);
    const zoomCycleTime = 8; // seconds for a complete zoom cycle
    const animationStartTime = useRef(performance.now()); // Start time for initial animation

    useEffect(() => {
        camera.position.set(0, 0, 5);
        animationStartTime.current = performance.now(); // Reset start time on mount
        zoomingIn.current = true; // Ensure initial zoom-in
        time.current = 0;
    }, [camera]);

    useFrame((state, delta) => {
        if (!active && performance.now() - animationStartTime.current > 500) return; // Stop after initial small delay if not visible

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

function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}

const DexaModel = () => {
    const modelRef = useRef<THREE.Group>(null);
    const rotationSpeed = useRef(0.2);
    const scaleRef = useRef(0.5);
    const yRef = useRef(-2);
    const model = useGLTF('/models/3d modal.glb');

    useEffect(() => {
        scaleRef.current = 0.5;
        yRef.current = -2;
        if (modelRef.current) {
            modelRef.current.scale.setScalar(0.5);
            modelRef.current.position.y = -2;
        }
    }, []);

    useFrame((state, delta) => {
        if (!shouldAnimate || !modelRef.current) return;

        modelRef.current.rotation.y += delta * rotationSpeed.current;
        rotationSpeed.current = 0.2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

        scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, 1.5, 0.05);
        modelRef.current.scale.setScalar(scaleRef.current);

        yRef.current = THREE.MathUtils.lerp(yRef.current, 0, 0.05);
        modelRef.current.position.y = yRef.current;
    });

    return (
        <group ref={modelRef} position={[0, -2, 0]} scale={0.5}>
            <primitive object={model.scene} />
        </group>
    );
};

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
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#207882" wireframe />
        </mesh>
    );
};

const Dexa3DModel = () => {
    const [visible, setVisible] = useState(false);
    const [interacting, setInteracting] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
                shouldAnimate = entry.isIntersecting; // Control animation based on visibility
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current && observer) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const getDpr = () => (typeof window === 'undefined' ? 1 : Math.min(window.devicePixelRatio, 2));

    return (
        <div
            ref={containerRef}
            className="w-full h-64 md:h-96 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md"
        >
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={getDpr()}
                shadows
            >
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 20, 10]} angle={0.3} intensity={0.8} castShadow />
                <directionalLight position={[-5, 5, 5]} intensity={1} />
                <CameraController active={visible && !interacting} />

                <Suspense fallback={<LoadingIndicator />}>
                    <DexaModel />
                </Suspense>

                <OrbitControls
                    enabled={interacting}
                    enableZoom
                    enablePan={false}
                    minDistance={2.5}
                    maxDistance={7}
                    enableDamping
                    dampingFactor={0.05}
                    onStart={() => setInteracting(true)}
                    onEnd={() => setInteracting(false)}
                />
                <Preload all /> {/* Preload the model */}
            </Canvas>
        </div>
    );
};

export default Dexa3DModel;