import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const GOLD = "#c9a84c";
const TEAL = "#00d4aa";

function BrowserFrame() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-1.2, 0, 0]}>
        <boxGeometry args={[0.05, 2.4, 0.05]} />
        <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[1.2, 0, 0]}>
        <boxGeometry args={[0.05, 2.4, 0.05]} />
        <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 1.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.05, 2.4, 0.05]} />
        <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -1.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.05, 2.4, 0.05]} />
        <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function ShieldGlyph() {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 1.0);
    s.lineTo(0.65, 0.65);
    s.lineTo(0.65, -0.05);
    s.lineTo(0, -0.9);
    s.lineTo(-0.65, -0.05);
    s.lineTo(-0.65, 0.65);
    s.closePath();
    return s;
  }, []);

  return (
    <mesh position={[0, 0, -0.15]}>
      <shapeGeometry args={[shape]} />
      <MeshDistortMaterial
        color={GOLD}
        distort={0.1}
        metalness={0.95}
        roughness={0.05}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function OrbitCube({
  period,
  offset,
  color,
  inclination,
}: {
  period: number;
  offset: number;
  color: string;
  inclination: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const angle = (clock.elapsedTime * Math.PI * 2) / period + offset;
    const r = 2.8;
    ref.current.position.x = r * Math.cos(angle);
    if (inclination === 0) {
      ref.current.position.y = 0;
      ref.current.position.z = r * Math.sin(angle);
    } else {
      ref.current.position.y = r * Math.sin(angle) * Math.sin(inclination);
      ref.current.position.z = r * Math.sin(angle) * Math.cos(inclination);
    }
    ref.current.rotation.x += 0.015;
    ref.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.18, 0.18, 0.18]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function OrbitingCubes() {
  const configs = [
    { period: 3, offset: 0, color: GOLD, inclination: 0 },
    { period: 3, offset: Math.PI / 2, color: TEAL, inclination: 0 },
    { period: 3, offset: Math.PI, color: GOLD, inclination: 0 },
    { period: 3, offset: (3 * Math.PI) / 2, color: TEAL, inclination: 0 },
    { period: 5, offset: 0, color: GOLD, inclination: Math.PI / 6 },
    { period: 5, offset: Math.PI / 2, color: TEAL, inclination: Math.PI / 6 },
    { period: 5, offset: Math.PI, color: GOLD, inclination: Math.PI / 6 },
    { period: 5, offset: (3 * Math.PI) / 2, color: TEAL, inclination: Math.PI / 6 },
  ];

  return (
    <>
      {configs.map((cfg, i) => (
        <OrbitCube key={i} {...cfg} />
      ))}
    </>
  );
}

function Rig() {
  useFrame(({ camera, pointer }) => {
    camera.position.x += (pointer.x * 0.4 - camera.position.x) * 0.03;
    camera.position.y += (pointer.y * 0.3 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#E8D5A3" />
        <pointLight position={[-5, -3, -4]} intensity={0.8} color="#4A9EFF" />

        <Stars radius={60} depth={40} count={1800} factor={3} saturation={0} fade speed={0.6} />
        <BrowserFrame />
        <ShieldGlyph />
        <OrbitingCubes />

        <EffectComposer>
          <Bloom luminanceThreshold={0.4} intensity={0.7} />
        </EffectComposer>
        <Rig />
      </Suspense>
    </Canvas>
  );
}
