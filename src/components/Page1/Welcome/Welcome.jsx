import React from "react";
import "./Welcome.css";
import images from "../../../constants/images";

const Welcome = () => {
  return (
    <div className="Welcome__container">
      <div className="Welcome__leftcontainer">
        <div className="Welcome__leftcontainer__text">
          <p className="p__poppins Welcome__leftcontainer__bigtext">
            Find The Best Fashion Style For You
          </p>
          <p className="p__poppins Welcome__leftcontainer__smalltext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra.
          </p>
        </div>
        <div>
          <button className="app__btn Welcome__leftcontainer__button">
            <p className="Welcome__leftcontainer__button-text">SHOP NOW</p>
          </button>
        </div>

        <div className="Welcome__leftcontainer__patch"></div>
      </div>
      <div className="Welcome__rightcontainer">
        <div className="Welcome__rightcontainer__woman">
          <img
            src={images.outdoorshot}
            alt="Woman in glasses outdoors"
            className="Welcome__rightcontainer__woman-img"
          />
        </div>
        <div>
          <img
            src={images.severaldots}
            alt="some light dots"
            className="Welcome__rightcontainer__dottedpatch"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
