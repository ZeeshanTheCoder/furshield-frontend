import React from "react";

import bannerBg from "../../assets/img/banner/h3_banner_bg.jpg";
import titleImg from "../../assets/img/banner/h3_banner_title_img.png";
import bannerImg from "../../assets/img/banner/h3_banner_img.png";
import bannerImgShape from "../../assets/img/banner/h3_banner_img_shape.png";
import bannerShape02 from "../../assets/img/banner/h3_banner_shape02.png";
import bannerShape01 from "../../assets/img/banner/h3_banner_shape01.png";

export const BannerThree = () => {
  return (
    <section
      className="banner__area-three banner__bg-three"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10">
            <div className="banner__content-three">
              <span className="sub-title" data-aos="fade-up">
                Find your new pet from our animal shelters.
              </span>
              <h2 className="title" data-aos="fade-up" data-aos-delay="400">
                Adopt Your Pretty
                <img src={titleImg} alt="" />
                Friend
              </h2>
              <div
                className="banner__search-wrap-two"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <form action="#" className="banner__search-form-two">
                  <div className="select-grp">
                    <label>
                      <i className="flaticon-placeholder"></i>
                    </label>
                    <select name="location" className="orderby">
                      <option value="Select Location">Select Location</option>
                      <option value="NewYork City">NewYork City</option>
                      <option value="Carolina City">Carolina City</option>
                      <option value="California City">California City</option>
                      <option value="Downtown City">Downtown City</option>
                      <option value="Kansas City">Kansas City</option>
                    </select>
                  </div>
                  <div className="form-grp">
                    <input
                      type="text"
                      placeholder="What are you looking for . . ."
                    />
                    <button type="submit">
                      Search<i className="flaticon-loupe"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="banner__pet-wrap"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <i className="flaticon-dog"></i>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        Dogs <span>(2,590)</span>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-cat-face"></i>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        Cats <span>(1,217)</span>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-paw"></i>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        Others Pet <span>(1,120)</span>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="banner__img-three">
              <img
                src={bannerImg}
                alt="img"
                data-aos="fade-left"
                data-aos-delay="1000"
              />
              <img
                src={bannerImgShape}
                alt="shape"
                className="shape-one"
                data-aos="fade-up"
                data-aos-delay="800"
              />
              <img
                src={bannerShape02}
                alt="shape"
                className="shape-two ribbonRotate"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__shape-wrap-three">
        <img
          src={bannerShape01}
          alt="shape"
          data-aos="fade-down-right"
          data-aos-delay="600"
        />
      </div>
    </section>
  );
};
