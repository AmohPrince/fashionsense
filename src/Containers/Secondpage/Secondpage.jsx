import React from "react";
import {
  Pagetwofooter,
  Productscatalogue,
  Reviews,
  Shopnow,
  Topbar,
} from "../../components/Page2";

const Secondpage = () => {
  return (
    <div>
      <Topbar />
      <Shopnow />
      <Reviews />
      <Productscatalogue />
      <Pagetwofooter />
    </div>
  );
};

export default Secondpage;
