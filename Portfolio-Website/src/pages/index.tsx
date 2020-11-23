import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Landing from "../components/Landing"
import Layout from "../components/layout"
import Work from "../components/Work"
import "../styles/index.scss"


const IndexPage = () => (
  <>
  <Layout>
    <Landing/>
    <About/>
    <Work/>
    <Contact/>
  </Layout>
  </>
)

export default IndexPage
