import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./gltf/pepsi.gltf')
  return (
    <group {...props} dispose={null} scale={5} position={[0,-1,0]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={0.059} />
    </group>
  )
}

useGLTF.preload('./gltf/pepsi.gltf')
