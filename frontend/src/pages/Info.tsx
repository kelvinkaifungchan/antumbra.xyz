import React from 'react';
import { NavBar } from '../components/navbar';
import { HorizontalLine } from "../components/horizontalLine";
import { Footer } from "../components/footer";

export const Info = () => {
return (
<div className='container-fluid'>
    <NavBar />
    <div className='row p-3 d-flex align-items-center' style={{minHeight:'78vh',fontSize: '1.2rem', opacity: "0.8"}}>
        <div className='col-lg-8 col-md-12'>
            <div className='w-75'>
                About Us:<br />
                AArchitecture is the student-run magazine of the Architectural Association and welcomes
                contributions from all professions and perspectives.<br /><br />
                Format of Contributions:<br />
                As we are transitioning from a print magazine into an online publication, we will be increasing
                the range of contribution media beyond writing, to include photography, films, and artwork
                amongst others.<br /><br />
                At the end of the editorial cycle an anthology will be published, bringing together online
                contributions to AArchitecture in physical form.
                <br /><br />
                Online Publication:<br />
                The Warm War call for media will be open until June 2022. We will be publishing contributions
                from April 2022 on a rolling basis. Get in touch <a style={{color: '#FF5C00'}}
                    href="mailto: aarchitecture@aaschool.ac.uk">here</a> or send an email to
                aarchitecture@aaschool.ac.uk
                to contribute.<br /><br />
            </div>
        </div>
        <div className='col-lg-4 col-md-12'>
        <br />
        <img src="https://aarchitecture.blob.core.windows.net/videos/220131-Info.gif" alt="Architectural Association" width="100%" height="auto"/>
        </div>
    </div>
    {/* <HorizontalLine /> */}
    <Footer />
</div>
)
}