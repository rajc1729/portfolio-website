
import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "../styles/Layout.scss"

import Header from "./header"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main className="main_container">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
