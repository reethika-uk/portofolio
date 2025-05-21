import React from 'react';
import ParticleBackground from '../3D/ParticleBackground'; // Import the 3D background component
import RotatingCube from '../3D/RotatingCube'; // Import the RotatingCube component
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Canvas } from '@react-three/fiber';

function Home() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-[#E0E0E0] overflow-hidden">
      {/* 3D Background - Particle System */}
      <ParticleBackground />

      {/* 3D foreground elements - Rotating Cubes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {/* Add some rotating cubes */}
          <RotatingCube position={[-2, 1, 0]} color={'#E74C3C'} /> {/* Red cube */}
          <RotatingCube position={[2, -1, 0]} color={'#3498DB'} /> {/* Blue cube */}
          <RotatingCube position={[0, 0, -2]} color={'#E0E0E0'} /> {/* Light grey cube */}
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 p-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#3498DB] mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hi, I'm Reethika Kondaveeti
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          A Tech Girl | Computer Science with AI Student
        </motion.p>
        {/* Add a button or link to learn more */}
        <motion.a
          href="#about"
          className="bg-[#3498DB] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
}

export default Home; 