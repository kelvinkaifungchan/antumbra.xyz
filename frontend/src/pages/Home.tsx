import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/navbar";
import { HorizontalLine } from "../components/horizontalLine";
import { ArticleModule } from "../components/articleModule";
import { Footer } from "../components/footer";
import Ticker from "react-ticker";

import styles from "./Home.module.css";
import "./Home.module.css";
import axios, {AxiosResponse} from 'axios';
import { TagBar } from "../components/tagBar";

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

interface Article {
  id: number,
  type: string,
  contributors: Array<Contributor>,
  title: string,
  subtitle: string,
  heroImage: string,
  datePublished: string,
  tags: Array<Tag>,
  articleBlock: Array<ArticleBlock>
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

    const handleNav = (e: any, id: number) => {
    navigate(`/${id}`);
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
          <NavBar />
          <HorizontalLine />
          <TagBar />
          <HorizontalLine />
          {/* articles */}
          <div className="row px-3">
            {articleList && articleList.length > 0 ? articleList.map((item, index)=>{
            return (
            <div key={index} onClick={(e)=>{handleNav(e, item.id)}} className="col-4 py-3" style={{width:"100%", height:"auto", float:"left"}}>
              <ArticleModule contributors={item.contributors} title={item.title} heroImage={item.heroImage}
                subtitle={item.subtitle} />
            </div>
            )
            }):null}

          </div>
          <Footer />
        </div>
        );
        };