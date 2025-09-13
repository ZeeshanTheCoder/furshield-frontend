import { useContext } from "react";
import { ProductContext } from "../../Context/ProductProvider";
import { ProductOneItem } from "./ProductOneItem";

export const ProductRelated = ({ currentProductId }) => {
  const { products } = useContext(ProductContext);

  const relatedProducts = products.filter((p) => p._id !== currentProductId);

  return (
    <div className="related-product-area">
      <div className="row">
        <div className="col-12">
          <div className="section__title-two mb-20">
            <h2 className="title">Related Products</h2>
          </div>
        </div>
      </div>

      <div className="product__item-wrap">
        <div className="product-active">
          {relatedProducts.map((product) => (
            <div key={product._id} className="swiper-slide">
              <ProductOneItem {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
