import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";
import { useNavigate, useLocation } from "react-router-dom";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

const PetCareStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Determine if editing or creating
  const existingLog = location.state?.log;
  const [formMode, setFormMode] = useState(existingLog ? "edit" : "create");

  // Initialize form state based on existing log if editing
  const [currentLog, setCurrentLog] = useState({
    _id: existingLog?._id || "",
    title: existingLog?.title || "",
    type: existingLog?.type || "article",
    category: existingLog?.category || "feeding",
    content: existingLog?.content || "",
    videoUrl: existingLog?.videoUrl || "",
  });

  // Fetch logs or other data if needed
  // (Optional, since data is passed via state for edit)

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCurrentLog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsSuccess(false);
    try {
      let result;
      if (formMode === "create") {
        result = await axiosInstance.post("/care-content/", currentLog);
      } else {
        result = await axiosInstance.put(
          `/care-content/${currentLog._id}`,
          currentLog
        );
      }
      if (
        result.status === 200 ||
        result.data.message?.includes("successfully")
      ) {
        setIsSuccess(true);
        setMessage(
          `Log ${formMode === "create" ? "created" : "updated"} successfully!`
        );
        // Redirect after update
        setTimeout(() => {
          navigate("/view-pet-care");
        }, 1500);
        // Reset form if create
        if (formMode === "create") {
          setCurrentLog({
            _id: "",
            title: "",
            type: "article",
            category: "feeding",
            content: "",
            videoUrl: "",
          });
        }
      } else {
        setMessage(result.data.message || "Operation failed.");
      }
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Network error.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    // Reset to create mode
    setCurrentLog({
      _id: "",
      title: "",
      type: "article",
      category: "feeding",
      content: "",
      videoUrl: "",
    });
    setFormMode("create");
  };

  return (
    <Layout
      breadcrumbTitle="Pet Care Status"
      breadcrumbSubtitle="Feeding, Hygiene & Health Logs"
    >
      <section className="contact__area py-4">
        <div className="container">
          {/* Care Log Form */}
          <div className="mb-5 p-4 border rounded bg-light shadow-sm">
            <h2 className="mb-4">
              {formMode === "create" ? "Add New Care Log" : "Edit Care Log"}
            </h2>
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  required
                  placeholder="e.g., Morning Meal, Bath Time"
                  value={currentLog.title}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  name="category"
                  value={currentLog.category}
                  onChange={handleFormChange}
                  required
                >
                  <option value="feeding">Feeding</option>
                  <option value="hygiene">Hygiene</option>
                  <option value="health">Health</option>
                  <option value="training">Training</option>
                  <option value="exercise">Exercise</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Type</label>
                <select
                  className="form-select"
                  name="type"
                  value={currentLog.type}
                  onChange={handleFormChange}
                  required
                >
                  <option value="article">Article/Note</option>
                  <option value="video">Video</option>
                  <option value="faq">FAQ/Instruction</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Video URL (Optional)</label>
                <input
                  type="url"
                  className="form-control"
                  name="videoUrl"
                  placeholder="https://youtube.com/..."
                  value={currentLog.videoUrl}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Details / Notes</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Describe the care activity..."
                  name="content"
                  value={currentLog.content}
                  onChange={handleFormChange}
                  style={{ borderRadius: "12px" }}
                  required
                ></textarea>
              </div>
              <div className="d-flex gap-3 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></div>
                      {formMode === "create" ? "Adding..." : "Updating..."}
                    </>
                  ) : (
                    <>
                      {formMode === "create" ? "Add Log" : "Update Log"}
                      <img
                        src={rightArrow}
                        alt=""
                        className="ms-1"
                        style={{ height: "14px" }}
                      />
                    </>
                  )}
                </button>
                {formMode === "edit" && (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleCancelEdit}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                )}
              </div>
              {message && (
                <p
                  className={`mt-3 mb-0 fw-semibold ${
                    isSuccess ? "text-success" : "text-danger"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PetCareStatus;
