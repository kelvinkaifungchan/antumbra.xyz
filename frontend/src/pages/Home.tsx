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
  "Others",
  "Others",
  "Architecture",
];

const articleList = [
  "Colonial Infrastructures and Technosocial Networks",
  "Colonial Infrastructures and Technosocial Networks",
  "Colonial Infrastructures and Technosocial Networks",
  "Colonial Infrastructures and Technosocial Networks",
  "Colonial Infrastructures and Technosocial Networks",
  "Colonial Infrastructures and Technosocial Networks",
];

const imageLink = ``
export const Home = () => {
  return (
    <div className="container-fluid">
      {/* header */}
      <div className={`${styles.blur} ${styles.dflexCenter}`}>
        AARCHITECTURE
      </div>
      <div className={`${styles.header} ${styles.dflexCenter}`}>
        <h1>THE WARM WAR</h1>
      </div>
      <NavBar />
      {/* scroll bar ticker*/}
      <div className={styles.ticker}>
        <Ticker>
          {({ index }) => (
            <>
              <h1>This is the Headline of element #{index}!</h1>
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
                  <div key={index} className={`${styles.articleGrid} col col-sm-6 mb-3`}>
                    <ArticleModule content={item} img={img}/>
                  </div>
                  )
          })}
        </div>
      </div>
    </div>
  );
};
