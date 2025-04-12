'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const DexaModel = () => {
    const model = useGLTF('/models/3d modal.glb') // Ensure this path is correct and the model is in the public/models/ folder
    return <primitive object={model.scene} scale={1.5} />
}

const Dexa3DModel = () => {
    return (
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                {/* Ambient and Directional light to enhance model visibility */}
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Suspense ensures loading of the 3D model */}
                <Suspense fallback={null}>
                    <DexaModel />
                </Suspense>

                {/* OrbitControls enable user interaction for better navigation */}
                <OrbitControls enableZoom={true} />
            </Canvas>
        </div>
    )
}

export default Dexa3DModel
