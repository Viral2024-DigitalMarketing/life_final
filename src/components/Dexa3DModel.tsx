'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const DexaModel = () => {
    const model = useGLTF('/models/3d modal.glb') // Add your model in public/models/
    return <primitive object={model.scene} scale={1.5} />
}

const Dexa3DModel = () => {
    return (
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden bg-white/10 backdrop-blur-md">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} />
                <Suspense fallback={null}>
                    <DexaModel />
                </Suspense>
                <OrbitControls enableZoom={true} />
            </Canvas>
        </div>
    )
}

export default Dexa3DModel
