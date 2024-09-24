import React, { useState } from 'react';
import './Portfolio.scss';

const projects = [
  {
    title: 'Booki',
    description: "mon site booki",
    image: '/Booki.jpg',
    codeLink: 'https://github.com/Wiam-Bou/BOOKI.git',
    siteLink: 'https://github.com/Wiam-Bou/BOOKI.git',
  },
  {
    title: 'Sophie Bluel',
    description: "",
    image: '/sophie-bluel.png',
    codeLink: 'https://github.com/sarahiftsn/Portfolio-architecte-sophie-bluel',
  },
  
  {
    title: 'Nina Craducci',
    description: "Kasa",
    image: '/Nina.jpg',
    codeLink: 'https://github.com/Wiam-Bou/Kasa-Project.git',
    siteLink: 'https://https://github.com/Wiam-Bou/Kasa-Project.git.com'
  },
  
  {
    title: 'Kasa',
    description: "Kasa",
    image: '/Kasa.png',
    codeLink: 'https://github.com/Wiam-Bou/Kasa-Project.git',
    siteLink: 'https://https://github.com/Wiam-Bou/Kasa-Project.git.com'
  },
  // Ajoutez d'autres projets ici...
];

const ProjectModal = ({ project, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="modal-links">
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Voir le code</a>
          {project.siteLink && (
            <a href={project.siteLink} target="_blank" rel="noopener noreferrer">Voir le site</a>
          )}
        </div>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className='titlecontainer'>
        <h1 className="title1">Mon Portfolio</h1>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="card" key={index} onClick={() => setSelectedProject(project)}>
            <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}>
              {/* La description n'est plus affichée ici */}
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default Portfolio;