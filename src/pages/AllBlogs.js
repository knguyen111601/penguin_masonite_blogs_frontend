import {Link} from "react-router-dom"
import Blog from "../components/Blog"

const AllBlogs = ({blogs}) =>{
    return blogs.map((singleBlog)=>{
        return <Blog key={singleBlog.id} blog={singleBlog}/>
    })
}

export default AllBlogs