import React from "react";
import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
function About() {
    const Code = {
        color: "yellow",
        textShadow:"3px 5px 10px blue",
    }

    return (
        <div className="about" id="about">
            {/* <h1>About Me</h1> */}
            <h2>I am Chandana</h2>
            <h2 style={Code}>Interested in doing Coding</h2>
            <p>I am very Enthusiastic to work with web development using HTML,CSS,JAVASCRIPT.<br /><br></br>
                I continuously like to work with programming platforms HackerRank,HackerEarth.<br /><br></br>
                And i developed some projects on web development.<br /><br></br>
                I have basic knowledge in Java,Python,Data Structures.</p>
            <div class="Pr">
            <div class="Prc">
                <h1>3+</h1>
                <p>Projects</p>
            </div>
            <div class="Prc">
                <h1>2+</h1>
                <p>Internships</p>
            </div>
            <div class="Prc">
                <h1>7+</h1>
                <p>Certificates Earn</p>
            </div>
            </div><br></br>
            <a href="https://drive.google.com/file/d/1UYNYYQ-qsr7xG_VCg7OF87Ya0Ad4T06h/view" className="cv" target="_blank" rel="noreferrer">Download CV&nbsp;<FontAwesomeIcon icon={faDownload} class="ic"></FontAwesomeIcon></a>
            <br></br><br></br>
        </div>
    );
}

export default About;