"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import FloatingShape from "./FloatingShape";

export default function InteractiveShapes() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#bc13fe"
        />
        <spotLight
          position={[0, 10, 0]}
          intensity={0.8}
          angle={0.3}
          penumbra={1}
        />

        {/* Floating Shapes */}
        <FloatingShape
          position={[-3, 2, -2]}
          scale={1.2}
          color="#00f3ff"
          geometryType="icosahedron"
          rotationSpeed={[0.002, 0.003, 0]}
        />

        <FloatingShape
          position={[3, -1, -3]}
          scale={1.5}
          color="#bc13fe"
          geometryType="torus"
          rotationSpeed={[0.001, 0.002, 0.001]}
        />

        <FloatingShape
          position={[0, 3, -4]}
          scale={0.8}
          color="#3b82f6"
          geometryType="sphere"
          rotationSpeed={[0.001, 0.001, 0]}
        />

        <FloatingShape
          position={[-4, -2, -5]}
          scale={1}
          color="#8b5cf6"
          geometryType="icosahedron"
          rotationSpeed={[0.003, 0.001, 0.002]}
        />

        <FloatingShape
          position={[4, 2, -5]}
          scale={1.3}
          color="#ec4899"
          geometryType="torus"
          rotationSpeed={[0.002, 0.002, 0.001]}
        />

        {/* Environment for reflections */}
        <Environment preset="city" />

        {/* Optional: Orbit controls for interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}
