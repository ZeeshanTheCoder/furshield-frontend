import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../services/BaseUrl";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../layouts/Layout";

const PetMedicalHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axiosInstance.get("/appointment/vet");
        setAppointments(res.data);
        console.log("appointment data", res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load appointments. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return (
      <Layout
        breadcrumbTitle="Pet Medical History"
        breadcrumbSubtitle="View your Medical History"
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
        breadcrumbTitle="Pet Medical History"
        breadcrumbSubtitle="View your Medical History"
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
    <Layout
      breadcrumbTitle="Pet Medical History"
      breadcrumbSubtitle="View your Medical History"
    >
      <section className="contact__area py-8">
        <div className="container mx-auto px-4">
          {/* Header styled like your Booking form */}
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold mb-2">Pet Medical History</h2>
            <p className="text-gray-600">
              Overview of your upcoming and past appointments
            </p>
          </div>

          {appointments.length === 0 ? (
            <p className="text-center text-gray-500">
              No Medical History found.
            </p>
          ) : (
            <div className="overflow-x-auto d-flex justify-content-center bg-white rounded-lg shadow-md border border-gray-200">
              <table className="w-full min-w-[600px] text-sm text-left">
                <thead className="bg-indigo-600 text-black">
                  <tr>
                    <th className="px-4 py-3 text-center">Pet</th>
                    <th className="px-4 py-3 text-center">Owner</th>
                    <th className="px-4 py-3 text-center">Date</th>
                    <th className="px-4 py-3 text-center">Time</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-center">Reason</th>
                    <th className="px-4 py-3 text-center">Notes</th>
                    <th className="px-4 py-3 text-center">View Logs</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appt) => (
                    <tr
                      key={appt._id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      {/* Pet Info */}
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center">
                          <p className="font-semibold">{appt.petId?.name}</p>
                          <p className="text-xs text-gray-500">
                            {appt.petId?.species} ({appt.petId?.breed})
                          </p>
                        </div>
                      </td>

                      {/* Owner Info */}
                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center">
                          <p className="font-semibold">{appt.ownerId?.name}</p>
                        </div>
                      </td>

                      {/* Appointment Date */}
                      <td className="px-4 py-3 text-center">
                        {new Date(appt.date).toLocaleDateString()}
                      </td>

                      {/* Appointment Time */}
                      <td className="px-4 py-3 text-center">{appt.time}</td>

                      {/* Status with color */}
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            appt.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : appt.status === "approved"
                              ? "bg-green-100 text-green-700"
                              : appt.status === "rescheduled"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {appt.status}
                        </span>
                      </td>

                      {/* Reason */}
                      <td className="px-4 py-3 text-center">{appt.reason}</td>

                      {/* Notes */}
                      <td className="px-4 py-3 text-center">{appt.notes}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => {
                            // save petId to localStorage
                            localStorage.setItem(
                              "selectedPetId",
                              appt.petId?._id
                            );

                            localStorage.setItem(
                              "selectedAppointmentId",
                              appt._id
                            );

                            // navigate to treatment logs
                            navigate(`/treatment/pet/${appt.petId?._id}`);
                          }}
                          className="btn btn-primary w-100 rounded-pill py-3"
                        >
                          View Logs
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="d-flex justify-content-center"></div>
        </div>
      </section>
    </Layout>
  );
};

export default PetMedicalHistory;
