import React from "react";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faHackerrank, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Home(){
    const linked="https://www.linkedin.com/in/lakshmi-chandana-namburu-780a5323a/";
    const git="https://github.com/lakshmi-chandana-namburu";
    const hack="https://www.hackerrank.com/profile/namburulakshmic1";
    return (
        <div id="home" className="home">
            <img src="/images/chandu.png" alt="Chandana" class="image"/>
            <h1>Front-end Developer</h1>
            <div className="icons">
            <a href={linked} className="ico" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a href={git} className="ico" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            <a href={hack} className="ico" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faHackerrank}></FontAwesomeIcon></a>
            <a href="https://wa.me/7093985989" className="ico" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>
            </div>
            <br></br>
        </div>
    )
  }

export default Home;