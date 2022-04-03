import React from 'react';
import { TextBlock } from './textBlock';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const videoExample = {
    title: "AS CRUST",
    tags: ["Technology", "Automation", "Sound"],
    contributors: ["Amnesia Scanner"],
    textBlocks: [{text: "The Berlin-based production duo Amnesia Scanner decidedly speak in their work, focusing on the symbiosis of the biological and the digital through aesthetics. This recently manifested on “An Exit,” their collaboration with Holly Herndon right at the center of last year's Platform, a challenge to escape the paradigms of contemporary art. And it also played out on LEXACHAST, the duo's project with PAN label head Bill Kouligas. Amnesia Scanner’s fingerprints are littered across the internet’s musical bleeding edge. They contribute to a similar sort of shapeshifting, club-reconstructionist nebula as Arca, Lotic, and M.E.S.H."}, {text:"“AS CRUST” was first showcased in Amnesia Scanner’s outstanding collage-mix hybrid, last year's AS ANGELS RIG HOOK. The track begins in their typically bass-heavy style, pulling no punches with snapping clicks and the deepest of kicks. A broken vocal melody takes the lead before being engulfed by what sounds like virtualized woodwind. The whole thing reeks of chemical reactions and disintegrating choppers, sour faced and hyperreal. It was posted with a clip of a robotic dog recovering from a man’s kick. Filtered through thermal imaging, a cloud emanates from the impact area and withers away. As the final video loop ends, a symbol is briefly teased: Amnesia Scanner leave footprints for us to follow."}],
    videoLink: "https://aarchitecture.blob.core.windows.net/videos/AS%20Crust.mp4"
}

export const Video = () => {
    let params = useParams();
    const getArticleFile = () => {
        axios(`http://localhost:8080/api/aarchitecture/article/?articleId=${params.id}`,{
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                withCredentials: true,
                mode: 'no-cors'
              }})
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    getArticleFile()
return (
<div className='px-3 pb-5' style={{fontSize: '1.5rem'}}>
    <div className='row pb-4'>
        {/* <iframe style={{width:"100%", height:"80vh", border:"none"}} src={videoExample.videoLink}
            title="Test"></iframe> */}
    <video id="video" controls={true} style={{width:"100%", height:"80vh", border:"none", background:"black"}}>
        <source src={videoExample.videoLink}
            type="video/mp4"/>
    </video>
    </div>
    <div className='row pb-5'>
        <div className='col-6' style={{color:"#FF5C00", fontSize: '3rem'}}>
            {videoExample.title}
        </div>
        <div className='col-3'>
            <div style={{fontSize: '1.2rem', color:"#FF5C00"}}>
                Tag(s):<br />
                {videoExample.tags.map((tag) => {
                    return(
                        <div>
                            {tag}<br/>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='col-3'>
            <div style={{fontSize: '1.2rem', color:"#FF5C00"}}>
                Contributor(s):<br />
                {videoExample.contributors.map((contributor) => {
                    return (
                        <div>
                            {contributor}
                            <br/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    {videoExample.textBlocks.map((text,index) => {
        return(
        <TextBlock key={index} text={text.text}/>
        )
    })}
</div>
)
}