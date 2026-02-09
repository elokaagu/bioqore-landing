"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";

/* ─── Bioreactor vessel (glass cylinder + dished head top/bottom) ─── */
function Vessel() {
  return (
    <group>
      {/* Glass cylinder body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 3.2, 64, 1, true]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.3}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.05}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#d4e8ff"
          transmission={0.92}
          roughness={0.05}
          ior={1.5}
        />
      </mesh>

      {/* Bottom dish (rounded base) */}
      <mesh position={[0, -1.6, 0]}>
        <sphereGeometry args={[1.2, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#c0c8d0"
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>

      {/* Inner liquid (semi-transparent amber) */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[1.15, 1.15, 2.2, 64]} />
        <meshStandardMaterial
          color="#e8a840"
          transparent
          opacity={0.25}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}

/* ─── Head plate (metal lid on top) ─── */
function HeadPlate() {
  return (
    <group position={[0, 1.7, 0]}>
      {/* Main plate */}
      <mesh>
        <cylinderGeometry args={[1.35, 1.35, 0.15, 64]} />
        <meshStandardMaterial
          color="#b0b8c0"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      {/* Raised rim */}
      <mesh position={[0, 0.1, 0]}>
        <torusGeometry args={[1.25, 0.06, 16, 64]} />
        <meshStandardMaterial
          color="#a0a8b0"
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
}

/* ─── Impeller shaft + blades ─── */
function Impeller() {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.8;
  });

  return (
    <group ref={ref}>
      {/* Shaft */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 3.0, 16]} />
        <meshStandardMaterial
          color="#909090"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Rushton impeller blades (6 blades) */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 3) * 0.45,
            -0.5,
            Math.sin((i * Math.PI) / 3) * 0.45,
          ]}
          rotation={[0, (i * Math.PI) / 3, 0]}
        >
          <boxGeometry args={[0.5, 0.25, 0.02]} />
          <meshStandardMaterial
            color="#a0a0a0"
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      ))}

      {/* Impeller disc */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.03, 32]} />
        <meshStandardMaterial
          color="#a8a8a8"
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
}

/* ─── Baffles (4 vertical plates inside vessel) ─── */
function Baffles() {
  return (
    <group>
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 2) * 1.05,
            0,
            Math.sin((i * Math.PI) / 2) * 1.05,
          ]}
          rotation={[0, (i * Math.PI) / 2, 0]}
        >
          <boxGeometry args={[0.02, 2.8, 0.18]} />
          <meshStandardMaterial
            color="#b8b8b8"
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Sensor ports (3 small cylinders poking through the lid) ─── */
function SensorPorts() {
  const ports = [
    { x: 0.5, z: 0.3, height: 0.5, color: "#4285f4" }, // pH (blue)
    { x: -0.4, z: 0.5, height: 0.45, color: "#ef4444" }, // temp (red)
    { x: 0.0, z: -0.6, height: 0.55, color: "#22c55e" }, // DO (green)
  ];

  return (
    <group position={[0, 1.8, 0]}>
      {ports.map((port, i) => (
        <group key={i} position={[port.x, 0, port.z]}>
          {/* Port body */}
          <mesh position={[0, port.height / 2, 0]}>
            <cylinderGeometry args={[0.06, 0.06, port.height, 16]} />
            <meshStandardMaterial
              color="#888"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          {/* Colored ring */}
          <mesh position={[0, port.height, 0]}>
            <torusGeometry args={[0.06, 0.02, 8, 16]} />
            <meshStandardMaterial
              color={port.color}
              emissive={port.color}
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ─── Sparger ring at the bottom ─── */
function Sparger() {
  return (
    <mesh position={[0, -1.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.6, 0.04, 16, 32]} />
      <meshStandardMaterial
        color="#999"
        metalness={0.85}
        roughness={0.15}
      />
    </mesh>
  );
}

/* ─── Tubing (inlet + outlet) ─── */
function Tubing() {
  return (
    <group>
      {/* Inlet tube (left side) */}
      <mesh position={[-1.4, 1.2, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
        <meshStandardMaterial
          color="#e8e0d0"
          transparent
          opacity={0.7}
          roughness={0.8}
        />
      </mesh>

      {/* Outlet tube (right side) */}
      <mesh position={[1.4, 0.8, 0]} rotation={[0, 0, -Math.PI / 5]}>
        <cylinderGeometry args={[0.05, 0.05, 1.0, 16]} />
        <meshStandardMaterial
          color="#e8e0d0"
          transparent
          opacity={0.7}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}

/* ─── Bubbles rising inside the liquid ─── */
function Bubbles() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.children.forEach((child, i) => {
      const speed = 0.3 + i * 0.05;
      child.position.y =
        ((state.clock.elapsedTime * speed + i * 0.7) % 2.5) - 1.4;
      child.position.x = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.3;
      child.position.z = Math.cos(state.clock.elapsedTime * 0.4 + i * 2) * 0.3;
    });
  });

  return (
    <group ref={ref}>
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={i} position={[0, -1, 0]}>
          <sphereGeometry args={[0.02 + Math.random() * 0.03, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.4}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ─── Full bioreactor assembly ─── */
function BioreactorAssembly() {
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group scale={0.9}>
        <Vessel />
        <HeadPlate />
        <Impeller />
        <Baffles />
        <SensorPorts />
        <Sparger />
        <Tubing />
        <Bubbles />
      </group>
    </Float>
  );
}

/* ─── Exported canvas component ─── */
export default function BioreactorModel({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [3.5, 2, 3.5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <directionalLight position={[-3, 4, -2]} intensity={0.4} color="#a0c4ff" />
        <pointLight position={[0, -2, 0]} intensity={0.3} color="#ffd080" />

        <Suspense fallback={null}>
          <BioreactorAssembly />
          <Environment preset="studio" environmentIntensity={0.5} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
