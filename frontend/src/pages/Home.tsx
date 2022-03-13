import React from "react";
import { NavBar } from "../components/navbar";
import styles from "./Home.module.css";
import "./Home.module.css";
import Ticker from "react-ticker";
import { Chip } from "@mui/material";

const tagList = [
  "Infrastucture",
  "Memes",
  "Architecture",
  "Others",
  "Others",
  "Architecture",
];
export const Home = () => {
  return (
    <div>
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
      {/* tags */}
      <div className={styles.tags}>
        {tagList.map((tagItem, index) => {
          return <Chip label={tagItem} variant="outlined" sx={{color:'#FF5C00', border:'1px solid #FF5C00'}} />;
        })}
      </div>
      {/* articles */}
    </div>
  );
};
