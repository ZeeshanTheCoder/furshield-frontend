import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";

const TreatmentLogForm = ({ treatmentId = null }) => {
  const { appointmentId: paramAppointmentId } = useParams();
  const storedAppointmentId = localStorage.getItem("selectedAppointmentId");

  const appointmentId = paramAppointmentId || storedAppointmentId;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    symptoms: "",
    diagnosis: "",
    prescription: "",
    followUpDate: "",
    labResults: [], // URLs or File objects
  });

  const [loading, setLoading] = useState(!!treatmentId);
  const [error, setError] = useState("");

  // Fetch existing treatment log if editing
  useEffect(() => {
    if (treatmentId) {
      const fetchLog = async () => {
        try {
          const res = await axiosInstance.get(`/treatment/${treatmentId}`);
          const log = res.data;

          setFormData({
            symptoms: (log.symptoms || []).join(", "),
            diagnosis: log.diagnosis || "",
            prescription: log.prescription || "",
            followUpDate: log.followUpDate
              ? log.followUpDate.split("T")[0]
              : "",
            labResults: log.labResults || [],
          });
        } catch {
          setError("Failed to load treatment log");
        } finally {
          setLoading(false);
        }
      };
      fetchLog();
    }
  }, [treatmentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    // For simplicity, replacing all lab results with selected files
    setFormData((prev) => ({ ...prev, labResults: [...e.target.files] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const symptomsArr = formData.symptoms
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      // Prepare payload
      const payload = {
        symptoms: symptomsArr,
        diagnosis: formData.diagnosis,
        prescription: formData.prescription,
        followUpDate: formData.followUpDate || null,
        labResults: [], // Handle file upload logic here if you want
      };

      if (treatmentId) {
        // Update existing log
        await axiosInstance.put(`/treatment/${treatmentId}`, payload);
      } else {
        // Create new log — requires appointmentId
        if (!appointmentId) {
          setError("Appointment ID required to create log");
          setLoading(false);
          return;
        }
        await axiosInstance.post("/treatment", { ...payload, appointmentId });
      }

      navigate(-1);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save treatment log");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      breadcrumbTitle="Pet Medical History"
      breadcrumbSubtitle="View your Medical History"
    >
      <div className="contact__form-wrap">
        <h2 className="title mb-5 text-center">
          {treatmentId ? "Edit Treatment Log" : "Add Treatment Log"}
        </h2>

        {error && <p className="text-danger mb-4">{error}</p>}

        {loading ? (
          <p className="text-center text-muted">Loading...</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact__form" noValidate>
            <div className="form-grp mb-3">
              <input
                type="text"
                name="symptoms"
                placeholder="Symptoms (comma separated)"
                value={formData.symptoms}
                onChange={handleChange}
                className="form-control p-3 rounded-pill"
              />
            </div>

            <div className="form-grp mb-3">
              <textarea
                name="diagnosis"
                placeholder="Diagnosis *"
                required
                value={formData.diagnosis}
                onChange={handleChange}
                className="form-control p-3 rounded"
                rows={3}
              />
            </div>

            <div className="form-grp mb-3">
              <textarea
                name="prescription"
                placeholder="Prescription"
                value={formData.prescription}
                onChange={handleChange}
                className="form-control p-3 rounded"
                rows={3}
              />
            </div>

            <div className="form-grp mb-3">
              <input
                type="date"
                name="followUpDate"
                value={formData.followUpDate}
                onChange={handleChange}
                className="form-control p-3 rounded-pill"
              />
            </div>

            <div className="form-grp mb-4">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="form-control"
              />
              {formData.labResults.length > 0 &&
                typeof formData.labResults[0] === "string" && (
                  <ul className="mt-2 list-unstyled">
                    {formData.labResults.map((url, i) => (
                      <li key={i}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 underline"
                        >
                          View Lab File {i + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-100 rounded-pill py-3"
            >
              {loading
                ? treatmentId
                  ? "Updating..."
                  : "Saving..."
                : treatmentId
                ? "Update Treatment Log"
                : "Add Treatment Log"}
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default TreatmentLogForm;
