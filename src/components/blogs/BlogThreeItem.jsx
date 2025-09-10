import React from "react";
import { Link } from "react-router-dom";

import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const BlogThreeItem = ({ image, tags, date, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog__post-item-three shine-animate-item">
        <div className="blog__post-thumb-three shine-animate">
          <Link to="/blog-details">
            <img src={image} alt="img" />
          </Link>
          <ul className="list-wrap blog__post-tag blog__post-tag-two">
            {tags.map((tag, index) => (
              <li key={index}>
                <Link to="blog.html">{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="blog__post-content-three">
          <div className="blog__post-meta">
            <ul className="list-wrap">
              <li>
                <i className="flaticon-calendar"></i>
                {date}
              </li>
              <li>
                <i className="flaticon-user"></i>by
                <Link to="/blog-details">admin</Link>
              </li>
            </ul>
          </div>
          <h2 className="title">
            <Link to="/blog-details">{title}</Link>
          </h2>
          <p>{description}</p>
          <Link to="/blog-details" className="btn btn-two">
            Read More
            <img src={rightArrow} alt="" className="injectable" />
          </Link>
        </div>
      </div>
    </div>
  );
};
