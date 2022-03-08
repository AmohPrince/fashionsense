import React from "react";
import {
  Collection,
  Fashionsince,
  Footer,
  Navbar,
  Welcome,
} from "../../components/Page1";

const Firstpage = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Fashionsince />
      <Collection />
      <Footer />
    </div>
  );
};

export default Firstpage;
