import React from 'react';

function Certifications() {
  // You can add your certifications data here
  const certifications = [
    // Example: { name: 'AWS Certified Cloud Practitioner', link: '#' },
    // Add details of certifications you will complete
  ];

  return (
    <section id="certifications" className="py-16 px-4 bg-[#121212] text-[#E0E0E0]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#3498DB] mb-8 text-center">Certifications</h2>
        <div className="text-center text-lg text-gray-400">
          {/* You can map over your certifications data here */}
          {certifications.length === 0 ? (
            <p>Certifications will be listed here once completed.</p>
          ) : (
            <ul className="list-none p-0">
              {certifications.map((cert, index) => (
                <li key={index} className="mb-2">
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[#3498DB] hover:underline">
                      {cert.name}
                    </a>
                  ) : (
                    cert.name
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default Certifications; 