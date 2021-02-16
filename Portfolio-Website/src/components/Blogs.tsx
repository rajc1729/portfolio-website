import React from "react"
import "../styles/Blogs.scss"
import Data from "../assets/data"
import { BlogCard } from "./card/BlogCard"


const Blogs = ({pic}) => {

    return (
        <>
        <section id="blogs">
            <h3 className="title">Blogs</h3>

            <div className="blog_grid_container">
                <BlogCard
                pic = {pic[1]}
                title = {Data.blogs.id1.title}
                link = {Data.blogs.id1.link}
                pubDate = {Data.blogs.id1.pubDate}
                tags = {Data.blogs.id1.tags}
                description = {Data.blogs.id1.description}
                />

                <BlogCard
                pic = {pic[0]}
                title = {Data.blogs.id2.title}
                link = {Data.blogs.id2.link}
                pubDate = {Data.blogs.id2.pubDate}
                tags = {Data.blogs.id2.tags}
                description = {Data.blogs.id2.description}
                />
            </div>
        </section>
        </>
    )
}

export default Blogs