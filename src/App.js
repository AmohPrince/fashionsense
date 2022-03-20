import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Firstpage from "./Containers/Firstpage/Firstpage";
import Secondpage from "./Containers/Secondpage/Secondpage";
import "./App.css";

import Signuppage from "./components/Signuppage/Signup";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="page2" element={<Secondpage />} />
          <Route path="signup" element={<Signuppage />} />
          <Route path="/fashionsense" element={<Firstpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
