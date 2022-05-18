import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, {AxiosResponse} from 'axios';
import { NavBar } from "../components/navbar";
import { ArticleGrid } from "../components/articleGrid";
import { Footer } from "../components/footer";
import Ticker from "react-ticker";
import styles from "./Home.module.css";
import "./Home.module.css";
import { Hamburger } from "../components/hamburger";
import { Link } from "react-router-dom";
import { ArticleModule, Tag, Contributor } from "../types"

export const Home = () => {
const [articleList, setArticleList] = useState<ArticleModule[] | null>(null);
const [scroll, setScroll] = useState(false);

  useEffect(()=>{
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 40);
  })
  axios.get(`http://api.antumbra.xyz/api/aarchitecture`)
  .then((response: AxiosResponse)=>{
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
          <div style={{paddingLeft:'25px', paddingRight:'25px'}}>
            <Link to="/">
              {articleList && articleList.length > 0 ? articleList[index%articleList.length].title : null}
            </Link>
          </div>
        </>
        )}
      </Ticker>
    </div>
    <Footer />
  </div> 
  );
};