import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

const SinglePost = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async ()=>{
            const data = await fetch(`https://dummyjson.com/posts/${id}`);
            const parsedData = await data.json();
            if (!parsedData.id) { 
                console.log('not ID');
                navigate('/post');
                return;
               }
            setPost(parsedData);            
           }
           
        fetchData()
    }, [id, navigate]);
    
    return (
        <div>
            {post && (
                <>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                </>
            )}
        </div>
    )
}

export default SinglePost

