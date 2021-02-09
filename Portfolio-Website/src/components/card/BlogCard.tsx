import React from "react"
import "../../styles/Blogs.scss"
import Img from "gatsby-image"


export const BlogCard = ({pic, title, link, pubDate, description, tags}) => {
    return(
        <>
        <div className ="blog_card_container">

            <Img fluid={pic.childImageSharp.fluid} alt="blogImage" className="thumbnail"/>
            
            <div className ="blog_content_container">
            <p className ="date">{pubDate}</p>
            

            <div>
            <a href={link} target="_blank" title="medium" className="blog_title">{title}</a>
            </div>
            <p className="blog_description">{description}</p>

            <div>
                {tags?.map((tag, i)=> {
                    return (
                        <div key={i} className = "blog_tags">
                            {tag}
                        </div>
                    )
                })}
                
            </div>

            </div>
            
        </div>
        </>
    )
}