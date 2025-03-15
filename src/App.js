import React ,{ useEffect }  from "react";
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


function App() {

  useEffect(() => {
    ReactGA.initialize("G-MCM3LJBCGW"); // Replace with your Measurement ID
  }, []);
  return (
    <Router>
       <AnalyticsTracker /> {/* Tracks route changes */}
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
