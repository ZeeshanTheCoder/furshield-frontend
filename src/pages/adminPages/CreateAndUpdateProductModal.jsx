import React, { useState, useEffect } from "react";

const CreateAndUpdateProductModal = ({ type, product, onSubmit, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        category: "food",
        price: 0.0,
        stock: 0,
        status: "Active",
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || "",
                category: product.category || "food",
                price: product.price || 0.0,
                stock: product.stock || 0,
                status: product.status || "Active",
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="modal-backdrop d-flex align-items-center justify-content-center p-3" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1050
        }}>
            <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '500px' }}>
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
                        <label className="form-label fw-medium text-dark">
                            Category
                        </label>
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
                        <label className="form-label fw-medium text-dark">
                            Price ($)
                        </label>
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
                        <label className="form-label fw-medium text-dark">
                            Status
                        </label>
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
                    {/* Buttons */}
                    <div className="d-flex justify-content-end gap-3 pt-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn btn-secondary px-4 py-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary px-4 py-2 text-white"
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