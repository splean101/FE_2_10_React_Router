import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const About = () => {
  const[posts, setPosts] = useState([])

useEffect( () => {
  const fetchData  = async () => {
    const data = await fetch('https://dummyjson.com/posts');
    const response = await data.json();
          setPosts(response.posts)
  }
  fetchData()
}, [])

;
  return (
    <>
    <h1>Posts</h1>
    <p>View our posts</p>
    <div className='posts-body'>
{
posts.map(item => (
  <Link key={item.id} to={`/post/${item.id}`}>
  <li>{item.title}</li>
  </Link>))
  
}
    </div>
    </>
  )
}

export default About