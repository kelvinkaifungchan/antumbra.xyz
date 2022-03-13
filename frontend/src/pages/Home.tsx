import React from "react";
import { NavBar } from "../components/navbar";
import styles from "./Home.module.css";
import "./Home.module.css";
import Ticker from 'react-ticker'
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
      <div>
        <Ticker>
        {({ index }) => (
            <>
                <h1>This is the Headline of element #{index}!</h1>
            </>
        )}
        </Ticker>
      </div>
      {/* tags */}
      <div>

      </div>
      {/* articles */}
    </div>
  );
};
