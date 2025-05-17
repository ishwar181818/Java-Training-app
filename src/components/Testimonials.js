import React from "react";
import "./Testimonials.css";

const testimonials = [
    { name: "Harsh Mishra", message: "Got complete training in Core Java — concepts were made crystal clear." },
    { name: "Tushar Koli", message: "Spring Boot training was hands-on and easy to follow." },
    { name: "Bhavana Berad", message: "Enjoyed learning REST APIs and how backend services work." },
    { name: "Rohan Mahajan", message: "Learned OOPs concepts with simple and practical examples." },
    { name: "Rahul Shirgaokar", message: "Exception handling and collections were explained very clearly." },
    { name: "Suraj Sawant", message: "The training also covered loops, methods, and object-oriented thinking." }
];

function Testimonials() {
  return (
    <div className="testimonial-slider-container">
      <h2 className="text-center text-primary fw-bold mb-4">🎤 Student Testimonials</h2>
      <div className="slider-wrapper">
        <div className="slider-track">
          {testimonials.map((t, index) => (
            <div className="testimonial-slide" key={index}>
              <div className="testimonial-card">
                <p className="testimonial-message">“{t.message}”</p>
                <p className="testimonial-name">- {t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
