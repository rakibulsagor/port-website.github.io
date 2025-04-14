import React from 'react';

function ProjectCard({ title, description, githubLink, liveLink }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
    );
}

export default ProjectCard;