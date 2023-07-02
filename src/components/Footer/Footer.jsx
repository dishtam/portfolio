import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {SiCodeforces, SiLeetcode} from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
        Hi, I'm Rohit, a passionate individual who finds joy in the realms of coding and robotics, 
        exploring the limitless possibilities they offer.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/dishtam/" target="black">
          <BsGithub />
        </a>
        <a href="https://codeforces.com/profile/rohhiiiit" target="black">
          <SiCodeforces />
        </a>
        <a href="https://leetcode.com/rohhiiiit/" target="black">
          <SiLeetcode />
        </a>
        <a href="https://www.linkedin.com/in/rohit-roy-nits/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;