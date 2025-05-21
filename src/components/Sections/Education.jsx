import React from 'react';
import Timeline from '../Timeline';

function Education() {
  const educationData = [
    {
      title: 'BSc Computer Science with Artificial Intelligence',
      subtitle: 'Brunel University, London',
      date: 'Sep 2022 – Jun 2025',
      description: 'Relevant Modules: Software Engineering, Artificial Intelligence, Digital Media and Games, Algorithms and applications, Networks and Operating Systems, User Interface, Logic and computation, Systems organizations, Data Information, Cybersecurity.',
    },
  ];

  return (
    <section id="education" className="py-16 px-4 bg-[#121212] text-[#E0E0E0]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#3498DB] mb-8 text-center">Education</h2>
        <div className="space-y-8">
          <Timeline items={educationData} />
        </div>
      </div>
    </section>
  );
}

export default Education;