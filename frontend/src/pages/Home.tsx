import React, { useEffect, useState } from "react";
import { NavBar } from "../components/navbar";
import styles from "./Home.module.css";
import "./Home.module.css";
import Ticker from "react-ticker";
import { Chip } from "@mui/material";
import { HorizontalLine } from "../components/horizontalLine";
import { ArticleModule } from "../components/articleModule";
import { useNavigate } from "react-router-dom";
import axios, {AxiosResponse} from 'axios';

const tagList = [
  "Infrastucture",
  "Memes",
  "Architecture",
  "Technology",
  "Photography",
  "Anthropocene",
  "Surveillance",
];

interface Article {
  id: number,
  type: string,
  author: string,
  title: string,
  subtitle: string,
  moduleType: string,
  heroImage: string,
  datePublished: string,
  tags: { id: number; tag: string },
  attachments: { attachmentLink: string, attachmentType: string }
}

interface ArticleList extends Array<Article>{}

export const Home = () => {
let navigate = useNavigate();
const [articleList, setArticleList] = useState<ArticleList | null>(null);

useEffect(()=>{
  axios.get(`http://localhost:8080/api/aarchitecture`)
  .then((response: AxiosResponse)=>{
    setArticleList(response.data)
  })
},[])

const handleNav = (e: any, id: number, type: string) => {
  navigate(`/${type}/${id}`);
}
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
      <HorizontalLine />
      {/* scroll bar ticker*/}
      <div className={styles.ticker}>
        <Ticker mode="chain" speed={5}>
        {({ index }) => (
            <>
                <div style={{paddingLeft:'12px', paddingRight:'12px'}}>{articleList && articleList.length > 0 ? articleList[index%articleList.length].title : null}</div>
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
      {/* articles */}
      <div className="container m-0" style={{maxWidth:'100%'}}>
        <div className="row">
          {articleList && articleList.length > 0 ? articleList.map((item, index)=>{
              return (
                  <div key={index} onClick={(e)=>{handleNav(e, item.id, item.type)}} className={`${styles.articleGrid} col col-sm-6 py-4`} style={{height: "60vh"}}>
                    <ArticleModule contributors={item.author} title={item.title} heroImage={item.heroImage} subtitle={item.subtitle}/>
                  </div>
                  )
          }):null}
        </div>
      </div>
    </div>
  );
};
