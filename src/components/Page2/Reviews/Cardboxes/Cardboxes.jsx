import React from "react";
import "./Cardboxes.css";
import { CardData } from "./CardData";

const Cardboxes = () => {
  return (
    <div className="Cardboxes__container">
      {CardData.map((card) => {
        return <Review card={card} />;
      })}
    </div>
  );
};

export default Cardboxes;

const Review = ({ card }) => {
  return (
    <div className="Review__container">
      <div className="Review__heading">
        <p className="p__poppins">{card.cardTitle}</p>
      </div>
      <div className="Review__text">
        <p className="p__poppins">{card.cardText}</p>
      </div>
      <div className="Review__image">
        <img src={card.cardImage} alt="images" className="Review__image-imd" />
      </div>
      <div className="xbgdv">
        <p className="p__poppins  Review__name">{card.imageOwner}</p>
      </div>
      <div className="Review__relation">
        <p className="p__poppins">{card.imageRelationship}</p>
      </div>
    </div>
  );
};
