import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text, Box, Cylinder, Cone, Torus } from '@react-three/drei'; // Import more shapes
import * as THREE from 'three';

// Component to render a single interactive skill element
function InteractiveSkillElement({ position, name, shape: Shape }) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (mesh.current) {
      // Scale animation on hover
      mesh.current.scale.lerp(hovered ? new THREE.Vector3(1.2, 1.2, 1.2) : new THREE.Vector3(1, 1, 1), 0.1);
      // Optional: Add rotation animation
      mesh.current.rotation.y += 0.001;
    }
  });

  return (
    <Shape
      args={Shape === Sphere ? [0.2, 16, 16] : [0.3, 32]} // Adjust args based on shape
      position={position}
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial color={hovered ? '#E74C3C' : '#3498DB'} /> {/* Change color on hover */}
      <Text position={[0, 0.3, 0]} fontSize={0.2} color="white" anchorX="center" anchorY="middle">
        {name}
        <meshBasicMaterial attach="material" color="white" />
      </Text>
    </Shape>
  );
}

// Component to render skills in 3D
function Skills3D() {
  const groupRef = useRef(); // Ref for the group

  // Placeholder skills data with shapes and positions in a circle
  const skills3D = useMemo(() => {
    const skillsData = [
      { name: 'React', shape: Sphere },
      { name: 'Three.js', shape: Box },
      { name: 'Tailwind CSS', shape: Cylinder },
      { name: 'Framer Motion', shape: Cone },
      { name: 'AI/ML', shape: Torus },
      { name: 'Cybersecurity', shape: Sphere },
      { name: 'Java', shape: Box },
      { name: 'Python', shape: Cylinder },
      { name: 'MySQL', shape: Cone },
    ];

    const radius = 2.5;
    const angleStep = (Math.PI * 2) / skillsData.length;

    return skillsData.map((skill, index) => {
      const angle = index * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      return { ...skill, position: [x, y, 0] };
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003; // Rotate the entire group
    }
  });

  return (
    <group ref={groupRef}> {/* Add ref to the group */}
      {skills3D.map((skill, index) => (
        <InteractiveSkillElement
          key={index}
          position={skill.position}
          name={skill.name}
          shape={skill.shape}
        />
      ))}
    </group>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-[#121212] text-[#E0E0E0]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#3498DB] mb-8 text-center">Skills</h2>
        {/* 3D Skills Visualization */}
        <div className="w-full h-96">
          <Canvas camera={{ position: [0, 0, 5] }}>
             <ambientLight intensity={0.5} />
             <pointLight position={[10, 10, 10]} />
             <Skills3D />
          </Canvas>
        </div>

        {/* Optional: Add a list of skills below or elsewhere */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
           {/* You can add your skills data here for a traditional list */}
           <p className="text-lg text-gray-400">3D visualization of skills above. Add a traditional list here if needed.</p>
        </div>

      </div>
    </section>
  );
}

export default Skills; 