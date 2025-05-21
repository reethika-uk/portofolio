import React from 'react';
import profilePicture from '../../assets/WhatsApp Image 2025-05-21 at 00.58.33.jpeg'; // Import the profile picture

function About() {
  return (
    <section id="about" className="py-16 px-4 bg-[#121212] text-[#E0E0E0]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={profilePicture}
            alt="Reethika Kondaveeti"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="flex-grow">
          <h2 className="text-4xl font-bold text-[#3498DB] mb-6">About Me</h2>
          <p className="text-lg mb-6">
            I am a tech girl pursuing a BSc in Computer Science with Artificial Intelligence.
            I am passionate about leveraging technology to solve real-world problems and constantly learning new skills.
            My experience includes technology support, product development, and various STEM initiatives.
          </p>
          <p className="text-lg mb-4">
            Here is a brief summary based on your resume:
            Provide first-line application and end-user computing (EUC) support to enhance user experience across FTG sites.
	    Delivered day-to-day technical support for M365, case-management systems, and internal applications to improve operational efficiency.
	    Gained hands-on experience with development, project management, client relations, marketing and design for a start-up project.
	    Developed in 30 days an AI-powered agentic tool using Lang Graph, Open Web UI, and various APIs to automate data gathering, content creation, and article generation.
          </p>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-[#3498DB] mb-3">Contact Information</h3>
            <p>Email: reethikakondaveeti@gmail.com</p>
            <p>Phone: +44 078888 68826</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold text-[#3498DB] mb-3">Connect with Me</h3>
            <div className="flex space-x-4">
              <a href="http://www.linkedin.com/in/reethika-kondaveeti-9b21b0297" target="_blank" rel="noopener noreferrer" className="text-[#3498DB] hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/reethika-uk" target="_blank" rel="noopener noreferrer" className="text-[#3498DB] hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 