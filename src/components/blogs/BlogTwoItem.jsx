import React from "react";
import { Link } from "react-router-dom";

export const BlogTwoItem = ({ image, tags, title, author, date }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog__post-item-two shine-animate-item">
        <div className="blog__post-thumb-two shine-animate">
          <Link to="/blog-details">
            <img src={image} alt="img" />
          </Link>
          <ul className="list-wrap blog__post-tag blog__post-tag-two">
            {tags.map((tag, index) => (
              <li key={index}>
                <Link to="/blog">{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="blog__post-content-two">
          <h2 className="title">
            <Link to="/blog-details">{title}</Link>
          </h2>
          <div className="blog__post-meta">
            <ul className="list-wrap">
              <li>
                <i className="flaticon-user"></i>by
                <Link to="/blog-details">{author}</Link>
              </li>
              <li>
                <i className="flaticon-calendar"></i>
                {date}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
