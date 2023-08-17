import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="width-container">
        <ul>
          <a className="hover-underline-animation" href="/">
            Maps
          </a>
          <a className="hover-underline-animation" href="/">
            Images
          </a>
          <a className="hover-underline-animation" href="/">
            About
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
