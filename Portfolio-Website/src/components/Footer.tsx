import React from "react"
import "../styles/Footer.scss"

const Footer = () => {
  return (
    <>
      <section id="footer">
        {/* <SocialMedia /> */}
        <p>
          <a
            className="link"
            href="https://github.com/rajc1729/portfolio-website"
          >
            Built and Designed by Raj Chhatbar
          </a>
        </p>
        <small>
          <span className="credit">
            Thanks&nbsp;
            <a href="https://brianchung.co/" className="link">
              @Brain Chung
            </a>
            &nbsp;and&nbsp;
            <a href="https://brittanychiang.com/" className="link">
              @Brittany Chiang
            </a>{" "}
            for Inspiring me!
          </span>
          Copyright © {new Date().getFullYear()} Raj Chhatbar. All Rights
          Reserved.
        </small>
      </section>
    </>
  )
}

export default Footer
