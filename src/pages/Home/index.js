import React from "react";
import Header from "./Header";
import Feature from "./Feature";
import About from "./About";
import Contact from "./Contact";

import aboutImage from "../../assets/images/home-page-cartoon-graphic-02.png";
import aboutImage2 from "../../assets/images/home-page-cartoon-graphic-03.png";




export default function Home() {

  return (
    <>
      <Header />
      <Feature />
      <About image={aboutImage} title="Share Your Idea" button="START A PROJECT" />
      <About image={aboutImage2} title="Team Up With Others" button="JOIN A PROJECT" />
      <Contact/>
    </>
  );
}

    
      

