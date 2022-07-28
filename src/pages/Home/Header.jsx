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
          Have an idea? Turn it into a collaboration!
        </p>
        <br></br>
        <p className="details">
          Get your idea out of your head and into the world. Share it with a trusted community that knows how to stick handle it.
        </p>
        <br></br>
        <p className="details">
          Once it’s live, our community can share their honest feedback with comments, up-votes and questions.
        </p>
        <br></br>
        <p className="details">
          Building can be lonely. Amplify your efforts with people that share the same passion for your idea, and start building today!
        </p>
        {/* <a href="#" className="cv-btn">
          Download
        </a> */}
      </div>
    </div>
  );
}

export default Header;
