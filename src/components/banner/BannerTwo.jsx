import React from "react";

import bannerBg from "../../assets/img/banner/h2_banner_bg.jpg";
import bannerImg from "../../assets/img/banner/h2_banner_img.png";
import bannerShape1 from "../../assets/img/banner/h2_banner_shape01.png";
import bannerShape2 from "../../assets/img/banner/h2_banner_shape02.png";

export const BannerTwo = () => {
  return (
    <section className="banner__area-two">
      <div
        className="banner__bg-two"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-10">
              <div className="banner__content-two">
                <span className="sub-title" data-aos="fade-up">
                  Let's get started. Search pets for your home
                </span>
                <h2 className="title" data-aos="fade-up" data-aos-delay="400">
                  Easy Way to Find Your <br />
                  Perfect Pets Breed
                </h2>
                <div
                  className="banner__radio-wrap"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="dog"
                    />
                    <label className="form-check-label" htmlFor="dog">
                      {" "}
                      Dog{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="cat"
                    />
                    <label className="form-check-label" htmlFor="cat">
                      {" "}
                      Cat{" "}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="pet"
                    />
                    <label className="form-check-label" htmlFor="pet">
                      Other Pet
                    </label>
                  </div>
                </div>
                <div
                  className="banner__search-wrap"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <form action="#" className="banner__search-form">
                    <div className="select-grp">
                      <select name="pet_type" className="orderby">
                        <option value="Select Breed">Select Breed</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Dog">Other Pet</option>
                      </select>
                    </div>
                    <div className="select-grp select-grp-two">
                      <select name="male" className="orderby">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="form-grp">
                      <input
                        type="text"
                        placeholder="What are you looking for . . ."
                      />
                      <button type="submit">
                        <i className="flaticon-loupe"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="banner__img-two">
                <img
                  src={bannerImg}
                  alt="img"
                  data-aos="fade-left"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="banner__shape-wrap-two">
          <img
            src={bannerShape1}
            alt="shape"
            data-aos="fade-right"
            data-aos-delay="600"
          />
          <img
            src={bannerShape2}
            alt="shape"
            data-aos="fade-up-left"
            data-aos-delay="600"
          />
        </div>
      </div>
    </section>
  );
};
