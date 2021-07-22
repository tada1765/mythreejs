import { useGLTF } from '@react-three/drei'

export default function GenericLaptop(props) {
  const { nodes, materials } = useGLTF('./Cactus3.gltf')
  return (
    <group {...props} dispose={null}>
      {/* <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} material-envMapIntensity={0.8} /> */}
      <mesh castShadow receiveShadow geometry={nodes.Cactus3.geometry} material={materials.laces} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.Cactus3_1.geometry} material={materials.mesh} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.Cactus3_2.geometry} material={materials.caps} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.Cactus3_3.geometry} material={materials.inner} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.Cactus3_4.geometry} material={materials.sole} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.Cactus3_5.geometry} material={materials.stripes} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.Cactus3_6.geometry} material={materials.band} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.Cactus3_7.geometry} material={materials.patch} material-envMapIntensity={0.8} />
    </group>
  )
}
useGLTF.preload('./Cactus3.gltf')
