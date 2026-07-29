"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef } from "react";

function HeroObject({ idleRotation }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame(() => {
    if (!idleRotation) return;
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.0015;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.0025;
    }
  });

  return (
    <group position={[0.4, 0, 0]}>
      <mesh ref={meshRef} name="hero-object">
        <icosahedronGeometry args={[1.15, 2]} />
        <meshPhysicalMaterial
          color="#1c1811"
          metalness={0.55}
          roughness={0.2}
          clearcoat={0.8}
          clearcoatRoughness={0.15}
          envMapIntensity={1.1}
        />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2.3, 0.1, 0]} name="hero-ring">
        <torusGeometry args={[1.75, 0.006, 8, 120]} />
        <meshBasicMaterial color="#0F6E4E" transparent opacity={0.65} />
      </mesh>
    </group>
  );
}

/**
 * Scene3D
 * Sağ paneldeki sabit (sticky) 3D kutuya gömülür — tam ekran değil,
 * kendi konteynerinin boyutuna göre render olur.
 */
export default function Scene3D({ idleRotation = true, onReady }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ camera, scene }) => {
        if (onReady) onReady({ camera, scene });
      }}
    >
      <ambientLight intensity={0.4} color="#F6F3EC" />
      <directionalLight position={[3, 4, 3]} intensity={1.3} color="#fff4e0" />
      <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#0F6E4E" />
      <Environment preset="studio" environmentIntensity={0.9} />
      <HeroObject idleRotation={idleRotation} />
    </Canvas>
  );
}
