import styles from './articleModule.module.css'
import { useNavigate } from "react-router-dom";

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

export const ArticleModule: React.FC<Card> =({title, heroImage, subtitle, contributors}) => {
    return (
        <div className={`${styles.module}`} style={{height: "100%"}}>
            <div className={styles.card} style={{zIndex:"1"}}>
                <img className='w-100' style={{borderRadius:"20px"}} src={heroImage} />
            </div>
            <div className="pt-2" style={{zIndex:"-1"}}>
                <div style={{fontSize:"3rem", lineHeight:"3.5rem"}}>
                    {title}<br/>
                </div>
                <div className="pb-2" style={{fontSize: '1.2rem'}}>
                    {contributors ? contributors.map((contributor, index) => {
                        return(
                            <div key={index}>
                                {contributor.name}<br />
                            </div>
                        )
                    }):null}
                </div>
                <div style={{background:"none"}}>
                    {subtitle}..<br /><br />
                </div>
            </div>
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