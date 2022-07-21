import React from "react";

function FeatureBox(props) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={props.image} alt="imga" />
      </div>
      <div className="s-b-text">
        <h2> {props.title} </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          exercitationem hic recusandae aut. Deleniti illum unde tenetur, nihil
          consectetur ab culpa incidunt quo, ullam nesciunt accusamus eligendi
          dolorem placeat quaerat!
        </p>
      </div>
    </div>
  );
}

export default FeatureBox;
