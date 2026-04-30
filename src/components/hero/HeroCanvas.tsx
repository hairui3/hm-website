import { Canvas, useFrame } from '@react-three/fiber'
import { Line, Sphere } from '@react-three/drei'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function CircuitTraces() {
  const lines = useMemo(() => {
    const rnd = mulberry32(9)
    const out: { points: THREE.Vector3[]; c: string; o: number }[] = []
    const palette = ['#0b66ff', '#09d5ff', '#b8c7d9', '#5b6c83']

    for (let i = 0; i < 44; i++) {
      const x0 = (rnd() - 0.5) * 10
      const y0 = (rnd() - 0.5) * 6
      const seg = 2 + Math.floor(rnd() * 3)
      const pts: THREE.Vector3[] = [new THREE.Vector3(x0, y0, -1.2 + rnd() * 0.9)]
      for (let s = 0; s < seg; s++) {
        const last = pts[pts.length - 1]!
        const dir = rnd() > 0.5 ? 'x' : 'y'
        const step = (0.8 + rnd() * 1.4) * (rnd() > 0.5 ? 1 : -1)
        pts.push(
          new THREE.Vector3(
            dir === 'x' ? last.x + step : last.x,
            dir === 'y' ? last.y + step : last.y,
            last.z + (rnd() - 0.5) * 0.25,
          ),
        )
      }
      const c = palette[Math.floor(rnd() * palette.length)]!
      out.push({ points: pts, c, o: 0.12 + rnd() * 0.3 })
    }
    return out
  }, [])

  return (
    <group>
      {lines.map((l, idx) => (
        <Line
          key={idx}
          points={l.points}
          color={l.c}
          transparent
          opacity={l.o}
          lineWidth={1}
        />
      ))}
    </group>
  )
}

function Nodes() {
  const nodes = useMemo(() => {
    const rnd = mulberry32(77)
    const pts: { p: [number, number, number]; s: number; c: string }[] = []
    for (let i = 0; i < 22; i++) {
      const x = (rnd() - 0.5) * 8.6
      const y = (rnd() - 0.5) * 5.2
      pts.push({
        p: [x, y, -0.5 + rnd() * 0.6],
        s: 0.04 + rnd() * 0.07,
        c: rnd() > 0.6 ? '#09d5ff' : '#0b66ff',
      })
    }
    return pts
  }, [])

  return (
    <group>
      {nodes.map((n, idx) => (
        <Sphere key={idx} args={[n.s, 16, 16]} position={n.p}>
          <meshStandardMaterial color={n.c} emissive={n.c} emissiveIntensity={0.6} />
        </Sphere>
      ))}
    </group>
  )
}

function CoolantRibbon() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.x = t * 0.15
      ref.current.rotation.y = t * 0.28
      ref.current.position.y = Math.sin(t * 0.55) * 0.15
    }
  })

  return (
    <mesh ref={ref} position={[2.2, 0.2, 0.2]}>
      <torusKnotGeometry args={[1.05, 0.16, 160, 18]} />
      <meshPhysicalMaterial
        color="#e8f4ff"
        metalness={0.25}
        roughness={0.22}
        transmission={0.65}
        thickness={1.1}
        ior={1.25}
        clearcoat={1}
        clearcoatRoughness={0.25}
        emissive="#0b66ff"
        emissiveIntensity={0.06}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <group position={[0, 0, 0]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[6, 8, 4]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-6, -2, 2]} intensity={0.55} color="#7ad8ff" />
      <CircuitTraces />
      <Nodes />
      <CoolantRibbon />
    </group>
  )
}

export default function HeroCanvas() {
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    setSupported(!!gl)
  }, [])

  if (!supported) {
    return (
      <div className="h-full w-full">
        <svg
          viewBox="0 0 1200 800"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(11,102,255,0.18)" />
              <stop offset="0.55" stopColor="rgba(9,213,255,0.10)" />
              <stop offset="1" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <radialGradient id="g2" cx="35%" cy="30%" r="65%">
              <stop offset="0" stopColor="rgba(9,213,255,0.22)" />
              <stop offset="1" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          <rect width="1200" height="800" fill="url(#g2)" />
          <rect width="1200" height="800" fill="url(#g1)" />

          <g opacity="0.38" stroke="rgba(15,23,42,0.18)" strokeWidth="1">
            {Array.from({ length: 16 }).map((_, i) => (
              <path
                key={i}
                d={`M ${60 + i * 70} ${90} L ${60 + i * 70} ${710}`}
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <path
                key={`h-${i}`}
                d={`M ${80} ${120 + i * 62} L ${1120} ${120 + i * 62}`}
              />
            ))}
          </g>

          <g opacity="0.55" stroke="rgba(11,102,255,0.35)" strokeWidth="2" fill="none">
            <path d="M 160 240 L 380 240 L 380 330 L 520 330" />
            <path d="M 260 520 L 480 520 L 480 440 L 720 440 L 720 300" />
            <path d="M 720 560 L 900 560 L 900 420 L 1020 420" />
          </g>

          <g>
            {[
              [380, 240],
              [520, 330],
              [480, 520],
              [720, 440],
              [900, 560],
              [1020, 420],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="9" fill="rgba(11,102,255,0.10)" />
                <circle cx={x} cy={y} r="4" fill="rgba(11,102,255,0.65)" />
                <circle cx={x} cy={y} r="2" fill="rgba(9,213,255,0.85)" />
              </g>
            ))}
          </g>
        </svg>
      </div>
    )
  }

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 46 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['transparent']} />
      <fog attach="fog" args={['#ffffff', 6, 12]} />
      <Scene />
    </Canvas>
  )
}
