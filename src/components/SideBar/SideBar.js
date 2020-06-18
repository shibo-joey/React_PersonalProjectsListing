import React from "react";
import "./SideBar.css";
import { SocialIcon } from "react-social-icons";

const SideBar = () => {
  return (
    <>
      <div className="SideBar">
        <div className="IconHolder">
          <SocialIcon
            url="https://www.linkedin.com/in/shibo-yang-912134111/"
            fgColor="white"
            bgColor="#1e88e5"
          />
        </div>
        <div className="IconHolder">
          <SocialIcon
            url="https://github.com/shibo-joey"
            network="github"
            fgColor="white"
            bgColor="#4e545a"
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
