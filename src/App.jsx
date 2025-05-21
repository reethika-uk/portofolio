import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Education from './components/Sections/Education';
import Certifications from './components/Sections/Certifications';
import Contact from './components/Sections/Contact';
import Resume from './components/Sections/Resume';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="bg-gray-900 text-gray-100 min-h-screen">
        <Navbar />
        <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
