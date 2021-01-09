import React from "react"
import Data from "../assets/data"
import {graphql} from "gatsby"
import About from "../components/About"
import Contact from "../components/Contact"
import Landing from "../components/Landing"
import Layout from "../components/layout"
import Project from "../components/Projects"
import Work from "../components/Work"
import "../styles/index.scss"
import SEO from "../components/seo"


const IndexPage = ({data}) => (
  <>
  <Layout>
    <SEO title="Full-stack Software Engineer" />
    <Landing pic={data.landingPic}/>
    <About/>
    <Work/>
    <Project/>
    <Contact/>
  </Layout>
  </>
)

export const query = graphql`
{
  landingPic: file(relativePath: {eq: "Raj_Chhatbar.png"}){
     childImageSharp{
      fluid(maxWidth:600 , quality: 100) {
				...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default IndexPage
