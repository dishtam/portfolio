import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Youtube.css";

const Youtube = ({
  url = "",
  title = "Title Here",
  image,
  isAdmin = false,
}) => {
  return (
    <div className="youtubeCard">
      <a href={url} target="blank">
        <img src={image} alt="Club Activities" />
        <Typography>{title}</Typography>
      </a>
      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
        >
          <FaTrash />
        </Button>
      )}
    </div>
  )
}

export default Youtube
