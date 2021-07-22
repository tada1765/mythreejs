import * as THREE from "three"
import React, { Suspense, useRef, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import disp from "./img/displacement/10.jpg"
import "./ImageFadeMaterial"

function FadingImage() {
  const ref = useRef()
  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [img1, img2, disp])
  const [hovered, SetHover] = useState(false)
  useFrame(() => (ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, !!hovered, 0.1)))
  return (
    <mesh onPointerMove={(e) => SetHover(true)} onPointerOut={(e) => SetHover(false)}>
      <planeGeometry />
      <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} />
    </mesh>
  )
}
export default function Shadermaterials() {
  return (
    <Canvas camera={{ position: [0,0,2], fov: 50 }}>
      <Suspense fallback={null}>
        <FadingImage />
      </Suspense>
    </Canvas>
  )
}
