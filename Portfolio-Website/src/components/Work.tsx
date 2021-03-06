import React from "react"
import {useEffect, useState} from 'react';
import "../styles/Work.scss"

const Work = () => {

    const [windowWidth, setWindowWidth] = useState(null)
    const [currentExperience, setCurrentExperience] = useState<string>("collabcafe");

    const updateWindowSize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateWindowSize)
        updateWindowSize()
      }, [])
    
    return (
        <>
            <section id="experience">
                <div className="work_container">
                    <h3 className="title">My Experience</h3>
                    <div className="tab_container">



                    {windowWidth < 768 &&  (<div className="work_list_flex">
                            <div>
                                <button
                                onClick={() => setCurrentExperience("collabcafe")}
                                className={currentExperience==="collabcafe" ? "work_flex_name_button_highlight" : "work_flex_name_button"}
                                >
                                    CollabCafe
                                </button>
                            </div>

                            <div>
                                <button
                                onClick={() => setCurrentExperience("csuf")}
                                className={currentExperience==="csuf" ? "work_flex_name_button_highlight" : "work_flex_name_button"}
                                >
                                    CSUF
                                </button>
                            </div>
                            <div>
                                <button
                                onClick={() => setCurrentExperience("techmicra")}
                                className={currentExperience==="techmicra" ? "work_flex_name_button_highlight" : "work_flex_name_button"}
                                >
                                    Techmicra
                                </button>
                            </div>
                        </div>)}

                        {windowWidth > 768 &&  (<div className="work_list">
                            <div>
                                <button
                                onClick={() => setCurrentExperience("collabcafe")}
                                className={currentExperience==="collabcafe" ? "work_name_button_highlight" : "work_name_button"}
                                >
                                    CollabCafe
                                </button>
                            </div>
                            <div>
                                <button
                                onClick={() => setCurrentExperience("csuf")}
                                className={currentExperience==="csuf" ? "work_name_button_highlight" : "work_name_button"}
                                >
                                    CSUF
                                </button>
                            </div>
                            <div>
                                <button
                                onClick={() => setCurrentExperience("techmicra")}
                                className={currentExperience==="techmicra" ? "work_name_button_highlight" : "work_name_button"}
                                >
                                    Techmicra
                                </button>
                            </div>
                        </div>)}



                        <div className="work_tab_container">

                            { currentExperience==="collabcafe" &&(
                            <div>
                                <h4 className="experience_title">Full-stack software engineer Intern</h4>
                                <h4 className="company">CollabCafe, Inc.</h4>
                                <h5>Febuary 2021 - Present</h5>

                                <ul className="experience_description">
                                    <li>
                                    Implementing 35 reusable components using Next.js, Typescript, and 30 REST APIs using Django REST Framework
                                    </li>

                                    <li>
                                    Expedited APIs response time by utilizing asynchronous task queue using Celery for running background task
                                    </li>

                                    <li>
                                    Building a video chat application using Kubernetes cluster and opensource WebRTC Jits framework to serve 1000 users
                                    </li>
                                </ul>
                            </div>)}


                            { currentExperience==="csuf" &&(
                            <div>
                                <div>
                                    <h4 className="experience_title">Student Assistant at University Data Center</h4>
                                    <h4 className="company">California state university Fullerton</h4>
                                    <h5>August 2020 - Present</h5>

                                    <ul className="experience_description">
                                        <li>
                                        Configured Nginx to setup reverse proxy and using telnet, grep Linux tools for testing, debugging, and troubleshooting
                                        </li>

                                        <li>
                                        Reduced deployment time by developing bash scripts to automate build and deployment on Ubuntu servers
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="experience_title">Graduate Research Assistant</h4>
                                    <h4 className="company">California state university Fullerton</h4>
                                    <h5>January 2020 - July 2020</h5>

                                    <ul className="experience_description">
                                        <li>
                                        Conducted research to understand impacts on cancer, based on gender, ethnicity and geographic region
                                        </li>

                                        <li>
                                        Analyzed the subset of data using statistical methods such as multi-comparisons, conducting meta-analysis with prior
                                        studies related to mortality and morbidity for a different type of cancer
                                        </li>

                                        <li>
                                        Identified importance of various features through domain expert and removed irrelevant features
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>)}

                            { currentExperience==="techmicra" &&(
                            <div>
                                <h4 className="experience_title">Software Developer Intern</h4>
                                <h4 className="company">Techmicra IT solutions</h4>
                                <h5>January 2018 - June 2018</h5>

                                <ul className="experience_description">
                                    <li>
                                    Created a unit testing framework on all backend modules using Python which reduced 20% bugs in the overall system
                                    </li>

                                    <li>
                                    Designed and optimized SQL queries and stored procedures for faster execution; retrieval of data to the database
                                    </li>

                                    <li>
                                    Managed and co-founded the committee to organize various events among employees
                                    </li>
                                </ul>
                            </div>)}
                            

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work