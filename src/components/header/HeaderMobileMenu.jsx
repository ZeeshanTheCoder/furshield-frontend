import React, { useContext, useState } from "react";
import LOGO from "../../assets/img/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/BaseUrl";
import { AppContext } from "../../Context/MainContext";
import { toast } from "react-toastify";

export const HeaderMobileMenu = () => {
  const { setuserdata } = useContext(AppContext);
  const [userdatastate, setuserdatastate] = useState("");
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  
  
  const handleLogout = async () => {
      try {
        const response = await axiosInstance.delete("/auth/logout");
        if (response.data.isLogout) {
          localStorage.removeItem("userdata"); // or clear context/state
          navigate("/login", { replace: true });
        } else {
          toast("Logout failed: " + response.data.message);
        }
      } catch (error) {
        console.error(
          "Logout error:",
          error.response ? error.response.data : error.message
        );
        toast("Something went wrong during logout.");
      }
    };
  
  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn">
            <i className="fas fa-times"></i>
          </div>

          <div className="nav-logo">
            <Link to="/">
              <img src={LOGO} alt="Logo" />
            </Link>
          </div>

          <div className="tgmobile__search"></div>

          <div className="tgmobile__menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          </div>

          <div className="m-2">
            <li className="header-btn list-unstyled" style={{ position: "relative" }}>
              {userdatastate?.name ? (
                <div
                  className="d-inline-block"
                  onMouseEnter={() => setShowLogout(true)}
                  onMouseLeave={() => setShowLogout(false)}
                  style={{ position: "relative" }}
                >
                  {/* Original Profile Button */}
                  <div className="btn d-flex align-items-center">
                    <i className="flaticon-user me-2"></i>
                    {userdatastate.name}
                  </div>

                  {/* Floating Logout & Menu Items (appears on hover) */}
                  {showLogout && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        marginTop: "1px",
                        zIndex: 1000,
                      }}
                    >
                      {/* Role-based menu options */}
                      {userdatastate.role === "admin" && (
                        <>
                          <Link
                            to="/profile"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="flaticon-user me-1"></i> Profile
                          </Link>
                          <Link
                            to="/admin"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="flaticon-user me-1"></i> Dashboard
                          </Link>
                        </>
                      )}
                      {userdatastate.role === "owner" && (
                        <>
                          <Link
                            to="/profile"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="flaticon-user me-1"></i> Profile
                          </Link>
                          <Link
                            to="/pet-profiles"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="icon-pet"></i> Pet Profiles
                          </Link>

                          <Link
                            to="/pet-care"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="icon-care"></i> Care Options
                          </Link>
                          <Link
                            to="/appointment-booking"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="icon-appointment"></i> Appointment
                            Booking
                          </Link>
                        </>
                      )}
                      {userdatastate.role === "vet" && (
                        <>
                          <Link
                            to="/profile"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="flaticon-user me-1"></i> Profile
                          </Link>
                          <Link
                            to="/pet-medical-history"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="icon-medical"></i> Pet Medical History
                          </Link>
                          <Link
                            to="/manage-appointments"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="icon-appointments"></i> Manage
                            Appointments
                          </Link>
                        </>
                      )}
                      {userdatastate.role === "shelter" && (
                        <>
                          <Link
                            to="/profile"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="flaticon-user me-1"></i> Profile
                          </Link>
                          <Link
                            to="/list-adoptable"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="icon-adopt"></i> List Adoptable
                          </Link>
                          <Link
                            to="/pet-care-status"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="icon-care"></i> Pet Care Status
                          </Link>
                          <Link
                            to="/notifications"
                            className="btn btn-outline-danger btn-sm w-100"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            <i className="icon-notification"></i> Notification
                          </Link>
                        </>
                      )}

                      {/* Common options */}

                      <button
                        className="btn btn-outline-danger btn-sm w-100"
                        onClick={handleLogout}
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <i className="fas fa-sign-out-alt me-1"></i> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="btn">
                  <i className="flaticon-user"></i> Sign In
                </Link>
              )}
            </li>
          </div>

          <div className="social-links">
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
          </div>
        </nav>
      </div>
      <div className="tgmobile__menu-backdrop"></div>
    </>
  );
};
