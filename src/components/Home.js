import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

function Home() {
  return (
    <div className="container my-5">
      {/* Moving Job Openings Banner */}
      <div className="job-banner">
        <Link to="/job-openings" className="text-white fw-bold">
          🚀 Latest Job Openings - Click Here!
        </Link>
      </div>

      {/* Advertisement Banner */}
      <div className="advertisement-banner bg-warning text-dark text-center py-3 rounded shadow-lg my-4">
        <h4 className="fw-bold">📢 Free Java Coding Batches Starting Soon!</h4>
        <p className="mb-2">
          No need to pay any fees ! Its Completely Free — we only want <strong>3 months of your dedication</strong> to learn.
        </p>
        <p className="mb-2">
          Interested? Go in the <strong>Quick Links Section at the Bottom of the page  → Click on Contact option</strong> to get in touch with us.
        </p>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold">🚀 Master Java Backend Development!</h1>
        <p className="lead">Join our expert-led Java training program and become a job-ready backend developer.</p>
        <img src="/training.jpeg" alt="Java Training" className="img-fluid rounded shadow-lg"/>
      </div>
      

      {/* Why Learn Java? */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <img src="/Capture.jpg" alt="Why Java" className="img-fluid rounded shadow-lg"/>
        </div>
        <div className="col-md-6">
          <h2 className="text-success">🔥 Why Learn Java?</h2>
          <ul className="list-group">
            <li className="list-group-item">✅ Java is one of the <strong>most in-demand</strong> programming languages in the world.</li>
            <li className="list-group-item">✅ Used in <strong>Web Development, Android Apps, Enterprise Applications</strong>.</li>
            <li className="list-group-item">✅ <strong>Platform Independent</strong> – Runs on Windows, Mac, Linux.</li>
            <li className="list-group-item">✅ Backed by <strong>top tech companies</strong> like Google, Amazon, and Netflix.</li>
            <li className="list-group-item">✅ Supports <strong>Spring Boot, Microservices, and Cloud Computing</strong>.</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us? */}
      <div className="text-center my-5">
        <h2 className="text-primary fw-bold">Why Choose Our Java Training? 🏆</h2>
        <p className="lead">We provide hands-on training, real-world projects, and expert mentorship.</p>
      </div>
      

      {/* Features Section */}
      <div className="row text-center">
        <div className="col-md-4">
          <div className="card shadow-lg">
            <img src="https://plus.unsplash.com/premium_photo-1661416307260-5013ab7adc3f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Expert Trainers" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Expert Trainers</h5>
              <p className="card-text">Learn from <strong>industry experts</strong> with <strong>10+ years of experience</strong>.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card shadow-lg">
            <img src="https://plus.unsplash.com/premium_photo-1692241076210-9e696db67fce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hands-on Training" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Hands-on Training</h5>
              <p className="card-text">Work on <strong>live projects</strong> and master <strong>real-world applications</strong>.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg">
            <img src="https://images.unsplash.com/photo-1702918883534-9b26c19904ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Job Support" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Job Assistance</h5>
              <p className="card-text">Get a <strong>Job Assistance</strong> & <strong>career guidance</strong> to land your dream job.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Highlights */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h2 className="text-danger">📌 Course Highlights</h2>
          <ul className="list-group">
            <li className="list-group-item">✅ <strong>Complete Java Backend Development</strong> training.</li>
            <li className="list-group-item">✅ Learn <strong>Spring Boot, Microservices, REST APIs</strong>.</li>
            <li className="list-group-item">✅ Work on <strong>real-world projects</strong>.</li>
            <li className="list-group-item">✅ <strong>Mock Interviews & Resume Preparation</strong>.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src="https://media.istockphoto.com/id/1152767923/photo/focused-woman-wearing-headphones-using-laptop-writing-notes.jpg?s=2048x2048&w=is&k=20&c=CbfsFr08tbPKwCh96olxSv8EkSoLa-9bu6S4oHltQAs=" alt="Course Highlights" className="img-fluid rounded shadow-lg"/>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h3 className="text-success">🎯 Ready to Become a Java Backend Developer?</h3>
        <p className="lead">Enroll today and take your career to the next level!</p>
        <a href="/services" className="btn btn-lg btn-primary">Explore Courses</a>
      </div>
      
    </div>
  ); 
}

export default Home;
