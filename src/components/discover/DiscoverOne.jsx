import React from "react";
import { Link } from "react-router-dom";

import petIcon from "../../assets/img/icon/pet_icon02.svg";
import discoverImg01 from "../../assets/img/images/discover_img01.jpg";
import discoverImg02 from "../../assets/img/images/discover_img02.jpg";
import discoverImg03 from "../../assets/img/images/discover_img03.jpg";
import discoverImg04 from "../../assets/img/images/discover_img04.jpg";
import discoverImg05 from "../../assets/img/images/discover_img05.jpg";
import discoverShape from "../../assets/img/images/discover_shape.png";

export const DiscoverOne = () => {
  const cities = [
    { img: discoverImg01, name: "New York City", pets: 50, colSize: 6 },
    { img: discoverImg02, name: "Carolina City", pets: 19, colSize: 6 },
    { img: discoverImg03, name: "California City", pets: 22, colSize: 4 },
    { img: discoverImg04, name: "Downtown City", pets: 10, colSize: 4 },
    { img: discoverImg05, name: "Kansas City", pets: 20, colSize: 4 },
  ];

  return (
    <section className="discover__area">
      <div className="container">
        {/* top */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section__title text-center mb-40">
              <span className="sub-title">
                Discover Our Cities
                <strong className="shake">
                  <img src={petIcon} alt="" className="injectable" />
                </strong>
              </span>
              <h2 className="title">Find Pets by state or province</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                <br />
                amily and deserves ets are the best care.
              </p>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="row gutter-24">
          {cities.map((city, index) => (
            <div key={index} className={`col-lg-${city.colSize}`}>
              <div className="discover__item">
                <div className="discover__item-img">
                  <img src={city.img} alt="img" />
                </div>
                <div className="discover__item-content">
                  <h2 className="title">
                    <Link to="/contact">{city.name}</Link>
                  </h2>
                  <span>{city.pets} Pets</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* shape */}
      <div className="discover__shape">
        <img src={discoverShape} alt="shape" className="ribbonRotate" />
      </div>
    </section>
  );
};
