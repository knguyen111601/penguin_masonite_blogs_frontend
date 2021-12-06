import {Link} from "react-router-dom"


const Blog = ({blog}) =>{

///////////////////////////
// Style Object
///////////////////////////
const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%"
}


return <div style={div}>
    <Link to={`/blog/${blog.id}`}>
        <h1>{blog.title}</h1>
    </Link>
    <p>{blog.body}</p>
</div>
}

export default Blog