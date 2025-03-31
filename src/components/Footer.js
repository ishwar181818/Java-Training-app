import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Ensure react-bootstrap is installed

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="text-center text-md-start">
          {/* About Section */}
          <Col md={4} className="mb-4">
            <h4 className="fw-bold text-uppercase">About Us</h4>
            <p>
              Welcome to **Java Training Institute**, your gateway to a successful Java development career!  
              We offer beginner to advanced-level courses, hands-on projects, and **100% job assistance**.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2} className="mb-4">
            <h5 className="fw-bold text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">🏠 Home</a></li>
              <li><a href="/services" className="text-light text-decoration-none">📚 Courses</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">📞 Contact</a></li>
              <li><a href="/job-openings" className="text-light text-decoration-none">💼 Jobs</a></li>
              <li><a href="/demo-lecture" className="text-light text-decoration-none">🎥 Demo Lecture</a></li>
            </ul>
          </Col>

          {/* Courses Section */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold text-uppercase">Our Courses</h5>
            <ul className="list-unstyled">
              <li>✅ Core Java Training</li>
              <li>✅ Advanced Java & Spring Boot</li>
              <li>✅ Full Stack Java Developer</li>
              <li>✅ Java Placement Training</li>
            </ul>
            <p>
              <a href="/services" className="btn btn-sm btn-warning fw-bold">Explore Courses →</a>
            </p>
          </Col>

          {/* Contact Section */}
          <Col md={3} className="mb-4">
            <h5 className="fw-bold text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li>📧 Email: <a href="mailto:support@javatraining.com" className="text-light text-decoration-none">ishwarharbade55@gmail.com</a></li>
              <li>📞 Phone: 7498660387</li>
              <li>📍 Address: Upper Indira Nagar Bibwewadi Pune-440037</li>
            </ul>
          </Col>
        </Row>

        {/* Google Map Embed */}
        <div className="text-center mt-4">
          <h5 className="fw-bold text-uppercase">Our Location</h5>
          <iframe
            title="Java Training Institute Location" // Added title to fix ESLint warning
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.419891801642!2d73.86238857608816!3d18.464630170878788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eabe2c3d1271%3A0x3154cf027b3c5964!2sRaskar%20Palace!5e0!3m2!1sen!2sin!4v1743403969169!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} Java Training Institute. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
