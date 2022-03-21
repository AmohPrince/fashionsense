import React from "react";
import "./Fashionsince.css";
import images from "../../../constants/images";

const Fashionsince = () => {
  return (
    <div className="Fashionsince__container flex__container">
      <div className="Fashionsince__rightsection">
        <div>
          <img
            src={images.ilovetheblue}
            alt="Grey dots"
            className="Fashionsince__image-img"
          />
        </div>
        <div>
          <img
            src={images.greydots}
            alt="grey dots"
            className="Fashionsince__greydots-1"
          />
        </div>
        <div>
          <img
            src={images.greydots}
            alt="Grey dots"
            className="Fashionsince__greydots-2"
          />
        </div>
      </div>
      <div className="Fashionsince__leftsection flex__container">
        <div className="Fashionsince__lefttab">
          <p className="p__frankruhl Fashionsince__lefttab-heading">
            Best Fashion Since 2010
          </p>
          <p className="p__poppins Fashionsince__lefttab-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra.
          </p>
        </div>
        <div className="Fashionsince__goldtab flex__container">
          <div className="Fashionsince__goldtab-section">
            <p className="p__podkova">2010</p>
            <p className="p__poppins p__spec">Founded</p>
          </div>
          <div className="f__line" />
          <div className="Fashionsince__goldtab-section">
            <p className="p__podkova">5000+</p>
            <p className="p__poppins p__spec">Product Sold</p>
          </div>
          <div className="f__line" />
          <div className="Fashionsince__goldtab-section">
            <p className="p__podkova">4500+</p>
            <p className="p__poppins p__spec">Best Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashionsince;
