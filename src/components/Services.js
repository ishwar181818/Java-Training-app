import React from "react";
import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Full Java Backend Development",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfP2_wDfsEVikxFSHTRl6JfyMiPVjZDF94rA&s",
    description: "Learn Java, Spring Boot, Microservices & more!"
  },
  {
    id: 2,
    title: "Core Java Training",
    image: "https://sathyatech.com/wp-content/uploads/2023/10/Core-Java.png",
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
