import React from "react";
import { Link } from "react-router-dom";

import comment01 from "../../assets/img/blog/comment01.png";
import comment02 from "../../assets/img/blog/comment02.png";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const BlogComments = () => {
  return (
    <>
      <div className="comments-wrap">
        <h3 className="comments-wrap-title">02 Comments</h3>
        <div className="latest-comments">
          <ul className="list-wrap">
            <li>
              <div className="comments-box">
                <div className="comments-avatar">
                  <img src={comment01} alt="img" />
                </div>
                <div className="comments-text">
                  <div className="avatar-name">
                    <h6 className="name">Jessica Rose</h6>
                    <span className="date">December 27, 2023</span>
                  </div>
                  <p>
                    Finanappreciate your trust greatly Our clients choose
                    dentace ducts because know we are the best area Awaitingare
                    really.
                  </p>
                  <Link to="#" className="reply-btn">
                    Reply
                  </Link>
                </div>
              </div>
              <ul className="children">
                <li>
                  <div className="comments-box">
                    <div className="comments-avatar">
                      <img src={comment02} alt="img" />
                    </div>
                    <div className="comments-text">
                      <div className="avatar-name">
                        <h6 className="name">Parker Willy</h6>
                        <span className="date">December 28, 2023</span>
                      </div>
                      <p>
                        Finanappreciate your trust greatly Our clients choose
                        dentace ducts because know we are the best area
                        Awaitingare really.
                      </p>
                      <Link to="#" className="reply-btn">
                        Reply
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="comment-respond">
        <h3 className="comment-reply-title">Post a comment</h3>
        <form action="#" className="comment-form">
          <p className="comment-notes">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="form-grp">
            <textarea name="comment" placeholder="Comment"></textarea>
          </div>
          <div className="row gutter-20">
            <div className="col-md-4">
              <div className="form-grp">
                <input type="text" placeholder="Name" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-grp">
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-grp">
                <input type="url" placeholder="Website" />
              </div>
            </div>
          </div>
          <div className="form-grp checkbox-grp">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button type="submit" className="btn">
            Read More
            <img src={rightArrow} alt="" className="injectable" />
          </button>
        </form>
      </div>
    </>
  );
};
