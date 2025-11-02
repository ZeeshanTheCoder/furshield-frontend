import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMobileMenu, useSearch } from "../../lib/hooks/useHeader";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { HeaderNav } from "./HeaderNav";
import { useCart } from "../../Context/CartContext"; // ✅ Added

import wLogo from "../../assets/img/logo/logo3.png";
import { axiosInstance } from "../../services/BaseUrl";
import { AppContext } from "../../Context/MainContext";
import { toast } from "react-toastify";

export const HeaderThree = () => {
  const { showSearch, toggleSearch } = useSearch();
  const [userdatastate, setuserdatastate] = useState("");
  const [showLogout, setShowLogout] = useState(false);
  const { setuserdata } = useContext(AppContext);
  const navigate = useNavigate();
  const { cart, fetchCart } = useCart();

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.delete("/auth/logout");
      if (response.data.isLogout) {
        localStorage.removeItem("userdata");

        setuserdata(null);

        navigate("/login", { replace: true });
      } else {
        toast("Logout failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast("Something went wrong during logout.");
    }
  };

  useEffect(() => {
    const userget = async () => {
      try {
        const res = await axiosInstance.get("/user/getuser");
        if (res.status === 200) {
          console.log(res.data.user);
          setuserdatastate(res.data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    userget();
  }, []);

  useMobileMenu();

  const cartItemCount = cart?.items?.length > 0 ? cart.items.length : 0;

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
                            <Link
                              to={
                                userdatastate?._id
                                  ? `/cart/${userdatastate._id}`
                                  : "/login"
                              }
                            >
                              <i className="flaticon-shopping-bag"></i>
                              {userdatastate?._id && cart?.items != null && (
                                <span>{cart.items.length || 0}</span>
                              )}
                            </Link>
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
                                <div
                                  className="btn d-flex align-items-center"
                                  style={{
                                    backgroundColor: "#0056b3",
                                    color: "white",
                                  }}
                                >
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
                                      marginLeft: "auto",
                                      marginTop: "0px",
                                      zIndex: 1000,
                                      backgroundColor: "white",
                                      borderRadius: "8px",
                                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                                      border: "1px solid #ddd",
                                      overflow: "hidden",
                                      minWidth: "200px",
                                    }}
                                  >
                                    {/* Role-based menu options */}
                                    {userdatastate.role === "admin" && (
                                      <>
                                        <Link
                                          to="/admin"
                                          className="dropdown-item d-flex align-items-center px-3 py-2"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Dashboard
                                        </Link>
                                      </>
                                    )}
                                    {userdatastate.role === "owner" && (
                                      <>
                                        <Link
                                          to="/profile"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Profile
                                        </Link>
                                        <Link
                                          to="/pet-profiles"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Pet Profiles
                                        </Link>
                                        <Link
                                          to="/adoptable"
                                          className="dropdown-item d-flex align-items-center px-3 py-2"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Adopt Pets
                                        </Link>
                                        <Link
                                          to="/pet-care"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Care Options
                                        </Link>
                                        <Link
                                          to="/appointments"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Appointment Booking
                                        </Link>
                                      </>
                                    )}
                                    {userdatastate.role === "vet" && (
                                      <>
                                        <Link
                                          to="/profile"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Profile
                                        </Link>
                                        <Link
                                          to="/pet-medical-history"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Pet Medical History
                                        </Link>
                                        <Link
                                          to="/manage-appointments"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Manage Appointments
                                        </Link>
                                      </>
                                    )}
                                    {userdatastate.role === "shelter" && (
                                      <>
                                        <Link
                                          to="/profile"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Profile
                                        </Link>
                                        <Link
                                          to="/adoptable"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          List Adoptable
                                        </Link>
                                        <Link
                                          to="/pet-care-status"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Pet Care Status
                                        </Link>
                                        <Link
                                          to="/adopter-requests"
                                          className="dropdown-item d-flex align-items-center py-2 px-3"
                                          style={{
                                            color: "#333",
                                            textDecoration: "none",
                                            fontSize: "14px",
                                          }}
                                        >
                                          Adopter Requests
                                        </Link>
                                      </>
                                    )}

                                    {/* Common options */}
                                    <button
                                      className="dropdown-item d-flex align-items-center px-3 py-2"
                                      onClick={handleLogout}
                                      style={{
                                        color: "#dc3545",
                                        textDecoration: "none",
                                        fontSize: "14px",
                                        background: "none",
                                        border: "none",
                                        textAlign: "left",
                                        width: "100%",
                                      }}
                                    >
                                      <i
                                        className="fas fa-sign-out-alt me-2"
                                        style={{ fontSize: "16px" }}
                                      ></i>{" "}
                                      Logout
                                    </button>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                to="/login"
                                className="btn"
                                style={{
                                  backgroundColor: "#0056b3",
                                  color: "white",
                                }}
                              >
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
