import React from "react"
import "../styles/Landing.scss"
import raj from "../images/Raj_Chhatbar.png";

const Landing = () => {
    return (
        <>
            <section id="landing">
                <div className="intro_container">
                    <span >👋 Hello!  my name is</span>
                    <h1>Raj Chhatbar</h1>
                    <h4>Full-stack Software Engineer</h4>
                    <p>
                        I am a software engineer based on southern california, specializing in building full-stack cloud-based solutions.
                    </p>

                    {/* <div className="button_container">
                        <button className="dark_button">
                            Resume
                        </button>

                        <button className="light_button">
                            Get in Touch
                        </button>
                    </div> */}
                </div>




                <div className="imageContainer">
                    <img src={raj} className="avatar_img"></img>
                </div>
                {/* <svg 
                width="959" 
                height="878" 
                className=""
                viewBox="0 0 829 878" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M207.453 65.5621C129.294 141.582 117.181 285.329 64.247 391.377C45.82 428.278 22.0099 461.303 9.58721 502.239C-18.9332 595.94 20.319 702.228 72.8566 776.649C97.909 812.151 127.171 844.677 162.576 859.641C189.802 871.149 218.996 871.628 247.654 871.928L749.737 877.922C805.795 878.581 868.081 876.203 908.385 825.977C936.164 791.393 947.448 740.887 957.024 692.678C968.791 633.44 979.453 569.109 961.147 512.688C940.236 448.137 887.353 411.556 854.502 355.855C801.188 265.61 802.413 129.115 734.52 57.071C702.825 23.4467 661.001 10.2606 620.248 3.66762C543.417 -8.7792 470.641 14.7159 395.191 11.4394C330.696 8.64235 260.957 13.5172 207.453 65.5621Z" fill="#E7ECFF"/>
                </svg> */}
            </section>
        </>
    )
}

export default Landing