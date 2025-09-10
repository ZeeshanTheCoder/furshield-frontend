import React from "react";

import adBanner from "../../assets/img/images/advertisement.jpg";

export const BannerAd = () => {
  return (
    <div className="ad-banner-area pb-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="ad-banner-img">
              <a href="#">
                <img src={adBanner} alt="img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
