import React, { useState } from "react";
import "./Navbar.css";
import { GiCupidonArrow, GiDaggerRose } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__bg-primary p__poppins ">
      <div className="logocontainer">
        <p className="logo">Fresh</p>
      </div>
      <div className="middletile p__poppins">
        <ul className="menu">
          <li>Men</li>
          <li>Woman</li>
          <li>Kids</li>
          <li>Collections</li>
          <li>Trends</li>
        </ul>
      </div>
      <div className="navbuttons">
        <div>
          <button className="leftbtn p__poppins">
            <Link to="/page2" style={{ textDecoration: "none" }}>
              <p className="p__link">Page 2</p>
            </Link>
          </button>
          <button className="rytbtn p__poppins">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <p className="p__link">Sign Up</p>
            </Link>
          </button>
        </div>
      </div>
      <div className="app__navbar-smallscreen">
        <GiCupidonArrow
          className="cupidonarrow"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay">
            <GiDaggerRose
              color="#000000"
              className="daggerrose"
              fontSize={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <div className="middletile_smallscreen p__poppins">
              <ul className="menu_smallscreen">
                <li>Men</li>
                <li>Woman</li>
                <li>Kids</li>
                <li>Collections</li>
                <li>Trends</li>
              </ul>
            </div>
            <div className="navbuttons_smallscreen">
              <div>
                <button className="leftbtn p__poppins">
                  <Link to="/page2" style={{ textDecoration: "none" }}>
                    <p className="p__link">Page 2</p>
                  </Link>
                </button>
                <button className="rytbtn p__poppins">
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <p className="p__link">Sign Up</p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
