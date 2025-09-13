import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";

const UpdateAppointment = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await axiosInstance.get(
          `/appointment/vet/${appointmentId}`
        );
        setAppointment(res.data);

        // pre-fill values
        setDate(
          res.data.date
            ? new Date(res.data.date).toISOString().split("T")[0]
            : ""
        );
        setTime(res.data.time || "");
        setStatus(res.data.status || "pending");
      } catch (err) {
        console.error("Error fetching appointment:", err);
      }
    };
    fetchAppointment();
  }, [appointmentId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/appointment/vet/${appointmentId}`, {
        date,
        time,
        status,
      });
      alert("Appointment updated successfully!");
      navigate("/manage-appointments");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update appointment");
    }
  };

  if (!appointment) return <p>Loading...</p>;

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
              />
            </div>

            {/* Status Dropdown */}
            <div className="mb-2">
              <label className="block mb-1 font-medium">Status:</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-pill border rounded-md p-2"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rescheduled">Rescheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn mt-2 rounded-md w-auto"
            >
              Update Appointment
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default UpdateAppointment;
