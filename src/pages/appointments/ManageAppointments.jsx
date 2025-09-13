import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);
  const navigate = useNavigate()

  // Fetch appointments for vet
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axiosInstance.get("/appointment/user_vet");
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
  }, []);

  // Handle status update
 

  if (loading) {
    return (
      <Layout
        breadcrumbTitle="My Appointments"
        breadcrumbSubtitle="View your scheduled appointments"
      >
        <section className="contact__area">
          <div className="container text-center py-5">
            <p className="text-gray-600">Loading appointments...</p>
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
          <div className="container text-center py-5">
            <p className="text-danger fw-bold">{error}</p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout
      breadcrumbTitle="My Appointments"
      breadcrumbSubtitle="View your scheduled appointments"
    >
      <section className="contact__area py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold mb-2">My Appointments</h2>
            <p className="text-gray-600">
              Overview of your upcoming and past appointments
            </p>
          </div>

          {appointments.length === 0 ? (
            <p className="text-center text-gray-500">No appointments found.</p>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
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
                    <th className="px-4 py-3 text-center">Update</th>
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
                        </div>
                      </td>

                      <td className="px-4 py-3 text-center">
                        <div className="flex flex-col items-center">
                          <p className="font-semibold items-center">{appt.ownerId?.name}</p>
                          <p className="text-xs text-gray-500">
                            {appt.ownerIdemail}
                          </p>
                        </div>
                      </td>

                      <td className="px-4 py-3 text-center">
                        {new Date(appt.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-center">{appt.time}</td>
                      <td className="px-4 py-3 text-center">{appt.status}</td>

                      {/* Status with dropdown */}
                      

                      <td className="px-4 py-3 text-center">{appt.reason}</td>
                      <td className="px-4 py-3 text-center">{appt.notes}</td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() =>
                            navigate(`/appointment/${appt._id}`)
                          }
                          className="text-white btn rounded-md hover:bg-indigo-700"
                        >
                          Update
                        </button>
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

export default ManageAppointments;
