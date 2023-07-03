import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import rohit_image from "../../Images/rohit_image.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is a sample quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={rohit_image} alt="Rohit" className="aboutAvatar" />
          <Typography
            variant="h4"
            style={{
              margin: "1vmax 0",
              color: "black",
            }}
          >
            Rohit
          </Typography>
          <Typography>Frontend Developer</Typography>
          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            I have interests in CS algorithms and Robotics
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            This is decription
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
