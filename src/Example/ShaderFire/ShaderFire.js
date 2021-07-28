import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Fire } from './Shaders/Fire'

export default function ShaderFire() {
  return (
    <Canvas camera={{ position: [0,-4,5], fov: 50}}>
      <Suspense fallback={null}>
        <Fire scale={7} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}