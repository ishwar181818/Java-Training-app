import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Announcement bar */}
      <div className="announce-bar">
        <Link to="/job-openings" className="announce-link">
          🚀&nbsp; New openings for Java backend roles — view now
        </Link>
      </div>

      {/* Hero */}
      <section className="hero">
        <video
          className="hero-bg-video"
          src="/xyz.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
        <p className="hero-kicker">Java Backend Training</p>
        <h1 className="hero-title">
          Learn Java. Build backends.<br />
          <span className="hero-gradient">Get hired.</span>
        </h1>
        <p className="hero-sub">
          A hands-on, mentor-led program that takes you from Java fundamentals
          to a job-ready backend developer — Spring Boot, REST APIs, and real
          projects included.
        </p>
        <div className="hero-actions">
          <Link to="/services" className="btn-primary">Explore courses</Link>
          <Link to="/job-openings" className="btn-text">See job openings ›</Link>
        </div>
        <div className="hero-media">
          <img src="/training.jpeg" alt="Java Training" className="hero-image" />
        </div>
        </div>
      </section>

      {/* Promo strip */}
      <section className="promo-strip">
        <div className="promo-inner">
          <p className="promo-title">Java coding batches starting soon</p>
          <p className="promo-text">
            Just three months of dedication stands between you and a backend
            developer role. Head to the Quick Links section at the bottom of
            the page and select Contact to reserve your seat.
          </p>
        </div>
      </section>

      {/* Why Java */}
      <section className="spotlight">
        <div className="spotlight-grid">
          <div className="spotlight-media">
            <img src="/Capture.jpg" alt="Why Java" className="spotlight-image" />
          </div>
          <div className="spotlight-copy">
            <h2>Why learn Java</h2>
            <ul className="plain-list">
              <li>One of the most in-demand programming languages globally</li>
              <li>Powers enterprise applications, Android apps, and web backends</li>
              <li>Platform independent — write once, run anywhere</li>
              <li>Backed by companies like Google, Amazon, and Netflix</li>
              <li>A deep ecosystem built around Spring Boot and microservices</li>
              <li>Strong multi-threading for high-performance applications</li>
              <li>Strong salary potential for backend developers</li>
              <li>A large, active community and endless open-source libraries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="section-head">
          <h2>Why train with us</h2>
          <p>Hands-on practice, real mentorship, and a clear path to hire.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-tile">
            <img src="/trainer.jpg" alt="Expert Trainers" />
            <h3>Expert trainers</h3>
            <p>Learn from industry practitioners with over ten years of experience.</p>
          </div>
          <div className="feature-tile">
            <img src="/laptop.jpg" alt="Hands-on Training" />
            <h3>Hands-on training</h3>
            <p>Work on live projects and build applications you can actually ship.</p>
          </div>
          <div className="feature-tile">
            <img src="/vacancy.jpg" alt="Job Support" />
            <h3>Job assistance</h3>
            <p>Get placement support and career guidance to land your first role.</p>
          </div>
        </div>
      </section>

      {/* Curriculum spec sheet */}
      <section className="curriculum">
        <div className="section-head">
          <h2>What you'll cover</h2>
          <p>A complete path from fundamentals to a hireable skill set.</p>
        </div>
        <div className="spec-sheet">
          <div className="spec-row">
            <span className="spec-num">01</span>
            <div><h4>Java backend foundations</h4><p>Complete Java backend, from scratch to advanced.</p></div>
          </div>
          <div className="spec-row">
            <span className="spec-num">02</span>
            <div><h4>Spring Boot & microservices</h4><p>In-depth architecture and service design.</p></div>
          </div>
          <div className="spec-row">
            <span className="spec-num">03</span>
            <div><h4>REST APIs & databases</h4><p>Mastering REST APIs and database integration.</p></div>
          </div>
          <div className="spec-row">
            <span className="spec-num">04</span>
            <div><h4>Hibernate, JPA & SQL</h4><p>Hands-on persistence and query practice.</p></div>
          </div>
          <div className="spec-row">
            <span className="spec-num">05</span>
            <div><h4>Deployment & cloud basics</h4><p>Real-world deployment fundamentals.</p></div>
          </div>
          <div className="spec-row">
            <span className="spec-num">06</span>
            <div><h4>Mentorship & code review</h4><p>One-on-one mentorship and code review sessions.</p></div>
          </div>
          <div className="spec-row">
            <span className="spec-num">07</span>
            <div><h4>Mock interviews & resume</h4><p>Mock interviews and professional resume building.</p></div>
          </div>
          <div className="spec-row">
            <span className="spec-num">08</span>
            <div><h4>Interview prep library</h4><p>Access to a premium interview question bank.</p></div>
          </div>
        </div>
        <div className="curriculum-media">
          <img src="/bench.jpg" alt="Course Highlights" />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="closing-cta">
        <h2>Ready to become a Java backend developer?</h2>
        <p>Enroll today and take your career to the next level.</p>
        <Link to="/services" className="btn-primary btn-large">Explore courses</Link>
      </section>
    </div>
  );
}

export default Home;