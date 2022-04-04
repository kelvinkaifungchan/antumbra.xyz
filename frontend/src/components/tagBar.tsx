import React from "react";
import { Link } from "react-router-dom";
import { HorizontalLine } from "./horizontalLine";
import { Chip } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const genreTags = [
    "Essays",
    "Photography",
    "Film",
    "Interviews",
    "Art",
    ];
    
    const topicTags = [
    "Infrastucture",
    "Architecture",
    "Technology",
    "Photography",
    "Anthropocene",
    "Surveillance",
    "Archives",
    "Algorithms",
    "Computation",
    "Earth Systems",
    "Robotics",
    "Growth",
    "Urbanisation",
    ];

export const TagBar = () => {
    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
      const open = Boolean(anchorEl);
      const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
        setAnchorEl(null);
        };

    return (
    <div>
        <div className="px-3">
            {genreTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="outlined" sx={{ color: "#FF5C00", border: "1px solid #FF5C00", mr: 2 }} onClick={handleClick} />);
            })}
            <div style={{float:"right"}}>
                <Button aria-controls={open ? 'demo-positioned-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} sx={{ color: "#FF5C00", border: "1px solid #FF5C00", borderRadius:"20px"}} onClick={handleClick}>
                  III
                </Button>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{vertical: 'top', horizontal: 'left'}} transformOrigin={{vertical: 'top', horizontal: 'left'}}>
                  <MenuItem>
                    <Link className="px-3" to="/info">Information</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link className="px-3" to="/archive">Archive</Link>
                  </MenuItem>
                </Menu>
            </div>
        </div>
        <HorizontalLine />
        <div className="px-3">
            {topicTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="outlined"
                sx={{ color: "#FF5C00", border: "1px solid #FF5C00", mr: 2 }} onClick={handleClick} />
              );
              })}
        </div>
    </div>

    )
    }