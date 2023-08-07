import React, {useEffect, useState } from 'react'
import axios from "axios";
import Card from './Card'
import './Card.css';
import Navbar from '../NavBar/Navbar';




function PostView() {

  
    const [post,setPost] = useState([]);

    useEffect(()=>{
       axios.get("https://instaclone-backend-8p2a.onrender.com/post/getPost").then(res=>{
            console.log(res.data.data);
            setPost(res.data.data);
       })
    },[])
  
    return (
        <>
            <Navbar />
           {post.map((element,id)=>{
            return(
                <div id="Card-Page-Container" key={id}>
                <Card element={element}/>
             </div>
            )
             
           })}
        </> 

    )
}

export default PostView
