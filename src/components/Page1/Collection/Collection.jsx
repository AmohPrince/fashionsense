import React from "react";
import "./Collection.css";
import images from "../../../constants/images";

const Collection = () => {
  return (
    <div className="Collection__container">
      <div className="Collection__header">
        <p className="p__frankruhl Collection__header-title ">New Collection</p>
        <p className="p__poppins Collection__header-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="Collection__image">
        <div className="Collection__image__container">
          <img
            src={images.fulljeans}
            alt="Lady in full blue denim"
            className="Collection__image__container-img"
          />
          <div className="Collection__image__container-thingy">
            <p className="p__poppins Collection__image__container-thingy-text">
              Denim
            </p>
          </div>
        </div>
        <div className="Collection__image__container">
          <img
            src={images.standingblacklady}
            alt="Standing black lady"
            className="Collection__image__container-img"
          />
          <div className="Collection__image__container-thingy">
            <p className="p__poppins Collection__image__container-thingy-text">
              Trousers
            </p>
          </div>
        </div>
        <div className="Collection__image__container">
          <img
            src={images.flowery}
            alt="Lady in flowers"
            className="Collection__image__container-img"
          />
          <div className="Collection__image__container-thingy">
            <p className="p__poppins Collection__image__container-thingy-text">
              Tops
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
