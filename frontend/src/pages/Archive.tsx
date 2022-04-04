import React, { useEffect, useState } from "react";
import axios, {AxiosResponse} from 'axios';
import { NavBar } from '../components/navbar';
import { Issue } from '../components/issue';
import { HorizontalLine } from "../components/horizontalLine";
import { Footer } from "../components/footer";

interface Issue {
    id: number,
    issue: number,
    title: string,
    date: string,
    link: string,
}

export const Archive = () => {
    const [archive, setArchive] = useState<Issue[] | null>(null);

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/aarchitecture/archive`)
        .then((response: AxiosResponse)=>{
        setArchive(response.data)
        })
    },[])

return (
<div className='container-fluid'>
    <NavBar />
    <div className='row px-3' style={{fontSize: '1.8rem'}}>
        <div className='col w-100'>
            <table className='w-100' style={{color: '#FF5C00'}}>
                <tbody>
                {/* Placeholder; needs to be mapped from database*/}
                {archive?.map((issue,index)=> {
                    return(
                        <Issue key={index} id={issue.id} issue={issue.issue} title={issue.title} date={issue.date} link={issue.link}/>
                    )
                })
                }
                </tbody>
            </table>
        </div>
    </div>
    <HorizontalLine />
    <Footer />
</div>
)
}