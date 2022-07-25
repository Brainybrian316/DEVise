import "./MemberCardStyles.css";
import React from "react";
// import { Link } from "react-router-dom";

function MemberCard() {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h4> Bronze </h4>
          <span className="bar"></span>
          <p className="btc"> FREE </p>
          <p> - 3 post a month -</p>
          <p> - lorem -</p>
          <p> - lorem -</p>
          {/*        Link Button to differnt page, tried using LINK from react-router.. constant erros   */}
          <a href="/">
            <button className="btn">PURCHASE NOW</button>
          </a>
        </div>
        <div className="card">
          <h4> Silver </h4>
          <span className="bar"></span>
          <p className="btc"> $5 Monthly </p>
          <p> - Lifetime -</p>
          <p> - Blah -</p>
          <p> - Blah -</p>
          {/*        Link Button to differnt page   */}
          <a href="/">
            <button className="btn">PURCHASE NOW</button>
          </a>
        </div>
        <div className="card">
          <h4>Gold</h4>
          <span className="bar"></span>
          <p className="btc"> $10 Monthly </p>
          <p> - Lifetime -</p>
          <p> - Blah -</p>
          <p> - Blah -</p>
          {/*        Link Button to differnt page   */}
          <a href="/">
            <button className="btn">PURCHASE NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
