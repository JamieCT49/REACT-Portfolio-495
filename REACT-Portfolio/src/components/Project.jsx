import React from "react";

function Project ({ title, imageSrc, deployedLink, githubLink }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={imageSrc} alt={title}/>
            <div>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">Github Repo</a>
            </div>
        </div>
    );
};

export default Project;