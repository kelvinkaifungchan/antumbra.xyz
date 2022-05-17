import React, { useEffect, useState } from "react";
import { ArticleModule, ArticleBlockData, Contributor, Tag, TitleData, BannerImageData, VideoData, TextData } from "../types"
import { HtmlRenderer, Parser } from 'commonmark';
import style from './articleBlock.module.css'
import styles from '../pages/Home.module.css'

export const TitleBlock: React.FC<TitleData> = ({title, tags, contributors, pdf}) => {
    return (
        <>
            <div className="row py-5">
                <div className='col-1 col-lg-3'>
                </div>
                <div className={`col-10 col-lg-6 ${styles.fontTitle}`} style={{textAlign:"left", color: "#FF5C00", letterSpacing:"-0.07rem"}}>
                    <div className='w-75'>
                        {title?title:null}<br />
                    </div>
                    <div>
                        <br/>
                    {contributors?contributors.map((contributor, index) => {
                        return(
                            <div key={index} className={`${styles.fontSubtitle}`}>
                                {contributor.name}<br />
                            </div>
                        )
                    }):null}
                    </div>
                </div>
            </div>
        </>
    )
}

export const SidePanel: React.FC<TitleData> = ({title, tags, contributors, pdf}) => {
    const [scroll, setScroll] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 300);
        })
        },[])

    return (
        <div className="row py-5 w-100" style={scroll ? {position:"fixed", opacity:"1", transition:"0.5s", zIndex:"-1"} : {position:"fixed", opacity:"0", transition:"0.5s", zIndex:"-1"}}>
            <div className='col-3' style={{color: "#FF5C00", fontSize: '1.2rem', width:"100%"}}>
                Tag(s):<br />
                {tags?tags.map((tag, index) => {
                    return(
                        <div key={index}>
                            {tag.tag} <br />
                        </div>
                    )
                }):null}<br />
                
                Contributor(s):
                {contributors?contributors.map((contributor, index) => {
                    return(
                        <div key={index}>
                            {contributor.name} <br />
                        </div>
                    )
                }):null}
                <br/>
                {pdf ? <div><a href={pdf} target={"blank"}>PDF</a></div> : null}
                {/* <div><a href={pdf} target={"blank"}>Share</a></div> */}
            </div>
        </div>
    )
}

export const TitleBlockB: React.FC<TitleData> = ({title, tags, contributors}) => {
    return (
        <div className='row'>
            <div className={`col-10 col-lg-6 ${styles.fontTitle}`}>
                <div className="w-75 pb-3" style={{color: "#FF5C00", fontSize: '3rem', lineHeight:'3.5rem', letterSpacing:"-0.07rem"}}>
                 {title?title:null}
                </div>
            </div>
            <div className="col-12 col-lg-3">
            <div style={{color: "#FF5C00", fontSize: '1.2rem'}}>
                Tag(s):<br />
                {tags?tags.map((tag, index) => {
                    return(
                        <div key={index}>
                            {tag.tag}
                        </div>
                    )
                }):null}
                <br />
                </div>
            </div>
            <div className="col-3">
            <div style={{color: "#FF5C00", fontSize: '1.2rem'}}>
                Contributor(s):
                    {contributors?contributors.map((contributor, index) => {
                        return(
                            <div key={index}>
                                {contributor.name} <br />
                            </div>
                        )
                    }):null}
                <br/>
                </div>
            </div>
        </div>
    )
}

export const TextBlockRight: React.FC<TextData> = ({text}) => {
    
    const [mark, setMark] = useState("Loading...");
    
    useEffect(() => {
        const parser = new Parser()
        const renderer = new HtmlRenderer()
          setMark(renderer.render(parser.parse(text)))
      })

    return (
    <div className='row'>
        <div className='col-1 col-lg-6'>
        </div>
        <div className={`col-10 col-lg-6 ${styles.fontBody}`}>
            <div dangerouslySetInnerHTML={{__html: mark}}>
            </div>
        </div>
    </div>
    )
}

export const TextBlock: React.FC<TextData> = ({text}) => {
    
    const [mark, setMark] = useState("Loading...");
    
    useEffect(() => {
        const parser = new Parser()
        const renderer = new HtmlRenderer()
          setMark(renderer.render(parser.parse(text)))
      })

    return (
    <div className='row'>
        <div className='col-1 col-lg-3'>
        </div>
        <div className={`col-10 col-lg-6 ${styles.fontBody}`}>
            <div dangerouslySetInnerHTML={{__html: mark}}>
            </div>
        </div>
    </div>
    )
}

export const TextBlockSparse: React.FC<TextData> = ({text}) => {
    
    const [mark, setMark] = useState("Loading...");
    
    useEffect(() => {
        const parser = new Parser()
        const renderer = new HtmlRenderer()
          setMark(renderer.render(parser.parse(text)))
      })
    return (
        
    <div className='row py-5 my-5' style={{height:"100vh", borderRadius:"20px", background:"#c2bebe10",}}>
        <div className='col-1 col-lg-3'>
        </div>
        <div className='d-flex align-items-center col-10 col-lg-6' style={{fontSize: '1.2rem', letterSpacing:'-0.02rem', opacity: '0.8'}}>
            <div dangerouslySetInnerHTML={{__html: mark}}>
            </div>
        </div>
    </div>
    )
}

