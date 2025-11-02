import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { AppContext } from "../../Context/MainContext";
import { toast } from "react-toastify";

export const ProductDetailsTop = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { userdata } = useContext(AppContext);

  const userId = userdata?._id || null;

  const handleQuantityChange = (type) => {
    if (type === "inc") setQuantity((prev) => prev + 1);
    else if (type === "dec" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = async () => {
    if (!userId) {
      toast("Please login to add items to cart");
      return navigate("/login"); // navigate to login page
    }

    try {
      await addToCart({
        userId,
        productId: product._id,
        quantity,
      });
      toast("Item added to cart!");
      navigate(`/cart/${userId}`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast("Failed to add item to cart");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="product__details-images-wrap">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane show active"
                role="tabpanel"
                tabIndex="0"
              >
                <img src={product.image} alt={product.title} />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="product__details-content">
            <span className="tag">{product.category || "Category"}</span>
            <h2 className="title">{product.title}</h2>
            <div className="product__reviews-wrap">
              <div className="product__reviews">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <span>({product.reviews || 0} Reviews)</span>
              </div>
              <div className="product__code">
                <span>
                  Category: <strong>{product.category || "N/A"}</strong>
                </span>
              </div>
            </div>
            <h4 className="price">
              ${product.price?.toFixed(2)}{" "}
              {product.oldPrice && <del>${product.oldPrice?.toFixed(2)}</del>}
            </h4>
            <div className="product__details-qty">
              <div className="cart-plus-minus">
                <div
                  className="dec qtybutton"
                  onClick={() => handleQuantityChange("dec")}
                >
                  <span>-</span>
                </div>
                <input type="text" value={quantity} readOnly />
                <div
                  className="inc qtybutton"
                  onClick={() => handleQuantityChange("inc")}
                >
                  <span>+</span>
                </div>
              </div>
              <button className="add-btn" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
