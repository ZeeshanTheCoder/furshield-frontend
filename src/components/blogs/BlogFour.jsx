import React from "react";
import { Link } from "react-router-dom";

import titleShape from "../../assets/img/images/title_shape.svg";
import blogShape1 from "../../assets/img/blog/h4_blog_shape01.png";
import blogShape2 from "../../assets/img/blog/h4_blog_shape02.png";
import blogPost1 from "../../assets/img/blog/h4_blog_post01.jpg";
import blogPost2 from "../../assets/img/blog/h4_blog_post02.jpg";
import blogPost3 from "../../assets/img/blog/h4_blog_post03.jpg";
import blogPost4 from "../../assets/img/blog/h4_blog_post04.jpg";
import { BlogFourItem } from "./BlogFourItem";

export const BlogFour = () => {
  const blogPosts = [
    {
      id: 1,
      image: blogPost1,
      category: "Pet",
      date: "25th Aug",
      author: "admin",
      title: "10 Things You Didn't Know about The Shinese",
    },
    {
      id: 2,
      image: blogPost2,
      category: "Care",
      date: "25th Aug",
      author: "admin",
      title: "A Complete Price Guide for the Shar Pei Breed",
    },
    {
      id: 3,
      image: blogPost3,
      category: "Pet Health",
      date: "25th Aug",
      author: "admin",
      title: "Comparing the Blue vs. Lilac French Bulldog",
    },
    {
      id: 4,
      image: blogPost4,
      category: "Cat",
      date: "25th Aug",
      author: "admin",
      title: "Five Things You Didn't Know about the Red",
    },
  ];

  return (
    <section className="blog__post-area-four">
      <div className="container">
        {/* top */}
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="section__title-two mb-20">
              <h2 className="title">
                Latest News & Updates
                <img src={titleShape} alt="" className="injectable" />
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="view-all-btn">
              <Link to="/blog">
                See All <i className="flaticon-right-arrow-angle"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="row justify-content-center">
          {blogPosts.map((post) => (
            <BlogFourItem key={post.id} {...post} />
          ))}
        </div>
      </div>

      {/* shape */}
      <div className="blog__shape-wrap-four">
        <img
          src={blogShape1}
          alt="img"
          data-aos="fade-down-left"
          data-aos-delay="400"
        />
        <img
          src={blogShape2}
          alt="img"
          data-aos="fade-up-right"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};
