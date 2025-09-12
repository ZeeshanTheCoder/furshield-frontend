import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";
import rightArrow from "../../assets/img/icon/right_arrow.svg";
import { useParams, useNavigate } from "react-router-dom";

export const HealthRecords = () => {
  const { petId } = useParams();
  const navigate = useNavigate();

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Form state for Create/Edit
  const [formMode, setFormMode] = useState("create");
  const [currentRecord, setCurrentRecord] = useState({
    petId: petId,
    diagnosis: "",
    treatment: "",
    notes: "",
    vaccinations: "",
    allergies: "",
    illnesses: "",
    insurance: "",
    gallery: [],
  });
  const [fileUploads, setFileUploads] = useState([]);

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
      setMessage("");
    } catch (error) {
      console.error("Fetch error:", error);
      setRecords([]);
      if (error.response?.status !== 404) {
        setMessage("Failed to load health records.");
      }
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
        gallery: Array.from(files),
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
      const formData = new FormData();

      // Append text fields
      Object.keys(currentRecord).forEach((key) => {
        if (key !== "gallery" && currentRecord[key] != null) {
          if (
            key === "vaccinations" &&
            typeof currentRecord[key] === "string"
          ) {
            const names = currentRecord[key]
              .split(",")
              .map((item) => item.trim())
              .filter((item) => item);
            const vacArray = names.map((name) => ({
              name,
              date: new Date(), // No visitDate anymore
            }));
            formData.append(key, JSON.stringify(vacArray));
          } else if (
            ["allergies", "illnesses", "treatments"].includes(key) &&
            typeof currentRecord[key] === "string"
          ) {
            const items = currentRecord[key]
              .split(",")
              .map((item) => item.trim())
              .filter((item) => item);
            formData.append(key, JSON.stringify(items));
          } else if (key === "insurance") {
            formData.append(key, currentRecord[key]);
          } else {
            formData.append(key, currentRecord[key]);
          }
        }
      });

      // Append files
      currentRecord.gallery.forEach((file) => {
        formData.append("gallery", file);
      });

      let result;
      if (formMode === "create") {
        result = await axiosInstance.post(
          "/health/createhealthrecord",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        result = await axiosInstance.put(
          `/health/updatehealthrecord/${currentRecord._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      if (result.data.record) {
        setIsSuccess(true);
        setMessage(
          formMode === "create" ? "Record created!" : "Record updated!"
        );
        fetchHealthRecords();
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
    // Format record for form
    const formattedVaccinations = Array.isArray(record.vaccinations)
      ? record.vaccinations.map((v) => v.name).join(", ")
      : record.vaccinations || "";

    const formattedAllergies = Array.isArray(record.allergies)
      ? record.allergies.join(", ")
      : record.allergies || "";

    const formattedIllnesses = Array.isArray(record.illnesses)
      ? record.illnesses.join(", ")
      : record.illnesses || "";

    const formattedTreatments = Array.isArray(record.treatments)
      ? record.treatments.join(", ")
      : record.treatments || "";

    setCurrentRecord({
      ...record,
      petId: petId,
      // visitDate removed
      vaccinations: formattedVaccinations,
      allergies: formattedAllergies,
      illnesses: formattedIllnesses,
      treatment: formattedTreatments,
      insurance: record.insurance?.provider || record.insurance || "",
      gallery: [],
    });
    setFileUploads([]);
    setFormMode("edit");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setCurrentRecord({
      petId: petId,
      diagnosis: "",
      treatment: "",
      notes: "",
      vaccinations: "",
      allergies: "",
      illnesses: "",
      insurance: "",
      gallery: [],
    });
    setFileUploads([]);
    setFormMode("create");
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const dateObj = new Date(dateString);
    if (isNaN(dateObj.getTime())) return "N/A";
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Layout
      breadcrumbTitle="Health Records"
      breadcrumbSubtitle="Manage Pet Health"
    >
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact__form-wrap">
                {/* Form Section */}
                <div className="mb-5">
                  <h2 className="title">
                    {formMode === "create"
                      ? "Add New Health Record"
                      : "Edit Health Record"}
                  </h2>
                  <form
                    onSubmit={handleCreateOrUpdate}
                    className="contact__form mt-4"
                    encType="multipart/form-data"
                  >
                    <div className="row gutter-20">
                      {/* Vaccinations */}
                      <div className="col-md-6">
                        <div className="form-grp">
                          <label>Vaccinations</label>
                          <input
                            type="text"
                            name="vaccinations"
                            placeholder="Rabies, Distemper"
                            value={currentRecord.vaccinations}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* Allergies */}
                      <div className="col-md-6">
                        <div className="form-grp">
                          <label>Allergies</label>
                          <input
                            type="text"
                            name="allergies"
                            placeholder="Beef, Pollen"
                            value={currentRecord.allergies}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* Illnesses */}
                      <div className="col-md-12">
                        <div className="form-grp">
                          <label>Illnesses</label>
                          <input
                            type="text"
                            name="illnesses"
                            placeholder="Kennel Cough"
                            value={currentRecord.illnesses}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* Insurance */}
                      <div className="col-md-12">
                        <div className="form-grp">
                          <label>Insurance</label>
                          <input
                            type="text"
                            name="insurance"
                            placeholder="Policy number or provider"
                            value={currentRecord.insurance}
                            onChange={handleFormChange}
                            className="form-control"
                          />
                        </div>
                      </div>

                      {/* File Upload */}
                      <div className="col-md-12">
                        <div className="form-grp">
                          <label>Upload Documents (Images/PDFs)</label>
                          <input
                            type="file"
                            multiple
                            accept="image/*,application/pdf"
                            name="gallery"
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
                            placeholder="Additional observations..."
                            value={currentRecord.notes || ""}
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
                        {loading
                          ? "Saving..."
                          : formMode === "create"
                          ? "Add Record"
                          : "Update Record"}
                        <img
                          src={rightArrow}
                          alt=""
                          className="injectable ms-1"
                          style={{ height: "14px" }}
                        />
                      </button>
                      {formMode === "edit" && (
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={resetForm}
                        >
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

                {/* Records List */}
                <div>
                  <h3 className="title mb-4">📋 Health Timeline</h3>

                  {loading && records.length === 0 ? (
                    <div className="text-center py-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
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
                        <div
                          key={record._id}
                          className="col-md-6 col-lg-4 mb-4"
                        >
                          <div className="border rounded p-3 bg-white shadow-sm h-100">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="mb-1">
                                {formatDate(record.updatedAt)}
                              </h6>
                              <button
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleEdit(record)}
                              >
                                Edit
                              </button>
                            </div>

                            {record.vaccinations &&
                              record.vaccinations.length > 0 && (
                                <p className="mb-1">
                                  <strong>Vaccinations:</strong>{" "}
                                  {record.vaccinations
                                    .map((v) => v.name)
                                    .join(", ")}
                                </p>
                              )}
                            {record.allergies &&
                              record.allergies.length > 0 && (
                                <p className="mb-1">
                                  <strong>Allergies:</strong>{" "}
                                  {record.allergies.join(", ")}
                                </p>
                              )}
                            {record.illnesses &&
                              record.illnesses.length > 0 && (
                                <p className="mb-1">
                                  <strong>Illnesses:</strong>{" "}
                                  {record.illnesses.join(", ")}
                                </p>
                              )}
                            {record.treatments &&
                              record.treatments.length > 0 && (
                                <p className="mb-1">
                                  <strong>Treatments:</strong>{" "}
                                  {record.treatments.join(", ")}
                                </p>
                              )}
                            {record.insurance && (
                              <div className="mb-1">
                                <strong>Insurance:</strong>
                                <div>
                                  {record.insurance.policyNo && (
                                    <div>
                                      Policy No: {record.insurance.policyNo}
                                    </div>
                                  )}
                                  {record.insurance.provider && (
                                    <div>
                                      Provider: {record.insurance.provider}
                                    </div>
                                  )}
                                  {record.insurance.docs &&
                                    record.insurance.docs.length > 0 && (
                                      <div>
                                        <strong>Docs:</strong>
                                        <div>
                                          {record.insurance.docs.map(
                                            (docUrl, idx) => (
                                              <button
                                                key={idx}
                                                className="btn btn-sm btn-outline-secondary me-1 mb-1"
                                                onClick={() =>
                                                  window.open(docUrl, "_blank")
                                                }
                                              >
                                                Doc {idx + 1}
                                              </button>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    )}
                                </div>
                              </div>
                            )}
                            {record.notes && (
                              <p className="mb-0 text-muted">
                                <strong>Notes:</strong> {record.notes}
                              </p>
                            )}

                            {record.documents &&
                              record.documents.length > 0 && (
                                <div className="mt-2">
                                  <strong>📎 Files:</strong>
                                  <div className="mt-1">
                                    {record.documents.map((doc, idx) => (
                                      <button
                                        key={idx}
                                        className="btn btn-sm btn-outline-secondary me-1 mb-1"
                                        onClick={() =>
                                          window.open(doc, "_blank")
                                        }
                                      >
                                        File {idx + 1}
                                      </button>
                                    ))}
                                  </div>
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
