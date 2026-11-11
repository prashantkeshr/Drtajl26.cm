import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const TEAL = "#00d4aa";
const GOLD = "#c9a84c";

// Geodesic wireframe sphere — the main centrepiece
function GeoSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const geo = useMemo(() => new THREE.IcosahedronGeometry(2.1, 3), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.055;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.032) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Dark inner fill — occludes back-facing edges for clean depth */}
      <mesh>
        <icosahedronGeometry args={[2.07, 3]} />
        <meshStandardMaterial
          color="#010b16"
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.94}
        />
      </mesh>
      {/* Wireframe edges */}
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={TEAL} transparent opacity={0.38} />
      </lineSegments>
    </group>
  );
}

// Orbital ring — elegant single-line torus at a given inclination
function OrbitRing({
  radius,
  color,
  speed,
  rotX,
  rotZ,
}: {
  radius: number;
  color: string;
  speed: number;
  rotX: number;
  rotZ: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.elapsedTime * speed;
  });

  return (
    <group ref={ref} rotation={[rotX, 0, rotZ]}>
      <mesh>
        <torusGeometry args={[radius, 0.007, 2, 180]} />
        <meshStandardMaterial
          color={color}
          metalness={0.95}
          roughness={0.05}
          emissive={color}
          emissiveIntensity={0.55}
        />
      </mesh>
    </group>
  );
}

// Network nodes distributed on a sphere surface using golden-angle spiral
function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo<[number, number, number][]>(() => {
    const pts: [number, number, number][] = [];
    const r = 3.3;
    const golden = Math.PI * (Math.sqrt(5) - 1);
    for (let i = 0; i < 22; i++) {
      const y = 1 - (i / 21) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts.push([r * radius * Math.cos(theta), r * y, r * radius * Math.sin(theta)]);
    }
    return pts;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.022;
    groupRef.current.rotation.x = clock.elapsedTime * 0.009;
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.048, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? GOLD : TEAL}
            emissive={i % 3 === 0 ? GOLD : TEAL}
            emissiveIntensity={0.9}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

// Gentle mouse-parallax camera drift
function Rig() {
  useFrame(({ camera, pointer }) => {
    camera.position.x += (pointer.x * 0.45 - camera.position.x) * 0.022;
    camera.position.y += (pointer.y * 0.3 - camera.position.y) * 0.022;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 8.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        {/* Warm key, teal fill, blue rim */}
        <ambientLight intensity={0.15} />
        <pointLight position={[6, 4, 4]} intensity={1.4} color="#E8D5A3" />
        <pointLight position={[-5, -3, -5]} intensity={1.0} color="#00d4aa" />
        <pointLight position={[0, 6, -4]} intensity={0.5} color="#4A9EFF" />

        <GeoSphere />

        {/* Three orbital rings at different inclinations */}
        <OrbitRing radius={2.9} color={GOLD}  speed={0.045}  rotX={Math.PI / 2}   rotZ={0} />
        <OrbitRing radius={2.9} color={TEAL}  speed={-0.034} rotX={Math.PI / 2.4} rotZ={Math.PI / 5} />
        <OrbitRing radius={3.15} color={GOLD} speed={0.028}  rotX={Math.PI / 2.9} rotZ={-Math.PI / 4.2} />

        <NetworkNodes />

        <EffectComposer>
          <Bloom luminanceThreshold={0.28} intensity={0.85} radius={0.35} />
        </EffectComposer>
        <Rig />
      </Suspense>
    </Canvas>
  );
}
