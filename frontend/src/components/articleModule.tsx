import styles from './articleModule.module.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

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

export const ArticleModule =({articles} : {articles:ArticleModule[]}) => {
    
    const [articleList, setArticleList] = useState<ArticleModule[] | null>(null);
    useEffect(() => {
        setArticleList(articles)
    })

    let navigate = useNavigate();
    const handleNav = (e: any, id: number, type:string) => {
        navigate(`/${type}/${id}`);
        }

    return (
        <div className="row px-3">
            {articles.map((item, index) => {
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
            })}
        </div>
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