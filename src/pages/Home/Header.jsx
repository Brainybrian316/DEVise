import React from "react";
import Navbar from "./Navbar";
import "./HomeStyles.css";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Launch Your App</span>With Confindence and Creativity
        </h1>
        <p className="details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          at voluptatibus fugiat ex, recusandae aspernatur quam officia. Nihil
          praesentium quibusdam, magni deleniti dolor incidunt fuga, quidem illo
          unde nam maiores.
        </p>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
}

export default Header;
