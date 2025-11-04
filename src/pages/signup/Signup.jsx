import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { Link, useNavigate } from "react-router-dom";
import rightArrow from "../../assets/img/icon/right_arrow.svg";
import { axiosInstance } from "../../services/BaseUrl"; //   Import axiosInstance

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

  //   Regex for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.contactNumber.trim())
      return "Contact number is required.";
    if (!/^[0-9]{11}$/.test(formData.contactNumber))
      return "Contact number must be 11 digits.";
    if (!formData.email.trim()) return "Email is required.";
    if (!emailRegex.test(formData.email)) return "Enter a valid email address.";
    if (!formData.address.trim()) return "Address is required.";
    if (!formData.role.trim()) return "Please select a role.";
    if (!formData.password.trim()) return "Password is required.";
    if (formData.password.length < 8)
      return "Password must be at least 8 characters long.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsSuccess(false);

    //   Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setMessage(validationError);
      return;
    }

    setLoading(true);

    try {
      const result = await axiosInstance.post("/user/signup", formData);

      if (result.data.isSave) {
        setIsSuccess(true);
        setMessage(result.data.message); // "User Registered Successfully"

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
                <form onSubmit={handleSubmit} id="signup-form" className="contact__form">
                  <h2 className="title">Create Your Account</h2>
                  <div className="row gutter-20">
                    {/* Name */}
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="name"
                          type="text"
                          placeholder="Full Name"
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
                          placeholder="Password (min 8 characters)"
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