export const BannerImageBlockStart: React.FC<BannerImageData> = ({imageLink, imageCaption}) => {
    return (
    <div className='row py-5' style={{fontSize: '1.2rem', opacity: '0.8'}}>
        <div className='col-1 col-lg-3'>
        </div>
        <div className='col-10 col-lg-6 align-items-center'>
            <div className="d-flex justify-content-start">
                <img className={`${style.image}`} src={imageLink} alt={imageCaption} />
            </div>
            <div className='pt-3 w-100' style={{fontSize: '0.8rem'}}>
                {imageCaption}
            </div>
        </div>
    </div>
    
    )
}

export const BannerImageBlockCenter: React.FC<BannerImageData> = ({imageLink, imageCaption}) => {
    return (
    <div className='row py-5' style={{fontSize: '1.2rem', opacity: '0.8'}}>
        <div className='col-3'>
        </div>
        <div className='col-5 align-items-center'>
            <div className="d-flex justify-content-center">
                <img className={`${style.image}`} style={{minHeight:"60vh", maxHeight:"60vh", width:"auto", height:"auto"}} src={imageLink} alt={imageCaption} />
            </div>
            <div className='pt-3 w-100' style={{fontSize: '0.8rem'}}>
                {imageCaption}
            </div>
        </div>
        <div className='col-4'>
        </div>
    </div>
    )
}

export const BannerImageBlockFill: React.FC<BannerImageData> = ({imageLink, imageCaption}) => {
    return (
    <div className='row py-5 my-5' style={{height:"100vh", borderRadius:"20px", fontSize: '1.2rem', background:"#c2bebe10", zIndex:"900"}}>
        <div className='col-1 col-lg-3'>
        </div>
        <div className='col-10 col-lg-6 d-flex align-items-center'>
            <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <img className={`${style.image}`} src={imageLink} alt={imageCaption} />
            </div>
            <div className='col-12 d-flex justify-content-center pt-3 w-100' style={{fontSize: '0.8rem', opacity:"0.8"}}>
                {imageCaption}
            </div>
            </div>
        </div>
        <div className='col-4'>
        </div>
    </div>
    )
}

export const QuoteBlock: React.FC<TextData> = ({text}) => {
    return (
        <div className='row py-5 d-flex justify-content-center'>
            <div className='col-4 d-flex justify-content-center'>
                <div style={{fontSize:"1.2rem", opacity:"0.8"}}>
                    <i>
                        {text}
                    </i>
                </div>
            </div>
        </div>
    )
}

export const VideoBlock: React.FC<VideoData> = ({videoLink}) => {
    return (
        <div className='row py-4'>
            <video id="video" controls={true} style={{width:"100%", height:"80vh", border:"none", background:"#000000", borderRadius:"20px"}}>
                <source src={videoLink} type="video/mp4"/>
            </video>
            {/* <iframe src={videoLink}
            style={{width:"100%", height:"80vh", border:"none", background:"#ffffff0f", borderRadius:"20px"}} allow="autoplay; fullscreen;"></iframe> */}
        </div>
    )
}

// export const FootnoteBlock: React.FC<FootnoteBlock> = ({references}) => {
//     return (
//     <div className='row'>
//         <div className='col-3'>
//             <div className='row pb-5 pr-5'>
//                 <div>
//                 </div>
//                 <div className='pt-3 w-75'>
//                 </div>
//             </div>
//         </div>
//         <div className='col-6' style={{fontSize: '1.2rem', opacity: '0.8'}}>
//             Notes <br />
//             {references.map((reference, index) => {
//             return (<div>
//                 {index+1}. {reference}
//                 <br />
//             </div>
//             )
//             })}
//             <br />

//         </div>
//         <div className='col-3'>

//         </div>
//     </div>
//     )
// }

export const ContributorBioBlock = ({contributors}: {contributors: Contributor[]}) => {
    return (
    <>
    <div className={`${styles.fontBody} row pt-5`}>
        <div className='col-1 col-lg-3'>
        </div>
        <div className='col-10 col-lg-6'>
            <i>Biographies</i>
        </div>
    </div>
    {contributors.map((contributor, i) => {
    return (
    <div key={i} className={`${styles.fontBody} row pt-3`}>
        <div className='col-1 col-lg-3'>
        </div>
        <div className='col-10 col-lg-6'>
            <i>{contributor.name}</i> {contributor.bio}
        </div>
    </div>
    )
    })}
    </>
    

    )
}


export const ContributorBioBlockRight = ({contributors}: {contributors: Contributor[]}) => {
    return (
    <>
    <div className={`${styles.fontBody} row pt-5`}>
        <div className='col-1 col-lg-6'>
        </div>
        <div className='col-10 col-lg-6'>
            <i>Biographies</i>
        </div>
    </div>
    {contributors.map((contributor, i) => {
    return (
    <div key={i} className={`${styles.fontBody} row pt-3`}>
        <div className='col-1 col-lg-6'>
        </div>
        <div className='col-10 col-lg-6'>
            <i>{contributor.name}</i> {contributor.bio}
        </div>
    </div>
    )
    })}
    </>
    

    )
}