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
import Blogs from "../components/Blogs"


const IndexPage = ({data}) => (
  <>
  <Layout>
    <SEO title="Full-stack Software Engineer" />
    <Landing pic={data.landingPic}/>
    <About/>
    <Work/>
    <Project/>
    <Blogs pic={[data.djangoS3BlogPic, data.infiniteScrollBlogPic]}/>
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
  },
  infiniteScrollBlogPic: file(relativePath: {eq: "blogs/infinite_scroll_blog.png"}){
    childImageSharp{
     fluid(maxWidth:600 , quality: 100) {
       ...GatsbyImageSharpFluid
     }
   }
  },
  djangoS3BlogPic: file(relativePath: {eq: "blogs/django_s3_setup_blog.png"}){
    childImageSharp{
     fluid(maxWidth:600 , quality: 100) {
       ...GatsbyImageSharpFluid
     }
   }
  }
}
`

export default IndexPage
