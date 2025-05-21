import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text, Sphere, Cylinder, Cone, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Component to render a single project element with different shapes
function ProjectElement({ position, project, delay = 0, shape: Shape, onProjectClick }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initial scale for animation
  const initialScale = useMemo(() => new THREE.Vector3(0.01, 0.01, 0.01), []);
  const targetScale = useMemo(() => new THREE.Vector3(0.8, 0.8, 0.8), []); // Adjusted target scale for circular layout

  useEffect(() => {
    // Set initial scale when mounted
    if (mesh.current) {
      mesh.current.scale.copy(initialScale);
    }
    // Set mounted state after a delay to start animation sequentially
    const timeout = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timeout);
  }, [initialScale, delay]);

  useFrame(() => {
    if (mesh.current) {
      // Scale animation on hover
      mesh.current.scale.lerp(hovered ? new THREE.Vector3(1, 1, 1) : (mounted ? targetScale : initialScale), 0.1); // Adjusted scale on hover

      // Optional: Add subtle rotation
      mesh.current.rotation.y += 0.002;
    }
  });

  // Handle click event
  const handleClick = () => {
    console.log('Clicked project:', project.title);
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  return (
    <Shape
      args={Shape === Box ? [0.7, 0.7, 0.7] : [0.4, 32]} // Adjusted args for circular layout
      position={position}
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <meshStandardMaterial color={hovered ? '#E74C3C' : '#3498DB'} />
      <Text position={[0, 0.5, 0]} fontSize={0.15} color="white" anchorX="center" anchorY="middle">
        {project.title}
        <meshBasicMaterial attach="material" color="white" />
      </Text>
    </Shape>
  );
}

function ProjectShowcase3D({ projects, onProjectClick }) {
  const groupRef = useRef(); // Ref for the group

  // Define shapes for each project
  const projectShapes = useMemo(() => [
    Box, Sphere, Cylinder, Cone, Torus, Box, Sphere,
  ], []);

  // Calculate positions for each project element in a circle
  const elementPositions = useMemo(() => {
    const radius = 2; // Adjust the radius as needed
    const angleStep = (Math.PI * 2) / projects.length;

    return projects.map((_, index) => {
      const angle = index * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      return [x, y, 0];
    });
  }, [projects]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001; // Subtle rotation for the group
    }
  });

  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group ref={groupRef}> {/* Add ref to the group */}
          {/* Render a ProjectElement for each project with animation delay and shape */}
          {projects.map((project, index) => (
            <ProjectElement
              key={index}
              position={elementPositions[index]}
              project={project}
              delay={index * 100}
              shape={projectShapes[index % projectShapes.length]}
              onProjectClick={onProjectClick}
            />
          ))}
        </group>
      </Canvas>
    </div>
  );
}

export default ProjectShowcase3D; 