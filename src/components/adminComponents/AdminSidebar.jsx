import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { LuUsersRound } from "react-icons/lu";
import { TbBrandProducthunt } from "react-icons/tb";
import { axiosInstance } from "../../services/BaseUrl";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/MainContext";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Dashboard", href: "/admin", icon: <MdDashboard /> },
    { name: "Manage Users", href: "/admin/users", icon: <LuUsersRound /> },
    {
      name: "Manage Products",
      href: "/admin/products",
      icon: <TbBrandProducthunt />,
    },
  ];

  const { setuserdata } = useContext(AppContext); // 👈 add this

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.delete("/auth/logout", {
        withCredentials: true,
      });
      if (response.data.isLogout) {
        localStorage.removeItem("userdata");
        setuserdata(null); // 👈 clear global context
        navigate("/", { replace: true });
      } else {
        toast("Logout failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error.response?.data || error.message);
      toast("Something went wrong during logout.");
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row vh-100 bg-light">
      {/* forMobileHeader */}
      <div className="d-md-none p-3 d-flex justify-content-between align-items-center bg-primary text-white">
        <h1 className="h5 fw-bold mb-0">FurShield</h1>
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="btn p-2 rounded bg-transparent border-0 text-white fs-4"
          style={{ "--bs-bg-opacity": 0.7 }}
        >
          {isMobileSidebarOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      {isMobileSidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-40 z-40 d-md-none"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`position-fixed top-0 start-0 h-100 z-50 d-md-block
          ${isMobileSidebarOpen ? "" : "translate-x-negative"}
          ${isSidebarOpen ? "sidebar-expanded" : "sidebar-collapsed"}
          bg-gradient`}
        style={{
          transform: isMobileSidebarOpen
            ? "translateX(0)"
            : "translateX(-100%)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* Sidebar header */}
        <div className="p-3 d-flex align-items-center justify-content-between border-bottom border-primary-subtle">
          <h1 className="h5 fw-bold mb-0 text-white">
            {isSidebarOpen ? "FurShield" : "FS"}
          </h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="d-none d-md-block btn p-2 rounded bg-transparent border-0 text-white fs-5"
            style={{ "--bs-bg-opacity": 0.7 }}
          >
            {isSidebarOpen ? "«" : "»"}
          </button>
        </div>

        {/* Navigation links */}
        <nav className="mt-4 flex-grow-1">
          <ul className="list-unstyled mb-0">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`d-flex align-items-center px-3 py-2 text-decoration-none text-white
                    ${
                      location.pathname === item.href
                        ? "bg-primary bg-opacity-75"
                        : "hover-bg"
                    }`}
                  onClick={() => setIsMobileSidebarOpen(false)}
                  style={{ transition: "background-color 0.2s" }}
                >
                  <span className="fs-5 me-3">{item.icon}</span>
                  {isSidebarOpen && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* lg-screen Header */}
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <header className="bg-white shadow-sm border-bottom">
          <div className="d-flex align-items-center justify-content-between px-3 px-md-4 py-2">
            <h2 className="h5 mb-0 fw-semibold text-dark">Admin</h2>
            <div className="d-flex align-items-center gap-2 gap-md-3">
              <button
                className="btn btn-outline-danger btn-sm w-100"
                onClick={handleLogout}
                style={{ whiteSpace: "nowrap" }}
              >
                <i className="fas fa-sign-out-alt me-1"></i> Logout
              </button>
            </div>
          </div>
        </header>

        {/* mainContent */}
        <main className="flex-grow-1 overflow-y-auto p-3 p-md-4 p-lg-5 bg-light">
          <Outlet />
        </main>
      </div>

      {/* Add custom styles for Bootstrap */}
      <style>{`
        .translate-x-negative {
          transform: translateX(-100%);
        }
        .bg-gradient {
          background: linear-gradient(to bottom, #1e40af, #1e3a8a) !important;
        }
        .hover-bg:hover {
          background-color: rgba(255, 255, 255, 0.15) !important;
        }
        .sidebar-expanded {
          width: 16rem !important;
        }
        .sidebar-collapsed {
          width: 4rem !important;
        }
        @media (min-width: 768px) {
          .d-md-block {
            display: block !important;
            transform: translateX(0) !important;
            position: relative !important;
          }
          .translate-x-negative {
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminSidebar;
