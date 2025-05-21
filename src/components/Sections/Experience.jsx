import React from 'react';
import Timeline from '../Timeline';

function Experience() {
  const experienceData = [
    {
      title: 'Technology Support Analyst',
      subtitle: 'Frenkel Topping Group',
      date: 'May 2025 – Present',
      description: 'Provided first-line application and end-user computing (EUC) support to enhance user experience across FTG sites. Delivered day-to-day technical support for M365, case-management systems, and internal applications to improve operational efficiency. Supported configuration, workflow design, access control, and template changes for business-critical systems. Resolved incidents within defined SLAs and managed technology changes and escalations with external suppliers. Engaged with colleagues to promote technology adoption, provide training, and create user documentation. Strengthened IT governance through proactive risk reduction, data privacy controls, and incident prevention. Maintained liaison with MSPs and vendors to ensure consistent delivery of high-quality technical services. Acted as a technology ambassador within the organisation, facilitating smooth rollouts of new systems and process optimisations.',
    },
    {
      title: 'Product Developer intern/Junior consultant',
      subtitle: 'Leadership Tribe',
      date: 'Jul 2024 – Sep 2024',
      description: 'Gained hands-on experience with development, project management, client relations, marketing and design for a start-up project. Developed in 30 days an AI-powered agentic tool using Lang Graph, Open Web UI, and various APIs to automate data gathering, content creation, and article generation. Shadowed and collaborated with senior management consultants to identify challenges and innovate features that would increase productivity. Strategized where AI could be incorporated into their workflows, utilizing RAG models and vector databases for efficiency. Implemented web scraping and crawling tools (e.g. Beautiful Soup, Tavily Web Search) and integrated pipelines for data processing and enhancement.',
    },
    {
      title: 'Widening Access & Student Ambassador',
      subtitle: 'Brunel University London',
      date: 'Jul 2022 – May 2024',
      description: 'Assisted in information sessions, offering a comprehensive overview of campus life and academic programs. Conducted campus tours for prospective students and parents, highlighting university facilities and resources.',
    },
    {
      title: 'STEM Ambassador',
      subtitle: 'Brunel University London',
      date: 'Jul 2023 – May 2024',
      description: 'Conducted presentations and workshops with the aim of fostering excitement and interest in STEM subjects.',
    },
    {
      title: 'Sales Manager',
      subtitle: 'Juss Marketing',
      date: 'Jun 2022 – Jul 2022',
      description: 'Engaging in door-to-door sales for a milkman product requires effective communication, persuasion, and a customer-centric approach.',
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 bg-[#121212] text-[#E0E0E0]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#3498DB] mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          <Timeline items={experienceData} />
        </div>
      </div>
    </section>
  );
}

export default Experience; 