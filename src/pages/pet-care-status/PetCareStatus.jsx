import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";
import { useNavigate, useParams } from "react-router-dom";
import rightArrow from "../../assets/img/icon/right_arrow.svg";

const PetCareStatus = () => {
  const { id } = useParams(); // get log id from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [currentLog, setCurrentLog] = useState({
    _id: "",
    title: "",
    type: "article",
    category: "feeding",
    content: "",
    videoUrl: "",
  });

  // Fetch existing log if ID present
  useEffect(() => {
    if (id) {
      fetchLogById(id);
    }
  }, [id]);

  const fetchLogById = async (logId) => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/care-content/${logId}`); // <-- Ensure this route exists in your backend
      if (res.data) {
        setCurrentLog(res.data);
        setIsEditMode(true);
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to load the log");
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCurrentLog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      if (isEditMode) {
        // Ensure _id is available
        await axiosInstance.put(`/care-content/${currentLog._id}`, currentLog);
        setMessage("Log updated successfully");
      } else {
        await axiosInstance.post("/care-content/", currentLog);
        setMessage("Log created successfully");
      }
      // Redirect after success
      setTimeout(() => {
        navigate("/view-pet-care");
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage("Error saving log");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/view-pet-care");
  };

  return (
    <Layout breadcrumbTitle="Pet Care Status" breadcrumbSubtitle="Feeding, Hygiene & Health Logs">
      <section className="contact__area py-4">
        <div className="container">
          {/* Log Form */}
          <div className="mb-5 p-4 border rounded bg-light shadow-sm">
            <h2 className="mb-4">{isEditMode ? "Edit Care Log" : "Add New Care Log"}</h2>
            <form onSubmit={handleSubmit} className="row g-3">
              {/* Title */}
              <div className="col-md-6">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="e.g., Morning Meal, Bath Time"
                  required
                  value={currentLog.title}
                  onChange={handleFormChange}
                />
              </div>
              {/* Category */}
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
              {/* Type */}
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
              {/* Video URL */}
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
              {/* Content */}
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
              {/* Buttons */}
              <div className="d-flex gap-3 mt-3">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      {isEditMode ? "Update Log" : "Add Log"}
                      <img src={rightArrow} alt="" className="ms-1" style={{ height: "14px" }} />
                    </>
                  )}
                </button>
                {isEditMode && (
                  <button type="button" className="btn btn-outline-secondary" onClick={handleCancel} disabled={loading}>
                    Cancel
                  </button>
                )}
              </div>
              {message && (
                <p className={`mt-3 mb-0 fw-semibold ${isSuccess ? "text-success" : "text-danger"}`}>
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