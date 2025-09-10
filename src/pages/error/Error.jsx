import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../layouts/Layout";

import errorImg from "../../assets/img/images/error_img.png";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const Error = () => {
  return (
    <Layout breadcrumbTitle="Error Page" breadcrumbSubtitle={"404"}>
      <section className="error__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="error__img">
                <img src={errorImg} alt="404 Error" />
              </div>
              <div className="error__content">
                <h2 className="title">OOPS! Nothing Was Found</h2>
                <p>
                  Oops! it could be you or us, there is no page here. It might
                  have been <br /> moved or deleted.Back To Home
                </p>
                <Link to="/" className="btn">
                  Back To Home Page{" "}
                  <img
                    src={rightArrow}
                    alt="Right Arrow"
                    className="injectable"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
