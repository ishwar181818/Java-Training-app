import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ id, title, image, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-lg">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
          <Link to={`/course-details/${id}`} className="btn btn-primary w-100">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
