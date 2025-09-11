import React from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";

import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const Login = () => {
  return (
    <Layout breadcrumbTitle="Login Page" breadcrumbSubtitle={"Login"}>
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            {/* Login Form - Centered or Full Width */}
            <div className="col-lg-6">
              <div className="contact__form-wrap">
                <form
                  action="assets/mail.php" // ⚠️ You may want to change this to your auth endpoint
                  method="POST"
                  id="login-form"
                  className="contact__form"
                >
                  <h2 className="title">Login to Your Account</h2>
                  <span>
                    Please enter your email and password to continue.
                  </span>
                  <div className="row gutter-20">
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="password"
                          type="password"
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn">
                    Login
                    <img src={rightArrow} alt="" className="injectable" />
                  </button>
                </form>
                <p className="ajax-response mb-0"></p>
                <div className="mt-4 text-center">
                  <span>Don't have an account? </span>
                  <Link to="/signup">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};