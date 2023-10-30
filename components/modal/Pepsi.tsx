"use client";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei/core";
import { Model } from "../../public/gltf/Pepsi"
export default function Pepsi() {
  return (
    <>
      <div className="fixed top-0 w-full h-full">
        <Canvas
          camera={{ fov: 30 }}
        >
          <ambientLight intensity={2} />
          <spotLight
            intensity={2.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Model />
        </Canvas>
      </div>
    </>
  );
}