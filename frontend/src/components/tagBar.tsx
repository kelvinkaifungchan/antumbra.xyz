import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HorizontalLine } from "./horizontalLine";
import { Chip } from "@mui/material";
import styles from './tagBar.module.css'

const genreTags = [
    "Essay",
    "Photography",
    "Film",
    "Interviews",
    "Art",
    ];
    
const topicTags = [
    "Infrastucture",
    "Architecture",
    "Tech",
    "Anthropocene",
    "Surveillance",
    "Archives",
    "NFTs",
    "Computation",
    "Earth Systems",
    "Robotics",
    "Growth",
    "Urbanisation",
    "Data",
    "Museums",
];

export const TagBar = () => {
  const [scroll, setScroll] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    })
  }, []);

    return (
    <div className={scroll ? `${styles.sticky}` : "relative"} style={ scroll ? {backgroundColor:"#fcf603FF", transition:"0.5s"} : {backgroundColor:"#ffffff00", transition:"0.5s"}}>
        <div style={ scroll ? {opacity:"0"} : {opacity:"1"}}>
          <HorizontalLine />
        </div>
        <div className="px-3">
            {genreTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="filled" sx={{ color: "#FF5C00", bgcolor:"#FFFFFFFF", mr: 2 }} onClick={handleClick} />);
            })}
            {/* <div style={{float:"right"}}>
                <Button sx={{ color: "#FF5C00", bgcolor:"#FFFFFFFF", borderRadius:"20px"}}>
                  III
                </Button>
            </div> */}
        </div>
        <div>
          <HorizontalLine />
        </div>
        <div className="px-3">
            {topicTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="filled"
                sx={scroll ? { color: "#FF5C00", bgcolor:"#FFFFFF", mr: 2 } : { color: "#FF5C00", bgcolor:"#FFFFFF", mr: 2 }} onClick={handleClick} />
              );
              })}
        </div>
        <div style={ scroll ? {opacity:"0"} : {opacity:"1"}}>
          <HorizontalLine />
        </div>
    </div>

    )
    }