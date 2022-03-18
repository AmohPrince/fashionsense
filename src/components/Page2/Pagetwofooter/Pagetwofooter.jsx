import React from "react";
import "./Pagetwofooter.css";
import images from "../../../constants/images";

const Pagetwofooter = () => {
  return (
    <div className="pagetwofooter__container">
      <div className="pgtwofooter__top">
        <div className="pgtwofooter__images">
          <img
            src={images.kids}
            alt="kids"
            className="pgtwofooter__images-img"
          />
          <img
            src={images.indian}
            alt="kids"
            className="pgtwofooter__images-img"
          />
          <img
            src={images.twoinblack}
            alt="ladiesinblack"
            className="pgtwofooter__images-img"
          />
          <img
            src={images.orangesmoke}
            alt="orange smoke"
            className="pgtwofooter__images-img"
          />
          <img
            src={images.twoinyellow}
            alt="ladies in yellow"
            className="pgtwofooter__images-img"
          />
          <img
            src={images.london}
            alt="blue lady"
            className="pgtwofooter__images-img"
          />
        </div>
      </div>
      <div className="pgtwofooter__bottom">
        <div className="pgtwofooter__whitebanner">
          <p className="p__poppins">Follow Our INSTAGRAM : @FRESH</p>
        </div>
        <div className="pgtwofooter__links">
          <li className="pgtwofooter__li">Men</li>
          <li className="pgtwofooter__li">Woman</li>
          <li className="pgtwofooter__li">Kids</li>
          <li className="pgtwofooter__li">Collection</li>
          <li className="pgtwofooter__li">Trends</li>
        </div>
        <div className="pgtwofooter__cp">
          <p className="p__poppins">Copyright FRESH. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Pagetwofooter;
