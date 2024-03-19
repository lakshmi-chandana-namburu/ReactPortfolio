import React from "react";
import './Projects.css';
function Projects() {
    return (
        <div className="projects">
            <div className="pro">
                <img src="https://navi.com/blog/wp-content/uploads/2022/08/Money-Management_1458w.jpg" alt=""></img>
                <div className="overlay">
                    <h3>Money Manager</h3>
                    <span>Technology Used : Python Flask</span>
                    <p>The most immediate benefit
                        of using a money manager app is to help you to stick
                        to your balance.this projects helps to know how much
                        percent we are spending our income for various purposes.
                    </p>
                    <a href="https://drive.google.com/file/d/1FjECUhe-9SDY3u79UXK-XdTIqyNMn3dC/view?usp=sharing" target="_blank" rel="noreferrer">view demo</a>
                </div>
            </div>
            <div className="pro">
                <img src="https://i.pinimg.com/originals/1a/29/04/1a29046bb1bea902f9f3b4cd2dc2e727.png" alt=""></img>
                <div className="overlay">
                    <h3>A complete responsive food website</h3>
                    <span>FrontEnd Technologies Used : HTML,CSS,JavaScript</span>
                    <p>this is completely a front end website allows<br></br>
                    customers to identify the details about <br></br>
                    the food restaurant.
                    </p>
                    <a href="https://lakshmi-chandana-namburu.github.io/FoodWebsite/" target="_blank" rel="noreferrer">view demo</a>
                    </div>
                </div>
                <div className="pro">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYnsfjsa_eb_Z3HD65g1pI8HZ6IIjD0P9krUr00W8uyNw_MIxRbakYEhgY8jHhehyac8E&usqp=CAU" alt=""></img>
                    <div className="overlay">
                    <h3>Portfolio</h3>
                    <span>FrontEnd Technologies Used : HTML,CSS</span>
                    <p>A simple Portfolio.Have a look into it.
                    </p>
                    <a href="https://lakshmi-chandana-namburu.github.io/Portfolio1/" target="_blank" rel="noreferrer">view demo</a>
                    </div>
                </div>
                <div className="pro">
                    <img src="/images/cradle.jpg" alt=""></img>
                    <div className="overlay">
                    <h3>Smart Cradle System</h3>
                    <span>Technologies Used : IOT,Arduino Device</span>
                    <p>A Cradle System to alert parents ensuring baby safety and parental peace of mind.
                    </p>
                    <a href="https://github.com/lakshmi-chandana-namburu/SmartCradleSystem" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>
                <div className="pro">
                    <img src="/images/chatbot.png" alt="" height="50%"></img>
                    <div className="overlay">
                    <h3>ChatBot to check attendance and results</h3>
                    <span>Technologies Used : Python, Git Bash, Jenkins pipeline, AWS EC2 Cloud, DevOps</span>
                    <p>Telegram ChatBot to check attendance and results for students which is deployed in the AWS cloud to improve scalability.
                    </p>
                    <a href="https://drive.google.com/file/d/1N16q5IpcE8mHJw0LIBWCqXj8XDIm8AfK/view?usp=sharing" target="_blank" rel="noreferrer">view demo</a> 
                    </div>
                </div>

            </div>
            )
}

            export default Projects;