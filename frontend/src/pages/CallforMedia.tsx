import React from 'react';
import { Footer } from '../components/footer';
import { Hamburger } from '../components/hamburger';
import { NavBar } from '../components/navbar';
import styles from './Home.module.css'

export const CallForMedia = () => {
return (
<div className='container-fluid'>
    <NavBar />
    <Hamburger />
    <div className={`row px-3 ${styles.fontBody}`} style={{minHeight:"80vh", opacity:"0.8"}}>
        <div className='col-12 col-lg-6 py-5'>
            To be warm, is to gather.<br/>
            It is an intermediary space.<br/><br/>

            This network scrape was originally titled ‘The Warm War’, but the archivists felt it was crucial to reframe
            the discussion in the midst / mist of ongoing conflict.<br/><br/>

            The Warm War is an intermediary space. It’s not quite the Cold War: the open hostility, espionage and
            nuclear dread that made up the power struggle between Federalism and Communism. Neither is it a ‘hot’ war: a
            carving of a boundary through total violence. The Warm War is a murkier conflict.<br/><br/>
            We find ourselves in a condition where we struggle to find proximity to one another- Imagining ourselves to
            be bound by logistical infrastructures that battle with an ongoing need to share and embrace different modes
            of living and thinking.<br/><br/>

            These wars are being fought with technocratic instruments, where operatives traverse planetary
            infrastructures with covert military operations, insidious new modes of combat, deceptive targeting, and
            backroom policy transformation.<br/><br/>

            It is data warfare; never virtual, always material.
            Information and misinformation flow through social media and mobile feeds.<br/><br/>

            For policy makers, military and corporate strategists, these noise machines become a battleground. This
            shifting axis of conflict continuously thickens and thins boundaries of negotiation.<br/><br/>

            One message pierce through the noise. Findings from the IPCC’s 6th Climate Report in 2021 show that we are
            at a tipping point for action. Multiple and complex changes are already underway in every part of our
            planet, and we can ‘expect global temperature to reach or exceed 1.5°C of warming over the next 20 years’.
            The headline is trotted out so often that we forget the rupture that is implied.<br/><br/>


            To be warm is to be convivial, to allow uncertainty and chance within a conflict of spatial re-organisation
            in which animals, vegetation and minerals are irreducibly entangled. In this complex knot of material and
            knowledge networks, tethered and untethered, separated and yet enmeshed, we must move past the semiotic
            noise operations reducing action to a series of signs, fake targets, unthinking clichés, memes, hot air.<br/><br/>

            Let’s gather and find warmth in this intermediary space.
        </div>
    </div>
    <Footer />
</div>
)
}