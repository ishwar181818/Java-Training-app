import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import CourseDetails from "./components/CourseDetails";
import TeachingMode from "./components/TeachingMode";
import DemoLecture from "./components/DemoLecture";
import JobOpening from "./components/JobOpening";
import AnalyticsTracker from "./components/AnalyticsTracker";
import ReactGA from "react-ga4";
import Footer from "./components/Footer";
import "./styles/Global.css"; // Import global styles
import Testimonials from "./components/Testimonials";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-MCM3LJBCGW"); // Replace with your GA Measurement ID
  }, []);

  return (
    <Router>
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div className="content">
        <AnalyticsTracker />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/teaching-mode" element={<TeachingMode />} />
          <Route path="/course-details/:courseId" element={<CourseDetails />} />
          <Route path="/demo-lecture" element={<DemoLecture />} />
          <Route path="/job-openings" element={<JobOpening />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
