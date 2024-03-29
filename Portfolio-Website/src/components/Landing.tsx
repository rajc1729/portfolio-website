import React from "react"
import "../styles/Landing.scss"
import Data from "../assets/data"

import Img from "gatsby-image"

const Landing = ({ pic }) => {
  return (
    <>
      <section id="landing">
        <div className="landing_container">
          <div className="intro_container">
            <span>👋 Hello! my name is</span>
            <h1>{Data.name}.</h1>
            <h4>{Data.title}</h4>
            <p>{Data.heroDescription}</p>

            <div className="button_container">
              <a
                title="resume"
                href={"/static/Raj_resume_v15.pdf"}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="dark_button"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="imageContainer">
            <Img
              fluid={pic.childImageSharp.fluid}
              alt="Avatar"
              className="avatar_img"
            ></Img>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing
