import React, { useState, useEffect } from "react";
import "./Footer.css";
import Card from "../../../constants/Card/Card";

const Footer = () => {
  const [footerCardState, setFooterCardState] = useState("firstpage");
  const [productClass, setProductClass] = useState("Product__container");
  const [changeBorderRadius, setChangeBorderRadius] =
    useState("Products__image");
  // useEffect(() => {
  //   setFooterCardState("firstpage");
  // }, []);

  return (
    <div className="Footer__container">
      <div className="Footer__left">
        <div>
          <p className="p__frankruhl Footer__left-header">
            Best Seller Product
          </p>
        </div>
        <div className="Footer__left-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque,
          velit tortor quam at donec etiam bibendum sagittis. Libero tempor,
          lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient
          at morbi morbi sit arcu. At integer maecenas tortor non lectus.
        </div>
        <button className="app__btn Footer__left-btn">SEE MORE</button>
      </div>
      <div className="Footer__right">
        <Card
          footerCardState={footerCardState}
          productClass={productClass}
          changeBorderRadius={changeBorderRadius}
        />
      </div>
    </div>
  );
};

export default Footer;
