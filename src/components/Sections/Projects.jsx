import React, { useState } from 'react';
import ProjectShowcase3D from '../3D/ProjectShowcase3D';

function Projects() {
  const projects = [
    {
      title: "AI Content Generation Tool",
      date: "Mar 2025 – Apr 2025",
      description: "Developed an advanced sentiment analysis system with an interactive web interface using Streamlit and FastAPI.",
      details: [
        "Built and compared four ML models: LSTM (85%), LightGBM (86%), Logistic Regression (89%), and an Ensemble Model (91% accuracy).",
        "Enabled both single text and batch sentiment analysis with real-time confidence scores and model comparison capabilities.",
        "Integrated CSV upload, processing time tracking, analysis history, and export features.",
        "Utilized PyTorch, scikit-learn, LightGBM, Pandas, and NumPy for model training, testing, and evaluation.",
        "Engineered modular architecture with components for API endpoints, ML models, web UI, and data processing.",
        "Deployed robust API endpoints (/predict, /batch, /compare) and developed scripts for training and hyperparameter tuning.",
        "Implemented logging, monitoring, error handling, and a test suite using pytest to ensure maintainability."
      ]
    },
    {
      title: "Software Metrics and Quality Analysis",
      date: "Oct 2024 – Dec 2024",
      description: "Conducted a comprehensive analysis of software metrics using datasets (C&Kdata.csv and code.xlsx) to evaluate software quality and defect tendencies.",
      details: [
        "Analyzed metrics such as Weighted Methods per Class (WMC), Coupling Between Objects (CBO), Lack of Cohesion in Methods (LCOM), and Cyclomatic Complexity (CC) to identify their correlation with defects.",
        "Created scatter plots and bar charts using Excel to visualize relationships between metrics and bugs, identifying outliers and proposing improvements.",
        "Calculated and interpreted key statistics such as mean, median, and correlation trends to provide actionable insights into improving software maintainability.",
        "Documented findings in a structured report, emphasizing data-driven recommendations for refactoring complex and defect-prone classes.",
        "Applied concepts like cohesion, coupling, and complexity to demonstrate how software quality can be improved through systematic analysis."
      ]
    },
    {
      title: "Cybersecurity Solutions for HealthTech Innovations",
      date: "Oct 2024 – Nov 2024",
      description: "Conducted a comprehensive network diagram for a medical tech company's IT infrastructure using Lucid Chart, mapping devices, operating systems, IP addresses, and their roles.",
      details: [
        "Identified potential threats and mapped attack vectors using the MITRE ATT&CK framework. Analysed vulnerabilities in Windows Server 2019 (CVE-2021-31166) and ransomware threats targeting healthcare.",
        "Created a detailed risk register, highlighting confidentiality, integrity, and availability risks, and proposed mitigations using security frameworks like NCSC and SANS.",
        "Suggested appropriate cybersecurity tools and countermeasures to enhance IT resilience."
      ]
    },
    {
      title: "Graph Coloring using Heuristic Search Algorithm",
      date: "Mar 2023 – May 2024",
      description: "Developed a Java-based solution using a heuristic search algorithm to optimize graph colouring using fitness solution.",
      details: [
        "Represented a Graph in vector format, where each index corresponds to a node in the graph and value at each index represents the colour assigned to that node.",
        "Designed robust code to handle multiple input scenarios and minimize errors."
      ]
    },
    {
      title: "Web Development - Deforestation Awareness",
      date: "Sep 2023 – May 2024",
      description: "Led the development of a website as a team addressing the impacts of deforestation.",
      details: [
        "Utilized HTML, CSS, and JavaScript for web structure, style, and interactivity.",
        "Explored Java for backend development, experience in React, Node.js. Proficient in MySQL using spring Boot. Led the team being product owner and scrum master."
      ]
    },
    {
      title: "Swift Bot with Dance Function",
      date: "Sep 2022 – May 2023",
      description: "Collaborated with a team to develop a game named Simon for a university group assessment, with a focus on programming a miniature robot.",
      details: [
        "Programmed the robot using Java to execute precise dance movements across multiple directions and angles.",
        "Created comprehensive flowcharts, pseudocode, and UML designs to support the development, translating these into a functional robot dance program using OOP."
      ]
    },
    {
      title: "Programming Dice Roll Game",
      date: "Sep 2021 – May 2022",
      description: "Led the development of a Java-based dice game to illustrate the probability of rolling various numbers as part of a group project.",
      details: [
        "Utilized flowcharts and UML designs for effective software design, ensuring clear structure and functionality.",
        "Coordinated team efforts, providing guidance and maintaining project timelines while fostering collaboration within the group."
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 px-4 bg-[#121212] text-[#E0E0E0]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-[#3498DB] mb-8 text-center">Projects</h2>

        {selectedProject ? (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#E0E0E0] mb-4">{selectedProject.title}</h3>
            <p className="text-lg text-gray-300 mb-2">{selectedProject.date}</p>
            <p className="text-base text-gray-300 mb-4">{selectedProject.description}</p>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-1">
              {selectedProject.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <button
              className="mt-4 bg-[#3498DB] text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <ProjectShowcase3D projects={projects} onProjectClick={handleProjectClick} />

            <div className="space-y-12 mt-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#E0E0E0] mb-1">{project.title}</h3>
                  <p className="text-lg text-gray-300 mb-2">{project.date}</p>
                  <p className="text-base text-gray-300 mb-4">{project.description}</p>
                  <ul className="list-disc list-inside text-base text-gray-300 space-y-1">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects; 