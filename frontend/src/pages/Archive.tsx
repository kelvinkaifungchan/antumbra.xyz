import React from 'react';
import { NavBar } from '../components/navbar';
import { Issue } from '../components/issue';

export const Archive = () => {
return (
<div className='container-fluid'>
    <NavBar />
    <div className='row px-3' style={{fontSize: '1.5rem'}}>
        <div className='col w-100'>
            <table className='w-100' style={{color: '#FF5C00'}}>
                {/* Placeholder; needs to be mapped from database*/}
                <Issue id={1} number={43} title={"Untitled"} date={"Term 4 21"}/>
                <Issue id={2} number={42} title={"Firament"} date={"Term 1 21"}/>
                <Issue id={3} number={41} title={"Fenlandia"} date={"Term 3 20"}/>
                <Issue id={4} number={40} title={"Heart of the Angel"} date={"Term 1 20"}/>
                <Issue id={5} number={39} title={"A Charger for a Non-rechargeable Batter"} date={"Term 2 19"}/>
                <Issue id={6} number={38} title={"Censorship"} date={"Term 1 19"}/>
            </table>
        </div>
    </div>
</div>
)
}