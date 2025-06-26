import React from "react";

function DemoLecture() {
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary">🎥 Free Demo Lecture - Spring Boot</h2>

      {/* Video Section */}
      <div className="text-center my-4">
        <iframe
          width="80%"
          height="400"
          src="https://www.youtube.com/embed/Ato5B2AwmZc" // Replace with your demo video link
          title="Spring Boot Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Spring Boot Basic to Advanced Section */}
      <div className="card p-4 shadow-lg">
        <h3>📌 Spring Boot: Basic to Advanced</h3>
        <p>
          Spring Boot is a powerful framework for developing modern Java applications.  
          In this course, you'll learn **everything from fundamentals to advanced concepts**.
        </p>

        <h3>🔥 What You'll Learn:</h3>
        <ul className="list-group">
          <li className="list-group-item">✅ **Spring Boot Basics** - Setup, Annotations, Auto Configuration</li>
          <li className="list-group-item">✅ **Building REST APIs** - Controllers, HTTP Methods, JSON Handling</li>
          <li className="list-group-item">✅ **Database Integration** - Spring Data JPA, Hibernate, MySQL/PostgreSQL</li>
          <li className="list-group-item">✅ **Microservices Architecture** - Service Communication, Eureka, API Gateway</li>
         
        </ul>
      </div>

      {/* Udemy Course Link */}
      <div className="text-center mt-4">
        <h3>🚀 Want Full Access to the Course?</h3>
        <p>Visit the YouTube channel for more free Spring Boot tutorials and updates</p>
        <a 
          href="https://www.youtube.com/@ishwarharbade-y7j" // Replace with your actual Udemy course link
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-danger"
        >
          🎬 Visit YouTube Channel
        </a>
      </div>
    </div>
  );
}

export default DemoLecture;
