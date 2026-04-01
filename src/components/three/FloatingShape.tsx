"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  scale: number;
  color: string;
  geometryType: "icosahedron" | "sphere" | "torus";
  rotationSpeed?: [number, number, number];
}

export default function FloatingShape({
  position,
  scale,
  color,
  geometryType,
  rotationSpeed = [0.001, 0.002, 0],
}: FloatingShapeProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Auto rotation
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];

      // Additional rotation on hover
      if (hovered) {
        meshRef.current.rotation.x += delta * 0.5;
        meshRef.current.rotation.y += delta * 0.5;
      }

      // Gentle floating animation
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2;
    }
  });

  const getGeometry = () => {
    switch (geometryType) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "sphere":
        return <sphereGeometry args={[1, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 100]} />;
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        wireframe={!hovered}
        transparent
        opacity={hovered ? 0.9 : 0.6}
        emissive={color}
        emissiveIntensity={hovered ? 0.5 : 0.2}
      />
    </mesh>
  );
}
