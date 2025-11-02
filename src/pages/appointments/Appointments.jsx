import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../services/BaseUrl";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../layouts/Layout";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axiosInstance.get("/appointment/owner");
        setAppointments(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load appointments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [navigate]);

  if (loading) {
    return (
      <Layout
        breadcrumbTitle="My Appointments"
        breadcrumbSubtitle="View your scheduled appointments"
      >
        <section className="contact__area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact__form-wrap text-center py-5">
                  <p className="text-gray-600">Loading appointments...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout
        breadcrumbTitle="My Appointments"
        breadcrumbSubtitle="View your scheduled appointments"
      >
        <section className="contact__area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="contact__form-wrap text-center py-5">
                  <p className="text-danger" style={{ fontWeight: "500" }}>
                    {error}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="contact__area py-8">
        <div className="container mx-auto px-4">
          {/* Header with heading and button aligned */}
          <div className="mb-6 d-flex my-4 flex-column flex-md-row justify-content-between align-items-md-center gap-3">
            <div className="flex flex-column justify-content-center align-items-center">
              <h2 className="text-3xl  font-bold mb-1 mb-md-0">
                My Appointments
              </h2>
              <p className="text-gray-600 mt-1 mt-md-0">
                Overview of your upcoming and past appointments
              </p>
            </div>
            <Link
              to="/appointment-booking"
              className="btn"
              style={{ whiteSpace: "nowrap" }}
            >
              Book New Appointment
            </Link>
          </div>
          {appointments.length === 0 ? (
            <p className="text-center text-gray-500">No appointments found.</p>
          ) : (
            <div className="overflow-x-auto d-flex justify-content-center bg-white rounded-lg shadow-md border border-gray-200">
              <table className="w-full min-w-[600px] text-sm text-left">
                <thead className="bg-indigo-600 text-black">
                  <tr>
                    <th className="px-4 py-3 text-center">Pet</th>
                    <th className="px-4 py-3 text-center">Vet</th>
                    <th className="px-4 py-3 text-center">Date</th>
                    <th className="px-4 py-3 text-center">Time</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-center">Reason</th>
                    <th className="px-4 py-3 text-center">Notes</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                    {/* 👈 New header */}
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt) => (
                    <tr
                      key={appt._id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center">
                          <p className="font-semibold">{appt.petId?.name}</p>
                          <p className="text-xs text-gray-500">
                            {appt.petId?.species} ({appt.petId?.breed})
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center">
                          <p className="font-semibold">
                            {appt.vetId?.userId?.name || "Unknown"}
                          </p>
                          <p className="text-xs text-gray-500">
                            {appt.vetId?.specialization}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {new Date(appt.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-center">{appt.time}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            appt.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : appt.status === "approved"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {appt.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">{appt.reason}</td>
                      <td className="px-4 py-3 text-center">{appt.notes}</td>
                      {/* 👇 New Actions Cell */}
                      <td className="px-4 py-3 text-center">
                        {["pending", "rescheduled"].includes(appt.status) ? (
                          <Link
                            to={`/appointment/${appt._id}`}
                            className="btn btn-sm"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            Update
                          </Link>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-sm"
                            disabled
                            style={{
                              whiteSpace: "nowrap",
                              opacity: 0.6,
                              cursor: "not-allowed",
                              color: "#fff",
                              backgroundColor: "#6c757d",
                              borderColor: "#6c757d",
                            }}
                          >
                            Update
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Appointments;
