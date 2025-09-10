import React from "react";
import { Layout } from "../../layouts/Layout";

import rightArrow from "../../assets/img/icon/right_arrow.svg";
import registrationImg from "../../assets/img/images/registration_img.png";

export const Reservation = () => {
  return (
    <Layout breadcrumbTitle="Book your Slot" breadcrumbSubtitle={"Reservation"}>
      <section className="registration__area-two">
        <div className="container">
          <div className="registration__inner-wrap-two">
            <div className="row">
              <div className="col-lg-8">
                <div className="registration__form-wrap">
                  <form action="#" className="registration__form">
                    <h3 className="title">Request a Schedule</h3>
                    <span>
                      Your email address will not be published. Required fields
                      are marked *
                    </span>
                    <div className="row gutter-20">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input type="text" placeholder="Full Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input type="email" placeholder="E-mail" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input type="number" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input type="date" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp select-grp">
                          <select name="Species" className="orderby">
                            <option value="Species">Species</option>
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input type="text" placeholder="Breed" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-grp select-grp">
                          <select name="Reason" className="orderby">
                            <option value="Reason For Appointment">
                              Reason For Appointment
                            </option>
                            <option value="Select One">Select One</option>
                            <option value="Select Two">Select Two</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-grp">
                          <textarea
                            name="comment"
                            placeholder="Special Note . . ."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn">
                      Book Now
                      <img src={rightArrow} alt="" className="injectable" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="registration__img">
                  <img
                    src={registrationImg}
                    alt=""
                    data-aos="fade-right"
                    data-aos-delay="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
