import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-16 px-4 bg-[#121212] text-[#E0E0E0]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#3498DB] mb-8 text-center">Resume</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center space-y-6">
              <p className="text-lg text-gray-300 text-center">
                Download my latest resume to learn more about my experience and qualifications.
              </p>
              <a
                href="/Reethika final resume2025pdf.pdf"
                download
                className="px-8 py-4 bg-[#3498DB] text-white rounded-lg hover:bg-[#2980B9] transition-colors duration-300 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume; 