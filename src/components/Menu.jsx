import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import starlogo from "../starlogo.png";

const Menu = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      {/* NAVBAR START */}
      <section className="menu">
        <div className="nav-logo">
          <Link to="/">
            <img src={starlogo} alt="logo" />
          </Link>
        </div>

        <div className="desktop-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/more">More</Link>
            </li>
          </ul>
        </div>

        <div className="mobile-navbar">
          <button className="open-nav" onClick={() => setToggleMenu(true)}>
            <GiHamburgerMenu />
          </button>

          {ToggleMenu && (
            <div className="mobile-navbar-links slide-bottom">
              <MdOutlineClose onClick={() => setToggleMenu(false)} />
              <ul>
                <li>
                  <Link onClick={() => setToggleMenu(false)} to="/">Home</Link>
                </li>
                <li>
                  <Link onClick={() => setToggleMenu(false)} to="/company">Company</Link>
                </li>
                <li>
                  <Link onClick={() => setToggleMenu(false)} to="/about">About</Link>
                </li>
                <li>
                  <Link onClick={() => setToggleMenu(false)} to="/contact">Contact</Link>
                </li>
                <li>
                  <Link onClick={() => setToggleMenu(false)} to="/more">More</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      {/* NAVBAR ENDS */}
    </div>
  );
};

export default Menu;
