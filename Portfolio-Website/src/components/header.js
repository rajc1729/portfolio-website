import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header id="navbar">
    <nav>
      <div>
        <span>
          <Link>Raj Chhatbar</Link>
        </span>
      </div>
      <ul>
        <li>
          <Link>About</Link>
        </li>

        <li>
          <Link>Experience</Link>
        </li>

        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>

  </header>
)


export default Header
