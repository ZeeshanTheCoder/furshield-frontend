import React from "react";
import { Link } from "react-router-dom";

export const BlogFourItem = ({ image, category, date, author, title }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="blog__post-item-four shine-animate-item">
        <div className="blog__post-thumb-four shine-animate">
          <Link to="/blog-details">
            <img src={image} alt="img" />
          </Link>
          <ul className="list-wrap blog__post-tag blog__post-tag-three">
            <li>
              <Link to="/blog">{category}</Link>
            </li>
          </ul>
        </div>
        <div className="blog__post-content-four">
          <div className="blog__post-meta">
            <ul className="list-wrap">
              <li>
                <i className="flaticon-calendar"></i>
                {date}
              </li>
              <li>
                <i className="flaticon-user"></i>by
                <Link to="/blog-details">{author}</Link>
              </li>
            </ul>
          </div>
          <h2 className="title">
            <Link to="/blog-details">{title}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};
