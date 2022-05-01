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
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    return
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("event listener")
      setScroll(window.scrollY > 40);
    })
  }, []);

    return (
    <div className={scroll ? `${styles.sticky} ${styles.tagBar}` : `relative ${styles.tagBar}`}>
        <div style={ scroll ? {opacity:"0"} : {opacity:"1"}}>
          <HorizontalLine />
        </div>
        <div className="px-3">
            {genreTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="filled" sx={{ color: "#00021A", bgcolor:"#FFFFFFFF", mr: 2 }} onClick={handleClick} />);
            })}
        </div>
        <div>
          <HorizontalLine />
        </div>
        <div className={`px-3 ${styles.scroll}`}>
            {topicTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="filled"
                sx={{ color: "#00021A", bgcolor:"#FFFFFF", mr: 2 }} onClick={handleClick} />
              );
              })}
        </div>
        <div style={ scroll ? {opacity:"0"} : {opacity:"1"}}>
          <HorizontalLine />
        </div>
    </div>

    )
    }