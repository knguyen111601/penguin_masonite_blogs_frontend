import { useParams, Link } from "react-router-dom"

const SingleBlog = ({blogs, edit, deleteBlog}) =>{

    const params = useParams()
    const id = parseInt(params.id)

    const blog = blogs.find((b)=>b.id === id)

////////////////////////////////
// Style Object
////////////////////////////////
const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto"
}


    return <div style={div}>
        <h1>{blog?.title}</h1>
        <p>{blog?.body}</p>
        <button onClick={()=>{deleteBlog(blog)}}>Delete</button>
        <button onClick={()=>{edit(blog)}}>Edit</button>
        <Link to="/">
            <button>Go Back</button>
        </Link>
    </div>
}

export default SingleBlog