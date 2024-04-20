import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function allEmployees({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <p key={index}>
          {item.firstName}
          {item.skills.map((skill, skillIndex) => (
            <p key={skillIndex}>{skill}</p>
          ))}
        </p>
      ))}
    </>
  );
}
