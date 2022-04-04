import React from 'react';
import "./articleBlock.module.css"
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
    contributors: Array<Contributor>
}

interface TextBlock {
    id: number,
    imageLink?: string,
    imageCaption?: string,
    text: string,
}

interface BannerImageBlock {
    id: number,
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
    id: number,
    name: string,
    bio: string,
}

export const TitleBlock: React.FC<TitleBlock> = ({title, tags, contributors}) => {
    return (
        <div className='row py-5'>
            <div className='col-3' style={{color: "#FF5C00", fontSize: '1.2rem'}}>
                Tag(s):<br />
                {tags?tags.map((tag) => {
                    return(
                        <div>
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
                <div>Download PDF</div>
                <div>Share</div>
            </div>
            <div className='col-6' style={{color: "#FF5C00", fontSize: '4rem'}}>
                <div className='w-75'>
                    {title?title:null}<br />
                </div>
            </div>
            <div className='col-3'>

            </div>
        </div>
    )
}

export const TitleBlockB: React.FC<TitleBlock> = ({title, tags, contributors}) => {
    return (
        <div className='row py-5'>
            <div className='col-3' style={{color: "#FF5C00", fontSize: '1.2rem'}}>
                {title?title:null}<br />
            </div>
            <div className='col-6' style={{color: "#FF5C00", fontSize: '4rem'}}>
                Tag(s):<br />
                {tags?tags.map((tag) => {
                    return(
                        <div>
                            {tag.tag} <br />
                        </div>
                    )
                }):null}
                <br />
            </div>
            <div className='col-3'>
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
    )
}

export const TextBlock: React.FC<TextBlock> = ({id, imageLink, imageCaption, text}) => {
    return (
    <div key={id} className='row'>
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
        <div className='col-6' style={{fontSize: '1.2rem', opacity: '0.8'}}>
            {text}<br /><br />
        </div>
        <div className='col-3'></div>
    </div>
    )
}

export const BannerImageBlock: React.FC<BannerImageBlock> = ({imageLink, imageCaption}) => {
    return (
    <div className='row' style={{fontSize: '1.2rem', opacity: '0.8'}}>
        <div className='col-3'>
        </div>
        <div className='col-6'>
            <div>
                <img className={`${style.image} w-100`} src={imageLink} alt={imageCaption} />
            </div>
            <div className='pt-3 w-75' style={{fontSize: '0.8rem'}}>
                {imageCaption}
            </div>
        </div>
        <div className='col-3'>
        </div>
    </div>
    )
}

export const VideoBlock: React.FC<VideoBlock> = ({videoLink}) => {
    return (
        <div className='row py-4'>
            <video id="video" controls={true} style={{width:"100%", height:"80vh", border:"none", background:"#ffffff0f", borderRadius:"20px"}}>
                <source src={videoLink} type="video/mp4"/>
            </video>
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