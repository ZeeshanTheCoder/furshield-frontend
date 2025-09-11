import React, { useContext, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { Link, useNavigate } from "react-router-dom"; // 👈 Added useNavigate
import { axiosInstance } from "../../services/BaseUrl";
import rightArrow from "../../assets/img/icon/right_arrow.svg";
import { AppContext } from "../../Context/MainContext"; // 👈 Already imported

export const Login = () => {
  const { setuserdata } = useContext(AppContext); // 👈 Get setter from context
  const navigate = useNavigate(); // 👈 Better than window.location for React Router

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const result = await axiosInstance.post("/auth/login", formData);

      if (result.data.isLogin && result.data.user) {
        // ✅ SAVE USER TO CONTEXT — This was missing!
        setuserdata({
          user: result.data.user, // 👈 Save full user object
        });

        setIsSuccess(true);
        setMessage("Login successful! Redirecting...");

        // ✅ Use navigate instead of window.location for smoother UX
        setTimeout(() => {
          navigate("/profile"); // or "/dashboard", "/pet-profiles", etc.
        }, 1000);
      } else {
        setIsSuccess(false);
        setMessage(result.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error.response?.data?.message || "Network error. Please try again."
      );
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout breadcrumbTitle="Login Page" breadcrumbSubtitle={"Login"}>
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="contact__form-wrap">
                <form
                  onSubmit={handleSubmit}
                  id="login-form"
                  className="contact__form"
                >
                  <h2 className="title">Login to Your Account</h2>
                  <span>Please enter your email and password to continue.</span>
                  <div className="row gutter-20">
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          required
                          value={formData.email}
                          onChange={handleChange}
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
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                    <img src={rightArrow} alt="" className="injectable" />
                  </button>
                </form>

                <p
                  className={`ajax-response mb-0 mt-3 ${
                    isSuccess ? "text-success" : "text-danger"
                  }`}
                  style={{ fontWeight: "500" }}
                >
                  {message}
                </p>

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