import React from 'react';
import { NavBar } from '../components/navbar';
import { Hamburger } from "../components/hamburger";
import { Footer } from "../components/footer";

export const Info = () => {
return (
<div className='container-fluid'>
    <NavBar />
    <Hamburger />
    <div className='row p-3 d-flex align-items-center' style={{minHeight:'83vh',fontSize: '1.2rem', opacity: "0.8"}}>
        <div className='col-lg-8 col-12'>
            <div className='w-75'>
                About Us:<br />
                Antumbra.DAO is a decentralised autonomous broadcasting organisation founded within the Architectural Association, inspired by alternative routing of knowledge and governance. It is a space to gather, and to find chance encounter by proximity. Our community understands information as a material condition, rejecting the digital/analogue distinction in favour of a synthetic attitudes of spatial enablement. 
                <br /><br />
                Publication:<br />
                Our network-scrape, <i>Warmth</i>, will be open until December 2022. We will be publishing contributions
                from May 2022 on a rolling basis. Get in touch <a style={{color: '#FF5C00'}}
                    href="mailto: contact@antumbra.xyz">here</a> or send an email to
                contact@antumbra.xyz
                to contribute.<br /><br />
            </div>
        </div>
        <div className='col-lg-4 col-12'>
        <br />
        <img src="https://aarchitecture.blob.core.windows.net/videos/220131-Info.gif" alt="WW Gif" width="100%" height="auto"/>
        </div>
    </div>
    {/* <HorizontalLine /> */}
    <Footer />
</div>
)
}