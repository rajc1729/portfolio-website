import React from "react"
import "../styles/Contact.scss"

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="contact_container">
                <span className="contact_title">Get In Touch</span>
                
                <p className="contact_description">I'm currently looking for new opportunities, related to Full-stack software engineering </p>

                <button className="say_hello_button">
                    Say Hello!
                </button>
                </div>
            </section>
        </>
    )
}

export default Contact