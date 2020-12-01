
import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "../styles/Layout.scss"

import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main className="main_container">{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
