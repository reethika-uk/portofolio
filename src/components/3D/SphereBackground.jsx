import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei'; // Assuming @react-three/drei for common shapes
import { MeshStandardMaterial } from 'three';

// Note: @react-three/drei is not yet installed. We will install it in the next step.

function AnimatedSphere() {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;
    }
  });

  return (
    <Sphere args={[1, 32, 32]} ref={mesh}>
      <meshStandardMaterial color={'#3498DB'} wireframe />
    </Sphere>
  );
}

function SphereBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}

export default SphereBackground; 