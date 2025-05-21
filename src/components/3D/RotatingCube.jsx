import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei'; // Assuming @react-three/drei for common shapes
import * as THREE from 'three'; // Import THREE

// Note: @react-three/drei is already installed.

function RotatingCube(props) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false); // State to track hover

  // Rotate mesh and scale on hover
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.005;

      // Scale animation on hover
      mesh.current.scale.lerp(hovered ? new THREE.Vector3(1.2, 1.2, 1.2) : new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  return (
    <Box
      args={[1, 1, 1]}
      ref={mesh}
      {...props}
      onPointerOver={() => setHovered(true)} // Set hovered to true on pointer over
      onPointerOut={() => setHovered(false)} // Set hovered to false on pointer out
    >
      <meshStandardMaterial color={props.color || 'orange'} />
    </Box>
  );
}

export default RotatingCube; 