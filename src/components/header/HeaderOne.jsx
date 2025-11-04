import React, { useContext, useEffect, useState } from "react";
import { HeaderTop } from "./HeaderTop";
import LOGO from "../../assets/img/logo/logo.png";
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
import { toast } from "react-toastify";
import { useCart } from "../../Context/CartContext"; //   Added
import { HeaderSearch } from "./HeaderSearch"; //   NEW IMPORT

export const HeaderOne = () => {
  const { showSearch, toggleSearch } = useSearch();
  const { showCanvas, toggleCanvas } = useOffCanvas();
  const { setuserdata } = useContext(AppContext);
  const { cart, fetchCart } = useCart();
  const [userdatastate, setuserdatastate] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.delete("/auth/logout", {
        withCredentials: true,
      });

      if (response.data.isLogout) {
        localStorage.removeItem("userdata");
        setuserdata(null);
        setuserdatastate(null);
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

  useMobileMenu();

  useEffect(() => {
    const userget = async () => {
      try {
        const res = await axiosInstance.get("/user/getuser");
        if (res.status === 200) {
          const user = res.data.user;
          setuserdatastate(user);
          setuserdata(user);

          if (user?._id) {
            await fetchCart(user._id);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    userget();
  }, []);

  const cartItemCount = cart?.items?.length > 0 ? cart.items.length : 0;

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
                          <Link
                            to={
                              userdatastate?._id
                                ? `/cart/${userdatastate._id}`
                                : "/login"
                            }
                          >
                            <i className="flaticon-shopping-bag"></i>
                            {userdatastate?._id && (
                              <span>{cartItemCount}</span>
                            )}
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
                              <rect width="9" height="2" rx="1" fill="currentcolor" />
                              <rect x="11" width="15" height="2" rx="1" fill="currentcolor" />
                              <rect y="14" width="26" height="2" rx="1" fill="currentcolor" />
                              <rect y="7" width="16" height="2" rx="1" fill="currentcolor" />
                              <rect x="17" y="7" width="9" height="2" rx="1" fill="currentcolor" />
                            </svg>
                          </a>
                        </li>

                        <li className="header-btn" style={{ position: "relative" }}>
                          {userdatastate?.name ? (
                            <div
                              className="d-inline-block"
                              onMouseEnter={() => setShowLogout(true)}
                              onMouseLeave={() => setShowLogout(false)}
                              style={{ position: "relative" }}
                            >
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
                                  {userdatastate.role === "admin" && (
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
                                  )}
                                  {userdatastate.role === "owner" && (
                                    <>
                                      <Link
                                        to="/profile"
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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
                                        className="dropdown-item d-flex align-items-center px-3 py-2"
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

                    <div className="mobile-nav-toggler">
                      <i className="flaticon-layout"></i>
                    </div>
                  </nav>
                </div>

                <HeaderMobileMenu />
              </div>
            </div>
          </div>
        </div>

        {/*   ADDED: Search overlay — exactly like HeaderThree */}
        <HeaderSearch active={showSearch} toggleSearch={toggleSearch} />

        {/* off canvas */}
        <HeaderOffcanvas active={showCanvas} toggleCanvas={toggleCanvas} />
      </header>
    </>
  );
};