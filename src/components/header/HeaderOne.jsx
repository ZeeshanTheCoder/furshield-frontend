import React, { useContext, useEffect, useState } from "react";
import { HeaderTop } from "./HeaderTop";
import LOGO from "../../assets/img/logo/logo3.png";
import { Link, useNavigate } from "react-router-dom";
import { HeaderNav } from "./HeaderNav";
import { HeaderOffcanvas } from "./HeaderOffcanvas";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import {
  useMobileMenu,
  useOffCanvas,
  useSearch,
} from "../../lib/hooks/useHeader";
import { AppContext } from "../../Context/MainContext";
import { axiosInstance } from "../../services/BaseUrl";

export const HeaderOne = () => {
  const { showSearch, toggleSearch } = useSearch();
  const { showCanvas, toggleCanvas } = useOffCanvas();
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
        alert("Logout failed: " + response.data.message);
      }
    } catch (error) {
      console.error(
        "Logout error:",
        error.response ? error.response.data : error.message
      );
      alert("Something went wrong during logout.");
    }
  };

  useMobileMenu();

  useEffect(() => {
    const userget = async () => {
      try {
        const res = await axiosInstance.get("/user/getuser");
        if (res.status === 200) {
          setuserdatastate(res.data.user);
          setuserdata(res.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    userget();
  }, []);

  return (
    <>
      <header>
        <div id="header-fixed-height"></div>

        {/* top */}
        <HeaderTop />

        {/* bottom */}
        <div id="sticky-header" className="tg-header__area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link to="/">
                        <img src={LOGO} alt="Logo" />
                      </Link>
                    </div>

                    {/* nav */}
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                      <HeaderNav />
                    </div>

                    <div className="tgmenu__action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-search">
                          <a
                            href="#"
                            className="search-open-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSearch();
                            }}
                          >
                            <i className="flaticon-loupe"></i>
                          </a>
                        </li>
                        <li className="header-cart">
                          <Link to={`/cart/${userdatastate._id}`}>
                            <i className="flaticon-shopping-bag"></i>
                            <span>0</span>
                          </Link>
                        </li>

                        <li className="offCanvas-menu">
                          <a
                            href="#"
                            className="menu-tigger"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleCanvas();
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="26"
                              height="16"
                              viewBox="0 0 26 16"
                              fill="none"
                            >
                              <rect
                                width="9"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                              <rect
                                x="11"
                                width="15"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                              <rect
                                y="14"
                                width="26"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                              <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                              <rect
                                x="17"
                                y="7"
                                width="9"
                                height="2"
                                rx="1"
                                fill="currentcolor"
                              />
                            </svg>
                          </a>
                        </li>

                        <li
                          className="header-btn"
                          style={{ position: "relative" }}
                        >
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
                                        <i className="flaticon-user me-1"></i>{" "}
                                        Profile
                                      </Link>
                                      <Link
                                        to="/admin"
                                        className="btn btn-outline-danger btn-sm w-100"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <i className="flaticon-user me-1"></i>{" "}
                                        Dashboard
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
                                        <i className="flaticon-user me-1"></i>{" "}
                                        Profile
                                      </Link>
                                      <Link
                                        to="/pet-profiles"
                                        className="btn btn-outline-danger btn-sm w-100"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <i className="icon-pet"></i> Pet
                                        Profiles
                                      </Link>
                                     
                                      <Link
                                        to="/pet-care"
                                        className="btn btn-outline-danger btn-sm w-100"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <i className="icon-care"></i> Care
                                        Options
                                      </Link>
                                      <Link
                                        to="/appointment-booking"
                                        className="btn btn-outline-danger btn-sm w-100"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <i className="icon-appointment"></i>{" "}
                                        Appointment Booking
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
                                        <i className="flaticon-user me-1"></i>{" "}
                                        Profile
                                      </Link>
                                      <Link
                                        to="/pet-medical-history"
                                        className="btn btn-outline-danger btn-sm w-100"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <i className="icon-medical"></i> Pet
                                        Medical History
                                      </Link>
                                      <Link
                                        to="/manage-appointments"
                                        className="btn btn-outline-danger btn-sm w-100"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <i className="icon-appointments"></i>{" "}
                                        Manage Appointments
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
                                        <i className="flaticon-user me-1"></i>{" "}
                                        Profile
                                      </Link>
                                      <Link
                                        to="/list-adoptable"
                                        className="btn btn-outline-danger btn-sm w-100"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <i className="icon-adopt"></i> List
                                        Adoptable
                                      </Link>
                                      <Link
                                        to="/pet-care-status"
                                        className="btn btn-outline-danger btn-sm w-100"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <i className="icon-care"></i> Pet Care
                                        Status
                                      </Link>
                                      <Link
                                        to="/notifications"
                                        className="btn btn-outline-danger btn-sm w-100"
                                        style={{ whiteSpace: "nowrap" }}
                                      >
                                        <i className="icon-notification"></i>{" "}
                                        Notification
                                      </Link>
                                    </>
                                  )}

                                  {/* Common options */}

                                  <button
                                    className="btn btn-outline-danger btn-sm w-100"
                                    onClick={handleLogout}
                                    style={{ whiteSpace: "nowrap" }}
                                  >
                                    <i className="fas fa-sign-out-alt me-1"></i>{" "}
                                    Logout
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
                      </ul>
                    </div>

                    <div className="mobile-nav-toggler">
                      <i className="flaticon-layout"></i>
                    </div>
                  </nav>
                </div>

                {/*  Mobile Menu   */}
                <HeaderMobileMenu />
              </div>
            </div>
          </div>
        </div>


        {/* off canvas */}
        <HeaderOffcanvas active={showCanvas} toggleCanvas={toggleCanvas} />
      </header>
    </>
  );
};
