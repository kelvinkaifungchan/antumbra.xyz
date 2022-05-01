import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, {AxiosResponse} from 'axios';
import { NavBar } from "../components/navbar";
import { HorizontalLine } from "../components/horizontalLine";
import { TagBar } from "../components/tagBar";
import { ArticleModule } from "../components/articleModule";
import { Footer } from "../components/footer";
import Ticker from "react-ticker";
import styles from "./Home.module.css";
import "./Home.module.css";
import { display } from "@mui/system";
import { Hamburger } from "../components/hamburger";
import { Link } from "react-router-dom";

interface Tag {
  id: number;
  tag: string
}

interface ArticleBlock {
  id: number;
  article_id: number;
  type: string;
  attachmentLink?: string;
  attachmentCaption?: string;
  text?: string;
}

export interface Contributor {
  id: number;
  name: string;
  bio: string;
}

export interface Article {
  id: number,
  type: string,
  contributors: Array<Contributor>,
  title: string,
  subtitle: string,
  heroImage: string,
  pdf: string,
  datePublished: string,
  tags: Array<Tag>,
  articleBlock: Array<ArticleBlock>
}

export const Test = () => {
  return (
    <div>
      HI THERE
    </div>
  )
}

  export const Home = () => {
  let navigate = useNavigate();
  const [articleList, setArticleList] = useState<Article[] | null>(null);
  const [scroll, setScroll] = useState(false);
  const [modalControl, setModalControl] = useState(false);

    useEffect(()=>{
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    })
    axios.get(`http://localhost:8080/api/aarchitecture`)
    .then((response: AxiosResponse)=>{
    setArticleList(response.data)
    })
    },[])

    const handleNav = (e: any, id: number, type:string) => {
    navigate(`/${type}/${id}`);
    }
        return (
        <div className={scroll ? `${styles.stick} container-fluid ${styles.home}` : `container-fluid home ${styles.home}`}>
        <Hamburger />
        <div className={`${styles.title}`} style={ scroll ? {opacity:"0.3"} : {opacity:"0"}}>
          THE WARM WAR
        </div>
          {/* header */}
          {/* <div className={`${styles.banner}`}>
            <div className={`${styles.blur} ${styles.dflexCenter}`}>
              AARCHITECTURE
            </div>
            <div className={`${styles.header} ${styles.dflexCenter}`} style={{color:'#FF5C00'}}>
              <h1>THE WARM WAR</h1>
            </div>
          </div> */}
          {/*
          <HorizontalLine /> */}
          {/* scroll bar ticker*/}
          <div style={scroll ? {display:"none"} : {display:"inline"}}>
            <NavBar />
          </div>
          <TagBar />

          {/* articles */}
          <div className="row px-3">
            {articleList && articleList.length > 0 ? articleList.map((item, index)=>{
            return (
            <div key={index} onClick={(e)=>{handleNav(e, item.id, item.type)}} className="col-lg-3 col-sm-6 col-xs-12 py-3" style={{width:"100%", height:"auto", float:"left"}}>
              <ArticleModule contributors={item.contributors} title={item.title} heroImage={item.heroImage}
                subtitle={item.subtitle} />
            </div>
            )
            }):null}

          </div>
          <div className={styles.ticker}>
            <Ticker mode="chain" speed={5}>
              {({ index }) => (
              <>
                <div style={{paddingLeft:'50px', paddingRight:'50px'}}>
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