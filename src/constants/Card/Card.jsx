import { productArray } from "../Products";
import Product from "./Product";
import { useState, useEffect } from "react";
import Cardicons from "./Cardicons/Cardicons";
import "./Card.css";

const Card = ({
  footerCardState,
  topBarCardState,
  productClass,
  changeBorderRadius,
}) => {
  const firstPageProducts = productArray.slice(0, 4);
  const secondPageProducts = productArray.slice(4, productArray.length);
  console.log(secondPageProducts);
  console.log(productArray);
  const [shownImages, setshownImages] = useState([]);

  useEffect(() => {
    const shownImages = firstPageProducts.slice(0, 2);
    setshownImages(shownImages);
  }, []);

  const handleScrollRight = (e) => {
    const shownImages = firstPageProducts.slice(2, 4);
    setshownImages(shownImages);

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  };
  const handleScrollLeft = (e) => {
    const shownImages = firstPageProducts.slice(0, 2);

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }

    setshownImages(shownImages);
  };

  if (footerCardState === "firstpage") {
    return (
      <div className="Card__container-overall">
        <div className="Card__container">
          {shownImages.map((shownImages) => {
            return (
              <>
                <Product
                  product={shownImages}
                  key={shownImages.productName}
                  productClass={productClass}
                  changeBorderRadius={changeBorderRadius}
                />
              </>
            );
          })}
        </div>
        <Cardicons
          handleScrollRight={(e) => {
            handleScrollRight(e);
          }}
          handleScrollLeft={(e) => {
            handleScrollLeft(e);
          }}
        />
      </div>
    );
  }

  if (topBarCardState === "secondpage") {
    return (
      <div className="Card__container-page2">
        {secondPageProducts.map((secondPageProducts) => {
          return (
            <Product
              product={secondPageProducts}
              key={secondPageProducts.productName}
              productClass={productClass}
              changeBorderRadius={changeBorderRadius}
            />
          );
        })}
      </div>
    );
  }
};

export default Card;
