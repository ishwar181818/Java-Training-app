import React from "react"; 
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate
import "bootstrap/dist/css/bootstrap.min.css";

const courseContent = {
  1: { 
    title: "Full Java Backend Development", 
    topics: [
      "✅ Core Java", "✅ OOPS", "✅ Exception Handling", 
      "✅ Spring", "✅ SpringBoot", "✅ Microservices", 
      "✅ REST API Development", "✅ Java 8 Features", "✅ Postman Tool"
    ] 
  },
  2: { 
    title: "Core Java Training", 
    topics: [
      "✅ Java Basics", "✅ OOPS Concepts", "✅ Exception Handling", 
      "✅ Multithreading Theory", "✅ Collections Framework"
    ] 
  },
};

function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate(); // Initialize navigation
  const course = courseContent[courseId];

  if (!course) {
    return (
      <div className="container text-center vh-100 d-flex flex-column justify-content-center">
        <h2 className="display-4 text-danger fw-bold">404</h2>
        <p className="lead text-muted">Course Not Found</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div 
      className="d-flex align-items-center justify-content-center py-5" 
      style={{ 
        minHeight: "100vh", 
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        perspective: "1000px" 
      }}
    >
      <div className="container">
        <div 
          className="card border-0 shadow-lg p-4 p-md-5 position-relative" 
          style={{ 
            background: "rgba(255, 255, 255, 0.05)", 
            backdropFilter: "blur(15px)", 
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transform: "rotateX(2deg)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          }}
        >
          {/* 3D Back Button */}
          <div className="mb-4">
            <button 
              onClick={() => navigate(-1)} // Takes user back one step
              className="btn btn-outline-light d-flex align-items-center gap-2 rounded-pill px-4 shadow-sm"
              style={{ 
                background: "rgba(255, 255, 255, 0.1)", 
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "0.3s"
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "translateX(-5px)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "translateX(0)"}
            >
              ← Back to Courses
            </button>
          </div>

          {/* Title Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-warning mb-2" style={{ letterSpacing: "-1px" }}>
              {course.title}
            </h1>
            <div 
              className="mx-auto bg-warning rounded-pill" 
              style={{ width: "80px", height: "6px" }}
            ></div>
          </div>

          {/* Topics Grid - Perfectly Balanced */}
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {course.topics.map((topic, index) => (
              <div className="col" key={index}>
                <div 
                  className="p-3 h-100 border-start border-warning border-4 shadow-sm"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.08)", 
                    borderRadius: "12px",
                    transition: "0.3s"
                  }}
                >
                  <span className="text-white fs-5 fw-medium">{topic}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 3D Enrollment Button */}
          <div className="text-center mt-5">
            <button 
              className="btn btn-warning btn-lg px-5 py-3 fw-bold shadow-lg rounded-pill"
              style={{ 
                borderBottom: "5px solid #b45309",
                transition: "all 0.2s"
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = "translateY(4px)"}
              onMouseUp={(e) => e.currentTarget.style.transform = "translateY(0px)"}
              onClick={() => navigate("/contact")}
            >
              🚀 ENROLL IN COURSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;