import React from "react"
import {useEffect, useState} from 'react';
import "../styles/Work.scss"

const Work = () => {

    const [currentExperience, setCurrentExperience] = useState<string>("finary");
    
    return (
        <>
            <section id="experience">
                <div className="work_container">
                    <h3 className="title">My Experience</h3>
                    <div className="tab_container">
                        <div className="work_list">
                            <div>
                                <button 
                                onClick={() => setCurrentExperience("finary")}
                                className={currentExperience==="finary" ? "work_name_button_highlight" : "work_name_button"}
                                >
                                    Finary.io
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
                        </div>

                        <div className="work_tab_container">

                            

                            { currentExperience==="finary" &&(
                            <div>
                                <h4 className="experience_title">Software Developer Intern</h4>
                                <h4 className="company">Finary.io</h4>
                                <h5>May 2020 - July 2020</h5>

                                <ul className="experience_description">
                                    <li>
                                    Collaborated with MIT and Harvard students to develop an MVP for a fintech startup, currently in the testing phase
                                    </li>

                                    <li>
                                    Designed and implemented a minimum viable product backed system within 3 weeks to get user feedbacks
                                    </li>

                                    <li>
                                    Developed REST API using express.js and deployed it over Firebase cloud function to reduce operation cost by 30%
                                    </li>

                                    <li>
                                    Configured Alpaca API to use real-time paper trading function and provide stocks portfolio for users
                                    </li>

                                    <li>
                                    Followed Agile Scrum methodology using Gitlab boards by performing code review
                                    </li>
                                </ul>
                            </div>)}

                            { currentExperience==="csuf" &&(
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