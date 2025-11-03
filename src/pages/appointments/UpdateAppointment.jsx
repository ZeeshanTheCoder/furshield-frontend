import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";
import { toast } from "react-toastify";
import { getTodayDate } from "../../utils/helperFunction";

const UpdateAppointment = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  // Get user role from localStorage
  const user = JSON.parse(localStorage.getItem("userdata"));
  const userRole = user?.role; // e.g., 'owner' or 'vet'

  // Compute min date conditionally
  const minDate =
    userRole === "vet" &&
    ["approved", "cancelled", "completed"].includes(status)
      ? "" // no restriction
      : getTodayDate(); // restrict to today or future

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await axiosInstance.get(
          `/appointment/vet/${appointmentId}`
        );
        setAppointment(res.data);

        setDate(
          res.data.date
            ? new Date(res.data.date).toISOString().split("T")[0]
            : ""
        );
        setTime(res.data.time || "");
        setStatus(res.data.status || "pending");
      } catch (err) {
        console.error("Error fetching appointment:", err);
        toast("Failed to load appointment.");
        navigate(-1); // go back if error
      }
    };
    fetchAppointment();
  }, [appointmentId, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const payload = { date, time };

      // Include status if user is vet or owner (both can update status within limits)
      if (userRole === "vet" || userRole === "owner") {
        payload.status = status;
      }

      await axiosInstance.put(`/appointment/vet/${appointmentId}`, payload);
      toast("Appointment updated successfully!");
      if (userRole === "owner") {
        navigate("/appointments");
      } else {
        navigate("/manage-appointments");
      }
    } catch (err) {
      console.error("Update failed:", err);
      toast("Failed to update appointment.");
    }
  };

  if (!appointment) return <p>Loading...</p>;

  // Determine status options based on role
  const getStatusOptions = () => {
    if (userRole === "vet") {
      return [
        { value: "pending", label: "Pending" },
        { value: "approved", label: "Approved" },
        { value: "rescheduled", label: "Rescheduled" },
        { value: "completed", label: "Completed" },
        { value: "cancelled", label: "Cancelled" },
      ];
    } else if (userRole === "owner") {
      return [
        { value: "pending", label: "Pending" },
        { value: "cancelled", label: "Cancelled" },
      ];
    }
    return [];
  };

  const statusOptions = getStatusOptions();

  return (
    <Layout
      breadcrumbTitle="Update Appointment"
      breadcrumbSubtitle="Modify appointment details"
    >
      <section className="contact__area py-8">
        <div className="container mx-auto px-4 max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Update Appointment</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Date Input */}
            <div className="mb-2">
              <label className="block mb-1 font-medium">Date:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-pill border rounded-md p-2"
                min={minDate}
                required
              />
            </div>

            {/* Time Input */}
            <div className="mb-2">
              <label className="block mb-1 font-medium">Time:</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full rounded-pill border rounded-md p-2"
                required
              />
            </div>

            {/* Status Dropdown — for vet or owner (with limited options for owner) */}
            {(userRole === "vet" || userRole === "owner") && (
              <div className="mb-2">
                <label className="block mb-1 font-medium">Status:</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-pill border rounded-md p-2"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button type="submit" className="btn mt-2 rounded-md w-auto">
              Update Appointment
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default UpdateAppointment;
