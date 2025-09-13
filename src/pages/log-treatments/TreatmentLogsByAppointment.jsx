import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";

const TreatmentLogsByAppointment = () => {
  const { appointmentId } = useParams();

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axiosInstance.get(`/treatment/appointment/${appointmentId}`);
        setLogs(res.data);
      } catch {
        setError("Failed to fetch treatment logs");
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, [appointmentId]);

  return (
    <Layout breadcrumbTitle="Treatment Logs" breadcrumbSubtitle="By Appointment">
      <section className="contact__area">
        <div className="container">
          {error && <p className="text-danger">{error}</p>}
          {loading ? (
            <p className="text-center text-muted">Loading...</p>
          ) : logs.length === 0 ? (
            <p>No treatment logs found for this appointment.</p>
          ) : (
            logs.map((log) => (
              <div key={log._id} className="mb-5 p-4 border rounded shadow-sm">
                <h4>Symptoms</h4>
                <p>{log.symptoms?.join(", ") || "N/A"}</p>

                <h4>Diagnosis</h4>
                <p>{log.diagnosis || "N/A"}</p>

                <h4>Prescription</h4>
                <p>{log.prescription || "N/A"}</p>

                <h4>Follow-Up Date</h4>
                <p>{log.followUpDate ? new Date(log.followUpDate).toLocaleDateString() : "N/A"}</p>

                <h4>Lab Results</h4>
                {log.labResults && log.labResults.length > 0 ? (
                  <ul>
                    {log.labResults.map((url, idx) => (
                      <li key={idx}>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">
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

export default TreatmentLogsByAppointment;
