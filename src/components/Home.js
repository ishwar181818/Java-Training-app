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
        <h4 className="fw-bold">📢 Java Coding Batches Starting Soon!</h4>
        <p className="mb-2">
          We only want <strong>3 months of your dedication</strong> to learn.
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
      

      {/* Why Learn Java? / System Requirements */}
      <div className="row align-items-center my-5"> 
        {/* Image Side */}
        <div className="col-md-6">
          <img 
            src="/Capture.jpg" 
            alt="Why Java" 
            className="img-fluid rounded shadow-lg w-100" 
            style={{ 
              height: "auto",      // Allows full image to show
              maxHeight: "500px",  // Prevents it from being too huge
              objectFit: "contain", // Ensures no part of the text in image is cut
              backgroundColor: "#000" // Fills gaps with black if image is shorter
            }}
          />
        </div>

        {/* Content Side */}
        <div className="col-md-6">
          <div className="card shadow-lg border-0" style={{ minHeight: "100%" }}>
            <div className="card-body p-4">
              <h2 className="text-success fw-bold mb-4">🔥 Why Learn Java?</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 px-0">✅ Java is one of the <strong>most in-demand</strong> programming languages globally.</li>
                <li className="list-group-item border-0 px-0">✅ Powers <strong>Enterprise Applications, Android Apps, and Web Backends</strong>.</li>
                <li className="list-group-item border-0 px-0">✅ <strong>Platform Independent</strong> – "Write Once, Run Anywhere" (WORA).</li>
                <li className="list-group-item border-0 px-0">✅ Backed by <strong>top tech giants</strong> like Google, Amazon, and Netflix.</li>
                <li className="list-group-item border-0 px-0">✅ Massive ecosystem with <strong>Spring Boot & Microservices</strong>.</li>
                <li className="list-group-item border-0 px-0">✅ Strong <strong>Multi-threading</strong> for high-performance apps.</li>
                <li className="list-group-item border-0 px-0">✅ High <strong>Salary Potential</strong> for backend developers.</li>
                <li className="list-group-item border-0 px-0">✅ Robust <strong>Community Support</strong> and endless libraries.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us? */}
      <div className="text-center my-5">
        <h2 className="text-primary fw-bold">Why Choose Our Java Training? 🏆</h2>
        <p className="lead">We provide hands-on training, real-world projects, and expert mentorship.</p>
      </div>
      

      {/* Features Section - UPDATED TO BE IN ONE ROW */}
      <div className="row text-center g-4"> 
        <div className="col-md-4">
          <div className="card h-100 shadow-lg">
            <img src="/trainer.jpg" alt="Expert Trainers" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Expert Trainers</h5>
              <p className="card-text">Learn from <strong>industry experts</strong> with <strong>10+ years of experience</strong>.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100 shadow-lg">
            <img src="/laptop.jpg" alt="Hands-on Training" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Hands-on Training</h5>
              <p className="card-text">Work on <strong>live projects</strong> and master <strong>real-world applications</strong>.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-lg">
            <img src="/vacancy.jpg" alt="Job Support" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Job Assistance</h5>
              <p className="card-text">Get a <strong>Job Assistance</strong> & <strong>career guidance</strong> to land your dream job.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Highlights */}
      <div className="row align-items-stretch my-5"> {/* 'align-items-stretch' ensures equal height */}
        <div className="col-md-6">
          <div className="card h-100 shadow-lg border-0">
            <div className="card-body d-flex flex-column justify-content-center p-4">
              <h2 className="text-danger fw-bold mb-4">📌 Course Highlights</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 px-0">✅ <strong>Complete Java Backend</strong> from scratch to advanced.</li>
                <li className="list-group-item border-0 px-0">✅ In-depth <strong>Spring Boot & Microservices</strong> architecture.</li>
                <li className="list-group-item border-0 px-0">✅ Mastering <strong>REST APIs</strong> and Database Integration.</li>
                <li className="list-group-item border-0 px-0">✅ Hands-on with <strong>Hibernate, JPA, and SQL</strong>.</li>
                <li className="list-group-item border-0 px-0">✅ Real-world <strong>Deployment & Cloud Basics</strong>.</li>
                <li className="list-group-item border-0 px-0">✅ <strong>1-on-1 Mentorship</strong> and code review sessions.</li>
                <li className="list-group-item border-0 px-0">✅ <strong>Mock Interviews</strong> & Professional Resume building.</li>
                <li className="list-group-item border-0 px-0">✅ Access to <strong>Premium Interview Question Banks</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img 
            src="/bench.jpg" 
            alt="Course Highlights" 
            className="img-fluid rounded shadow-lg h-100 w-100" 
            style={{ objectFit: "cover" }} 
          />
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