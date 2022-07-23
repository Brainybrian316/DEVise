import React from "react";
import aboutUs from "./aboutUs.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function AboutUs() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="/assets/images/roboAvatars1.png" />
        <Avatar alt="Travis Howard" src="/assets/images/roboAvatars2.png" />
        <Avatar
          alt="Cindy Baker"
          src="assets/images/avatars/roboAvatars3.png"
        />
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
