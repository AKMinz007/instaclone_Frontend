import React from 'react';
import axios from "axios";

function  getAllpost(){

    // return(
    //     axios.get("http://localhost:8080/users").then(res=>{
    //         console.log(res);
    //         console.log("hitting the end point")
    //           res.json()
    //     })
    //     .catch(err=>alert(err.message))
    // )
}

function addNewPost(){
    // return(
    //     axios.post("http://localhost:8080/users").then(res=>{
    //         res.json();
    //     })
    //     .catch(err=>{alert(err.message);})
    // )
}

export {getAllpost,addNewPost}