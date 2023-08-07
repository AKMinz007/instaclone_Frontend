import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './NewPost.css';
import Navbar from "../NavBar/Navbar";


export default function NewPost() {
    
    const navigate = useNavigate();
    // const addPost = useContext(PostList);
   const [name,setName] = useState('');
   const [Location,setLocation] = useState('');
   const [postdesc,setPostdesc] = useState('');
   const [image,setImage] = useState(null);

   
    const handleSubmit = (e) => {
        navigate("/PostView");
        // console.log("users_Data",formdata);
        const formdata = new FormData();
        formdata.append("name",name);
        formdata.append("Location",Location);
        formdata.append("description",postdesc);
        formdata.append("image",image);
        formdata.append("likes",0);
        formdata.append("date",new Date().toLocaleString());

        axios.post("https://instaclone-backend-8p2a.onrender.com/post/createPost",formdata,{headers:{"Content-Type":"multipart/form-data"}}).then(res=>{
                      console.log(res.data);   
        })
        .catch(err=>{
            alert(err.message);
        })
    }

    return (
        <>
            <Navbar />
            <div id="form-container">
                <form action="https://instaclone-backend-8p2a.onrender.com/post/createPost" method="post" onSubmit={handleSubmit}>

                   <label htmlFor="input-file">
                   <input
                        type="file"
                        id="input-file"
                        name="img"
                        className="input-box-01-style"
                        accept="image/*"
                        onChange={e=>setImage(e.target.files[0])}
                    />
                   </label>
                    <input
                        type="text"
                        name="Author"
                        placeholder="Author"
                        className="input-box-02-style"
                        onChange={e=>setName(e.target.value)}
                        value={name}
                    />

                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="input-box-02-style"
                        onChange={e=>setLocation(e.target.value)}
                        value={Location}
                    />

                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        className="input-box-03-style"
                        onChange={e=>{setPostdesc(e.target.value)}}
                        value={postdesc}
                    />


                    <button type="submit">Post</button>
                </form>
            </div>

        </>
    )
}
