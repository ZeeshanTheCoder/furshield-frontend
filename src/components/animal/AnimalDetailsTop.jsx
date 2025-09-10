import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide, modules } from "../swiper/SwiperRoot";

import checkIcon from "../../assets/img/icon/check_icon02.svg";
import petDetails01 from "../../assets/img/shop/pet_details01.jpg";
import petDetails02 from "../../assets/img/shop/pet_details02.jpg";
import petDetails03 from "../../assets/img/shop/pet_details03.jpg";
import petDetails04 from "../../assets/img/shop/pet_details04.jpg";

export const AnimalDetailsTop = () => {
  return (
    <div className="animal__details-wrap">
      <div className="row">
        <div className="col-61">
          <div className="animal__details-img-wrap">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="itemOne-tab-pane"
                role="tabpanel"
                aria-labelledby="itemOne-tab"
                tabIndex={0}
              >
                <Sliders />
              </div>
              <div
                className="tab-pane fade"
                id="itemTwo-tab-pane"
                role="tabpanel"
                aria-labelledby="itemTwo-tab"
                tabIndex={0}
              >
                <Sliders />
              </div>
              <div
                className="tab-pane fade"
                id="itemThree-tab-pane"
                role="tabpanel"
                aria-labelledby="itemThree-tab"
                tabIndex={0}
              >
                <Sliders />
              </div>
              <div
                className="tab-pane fade"
                id="itemFour-tab-pane"
                role="tabpanel"
                aria-labelledby="itemFour-tab"
                tabIndex={0}
              >
                <Sliders />
              </div>
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="itemOne-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#itemOne-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="itemOne-tab-pane"
                  aria-selected="true"
                >
                  <img src={petDetails01} alt="img" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="itemTwo-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#itemTwo-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="itemTwo-tab-pane"
                  aria-selected="false"
                >
                  <img src={petDetails02} alt="img" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="itemThree-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#itemThree-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="itemThree-tab-pane"
                  aria-selected="false"
                >
                  <img src={petDetails03} alt="img" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="itemFour-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#itemFour-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="itemFour-tab-pane"
                  aria-selected="false"
                >
                  <img src={petDetails04} alt="img" />
                </button>
              </li>
            </ul>
          </div>

          <div className="animal__details-description">
            <h4 className="title">Description</h4>
            <p>
              When an unknown printer took a galley of type and scrambled ew
              year make a type speci awmen bookbsites and e-commerce shops. We
              know how hard.when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              centurieswhen an unknown printer took a galley of type and
              scrambled.
            </p>
          </div>

          <div className="animal__details-info-wrap">
            <h4 className="title">More Additional Information</h4>
            <p>
              When an unknown printer took a galley of type and scrambled ew
              year make a type speci awmen bookbsites and e-commerce shops. We
              know how hard.
            </p>
            <div className="introducing__list-box">
              <ul className="list-wrap">
                <li>
                  <span className="icon">
                    <img src={checkIcon} alt="" className="injectable" />
                  </span>
                  Vaccine Completed
                </li>
                <li>
                  <span className="icon">
                    <img src={checkIcon} alt="" className="injectable" />
                  </span>
                  24/7 emergency assistance
                </li>
                <li>
                  <span className="icon">
                    <img src={checkIcon} alt="" className="injectable" />
                  </span>
                  6 Month Health Insurance
                </li>
                <li>
                  <span className="icon">
                    <img src={checkIcon} alt="" className="injectable" />
                  </span>
                  Health Record Profile
                </li>
                <li>
                  <span className="icon">
                    <img src={checkIcon} alt="" className="injectable" />
                  </span>
                  100% Coverage
                </li>
                <li>
                  <span className="icon">
                    <img src={checkIcon} alt="" className="injectable" />
                  </span>
                  NYC sales tax
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-39">
          <aside className="animal__details-sidebar">
            <div className="animal__details-widget">
              <div className="animal__details-sidebar-info">
                <h4 className="title">The Adult Brown Tabby Cat</h4>
                <p>
                  when an unknown printer took a galley offer type anaweard
                  scramyear make a type specimen.
                </p>
                <h4 className="price">$257.00</h4>
                <ul className="list-wrap">
                  <li>
                    <span>Available Date:</span>09, Sep 2023
                  </li>
                  <li>
                    <span>Breed:</span>Shih Tzu
                  </li>
                  <li>
                    <span>Color:</span>Brown/white
                  </li>
                  <li>
                    <span>Gender:</span>Male
                  </li>
                  <li>
                    <span>Weight:</span>9-12lbs
                  </li>
                  <li>
                    <span>Puppy ID:</span>6191-EP
                  </li>
                  <li>
                    <span>Date of Birth:</span>09, Jul 2023
                  </li>
                </ul>
              </div>
            </div>
            <div className="animal__details-widget">
              <h4 className="widget-title">Payment Type</h4>
              <div className="payment__type-wrap">
                <form action="#" className="payment__form">
                  <div className="select-grp">
                    <select name="pet_type" className="orderby">
                      <option value="Select">Select</option>
                      <option value="Select One">Select One</option>
                      <option value="Select Two">Select Two</option>
                      <option value="Select Three">Select Three</option>
                    </select>
                  </div>
                  <button type="submit">Bring Me Home</button>
                </form>
                <div className="social-wrap">
                  <h6 className="title">Share This Post:</h6>
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
            <div className="animal__details-widget">
              <div className="animal__details-map">
                <h4 className="widget-title">Map Location</h4>
                <div className="location-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const Sliders = () => {
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
    // Navigation arrows
    modules: modules,
    navigation: {
      nextEl: ".pet-button-next",
      prevEl: ".pet-button-prev",
    },
  };

  return (
    <>
      <Swiper {...swiperSettings} className="pet-active">
        <SwiperSlide>
          <img src={petDetails04} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={petDetails02} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={petDetails03} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={petDetails01} alt="img" />
        </SwiperSlide>
      </Swiper>

      <div className="pet__nav">
        <button className="pet-button-prev">
          <i className="flaticon-left"></i>
        </button>
        <button className="pet-button-next">
          <i className="flaticon-next"></i>
        </button>
      </div>
    </>
  );
};
