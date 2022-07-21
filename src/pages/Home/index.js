import React from "react";
import Header from "./Header";
import Feature from "./Feature";
import About from "./About";
import Contact from "./Contact";
import aboutImage from "../../assets/images/about.png";
import aboutImage2 from "../../assets/images/download.png";

export default function Home() {
  return (
    <>
      <Header />
      <Feature />
      <About image={aboutImage} title="Blah Blah Blah" button="Add a post" />
      <About image={aboutImage2} title="Blah Blah Blah" button="Add a post" />
      <Contact/>
    </>
  );
}
