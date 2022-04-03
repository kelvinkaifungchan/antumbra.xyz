import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/navbar";
import { HorizontalLine } from "../components/horizontalLine";
import { ArticleModule } from "../components/articleModule";
import { Footer } from "../components/footer";
import Ticker from "react-ticker";
import { Chip } from "@mui/material";
import styles from "./Home.module.css";
import "./Home.module.css";
import axios, {AxiosResponse} from 'axios';

const genreTags = [
  "Essays",
  "Photography",
  "Film",
  "Interviews",
  "Art",
  ];

const topicTags = [
"Infrastucture",
"Memes",
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

    const handleClick = () => {
    return
    }

    const handleNav = (e: any, id: number, type: string) => {
    navigate(`/${type}/${id}`);
    }
    return (
    <div className="container-fluid">
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
      <div className={styles.ticker}>
        {/* <Ticker mode="chain" speed={5}>
          {({ index }) => (
          <>
            <div style={{paddingLeft:'12px', paddingRight:'12px'}}>{articleList && articleList.length > 0 ?
              articleList[index%articleList.length].title : null}</div>
          </>
          )}
        </Ticker> */}
      </div>
      
      {/* <HorizontalLine /> */}

      <NavBar />
      
      <HorizontalLine />
      {/* tags */}
      <div className={styles.tags}>
        {genreTags.map((tagItem, index) => {
        return (
        <Chip key={index} label={tagItem} variant="outlined"
          sx={{ color: "#FF5C00", border: "1px solid #FF5C00", mr: 2 }} onClick={handleClick} />
        );
        })}
      </div>
      <HorizontalLine />
      <div className={styles.tags}>
        {topicTags.map((tagItem, index) => {
        return (
        <Chip key={index} label={tagItem} variant="outlined"
          sx={{ color: "#FF5C00", border: "1px solid #FF5C00", mr: 2 }} onClick={handleClick} />
        );
        })}
      </div>
      <HorizontalLine />
      {/* articles */}
        <div className="row">
          {articleList && articleList.length > 0 ? articleList.map((item, index)=>{
          return (
          <div key={index} onClick={(e)=>{handleNav(e, item.id, item.type)}} className={`${styles.articleGrid}
            col-3 py-2`} style={{width:"100%", height:"auto", float:"left"}}>
            <ArticleModule contributors={item.author} title={item.title} heroImage={item.heroImage}
              subtitle={item.subtitle} />
          </div>
          )
          }):null}

        </div>
      {/*
      <HorizontalLine /> */}
      <Footer />
    </div>
    );
    };