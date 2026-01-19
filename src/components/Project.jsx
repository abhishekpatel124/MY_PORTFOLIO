import React from 'react'

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project_Card">
      <img src={image} alt={title} />
      <h3>{description}</h3>
    </div>
  )
}

const Project = ({ projects }) => {
  return (
    <div id="projects" className="project-section">
      <h1>Projects</h1>
      <div className="main_project">
        {projects && projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
          
        ))}
      </div>
    </div>
  )
}

export default Project
