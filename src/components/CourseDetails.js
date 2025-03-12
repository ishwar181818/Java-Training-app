import React from "react"; 
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const courseContent = {
  1: { 
    title: "Full Java Backend Development", 
    topics: [
      "✅ Core Java", 
      "✅ OOPS", 
      "✅ Exception Handling", 
      "✅ Spring", 
      "✅ SpringBoot", 
      "✅ Microservices", 
      "✅ REST API Development",
      "✅ Java 8 Features",
      "✅ Postman Tool "
    ] 
  },
  2: { 
    title: "Core Java Training", 
    topics: [
      "✅ Java Basics", 
      "✅ OOPS Concepts", 
      "✅ Exception Handling", 
      "✅ Multithreading Theory", 
      "✅ Collections Framework", 
     
    ] 
  },
};

function CourseDetails() {
  const { courseId } = useParams();
  const course = courseContent[courseId];

  if (!course) {
    return (
      <div className="container text-center my-5">
        <h2 className="text-danger">Course Not Found</h2>
        <p className="text-muted">The requested course does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-light" style={{ minHeight: "100vh", backgroundImage: "url('https://source.unsplash.com/1600x900/?coding,technology')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="p-5 text-white bg-dark bg-opacity-75 rounded">
        <h2 className="text-center text-warning mb-4">{course.title}</h2>
        <hr className="border border-light" />
        <div className="row">
          <div className="col-md-6 mx-auto">
            <ul className="list-group list-group-flush">
              {course.topics.map((topic, index) => (
                <li key={index} className="list-group-item bg-transparent text-light fs-5">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
