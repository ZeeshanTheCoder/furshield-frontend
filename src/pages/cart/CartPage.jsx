import React, { useContext, useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/MainContext";
import { Layout } from "../../layouts/Layout";

export const CartPage = () => {
  const { cart, loading, fetchCart, updateCartItem, removeCartItem, clearCart } = useCart();
  const { userdata } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userdata?._id) {
      fetchCart(userdata._id); // use _id from your userdata
    } else {
      navigate("/login");
    }
  }, [userdata]);

  const handleQuantityChange = async (productId, type, currentQuantity) => {
    const newQuantity = type === "inc" ? currentQuantity + 1 : currentQuantity - 1;
    if (newQuantity < 1) return;
    await updateCartItem({ userId: userdata._id, productId, quantity: newQuantity });
    // Refetch cart to update UI after change
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

  if (loading || !cart) return <p className="text-center my-5">Loading...</p>;

  if (!cart.items.length) return <p className="text-center my-5">Your cart is empty.</p>;

  return (
    <Layout breadcrumbTitle="Cart Page" breadcrumbSubtitle={"Cart"}>
      <div className="container my-5">
        <h2 className="mb-4">Shopping Cart</h2>

        <div className="row g-4">
          {cart.items.map((item) => (
            <div className="col-12" key={item.productId._id}>
              <div className="product__item d-flex flex-column flex-md-row align-items-center border p-3 rounded">
                <div className="product__thumb me-md-4 mb-3 mb-md-0">
                  <img
                    src={item.productId.image}
                    alt={item.productId.name}
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                </div>
                <div className="product__content flex-grow-1">
                  <h4 className="title">{item.productId.name}</h4>
                  <div className="product__reviews mb-2">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <span>({item.productId.reviews || 0} Reviews)</span>
                  </div>
                  <h3 className="price mb-2">${item.productId.price.toFixed(2)}</h3>

                  <div className="d-flex align-items-center flex-wrap">
                    {/* Improved Quantity Controls */}
                    <div className="cart-plus-minus d-flex align-items-center me-3">
                      <button
                        className="btn btn-outline-secondary btn-sm rounded-circle p-0"
                        style={{ width: "30px", height: "30px", minWidth: "30px" }}
                        onClick={() =>
                          handleQuantityChange(item.productId._id, "dec", item.quantity)
                        }
                        aria-label="Decrease quantity"
                      >
                        <i className="fas fa-minus fa-sm"></i>
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="form-control form-control-sm text-center mx-2"
                        style={{ width: "50px", height: "30px", fontSize: "0.9rem" }}
                      />
                      <button
                        className="btn btn-outline-secondary btn-sm rounded-circle p-0"
                        style={{ width: "30px", height: "30px", minWidth: "30px" }}
                        onClick={() =>
                          handleQuantityChange(item.productId._id, "inc", item.quantity)
                        }
                        aria-label="Increase quantity"
                      >
                        <i className="fas fa-plus fa-sm"></i>
                      </button>
                    </div>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(item.productId._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-end mt-3 mt-md-0">
                  <h5>Subtotal: ${(item.productId.price * item.quantity).toFixed(2)}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4 flex-column flex-md-row">
          <button className="btn btn-outline-danger mb-3 mb-md-0" onClick={handleClearCart}>
            Clear Cart
          </button>
          <div className="text-end">
            <h4>Total: ${cart.totalPrice.toFixed(2)}</h4>
            <button className="btn btn-primary mt-2" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};