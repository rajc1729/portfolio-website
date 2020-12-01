import React from "react"
import {useEffect, useState} from 'react';
import "../styles/Projects.scss"
import { ProjectCardLeft, ProjectCardRight } from "./card/ProjectCard";


const Project = () => {
    return(
        <>
        <section id="projects">
            <div>
                <h3 className="title">Projects I’ve have worked on</h3>
                <div className="projectsContainer">
                <ProjectCardLeft
                title="IMDB movie review data's sentiment analysis"
                technologies_text="Python, XGBoost, RNN"
                code_link="https://github.com/BrChung/swe-portfolio/blob/production/src/styles/Work.scss"
                description="Devised a sentiment analysis model to find out movie review sentiment by utilizing XGBoost & deep learning RNN's on Amazon sage maker and deployed it over AWS"
                />
                <ProjectCardRight
                title="IMDB movie review data's sentiment analysis"
                technologies_text="Python, XGBoost, RNN"
                code_link="https://github.com/BrChung/swe-portfolio/blob/production/src/styles/Work.scss"
                description="Devised a sentiment analysis model to find out movie review sentiment by utilizing XGBoost & deep learning RNN's on Amazon sage maker and deployed it over AWS"
                />
                </div>
            </div>
        </section>
        </>
    )
}

export default Project
