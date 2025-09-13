import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";

const UpdateAppointment = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await axiosInstance.get(`/appointment/${appointmentId}`);
        setAppointment(res.data);
        setStatus(res.data.status);
        setNotes(res.data.notes || "");
        setReason(res.data.reason || "");
      } catch (err) {
        console.error("Error fetching appointment:", err);
      }
    };
    fetchAppointment();
  }, [appointmentId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/appointment/${appointmentId}`, {
        status,
        notes,
        reason,
      });
      alert("Appointment updated successfully!");
      navigate("/appointments"); // back to ManageAppointments
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update appointment");
    }
  };

  if (!appointment) return <p>Loading...</p>;

  return (
    <Layout breadcrumbTitle="Update Appointment" breadcrumbSubtitle="Modify appointment details">
      <section className="contact__area py-8">
        <div className="container mx-auto px-4 max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Update Appointment</h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Status Dropdown */}
            <div>
              <label className="block mb-1 font-medium">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border rounded-md p-2"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rescheduled">Rescheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Reason */}
            <div>
              <label className="block mb-1 font-medium">Reason</label>
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full border rounded-md p-2"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block mb-1 font-medium">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border rounded-md p-2"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
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
