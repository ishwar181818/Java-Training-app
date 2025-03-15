import React from "react";
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


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teaching-mode" element={<TeachingMode />} />
        <Route path="/course-details/:courseId" element={<CourseDetails />} />
        <Route path="/demo-lecture" element={<DemoLecture />} />
        <Route path="/job-openings" element={<JobOpening />} />
      </Routes>
    </Router>
  );
}

export default App;
