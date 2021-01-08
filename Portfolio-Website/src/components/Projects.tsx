import React from "react"
import {useEffect, useState} from 'react';
import "../styles/Projects.scss"
import { ProjectCardLeft, ProjectCardRight } from "./card/ProjectCard";
import Data from "../assets/data"

const Project = () => {
    return(
        <>
        <section id="projects">
            <div>
                <h3 className="title">Projects I’ve have worked on</h3>
                <div className="projectsContainer">
                {Object.keys(Data.projects).map((key, i) => {
                    const project = Data.projects[key]
                    return (
                    <>
                        {i% 2 == 0 ? (
                            <ProjectCardLeft
                            title={project.title}
                            technologies_text={project.technologies}
                            code_link={project.link}
                            description={project.description}
                            />
                        ) : (
                            <ProjectCardRight
                            title={project.title}
                            technologies_text={project.technologies}
                            code_link={project.link}
                            description={project.description}
                            />
                        )}
                    </>
                    )
                })} 
                </div>
            </div>
        </section>
        </>
    )
}

export default Project
