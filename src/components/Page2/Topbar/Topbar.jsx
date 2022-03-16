import React, { useEffect } from "react";
import { useState } from "react";
import "./Topbar.css";
import Card from "../../../constants/Card/Card";

const Topbar = () => {
  const [topBarCardState, settopBarCardState] = useState("secondpage");
  const [productClass, setProductClass] = useState("Product__container2");
  const [changeBorderRadius, setChangeBorderRadius] =
    useState("Product__image2");

  return (
    <>
      <div className="Topbar__container">
        <div className="Topbar__top">
          <h1 className="Topbar__top-heading p__frankruhl">Our Product</h1>
        </div>
        <div className="Topbar__bottom">
          <div className="Topbar__bottom-target">
            <h3 className="Topbar__bottom-subheadings p__poppins">HOT</h3>
            <div className="Topbar__bottom-target-line" />
          </div>
          <h3 className="Topbar__bottom-subheadings p__poppins">ON SALE</h3>
          <h3 className="Topbar__bottom-subheadings p__poppins">
            TRENDING NOW
          </h3>
          <h3 className="Topbar__bottom-subheadings p__poppins">
            NEW ARRIVALS
          </h3>
        </div>
        <Card
          topBarCardState={topBarCardState}
          productClass={productClass}
          changeBorderRadius={changeBorderRadius}
        />
      </div>
    </>
  );
};

export default Topbar;
