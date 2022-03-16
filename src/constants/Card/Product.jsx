import React from "react";
import "./Product.css";
import images from "../images";

const Product = ({ product, productClass, changeBorderRadius }) => {
  return (
    <div className={productClass}>
      <div className={changeBorderRadius}>
        <img src={product.imgUrl} alt="Product image" />
      </div>
      <div className="Products__container-footer">
        <div className="Products__stars">
          <img src={images.fivestar} alt="Five star rating" />
        </div>
        <p className="p__poppins Products__productname">
          {product.productName}
        </p>
        <div className="Products__prices">
          <p className="p__poppins Products__oldprice">{product.oldPrice}</p>
          <p className="p__poppins Products__newprice">{product.newPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
