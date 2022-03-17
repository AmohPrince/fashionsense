import React from "react";
import Cardboxes from "./Cardboxes/Cardboxes";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="Reviews__container">
      <div>
        <p className="p__frankruhl Reviews__title">What People Say About Us</p>
      </div>
      <div>
        <p className="p__poppins Reviews__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque,
          velit tortor quam at donec etiam.
        </p>
      </div>
      <div className="Reviews__boxes">
        <Cardboxes />
      </div>
      <div className="Reviews__buttons">
        <button className="Review__btn active"></button>
        <button className="Review__btn"></button>
        <button className="Review__btn"></button>
        <button className="Review__btn"></button>
        <button className="Review__btn"></button>
      </div>
    </div>
  );
};

export default Reviews;
