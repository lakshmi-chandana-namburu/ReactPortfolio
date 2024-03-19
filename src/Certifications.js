import React from "react";
import './Certifications.css';

function Certifications() {
    return (
        <div className="certi">
            <div className="cer">
                <img src="/images/nptel_java.jpg" alt=""></img>
                <div className="overlay">NPTEL - Java</div>
            </div>
            <div className="cer">
                <img src="/images/HackerRank_python_Skill.png" alt=""></img>
                <div className="overlay">HackerRank - Python</div>
            </div>
            <div className="cer">
                <img src="/images/oasis.png" alt=""></img>
                <div className="overlay">Oasis - Frontend</div>
            </div>
            <div className="cer">
                <img src="/images/azure.png" alt=""></img>
                <div className="overlay1">Microsoft - Azure AI</div>
            </div>
            <div className="cer">
                <img src="/images/FED.png" alt=""></img>
                <div className="overlay1">IBM Edunet - FED</div>
            </div>
            <div className="cer">
                <img src="/images/c.png" alt=""></img>
                <div className="overlay1">NPTEL - C</div>
            </div>
        </div>
    )
}

export default Certifications;