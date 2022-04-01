import React from 'react';
import styles from './articleModule.module.css'

interface Props {
    title: string,
    heroImage: string,
    subtitle: string,
    contributors: Array<string>
}

export const ArticleModule = (props: Props) => {
    return (
        // <div style={{ backgroundImage:`url("${props.heroImage}")`, width:'auto', height:'100%', backgroundRepeat:'no-repeat', backgroundSize:'auto', borderRadius:'9'}}>
        <div className={styles.module} style={{height: "100%"}}>
        <div style={{color:"#FF5C00", backgroundImage:`url("${props.heroImage}")`, minHeight:"85%", backgroundSize:"cover", borderRadius:"5px"}}>
            <div className='px-3 pt-3' style={{fontSize:"3rem"}}>{props.title}</div><br/>
        </div>
        <div className='p-3' style={{background:"none"}}>
            {props.subtitle}..<br/>
        </div>
        </div>
    )
}