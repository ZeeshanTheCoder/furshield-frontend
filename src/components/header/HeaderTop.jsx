import React from "react";

export const HeaderTop = () => {
  return (
    <div className="tg-header__top">
      <div className="container custom-container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <ul className="tg-header__top-info left-side list-wrap">
              <li>
                <i className="flaticon-placeholder"></i>Aptech Metro Star Gate,
                Karachi
              </li>
              <li>
                <i className="flaticon-mail"></i>
                <a href="mailto:Petspostinfo@gmail.com">
                  Petspostinfo@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-lg-4">
            <ul className="tg-header__top-right list-wrap">
              <li>
                <i className="flaticon-three-o-clock-clock"></i>Opening Hour:
                09.00 am- 11.00 pm
              </li>
              <li className="tg-header__top-social">
                <ul className="list-wrap">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.whatsapp.com/" target="_blank">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
