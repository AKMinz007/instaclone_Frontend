import React, { createContext, useEffect, useState } from 'react';
import { getAllpost } from '../Service/Http_Services';

 export const PostList  = createContext()
 export default function PostContext({children}){

    const [posts,setPosts] = useState();

    useEffect(()=>{
        getAllpost.then(response=>{
            console.log(response)
            setPosts(response);
        })
    },[])

    return(
        <>
        <PostList.Provider value={{
            posts:posts,
            addPost:(post)=>{
                const latestPost = [post,...posts];
                setPosts(latestPost);
            }
        }}>
           {children}
        </PostList.Provider>
        </>
    )
}

 