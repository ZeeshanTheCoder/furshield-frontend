import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";

const TreatmentLogsByPet = () => {
  const { petId } = useParams();
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axiosInstance.get(`/appointments/pet/${petId}`);
        setAppointments(res.data);
      } catch {
        console.error("Failed to fetch appointments");
      }
    };
    fetchAppointments();
  }, [petId]);

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axiosInstance.get(`/treatment/pet/${petId}`);
        setLogs(res.data);
      } catch {
        setError("Failed to fetch treatment logs");
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, [petId]);

  return (
    <Layout breadcrumbTitle="Treatment History" breadcrumbSubtitle="By Pet">
      <section className="contact__area">
        <div className="container">
          {error && <p className="text-danger">{error}</p>}
          {loading ? (
            <p className="text-center text-muted">Loading...</p>
          ) : logs.length === 0 ? (
            <>
              <div className="d-flex justify-content-between">
                <p>No treatment logs found for this pet.</p>
                <button
                  onClick={() => {
                    // retrieve appointmentId from localStorage
                    const appointmentId = localStorage.getItem(
                      "selectedAppointmentId"
                    );

                    if (appointmentId) {
                      navigate(`/treatment/create/${appointmentId}`);
                    } else {
                      alert("No appointment found for this pet.");
                    }
                  }}
                  className="btn btn-primary w-auto rounded-pill py-3"
                >
                  Add Logs
                </button>
              </div>
            </>
          ) : (
            logs.map((log) => (
              <div key={log._id} className="mb-5 p-4 border rounded shadow-sm">
                <h5 className="mb-2">
                  Appointment Date:{" "}
                  {log.appointmentId?.date
                    ? new Date(log.appointmentId.date).toLocaleDateString()
                    : "N/A"}
                </h5>
              

                <h6>Symptoms:</h6>
                <p>{log.symptoms?.join(", ") || "N/A"}</p>

                <h6>Diagnosis:</h6>
                <p>{log.diagnosis || "N/A"}</p>

                <h6>Prescription:</h6>
                <p>{log.prescription || "N/A"}</p>

                <h6>Follow-Up Date:</h6>
                <p>
                  {log.followUpDate
                    ? new Date(log.followUpDate).toLocaleDateString()
                    : "N/A"}
                </p>

                <h6>Lab Results:</h6>
                {log.labResults && log.labResults.length > 0 ? (
                  <ul>
                    {log.labResults.map((url, idx) => (
                      <li key={idx}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 underline"
                        >
                          View Lab File {idx + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No lab results</p>
                )}

                <Link
                  to={`/treatment/edit/${log._id}`}
                  className="btn btn-outline-primary mt-3 rounded-pill"
                >
                  Edit Treatment Log
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TreatmentLogsByPet;
