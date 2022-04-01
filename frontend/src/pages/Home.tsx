import React from "react";
import { NavBar } from "../components/navbar";
import styles from "./Home.module.css";
import "./Home.module.css";
import img from "../assets/highway.jpg";
import Ticker from "react-ticker";
import { Chip } from "@mui/material";
import { HorizontalLine } from "../components/horizontalLine";
import { ArticleModule } from "../components/articleModule";

const tagList = [
  "Infrastucture",
  "Memes",
  "Architecture",
  "Technology",
  "Photography",
  "Anthropocene",
  "Surveillance",
];

const articleList = [
  {
  type: "text",
  title: "Colonial Infrastructures and Technosocial Networks",
  contributors: ["Tiziana Terranova", "Ravi Sundaram"],
  subtitle: "The techno-social hypothesis concerns the idea that, over the last three decades or so, the technological and the social have become thoroughly enmeshed with each other. It also poses the question of how this new inseparability should be understood.",
  heroImage: "https://images.e-flux-systems.com/highway.jpg,1920"
}, {
  type: "video",
  title: "AS Crust",
  contributors: ["Amnesia Scanner"],
  subtitle: "Last month, the Berlin duo Amnesia Scanner connected with Bill Kouligas and Harm Van Den Dorpel for 'Lexachast' which paired a track with a collection of visuals sourced from the internet. The images change every time you watch.",
  heroImage: "https://i.ytimg.com/vi/xjytGvXdgqA/maxresdefault.jpg"
}, {
  type: "photography",
  title: "Gold Standard",
  contributors: ["Bas Princen"],
  subtitle: "Photographer Bas Princen has published a new book looking at the visual and personal backstory to one particular photograph, seen above, “Ringroad (Houston),” from 2005. Called The Construction of an Image, the book is also the final publication from Bedford Press.",
  heroImage: "https://i0.wp.com/bldgblog.com/wp-content/uploads/2017/02/RingRoadHouston.jpg?w=840&ssl=1"
},
];

export const Home = () => {
  return (
    <div className="container-fluid">
      {/* header */}
      {/* <div className={`${styles.blur} ${styles.dflexCenter}`}>
        AARCHITECTURE
      </div>
      <div className={`${styles.header} ${styles.dflexCenter}`}>
        <h1>THE WARM WAR</h1>
      </div> */}
      <NavBar />
      <HorizontalLine />
      {/* scroll bar ticker*/}
      <div className={styles.ticker}>
        <Ticker>
          {({index}) => (
            <>
              <div style={{fontSize:"1.2rem"}} className="px-4">This is the Headline of element #{index}! </div>
            </>
          )}
        </Ticker>
      </div>
      <HorizontalLine />
      {/* tags */}
      <div className={styles.tags}>
        {tagList.map((tagItem, index) => {
          return (
            <Chip
            key={index}
              label={tagItem}
              variant="outlined"
              sx={{ color: "#FF5C00", border: "1px solid #FF5C00", mr: 2 }}
            />
          );
        })}
      </div>
      <HorizontalLine />
      {/* articles */}
      <div className="container m-0" style={{maxWidth:'100%'}}>
        <div className="row">
          {articleList.map((item, index)=>{
              return (
                  <div key={index} className={`${styles.articleGrid} col col-sm-6 py-4`} style={{height: "60vh"}}>
                    <ArticleModule contributors={item.contributors} title={item.title} heroImage={item.heroImage} subtitle={item.subtitle}/>
                  </div>
                  )
          })}
        </div>
      </div>
    </div>
  );
};
