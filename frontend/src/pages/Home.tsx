import React, { useEffect, useState } from "react";
import axios, {AxiosResponse} from 'axios';
import { NavBar } from "../components/navbar";
import { ArticleGrid } from "../components/articleGrid";
import { Footer } from "../components/footer";
import Ticker from "react-ticker";
import styles from "./Home.module.css";
import "./Home.module.css";
import { Hamburger } from "../components/hamburger";
import { Link } from "react-router-dom";
import { ArticleModule } from "../types"

export const Home = () => {
const [articleList, setArticleList] = useState<ArticleModule[] | null>(null);
const [scroll, setScroll] = useState(false);

  useEffect(()=>{
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 40);
  })
  axios.get(`https://penumbra.lol/api/aarchitecture`)
  // axios.get(`http://localhost:8080/api/aarchitecture`)
  .then((response: AxiosResponse)=>{
    console.log(response.data)
  setArticleList(response.data)
  })
  },[])
  return (
  <div className={scroll ? `${styles.stick} container-fluid ${styles.home}` : `container-fluid ${styles.home}`}>
  <Hamburger />
    {/* header */}
    <div style={scroll ? {display:"none"} : {display:"inline"}}>
    <NavBar />
    </div>
    {/* articles */}
    {articleList ? <ArticleGrid articles={articleList} /> : null}
    <div className={`${styles.ticker} ${styles.fontSubtitle}`}>
      <Ticker mode="chain" speed={5}>
        {({ index }) => (
        <>
          {/* <div style={{paddingLeft:'25px', paddingRight:'25px'}}>
            <Link to={articleList ? `/${articleList[index%articleList.length].type}/${articleList[index%articleList.length].id}` : "/"}>
              {articleList && articleList.length > 0 ? articleList[index%articleList.length].title : null}
            </Link>
          </div> */}
          <div style={{color: "#00021A", marginLeft:"2rem"}}>
            Join us on <a href="https://discord.gg/prUkA94H" target="_blank">discord</a> to stay up to date with events and announcements.
          </div>
        </>
        )}
      </Ticker>
    </div>
    <Footer />
  </div> 
  );
};