import React from "react";

export default function JobOpening() {
  return (
    <div className="container text-center my-5">
      {/* Heading */}
      <h1 className="text-primary fw-bold">🚀 Latest Job Openings</h1>

      {/* Informational Message */}
      <p className="lead text-muted">
        Though you are not part of our online program yet, we still provide job openings for all candidates seeking opportunities in software development.  
      </p>

      {/* WhatsApp Message Information */}
      <p className="text-muted">
        To get personalized job openings, connect with us on WhatsApp. Just send us a message:  
        <span className="fw-bold"> "Hi! I want job openings"</span>, and our dedicated team will respond as soon as possible!  
      </p>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/7498660387?text=Hi!%20I%20want%20Job%20openings"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success btn-lg"
      >
        📩 Connect on WhatsApp
      </a>

      {/* Navigation Guidance */}
      <p className="text-muted mt-4">
        If you want to know more about us, you can check the sections above regarding **course duration, demo lectures, teaching modes, notes**, and more.
      </p>
      <p className="text-danger fw-bold">
        📱 Mobile Users: If you're unable to see the sections directly, please click on the **three Horizantal lines** (menu) at the top.  
        After clicking, you'll find all the options.  
      </p>

      {/* Closing Message */}
      <p className="mt-4 text-secondary fw-bold">
        Thanks for your time, and **Happy Coding!** 🚀💻  
      </p>
    </div>
  );
}
