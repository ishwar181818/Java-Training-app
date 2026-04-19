import React from "react";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Full Java Backend Development",
    image: "/Backend.jpg",
    description: "Learn Java, Spring Boot, Microservices & more!"
  },
  {
    id: 2,
    title: "Core Java Training",
    image: "/CoreJava.png",
    description: "Master Java basics, OOPS, and Collections."
  }
];

function Services() {
  return (
    <div className="container-fluid bg-dark text-white min-vh-100 d-flex flex-column align-items-center py-4">
      {/* Title at the Top Center */}
      <h2 className="text-uppercase text-center mb-4">Java Training Courses</h2>
      
      {/* Cards in Vertical Format */}
      <div className="d-flex flex-column align-items-center w-100">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}

export default Services;
