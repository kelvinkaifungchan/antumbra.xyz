import React from 'react';
import { NavBar } from '../components/navbar';
import { Issue } from '../components/issue';

export const Archive = () => {
return (
<div className='container-fluid'>
    <NavBar />
    <div className='row px-3' style={{fontSize: '2rem'}}>
        <div className='col w-100'>
            <table className='w-100' style={{color: '#FF5C00'}}>
                {/* Placeholder; needs to be mapped from database*/}
                <Issue number={43} title={"Untitled"} date={"Term 4 21"}/>
                <Issue number={42} title={"Firament"} date={"Term 1 21"}/>
                <Issue number={41} title={"Fenlandia"} date={"Term 3 20"}/>
                <Issue number={40} title={"Heart of the Angel"} date={"Term 1 20"}/>
                <Issue number={39} title={"A Charger for a Non-rechargeable Batter"} date={"Term 2 19"}/>
                <Issue number={38} title={"Censorship"} date={"Term 1 19"}/>
            </table>
        </div>
    </div>
</div>
)
}