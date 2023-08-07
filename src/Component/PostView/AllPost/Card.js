import React from 'react';
import './Card.css';
import { BsThreeDots} from "react-icons/bs";
import {SlPaperPlane } from "react-icons/sl";
import {AiOutlineHeart} from "react-icons/ai";


function Name({name}){
    return(
        <>
          <h4 style={{margin:"0px"}}>{name}</h4>
        </>
    )
}

function Place({location}){
    return(
        <div style={{fontSize:"10px"}}>
        {location}
        </div>
    )
}

function Image({PostImage}){
    // console.log(postImage);
    return(
         <>
         <img  style={{width:"400px",height:"270px"}} src={PostImage} alt="person"/>
         </>
    )
}

function CardFooter({likes,description,date}){
           
    const Date = date.split('T')
    // console.log(Date);
    return (
        <>
          <div id="Card-Footer-Container">
          <AiOutlineHeart className="Icon-Styling" />
         <SlPaperPlane  className="Icon-Styling" />
         <div id="Card-Date">{Date[0]}</div>
         <span id="Card-Like">{likes}</span>
        </div>
        <p id="Card-Comments">{description}</p>
        </>
       
    )
}

 export default function Card({element}) {
    let {name,Location,postImage,likes,description,date} = element;
    // console.log(name);
    return (
        <>
           
            <div id="Card-Container">
                <div id="Card-head">
                    <div id="Name-Location-div">
                        <Name name={name}/>
                        <Place location={Location}/>
                    </div>
                    <div id="Option-div">
                        <BsThreeDots/>
                    </div>
                    <Image PostImage={postImage}/>
                    <CardFooter likes={likes} description={description} date={date}/>
                </div>

            </div>
        </>
    )
}