import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
    import { BASE_URL } from "../services/BaseUrl";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async (filters = {}) => {
        setLoading(true);
        try {
            const res = await axios.get(`${BASE_URL}/product`, { params: filters });
            setProducts(res.data.products || []);
            console.log("products" , res.data)
        } catch (err) {
            console.error("Error fetching products:", err);
        } finally {
            setLoading(false);
        }
    };

    const getProductById = async (id) => {
        try {
            const res = await axios.get(`${BASE_URL}/product/${id}`);
            return res.data.product;
        } catch (err) {
            console.error("Error fetching product:", err);
            return null;
        }
    };

    

    const createProduct = async (productData) => {
        try {
            const res = await axios.post(`${BASE_URL}/product`, productData);
            setProducts((prev) => [...prev, res.data.product]);
            return res.data.product;
        } catch (err) {
            console.error("Error creating product:", err);
            throw err;
        }
    };

    const updateProduct = async (id, updates) => {
        try {
            const res = await axios.put(`${BASE_URL}/product/${id}`, updates);
            setProducts((prev) =>
                prev.map((p) => (p._id === id ? res.data.product : p))
            );
            return res.data.product;
        } catch (err) {
            console.error("Error updating product:", err);
            throw err;
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/product/${id}`);
            setProducts((prev) => prev.filter((p) => p._id !== id));
        } catch (err) {
            console.error("Error deleting product:", err);
            throw err;
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,
                getProducts,
                getProductById,
                createProduct,
                updateProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};