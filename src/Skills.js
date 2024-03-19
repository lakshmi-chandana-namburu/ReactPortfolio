import React from "react";
import './Skills.css';
function Skills() {
    return (
        <>
        <div className="titles">
            <h2>Frontend</h2>
            <h2>Backend</h2>
        </div>
        <div id="skills">
            <div className="frontend">
                <div className="skill">
                    <h2>HTML</h2>
                    <img src="/images copy/html.png" alt="html" className="imag"></img>
                </div>
                <div className="skill">
                    <h2>CSS</h2>
                    <img src="/images copy/css.png" alt="css" className="imag"></img>
                </div>
                <div className="skill">
                    <h2>JavaScript</h2>
                    <img src="/images copy/javascript.png" alt="js" className="imag" ></img>
                </div>
                <div className="skill">
                    <h2>Responsive</h2>
                    <img src="/images copy/rwd.png" alt="rwd" className="imag"></img>
                </div>
            </div>
            <div className="program">
                <div className="skill">
                    <h2>Python</h2>
                    <img src="/images copy/python.png" alt="html" className="imag"></img>
                </div>
                <div className="skill" id="java">
                    <h2>Java</h2>
                    <img src="/images copy/java.jpg" alt="html" className="imag"></img>
                </div>
                <div className="skill" id="mysql">
                    <h2>Mysql</h2>
                    <img src="/images copy/mysql.png" alt="html" className="imag"></img>
                </div>
                <div className="skill" id="flask">
                    <h2>Flask</h2>
                    <img src="/images copy/flask.png" alt="html" className="imag"></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills;