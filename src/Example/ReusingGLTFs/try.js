import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
// import GLTFIMG from './Poimandres.gltf'

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/Poimandres.gltf');
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default function tryApp() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}

// export default function tryApp() {
//   return (
//     <Scene />
//   )
// }

