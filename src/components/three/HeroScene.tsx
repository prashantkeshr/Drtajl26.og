"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Stars,
  Sparkles,
  Environment,
  MeshDistortMaterial,
  Icosahedron,
  Torus,
  Octahedron,
  Dodecahedron,
  TorusKnot,
} from "@react-three/drei";
import * as THREE from "three";

function MouseGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.25;
    const y = state.pointer.y * 0.18;
    group.current.rotation.y += (x - group.current.rotation.y) * 0.03;
    group.current.rotation.x += (-y - group.current.rotation.x) * 0.03;
  });

  return <group ref={group}>{children}</group>;
}

function SpinningWireGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.06;
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <sphereGeometry args={[3.4, 24, 24]} />
      <meshBasicMaterial color="#C9A84C" wireframe transparent opacity={0.08} />
    </mesh>
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
      <directionalLight position={[0, 5, 5]} intensity={0.6} />

      <Environment preset="city" />

      <Stars radius={60} depth={30} count={2200} factor={2.2} saturation={0} fade speed={0.6} />
      <Sparkles count={80} scale={[10, 6, 6]} size={2.5} speed={0.35} color="#C9A84C" opacity={0.6} />

      <SpinningWireGlobe />

      <MouseGroup>
        <Float speed={1.4} rotationIntensity={0.9} floatIntensity={1.4}>
          <Icosahedron args={[1.15, 0]} position={[-2.6, 0.8, 0]}>
            <MeshDistortMaterial
              color="#C9A84C"
              metalness={0.9}
              roughness={0.15}
              distort={0.25}
              speed={1.5}
            />
          </Icosahedron>
        </Float>

        <Float speed={1.1} rotationIntensity={1.1} floatIntensity={1.8}>
          <Torus args={[0.75, 0.26, 32, 100]} position={[2.7, -0.6, -1]}>
            <meshStandardMaterial color="#4A9EFF" metalness={0.85} roughness={0.25} />
          </Torus>
        </Float>

        <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.2}>
          <Octahedron args={[0.6, 0]} position={[1.6, 1.6, 1]}>
            <meshStandardMaterial color="#00D4AA" metalness={0.8} roughness={0.2} />
          </Octahedron>
        </Float>

        <Float speed={0.9} rotationIntensity={0.5} floatIntensity={1} >
          <Dodecahedron args={[0.5, 0]} position={[-1.8, -1.6, 0.5]}>
            <meshStandardMaterial color="#E8D5A3" metalness={0.9} roughness={0.1} />
          </Dodecahedron>
        </Float>

        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.4}>
          <TorusKnot args={[0.42, 0.13, 120, 16]} position={[3.1, 1.4, -2]}>
            <meshStandardMaterial color="#A68B3A" metalness={0.9} roughness={0.15} />
          </TorusKnot>
        </Float>
      </MouseGroup>
    </Canvas>
  );
}
