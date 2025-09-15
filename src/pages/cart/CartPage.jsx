import React, { useContext, useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/MainContext";
import { Layout } from "../../layouts/Layout";
import { toast } from "react-toastify";

export const CartPage = () => {
  const {
    cart,
    loading,
    fetchCart,
    updateCartItem,
    removeCartItem,
    clearCart,
  } = useCart();
  const { userdata } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userdata?._id) {
      fetchCart(userdata._id);
    } else {
      navigate("/login");
    }
  }, [userdata]);

  const handleQuantityChange = async (productId, type, currentQuantity) => {
    const newQuantity =
      type === "inc" ? currentQuantity + 1 : currentQuantity - 1;
    if (newQuantity < 1) return;
    await updateCartItem({
      userId: userdata._id,
      productId,
      quantity: newQuantity,
    });
    fetchCart(userdata._id);
  };

  const handleRemove = async (productId) => {
    await removeCartItem({ userId: userdata._id, productId });
    fetchCart(userdata._id);
  };

  const handleClearCart = async () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      await clearCart(userdata._id);
      fetchCart(userdata._id);
    }
  };

  // ✅ New handler for checkout
  const handleCheckout = async () => {
    if (!userdata?._id) return toast("Please login first");
    if (window.confirm("Are you sure you want to proceed with payment?")) {
      toast("Payment Done ✅");
      await clearCart(userdata._id); // clear backend cart
      fetchCart(userdata._id); // refresh frontend cart state
      navigate("/"); // redirect to homepage
    }
  };

  if (loading || !cart) return <p className="text-center my-5">Loading...</p>;

  if (!cart.items.length)
    return <p className="text-center my-5">Your cart is empty.</p>;

  return (
    <Layout breadcrumbTitle="Cart Page" breadcrumbSubtitle={"Cart"}>
      <div className="container my-5">
        <h2 className="mb-4">Shopping Cart</h2>

        <div className="row g-4">
          {cart.items.map((item) => (
            <div className="col-12" key={item.productId?._id || item.productId}>
              {item.productId ? (
                <div className="product__item d-flex flex-column flex-md-row align-items-center border p-3 rounded">
                  <div className="product__thumb me-md-4 mb-3 mb-md-0">
                    <img
                      src={item.productId.image}
                      alt={item.productId.name}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="product__content flex-grow-1">
                    <h4 className="title">{item.productId.name}</h4>
                    <h3 className="price mb-2">${item.productId.price}</h3>

                    {/* Quantity show */}
                    <p className="mb-2">Quantity: {item.quantity}</p>

                    <div className="d-flex align-items-center flex-wrap">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemove(item.productId._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-end mt-3 mt-md-0">
                    <h5>
                      Subtotal: $
                      {(item.productId.price * item.quantity).toFixed(2)}
                    </h5>
                  </div>
                </div>
              ) : (
                <p className="text-danger">
                  ⚠️ This product is no longer available
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4 flex-column flex-md-row">
          <button
            className="btn btn-outline-danger mb-3 mb-md-0"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <div className="text-end">
            <h4>Total: ${cart.totalPrice.toFixed(2)}</h4>
            <button className="btn btn-primary mt-2" onClick={handleCheckout}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
