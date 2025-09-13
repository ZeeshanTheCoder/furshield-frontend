import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../services/BaseUrl";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch cart for a user
  const fetchCart = async (userId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/cart/${userId}`);
      setCart(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch cart error:", error.response?.data || error.message);
      setLoading(false);
    }
  };

  // Add item to cart
  const addToCart = async ({ userId, productId, quantity }) => {
    try {
      const response = await axios.post(`${BASE_URL}/cart/add`, {
        userId,
        productId,
        quantity,
      });
      setCart(response.data.cart);
      return response.data;
    } catch (error) {
      console.error("Add to cart error:", error.response?.data || error.message);
      throw error;
    }
  };

  // Update item quantity
  const updateCartItem = async ({ userId, productId, quantity }) => {
    try {
      const response = await axios.put(`${BASE_URL}/cart/update`, {
        userId,
        productId,
        quantity,
      });
      setCart(response.data.cart);
      return response.data;
    } catch (error) {
      console.error("Update cart error:", error.response?.data || error.message);
      throw error;
    }
  };

  // Remove item from cart
  const removeCartItem = async ({ userId, productId }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/cart/remove`, {
        data: { userId, productId },
      });
      setCart(response.data.cart);
      return response.data;
    } catch (error) {
      console.error("Remove cart item error:", error.response?.data || error.message);
      throw error;
    }
  };

  // Clear cart
  const clearCart = async (userId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/cart/clear/${userId}`);
      setCart(response.data.cart);
      return response.data;
    } catch (error) {
      console.error("Clear cart error:", error.response?.data || error.message);
      throw error;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        fetchCart,
        addToCart,
        updateCartItem,
        removeCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
