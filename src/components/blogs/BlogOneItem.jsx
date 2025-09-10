import React from "react";
import { Link } from "react-router-dom";

import blogImgShape from "../../assets/img/blog/blog_img_shape.svg";

export const BlogOneItem = ({ image, tags, author, date, title }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-8">
      <div className="blog__post-item shine-animate-item">
        <div className="blog__post-thumb">
          <div className="blog__post-mask shine-animate">
            <Link to="/blog-details">
              <img src={image} alt="img" />
            </Link>
            <ul className="list-wrap blog__post-tag">
              {tags.map((tag, index) => (
                <li key={index}>
                  <Link to="/blog">{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="shape">
            <img src={blogImgShape} alt="" className="injectable" />
          </div>
        </div>
        <div className="blog__post-content">
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
          <h2 className="title">
            <Link to="/blog-details">{title}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};
