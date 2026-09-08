import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";

// The centerpiece 3D object: a distorted icosahedron that slowly rotates and
// gently follows the pointer, wrapped in drei's Float for an idle bob so it
// never looks static even before the pointer moves.
function DistortedBlob() {
  const meshRef = useRef(null);
  const group = useRef(null);

  useFrame((state) => {
    if (!meshRef.current || !group.current) return;
    meshRef.current.rotation.x += 0.0015;
    meshRef.current.rotation.y += 0.002;

    // Subtle parallax toward the pointer -- state.pointer is already
    // normalized to [-1, 1], so this stays gentle without extra scaling.
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.25;
    group.current.rotation.y += (targetX - group.current.rotation.y) * 0.02;
    group.current.rotation.x += (targetY - group.current.rotation.x) * 0.02;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={meshRef} scale={2.1}>
          <icosahedronGeometry args={[1, 6]} />
          <MeshDistortMaterial
            color="#7c3aed"
            emissive="#4c1d95"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.7}
            distort={0.45}
            speed={1.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

const PARTICLE_COUNT = 120;

// Generated once at module load, not per-render or even per-mount -- there's
// only ever one Hero3D on the page, and computing fresh random positions on
// every render would make the particle field visibly reshuffle instead of
// staying stable.
const PARTICLE_POSITIONS = (() => {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 12;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
  }
  return arr;
})();

function Particles() {
  const points = useRef(null);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[PARTICLE_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#a78bfa" size={0.025} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

// Rendered behind the hero text -- pointer-events disabled on the wrapper
// so the canvas never intercepts clicks on the text/buttons above it.
function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#a78bfa" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#60a5fa" />
        <Suspense fallback={null}>
          <DistortedBlob />
          <Particles />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Hero3D;
