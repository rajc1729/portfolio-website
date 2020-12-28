import React from "react"
import "../styles/About.scss"
import gls from "../images/gls.png"
import csuf from "../images/csuf.png"
import xaviers from "../images/xaviers.png"
import Data from "../assets/data"
import ProficiencyRating from "./card/ProficiencyRating"

const About = () => {


    const languageProficiency = (percentage: number): string => {
        if (percentage >= 85) {
            return 'Proficient';
        } else if (percentage >= 70) {
            return 'Advanced';
        }
        else if (percentage >= 65) {
        return 'Upper Intermediate';
        }
        else if (percentage >= 55) {
            return 'Intermediate';
        }
        else {
            return 'Elementary';
        }
    }
    return (
        <>
        <section id="about">
            <h3 className="title">About Me</h3>

            <div className="grid_container">
                <div id="introduction"  className="first_card">
                    <div className="card_title_container">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                        <path d="M7 6.51672C3.3106 6.51672 0.30896 9.30399 0.30896 12.7298C0.30896 12.8789 0.439299 13 0.599884 13H13.4001C13.5607 13 13.6911 12.8789 13.6911 12.7298C13.6911 9.30396 10.6894 6.51672 7 6.51672Z" fill="#091133"/>
                        <path d="M6.99998 5.94296C8.76732 5.94296 10.2 4.61258 10.2 2.97148C10.2 1.33038 8.76732 0 6.99998 0C5.23264 0 3.79993 1.33038 3.79993 2.97148C3.79993 4.61258 5.23264 5.94296 6.99998 5.94296Z" fill="#091133"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="14" height="13" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <span>&nbsp;&nbsp;Introduction</span>
                    </div>

                    <div>
                    <p className="description">
                        {Data.introductionPara1}
                    </p>
                    <p className="description">
                         {Data.introductionPara2}
                    </p>
                    </div>

                </div>

                <div id="languages"  className="second_card">
                    <div className="card_title_container">
                        
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="#091133"/>
                        </svg>

                        <span>&nbsp;&nbsp;Language</span>
                    </div>

                    <div className="language_container">

                        {Object.keys(Data.language).map((key) => {
                            const language = Data.language[key]

                            return (
                                <div className="language" key={key}>
                                    <div>
                                        <span className="language_name">{language.name}</span>
                                        <p className="language_confidence_level">{languageProficiency(language.rating)}</p>
                                    </div>
                                    <div>
                                        <ProficiencyRating percentage = {language.rating}/>
                                    </div>
                                </div>
                            )
                        
                        })}
                        
                    </div>
                </div>

                <div id="technologies" className="first_card">
                    <div className="card_title_container">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9 11.3C18 10.8 18 10.4 18 10C18 9.6 18 9.2 17.9 8.7L19.8 7L17.5 3L15.1 3.8C14.4 3.3 13.7 2.8 12.9 2.5L12.3 0H7.70001L7.20001 2.5C6.30001 2.8 5.60001 3.3 4.90001 3.8L2.50001 3L0.200012 7L2.10001 8.7C2.00001 9.2 2.00001 9.6 2.00001 10C2.00001 10.4 2.00001 10.8 2.10001 11.3L0.200012 13L2.50001 17L4.90001 16.2C5.60001 16.7 6.30001 17.2 7.10001 17.5L7.70001 20H12.4L12.9 17.5C13.7 17.2 14.5 16.8 15.1 16.2L17.5 17L19.8 13L17.9 11.3ZM10 14C7.80001 14 6.00001 12.2 6.00001 10C6.00001 7.8 7.80001 6 10 6C12.2 6 14 7.8 14 10C14 12.2 12.2 14 10 14Z" fill="#091133"/>
                    </svg>


                    <span>&nbsp;&nbsp;Technologies</span>
                    </div>

                    <div className="technologies_container">
                        <span>Frameworks</span>
                        <div className="technologies_text_container">
                            {Object.keys(Data.technologies.Frameworks).map((key) => {
                                const framework = Data.technologies.Frameworks[key]
                                return (
                                <span className="technologies_text" key = {key}>{framework.name}</span>
                                )
                            })} 
                        </div>
                    </div>

                    <div className="technologies_container">
                    <span>Databases</span>
                        <div className="technologies_text_container">
                            {Object.keys(Data.technologies.Databases).map((key) => {
                                const framework = Data.technologies.Databases[key]
                                return (
                                <span className="technologies_text" key = {key}>{framework.name}</span>
                                )
                            })} 
                        </div>
                    </div>

                    <div className="technologies_container">
                        <span>Tools</span>
                        <div className="technologies_text_container">
                            {Object.keys(Data.technologies.Tools).map((key) => {
                                const framework = Data.technologies.Tools[key]
                                return (
                                <span className="technologies_text" key = {key}>{framework.name}</span>
                                )
                            })} 
                        </div>
                    </div>

                </div>

                <div id="education" className="first_card">
                    <div className="card_title_container">
                    <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9545 4.52813L23 4.15078L11.5 0L0 4.15081L11.5 8.30155L20.3864 5.09415V7.58054C20.2242 7.71219 20.125 7.88432 20.125 8.07305C20.125 8.48501 20.594 8.82016 21.1705 8.82016C21.7469 8.82016 22.2159 8.48501 22.2159 8.07305C22.2159 7.88429 22.1167 7.71219 21.9546 7.58054V4.52813H21.9545Z" fill="black"/>
                    <path d="M11.5 9.55706L4.18176 6.91565V12.3689C4.18176 13.813 7.45823 14.9837 11.4999 14.9837C15.5417 14.9837 18.8181 13.813 18.8181 12.3689V6.91565L11.5 9.55706Z" fill="black"/>
                    </svg>




                    <span>&nbsp;&nbsp;Education</span>
                    </div>

                    <div>
                    
                        <div className="university_container">

                            <div className="university_box">
                                <div className="university_img">
                                <img src={csuf} ></img>
                                </div>
                                <div className="university_card">
                                    <span className="university_name">{Data.education.id1.institution}</span>
                                    <p className="language_confidence_level">{Data.education.id1.degree}</p>
                                    <p className="language_confidence_level">{Data.education.id1.date}</p>
                                </div>
                            </div>

                            <div className="university_box">
                                <div className="university_img">
                                <img src={gls} ></img>
                                </div>
                                <div className="university_card">
                                    <span className="university_name">{Data.education.id2.institution}</span>
                                    <p className="language_confidence_level">{Data.education.id2.degree}</p>
                                    <p className="language_confidence_level">{Data.education.id2.date}</p>
                                </div>
                            </div>

                            <div className="university_box">
                                <div className="university_img">
                                <img src={xaviers} ></img>
                                </div>
                                <div className="university_card">
                                    <span className="university_name">{Data.education.id3.institution}</span>
                                    <p className="language_confidence_level">{Data.education.id3.degree}</p>
                                    <p className="language_confidence_level">{Data.education.id3.date}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

                <div id="intrest" className="second_card">
                    <div className="card_title_container">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8577 12.0517L11.8116 12.0325C11.7907 12.0822 11.7801 12.135 11.7801 12.1887V16.4906C11.7801 16.7161 11.9631 16.8991 12.1886 16.8991C12.4141 16.8991 12.5971 16.7161 12.5971 16.4906V13.1748L18.3526 18.9303C18.4322 19.01 18.5369 19.05 18.6414 19.05C18.7459 19.05 18.8506 19.01 18.9302 18.9303C19.0899 18.7706 19.0899 18.5124 18.9302 18.3527L13.1747 12.5972H16.4905C16.7163 12.5972 16.8989 12.4142 16.8989 12.1887C16.8989 11.9632 16.7163 11.7802 16.4905 11.7802H12.1886C12.1351 11.7802 12.082 11.7913 12.0327 11.8115L12.0327 11.8115L12.0325 11.8116C11.9327 11.8529 11.8531 11.9326 11.8115 12.0325L11.8577 12.0517ZM11.8577 12.0517C11.8394 12.0955 11.8301 12.1417 11.8301 12.1887V16.4906C11.8301 16.6885 11.9907 16.8491 12.1886 16.8491C12.3865 16.8491 12.5471 16.6885 12.5471 16.4906V13.1248L16.4905 12.5472C16.6887 12.5472 16.8489 12.3866 16.8489 12.1887C16.8489 11.9908 16.6887 11.8302 16.4905 11.8302H12.1886C12.142 11.8302 12.0954 11.8399 12.0516 11.8578C11.9642 11.894 11.8942 11.9639 11.8577 12.0517Z" fill="#091133" stroke="black" strokeWidth="0.1"/>
                    <path d="M6.96671 7.18796L6.96687 7.18789L7.1417 6.94775L7.18783 6.96704C7.18784 6.96701 7.18785 6.96699 7.18785 6.96697C7.20866 6.91718 7.2193 6.86405 7.2193 6.81081V2.50892C7.2193 2.28342 7.03631 2.10043 6.81081 2.10043C6.58531 2.10043 6.40232 2.28342 6.40232 2.50892V5.8247L0.647144 0.0695279C0.487448 -0.0901682 0.229224 -0.0901682 0.0695279 0.0695279C-0.0901678 0.229224 -0.0901682 0.487447 0.0695268 0.647143C0.0695272 0.647144 0.0695275 0.647144 0.0695279 0.647144L5.82435 6.40232H2.50892C2.28342 6.40232 2.10043 6.58531 2.10043 6.81081C2.10043 7.03631 2.28342 7.2193 2.50892 7.2193H6.81081C6.86431 7.2193 6.91734 7.2082 6.96671 7.18796Z" fill="#091133" stroke="black" strokeWidth="0.1"/>
                    <path d="M6.96757 11.8116L6.96757 11.8116L6.96731 11.8115C6.91794 11.7913 6.86491 11.7802 6.81141 11.7802H2.50952C2.28402 11.7802 2.10103 11.9632 2.10103 12.1887C2.10103 12.4142 2.28402 12.5972 2.50952 12.5972H5.8253L0.069772 18.3527C-0.089924 18.5124 -0.089924 18.7706 0.069772 18.9303C0.149409 19.01 0.254056 19.05 0.35858 19.05C0.463104 19.05 0.567751 19.01 0.647388 18.9303L6.40292 13.1748V16.4906C6.40292 16.7161 6.58591 16.8991 6.81141 16.8991C7.03691 16.8991 7.2199 16.7161 7.2199 16.4906V12.1887C7.2199 12.1352 7.2088 12.0822 7.18856 12.0328L7.18846 12.0325C7.14682 11.9325 7.06759 11.8533 6.96757 11.8116Z" fill="#091133" stroke="black" strokeWidth="0.1"/>
                    <path d="M12.0324 7.18846L12.0327 7.18856C12.082 7.2088 12.1351 7.2199 12.1886 7.2199H16.4905C16.7163 7.2199 16.8989 7.03688 16.8989 6.81141C16.8989 6.58594 16.7163 6.40292 16.4905 6.40292H13.1747L18.9302 0.647388C19.0899 0.487692 19.0899 0.229468 18.9302 0.069772C18.7705 -0.089924 18.5123 -0.089924 18.3526 0.069772L12.5971 5.8253V2.50952C12.5971 2.28402 12.4141 2.10103 12.1886 2.10103C11.9631 2.10103 11.7801 2.28402 11.7801 2.50952V6.81141C11.7801 6.86491 11.7912 6.91794 11.8114 6.96731L11.8114 6.96732L11.8115 6.96757C11.8532 7.06759 11.9324 7.14682 12.0324 7.18846Z" fill="#091133" stroke="black" strokeWidth="0.1"/>
                    <path d="M9.49996 6.76128C7.98963 6.76128 6.76128 7.98963 6.76128 9.49996C6.76128 11.0103 7.98963 12.2386 9.49996 12.2386C11.0103 12.2386 12.2386 11.0103 12.2386 9.49996C12.2386 7.98963 11.0103 6.76128 9.49996 6.76128ZM9.49996 11.4217C8.44027 11.4217 7.57826 10.5596 7.57826 9.49996C7.57826 8.44027 8.44027 7.57826 9.49996 7.57826C10.5596 7.57826 11.4217 8.44027 11.4217 9.49996C11.4217 10.5596 10.5596 11.4217 9.49996 11.4217Z" fill="#091133" stroke="black" strokeWidth="0.1"/>
                    </svg>




                    <span>&nbsp;&nbsp;My Interests</span>
                    </div>

                    
                    <div className="intrest_container">
                        <span className="university_name">Can’t live without</span>
                        <ul>
                            {Data.myIntrest.CantLiveWithout.items.map((item, i) => {
                                return (
                                <li key={i}>{item}</li>
                                )
                            } )}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default About