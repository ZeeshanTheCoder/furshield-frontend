import React, { useState, useRef } from "react";
import { Layout } from "../../layouts/Layout";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", //   Renamed from "website" to "subject"
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef();

  //   Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // ❌ Removed urlRegex – no longer needed

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
    //   Removed website/subject URL validation
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage("");
    setIsSuccess(false);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const data = new FormData(formRef.current);

    //   Send form data using FormSubmit
    try {
      await fetch("https://formsubmit.co/dadb08d81d3500497e2d421829421d4c", {
        method: "POST",
        body: data,
      });
      setIsSuccess(true);
      setSubmitMessage("  Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "", //   Reset subject
        message: "",
      });
    } catch (error) {
      setIsSuccess(false);
      setSubmitMessage("❌ Failed to send message. Please try again.");
    }
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
                    coueaugue congue sed luctus lectus conIn onondimentum.
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
                      Aptech Metro Star Gate Center, Karachi
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-mail"></i>
                      </div>
                      <a href="mailto:furshield@gmail.com">furshield@gmail.com</a>
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="col-lg-7">
              <div className="contact__form-wrap">
                <form
                  ref={formRef}
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
                          required
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
                          required
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email}</small>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="subject" //   Changed from "website" to "subject"
                          type="text" //   Changed from "url" to "text"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        {/*   No error display for subject (was for website) */}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        {errors.message && (
                          <small className="text-danger">{errors.message}</small>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* hidden fields for FormSubmit */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <button type="submit" className="btn">
                    Send Us Message
                    <img src={rightArrow} alt="" className="injectable" />
                  </button>
                </form>

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36383.65903394613!2d67.11581214720266!3d24.87987194066536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1762241190372!5m2!1sen!2s"
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