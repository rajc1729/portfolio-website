
import React from "react"
import PropTypes from "prop-types"
import "../styles/Layout.scss"

import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div className="left">
      </div>
      <main className="main_container">{children}</main>
      <div className="right"></div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
