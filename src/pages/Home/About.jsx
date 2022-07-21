import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="about" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          atque in eum maiores inventore nobis modi, esse voluptatem commodi,
          consequuntur impedit ad ipsam eius iusto quaerat aut. Rerum, sit
          libero.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
