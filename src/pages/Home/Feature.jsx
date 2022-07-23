import React from "react";
import FeatureBox from "./FeatureBox";
import featureImage1 from "../../assets/images/feature_1.png";
import featureImage2 from "../../assets/images/feature_2.png";
import featureImage3 from "../../assets/images/feature_3.png";

function Feature() {
  return (
    <div id="features" className="back-color">
      <div className="a-container">
        <FeatureBox image={featureImage1} title="DEVISE CARD 1"/>
        <FeatureBox image={featureImage2} title="DEVISE CARD 2"/>
        <FeatureBox image={featureImage3} title="DEVISE CARD 3"/>
      </div>
    </div>
  );
}

export default Feature;
