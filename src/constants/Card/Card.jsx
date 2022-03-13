import { productArray } from "../Products";
import Product from "./Product";
import { useState } from "react";
import Cardicons from "./Cardicons/Cardicons";
import "./Card.css";

const Card = () => {
  const [cardState, setCardState] = useState("firstpage");
  const firstPageProducts = productArray.slice(0, 4);
  const shownImages = firstPageProducts.slice(0, 2);
  const [currentImage, setCurrentImage] = useState([shownImages]);
  console.log(shownImages);

  if (cardState === "firstpage") {
    return (
      <div className="Card__container">
        {shownImages.map((shownImages) => {
          return (
            <>
              <Product product={shownImages} key={shownImages.productName} />
              {/* <Cardicons /> */}
            </>
          );
        })}
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
