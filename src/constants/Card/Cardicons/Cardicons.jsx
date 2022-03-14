import React from "react";
import "./Cardicons.css";

const Cardicons = ({ handleScrollRight, handleScrollLeft }) => {
  return (
    <div className="Footer__right-icons">
      <button
        className="Footer__right-icon active"
        onClick={handleScrollLeft}
      ></button>
      <button
        className="Footer__right-icon"
        onClick={handleScrollRight}
      ></button>
    </div>
  );
};

export default Cardicons;
