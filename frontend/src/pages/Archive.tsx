import { IssueData } from "../types"
import React, { useEffect, useState } from "react";
import axios, {AxiosResponse} from 'axios';
import { NavBar } from '../components/navbar';
import { Issue } from '../components/issue';
import { Footer } from "../components/footer";
import { Hamburger } from "../components/hamburger";

export const Archive = () => {
    const [archive, setArchive] = useState<IssueData[] | null>(null);

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/aarchitecture/archive`)
        .then((response: AxiosResponse)=>{
        setArchive(response.data)
        })
    },[])

return (
<div className='container-fluid'>
    <NavBar />
    <Hamburger />
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
    <Footer />
</div>
)
}