
import React from "react";
import "./aboutUs.css";
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
          <h1>The What, The Why, and The Who</h1>
        </div>

        <div className="what">
          <h2>The What</h2>
          <p className="what-text">
            DEVise was founded on a simple principle: To facilitate the genesis
            of inspiration <br />
            Are there other tools and platforms out there? Yes, there are. Are
            any of them what we offer? No.
            <br />
            <p>What We Are</p>
            Here you will find a community of developers who are passionate
            about their craft, and who are willing to share their knowledge and
            skills.
            <br />
            There is no limit to the number of people who can join the DEVise
            community, and there is no limit to the number of projects that can
            be created. <br />
            Here you will find resources for inspiration, and for learning how
            to create a project. <br />
            You will find other projects who are looking for collaborators or
            partners more than someone to just take up one issue on their
            massive ToDo lists. <br />
            If you have a project you are looking to share or develop with
            others, you can find the resources and people here. <br />
            <p>What We Are Not</p>
            We are not facebook, although there is a strong social aspect to
            this community we professionals, students, teachers. <br />
            We are not GitHub, this is not a version control system or a code
            repository. It is a collaborative open source exchange. <br />
            We are not Fiverr, we did not start this community to become another
            freelance job board platform. We are not a company, we are a
            community. <br />
          </p>
        </div>
        <div className="why">
          <h2>The Why</h2>
          <p className="why-text">
            We founded DEVise to have an all-in-one platform for anyone who is
            looking for inspiration, help, or looking to collaborate on another
            project. <br />
            Inspiration should be easier to find. <br />
          </p>
        </div>

        <h2>Meet The Founders (The Who)</h2>

        <div className="founders">
          <div className="founderCard">
            <div className="FounderName">
              <h3>Founder 1</h3>
            </div>

            <div className="founderImg">
              <Avatar
                alt="Remy Sharp"
                src={roboAvatars1}
                sx={{ width: 150, height: 150 }}
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
                sx={{ width: 150, height: 150 }}
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
                sx={{ width: 150, height: 150 }}
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
                sx={{ width: 150, height: 150 }}
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
                sx={{ width: 150, height: 150 }}
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
        <div className="imageAttribution">
          <div className="attributionTile">
            <a
              href="https://iconscout.com/icons/linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin Icon
            </a>
            by:
            <a
              href="https://iconscout.com/contributors/jagathish"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jagathish Saravanan
            </a>
          </div>
          <div className="attributionTile">
            <a
              href="https://iconscout.com/icons/github"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Icon
            </a>
            by:
            <a href="https://iconscout.com/contributors/icon-mafia">
              Icon Mafia
            </a>{" "}
            on{" "}
            <a
              href="https://iconscout.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              IconScout
            </a>
          </div>
          <div className="attributionTile">
            <a
              href="https://iconscout.com/icons/man"
              target="_blank"
              rel="noopener noreferrer"
            >
              Man Icon
            </a>
            by:
            <a href="https://iconscout.com/contributors/chamedesign">
              Chamestudio
            </a>
            on
            <a
              href="https://iconscout.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              IconScout
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
