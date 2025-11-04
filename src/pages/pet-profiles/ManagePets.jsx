import { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { axiosInstance } from "../../services/BaseUrl";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ManagePets = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [ownerId, setOwnerId] = useState("");
  const [petId, setPetId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    medicalHistory: "",
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id) {
      setPetId(id);
      setIsEditMode(true);
    }
  }, [location.search]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axiosInstance.get("/user/getuser");
        if (res.status === 200) {
          setOwnerId(res.data.user._id);
        }
      } catch (error) {
        console.error("GetUser Error:", error.response?.data || error.message);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    if (isEditMode && petId) {
      const fetchPet = async () => {
        try {
          const res = await axiosInstance.get(`/pets/petsfetchbyid/${petId}`); // 👈 You need to create this route
          const pet = res.data.pet;
          setFormData({
            name: pet.name,
            species: pet.species,
            breed: pet.breed,
            age: pet.age,
            medicalHistory: pet.medicalHistory?.join(", ") || "",
          });
        } catch (error) {
          console.error("Fetch Pet Error:", error);
          toast("Failed to load pet data.");
          navigate("/pet-profiles");
        }
      };
      fetchPet();
    }
  }, [isEditMode, petId, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "medicalHistory" && formData[key]) {
        const arr = formData[key]
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item);
        data.append(key, JSON.stringify(arr));
      } else {
        data.append(key, formData[key]);
      }
    });

    if (!isEditMode) {
      data.append("ownerId", ownerId);
    }

    for (let i = 0; i < files.length; i++) {
      data.append("gallery", files[i]);
    }

    try {
      let res;
      if (isEditMode) {
        //   Update existing pet
        res = await axiosInstance.put(`/pets/petsupdate/${petId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast("Pet updated successfully!");
      } else {
        //   Create new pet
        res = await axiosInstance.post("/pets/petscreate", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast("Pet created successfully!");
      }

      console.log(res.data);
      navigate("/pet-profiles");
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast(
        "Operation failed: " + (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      breadcrumbTitle={isEditMode ? "Edit Pet" : "Add Pet"}
      breadcrumbSubtitle="Pets"
    >
      <div className="container mt-4">
        <h2 className="mb-3">{isEditMode ? "Edit Pet" : "Add New Pet"}</h2>
        <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Species</label>
            <input
              type="text"
              name="species"
              className="form-control"
              value={formData.species}
              onChange={handleChange}
              required
            />
          </div>



          <div className="mb-3">
            <label className="form-label">Breed</label>
            <input
              type="text"
              name="breed"
              className="form-control"
              value={formData.breed}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Medical History (comma separated)
            </label>
            <input
              type="text"
              name="medicalHistory"
              className="form-control"
              value={formData.medicalHistory}
              placeholder="Vaccinated,Neutered"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gallery (Multiple Images)</label>
            <input
              type="file"
              className="form-control"
              multiple
              onChange={handleFileChange}
            />
            {isEditMode && (
              <small className="text-muted">
                Leave empty to keep current images. Select new files to replace.
              </small>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 d-flex justify-content-center align-items-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                {isEditMode ? "Updating..." : "Submitting..."}
              </>
            ) : isEditMode ? (
              "Update Pet"
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ManagePets;
