import React, { useState, useEffect } from "react";

const CreateAndUpdateProductModal = ({ type, product, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "food",
    price: 0.0,
    stock: 0,
    status: "Active",
    image: null, // file ke liye field
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "food",
        price: product.price || 0.0,
        stock: product.stock || 0,
        status: product.status || "Active",
        image: null, // edit karte waqt file dobara select karni hogi
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // formData me image file bhi jayegi
  };

  return (
    <div
      className="modal-backdrop d-flex align-items-center justify-content-center p-3"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050,
      }}
    >
      <div
        className="bg-white p-4 rounded shadow w-100"
        style={{
          maxWidth: "500px",
          maxHeight: "90vh", // 👈 height limit set
          overflowY: "auto", // 👈 scroll enable
          position: "relative",
        }}
      >
        <h3 className="h5 fw-bold text-dark mb-3">
          {type === "create" ? "Create New Product" : "Edit Product"}
        </h3>
        <form onSubmit={handleSubmit} className="gap-3 d-flex flex-column">
          {/* Name */}
          <div>
            <label className="form-label fw-medium text-dark">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          {/* Category */}
          <div>
            <label className="form-label fw-medium text-dark">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="food">Food</option>
              <option value="grooming">Grooming</option>
              <option value="toys">Toys</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="form-label fw-medium text-dark">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              min="0"
              required
              className="form-control"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="form-label fw-medium text-dark">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              min="0"
              required
              className="form-control"
            />
          </div>

          {/* Status */}
          <div>
            <label className="form-label fw-medium text-dark">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Active">Active</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="form-label fw-medium text-dark">
              Product Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="btn"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn text-white"
            >
              {type === "create" ? "Create Product" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAndUpdateProductModal;
