import React from "react"
import "../styles/Contact.scss"
import Data from "../assets/data"

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="contact_container">
                <span className="contact_title">Get In Touch</span>
                
                <p className="contact_description">I'm currently looking for new opportunities, related to Full-stack software engineering </p>

                <a 
                href={`mailto:${Data.email}`}
                className="say_hello_button">
                    Say Hello!
                </a>
                </div>
            </section>
        </>
    )
}

export default Contact