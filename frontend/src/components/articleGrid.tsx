import styles from './articleGrid.module.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { HorizontalLine } from "./horizontalLine";
import { Chip } from "@mui/material";

interface Tag {
    id: number;
    tag: string
  }

interface Contributor {
id: number;
name: string;
bio: string;
}

interface Card {
title: string,
heroImage: string,
subtitle: string,
contributors: Array<Contributor>
    }

interface ArticleModule {
    id: number,
    type: string,
    contributors: Array<Contributor>,
    title: string,
    subtitle: string,
    heroImage: string,
    tags: Array<Tag>,
    }

const genreTags = [
    "Essay",
    "Photography",
    "Film",
    "Interviews",
    "Art",
    ];
    
const topicTags = [
    "Infrastucture",
    "Architecture",
    "Tech",
    "Anthropocene",
    "Surveillance",
    "Archives",
    "NFTs",
    "Computation",
    "Earth Systems",
    "Robotics",
    "Growth",
    "Urbanisation",
    "Data",
    "Museums",
];

var selectedTags = ["Tech", "Essay"]

export const ArticleGrid =({articles} : {articles:ArticleModule[]}) => {
    const [scroll, setScroll] = useState(false);
    const [articleList, setArticleList] = useState<ArticleModule[] | null>(null);
    const [filter, setFilterList] = useState([])
    useEffect(() => {
        var filter = articles.filter(function (article) {
            return article.tags.some(function(tag) {
                return selectedTags.indexOf(tag.tag) > -1;
            })
        })
        setArticleList(filter)
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 40);
          })
    }, [])

    let navigate = useNavigate();
    const handleNav = (e: any, id: number, type:string) => {
        navigate(`/${type}/${id}`);
        }
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        return
        };

    return (
        <>
        <div className={scroll ? `${styles.sticky} ${styles.tagBar}` : `relative ${styles.tagBar}`}>
        <div style={ scroll ? {opacity:"0"} : {opacity:"1"}}>
          <HorizontalLine />
        </div>
        <div className="px-3">
            {genreTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="filled" sx={{ color: "#00021A", bgcolor:"#FFFFFFFF", mr: 2 }} onClick={handleClick} />);
            })}
        </div>
        <div>
          <HorizontalLine />
        </div>
        <div className={`px-3 ${styles.scroll}`}>
            {topicTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="filled"
                sx={{ color: "#00021A", bgcolor:"#FFFFFF", mr: 2 }} onClick={handleClick} />
              );
              })}
        </div>
        <div style={ scroll ? {opacity:"0"} : {opacity:"1"}}>
          <HorizontalLine />
        </div>
    </div>
        <div className="row px-3">
            {articleList ? articleList.map((item, index) => {
                return (<div key={index} onClick={(e)=>{handleNav(e, item.id, item.type)}} className="col-lg-3 col-md-6 col-xs-12 py-3" style={{width:"100%", height:"auto", float:"left"}}>
                <div className={`${styles.module}`} style={{height: "100%"}}>
                    <div className={styles.card} style={{zIndex:"1"}}>
                        <img className='w-100' style={{borderRadius:"20px"}} src={item.heroImage} />
                    </div>
                    <div className="pt-2" style={{zIndex:"-1"}}>
                        <div style={{fontSize:"3rem", lineHeight:"3.5rem"}}>
                            {item.title}<br/>
                        </div>
                        <div className="pb-2" style={{fontSize: '1.2rem'}}>
                            {item.contributors ? item.contributors.map((contributor, index) => {
                                return(
                                    <div key={index}>
                                        {contributor.name}<br />
                                    </div>
                                )
                            }):null}
                        </div>
                        <div style={{background:"none"}}>
                            {item.subtitle}..<br /><br />
                        </div>
                    </div>
                </div>
            </div>)
            }) : null}
        </div>
        </>
    )
}

export const ArticleModuleSmall: React.FC<Card> =({title, heroImage, contributors}) => {
    return (
        <div className={`${styles.module}`} style={{height: "100%", whiteSpace:"normal"}}>
            <div className={styles.card} style={{zIndex:"1"}}>
                <img className='w-100' style={{borderRadius:"20px"}} src={heroImage} />
            </div>
            <div className="pt-2" style={{zIndex:"-1"}}>
                <div className='w-100' style={{fontSize:"2rem", lineHeight:"2rem"}}>
                    {title}<br/>
                </div>
                <div className="pb-2" style={{fontSize: '1.2rem'}}>
                    {contributors?contributors.map((contributor, index) => {
                        return(
                            <div key={index}>
                                {contributor.name} <br />
                            </div>
                        )
                    }):null}
                </div>
            </div>
        </div>
    )
}