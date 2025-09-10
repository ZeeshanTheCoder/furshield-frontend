import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../layouts/Layout";

import teamDetailsImg from "../../assets/img/team/team_details.jpg";
import rightArrowIcon from "../../assets/img/icon/right_arrow.svg";

export const TeamDetails = () => {
  return (
    <Layout breadcrumbTitle="Team Details" breadcrumbSubtitle={"Team Details"}>
      <section className="team__details-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="team__details-img">
                <img src={teamDetailsImg} alt="team member" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team__details-content">
                <h2 className="name">Daria Andaloro</h2>
                <span>Veterinary Technician</span>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries but also thep into electronic typesetting, remaining
                  essentially.
                </p>
                <div className="experience-wrap">
                  <h4 className="title">Experience:</h4>
                  <p>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries but also thep into electronic typesetting,
                    remaining essentially.
                  </p>
                </div>
                <div className="contact__info-wrap team__details-info">
                  <h6 className="title">Information:</h6>
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <i className="flaticon-phone"></i>
                      </div>
                      <a href="tel:0123456789">+123 8989 444</a>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-placeholder"></i>
                      </div>
                      256 Avenue, Newyork City
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-mail"></i>
                      </div>
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-share-alt"></i>
                      </div>
                      <ul className="list-wrap contact__social">
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
                    </li>
                  </ul>
                </div>
                <div className="contact__form-wrap team__details-form">
                  <form
                    action="assets/mail.php"
                    method="POST"
                    id="contact-form"
                    className="contact__form"
                  >
                    <h2 className="title">Post a comment</h2>
                    <span>
                      Your email address will not be published. Required fields
                      are marked *
                    </span>
                    <div className="row gutter-20">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input name="name" type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-grp">
                          <input
                            name="website"
                            type="url"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-grp">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn">
                      Send Us Message
                      <img src={rightArrowIcon} alt="" className="injectable" />
                    </button>
                  </form>
                  <p className="ajax-response mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
