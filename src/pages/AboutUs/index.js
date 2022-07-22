import { React } from "react";
import aboutUs from "./aboutUs.css";
import { Navbar } from "./Navbar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  roboAvatars1,
  roboAvatars2,
  roboAvatars3,
  roboAvatars4,
  roboAvatars5,
  roboAvatars6,
} from "./images";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src={roboAvatars1} />
        <Avatar alt="Travis Howard" src={roboAvatars2} />
        <Avatar alt="Cindy Baker" src={roboAvatars3} />
      </Stack>
      <div className="container">
        <div className="banner">
          <h1>About Us</h1>
        </div>
        <div className="mission">
          <h2>Mission</h2>
        </div>
        <div className="founders">
          <h2>Meet The Founders</h2>
          <div className="founderCard">
            <div className="FounderName">
              <h3>John Doe</h3>
            </div>

            <div className="founderImg">Image of founder goes here. </div>

            <div className="founderInfo">
              <p>Info goes here, maybe a very brief summary of each founder.</p>
            </div>

            <div className="founderLinks">
              <a href="#">LinkedIn</a>
              <a href="#">Github</a>
              <a href="#">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
