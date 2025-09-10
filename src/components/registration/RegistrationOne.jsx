import React from "react";

import registrationShape from "../../assets/img/images/registration_shape.svg";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const RegistrationOne = () => {
  return (
    <section className="registration__area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="registration__inner-wrap">
              <h2 className="title">Schedule a visit today!</h2>
              <div className="shape">
                <img src={registrationShape} alt="" />
              </div>
              <form action="#">
                <div className="row gutter-15">
                  <div className="col-lg-4 col-md-6">
                    <div className="form-grp">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Type Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-grp select-grp">
                      <label>Pet Type</label>
                      <select name="pet_type" className="orderby">
                        <option value="Select Pet Type">Select Pet Type</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-grp select-grp">
                      <label>Interest In</label>
                      <select name="interest" className="orderby">
                        <option value="Select Service">Select Service</option>
                        <option value="Pet Training">Pet Training</option>
                        <option value="Pet Grooming">Pet Grooming</option>
                        <option value="Care Services">Care Services</option>
                        <option value="Pet Boarding">Pet Boarding</option>
                        <option value="Pet Bath">Pet Bath</option>
                        <option value="Pet Adoption">Pet Adoption</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-grp">
                      <label htmlFor="date">Date</label>
                      <input id="date" className="textbox-n" type="date" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-grp">
                      <label htmlFor="time">Time</label>
                      <input id="time" placeholder="08:00 am - 10:00 am" />
                      <i className="flaticon-three-o-clock-clock"></i>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="form-grp">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        type="number"
                        placeholder="+123 888 ...."
                      />
                    </div>
                  </div>
                </div>
                <div className="submit__btn text-center mt-25">
                  <button type="submit" className="btn">
                    Start a Reservation
                    <img src={rightArrow} alt="" className="injectable" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
