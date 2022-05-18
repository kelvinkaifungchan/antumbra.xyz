import styles from './articleGrid.module.css'
import style from '../pages/Home.module.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { HorizontalLine } from "./horizontalLine";
import { Chip } from "@mui/material";
import { Card, ArticleModule, ChipControlUnit } from "../types"

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

export const ArticleGrid =({articles} : {articles:ArticleModule[]}) => {
    const [scroll, setScroll] = useState(false);
    const [articleList, setArticleList] = useState<ArticleModule[] | null>(null);
    const [chipControl, setChipControl] = useState<any>(null);

    useEffect(() => {
        setArticleList(articles)
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 40);
          })
        const genreTagsMap = genreTags.map(element => {
        return {
            chipName: element,
            isRed: false
        }
        });
        const topicTagsMap = topicTags.map(element => {
        return {
            chipName: element,
            isRed: false
        }
        });
        const completeTagsMap = [...genreTagsMap, ...topicTagsMap];
        setChipControl(completeTagsMap);
    }, [])

    let navigate = useNavigate();
    const handleNav = (e: any, id: number, type:string) => {
        navigate(`/${type}/${id}`);
    }
    
    const toggle = async (tagItem: string, isRed: boolean) => {
        const replaceChip = [
            {
              chipName:tagItem,
              isRed: !isRed
            }
          ]
          const shallowChipControl = chipControl;
          const targetTag = shallowChipControl.map((chips:any) => replaceChip.find((chip:any) => chip.chipName == chips.chipName)||chips)
          setChipControl(targetTag);
          var selected = targetTag.filter(function (item:any) {
              return item.isRed === true
          }).map((tag:ChipControlUnit) => {
              return tag.chipName
          })
        var filter = articles.filter(function (article) {
        return article.tags.some(function(tag) {
            if (selected.length > 0) {
                return selected.indexOf(tag.tag) > -1;
            }
            else {
                return articles
            }
        })
        })
        setArticleList(filter)
    }
    
    const handleClick = (event: React.MouseEvent<HTMLElement>, tagItem: string, isRed: boolean) => {
        toggle(tagItem, isRed).then(() => {
                const selected = chipControl.filter(function (item:any) {
                    return item.isRed === true
                })
                
            })
    };

    return (
        <>
        <div className={scroll ? `${styles.sticky} ${styles.tagBar}` : `relative ${styles.tagBar}`}>
        <div style={ scroll ? {opacity:"0"} : {opacity:"1"}}>
          <HorizontalLine />
        </div>
        <div className={`px-3 ${styles.scroll}`}>
            {chipControl ? genreTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="filled" sx={{ color: "#00021A", bgcolor:chipControl[index]['isRed']?'#FF5C00':'#ffffff', mr: 2 }} onClick={(e)=>handleClick(e, tagItem, chipControl[index]['isRed'])} />);
            }) : null}
        </div>
        <div>
          <HorizontalLine />
        </div>
        <div className={`px-3 ${styles.scroll}`}>
            {chipControl ? topicTags.map((tagItem, index) => {
              return (
                <Chip key={index} label={tagItem} variant="filled"
                sx={{ color: "#00021A", bgcolor: chipControl[index+genreTags.length]['isRed']?'#FF5C00':'#ffffff', mr: 2 }} 
                onClick={(e)=>handleClick(e, tagItem, chipControl[index+genreTags.length]['isRed'])} />
              );
              }) : null}
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
                        <img className='w-100' alt={item.title} style={{borderRadius:"20px"}} src={item.heroImage} />
                    </div>
                    <div className="pt-2" style={{zIndex:"-1"}}>
                        <div className={`${style.moduleTitle}`}>
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