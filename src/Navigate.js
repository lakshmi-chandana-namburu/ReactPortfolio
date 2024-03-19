import React from "react";
import './Navigate.css';

import { Link } from "react-router-dom";
const Navigate = () => {
  return (
    <div className="nav">
      <div>
        <h2>Lakshmi Chandana</h2>
      </div>
      <div className="navbar">
        <Link to="/" className="f">Home</Link>
        <Link to="/about" className="f">About</Link>
        <Link to="/education" className="f">Education</Link>
        <Link to="/skills" className="f">Skills</Link>
        <Link to="/certifications" className="f">Certifications</Link>
        <Link to="/projects" className="f">Projects</Link>
        <Link to="/contact" className="f">Contact</Link>
      </div>
    </div>

  )
}

export default Navigate;