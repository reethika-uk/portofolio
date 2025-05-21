import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count }) {
  const mesh = useRef();

  // Create arrays for positions and velocities
  const [positions, velocities] = useMemo(() => {
    const posTemp = new Float32Array(count * 3);
    const velTemp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posTemp[i3] = (Math.random() - 0.5) * 10;
      posTemp[i3 + 1] = (Math.random() - 0.5) * 10;
      posTemp[i3 + 2] = (Math.random() - 0.5) * 10;

      // Random initial velocity
      velTemp[i3] = (Math.random() - 0.5) * 0.01;
      velTemp[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velTemp[i3 + 2] = (Math.random() + 0.5) * 0.01; // Move mostly forward (along z+)
    }
    return [posTemp, velTemp];
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      const positionsArray = mesh.current.geometry.attributes.position.array;

      // Update particle positions based on velocities
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        positionsArray[i3] += velocities[i3];
        positionsArray[i3 + 1] += velocities[i3 + 1];
        positionsArray[i3 + 2] += velocities[i3 + 2];

        // If particle moves too far in any direction, reset its position
        if (positionsArray[i3] > 5 || positionsArray[i3] < -5 ||
            positionsArray[i3 + 1] > 5 || positionsArray[i3 + 1] < -5 ||
            positionsArray[i3 + 2] > 5 || positionsArray[i3 + 2] < -5) {
          positionsArray[i3] = (Math.random() - 0.5) * 10;
          positionsArray[i3 + 1] = (Math.random() - 0.5) * 10;
          positionsArray[i3 + 2] = (Math.random() - 0.5) * 10;
        }
      }

      mesh.current.geometry.attributes.position.needsUpdate = true;

      // Optional: Rotate the entire particle system slightly
      mesh.current.rotation.x += 0.0001;
      mesh.current.rotation.y += 0.0001;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" color={'#3498DB'} size={0.02} sizeAttenuation={true} transparent opacity={0.8} />
    </points>
  );
}

function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles count={5000} /> {/* Adjust the number of particles as needed */}
      </Canvas>
    </div>
  );
}

export default ParticleBackground; 