import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../services/BaseUrl";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // owner ka data localStorage me save hai
  const userData = JSON.parse(localStorage.getItem("userdata"));

  useEffect(() => {
  const fetchAppointments = async () => {
    try {
      const res = await axiosInstance.get("/appointment/owner"); // ✅ fixed
      setAppointments(res.data);
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
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-gray-600">Loading appointments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-3">Pet</th>
                <th className="px-4 py-3">Vet</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Reason</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr
                  key={appt._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-semibold">{appt.petId?.name}</p>
                      <p className="text-xs text-gray-500">
                        {appt.petId?.species} ({appt.petId?.breed})
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-semibold">{appt.vetId?.name}</p>
                      <p className="text-xs text-gray-500">
                        {appt.vetId?.specialization}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(appt.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">{appt.time}</td>
                  <td className="px-4 py-3">
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
                  <td className="px-4 py-3">{appt.reason}</td>
                  <td className="px-4 py-3">{appt.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Appointments;
