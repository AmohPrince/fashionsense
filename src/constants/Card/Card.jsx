import { productArray } from "../Products";
import Product from "./Product";
import { useState, useEffect } from "react";
import Cardicons from "./Cardicons/Cardicons";
import "./Card.css";

const Card = () => {
  const [cardState, setCardState] = useState("firstpage");
  const firstPageProducts = productArray.slice(0, 4);
  const [shownImages, setshownImages] = useState([]);

  const handleTargetLinks = () => {
    const targetLinks = document.getElementsByClassName("Footer__right-icon");
    targetLinks.classList.remove("active");
  };
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

  if (cardState === "firstpage") {
    return (
      <div className="Card__container-overall">
        <div className="Card__container">
          {shownImages.map((shownImages) => {
            return (
              <>
                <Product product={shownImages} key={shownImages.productName} />
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
  } else {
    return (
      <div>
        {productArray.map((product) => {
          return <Product product={product} key={product.productName} />;
        })}
      </div>
    );
  }
};

export default Card;
