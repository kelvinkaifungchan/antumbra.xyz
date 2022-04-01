import React from 'react';
import { NavBar } from '../components/navbar';
import { Issue } from '../components/issue';

const archive = [
    {
        id: 43,
        issue: 43,
        title: "Untitled",
        date: "2021",
        link: "https://issuu.com/aaschool/docs/220218_aarchitecture_43_web_pages_high-res"
    },
    {
        id: 42,
        issue: 42,
        title: "Firament",
        date: "2021",
        link: "https://issuu.com/aaschool/docs/210802_aarchitecture_42_web_high-res"
    },
    {
        id: 41,
        issue: 41,
        title: "Fenlandia",
        date: "2020",
        link: "https://issuu.com/aaschool/docs/200904_aarchitecture_41_fen_digi_pages"
    },
    {
        id: 40,
        issue: 40,
        title: "Heart of the Angel",
        date: "2020",
        link: "https://issuu.com/aaschool/docs/200713_aarchitecture_40_angel_issue_digi_p"
    },
    {
        id: 39,
        issue: 39,
        title: "A Charger for a Non-rechargeable Battery",
        date: "2019",
        link: "https://issuu.com/aaschool/docs/210202_aarchitecture_39_charger_issuu_144dpi"
    },
    {
        id: 38,
        issue: 38,
        title: "Censorship",
        date: "2019",
        link: "https://issuu.com/aaschoValol/docs/191009_aarchitecture_38_censorship"
    },
    {
        id: 37,
        issue: 37,
        title: "Recognition",
        date: "2018",
        link: "https://issuu.com/aaschool/docs/190520_aarchitecture_37_recognition_digital"
    },
    {
        id: 36,
        issue: 36,
        title: "(In)Security",
        date: "2018",
        link: "https://issuu.com/aaschool/docs/190313_aarchitecture_36_security_in"
    },
    {
        id: 35,
        issue: 35,
        title: "Compromise",
        date: "2017",
        link: "https://issuu.com/aaschool/docs/180903_aarchitecture_35_compromise_"
    },
    {
        id: 34,
        issue: 34,
        title: "Collision",
        date: "2017",
        link: "https://issuu.com/aaschool/docs/180501_aarchitecture_34_collision_f"
    },
    {
        id: 33,
        issue: 33,
        title: "Desire",
        date: "2017",
        link: "https://issuu.com/aaschool/docs/aarchitecture33"
    },
    {
        id: 32,
        issue: 32,
        title: "Curating Architecture",
        date: "2017",
        link: "https://issuu.com/aaschool/docs/aarchitecture32"
    },
    {
        id: 31,
        issue: 31,
        title: "Protocol",
        date: "2017",
        link: "https://issuu.com/aaschool/docs/aarchitecture31"
    },
    {
        id: 29,
        issue: 29,
        title: "Value",
        date: "2016",
        link: "https://issuu.com/aaschool/docs/161002_aarchitecture_29_final_web"
    },
    {
        id: 28,
        issue: 28,
        title: "Boundary",
        date: "2016",
        link: "https://issuu.com/aaschool/docs/full_aarchitecture_28_web_pages"
    },
    {
        id: 27,
        issue: 27,
        title: "{Theme}",
        date: "2016",
        link: "https://issuu.com/aaschool/docs/full_aarchitecture_28_web_pages"
    },
    {
        id: 26,
        issue: 26,
        title: "Non-Sense",
        date: "2015",
        link: "https://issuu.com/aaschool/docs/aarchitecture_26"
    },
    {
        id: 25,
        issue: 25,
        title: "Deadlines",
        date: "2015",
        link: "https://issuu.com/aaschool/docs/aarchitecture_25"
    },
    {
        id: 24,
        issue: 24,
        title: "Escapes",
        date: "2015",
        link: "https://issuu.com/aaschool/docs/150220_aarchitecture_24_single_web"
    },
    {
        id: 23,
        issue: 23,
        title: "Health and Safety",
        date: "2014",
        link: "https://issuu.com/aaschool/docs/aarchitecture23"
    },
    {
        id: 22,
        issue: 22,
        title: "Language",
        date: "2014",
        link: "https://issuu.com/aaschool/docs/140520_aarchitecture_22_preview_ful"
    },
    {
        id: 21,
        issue: 21,
        title: "Paper",
        date: "2014",
        link: "https://issuu.com/aaschool/docs/140128_aarchitecture_21_preview_sin"
    },
    {
        id: 20,
        issue: 20,
        title: "Time",
        date: "2013",
        link: "https://issuu.com/aaschool/docs/aarchitecture_20"
    },
    {
        id: 19,
        issue: 19,
        title: "Stuff",
        date: "2013",
        link: "https://issuu.com/aaschool/docs/aarchitecture19"
    },
    {
        id: 18,
        issue: 18,
        title: "Architecture As Research",
        date: "2012",
        link: "https://issuu.com/aaschool/docs/130108_aarchitecture_18_art_full_low_single"
    },
    {
        id: 17,
        issue: 17,
        title: "Curating Architecture",
        date: "2012",
        link: "https://issuu.com/aaschool/docs/aarchitecture17"
    },
    {
        id: 16,
        issue: 16,
        title: "Life After The AA",
        date: "2012",
        link: "https://issuu.com/aaschool/docs/aarchitecture16"
    },
    {
        id: 15,
        issue: 15,
        title: "News from the Architectural Association",
        date: "2012",
        link: "https://issuu.com/aaschool/docs/110805_aarchitecture15_full_web_1"
    },
    {
        id: 14,
        issue: 14,
        title: "News from the Architectural Association",
        date: "2011",
        link: "https://issuu.com/aaschool/docs/aarchitecture14"
    },
    {
        id: 13,
        issue: 13,
        title: "News from the Architectural Association",
        date: "2010",
        link: "https://issuu.com/aaschool/docs/aarchitecture13"
    },
    {
        id: 12,
        issue: 12,
        title: "News from the Architectural Association",
        date: "2010",
        link: "https://issuu.com/aaschool/docs/aarchitecture12"
    },
    {
        id: 11,
        issue: 11,
        title: "News from the Architectural Association",
        date: "2010",
        link: "https://issuu.com/aaschool/docs/aarchitecture11"
    },
    {
        id: 10,
        issue: 10,
        title: "News from the Architectural Association",
        date: "2009",
        link: "https://issuu.com/aaschool/docs/aarchitecture10"
    },
    {
        id: 9,
        issue: 9,
        title: "News from the Architectural Association",
        date: "2009",
        link: "https://issuu.com/aaschool/docs/aarchitecture09ocr"
    },
    {
        id: 8,
        issue: 8,
        title: "News from the Architectural Association",
        date: "2009",
        link: "https://issuu.com/aaschool/docs/aarchitecture08ocr"
    },
    {
        id: 7,
        issue: 7,
        title: "News from the Architectural Association",
        date: "2008",
        link: "https://issuu.com/aaschool/docs/aarchitecture07ocr"
    },
    {
        id: 6,
        issue: 6,
        title: "News from the Architectural Association",
        date: "2008",
        link: "https://issuu.com/aaschool/docs/aarchitecture06ocr"
    },
    {
        id: 5,
        issue: 5,
        title: "News from the Architectural Association",
        date: "2007",
        link: "https://issuu.com/aaschool/docs/aarchitecture05ocr"
    },
    {
        id: 4,
        issue: 4,
        title: "News from the Architectural Association",
        date: "2007",
        link: "https://issuu.com/aaschool/docs/aarchitecture04ocr"
    },
    {
        id: 3,
        issue: 3,
        title: "News from the Architectural Association",
        date: "2007",
        link: "https://issuu.com/aaschool/docs/aarchitecture03ocr"
    },
    {
        id: 2,
        issue: 2,
        title: "News from the Architectural Association",
        date: "2007",
        link: "https://issuu.com/aaschool/docs/aarchitecture02ocr"
    },
    {
        id: 1,
        issue: 1,
        title: "News from the Architectural Association",
        date: "2006",
        link: "https://issuu.com/aaschool/docs/aarchitecture01ocr"
    },
  ];

export const Archive = () => {
return (
<div className='container-fluid'>
    <NavBar />
    <div className='row px-3' style={{fontSize: '1.5rem'}}>
        <div className='col w-100'>
            <table className='w-100' style={{color: '#FF5C00'}}>
                {/* Placeholder; needs to be mapped from database*/}
                {archive.map((issue)=> {
                    return(
                        <Issue id={issue.id} issue={issue.issue} title={issue.title} date={issue.date} link={issue.link}/>
                    )
                })
                }
            </table>
        </div>
    </div>
</div>
)
}