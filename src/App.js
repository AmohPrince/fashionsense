import React from "react";

import Firstpage from "./Containers/Firstpage/Firstpage";
import Secondpage from "./Containers/Secondpage/Secondpage";
import "./App.css";

import Signuppage from "./components/Signuppage/Signup";

const App = () => {
  return (
    <div>
      <Firstpage />
      <Secondpage />
      <Signuppage />
    </div>
  );
};

export default App;
