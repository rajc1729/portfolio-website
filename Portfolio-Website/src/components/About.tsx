import React from "react"
import "../styles/About.scss"
import gls from "../images/gls.png"
import csuf from "../images/csuf.png"
import xaviers from "../images/xaviers.png"

const About = () => {
    return (
        <>
        <section id="about">
            <h3 className="title">About Me</h3>

            <div className="grid_container">
                <div id="introduction"  className="first_card">
                    <div className="card_title_container">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
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
                        Hello! I'm Raj, a software engineer based in Los Angles, CA. Currently a master student studying Computer Science at California State University, Fullerton.
                    </p>
                    <p className="description">
                        Success doesn't become a reality through only dreams; it takes persistence, dedication, and hard work. I enjoy creating innovative apps that improve quality of life and productivity. When I am is away from a computer, I enjoy hiking and eating out!
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
                        <div className="language">
                            <div >
                                <span className="language_name">Python</span>
                                <p className="language_confidence_level">Proficient</p>
                            </div>

                            <div>
                                <svg width="86" height="25" viewBox="0 0 86 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                                    <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 25H86V0H0V25ZM84.8831 23.387H1.11692V1.61285H84.8831V23.387Z" fill="#3F3D56"/>
                                    <ellipse cx="10.1528" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                    <ellipse cx="23.2916" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                    <ellipse cx="36.4305" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                    <ellipse cx="49.5695" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                    <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                                    <path d="M75.375 18.25C73.9495 18.25 72.5823 17.6574 71.5743 16.6025C70.5663 15.5476 70 14.1168 70 12.625C70 11.1332 70.5663 9.70242 71.5743 8.64752C72.5823 7.59263 73.9495 7 75.375 7V12.625V18.25Z" fill="#FF6584"/>
                                </svg>
                            </div>

                        </div>


                        <div className="language">
                            <div >
                                <span className="language_name">JavaScript(ES6)</span>
                                <p className="language_confidence_level">Proficient</p>
                            </div>

                            <div>
                            <svg width="86" height="25" viewBox="0 0 86 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 25H86V0H0V25ZM84.8831 23.387H1.11692V1.61285H84.8831V23.387Z" fill="#3F3D56"/>
                                <ellipse cx="10.1528" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="23.2916" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="36.4305" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="49.5695" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            </svg>
                            </div>

                        </div>


                        <div className="language">
                            <div >
                                <span className="language_name">TypeScript</span>
                                <p className="language_confidence_level">Proficient</p>
                            </div>

                            <div>
                            <svg width="86" height="25" viewBox="0 0 86 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 25H86V0H0V25ZM84.8831 23.387H1.11692V1.61285H84.8831V23.387Z" fill="#3F3D56"/>
                                <ellipse cx="10.1528" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="23.2916" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="36.4305" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="49.5695" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                                <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            </svg>
                            </div>

                        </div>


                        <div className="language">
                            <div >
                                <span className="language_name">SQL</span>
                                <p className="language_confidence_level">Advance</p>
                            </div>

                            <div>
                            <svg width="86" height="25" viewBox="0 0 86 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 25H86V0H0V25ZM84.8831 23.387H1.11692V1.61285H84.8831V23.387Z" fill="#3F3D56"/>
                            <ellipse cx="10.1528" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="23.2916" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="36.4305" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="49.5695" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <path d="M62.375 18.25C60.9495 18.25 59.5823 17.6574 58.5743 16.6025C57.5663 15.5476 57 14.1168 57 12.625C57 11.1332 57.5663 9.70242 58.5743 8.64752C59.5823 7.59263 60.9495 7 62.375 7L62.375 12.625L62.375 18.25Z" fill="#FF6584"/>
                            </svg>

                            </div>

                        </div>


                        <div className="language">
                            <div >
                                <span className="language_name">C/C++</span>
                                <p className="language_confidence_level">Upper Intermediate</p>
                            </div>

                            <div>
                            <svg width="86" height="25" viewBox="0 0 86 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 25H86V0H0V25ZM84.8831 23.387H1.11692V1.61285H84.8831V23.387Z" fill="#3F3D56"/>
                            <ellipse cx="10.1528" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="23.2916" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="36.4305" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="49.5695" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            </svg>

                            </div>

                        </div>


                        <div className="language">
                            <div >
                                <span className="language_name">GO</span>
                                <p className="language_confidence_level">Intermediate</p>
                            </div>

                            <div>
                            <svg width="86" height="25" viewBox="0 0 86 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <ellipse cx="49.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="49.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 25H86V0H0V25ZM84.8831 23.387H1.11692V1.61285H84.8831V23.387Z" fill="#3F3D56"/>
                            <ellipse cx="10.1528" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="23.2916" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="36.4305" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <path d="M49.375 18.25C48.6691 18.25 47.9702 18.1045 47.3181 17.8218C46.666 17.5391 46.0734 17.1248 45.5743 16.6025C45.0752 16.0801 44.6793 15.46 44.4091 14.7776C44.139 14.0951 44 13.3637 44 12.625C44 11.8863 44.139 11.1549 44.4091 10.4724C44.6793 9.78995 45.0752 9.16985 45.5743 8.64752C46.0734 8.12519 46.666 7.71086 47.3181 7.42818C47.9702 7.14549 48.6691 7 49.375 7L49.375 12.625L49.375 18.25Z" fill="#FF6584"/>
                            </svg>

                            </div>

                        </div>

                        <div className="language">
                            <div >
                                <span className="language_name">JAVA</span>
                                <p className="language_confidence_level">Intermediate</p>
                            </div>

                            <div>
                            <svg width="86" height="25" viewBox="0 0 86 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="75.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="62.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <ellipse cx="49.375" cy="12.625" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="49.375" cy="12.625" rx="5.375" ry="5.625" fill="#F0F0F0"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 25H86V0H0V25ZM84.8831 23.387H1.11692V1.61285H84.8831V23.387Z" fill="#3F3D56"/>
                            <ellipse cx="10.1528" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="23.2916" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <ellipse cx="36.4305" cy="11.875" rx="5.375" ry="5.625" fill="#FF6584"/>
                            <path d="M49.375 18.25C48.6691 18.25 47.9702 18.1045 47.3181 17.8218C46.666 17.5391 46.0734 17.1248 45.5743 16.6025C45.0752 16.0801 44.6793 15.46 44.4091 14.7776C44.139 14.0951 44 13.3637 44 12.625C44 11.8863 44.139 11.1549 44.4091 10.4724C44.6793 9.78995 45.0752 9.16985 45.5743 8.64752C46.0734 8.12519 46.666 7.71086 47.3181 7.42818C47.9702 7.14549 48.6691 7 49.375 7L49.375 12.625L49.375 18.25Z" fill="#FF6584"/>
                            </svg>

                            </div>

                        </div>
                    </div>
                </div>

                <div id="technologies" className="first_card">
                    <div className="card_title_container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M17 12.645V10.356C15.83 9.939 15.093 9.823 14.72 8.925C14.347 8.025 14.79 7.413 15.32 6.3L13.702 4.681C12.597 5.206 11.979 5.655 11.076 5.281C10.176 4.907 10.059 4.164 9.645 3H7.355C6.943 4.158 6.825 4.907 5.924 5.28H5.923C5.023 5.654 4.413 5.21 3.298 4.68L1.681 6.299C2.208 7.409 2.654 8.023 2.281 8.924C1.906 9.825 1.158 9.943 0 10.355V12.644C1.155 13.056 1.907 13.175 2.28 14.075C2.656 14.983 2.199 15.609 1.68 16.7L3.298 18.319C4.405 17.794 5.022 17.345 5.923 17.719H5.924C6.824 18.092 6.942 18.837 7.355 19.999H9.644C10.056 18.841 10.174 18.094 11.081 17.717H11.082C11.976 17.345 12.583 17.788 13.701 18.319L15.319 16.7C14.794 15.593 14.345 14.977 14.718 14.075C15.092 13.176 15.844 13.056 17 12.645ZM8.5 14.334C6.936 14.334 5.667 13.065 5.667 11.5C5.667 9.935 6.936 8.666 8.5 8.666C10.064 8.666 11.333 9.935 11.333 11.5C11.333 13.065 10.064 14.334 8.5 14.334ZM24 18.539V17.462C23.45 17.266 23.103 17.211 22.927 16.789C22.751 16.365 22.96 16.078 23.209 15.553L22.447 14.791C21.927 15.039 21.636 15.249 21.212 15.074C20.788 14.899 20.733 14.549 20.538 14.001H19.462C19.268 14.546 19.212 14.898 18.788 15.074C18.364 15.25 18.077 15.041 17.553 14.791L16.791 15.553C17.039 16.076 17.249 16.365 17.073 16.789C16.897 17.213 16.545 17.268 16 17.462V18.539C16.544 18.732 16.897 18.789 17.073 19.212C17.25 19.639 17.035 19.934 16.791 20.448L17.553 21.21C18.074 20.962 18.365 20.752 18.788 20.927C19.212 21.102 19.267 21.453 19.462 22H20.538C20.732 21.455 20.788 21.103 21.214 20.926H21.215C21.636 20.751 21.921 20.96 22.447 21.21L23.209 20.448C22.962 19.927 22.751 19.636 22.927 19.213C23.103 18.79 23.456 18.732 24 18.539ZM20 19.333C19.264 19.333 18.667 18.736 18.667 18C18.667 17.264 19.264 16.667 20 16.667C20.736 16.667 21.333 17.264 21.333 18C21.333 18.736 20.736 19.333 20 19.333Z" fill="#091133"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>



                    <span>&nbsp;&nbsp;Technologies</span>
                    </div>

                    <div>
                        <span>Frameworks</span>
                        <div className="technologies_text_container">
                            <span className="technologies_text">React</span>
                            <span className="technologies_text">Django</span>
                        </div>

                        <span>Tools</span>
                        <div className="technologies_text_container">
                            <span className="technologies_text">React</span>
                            <span className="technologies_text">Django</span>
                        </div>

                        <span>Cloud</span>
                        <div className="technologies_text_container">
                            <span className="technologies_text">React</span>
                            <span className="technologies_text">Django</span>
                        </div>
                    </div>

                </div>

                <div id="education" className="first_card">
                    <div className="card_title_container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M20 12.875V17.943C20 20.697 14.211 22 11 22C7.948 22 2 20.608 2 17.943V11.649L11 16.512L20 12.875ZM11.917 2L-1 7.75L11 14.25L22 9.833V17H24V8.75L11.917 2ZM25 22H21C21.578 21 22 19.5 22 18H24C24 19.516 24.391 20.859 25 22Z" fill="#091133"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
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
                                    <span className="university_name">California State University, Fullerton</span>
                                    <p className="language_confidence_level">Masters of Science - Computer Science</p>
                                    <p className="language_confidence_level">August 2018 - Expected May 2021</p>
                                </div>
                            </div>

                            <div className="university_box">
                                <div className="university_img">
                                <img src={gls} ></img>
                                </div>
                                <div className="university_card">
                                    <span className="university_name">California State University, Fullerton</span>
                                    <p className="language_confidence_level">Post Graduate Diploma - Computer Science</p>
                                    <p className="language_confidence_level">March 2017 - March 2018</p>
                                </div>
                            </div>

                            <div className="university_box">
                                <div className="university_img">
                                <img src={xaviers} ></img>
                                </div>
                                <div className="university_card">
                                    <span className="university_name">St. Xavier's College, Ahmedabad</span>
                                    <p className="language_confidence_level">Bachlors of Science - Physics</p>
                                    <p className="language_confidence_level">June 2014 - March 2017</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

                <div id="intrest" className="second_card">
                    <div className="card_title_container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.865 17.097C8.57601 17.902 5.69301 16.562 5.11001 14.341C2.23201 14.336 0.0240071 12.933 7.08098e-06 10.455C-0.0379929 6.42401 4.51601 1.00701 12 1.00001C19.485 0.993007 23.996 6.31201 24 11.329C24.004 16.346 19.818 18.226 16.393 17.592C16.029 19.099 16.222 21.17 16.625 22.339L14.516 23C13.703 20.212 12.316 18.033 10.865 17.097ZM10.173 7.82101C9.48201 7.50701 9.00001 6.80901 9.00001 6.00001C9.00001 4.89601 9.89601 4.00001 11 4.00001C12.104 4.00001 13 4.89601 13 6.00001C13 6.26001 12.95 6.50901 12.86 6.73801C14.074 7.64901 15.265 8.59301 16.459 9.53201C16.884 9.19901 17.419 9.00001 18 9.00001C19.38 9.00001 20.5 10.12 20.5 11.5C20.5 12.88 19.38 14 18 14C16.829 14 15.845 13.193 15.574 12.105C14.373 12.203 13.17 12.278 11.968 12.359C11.799 13.292 10.981 14 10 14C8.89601 14 8.00001 13.104 8.00001 12C8.00001 10.967 8.78501 10.116 9.79001 10.011C9.91101 9.28001 10.042 8.55101 10.173 7.82101ZM12.233 7.57501C11.936 7.80701 11.572 7.95801 11.175 7.99201L10.812 10.172C11.316 10.396 11.71 10.823 11.892 11.349L15.539 11.06C15.586 10.793 15.676 10.541 15.801 10.311L12.233 7.57501Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>


                    <span>&nbsp;&nbsp;My Interests</span>
                    </div>

                    
                    <div className="intrest_container">
                        <span className="university_name">Can’t live without</span>
                        <ul>
                            <li>Youtube</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default About