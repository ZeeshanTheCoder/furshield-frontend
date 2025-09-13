
import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // ✅ Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.+)?$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (formData.website && !urlRegex.test(formData.website)) {
      newErrors.website = "Enter a valid website URL (http/https).";
    }
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage("");
    setIsSuccess(false);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSuccess(true);
    setSubmitMessage("Message sent successfully ✅");

    // Reset form
    setFormData({
      name: "",
      email: "",
      website: "",
      message: "",
    });
  };

  return (
    <Layout breadcrumbTitle="Contact Page" breadcrumbSubtitle={"Contact"}>
      <section className="contact__area">
        <div className="container">
          <div className="row">
            {/* info */}
            <div className="col-lg-5">
              <div className="contact__content">
                <div className="section__title mb-30">
                  <h2 className="title">
                    We Are Always Available For You & Your Pets
                  </h2>
                  <p>
                    Maecenas quis viverra metus, et efficitur ligula. Nam
                    coueaugue congue sed luctus lectus conIn onondimentum .
                  </p>
                </div>
                <div className="contact__info-wrap">
                  <h6 className="title">Information:</h6>
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <i className="flaticon-phone"></i>
                      </div>
                      <a href="tel:0123456789">+123 8989 444</a>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-placeholder"></i>
                      </div>
                      256 Avenue, Newyork City
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-mail"></i>
                      </div>
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-share-alt"></i>
                      </div>
                      <ul className="list-wrap contact__social">
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
                          <Link
                            to="https://www.instagram.com/"
                            target="_blank"
                          >
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="col-lg-7">
              <div className="contact__form-wrap">
                <form
                  onSubmit={handleSubmit}
                  id="contact-form"
                  className="contact__form"
                >
                  <h2 className="title">Post a comment</h2>
                  <span>
                    Your email address will not be published. Required fields
                    are marked *
                  </span>
                  <div className="row gutter-20">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          name="name"
                          type="text"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <small className="text-danger">{errors.name}</small>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          name="email"
                          type="email"
                          placeholder="E-mail"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="website"
                          type="url"
                          placeholder="Website"
                          value={formData.website}
                          onChange={handleChange}
                        />
                        {errors.website && (
                          <small className="text-danger">
                            {errors.website}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        {errors.message && (
                          <small className="text-danger">{errors.message}</small>
                        )}
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn">
                    Send Us Message
                    <img src={rightArrow} alt="" className="injectable" />
                  </button>
                </form>

                {/* ✅ Show response message */}
                <p
                  className={`ajax-response mb-0 mt-3 ${
                    isSuccess ? "text-success" : "text-danger"
                  }`}
                >
                  {submitMessage}
                </p>
              </div>
            </div>
          </div>

          {/* map */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};
