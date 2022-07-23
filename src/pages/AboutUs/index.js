import React from "react";
import aboutUs from "./aboutUs.css";
import Avatar from "@mui/material/Avatar";
import roboAvatars1 from "./images/roboAvatars1.png";
import roboAvatars2 from "./images/roboAvatars2.png";
import roboAvatars3 from "./images/roboAvatars3.png";
import roboAvatars4 from "./images/roboAvatars4.png";
import roboAvatars5 from "./images/roboAvatars5.png";
import linkedinColor from "./images/linkedinColor.svg";
import github1 from "./images/github1.svg";
import gearBrain from "./images/gearBrain.svg";

export default function AboutUs() {
  return (
    <>
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
              <h3>Founder 1</h3>
            </div>

            <div className="founderImg">
              <Avatar
                alt="Remy Sharp"
                src={roboAvatars1}
                sx={{ width: 56, height: 56 }}
              />
            </div>

            <div className="founderInfo">
              <p>Info goes here, maybe a very brief summary of each founder.</p>
            </div>

            <div className="founderLinks">
              <a href="#">
                <Avatar alt="LinkedIn" src={linkedinColor} />
              </a>
              <a href="#">
                <Avatar alt="Github" src={github1} />
              </a>
              <a href="#">
                <Avatar alt="Portfolio" src={gearBrain} />
              </a>
            </div>
          </div>

          <div className="founderCard">
            <div className="FounderName">
              <h3>Founder 2</h3>
            </div>

            <div className="founderImg">
              <Avatar
                alt="Remy Sharp"
                src={roboAvatars2}
                sx={{ width: 56, height: 56 }}
              />
            </div>

            <div className="founderInfo">
              <p>Info goes here, maybe a very brief summary of each founder.</p>
            </div>

            <div className="founderLinks">
              <a href="#">
                <Avatar alt="LinkedIn" src={linkedinColor} />
              </a>
              <a href="#">
                <Avatar alt="Github" src={github1} />
              </a>
              <a href="#">
                <Avatar alt="Portfolio" src={gearBrain} />
              </a>
            </div>
          </div>

          <div className="founderCard">
            <div className="FounderName">
              <h3>Founder 3</h3>
            </div>

            <div className="founderImg">
              <Avatar
                alt="Remy Sharp"
                src={roboAvatars3}
                sx={{ width: 56, height: 56 }}
              />
            </div>

            <div className="founderInfo">
              <p>Info goes here, maybe a very brief summary of each founder.</p>
            </div>

            <div className="founderLinks">
              <a href="#">
                <Avatar alt="LinkedIn" src={linkedinColor} />
              </a>
              <a href="#">
                <Avatar alt="Github" src={github1} />
              </a>
              <a href="#">
                <Avatar alt="Portfolio" src={gearBrain} />
              </a>
            </div>
          </div>

          <div className="founderCard">
            <div className="FounderName">
              <h3>Founder 4</h3>
            </div>

            <div className="founderImg">
              <Avatar
                alt="Remy Sharp"
                src={roboAvatars4}
                sx={{ width: 56, height: 56 }}
              />
            </div>

            <div className="founderInfo">
              <p>Info goes here, maybe a very brief summary of each founder.</p>
            </div>

            <div className="founderLinks">
              <a href="#">
                <Avatar alt="LinkedIn" src={linkedinColor} />
              </a>
              <a href="#">
                <Avatar alt="Github" src={github1} />
              </a>
              <a href="#">
                <Avatar alt="Portfolio" src={gearBrain} />
              </a>
            </div>
          </div>

          <div className="founderCard">
            <div className="FounderName">
              <h3>Founder 5</h3>
            </div>

            <div className="founderImg">
              <Avatar
                alt="Remy Sharp"
                src={roboAvatars5}
                sx={{ width: 56, height: 56 }}
              />
            </div>

            <div className="founderInfo">
              <p>Info goes here, maybe a very brief summary of each founder.</p>
            </div>

            <div className="founderLinks">
              <a href="#">
                <Avatar alt="LinkedIn" src={linkedinColor} />
              </a>
              <a href="#">
                <Avatar alt="Github" src={github1} />
              </a>
              <a href="#">
                <Avatar alt="Portfolio" src={gearBrain} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="imageAttributation">
          <a href="https://iconscout.com/icons/linkedin" target="_blank">
            Linkedin Icon
          </a>{" "}
          by{" "}
          <a
            href="https://iconscout.com/contributors/jagathish"
            target="_blank"
          >
            Jagathish Saravanan
          </a>
          <a href="https://iconscout.com/icons/github" target="_blank">
            Github Icon
          </a>{" "}
          by{" "}
          <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>{" "}
          on <a href="https://iconscout.com">IconScout</a>
          <a href="https://iconscout.com/icons/man" target="_blank">
            Man Icon
          </a>{" "}
          by{" "}
          <a href="https://iconscout.com/contributors/chamedesign">
            Chamestudio
          </a>{" "}
          on <a href="https://iconscout.com">IconScout</a>
        </div>
      </div>
    </>
  );
}
