import React from 'react';
import ReactPlayer from 'react-player'

export const Video = () => {
return (
<div className='px-3 pb-5' style={{fontSize: '1.5rem'}}>
    <div className='row pb-4'>
        <iframe style={{width:"100%", height:"80vh", border:"none"}}src="https://www.youtube.com/embed/xjytGvXdgqA"
            title="YouTube video player"></iframe>
    </div>
    <div className='row pb-5'>
        <div className='col-6' style={{color:"#FF5C00", fontSize: '3rem'}}>
            AS CRUST
        </div>
        <div className='col-3'>
            <div style={{fontSize: '1.2rem', color:"#FF5C00"}}>
                Tag(s):<br />
                Technology<br/>
                Automation
            </div>
        </div>
        <div className='col-3'>
            <div style={{fontSize: '1.2rem', color:"#FF5C00"}}>
                Contributor(s):<br />
                Amnesia Scanner
            </div>
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
        </div>
        <div className='col-6'>
            The Berlin-based production duo Amnesia Scanner decidedly speak in their work, focusing on the symbiosis of
            the biological and the digital through aesthetics. This recently manifested on “An Exit,” their
            collaboration with Holly Herndon right at the center of last year's Platform, a challenge to escape the
            paradigms of contemporary art. And it also played out on LEXACHAST, the duo's project with PAN label head
            Bill Kouligas. Amnesia Scanner’s fingerprints are littered across the internet’s musical bleeding edge. They
            contribute to a similar sort of shapeshifting, club-reconstructionist nebula as Arca, Lotic, and M.E.S.H. <br/><br/>

            “AS CRUST” was first showcased in Amnesia Scanner’s outstanding collage-mix hybrid, last year's AS ANGELS
            RIG HOOK. The track begins in their typically bass-heavy style, pulling no punches with snapping clicks and
            the deepest of kicks. A broken vocal melody takes the lead before being engulfed by what sounds like
            virtualized woodwind. The whole thing reeks of chemical reactions and disintegrating choppers, sour faced
            and hyperreal. It was posted with a clip of a robotic dog recovering from a man’s kick. Filtered through
            thermal imaging, a cloud emanates from the impact area and withers away. As the final video loop ends, a
            symbol is briefly teased: Amnesia Scanner leave footprints for us to follow.
        </div>
    </div>
</div>
)
}