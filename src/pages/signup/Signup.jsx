import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import rightArrow from "../../assets/img/icon/right_arrow.svg";
import { axiosInstance } from "../../services/BaseUrl"; // ✅ Import axiosInstance

export const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    address: "",
    role: "",
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
      // ✅ Using axiosInstance — cleaner and pre-configured
      const result = await axiosInstance.post("/user/signup", formData);

      if (result.data.isSave) {
        setIsSuccess(true);
        setMessage(result.data.message); // "User Registered Successfully"

        // ✅ Navigate to /login after 1.5 seconds
        setTimeout(() => {
          navigate("/login");
        }, 1500);

        // Reset form
        setFormData({
          name: "",
          contactNumber: "",
          email: "",
          address: "",
          role: "",
          password: "",
        });
      } else {
        setIsSuccess(false);
        setMessage(
          result.data.message || "Registration failed. Please try again."
        );
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error.response?.data?.message || "Network error. Please try again."
      );
      console.error("Signup Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout breadcrumbTitle="Signup Page" breadcrumbSubtitle={"Signup"}>
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="contact__form-wrap">
                <form
                  onSubmit={handleSubmit}
                  id="signup-form"
                  className="contact__form"
                >
                  <h2 className="title">Create Your Account</h2>
                  <div className="row gutter-20">
                    {/* Name */}
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Contact Number */}
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="contactNumber"
                          type="tel"
                          placeholder="Contact Number"
                          required
                          value={formData.contactNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Email */}
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

                    {/* Address */}
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="address"
                          type="text"
                          placeholder="Address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Role */}
                    <div className="col-md-12">
                      <div className="form-grp">
                        <select
                          name="role"
                          className="form-control w-100 p-3 border rounded-pill bg-white"
                          required
                          value={formData.role}
                          onChange={handleChange}
                          style={{ backgroundImage: "none", color: "#8793AB" }}
                        >
                          <option value="">Select Role</option>
                          <option value="owner">Pet Owner</option>
                          <option value="vet">Veterinarian</option>
                          <option value="shelter">Shelter Staff</option>
                        </select>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="password"
                          type="password"
                          placeholder="Password (min 6 characters)"
                          minLength={6}
                          required
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn" disabled={loading}>
                    {loading ? "Signing Up..." : "Sign Up"}
                    <img src={rightArrow} alt="" className="injectable" />
                  </button>

                  <div className="mt-3 text-center">
                    <span>
                      Already have an account? <Link to="/login">Login</Link>
                    </span>
                  </div>
                </form>

                {/* Display success/error message */}
                <p
                  className={`ajax-response mb-0 mt-3 ${
                    isSuccess ? "text-success" : "text-danger"
                  }`}
                  style={{ fontWeight: "500" }}
                >
                  {message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};