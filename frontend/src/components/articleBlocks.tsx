import React, { useEffect, useState } from "react";
import { HtmlRenderer, Parser } from 'commonmark'
import style from './articleBlock.module.css'


interface Contributor {
    id: number,
    name: string,
    bio: string,
}

interface Tag {
    id: number,
    tag: string
}

interface TitleBlock {
    title: string,
    tags: Array<Tag>,
    contributors: Array<Contributor>,
    text?: string,
    pdf?: string
}

interface TextBlock {
    imageLink?: string,
    imageCaption?: string,
    text: string,
}

interface BannerImageBlock {
    imageLink: string,
    imageCaption: string,
}

interface VideoBlock {
    videoLink: string,
}

interface FootnoteBlock {
    references: Array<string>
}

interface ContributorBioBlock {
    name: string,
    bio: string,
}

interface ArticleModule {
    id: number,
    type: string
    contributors: Array<Contributor>,
    title: string,
    subtitle: string,
    heroImage: string,
    pdf: string,
    datePublished: string,
    tags: Array<Tag>,
  }

interface ArticleList {
    articles?: ArticleModule[]
}

export const TitleBlock: React.FC<TitleBlock> = ({title, tags, contributors, pdf}) => {
    return (
        <div className='row py-5'>
            <div className='col-3'>
            </div>
            <div className='col-6' style={{textAlign:"left", color: "#FF5C00", letterSpacing:"-0.07rem"}}>
                <div className='w-75' style={{fontSize: '4rem'}}>
                    {title?title:null}<br />
                </div>
                <div>
                    <br/>
                {contributors?contributors.map((contributor, index) => {
                    return(
                        <div key={index} style={{fontSize:"2rem"}}>
                            {contributor.name}<br />
                        </div>
                    )
                }):null}
                </div>
            </div>
            <div className='col-3'>

            </div>
        </div>
    )
}

export const SidePanel: React.FC<TitleBlock> = ({title, tags, contributors, pdf}) => {
    const [scroll, setScroll] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 300);
        })
        },[])

    return (
        <div className="row py-5 w-100" style={scroll ? {position:"fixed", opacity:"1", transition:"0.5s"} : {position:"fixed", opacity:"0", transition:"0.5s"}}>
            <div className='col-6' style={{color: "#FF5C00", fontSize: '1.2rem', width:"100%"}}>
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
            <div className='col-6'>

            </div>
        </div>
    )
}

export const TitleBlockB: React.FC<TitleBlock> = ({title, tags, contributors}) => {
    return (
        <div className='row'>
            <div className='col-6'>
                <div className="w-75 pb-3" style={{color: "#FF5C00", fontSize: '3rem', lineHeight:'3.5rem', letterSpacing:"-0.07rem"}}>
                 {title?title:null}
                </div>
            </div>
            <div className="col-3">
            <div style={{color: "#FF5C00", fontSize: '1.2rem'}}>
                Tag(s):<br />
                {tags?tags.map((tag) => {
                    return(
                        <div>
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

export const TextBlockRight: React.FC<TextBlock> = ({text}) => {
    
    const [mark, setMark] = useState("Loading...");
    
    useEffect(() => {
        const parser = new Parser()
        const renderer = new HtmlRenderer()
          setMark(renderer.render(parser.parse(text)))
      })

    return (
    <div className='row'>
        <div className='col-6'>
        </div>
        <div className='col-6' style={{fontSize: '1.2rem', opacity: '0.8'}}>
            <div dangerouslySetInnerHTML={{__html: mark}}>
            </div>
        </div>
    </div>
    )
}

export const TextBlock: React.FC<TextBlock> = ({imageLink, imageCaption, text}) => {
    
    const [mark, setMark] = useState("Loading...");
    
    useEffect(() => {
        const parser = new Parser()
        const renderer = new HtmlRenderer()
          setMark(renderer.render(parser.parse(text)))
      })

    return (
    <div className='row'>
        <div className='col-3'>
        </div>
        <div className='col-6' style={{fontSize: '1.2rem', opacity: '0.8'}}>
            <div dangerouslySetInnerHTML={{__html: mark}}>
            </div>
        </div>
        <div className='col-3'>
        <div className='row pb-5 pr-5'>
                <div>
                    <img className={`${style.image} w-75`} src={imageLink} alt={imageCaption} />
                </div>
                <div className='pt-3 w-75' style={{fontSize: '0.8rem'}}>
                    {imageCaption}
                </div>
            </div>
        </div>
    </div>
    )
}

export const BannerImageBlock: React.FC<BannerImageBlock> = ({imageLink, imageCaption}) => {
    return (
    // <div className='row py-5' style={{fontSize: '1.2rem', opacity: '0.8'}}>
    //     <div className='col-2'>
    //     </div>
    //     <div className='col-8'>
    //         <div>
    //             <img className={`${style.image} w-100`} src={imageLink} alt={imageCaption} />
    //         </div>
    //         <div className='pt-3 w-100' style={{fontSize: '0.8rem'}}>
    //             {imageCaption}
    //         </div>
    //     </div>
    //     <div className='col-2'>
    //     </div>
    // </div>
    <div className='row py-5' style={{fontSize: '1.2rem', opacity: '0.8'}}>
        <div className='col-4'>
        </div>
        <div className='col-4 align-items-center'>
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

export const QuoteBlock: React.FC<TextBlock> = ({text}) => {
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

export const VideoBlock: React.FC<VideoBlock> = ({videoLink}) => {
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

export const ImageCarouselBlock: React.FC<VideoBlock> = ({videoLink}) => {
    return (
        <div className='row py-4'>
            <video id="video" controls={true} style={{width:"100%", height:"80vh", border:"none", background:"#ffffff0f", borderRadius:"20px"}}>
                <source src={videoLink} type="video/mp4"/>
            </video>
            {/* <iframe src={videoLink}
            style={{width:"100%", height:"80vh", border:"none", background:"#ffffff0f", borderRadius:"20px"}} allow="autoplay; fullscreen;"></iframe> */}
        </div>
    )
}

export const FootnoteBlock: React.FC<FootnoteBlock> = ({references}) => {
    return (
    <div className='row'>
        <div className='col-3'>
            <div className='row pb-5 pr-5'>
                <div>
                </div>
                <div className='pt-3 w-75'>
                </div>
            </div>
        </div>
        <div className='col-6' style={{fontSize: '1.2rem', opacity: '0.8'}}>
            Notes <br />
            {references.map((reference, index) => {
            return (<div>
                {index+1}. {reference}
                <br />
            </div>
            )
            })}
            <br />

        </div>
        <div className='col-3'>

        </div>
    </div>
    )
}

export const ContributorBioBlock: React.FC<ContributorBioBlock> = ({name, bio}) => {
    return (
    <div className='row' style={{fontSize: '1.2rem', opacity: '0.8'}}>
        <div className='col-3'>
        </div>
        <div className='col-6'>
            <div className='row'>
                <div className='col-3'>
                    {name}
                </div>
                <div className='col-9'>
                    {bio}
                    <br /><br />
                </div>
            </div>
        </div>
        <div className='col-3'>
        </div>
    </div>
    )
}