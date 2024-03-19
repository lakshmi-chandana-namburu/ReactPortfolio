import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="left">
                <h2><FontAwesomeIcon icon={faPhone}/> Phone</h2>
                <p>+91 709-398-5989</p><br></br>
                <h2><FontAwesomeIcon icon={faEnvelope} /> Email Address</h2>
                <p>namburulakshmichandana2020@gmail.com</p><br></br>
                <h2><FontAwesomeIcon icon={faMapMarkerAlt} /> Official Address</h2>
                <p>3421 Syamala Nagar, Guntur, 522004</p>
            </div>
            <div className="right">
                <h3>I'm always open to discussing product design work or partnerships</h3><br></br>
                <label>Enter your Name:</label><br></br><br></br>
                <input type="text" id="name" placeholder="enter name"></input><br></br><br></br>
                <label>Enter your Email:</label><br></br><br></br>
                <input type="text" id="email" placeholder="enter email"></input><br></br><br></br>
                <label>Enter your Message:</label><br></br><br></br>
                <input type="text" id="msg" placeholder="enter message"></input><br></br><br></br>
                <button type="submit" className="bt">Send Message <FontAwesomeIcon icon={faPaperPlane} className="send"/></button>
            </div>
            
        </div>
    )
}

export default Contact;