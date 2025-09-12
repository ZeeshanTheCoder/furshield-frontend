import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";
import { useNavigate } from "react-router-dom";

const PetCare = () => {
  const navigate = useNavigate();

  const [logs, setLogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/care-content/");
      const data = res.data || [];
      setLogs(data);
      const cats = Array.from(new Set(data.map((log) => log.category)));
      setCategories(cats);
      const types = Array.from(new Set(data.map((log) => log.type)));
      setTypeFilters(types);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const filteredLogs = logs
    .filter((log) => (categoryFilter === "all" ? true : log.category === categoryFilter))
    .filter((log) => (typeFilter === "all" ? true : log.type === typeFilter))
    .filter((log) => log.title.toLowerCase().includes(nameFilter.toLowerCase()))
    .sort((a, b) => (sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)));

  return (
    <Layout breadcrumbTitle="All Pet Care Logs" breadcrumbSubtitle="View, filter & sort logs">
      <section className="contact__area py-4">
        <div className="container">
          {/* Filters */}
          <div className="mb-4 d-flex flex-wrap gap-3 align-items-center">
            {/* Search Input */}
            <div className="w-50">
              <input
                type="text"
                className="form-control p-3 border rounded-pill bg-white"
                style={{ backgroundImage: "none", color: "#8793AB" }}
                placeholder="Search by name..."
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </div>
            {/* Category Filter */}
            <div className="d-flex align-items-center" style={{ width: "15%" }}>
              <label className="me-2">Category:</label>
              <select
                className="form-control p-3 border rounded-pill bg-white"
                style={{ backgroundImage: "none", color: "#8793AB" }}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            {/* Type Filter */}
            <div className="d-flex align-items-center" style={{ width: "15%" }}>
              <label className="me-2">Type:</label>
              <select
                className="form-control p-3 border rounded-pill bg-white"
                style={{ backgroundImage: "none", color: "#8793AB" }}
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">All</option>
                {typeFilters.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Logs List */}
          {loading ? (
            <div className="text-center py-3">
              <div className="spinner-border text-primary" role="status" />
            </div>
          ) : filteredLogs.length === 0 ? (
            <div className="alert alert-light text-center">No logs found.</div>
          ) : (
            <div className="row g-3">
              {filteredLogs.map((log) => (
                <div key={log._id} className="col-md-6 col-lg-4 mb-3">
                  <div className="card h-100 shadow-sm border-0">
                    {log.videoUrl && (
                      <div className="p-2 bg-dark text-white text-center small">
                        📹 Video Attached
                      </div>
                    )}
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="card-title">{log.title}</h5>
                        <p className="small text-muted mb-2">{new Date(log.createdAt).toLocaleString()}</p>
                        <p>{log.content}</p>
                      </div>
                      {log.videoUrl && (
                        <a
                          href={log.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-secondary mt-2"
                        >
                          <i className="icon-video"></i> Watch Video
                        </a>
                      )}
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default PetCare;