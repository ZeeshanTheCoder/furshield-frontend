import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { LuUsersRound } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { TbBrandProducthunt } from "react-icons/tb";
import { ProductContext } from '../../Context/ProductProvider';
import { BASE_URL } from '../../services/BaseUrl';

const URL = BASE_URL;

const DashboardPage = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const { products } = useContext(ProductContext);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const res = await axios.get(`${URL}/user/`);
        setTotalUsers(res.data.users.length);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUserCount();
  }, []);

  const stats = [
    { label: 'Total Users', value: `${totalUsers}`, icon: <LuUsersRound /> },
    { label: 'Total Pets', value: '892', icon: <MdOutlinePets /> },
    { label: 'Active Appointments', value: '47', icon: '📅' },
    { label: 'Total Products', value: products.length, icon: <TbBrandProducthunt /> },
  ];

  return (
    <div className="container-fluid p-3 p-sm-4 p-md-5">
      <h1 className="h3 h4-sm fw-bold text-dark mb-4">Welcome to FurShield Dashboard</h1>

      {/* Stats Grid */}
      <div className="row g-3 g-sm-4 mb-5">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="bg-white p-3 p-sm-4 rounded shadow-sm d-flex align-items-center h-100">
              <div className="fs-2 me-3">{stat.icon}</div>
              <div>
                <p className="text-muted small mb-1">{stat.label}</p>
                <p className="h4 fw-bold mb-0">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-3 p-sm-4 rounded shadow-sm">
        <h2 className="h5 fw-semibold mb-3">Quick Actions</h2>
        <div className="row g-3">
          <div className="col-12 col-sm-6 col-lg-3">
            <button className="p-3 border rounded w-100 text-start bg-hover-light">
              <div className="fs-2 mb-2">➕</div>
              <div className="fw-medium">Add New User</div>
            </button>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <button className="p-3 border rounded w-100 text-start bg-hover-light">
              <div className="fs-2 mb-2">🐶</div>
              <div className="fw-medium">Add New Pet</div>
            </button>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <button className="p-3 border rounded w-100 text-start bg-hover-light">
              <div className="fs-2 mb-2">📅</div>
              <div className="fw-medium">Schedule Appointment</div>
            </button>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <button className="p-3 border rounded w-100 text-start bg-hover-light">
              <div className="fs-2 mb-2">🏠</div>
              <div className="fw-medium">New Adoption Listing</div>
            </button>
          </div>
        </div>
      </div>

      {/* Custom styles for hover effects */}
      <style>{`
        .bg-hover-light:hover {
          background-color: #f8f9fa !important;
        }
        @media (min-width: 576px) {
          .h4-sm {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;