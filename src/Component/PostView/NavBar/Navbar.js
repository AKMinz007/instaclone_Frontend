import React from "react";
import './NavBar.css';
import logo from '../../../image/circle_icon.svg';
import camera from '../../../image/camera.png';
import {useNavigate } from "react-router-dom";

export default function Navbar() {
  
    const Navigate =  useNavigate();
    const handleClicked = ()=>{
       Navigate("/NewPost");

    }
    return (
        <>  
            <header>
                <div id="Navbar-Container">
                    <div id="logo-container">
                        <img className="Navbar-icon" src={logo} alt="logo" />
                        <h1>Insatclone</h1>
                    </div>
                  <img className="Navbar-icon" src={camera} alt="camera"  onClick={handleClicked}/>
                </div>
            </header>

        </>
    )
}