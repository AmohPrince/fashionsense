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
      <Productscatalogue />
      <Shopnow />
      <Reviews />
      <Pagetwofooter />
    </div>
  );
};

export default Secondpage;
