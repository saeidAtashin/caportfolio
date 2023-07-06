import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <div className="header-left">
          <h3>CV</h3>
          <Link to="/">
            <h3>WORKS</h3>
          </Link>
        </div>
        <div className="header-center">
          <h1>Siavash Ghahghayi</h1>
        </div>
        <div className="header-right">
          <h3>CONTACT</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
