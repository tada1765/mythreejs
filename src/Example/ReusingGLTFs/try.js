import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import GLTFIMG from './Poimandres.gltf'
// import tryGLTF from '../RaycastVehicle/wheel.glb'
import { Physics } from '@react-three/cannon' // hmm... need physics to work!!!
// import Vehicle from '../RaycastVehicle/Vehicle'


const Model = () => {
  const gltf = useLoader(GLTFLoader, GLTFIMG);
  return (
    <>
      <primitive object={gltf.scene} scale={0.8} />
    </>
  );
};

export default function tryApp() {
  return (
    <Canvas dpr={[1, 1.5]} shadows camera={{ position: [0, 5, 15], fov: 50 }}>
      <fog attach="fog" args={['#171720', 10, 50]} />
      <color attach="background" args={['#171720']} />
      <ambientLight intensity={0.1} />
      <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={1} />
      <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
        {/* <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 0.5, 0]} wheelRadius={0.3} /> */}
        <Model />
      </Physics>
      <Suspense fallback={null}>
        {/* <Environment preset="night" /> */}
        <Environment preset="sunset" background />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, './Poimandres.gltf');
//   return (
//     <>
//       <primitive object={gltf.scene} scale={0.4} />
//     </>
//   );
// };

// export default function tryApp() {
//   return (
//     // <div className="App">
//       <Canvas>
//         <Suspense fallback={null}>
//           <Model />
//           <OrbitControls />
//           <Environment />
//           <Environment preset="sunset" background />
//         </Suspense>
//       </Canvas>
//     /* </div> */
//   );
// }
// export default function tryApp() {
//   return (
//     <Scene />
//   )
// }

