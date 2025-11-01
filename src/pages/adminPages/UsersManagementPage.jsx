import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import ConfirmationModal from "../../components/adminComponents/ConfirmationModal";
import { BASE_URL } from "../../services/BaseUrl";

const URL = BASE_URL;

const UsersManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ role: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${URL}/user/`);
      setUsers(Array.isArray(response.data.users) ? response.data.users : []);
      setError("");
      console.log("user data", response.data);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch users");
      toast.error("Failed to fetch users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const confirmDeleteUser = async () => {
    try {
      // Find the user object to get their email
      const userToDelete = users.find((user) => user._id === deleteUserId);
      if (!userToDelete) {
        toast.error("User not found");
        return;
      }

      // Send email in request body as expected by backend
      await axios.delete(`${URL}/user/userdelete`, {
        data: { email: userToDelete.email }, // axios uses 'data' for request body in DELETE
      });

      setUsers(users.filter((user) => user._id !== deleteUserId));
      toast.success("User deleted successfully");
    } catch (err) {
      console.error("Error deleting user:", err);
      toast.error("Failed to delete user");
    } finally {
      setShowModal(false);
      setDeleteUserId(null);
    }
  };

  // Filter users
  const filteredUsers = (users || []).filter((user) => {
    const matchesRole = filters.role ? user.role === filters.role : true;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="min-vh-100 bg-light p-3 p-md-4 p-lg-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4">
        <h1 className="h2 fw-bold text-dark mb-3 mb-sm-0">User Management</h1>
      </div>

      {/* Search + Filter */}
      <div className="bg-white p-3 rounded shadow-sm d-flex flex-column flex-md-row gap-3 mb-4">
        <div className="flex-grow-1">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="flex-grow-1">
          <select
            value={filters.role}
            onChange={(e) => setFilters({ ...filters, role: e.target.value })}
            className="form-select"
          >
            <option value="">All Roles</option>
            <option value="owner">Pet Owner</option>
            <option value="vet">Veterinarian</option>
            <option value="shelter">Animal Shelter</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <p className="text-center text-muted">Loading users...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <div className="bg-white shadow-sm rounded overflow-hidden">
          <div className="table-responsive">
            <table className="table table-striped mb-0">
              <thead className="table-light">
                <tr>
                  <th className="ps-4 py-3 text-left text-uppercase small fw-semibold text-secondary">
                    #
                  </th>
                  <th className="px-3 py-3 text-left text-uppercase small fw-semibold text-secondary">
                    Name
                  </th>
                  <th className="px-3 py-3 text-left text-uppercase small fw-semibold text-secondary">
                    Email
                  </th>
                  <th className="px-3 py-3 text-left text-uppercase small fw-semibold text-secondary">
                    Role
                  </th>
                  <th className="px-3 py-3 text-left text-uppercase small fw-semibold text-secondary">
                    Registered
                  </th>
                  <th className="pe-4 py-3 text-right text-uppercase small fw-semibold text-secondary">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user, index) => (
                    <tr key={user._id || index}>
                      <td className="ps-4 py-3 text-dark">{index + 1}</td>
                      <td className="px-3 py-3 fw-medium text-dark">
                        {user.name}
                      </td>
                      <td className="px-3 py-3 text-muted">{user.email}</td>
                      <td className="px-3 py-3">
                        <span
                          className={`badge 
                          ${
                            user.role === "owner"
                              ? "bg-success-subtle text-success"
                              : user.role === "vet"
                              ? "bg-primary-subtle text-primary"
                              : user.role === "shelter"
                              ? "bg-info-subtle text-info"
                              : "bg-secondary-subtle text-secondary"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-muted">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="pe-0 py-3 text-end">
                        <button
                          onClick={() => {
                            setDeleteUserId(user._id);
                            setShowModal(true);
                          }}
                          className="btn btn-link   text-danger text-decoration-none"
                          disabled={user.role === "admin"}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-4 py-4 text-center text-muted"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Reusable Modal Component */}
      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmDeleteUser}
      />
    </div>
  );
};

export default UsersManagementPage;
