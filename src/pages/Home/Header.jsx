import React from "react";
// import Navbar from "./Navbar";
import "./HomeStyles.css";

function Header() {
  return (
    <div id="main" className="back-color">
    
      <div className="name">
        <h1>
          <span>Welcome to DEVISE</span>
        </h1>
        <p className="details">
          Welcome to DEVISE where you can share you latest
        </p>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
}

export default Header;
