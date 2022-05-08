import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HorizontalLine } from "./horizontalLine";
import { Chip } from "@mui/material";
import styles from './tagBar.module.css';
import { createTheme } from '@mui/material/styles';

interface chipControlUnit {
  chipName: string,
  isOpen: boolean
}

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
  const [chipControl, setChipControl] = useState<any>(null);
  const [switcher, flipSwitcher] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>, tagItem: string, isRed: boolean) => {
    console.log(tagItem)
    console.log(event)
    const replaceChip = [
      {
        chipName:tagItem,
        isRed: !isRed
      }
    ]
    const shallowChipControl = chipControl;
    const targetTag = shallowChipControl.map((chips:any) => replaceChip.find((chip:any) => chip.chipName == chips.chipName)||chips)
    setChipControl(targetTag);
    flipSwitcher(!switcher);
  };

  useEffect(()=>{
    const genreTagsMap = genreTags.map(element => {
      return {
        chipName: element,
        isRed: false
      }
    });
    const topicTagsMap = topicTags.map(element => {
      return {
        chipName: element,
        isRed: false
      }
    });
    const completeTagsMap = [...genreTagsMap, ...topicTagsMap];
    console.log(completeTagsMap)
    setChipControl(completeTagsMap);
  },[])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("event listener")
      setScroll(window.scrollY > 40);
    })
  }, []);
  console.log(chipControl)
    return (
    <div className={scroll ? `${styles.sticky} ${styles.tagBar}` : `relative ${styles.tagBar}`}>
        <div style={ scroll ? {opacity:"0"} : {opacity:"1"}}>
          <HorizontalLine />
        </div>
        <div className="px-3" >
            {chipControl?genreTags.map((tagItem, index) => {
              return (
                <Chip 
                key={index} 
                label={tagItem} 
                variant="filled" 
                sx={{ color: "#00021A", bgcolor:chipControl[index]['isRed']?'#ff3a3a':'#ffffff', mr: 2 }} 
                onClick={(e)=>handleClick(e, tagItem, chipControl[index]['isRed'])} />);
            }):null}
        </div>
        <div>
          <HorizontalLine />
        </div>
        <div className={`px-3 ${styles.scroll}`} >
            {chipControl?topicTags.map((tagItem, index) => {
              return (
                <Chip 
                key={index} 
                label={tagItem} 
                variant="filled"
                sx={{ color: "#00021A", bgcolor: chipControl[index+genreTags.length]['isRed']?'#ff3a3a':'#ffffff', mr: 2 }} 
                onClick={(e)=>handleClick(e, tagItem, chipControl[index+genreTags.length]['isRed'])} />
              );
              }):null}
        </div>
        <div style={ scroll ? {opacity:"0"} : {opacity:"1"}}>
          <HorizontalLine />
        </div>
    </div>

    )
    }