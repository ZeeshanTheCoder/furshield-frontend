import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";
import rightArrow from "../../assets/img/icon/right_arrow.svg";
import { useParams, useNavigate } from "react-router-dom";

export const HealthRecords = () => {
  const { petId } = useParams(); // Get petId from URL: /health-records/:petId
  const navigate = useNavigate();

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Form state for Create/Edit
  const [formMode, setFormMode] = useState("create"); // "create" or "edit"
  const [currentRecord, setCurrentRecord] = useState({
    pet: petId,
    visitDate: "",
    diagnosis: "",
    treatment: "",
    notes: "",
    vaccinations: "",
    allergies: "",
    illnesses: "",
    insurance: "",
    documents: [], // For file uploads
  });
  const [fileUploads, setFileUploads] = useState([]); // To handle file input preview/upload

  // Fetch records on load
  useEffect(() => {
    if (!petId) {
      setMessage("Pet ID is required.");
      return;
    }
    fetchHealthRecords();
  }, [petId]);

  const fetchHealthRecords = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/health/gethealthrecord/${petId}`);
      setRecords(res.data.records || []);
    } catch (error) {
      setMessage("Failed to load health records.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFileUploads(Array.from(files));
      setCurrentRecord((prev) => ({
        ...prev,
        documents: Array.from(files),
      }));
    } else {
      setCurrentRecord((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsSuccess(false);

    try {
      // Use FormData to send files
      const formData = new FormData();
      for (const key in currentRecord) {
        if (key === "documents") {
          currentRecord.documents.forEach((file, idx) => {
            formData.append(`documents`, file);
          });
        } else {
          formData.append(key, currentRecord[key]);
        }
      }

      let result;
      if (formMode === "create") {
        result = await axiosInstance.post("/health/createhealthrecord", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        result = await axiosInstance.put(`/health/updatehealthrecord/${currentRecord._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      if (result.data.success || result.data.message === "Health record created successfully" || result.data.message === "Health record updated successfully") {
        setIsSuccess(true);
        setMessage(formMode === "create" ? "Record created!" : "Record updated!");
        fetchHealthRecords(); // Refresh list
        resetForm();
      } else {
        setMessage(result.data.message || "Operation failed.");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Network error.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (record) => {
    setCurrentRecord({
      ...record,
      pet: petId,
      visitDate: record.visitDate ? new Date(record.visitDate).toISOString().split("T")[0] : "",
      documents: [], // Reset file uploads
    });
    setFileUploads([]);
    setFormMode("edit");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setCurrentRecord({
      pet: petId,
      visitDate: "",
      diagnosis: "",
      treatment: "",
      notes: "",
      vaccinations: "",
      allergies: "",
      illnesses: "",
      insurance: "",
      documents: [],
    });
    setFileUploads([]);
    setFormMode("create");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Layout breadcrumbTitle="Health Records" breadcrumbSubtitle="Manage Pet Health">
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact__form-wrap">

                {/* Form Section */}
                <div className="mb-5">
                  <h2 className="title">
                    {formMode === "create" ? "Add New Health Record" : "Edit Health Record"}
                  </h2>
                  <form onSubmit={handleCreateOrUpdate} className="contact__form mt-4" encType="multipart/form-data">
                    <div className="row gutter-20">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <label>Visit Date</label>
                          <input
                            type="date"
                            name="visitDate"
                            required
                            value={currentRecord.visitDate}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-grp">
                          <label>Diagnosis</label>
                          <input
                            type="text"
                            name="diagnosis"
                            placeholder="e.g., Flea Infestation"
                            required
                            value={currentRecord.diagnosis}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-grp">
                          <label>Treatment</label>
                          <input
                            type="text"
                            name="treatment"
                            placeholder="e.g., Medication, Diet Change"
                            required
                            value={currentRecord.treatment}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* Additional fields */}
                      <div className="col-md-6">
                        <div className="form-grp">
                          <label>Vaccinations</label>
                          <input
                            type="text"
                            name="vaccinations"
                            placeholder="List vaccinations"
                            value={currentRecord.vaccinations}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-grp">
                          <label>Allergies</label>
                          <input
                            type="text"
                            name="allergies"
                            placeholder="Allergies"
                            value={currentRecord.allergies}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-grp">
                          <label>Illnesses</label>
                          <input
                            type="text"
                            name="illnesses"
                            placeholder="Illnesses"
                            value={currentRecord.illnesses}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-grp">
                          <label>Insurance</label>
                          <input
                            type="text"
                            name="insurance"
                            placeholder="Insurance info"
                            value={currentRecord.insurance}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* Document Upload */}
                      <div className="col-md-12">
                        <div className="form-grp">
                          <label>Documents (Upload files)</label>
                          <input
                            type="file"
                            multiple
                            accept="image/*,application/pdf"
                            name="documents"
                            onChange={handleFormChange}
                            className="form-control"
                          />
                          {fileUploads.length > 0 && (
                            <div className="mt-2">
                              <strong>Selected Files:</strong>
                              <ul>
                                {fileUploads.map((file, idx) => (
                                  <li key={idx}>{file.name}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="col-md-12">
                        <div className="form-grp">
                          <label>Notes (Optional)</label>
                          <textarea
                            name="notes"
                            rows="3"
                            placeholder="Additional observations or instructions..."
                            value={currentRecord.notes}
                            onChange={handleFormChange}
                            className="form-control"
                            style={{ borderRadius: "12px" }}
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="d-flex gap-3 mt-4">
                      <button type="submit" className="btn" disabled={loading}>
                        {loading ? "Saving..." : formMode === "create" ? "Add Record" : "Update Record"}
                        <img src={rightArrow} alt="" className="injectable ms-1" style={{ height: "14px" }} />
                      </button>
                      {formMode === "edit" && (
                        <button type="button" className="btn btn-outline-secondary" onClick={resetForm}>
                          Cancel
                        </button>
                      )}
                    </div>
                  </form>

                  {message && (
                    <p
                      className={`ajax-response mb-0 mt-3 ${
                        isSuccess ? "text-success" : "text-danger"
                      }`}
                      style={{ fontWeight: "500" }}
                    >
                      {message}
                    </p>
                  )}
                </div>

                {/* Records List Section */}
                <div>
                  <h3 className="title mb-4">📋 Health Timeline</h3>

                  {loading && records.length === 0 ? (
                    <div className="text-center py-5">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : records.length === 0 ? (
                    <div className="alert alert-info text-center">
                      No health records found. Add your first record above!
                    </div>
                  ) : (
                    <div className="row">
                      {records.map((record) => (
                        <div key={record._id} className="col-md-6 col-lg-4 mb-4">
                          <div className="border rounded p-3 bg-white shadow-sm h-100">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="mb-1">{formatDate(record.visitDate)}</h6>
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleEdit(record)}
                              >
                                Edit
                              </button>
                            </div>
                            <p className="mb-1">
                              <strong>Diagnosis:</strong> {record.diagnosis}
                            </p>
                            <p className="mb-1">
                              <strong>Treatment:</strong> {record.treatment}
                            </p>
                            {record.notes && (
                              <p className="mb-0 text-muted">
                                <strong>Notes:</strong> {record.notes}
                              </p>
                            )}
                            {/* Display uploaded documents if available */}
                            {record.documents && record.documents.length > 0 && (
                              <div className="mt-2">
                                <strong>Documents:</strong>
                                <ul>
                                  {record.documents.map((doc, idx) => (
                                    <li key={idx}>
                                      <a
                                        href={doc.url || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {doc.name || `Document ${idx + 1}`}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};