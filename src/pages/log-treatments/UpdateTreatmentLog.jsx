import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../services/BaseUrl";
import { Layout } from "../../layouts/Layout";
import { toast } from "react-toastify";

const UpdateTreatmentLog = () => {
  const { treatmentId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    symptoms: "",
    diagnosis: "",
    prescription: "",
    followUpDate: "",
    labResults: [],
  });

  const [errors, setErrors] = useState({
    symptoms: "",
    diagnosis: "",
    prescription: "",
    followUpDate: "",
    labResults: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "symptoms":
        if (!value.trim()) error = "Symptoms are required";
        break;
      case "diagnosis":
        if (!value.trim()) error = "Diagnosis is required";
        break;
      case "prescription":
        if (!value.trim()) error = "Prescription is required";
        break;
      case "followUpDate":
        // You can add date validation if needed
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate the field as user types
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, labResults: [...e.target.files] }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate all required fields
    newErrors.symptoms = validateField("symptoms", formData.symptoms);
    newErrors.diagnosis = validateField("diagnosis", formData.diagnosis);
    newErrors.prescription = validateField("prescription", formData.prescription);
    
    setErrors(newErrors);
    
    // Check if any errors exist
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    
    if (!validateForm()) {
      setSubmitError("Please fill in all required fields");
      return;
    }
    
    setLoading(true);

    try {
      const symptomsArr = formData.symptoms
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      const payload = {
        symptoms: symptomsArr,
        diagnosis: formData.diagnosis,
        prescription: formData.prescription,
        followUpDate: formData.followUpDate || null,
        labResults: [], // yahan tum upload ka logic dal sakte ho
      };

      await axiosInstance.put(`/treatment/${treatmentId}`, payload);

      toast("Treatment log updated successfully!");
      navigate(-1);
    } catch (err) {
      setSubmitError(err.response?.data?.message || "Failed to update treatment log");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout breadcrumbTitle="Update Treatment Log" breadcrumbSubtitle="Edit your log">
      <div className="contact__form-wrap">
        <h2 className="title mb-5 text-center">Update Treatment Log</h2>

        {submitError && <p className="text-danger mb-4">{submitError}</p>}

        <form onSubmit={handleSubmit} className="contact__form" noValidate>
          <div className="form-grp mb-3">
            <input
              type="text"
              name="symptoms"
              placeholder="Symptoms (comma separated) *"
              value={formData.symptoms}
              onChange={handleChange}
              className={`form-control p-3 rounded-pill ${errors.symptoms ? 'is-invalid' : ''}`}
            />
            {errors.symptoms && <div className="invalid-feedback d-block mt-1">{errors.symptoms}</div>}
          </div>

          <div className="form-grp mb-3">
            <textarea
              name="diagnosis"
              placeholder="Diagnosis *"
              required
              value={formData.diagnosis}
              onChange={handleChange}
              className={`form-control p-3 rounded ${errors.diagnosis ? 'is-invalid' : ''}`}
              rows={3}
            />
            {errors.diagnosis && <div className="invalid-feedback d-block mt-1">{errors.diagnosis}</div>}
          </div>

          <div className="form-grp mb-3">
            <textarea
              name="prescription"
              placeholder="Prescription *"
              value={formData.prescription}
              onChange={handleChange}
              className={`form-control p-3 rounded ${errors.prescription ? 'is-invalid' : ''}`}
              rows={3}
            />
            {errors.prescription && <div className="invalid-feedback d-block mt-1">{errors.prescription}</div>}
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
            className="btn btn-primary w-auto rounded-pill py-3"
          >
            {loading ? "Updating..." : "Update Treatment Log"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UpdateTreatmentLog;