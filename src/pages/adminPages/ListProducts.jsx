import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../components/adminComponents/ConfirmationModal";
import CreateAndUpdateProductModal from "./CreateAndUpdateProductModal";
import { ProductContext } from "../../Context/ProductProvider";

const ListProducts = () => {
  const { products, createProduct, updateProduct, deleteProduct } =
    useContext(ProductContext);

  const [filters, setFilters] = useState({ category: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("create");
  const [currentProduct, setCurrentProduct] = useState(null);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // filtering
  const filteredProducts = products.filter((product) => {
    const matchesCategory = filters.category
      ? product.category === filters.category
      : true;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // handlers
  const handleCreateProduct = () => {
    setModalType("create");
    setCurrentProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setModalType("edit");
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const handleAskDeleteProduct = (product) => {
    setProductToDelete(product);
    setIsConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete._id);
        toast.success("Product deleted successfully");
      } catch (err) {
        toast.error("Failed to delete product");
      }
      setProductToDelete(null);
    }
    setIsConfirmOpen(false);
  };

  const handleModalSubmit = async (formData) => {
    try {
      if (modalType === "create") {
        await createProduct(formData);
        toast.success("Product created successfully");
      } else if (modalType === "edit" && currentProduct) {
        await updateProduct(currentProduct._id, formData);
        toast.success("Product updated successfully");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-vh-100 bg-light p-4 p-md-5">
      {/* Header */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4">
        <h1 className="h2 fw-bold text-dark mb-3 mb-sm-0">
          Product Catalog
        </h1>
        <button
          onClick={handleCreateProduct}
          className="btn btn-primary px-4 py-3"
        >
          + Add New Product
        </button>
      </div>

      {/* Search + Filters */}
      <div className="bg-white p-3 rounded shadow-sm d-flex flex-column flex-md-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control flex-grow-1"
        />
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="form-select"
          style={{minWidth: '180px'}}
        >
          <option value="">All Categories</option>
          <option value="food">Food</option>
          <option value="grooming">Grooming</option>
          <option value="toys">Toys</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Product Table */}
      <div className="bg-white shadow-sm rounded overflow-hidden">
        <div className="table-responsive">
          <table className="table table-striped mb-0">
            <thead className="table-light">
              <tr>
                <th className="ps-4 py-3 text-secondary small fw-semibold">Name</th>
                <th className="px-3 py-3 text-secondary small fw-semibold">Category</th>
                <th className="px-3 py-3 text-secondary small fw-semibold">Price</th>
                <th className="px-3 py-3 text-secondary small fw-semibold">Stock</th>
                <th className="px-3 py-3 text-secondary small fw-semibold">Status</th>
                <th className="pe-4 py-3 text-secondary small fw-semibold text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product._id}>
                    <td className="ps-4 py-3">{product.name}</td>
                    <td className="px-3 py-3">{product.category}</td>
                    <td className="px-3 py-3">${product.price}</td>
                    <td className="px-3 py-3">{product.stock}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`badge ${product.status === "Active"
                          ? "bg-success-subtle text-success"
                          : "bg-danger-subtle text-danger"
                          }`}
                      >
                        {product.status || "Active"}
                      </span>
                    </td>
                    <td className="pe-0 py-3 text-end">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="btn btn-link text-primary  me-3 text-decoration-none"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleAskDeleteProduct(product)}
                        className="btn btn-link text-danger  text-decoration-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-4 py-4 text-center text-muted"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <CreateAndUpdateProductModal
          type={modalType}
          product={currentProduct}
          onSubmit={handleModalSubmit}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ListProducts;