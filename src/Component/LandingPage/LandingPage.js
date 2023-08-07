import React from 'react';
import "./LandingPage.css"
import { Link } from 'react-router-dom';
import home from '../../image/home.png'

export default function LandingPage() {

    return (
        <div id="landingPage-Container">
            <section className="section-itmes" id="section-01">
                <img src={home} alt="lens" />
            </section>
            <section className="section-itmes" id="section-02">
                <h1>10X Team 04 </h1>
                <Link to="/PostView"><button>Enter</button></Link>
            </section>
        </div>
    )
}