import React from "react";
import { Link } from "react-router-dom";
import { VideoPlayer } from "../video/VideoPlayer";

import blogDetailsImg from "../../assets/img/blog/blog_details_img.jpg";
import blogDetailsImg02 from "../../assets/img/blog/blog_details_img02.jpg";
import avatar from "../../assets/img/blog/avatar.png";

export const BlogDetailsContent = () => {
  return (
    <>
      <div className="blog__details-wrap">
        <div className="blog__details-thumb">
          <img src={blogDetailsImg} alt="img" />
        </div>
        <div className="blog__details-content">
          <h2 className="title">
            How Smashing Magazine Uses TinaCMS To Manage Appoint Editorial
            Workflow
          </h2>
          <div className="blog__post-meta">
            <ul className="list-wrap">
              <li>
                <i className="flaticon-user"></i>by
                <Link to="/blog-details">admin</Link>
              </li>
              <li>
                <i className="flaticon-calendar"></i>25th Aug, 2024
              </li>
              <li>
                <i className="fas fa-tags"></i>
                <Link to="/blog">Pet,</Link>
                <Link to="/blog">Medical</Link>
              </li>
              <li>
                <i className="far fa-comment-alt"></i>
                <Link to="/blog-details">05 Comments</Link>
              </li>
            </ul>
          </div>
          <p>
            When an unknown printer took ar galley offer type year anddey
            scrambled make type aewer specimen awebook bethas survived not only
            five when annery unknown printer.eed a little help from our friends
            from time to time.Although we offer the one-stop convenience.
          </p>
          <p>
            Eed a little help from our friends from time to time. Although we
            offer the one-stop convenience of annery integrated range of legal,
            financial services under one roof.eed a little help from our friends
            from time to time. Although we offer the one-stop convenience.
          </p>
          <blockquote>
            <p>
              “ urabitur varius eros rutrum consequat Mauris aewa sollicitudin
              enim condimentum luctus enim justo non molestie nisl ”
            </p>
          </blockquote>
          <h4 className="title-two">Rediscovering The Joy Of Design</h4>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen bookhas a not awertolw only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchan galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="blog__details-inner-wrap">
            <div className="row align-items-center">
              <div className="col-54">
                <div className="content">
                  <h3 className="title-two">
                    Revealing Images With CSS Mask Animations
                  </h3>
                  <p>
                    When an unknown printer took a galley type remaining
                    essentially unchan galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <ul className="list-wrap">
                    <li>
                      <i className="fas fa-arrow-right"></i>Medicare Advantage
                      Plans
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i>Analysis & Research
                    </li>
                    <li>
                      <i className="fas fa-arrow-right"></i>100% Secure Money
                      Back
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-46">
                <div className="thumb">
                  <img src={blogDetailsImg02} alt="" />

                  <VideoPlayer
                    trigger={
                      <a href="#vid" className="play-btn popup-video">
                        <i className="fas fa-play"></i>
                      </a>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen bookhas a not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchan
            galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="blog__details-content-bottom">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="post-tags">
                  <h5 className="title">Tags:</h5>
                  <ul className="list-wrap">
                    <li>
                      <Link to="#">Dogs</Link>
                    </li>
                    <li>
                      <Link to="#">Pet Care</Link>
                    </li>
                    <li>
                      <Link to="#">Cats</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="blog-post-share">
                  <h5 className="title">Share:</h5>
                  <ul className="list-wrap">
                    <li>
                      <Link to="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.whatsapp.com/" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.youtube.com/" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-avatar-wrap">
        <div className="blog-avatar-img">
          <div>
            <img src={avatar} alt="img" />
          </div>
        </div>
        <div className="blog-avatar-info">
          <span className="designation">Author</span>
          <h4 className="name">
            <a href="#">Parker Willy</a>
          </h4>
          <p>
            Finanappreciate your trust greatly Our clients choose dentace ducr
            emaining essential yearl ow we are the best area Awaitingare really.
          </p>
        </div>
      </div>
    </>
  );
};
