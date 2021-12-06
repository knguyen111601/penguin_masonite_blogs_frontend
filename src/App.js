// Import Components 
import AllBlogs from "./pages/AllBlogs"
import SingleBlog from "./pages/SingleBlog"
import Form from "./pages/Form"

// CSS Library 
import "milligram"

// Import Router Components 
import {Route, Routes, Link, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
//////////////////////////////////////////////////////////////////
// Style Object
//////////////////////////////////////////////////////////////////
const h1 = {
  textAlign: "center",
  margin: "10px"
}

const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto"
}

function App() {

//////////////////////////////////////////////////////////////////
// State and other variables
//////////////////////////////////////////////////////////////////

  const url = "https://penguin-masonite-blogs-backend.herokuapp.com/blogs/"

  const navigate = useNavigate()

  // State to hold list of blogs
  const [blogs, setBlogs] = useState([])

  // empty blog for create 
  const nullBlog = {
    title: "",
    body: ""
  }

  const [targetBlog, setTargetBlog] = useState(nullBlog)

//////////////////////////////////////////////////////////////////
// Functions
//////////////////////////////////////////////////////////////////

// function to get list of blogs from API
const getBlogs = async () =>{
  const response = await fetch(url,{
    method: "get"
  })
  const data = await response.json()
  setBlogs(data)
}

// function to add blogs
const addBlog = async (newBlog)=>{
  await fetch(url, {
    method:"post",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newBlog)
  })
  getBlogs()
}

// select a blog to edit
const getTargetBlog = (blog) =>{
  setTargetBlog(blog)
  navigate("/edit")
}

// update the blog 
const updateBlog = async (blog)=>{
  await fetch(url + blog.id, {
    method:"put",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  })
  getBlogs()
}

const deleteBlog = async (blog) =>{
  await fetch(url + blog.id, {
    method: "delete"
  })
  getBlogs()
  navigate("/")
}

//////////////////////////////////////////////////////////////////
// Use Effect
//////////////////////////////////////////////////////////////////

useEffect(()=>{getBlogs()}, [])


  return (
    <div className="App">
      <h1 style={h1}>Blog</h1>
      <Link to="/new"><button style={button}>Write a blog!</button></Link>
      <Routes>
        <Route path="/" element={<AllBlogs blogs={blogs}/>}/>
        <Route path="/blog/:id" element={<SingleBlog blogs={blogs} edit={getTargetBlog} deleteBlog={deleteBlog}/>}/>
        <Route path="/new" element={<Form initialBlog={nullBlog} handleSubmit={addBlog} buttonLabel="Create Blog"/>}/>
        <Route path="/edit" element={<Form initialBlog={targetBlog} handleSubmit={updateBlog} buttonLabel="Update Blog"/>}/>
      </Routes>
    </div>
  );
}

export default App;
