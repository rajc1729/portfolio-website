import { Link } from "gatsby"
import React from "react"
import "../styles/Header.scss"

const Header = () => (
  <header id="navbar">
    <nav className="navbar_elm">
      <div>
        <span className="nav_title">
          <Link to="/#">Raj Chhatbar</Link>
        </span>
      </div>
      <ul className="nav_right_container">
        <li>
          <Link to="/#about">About</Link>
        </li>

        <li>
          <Link to="/#experience">Experience</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/#blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
