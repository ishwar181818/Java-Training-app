import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container">
        {/* Navbar Brand with Decorative Styling */}
        <Link className="navbar-brand fw-bold text-warning fs-4" to="/">
          🚀 <span className="text-uppercase">Online Java Training</span> 
          <span className="text-light"> By Ishwar</span>
        </Link>

        {/* Navbar Toggler Button for Mobile View */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase fw-semibold">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/teaching-mode">Teaching Mode & Notes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/demo-lecture">Demo-Lectures</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
