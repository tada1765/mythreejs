import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { Slider } from 'antd'
// import './MixingHTMLAndWebgl.css'
import 'antd/dist/antd.css' // hmm...

function Box() {
  const [size, set] = useState(0.5)
  const [hidden, setVisible] = useState(false)
  return (
    <mesh scale={size * 2}>
      <boxGeometry />
      <meshStandardMaterial />
      <Html
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
        }}
        distanceFactor={1.5}
        position={[0, 0, 0.51]}
        transform
        occlude
        onOcclude={setVisible}>
        <span>Size</span>
        <Slider style={{ width: 100 }} min={0.5} max={1} step={0.01} value={size} onChange={set} />
      </Html>
    </mesh>
  )
}

function Sphere(props) {
  const ref = useRef()
  useFrame((state) => (ref.current.position.x = Math.sin(state.clock.getElapsedTime())))
  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function MixingHTMLAndWebgl() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 25 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <Box />
      <Sphere position={[0, 0, 1]} />
      <OrbitControls />
    </Canvas>
  )
}
