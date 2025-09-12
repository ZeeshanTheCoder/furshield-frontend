import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMobileMenu, useSearch } from "../../lib/hooks/useHeader";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { HeaderNav } from "./HeaderNav";

import wLogo from "../../assets/img/logo/w_logo.png";
import { axiosInstance } from "../../services/BaseUrl";
import { AppContext } from "../../Context/MainContext";

export const HeaderThree = () => {
  const { showSearch, toggleSearch } = useSearch();
  const [userdatastate, setuserdatastate] = useState("");
  const [showLogout, setShowLogout] = useState(false);
  const {setuserdata} = useContext(AppContext)
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.delete("/auth/logout");
      if (response.data.isLogout) {
        // Remove token and user info from localStorage
        localStorage.removeItem("userdata"); // if token stored under 'token'

        // Also clear context state if needed
        setuserdata(null);

        // Redirect to login
        navigate("/login", { replace: true });
      } else {
        alert("Logout failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Something went wrong during logout.");
    }
  };

  useEffect(() => {
    const userget = async () => {
      try {
        const res = await axiosInstance.get("/user/getuser");
        if (res.status === 200) {
          console.log(res.data.user)
          setuserdatastate(res.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    userget();
  }, []);

  useMobileMenu();

  return (
    <>
      <header>
        <div id="header-fixed-height"></div>

        <div
          id="sticky-header"
          className="tg-header__area tg-header__area-three"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tgmenu__wrap">
                  <div className="row align-items-center">
                    <div className="col-xl-5">
                      <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                        <HeaderNav />
                      </div>
                    </div>

                    <div className="col-xl-2 col-md-4">
                      <div className="logo text-center">
                        <Link to="/">
                          <img src={wLogo} alt="Logo" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-5 col-md-8">
                      <div className="tgmenu__action tgmenu__action-two d-none d-md-block">
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
                            <a href="#">
                              <i className="flaticon-shopping-bag"></i>
                              <span>0</span>
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
                                          to="/view-products"
                                          className="btn btn-outline-danger btn-sm w-100"
                                          style={{ whiteSpace: "nowrap" }}
                                        >
                                          <i className="icon-products"></i> View
                                          Products
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
                                          to="/log-treatments"
                                          className="btn btn-outline-danger btn-sm w-100"
                                          style={{ whiteSpace: "nowrap" }}
                                        >
                                          <i className="icon-treatment"></i> Log
                                          Treatments
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
                    </div>
                  </div>
                  <div className="mobile-nav-toggler">
                    <i className="flaticon-layout"></i>
                  </div>
                </div>

                {/*  Mobile Menu   */}
                <HeaderMobileMenu />
              </div>
            </div>
          </div>
        </div>

        {/*  header-search  */}
        <HeaderSearch active={showSearch} toggleSearch={toggleSearch} />
      </header>
    </>
  );
};
