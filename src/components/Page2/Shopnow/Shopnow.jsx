import React from "react";
import "./Shopnow.css";
import images from "../../../constants/images";

const Shopnow = () => {
  return (
    <div className="Shopnow__container">
      <div className="Shopnow__container-left">
        <div>
          <p className="p__frankruhl Shopnow__left-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque,
            velit tortor quam at donec etiam bibendum sagittis.
          </p>
        </div>
        <div className="Shopnow__left-time">
          <div className="Shopnow__left-time-box">
            <p className="p__poppins">03</p>
            <p className="p__poppins">Day</p>
          </div>
          <div className="Shopnow__left-time-box">
            <p className="p__poppins">08</p>
            <p className="p__poppins">Hour</p>
          </div>
          <div className="Shopnow__left-time-box">
            <p className="p__poppins">09</p>
            <p className="p__poppins">Minute</p>
          </div>
        </div>
        <div className="Shopnow__leftbutton-container">
          <button className="app__btn Shopnow__leftbutton">
            <p className="Shopnow__leftbutton-text">SHOP NOW</p>
          </button>
        </div>
      </div>
      <div className="Shopnow__container-right">
        <div className="Shopnow__right-img-container">
          <img
            src={images.brownremovedbg}
            alt="Brown leather"
            className="Shopnow__right-img"
          />
        </div>
        <img
          src={images.greydots}
          alt="dots"
          className="Shopnow__right-dottedbox"
        />
      </div>
    </div>
  );
};

export default Shopnow;
