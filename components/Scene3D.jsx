"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function HeroObject({ idleRotation }) {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame(() => {
    if (!idleRotation) return;
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.006;
      meshRef.current.rotation.x += 0.002;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.003;
    }
  });

  return (
    <>
      <mesh ref={meshRef} name="hero-object">
        <icosahedronGeometry args={[1.6, 1]} />
        <meshPhysicalMaterial
          color="#17140F"
          metalness={0.35}
          roughness={0.25}
          clearcoat={0.6}
          clearcoatRoughness={0.3}
        />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2.4, 0, 0]} name="hero-ring">
        <torusGeometry args={[2.6, 0.008, 8, 100]} />
        <meshBasicMaterial color="#0F6E4E" />
      </mesh>
    </>
  );
}

/**
 * Scene3D
 * refs.camera / refs.heroObject / refs.heroRing are exposed via onReady
 * so a parent component can drive them with GSAP ScrollTrigger.
 */
export default function Scene3D({ idleRotation = true, onReady }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        onCreated={({ camera, scene }) => {
          if (onReady) onReady({ camera, scene });
        }}
      >
        <directionalLight position={[3, 4, 3]} intensity={2.1} color="#fff4e0" />
        <directionalLight position={[-4, -2, -3]} intensity={1.4} color="#0F6E4E" />
        <ambientLight intensity={0.55} color="#F6F3EC" />
        <HeroObject idleRotation={idleRotation} />
      </Canvas>
    </div>
  );
}
