"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles, Text } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function EarthGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0008;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.4, 24, 16]} />
      <meshBasicMaterial color="#c9a84c" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

function SanskritGlyph() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const tx = -2.8 + state.pointer.x * 0.4;
    const ty = state.pointer.y * 0.3;
    ref.current.position.x += (tx - ref.current.position.x) * 0.06;
    ref.current.position.y += (ty - ref.current.position.y) * 0.06;
  });
  return (
    <group ref={ref} position={[-2.8, 0, 0]}>
      <Text fontSize={1.2} color="#c9a84c" anchorX="center" anchorY="middle">
        ध
      </Text>
    </group>
  );
}

function OrbitRings() {
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (r1.current) r1.current.rotation.y += 0.003;
    if (r2.current) r2.current.rotation.y -= 0.002;
  });
  return (
    <>
      <mesh ref={r1} rotation={[THREE.MathUtils.degToRad(15), 0, 0]}>
        <torusGeometry args={[3.2, 0.012, 8, 120]} />
        <meshBasicMaterial color="#00d4aa" transparent opacity={0.7} />
      </mesh>
      <mesh ref={r2} rotation={[THREE.MathUtils.degToRad(60), 0, 0]}>
        <torusGeometry args={[3.2, 0.012, 8, 120]} />
        <meshBasicMaterial color="#00d4aa" transparent opacity={0.5} />
      </mesh>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 6, 6]} intensity={1.4} color="#E8D5A3" />
      <pointLight position={[-6, -3, -4]} intensity={1} color="#4A9EFF" />

      <Stars radius={60} depth={30} count={2200} factor={2.2} saturation={0} fade speed={0.6} />
      <Sparkles count={40} scale={[10, 6, 6]} size={2.5} speed={0.35} color="#00d4aa" opacity={0.6} />

      <EarthGlobe />
      <SanskritGlyph />
      <OrbitRings />

      <EffectComposer>
        <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} intensity={0.6} />
      </EffectComposer>
    </Canvas>
  );
}
